import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';

export default function LoginSelectionScreen({ navigation }) {
  const [logoAnimationDone, setLogoAnimationDone] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const logoSizeAnim = useRef(new Animated.Value(1)).current;
  const logoPositionAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(logoSizeAnim, {
          toValue: 0.6,
          duration: 1500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(logoPositionAnim, {
          toValue: 100,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      setLogoAnimationDone(true);
    });
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/Leonardo_Phoenix_Design_a_modern_and_impactful_logo_for_a_comp_3.jpg')} // Replace with your logo
        style={[
          styles.logo,
          {
            opacity: fadeAnim,
            transform: [
              { scale: logoSizeAnim },
              { translateY: logoPositionAnim },
            ],
          },
        ]}
      />
      {logoAnimationDone && (
        <>
          <Text style={styles.title}>Welcome to Bhasha Setu</Text>
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity
              style={[styles.button, styles.studentButton]}
              onPress={() => navigation.navigate('Student')}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
              <Text style={styles.buttonText}>Login as Student</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity
              style={[styles.button, styles.teacherButton]}
              onPress={() => navigation.navigate('Teacher')}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
              <Text style={styles.buttonText}>Login as Teacher</Text>
            </TouchableOpacity>
          </Animated.View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Black background
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
    borderRadius: 100, // Circular logo
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text for contrast
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  studentButton: {
    backgroundColor: '#FFFFFF', // White button
    borderColor: '#000000', // Black border
  },
  teacherButton: {
    backgroundColor: '#000000', // Black button
    borderColor: '#FFFFFF', // White border
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
