import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Login from './screens/Auth';
import ForgetPassword from './screens/ForgotPassword'
import SetNewPassword from './screens/SetNewPassword';
import Navigator from './routes/homeStack';
import StudentsList from './screens/StudentList';
import Timetable from './screens/Timetable';
import TeacherScreen from './screens/TeacherScreen';
import ProfilePage from './screens/Profile';
import StudentDetailsPage from './screens/StudentDetails';
import MarksPage from './screens/Marks';
import Attend from './screens/Attendance';
import AttendPercent from './screens/AttendPercent';



const App = () => {
  const [fontsloaded] = useFonts({
    'Rajdhani': require('./assets/fonts/Rajdhani-Bold.ttf'),
    'Rajdhani1': require('./assets/fonts/Rajdhani-Light.ttf'),
    'Rajdhani2': require('./assets/fonts/Rajdhani-Medium.ttf'),
    'Rajdhani3': require('./assets/fonts/Rajdhani-Regular.ttf'),
    'Rajdhani4': require('./assets/fonts/Rajdhani-SemiBold.ttf'),
    'Roboto': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
    'Roboto1': require('./assets/fonts/RobotoCondensed-BoldItalic.ttf'),
    'Roboto2': require('./assets/fonts/RobotoCondensed-Italic.ttf'),
    'Roboto3': require('./assets/fonts/RobotoCondensed-Light.ttf'),
    'Roboto4': require('./assets/fonts/RobotoCondensed-Light.ttf'),
    'Roboto5': require('./assets/fonts/RobotoCondensed-LightItalic.ttf'),
    'Roboto6': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    'Cormorant': require('./assets/fonts/Cormorant-VariableFont_wght.ttf'),
    'Forum': require('./assets/fonts/Forum-Regular.ttf'),

    
  });
  
  if (!fontsloaded) {
    return <Attend/>;
  }

  return (
    <AttendPercent/>
  );
};


export default App;