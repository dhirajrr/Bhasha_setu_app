import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Video } from 'expo-av'; // Import Video from expo-av

const Alphabets = () => {
  const [selectedAlphabet, setSelectedAlphabet] = useState<string | null>(null);

  // Map each alphabet to its corresponding video path
  const videos: { [key: string]: any } = {
    A: require('../../assets/English_Alpha/A.mp4'),
    B: require('../../assets/English_Alpha/B.mp4'),
    C: require('../../assets/English_Alpha/C.mp4'),
    D: require('../../assets/English_Alpha/D.mp4'),
    E: require('../../assets/English_Alpha/E.mp4'),
    F: require('../../assets/English_Alpha/F.mp4'),
    G: require('../../assets/English_Alpha/G.mp4'),
    H: require('../../assets/English_Alpha/H.mp4'),
    I: require('../../assets/English_Alpha/I.mp4'),
    J: require('../../assets/English_Alpha/J.mp4'),
    K: require('../../assets/English_Alpha/K.mp4'),
    L: require('../../assets/English_Alpha/L.mp4'),
    M: require('../../assets/English_Alpha/M.mp4'),
    N: require('../../assets/English_Alpha/N.mp4'),
    O: require('../../assets/English_Alpha/O.mp4'),
    P: require('../../assets/English_Alpha/P.mp4'),
    Q: require('../../assets/English_Alpha/Q.mp4'),
    R: require('../../assets/English_Alpha/R.mp4'),
    S: require('../../assets/English_Alpha/S.mp4'),
    T: require('../../assets/English_Alpha/T.mp4'),
    U: require('../../assets/English_Alpha/U.mp4'),
    V: require('../../assets/English_Alpha/V.mp4'),
    W: require('../../assets/English_Alpha/W.mp4'),
    X: require('../../assets/English_Alpha/X.mp4'),
    Y: require('../../assets/English_Alpha/Y.mp4'),
    Z: require('../../assets/English_Alpha/Z.mp4'),
  };

  const handleAlphabetPress = (alphabet: string) => {
    setSelectedAlphabet(alphabet);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alphabet Video Player</Text>

      {/* Placeholder for video or actual video */}
      <View style={styles.videoContainer}>
        {selectedAlphabet ? (
          <Video
            source={videos[selectedAlphabet]} // video source
            style={styles.videoPlayer}
            resizeMode="contain" // Maintain video aspect ratio
            onPlaybackStatusUpdate={(status) => {
              if (status.didJustFinish) {
                setSelectedAlphabet(null); // Reset selected alphabet on video end
              }
            }}
            shouldPlay={true} // Auto-play video
            isLooping={false} // Do not repeat video
          />
        ) : (
          <View style={styles.videoPlaceholder}>
            <Text style={styles.placeholderText}>Select an alphabet to play a video</Text>
          </View>
        )}
      </View>

      {/* Alphabet Grid */}
      <ScrollView contentContainerStyle={styles.alphabetGrid}>
        {Object.keys(videos).map((alphabet) => (
          <TouchableOpacity
            key={alphabet}
            style={styles.alphabetButton}
            onPress={() => handleAlphabetPress(alphabet)}
          >
            <Text style={styles.alphabetText}>{alphabet}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Light text color
  },
  videoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 3, // Border width
    borderColor: '#ffb833', // Border color
    borderRadius: 15, // Border radius
    padding: 5, // Padding inside the border
  },
  videoPlayer: {
    width: '90%',
    height: 180,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  videoPlaceholder: {
    width: '90%',
    height: 200,
    backgroundColor: '#333', // Darker placeholder
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  placeholderText: {
    fontSize: 16,
    color: '#aaa', // Lighter text color for placeholder
  },
  alphabetGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
    paddingBottom: 20,
  },
  alphabetButton: {
    width: 60,
    height: 40,
    backgroundColor: '#ffb833', // Dark button background
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  alphabetText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Light text color for buttons
  },
});

export default Alphabets;
