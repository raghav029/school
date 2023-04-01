import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/Auth";
import ForgetPassword from "../screens/ForgotPassword";
import SetNewPassword from "../screens/SetNewPassword";
import HomeScreen from "../screens/TeacherScreen";
import StudentsList from "../screens/StudentList";

const screens = {
  Home: {
    screen: Login,
  },
  HomeScreen: {
    screen: HomeScreen,
  },

  forgetpassword: {
    screen: ForgetPassword,
  },

  SetNewPassword: {
    screen: SetNewPassword,
  },

  StudentsList:{
     screen: StudentsList,
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(HomeStack);
