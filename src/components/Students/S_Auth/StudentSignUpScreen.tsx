// StudentSignUpScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import app from '../../../utils/FirebaseConfig';

const auth = getAuth(app);

const StudentSignUpScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);
      Alert.alert('A verification email has been sent. Please verify your email before signing in.');
      navigation.navigate('StudentLoginScreen');
    } catch (error: any) {
      setError(error.message);
      console.error('Sign-up error: ', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#bdbdbd"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#bdbdbd"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('StudentLoginScreen')}>
        <Text style={styles.linkText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#444',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: '#fff',
    backgroundColor: '#1e1e1e',
    fontSize: 16,
  },
  button: {
    width: '90%',
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#3498db',
    fontSize: 16,
    marginVertical: 5,
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default StudentSignUpScreen;

































// import React, { useState } from 'react';
// import { View, TextInput, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   signInWithPhoneNumber,
//   RecaptchaVerifier,
//   ConfirmationResult,
// } from 'firebase/auth';
// import app from '../utils/FirebaseConfig';

// const auth = getAuth(app);

// const StudentSignUpScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [method, setMethod] = useState<'email' | 'phone'>('email');
//   const [error, setError] = useState<string | null>(null);
//   const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(null);

//   // Initialize reCAPTCHA
//   const initializeRecaptcha = () => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         'recaptcha-container',
//         {
//           size: 'invisible',
//           callback: () => {
//             console.log('reCAPTCHA solved');
//           },
//           'expired-callback': () => {
//             console.log('reCAPTCHA expired. Try again.');
//           },
//         },
//         auth
//       );
//     }
//   };

//   // Handle Email Sign-Up
//   const handleEmailSignUp = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await sendEmailVerification(user);
//       Alert.alert('A verification email has been sent. Please verify your email before signing in.');
//       navigation.navigate('StudentLoginScreen');
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   // Handle Phone Sign-Up
//   const handlePhoneSignUp = async () => {
//     try {
//       initializeRecaptcha();
//       const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
//       setConfirmation(confirmationResult); // Store the confirmation result
//       Alert.alert('Enter the verification code sent to your phone.');
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   // Verify OTP
//   const handleVerifyPhoneNumber = async () => {
//     if (!confirmation) {
//       Alert.alert('No confirmation result found.');
//       return;
//     }

//     try {
//       await confirmation.confirm(verificationCode);
//       Alert.alert('Phone number verified successfully! Account created.');
//       navigation.navigate('StudentLoginScreen');
//     } catch (error: any) {
//       setError('Invalid verification code');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>

//       {error && <Text style={styles.errorText}>{error}</Text>}

//       <View style={styles.methodSelector}>
//         <TouchableOpacity
//           onPress={() => setMethod('email')}
//           style={[styles.methodButton, method === 'email' && styles.selectedMethod]}
//         >
//           <Text>Email</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => setMethod('phone')}
//           style={[styles.methodButton, method === 'phone' && styles.selectedMethod]}
//         >
//           <Text>Phone</Text>
//         </TouchableOpacity>
//       </View>

//       {method === 'email' ? (
//         <>
//           <TextInput
//             style={styles.input}
//             value={email}
//             onChangeText={setEmail}
//             placeholder="Email"
//             placeholderTextColor="#bdbdbd"
//             autoCapitalize="none"
//             keyboardType="email-address"
//           />
//           <TextInput
//             style={styles.input}
//             value={password}
//             onChangeText={setPassword}
//             placeholder="Password"
//             placeholderTextColor="#bdbdbd"
//             secureTextEntry
//           />
//           <TouchableOpacity style={styles.button} onPress={handleEmailSignUp}>
//             <Text style={styles.buttonText}>Sign Up with Email</Text>
//           </TouchableOpacity>
//         </>
//       ) : (
//         <>
//           <TextInput
//             style={styles.input}
//             value={phoneNumber}
//             onChangeText={setPhoneNumber}
//             placeholder="Phone Number"
//             placeholderTextColor="#bdbdbd"
//             keyboardType="phone-pad"
//           />
//           <TouchableOpacity style={styles.button} onPress={handlePhoneSignUp}>
//             <Text style={styles.buttonText}>Send OTP</Text>
//           </TouchableOpacity>

//           <TextInput
//             style={styles.input}
//             value={verificationCode}
//             onChangeText={setVerificationCode}
//             placeholder="Verification Code"
//             placeholderTextColor="#bdbdbd"
//             keyboardType="numeric"
//           />
//           <TouchableOpacity style={styles.button} onPress={handleVerifyPhoneNumber}>
//             <Text style={styles.buttonText}>Verify OTP</Text>
//           </TouchableOpacity>
//         </>
//       )}

//       <TouchableOpacity onPress={() => navigation.navigate('StudentLoginScreen')}>
//         <Text style={styles.linkText}>Already have an account? Sign In</Text>
//       </TouchableOpacity>

//       {/* Add the reCAPTCHA container */}
//       <View id="recaptcha-container" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000',
//     padding: 20,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 20,
//   },
//   input: {
//     width: '90%',
//     height: 50,
//     borderColor: '#444',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//     color: '#fff',
//     backgroundColor: '#1e1e1e',
//     fontSize: 16,
//   },
//   button: {
//     width: '90%',
//     backgroundColor: '#fff',
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#000',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   linkText: {
//     color: '#3498db',
//     fontSize: 16,
//     marginVertical: 5,
//     textDecorationLine: 'underline',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 14,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   methodSelector: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   methodButton: {
//     padding: 10,
//     backgroundColor: '#444',
//     margin: 5,
//     borderRadius: 8,
//   },
//   selectedMethod: {
//     backgroundColor: '#3498db',
//   },
// });

// export default StudentSignUpScreen;
