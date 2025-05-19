import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

interface Message {
  id: string;
  type: "user" | "response" | "thinking";
  text: string;
}

const GeminiChatScreen: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [thinkingText, setThinkingText] = useState<string>("");

  useEffect(() => {
    if (loading) {
      let dots = "";
      const interval = setInterval(() => {
        dots = dots.length < 3 ? dots + "." : "";
        setThinkingText(`Thinking${dots}`);
      }, 500);

      return () => clearInterval(interval);
    } else {
      setThinkingText("");
    }
  }, [loading]);

  const handleSendMessage = async () => {
    if (!userInput.trim()) {
      return;
    }

    const newUserMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: userInput, // Don't truncate the input
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setUserInput("");
    setLoading(true);

    const thinkingMessage: Message = {
      id: Date.now().toString() + "_thinking",
      type: "thinking",
      text: "Thinking...",
    };
    setMessages((prevMessages) => [...prevMessages, thinkingMessage]);

    try {
      const response = await fetch("http://192.168.17.80:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_input: userInput,
        }),
      });

      const result = await response.json();

      setMessages((prevMessages) => prevMessages.filter((msg) => msg.type !== "thinking"));

      const newResponseMessage: Message = {
        id: Date.now().toString() + "_response",
        type: "response",
        text: response.ok ? result.generated_text : result.error || "Something went wrong",
      };

      setMessages((prevMessages) => [...prevMessages, newResponseMessage]);
    } catch (error) {
      setMessages((prevMessages) => prevMessages.filter((msg) => msg.type !== "thinking"));

      const errorMessage: Message = {
        id: Date.now().toString() + "_error",
        type: "response",
        text: "Error fetching data.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.type === "user"
          ? styles.userMessage
          : item.type === "response"
          ? styles.responseMessage
          : styles.thinkingMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
      />

      {loading && <ActivityIndicator size="large" color="#4caf50" style={styles.loader} />}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          placeholderTextColor="#8c8c8c"
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSendMessage}
          disabled={loading}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  chatContainer: {
    padding: 10,
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  messageContainer: {
    maxWidth: "80%",
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#1f6f8b",
  },
  responseMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#2c3e50",
  },
  thinkingMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#34495e",
    fontStyle: "italic",
  },
  messageText: {
    fontSize: 16,
    color: "#ecf0f1",
  },
  loader: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#444",
    backgroundColor: "#1a1a2e",
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 20,
    marginRight: 10,
    color: "#fff",
    backgroundColor: "#2d3436",
  },
  sendButton: {
    backgroundColor: "#26de81",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sendButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GeminiChatScreen;
