import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../../utils/FirebaseConfig';

const auth = getAuth(app);

const StudentLoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        Alert.alert('Please verify your email before signing in.');
        return;
      }

      navigation.navigate('StudentDashboard');
    } catch (error: any) {
      setError(error.message);
      console.error('Sign-in error: ', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('StudentSignUpScreen')}>
          <Text style={styles.linkText}>Create an account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
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
  linkContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
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

export default StudentLoginScreen;



















// import React, { useState } from 'react';
// import { View, TextInput, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   signInWithPhoneNumber,
//   GoogleAuthProvider,
//   signInWithCredential,
//   RecaptchaVerifier,
//   ConfirmationResult,
// } from 'firebase/auth';
// import * as Google from 'expo-auth-session/providers/google'; // For Expo
// import app from '../utils/FirebaseConfig';

// const auth = getAuth(app);

// const StudentLoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [method, setMethod] = useState<'email' | 'phone' | 'google'>('email');
//   const [error, setError] = useState<string | null>(null);
//   const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(null);

//   const [request, response, promptAsync] = Google.useAuthRequest({
//     clientId: '<YOUR_GOOGLE_CLIENT_ID>', // Replace with your Google client ID
//   });

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

//   // Handle Email Sign-In
//   const handleEmailSignIn = async () => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       if (!user.emailVerified) {
//         Alert.alert('Please verify your email before signing in.');
//         return;
//       }

//       navigation.navigate('StudentDashboard');
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   // Handle Phone Sign-In
//   const handlePhoneSignIn = async () => {
//     try {
//       initializeRecaptcha();
//       const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
//       setConfirmation(confirmationResult);
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
//       Alert.alert('Login successful!');
//       navigation.navigate('StudentDashboard');
//     } catch (error: any) {
//       setError('Invalid verification code');
//     }
//   };

//   // Handle Google Sign-In
//   const handleGoogleSignIn = async () => {
//     if (response?.type === 'success') {
//       const { id_token } = response.params;
//       const credential = GoogleAuthProvider.credential(id_token);
//       try {
//         const result = await signInWithCredential(auth, credential);
//         Alert.alert('Google Sign-In Successful!', `Welcome ${result.user.displayName}`);
//         navigation.navigate('StudentDashboard');
//       } catch (error: any) {
//         setError(error.message);
//       }
//     } else {
//       promptAsync();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign In</Text>

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
//         <TouchableOpacity
//           onPress={() => setMethod('google')}
//           style={[styles.methodButton, method === 'google' && styles.selectedMethod]}
//         >
//           <Text>Google</Text>
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
//           <TouchableOpacity style={styles.button} onPress={handleEmailSignIn}>
//             <Text style={styles.buttonText}>Sign In with Email</Text>
//           </TouchableOpacity>
//         </>
//       ) : method === 'phone' ? (
//         <>
//           <TextInput
//             style={styles.input}
//             value={phoneNumber}
//             onChangeText={setPhoneNumber}
//             placeholder="Phone Number"
//             placeholderTextColor="#bdbdbd"
//             keyboardType="phone-pad"
//           />
//           <TouchableOpacity style={styles.button} onPress={handlePhoneSignIn}>
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
//       ) : (
//         <TouchableOpacity style={styles.button} onPress={handleGoogleSignIn}>
//           <Text style={styles.buttonText}>Sign In with Google</Text>
//         </TouchableOpacity>
//       )}

//       <TouchableOpacity onPress={() => navigation.navigate('StudentSignUpScreen')}>
//         <Text style={styles.linkText}>Create an account</Text>
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

// export default StudentLoginScreen;
