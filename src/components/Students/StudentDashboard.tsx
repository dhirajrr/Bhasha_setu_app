// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Sidebar from '../Students/StudentSideBar';

// const StudentDashboard: React.FC = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const navigation = useNavigation();
//   const aiIconYPosition = useState(new Animated.Value(0))[0]; // Initial position of the AI icon

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   const handleCategoryPress = (category: string) => {
//     switch (category) {
//       case 'Alphabet':
//         navigation.navigate('Alphabet');
//         break;
//       case 'English_Alphabets':
//         navigation.navigate('English_Alphabets');
//         break;
//       case 'Text_to_Video':
//         navigation.navigate('Text_to_Video');
//         break;
//       case 'WhiteBoardScreens':
//         navigation.navigate('WhiteBoardScreens');
//         break;
//       case 'Physics Course':
//         navigation.navigate('PhysicsCourse');
//         break;
//       case 'English Course':
//         navigation.navigate('EnglishCourse');
//         break;
//       case 'More Courses':
//         navigation.navigate('MoreCourses');
//         break;
//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     // Trigger the jump animation on component mount with a slower speed
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(aiIconYPosition, {
//           toValue: -10, // Move the AI icon up
//           duration: 1000, // Slower duration
//           useNativeDriver: true,
//         }),
//         Animated.timing(aiIconYPosition, {
//           toValue: 0, // Return the AI icon to its original position
//           duration: 1000, // Slower duration
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();
//   }, [aiIconYPosition]);

//   return (
//     <>
//       <ScrollView contentContainerStyle={styles.container}>
//         {/* Header Section */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Dashboard</Text>
//           <TouchableOpacity onPress={toggleSidebar}>
//             <Image
//               source={{ uri: 'https://via.placeholder.com/40' }}
//               style={styles.profileIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Banner Section */}
//         <View style={styles.bannerContainer}>
//           <Image
//             source={require('../../assets/heroimage.jpg')}
//             style={styles.bannerImage}
//           />
//           <View style={styles.bannerTextContainer}>
//             <Text style={styles.bannerTitle}>Personalized Tutoring</Text>
//             <Text style={styles.bannerSubtitle}>Find the best courses tailored for you</Text>
//             <TouchableOpacity style={styles.bannerButton}>
//               <Text style={styles.bannerButtonText}>Get Started</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Select Class Section */}
//         <View style={styles.selectClassContainer}>
//           <Text style={styles.selectClassTitle}>Select Your Class</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <TouchableOpacity
//               style={[styles.classCard, { backgroundColor: '#FFB74D' }]}
//               onPress={() => navigation.navigate('S_Class1')}
//             >
//               <Text style={styles.classCardText}>Class 1</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.classCard, { backgroundColor: '#4FC3F7' }]}
//               onPress={() => navigation.navigate('S_Class2')}
//             >
//               <Text style={styles.classCardText}>Class 2</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.classCard, { backgroundColor: '#81C784' }]}
//               onPress={() => navigation.navigate('Class3')}
//             >
//               <Text style={styles.classCardText}>Class 3</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.classCard, { backgroundColor: '#FF8A65' }]}
//               onPress={() => navigation.navigate('Class4')}
//             >
//               <Text style={styles.classCardText}>Class 4</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.classCard, { backgroundColor: '#BA68C8' }]}
//               onPress={() => navigation.navigate('')}
//             >
//               <Text style={styles.classCardText}>Class 5</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>

//         {/* Categories Section */}
//         <View style={styles.categoriesContainer}>
//           <TouchableOpacity
//             style={[styles.categoryCard, { backgroundColor: '#FFB74D' }]}
//             onPress={() => handleCategoryPress('Alphabet')}
//           >
//             <Image
//               source={require('../../assets/gujarati_logo.png')}
//               style={styles.categoryIcon}
//             />
//             <Text style={styles.categoryText}>Gujarati Alphabets</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.categoryCard, { backgroundColor: '#4FC3F7' }]}
//             onPress={() => handleCategoryPress('English_Alphabets')}
//           >
//             <Image
//               source={require('../../assets/englishalpha.jpeg')}
//               style={styles.categoryIcon}
//             />
//             <Text style={styles.categoryText}>English Alphabets</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.categoryCard, { backgroundColor: '#81C784' }]}
//             onPress={() => handleCategoryPress('Text_to_Video')}
//           >
//             <Image
//               source={require('../../assets/textVideo.jpeg')}
//               style={styles.categoryIcon}
//             />
//             <Text style={styles.categoryText}>Text to Video</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.categoryCard, { backgroundColor: '#FF8A65' }]}
//             onPress={() => handleCategoryPress('WhiteBoardScreens')}
//           >
//             <Image
//               source={require('../../assets/whiteboard.png')}
//               style={styles.categoryIcon}
//             />
//             <Text style={styles.categoryText}>WhiteBoard</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.categoryCard, { backgroundColor: '#BA68C8' }]}
//             onPress={() => handleCategoryPress('Physics Course')}
//           >
//             <Image
//               source={{ uri: 'https://via.placeholder.com/50' }}
//               style={styles.categoryIcon}
//             />
//             <Text style={styles.categoryText}>Physics Course</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.categoryCard, { backgroundColor: '#FFD54F' }]}
//             onPress={() => handleCategoryPress('English Course')}
//           >
//             <Image
//               source={{ uri: 'https://via.placeholder.com/50' }}
//               style={styles.categoryIcon}
//             />
//             <Text style={styles.categoryText}>English Course</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.categoryCard, { backgroundColor: '#90A4AE' }]}
//             onPress={() => handleCategoryPress('More Courses')}
//           >
//             <Image
//               source={{ uri: 'https://via.placeholder.com/50' }}
//               style={styles.categoryIcon}
//             />
//             <Text style={styles.categoryText}>More Courses</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       {/* Floating AI Icon Above Footer */}
//       <Animated.View
//         style={[styles.aiIcon, { transform: [{ translateY: aiIconYPosition }] }]}
//       >
//         <TouchableOpacity
//           onPress={() => navigation.navigate('TextToImageAI')}
//         >
//           <Image
//             source={require('../../assets/chatbot.png')}
//             style={styles.aiIconImage}
//           />
//         </TouchableOpacity>
//       </Animated.View>

      

//       {/* Footer */}
//       <View style={styles.footer}>
//         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//           <Text style={styles.footerText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//           <Text style={styles.footerText}>Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
//           <Text style={styles.footerText}>Settings</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Sidebar */}
//       {isSidebarVisible && <Sidebar toggleSidebar={toggleSidebar} />}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 10,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//     backgroundColor: '#E3F2FD',
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#1976D2',
//   },
//   profileIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   bannerContainer: {
//     backgroundColor: '#E3F2FD',
//     borderRadius: 10,
//     marginBottom: 20,
//     overflow: 'hidden',
//   },
//   bannerImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'cover',
//   },
//   bannerTextContainer: {
//     padding: 15,
//     alignItems: 'center',
//   },
//   bannerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#1976D2',
//     marginBottom: 5,
//   },
//   bannerSubtitle: {
//     fontSize: 14,
//     color: '#455A64',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   bannerButton: {
//     backgroundColor: '#1976D2',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//   },
//   bannerButtonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   selectClassContainer: {
//     marginBottom: 20,
//   },
//   selectClassTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#1976D2',
//     marginBottom: 10,
//   },
//   classCard: {
//     padding: 20,
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   classCardText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   categoriesContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   categoryCard: {
//     width: '48%',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   categoryIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 10,
//   },
//   categoryText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#FFFFFF',
//   },
//   aiIcon: {
//     position: 'absolute',
//     bottom: 80, // Adjust this to move above the footer
//     right: 20,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 30,
//     padding: 5,
//     elevation: 5,
//   },
//   aiIconImage: {
//     width: 43,
//     height: 43,
//     borderRadius: 20,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#E3F2FD',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//   },
//   footerText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#1976D2',
//   },
// });

// export default StudentDashboard;









import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sidebar from '../Students/StudentSideBar';

const StudentDashboard: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const navigation = useNavigation();
  const aiIconYPosition = useState(new Animated.Value(0))[0]; // Initial position of the first AI icon
  const aiIconYPosition2 = useState(new Animated.Value(0))[0]; // Initial position of the second AI icon

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleCategoryPress = (category: string) => {
    switch (category) {
      case 'Alphabet':
        navigation.navigate('Alphabet');
        break;
      case 'English_Alphabets':
        navigation.navigate('English_Alphabets');
        break;
      case 'Text_to_Video':
        navigation.navigate('Text_to_Video');
        break;
      case 'WhiteBoardScreens':
        navigation.navigate('WhiteBoardScreens');
        break;
      case 'Physics Course':
        navigation.navigate('PhysicsCourse');
        break;
      case 'English Course':
        navigation.navigate('EnglishCourse');
        break;
      case 'More Courses':
        navigation.navigate('MoreCourses');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Trigger the jump animation on component mount with a slower speed
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(aiIconYPosition, {
          toValue: -10, // Move the first AI icon up
          duration: 1000, // Slower duration
          useNativeDriver: true,
        }),
        Animated.timing(aiIconYPosition, {
          toValue: 0, // Return the first AI icon to its original position
          duration: 1000, // Slower duration
          useNativeDriver: true,
        }),
      ])
    );

    const animation2 = Animated.loop(
      Animated.sequence([
        Animated.timing(aiIconYPosition2, {
          toValue: -10, // Move the second AI icon up
          duration: 1000, // Slower duration
          useNativeDriver: true,
        }),
        Animated.timing(aiIconYPosition2, {
          toValue: 0, // Return the second AI icon to its original position
          duration: 1000, // Slower duration
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();
    animation2.start();

    return () => {
      animation.stop();
      animation2.stop();
    };
  }, [aiIconYPosition, aiIconYPosition2]);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <TouchableOpacity onPress={toggleSidebar}>
            <Image
              source={{ uri: 'https://via.placeholder.com/40' }}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/heroimage.jpg')}
            style={styles.bannerImage}
          />
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Personalized Tutoring</Text>
            <Text style={styles.bannerSubtitle}>Find the best courses tailored for you</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Select Class Section */}
        <View style={styles.selectClassContainer}>
          <Text style={styles.selectClassTitle}>Select Your Class</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[styles.classCard, { backgroundColor: '#FFB74D' }]}
              onPress={() => navigation.navigate('S_Class1')}
            >
              <Text style={styles.classCardText}>Class 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.classCard, { backgroundColor: '#4FC3F7' }]}
              onPress={() => navigation.navigate('S_Class2')}
            >
              <Text style={styles.classCardText}>Class 2</Text>
            </TouchableOpacity>
            ```javascript
            <TouchableOpacity
              style={[styles.classCard, { backgroundColor: '#81C784' }]}
              onPress={() => navigation.navigate('Class3')}
            >
              <Text style={styles.classCardText}>Class 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.classCard, { backgroundColor: '#FF8A65' }]}
              onPress={() => navigation.navigate('Class4')}
            >
              <Text style={styles.classCardText}>Class 4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.classCard, { backgroundColor: '#BA68C8' }]}
              onPress={() => navigation.navigate('S_Class5')}
            >
              <Text style={styles.classCardText}>Class 5</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Categories Section */}
        <View style={styles.categoriesContainer}>
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: '#FFB74D' }]}
            onPress={() => handleCategoryPress('Alphabet')}
          >
            <Image
              source={require('../../assets/gujarati_logo.png')}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>Gujarati Alphabets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: '#4FC3F7' }]}
            onPress={() => handleCategoryPress('English_Alphabets')}
          >
            <Image
              source={require('../../assets/englishalpha.jpeg')}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>English Alphabets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: '#81C784' }]}
            onPress={() => handleCategoryPress('Text_to_Video')}
          >
            <Image
              source={require('../../assets/textVideo.jpeg')}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>Text to Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: '#FF8A65' }]}
            onPress={() => handleCategoryPress('WhiteBoardScreens')}
          >
            <Image
              source={require('../../assets/whiteboard.png')}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>WhiteBoard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: '#BA68C8' }]}
            onPress={() => handleCategoryPress('Physics Course')}
          >
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>Physics Course</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: '#FFD54F' }]}
            onPress={() => handleCategoryPress('English Course')}
          >
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>English Course</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: '#90A4AE' }]}
            onPress={() => handleCategoryPress('More Courses')}
          >
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>More Courses</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Floating AI Icons Above Footer */}
      <Animated.View
        style={[styles.aiIcon1, { transform: [{ translateY: aiIconYPosition }] }]} // First AI icon
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('AIHelper')}
        >
          <Image
            source={require('../../assets/chatbot.png')}
            style={styles.aiIconImage}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[styles.aiIcon2, { transform: [{ translateY: aiIconYPosition2 }] }]} // Second AI icon
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('TextToImageAI')}
        >
          <Image
            source={require('../../assets/chatbot.png')}
            style={styles.aiIconImage}
          />
        </TouchableOpacity>
      </Animated.View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate ('StudentSideBar')}>
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.footerText}>Model</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProgressTracking')}>
          <Text style={styles.footerText}>Progress</Text>
        </TouchableOpacity>
      </View>

      {/* Sidebar */}
      {isSidebarVisible && <Sidebar toggleSidebar={toggleSidebar} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bannerContainer: {
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  bannerTextContainer: {
    padding: 15,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 5,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#455A64',
    marginBottom: 10,
    textAlign: 'center',
  },
  bannerButton: {
    backgroundColor: '#1976D2',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  bannerButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectClassContainer: {
    marginBottom: 20,
  },
  selectClassTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 10,
  },
  classCard: {
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  classCardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryCard: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  aiIcon1: {
    position: 'absolute',
    right: 20,
    bottom: 120, // Position for the first AI icon
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 5,
    elevation: 5,
  },
  aiIcon2: {
    position: 'absolute',
    right: 20,
    bottom: 60, // Position for the second AI icon
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 5,
    elevation: 5,
  },
  aiIconImage: {
    width: 43,
    height: 43,
    borderRadius: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
  },
});

export default StudentDashboard;