import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Login from '../school/screens/auth';
import ForgetPassword from '../school/screens/forgotpassword'
import SetNewPassword from './screens/SetNewPassword';
import Navigator from './routes/homeStack';
import StudentsList from './screens/studentlist';
import Timetable from './screens/Timetable';
import HomeScreen from './screens/TeacherScreen';
import TeacherScreen from './screens/TeacherScreen';
import ProfilePage from './screens/profile';



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

    
  });
  
  if (!fontsloaded) {
    return <AppLoading/>;
  }

  return (
    <StudentsList/>
  );
};


export default App;