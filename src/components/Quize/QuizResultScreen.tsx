import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const QuizResultScreen: React.FC = ({ route, navigation }: any) => {
  const { score, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Results</Text>
      <Text style={styles.score}>
        You scored {score} out of {total}
      </Text>
      <Text style={styles.percentage}>
        Percentage: {((score / total) * 100).toFixed(2)}%
      </Text>
      <TouchableOpacity
        style={styles.retryButton}
        onPress={() => navigation.navigate("StudentTestScreen")}
      >
        <Text style={styles.retryText}>Retry Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.goHomeButton}
        onPress={() => navigation.navigate("StudentDashboard")}
      >
        <Text style={styles.retryText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  score: { fontSize: 20, marginBottom: 10, color: "#333" },
  percentage: { fontSize: 18, marginBottom: 20, color: "#555" },
  retryButton: { backgroundColor: "#4CAF50", padding: 10, borderRadius: 10, marginBottom: 20 },
  goHomeButton: { backgroundColor: "#FF7043", padding: 10, borderRadius: 10 },
  retryText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default QuizResultScreen;
