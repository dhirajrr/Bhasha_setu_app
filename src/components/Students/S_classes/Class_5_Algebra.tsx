import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const numbersData = [
  { id: '1', number: '૧', image: require('../../../assets/images/1.png') },
  { id: '2', number: '૨', image: require('../../../assets/images/2.png') },
  { id: '3', number: '૩', image: require('../../../assets/images/3.png') },
  { id: '4', number: '૪', image: require('../../../assets/images/4.png') },
  { id: '5', number: '૫', image: require('../../../assets/images/5.png') },
  { id: '6', number: '૬', image: require('../../../assets/images/6.png') },
  { id: '7', number: '૭', image: require('../../../assets/images/7.png') },
  { id: '8', number: '૮', image: require('../../../assets/images/8.png') },
  { id: '9', number: '૯', image: require('../../../assets/images/9.png') },
  { id: '10', number: '૧૦', image: require('../../../assets/images/10.png')},
];

const AlgebraScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.number}>{item.number}</Text>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gujarati Numbers with Sign Language</Text>
      <FlatList
        data={numbersData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#eaf3ff',
    borderRadius: 10,
    elevation: 3,
  },
  number: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginRight: 15,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default AlgebraScreen;