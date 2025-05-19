import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Video, ResizeMode } from 'expo-av'; // Import ResizeMode from expo-av

type Videos = {
  [key: string]: any;
};

const TextToSignScreen = () => {
  const [inputText, setInputText] = useState('');
  const [videoPath, setVideoPath] = useState<any>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videos: Videos = {
    hello: require('../../assets/Text_to_Video/Hello.mp4'),
    'never give up': require('../../assets/Text_to_Video/NGU.mp4'),
    'what do you like to do': require('../../assets/Text_to_Video/WDYL.mp4'),
    'my name is': require('../../assets/Text_to_Video/MNI.mp4'),
    'what is your name': require('../../assets/Text_to_Video/what_is_your_name.mp4'),
    'i like you': require('../../assets/Text_to_Video/i_like_you.mp4'),
    'good afternoon': require('../../assets/Text_to_Video/good_afternoon.mp4'),
    'i love you': require('../../assets/Text_to_Video/i_love_you.mp4'),
    'i will see you again': require('../../assets/Text_to_Video/i_will_see_you_again.mp4'),
    'can we hug': require('../../assets/Text_to_Video/can_we_hug.mp4'),
    'i am hungry': require('../../assets/Text_to_Video/i_am_hungry.mp4'),
    'where are you from': require('../../assets/Text_to_Video/where_are_you_form.mp4'),
    'i am fine': require('../../assets/Text_to_Video/i_am_fine.mp4'),
    'where do you work': require('../../assets/Text_to_Video/where_do_you_work.mp4'),
    wasted: require('../../assets/Text_to_Video/wasted.mp4'),
    'happy birthday to you': require('../../assets/Text_to_Video/HBD.mp4'),
    yes: require('../../assets/Text_to_Video/yes.mp4'),
    'thank you': require('../../assets/Text_to_Video/thank_you.mp4'),
    "what's up": require('../../assets/Text_to_Video/whats_up.mp4'),
    'what do you want for dinner': require('../../assets/Text_to_Video/what_do_you_want_for_dinner.mp4'),
    please: require('../../assets/Text_to_Video/please.mp4'),
    'how are you': require('../../assets/Text_to_Video/how_are_you.mp4'),
    'what time is it': require('../../assets/Text_to_Video/what_time_is_it.mp4'),
  };

  const handlePlayVideo = () => {
    const lowerCaseInput = inputText.trim().toLowerCase();
    if (videos[lowerCaseInput]) {
      setVideoPath(videos[lowerCaseInput]);
    } else {
      setVideoPath(null); // Reset if no video found
      Alert.alert('Error', 'No video found for this input.');
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Text_To_Video</Text>
        </View>

        {/* Video Player */}
        <View style={styles.videoContainer}>
          {videoPath ? (
            <Video
              source={videoPath}
              style={styles.videoPlayer}
              resizeMode={ResizeMode.CONTAIN} // Use ResizeMode.CONTAIN
              rate={1.5} // Set the playback speed
              shouldPlay={videoLoaded} // Play once the video is loaded
              onLoad={handleVideoLoad}
              onError={(error) => {
                // Safely access error message if it exists
                const errorMessage = error?.message || 'An unknown error occurred.';
                Alert.alert('Video Error', errorMessage);
              }}
            />
          ) : (
            <Text style={styles.noVideoText}>No video selected.</Text>
          )}
        </View>

        {/* Input Section */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a word or phrase (e.g., Hello)"
            placeholderTextColor="#aaa"
            value={inputText}
            onChangeText={setInputText}
            autoCapitalize="none"
          />
        </View>

        {/* Play Button - Now on a separate line */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.playButton} onPress={handlePlayVideo}>
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Developed by Language Bridge</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  videoContainer: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
    backgroundColor: '#2c2c2c',
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Multi-color border
    borderStyle: 'solid',
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
  },
  noVideoText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 5,
    borderColor: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Multi-color border
    borderRadius: 10,
    padding: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    height: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 125,
    paddingVertical: 10,
    borderRadius: 10,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#aaa',
    fontSize: 14,
  },
});

export default TextToSignScreen;
