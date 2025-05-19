// import React, { useEffect, useState } from 'react';
// import { View, Button, Text, StyleSheet } from 'react-native';
// import { createMeeting, useMeeting } from '@videosdk.live/react-native-sdk';

// const TeacherCallScreen = () => {
//   const [meetingId, setMeetingId] = useState<string | null>(null);
//   const [isMeetingStarted, setIsMeetingStarted] = useState(false);

//   const apiKey = 'YOUR_API_KEY'; // Replace with your VideoSDK API Key

//   // Create Meeting and Initialize
//   const initializeMeeting = async () => {
//     try {
//       const meetingId = await createMeeting({ token: apiKey });
//       setMeetingId(meetingId);
//     } catch (error) {
//       console.error('Error creating meeting:', error);
//     }
//   };

//   const meeting = useMeeting({
//     meetingId: meetingId || '',
//     micEnabled: true,
//     webcamEnabled: true,
//     participantName: 'Teacher',
//   });

//   // Start Meeting
//   useEffect(() => {
//     if (meetingId) {
//       setIsMeetingStarted(true);
//       meeting.join();
//     }
//     return () => {
//       if (isMeetingStarted) {
//         meeting.leave();
//       }
//     };
//   }, [meetingId]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Teacher Call Screen</Text>
//       {isMeetingStarted ? (
//         <View style={styles.callContainer}>
//           <meeting.MeetingView style={styles.meetingView} />
//           <Button title="End Meeting" onPress={() => meeting.leave()} />
//         </View>
//       ) : (
//         <Button title="Start Meeting" onPress={initializeMeeting} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   title: { fontSize: 20, marginBottom: 20 },
//   callContainer: { flex: 1, width: '100%', justifyContent: 'center' },
//   meetingView: { flex: 1, width: '100%', height: '100%' },
// });

// export default TeacherCallScreen;
