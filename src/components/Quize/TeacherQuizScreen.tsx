import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { saveQuiz } from './quizService';

const TeacherQuizScreen: React.FC = () => {
  const [quiz, setQuiz] = useState<any[]>([]);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<string[]>(['', '', '', '']);
  const [answer, setAnswer] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const addOrEditQuestion = () => {
    if (!question || !options.some(opt => opt) || !answer) {
      Alert.alert('Error', 'Please fill all fields before adding a question');
      return;
    }

    if (editingIndex !== null) {
      const updatedQuiz = [...quiz];
      updatedQuiz[editingIndex] = { question, options, answer };
      setQuiz(updatedQuiz);
      setEditingIndex(null);
    } else {
      setQuiz([...quiz, { question, options, answer }]);
    }

    setQuestion('');
    setOptions(['', '', '', '']);
    setAnswer('');
  };

  const saveQuizData = () => {
    if (quiz.length === 0) {
      Alert.alert('Error', 'No questions added.');
      return;
    }
    saveQuiz(quiz);
    Alert.alert('Success', 'Quiz questions saved!');
  };

  const deleteQuestion = (index: number) => {
    const updatedQuiz = quiz.filter((_, i) => i !== index);
    setQuiz(updatedQuiz);
  };

  const editQuestion = (index: number) => {
    const questionToEdit = quiz[index];
    setQuestion(questionToEdit.question);
    setOptions(questionToEdit.options);
    setAnswer(questionToEdit.answer);
    setEditingIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{editingIndex !== null ? 'Edit Quiz Question' : 'Create Quiz'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Question"
        value={question}
        onChangeText={setQuestion}
      />
      {options.map((opt, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`Option ${index + 1}`}
          value={opt}
          onChangeText={text => {
            const updatedOptions = [...options];
            updatedOptions[index] = text;
            setOptions(updatedOptions);
          }}
        />
      ))}
      <TextInput
        style={styles.input}
        placeholder="Correct Answer"
        value={answer}
        onChangeText={setAnswer}
      />
      <TouchableOpacity style={styles.button} onPress={addOrEditQuestion}>
        <Text style={styles.buttonText}>{editingIndex !== null ? 'Update Question' : 'Add Question'}</Text>
      </TouchableOpacity>

      <FlatList
        data={quiz}
        renderItem={({ item, index }) => (
          <View style={styles.quizItem}>
            <Text style={styles.quizText}>{item.question}</Text>
            <TouchableOpacity onPress={() => editQuestion(index)} style={styles.editButton}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteQuestion(index)} style={styles.deleteButton}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />

      <TouchableOpacity style={styles.saveButton} onPress={saveQuizData}>
        <Text style={styles.buttonText}>Save Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  saveButton: {
    backgroundColor: '#76c7c0',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  quizItem: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  quizText: { flex: 1, fontSize: 16 },
  editButton: { backgroundColor: '#ffcc00', padding: 5, borderRadius: 5 },
  deleteButton: { backgroundColor: '#e57373', padding: 5, borderRadius: 5 },
});

export default TeacherQuizScreen;
