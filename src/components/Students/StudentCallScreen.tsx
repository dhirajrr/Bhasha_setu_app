// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { createMeeting, MeetingProvider, useMeeting, MeetingView } from '@videosdk.live/react-native-sdk';

// const StudentCallScreen = () => {
//   const [meetingId, setMeetingId] = useState<string | null>(null);
//   const [meeting, setMeeting] = useState<any>(null);

//   const apiKey = 'YOUR_API_KEY'; // Replace with your VideoSDK API Key

//   const joinMeeting = async () => {
//     try {
//       const id = await createMeeting({ token: apiKey });
//       setMeetingId(id);

//       const meetingInstance = useMeeting({
//         meetingId: id,
//         micEnabled: true,
//         webcamEnabled: false,
//         participantName: 'Student',
//       });

//       setMeeting(meetingInstance);
//       meetingInstance.join();
//     } catch (error) {
//       console.error('Error creating or joining the meeting:', error);
//     }
//   };

//   useEffect(() => {
//     joinMeeting();

//     return () => {
//       meeting?.leave();
//     };
//   }, []);

//   return (
//     <MeetingProvider>
//       <View style={styles.container}>
//         <Text style={styles.title}>Student Call Screen</Text>
//         {meeting ? (
//           <View style={styles.callContainer}>
//             <MeetingView style={styles.meetingView} />
//             <Button title="Leave Meeting" onPress={() => meeting.leave()} />
//           </View>
//         ) : (
//           <Text>Joining the meeting...</Text>
//         )}
//       </View>
//     </MeetingProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   title: { fontSize: 20, marginBottom: 20 },
//   callContainer: { flex: 1, width: '100%', justifyContent: 'center' },
//   meetingView: { flex: 1, width: '100%', height: '100%' },
// });

// export default StudentCallScreen;
