import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../utils/FirebaseConfig';
import * as ImagePicker from 'expo-image-picker';

// Cloudinary Configuration
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dzxcoutkf/image/upload';
const UPLOAD_PRESET = 'profile_upload_preset'; // Replace with your Cloudinary preset

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [className, setClassName] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState('');
  const [phone, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const auth = getAuth();
  const user = auth.currentUser;

  // Fetch user data from Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setName(data.name || '');
          setEmail(data.email || '');
          setClassName(data.className || '');
          setAddress(data.address || '');
          setEducation(data.education || '');
          setPhone(data.phone || '');
          setProfilePic(data.profilePic || '');
        }
      }
    };
    fetchUserData();
  }, [user]);

  // Handle image selection
  const handleProfilePicture = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // Correct usage
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.canceled && result.assets) {
        const { uri } = result.assets[0];
        setImageUri(uri);
      } else {
        console.log('Image selection was canceled');
      }
    } catch (error) {
      console.error('Error picking an image:', error);
    }
  };

  // Upload image to Cloudinary
  const uploadToCloudinary = async (): Promise<string> => {
    if (!imageUri) {
      console.log('No image URI found for upload');
      return '';
    }

    const formData = new FormData();
    formData.append('file', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'profile_pic.jpg',
    } as any);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const response = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.error('Cloudinary upload failed:', response.status, response.statusText);
        throw new Error(`Cloudinary upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Cloudinary upload result:', result);

      return result.secure_url || '';
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      Alert.alert('ત્રુટિ', 'છબી અપલોડ કરવામાં નિષ્ફળતા.');
      return '';
    }
  };

  // Save profile data to Firestore
  const saveProfileData = async (
    name: string,
    email: string,
    className: string,
    address: string,
    education: string,
    phone: string,
    profilePicUrl: string
  ) => {
    if (user) {
      const userRef = doc(db, 'users', user.uid);

      try {
        await setDoc(userRef, {
          name,
          email,
          className,
          address,
          education,
          phone,
          profilePic: profilePicUrl,
        });
        Alert.alert('પ્રોફાઇલ સચવાઈ', 'તમારી પ્રોફાઇલ સફળતાપૂર્વક અપડેટ થઈ છે.');
        setEditing(false);
      } catch (error) {
        console.error('Error saving profile:', error);
        Alert.alert('ત્રુટિ', 'તમારી પ્રોફાઇલ સચવવામાં સમસ્યા થઈ છે.');
      }
    } else {
      Alert.alert('વપરાશકર્તા માન્ય નથી', 'મહેરબાની કરીને પ્રથમ લોગિન કરો.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profilePicContainer}>
          <Image
            source={{
              uri: profilePic || 'https://via.placeholder.com/120', // Placeholder if no profile picture
            }}
            style={styles.profilePic}
          />
          <TouchableOpacity style={styles.uploadButton} onPress={handleProfilePicture}>
            <Text style={styles.buttonText}>પ્રોફાઇલ ચિત્ર અપલોડ કરો</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>પ્રોફાઇલ માહિતી</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>નામ</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              editable={editing}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>ઈમેઈલ</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              editable={editing}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>વર્ગ</Text>
            <TextInput
              style={styles.input}
              value={className}
              onChangeText={setClassName}
              editable={editing}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>સરનામું</Text>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={setAddress}
              editable={editing}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>શિક્ષણ</Text>
            <TextInput
              style={styles.input}
              value={education}
              onChangeText={setEducation}
              editable={editing}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>મોબાઈલ નંબર</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              editable={editing}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          {editing ? (
            <TouchableOpacity
              style={styles.saveButton}
              onPress={async () => {
                const uploadedProfilePicUrl = await uploadToCloudinary();
                saveProfileData(name, email, className, address, education, phone, uploadedProfilePicUrl);
              }}
            >
              <Text style={styles.buttonText}>પ્રોફાઇલ સેવ કરો</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.editButton} onPress={() => setEditing(true)}>
              <Text style={styles.buttonText}>પ્રોફાઇલ સંપાદન કરો</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#ddd',
  },
  detailsContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  uploadButton: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  editButton: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#FFC107',
    borderRadius: 5,
  },
  saveButton: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;



