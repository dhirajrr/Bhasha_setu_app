import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveQuiz = async (quiz: { question: string; options: string[]; answer: string }[]) => {
  try {
    await AsyncStorage.setItem('quizData', JSON.stringify(quiz));
  } catch (error) {
    console.error('Failed to save quiz data:', error);
  }
};

export const getQuiz = async (): Promise<{ question: string; options: string[]; answer: string }[]> => {
  try {
    const savedQuiz = await AsyncStorage.getItem('quizData');
    return savedQuiz ? JSON.parse(savedQuiz) : [];
  } catch (error) {
    console.error('Failed to fetch quiz data:', error);
    return [];
  }
};



