import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import { useState, useEffect } from "react";
import * as MailComposer from "expo-mail-composer";
import * as Print from "expo-print";

interface QuizResult {
  id: string;
  score: number;
  total: number;
  date: string;
}

interface Props {
  route: any; // Receives the result from navigation
}

export default function EmailInputScreen({ route, navigation }: Props) {
  const { result }: { result: QuizResult } = route.params || {}; // Get the passed result, or set it to an empty object if undefined
  const [recipients, setRecipients] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Make sure result is valid before using it
  useEffect(() => {
    if (result) {
      setRecipients(""); // Reset recipient email when result is available
    } else {
      setMessage("No result found.");
    }
  }, [result]);

  const sendMail = async () => {
    if (!result) {
      setMessage("Invalid result data.");
      return;
    }

    try {
      // Generate PDF or HTML content for email attachment (if needed)
      const { uri } = await Print.printToFileAsync({
        html: `<h1>Quiz Result PDF</h1><p>Student: Student Name</p><p>Score: ${result.score}/${result.total}</p><p>Date: ${result.date}</p>`,
      });

      // Send email without opening the Gmail page
      await MailComposer.composeAsync({
        subject: `Quiz Result for ${result.id}`,
        body: `Student: Student Name\nScore: ${result.score}/${result.total}\nDate: ${result.date}`,
        recipients: [recipients], // Use the entered recipient email
        attachments: [uri], // Attach the PDF
      });

      setMessage("Result sent to parent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Error sending result.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Quiz Result</Text>
      {result ? (
        <Text style={styles.resultText}>
          Date: {result.date} | Score: {result.score}/{result.total} (
          {((result.score / result.total) * 100).toFixed(2)}%)
        </Text>
      ) : (
        <Text style={styles.resultText}>No result available</Text>
      )}
      <TextInput
        value={recipients}
        onChangeText={setRecipients}
        placeholder="Enter Parent's Email"
        style={styles.input}
      />
      <Button title="Send Mail" onPress={sendMail} />
      {message && <Text style={styles.message}>{message}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  resultText: { fontSize: 18, color: "#00796B", marginBottom: 20 },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
  },
  message: { fontSize: 16, color: "#4CAF50", marginTop: 20, textAlign: "center" },
});
