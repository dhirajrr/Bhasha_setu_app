import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import * as FileSystem from 'expo-file-system';

const TextToImageScreen: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const token = "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";
  const apiUrl = "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image";

  const generateImage = async () => {
    if (!inputText.trim()) {
      Alert.alert('Error', 'Please enter a text prompt.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: inputText }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch image.');
      }

      const blob = await response.blob();
      const fileReader = new FileReader();

      fileReader.onloadend = async () => {
        const base64Data = fileReader.result?.toString().split(',')[1];
        if (base64Data) {
          const path = `${FileSystem.cacheDirectory}${Date.now()}.png`;
          await FileSystem.writeAsStringAsync(path, base64Data, {
            encoding: FileSystem.EncodingType.Base64,
          });
          setImageUri(path);
        } else {
          throw new Error('Failed to convert blob to base64.');
        }
      };

      fileReader.readAsDataURL(blob);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred.';
      Alert.alert('Error', errorMessage);
      console.error('Error during image generation:', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Chatbot: Text to Image</Text>
      <View style={styles.chatContainer}>
        <Text style={styles.botMessage}>
          Hello! Enter a text prompt, and I'll generate an image for you.
        </Text>
        {imageUri && (
          <View style={styles.responseContainer}>
            <Text style={styles.botMessage}>Here is your generated image:</Text>
            <Image source={{ uri: imageUri }} style={styles.image} />
          </View>
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter text prompt"
        placeholderTextColor="#aaa"
        value={inputText}
        onChangeText={setInputText}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={generateImage}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Generate Image</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
  },
  chatContainer: {
    width: '100%',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  botMessage: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 10,
  },
  responseContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#1e1e1e',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#6200EE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 10,
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default TextToImageScreen;



// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   ActivityIndicator,
//   StyleSheet,
//   Alert,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import * as FileSystem from "expo-file-system";

// interface Message {
//   id: string;
//   type: "user" | "response" | "thinking";
//   text: string;
// }

// const CombinedScreen: React.FC = () => {
//   const [userInput, setUserInput] = useState<string>("");
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [loadingChat, setLoadingChat] = useState<boolean>(false);
//   const [thinkingText, setThinkingText] = useState<string>("");

//   const [inputText, setInputText] = useState("");
//   const [imageUri, setImageUri] = useState<string | null>(null);
//   const [loadingImage, setLoadingImage] = useState(false);

//   const token = "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";
//   const apiUrl = "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image";

//   useEffect(() => {
//     if (loadingChat) {
//       let dots = "";
//       const interval = setInterval(() => {
//         dots = dots.length < 3 ? dots + "." : "";
//         setThinkingText(`Thinking${dots}`);
//       }, 500);
//       return () => clearInterval(interval);
//     } else {
//       setThinkingText("");
//     }
//   }, [loadingChat]);

//   const handleSendMessage = async () => {
//     if (!userInput.trim()) {
//       return;
//     }

//     const newUserMessage: Message = {
//       id: Date.now().toString(),
//       type: "user",
//       text: userInput,
//     };

//     setMessages((prevMessages) => [...prevMessages, newUserMessage]);
//     setUserInput("");
//     setLoadingChat(true);

//     const thinkingMessage: Message = {
//       id: Date.now().toString() + "_thinking",
//       type: "thinking",
//       text: "Thinking...",
//     };
//     setMessages((prevMessages) => [...prevMessages, thinkingMessage]);

//     try {
//       const response = await fetch("http://192.168.1.107:5000/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           user_input: userInput,
//         }),
//       });

//       const result = await response.json();

//       setMessages((prevMessages) => prevMessages.filter((msg) => msg.type !== "thinking"));

//       const newResponseMessage: Message = {
//         id: Date.now().toString() + "_response",
//         type: "response",
//         text: response.ok ? result.generated_text : result.error || "Something went wrong",
//       };

//       setMessages((prevMessages) => [...prevMessages, newResponseMessage]);
//     } catch (error) {
//       setMessages((prevMessages) => prevMessages.filter((msg) => msg.type !== "thinking"));

//       const errorMessage: Message = {
//         id: Date.now().toString() + "_error",
//         type: "response",
//         text: "Error fetching data.",
//       };
//       setMessages((prevMessages) => [...prevMessages, errorMessage]);
//     } finally {
//       setLoadingChat(false);
//     }
//   };

//   const generateImage = async () => {
//     if (!inputText.trim()) {
//       Alert.alert("Error", "Please enter a text prompt.");
//       return;
//     }

//     setLoadingImage(true);
//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ inputs: inputText }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch image.");
//       }

//       const blob = await response.blob();
//       const fileReader = new FileReader();

//       fileReader.onloadend = async () => {
//         const base64Data = fileReader.result?.toString().split(",")[1];
//         if (base64Data) {
//           const path = `${FileSystem.cacheDirectory}${Date.now()}.png`;
//           await FileSystem.writeAsStringAsync(path, base64Data, {
//             encoding: FileSystem.EncodingType.Base64,
//           });
//           setImageUri(path);
//         } else {
//           throw new Error("Failed to convert blob to base64.");
//         }
//       };

//       fileReader.readAsDataURL(blob);
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : "An unknown error occurred.";
//       Alert.alert("Error", errorMessage);
//     } finally {
//       setLoadingImage(false);
//     }
//   };

//   const renderMessage = ({ item }: { item: Message }) => (
//     <View
//       style={[
//         styles.messageContainer,
//         item.type === "user"
//           ? styles.userMessage
//           : item.type === "response"
//           ? styles.responseMessage
//           : styles.thinkingMessage,
//       ]}
//     >
//       <Text style={styles.messageText}>{item.text}</Text>
//     </View>
//   );

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//     >
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <FlatList
//           data={messages}
//           keyExtractor={(item) => item.id}
//           renderItem={renderMessage}
//           contentContainerStyle={styles.chatContainer}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter chat message"
//           placeholderTextColor="#aaa"
//           value={userInput}
//           onChangeText={setUserInput}
//         />
//         <TouchableOpacity style={styles.button} onPress={handleSendMessage} disabled={loadingChat}>
//           <Text style={styles.buttonText}>Send Message</Text>
//         </TouchableOpacity>
//         {loadingChat && <ActivityIndicator size="large" color="#4caf50" />}

//         <Text style={styles.title}>Text-to-Image</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter text for image"
//           placeholderTextColor="#aaa"
//           value={inputText}
//           onChangeText={setInputText}
//         />
//         <TouchableOpacity
//           style={styles.button}
//           onPress={generateImage}
//           disabled={loadingImage}
//         >
//           <Text style={styles.buttonText}>Generate Image</Text>
//         </TouchableOpacity>
//         {loadingImage && <ActivityIndicator size="large" color="#6200EE" />}
//         {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   // Add the styles from both components here.
//   container: { flex: 1, backgroundColor: "#121212" },
//   scrollView: { padding: 10 },
//   chatContainer: { paddingBottom: 20 },
//   title: { fontSize: 20, color: "#fff", marginVertical: 10 },
//   input: { backgroundColor: "#1e1e1e", color: "#fff", marginVertical: 10, padding: 10 },
//   button: { backgroundColor: "#6200EE", padding: 10, marginVertical: 10 },
//   buttonText: { color: "#fff" },
//   messageContainer: { padding: 10, marginVertical: 5 },
//   userMessage: { backgroundColor: "#1f6f8b" },
//   responseMessage: { backgroundColor: "#2c3e50" },
//   thinkingMessage: { fontStyle: "italic" },
//   messageText: { color: "#fff" },
//   image: { height: 200, width: 200 },
// });

// export default CombinedScreen;
