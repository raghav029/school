
import React, { useState } from "react";
import { StatusBar } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Logo from "../assets/logo.jpg";
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const handleForgotPassword = () => {
    navigation.navigate("forgetpassword");
  };
  const handleLogin = () => {
    if (username === "raghav" && password === "12345") {
      navigation.navigate("HomeScreen");
    } else {
      alert("Invalid username or password");
    }
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <ImageBackground
            source={require("../image/main.jpg")}
            style={styles.image}
          >
            <View style={styles.root}>
              <Image source={Logo} style={[styles.logo]} resizeMode="cover"/>
            </View>
          </ImageBackground>
          <Text style={styles.heading}>
            -------Ardeshalli Govt School-------{" "}
          </Text>

          <View style={{width:350,alignItems:'center',top:40}}>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#808080" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#808080" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon
            name={isPasswordVisible ? 'eye-slash' : 'eye'}
            size={20}
            color="#808080"
            style={styles.passwordIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.LoginbuttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>
              Forgot Password? Click here
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    height: 350,
    width: 500,
    flexWrap: "wrap",
  },
  heading: {
   //fontWeight: "800",
    marginTop: 100,
    fontFamily:'Roboto',
    fontSize:20
  },
  root: {
    paddingBottom: 150,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.84,
    elevation: 50,
  },
  logo: {
    width: 200,
    height: 200,
    marginLeft: 150,
    borderColor: "black",
    borderRadius: 100,
    borderWidth: 1,
    top:250,
    

    
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 100,
  },

  loginTypeContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 60,
    justifyContent:'space-between',
  },
  
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    width: "50%",
    fontSize: 18,
  },
  LoginbuttonText: {
    color: "white",
    fontSize: 18,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    marginTop:50
  },
  text: {
    color: "black",
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    marginBottom: 10,
    
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000000',
  },

});

export default Login;
