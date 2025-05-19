import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TablesScreen = () => {
  // Gujarati multiplication tables from 1 to 10
  const tables = [
    {
      number: 1,
      table: ['૧ × ૧ = ૧', '૧ × ૨ = ૨', '૧ × ૩ = ૩', '૧ × ૪ = ૪', '૧ × ૫ = ૫', '૧ × ૬ = ૬', '૧ × ૭ = ૭', '૧ × ૮ = ૮', '૧ × ૯ = ૯', '૧ × ૧૦ = ૧૦'],
    },
    {
      number: 2,
      table: ['૨ × ૧ = ૨', '૨ × ૨ = ૪', '૨ × ૩ = ૬', '૨ × ૪ = ૮', '૨ × ૫ = ૧૦', '૨ × ૬ = ૧૨', '૨ × ૭ = ૧૪', '૨ × ૮ = ૧૬', '૨ × ૯ = ૧૮', '૨ × ૧૦ = ૨૦'],
    },
    {
      number: 3,
      table: ['૩ × ૧ = ૩', '૩ × ૨ = ૬', '૩ × ૩ = ૯', '૩ × ૪ = ૧૨', '૩ × ૫ = ૧૫', '૩ × ૬ = ૧૮', '૩ × ૭ = ૨૧', '૩ × ૮ = ૨૪', '૩ × ૯ = ૨૭', '૩ × ૧૦ = ૩૦'],
    },
    {
      number: 4,
      table: ['૪ × ૧ = ૪', '૪ × ૨ = ૮', '૪ × ૩ = ૧૨', '૪ × ૪ = ૧૬', '૪ × ૫ = ૨૦', '૪ × ૬ = ૨૪', '૪ × ૭ = ૨૮', '૪ × ૮ = ૩૨', '૪ × ૯ = ૩૬', '૪ × ૧૦ = ૪૦'],
    },
    {
      number: 5,
      table: ['૫ × ૧ = ૫', '૫ × ૨ = ૧૦', '૫ × ૩ = ૧૫', '૫ × ૪ = ૨૦', '૫ × ૫ = ૨૫', '૫ × ૬ = ૩૦', '૫ × ૭ = ૩૫', '૫ × ૮ = ૪૦', '૫ × ૯ = ૪૫', '૫ × ૧૦ = ૫૦'],
    },
    {
      number: 6,
      table: ['૬ × ૧ = ૬', '૬ × ૨ = ૧૨', '૬ × ૩ = ૧૮', '૬ × ૪ = ૨૪', '૬ × ૫ = ૩૦', '૬ × ૬ = ૩૬', '૬ × ૭ = ૪૨', '૬ × ૮ = ૪૮', '૬ × ૯ = ૫૪', '૬ × ૧૦ = ૬૦'],
    },
    {
      number: 7,
      table: ['૭ × ૧ = ૭', '૭ × ૨ = ૧૪', '૭ × ૩ = ૨૧', '૭ × ૪ = ૨૮', '૭ × ૫ = ૩૫', '૭ × ૬ = ૪૨', '૭ × ૭ = ૪૯', '૭ × ૮ = ૫૬', '૭ × ૯ = ૬૩', '૭ × ૧૦ = ૭૦'],
    },
    {
      number: 8,
      table: ['૮ × ૧ = ૮', '૮ × ૨ = ૧૬', '૮ × ૩ = ૨૪', '૮ × ૪ = ૩૨', '૮ × ૫ = ૪૦', '૮ × ૬ = ૪૮', '૮ × ૭ = ૫૬', '૮ × ૮ = ૬૪', '૮ × ૯ = ૭૨', '૮ × ૧૦ = ૮૦'],
    },
    {
      number: 9,
      table: ['૯ × ૧ = ૯', '૯ × ૨ = ૧૮', '૯ × ૩ = ૨૭', '૯ × ૪ = ૩૬', '૯ × ૫ = ૪૫', '૯ × ૬ = ૫૪', '૯ × ૭ = ૬૩', '૯ × ૮ = ૭૨', '૯ × ૯ = ૮૧', '૯ × ૧૦ = ૯૦'],
    },
    {
      number: 10,
      table: ['૧૦ × ૧ = ૧૦', '૧૦ × ૨ = ૨૦', '૧૦ × ૩ = ૩૦', '૧૦ × ૪ = ૪૦', '૧૦ × ૫ = ૫૦', '૧૦ × ૬ = ૬૦', '૧૦ × ૭ = ૭૦', '૧૦ × ૮ = ૮૦', '૧૦ × ૯ = ૯૦', '૧૦ × ૧૦ = ૧૦૦'],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ગુણાકાર કોષ્ટકો (Multiplication Tables)</Text>
      {tables.map((item, index) => (
        <View key={index} style={styles.tableContainer}>
          <Text style={styles.tableTitle}>કોષ્ટક {item.number}</Text>
          {item.table.map((line, lineIndex) => (
            <Text key={lineIndex} style={styles.tableText}>
              {line}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  tableContainer: {
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  tableTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#007BFF',
  },
  tableText: {
    fontSize: 18,
    color: '#333',
    marginVertical: 2,
  },
});

export default TablesScreen;