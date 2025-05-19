import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const MathOperationsScreen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<number | string | null>(null);
  const [operation, setOperation] = useState('');

  const calculate = (op: string) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res: number | string = 0;

    switch (op) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number2 !== 0 ? number1 / number2 : 'Error';
        break;
      default:
        res = 'Invalid Operation';
    }

    setOperation(op);
    setResult(res);
  };

  const renderVisualAid = () => {
    if (!operation) return null;

    const items = [];
    for (let i = 0; i < Math.abs(Number(result)); i++) {
      items.push(
        <Image
          key={i}
          source={require('../../../assets/images/Apple.jpg')}
          style={styles.image}
        />
      );
    }

    return <View style={styles.visualContainer}>{items}</View>;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Basic Math Operations</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter first number"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter second number"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
        />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => calculate('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => calculate('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => calculate('*')}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => calculate('/')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>

        {result !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              {num1} {operation} {num2} = {result}
            </Text>
            <Text style={styles.visualTitle}>Visual Representation:</Text>
            {renderVisualAid()}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  visualTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  visualContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    margin: 5,
  },
});

export default MathOperationsScreen;
