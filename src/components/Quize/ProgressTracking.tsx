import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface QuizResult {
  id: string;
  score: number;
  total: number;
  date: string;
}

const ProgressTrackingScreen: React.FC = ({ navigation }: any) => {
  const [results, setResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const savedResults = await AsyncStorage.getItem("quizResults");
        setResults(savedResults ? JSON.parse(savedResults) : []);
      } catch (error) {
        console.error("Failed to fetch quiz results:", error);
      }
    };

    fetchResults();
  }, []);

  const handleSendResult = (id: string) => {
    // Find the result by id
    const result = results.find((item) => item.id === id);
    if (result) {
      // Redirect to EmailInputScreen with the result passed as parameter
      navigation.navigate("EmailInputScreen", { result });
    }
  };

  const renderResult = ({ item }: { item: QuizResult }) => (
    <View style={styles.resultCard}>
      <Text style={styles.resultText}>
        Date: {item.date} | Score: {item.score}/{item.total} (
        {((item.score / item.total) * 100).toFixed(2)}%)
      </Text>
      <TouchableOpacity
        style={styles.sendButton}
        onPress={() => handleSendResult(item.id)} // Redirect on button click
      >
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Tracking</Text>
      {results.length > 0 ? (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={renderResult}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.noDataText}>No quiz results found!</Text>
      )}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("StudentDashboard")}
      >
        <Text style={styles.buttonText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  listContainer: { paddingBottom: 20 },
  resultCard: {
    backgroundColor: "#e0f7fa",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  resultText: { fontSize: 16, color: "#00796B" },
  sendButton: {
    backgroundColor: "#0288D1",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  noDataText: { fontSize: 18, color: "#757575", textAlign: "center", marginTop: 50 },
  backButton: {
    backgroundColor: "#0288D1",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
});

export default ProgressTrackingScreen;
