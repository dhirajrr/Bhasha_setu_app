import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
} from "react-native";
import { getQuiz } from "../Quize/quizService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StudentTestScreen: React.FC = ({ navigation }: any) => {
  const [quiz, setQuiz] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const fetchedQuiz = await getQuiz();
        setQuiz(fetchedQuiz);
      } catch (error) {
        Alert.alert("Error", "Failed to load quiz");
      }
    };

    fetchQuiz();
  }, []);

  const saveResult = async () => {
    const results = {
      id: Date.now().toString(),
      score,
      total: quiz.length,
      date: new Date().toLocaleDateString(),
    };
    try {
      const existingResults = await AsyncStorage.getItem("quizResults");
      const parsedResults = existingResults ? JSON.parse(existingResults) : [];
      parsedResults.push(results);
      await AsyncStorage.setItem("quizResults", JSON.stringify(parsedResults));
    } catch (error) {
      console.error("Failed to save results:", error);
    }
  };

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    if (option === quiz[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < quiz.length - 1) {
      Animated.timing(progress, {
        toValue: (currentQuestion + 1) / quiz.length,
        duration: 500,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        setSelectedOption(null);
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      saveResult();
      navigation.navigate("QuizResultScreen", { score, total: quiz.length });
    }
  };

  if (quiz.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          No quiz available. Ask the teacher to create a quiz.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
      <Text style={styles.question}>{quiz[currentQuestion].question}</Text>
      {quiz[currentQuestion].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selectedOption === option &&
              (option === quiz[currentQuestion].answer
                ? styles.correctOption
                : styles.incorrectOption),
          ]}
          onPress={() => handleOptionPress(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f4f4f9" },
  question: { fontSize: 24, marginBottom: 20, fontWeight: "bold", color: "#333" },
  optionButton: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  correctOption: { backgroundColor: "#81C784" },
  incorrectOption: { backgroundColor: "#E57373" },
  optionText: { fontSize: 18, color: "#333", fontWeight: "600" },
  errorText: { fontSize: 18, color: "red", textAlign: "center" },
  progressBarContainer: {
    height: 10,
    width: "100%",
    backgroundColor: "#e0e0e0",
    marginBottom: 20,
    borderRadius: 5,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#76c7c0",
    borderRadius: 5,
  },
});

export default StudentTestScreen;
