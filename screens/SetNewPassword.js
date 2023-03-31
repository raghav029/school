import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity ,ImageBackground,ScrollView,Image} from 'react-native';
import Logo from "../assets/logo.jpg";

const SetNewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSavePress = () => {
    // TODO: Add logic to save the new password
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">

    <View style={styles.container}>
       <ImageBackground source={require('../image/main.jpg')} style={styles.backgroundImage}>
       <View style={styles.root}>
              <Image source={Logo} style={styles.logo} resizeMode="cover" />
            </View>
        
        </ImageBackground>
      <Text style={styles.title}>Set New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:100,
  },
  backgroundImage: {
    flex:1,
    justifyContent: "center",
    height:350,
    width: 500,
},
root: {
  paddingBottom: 150,
},
logo: {
  width: 200,
  height: 200,
  marginLeft: 150,
  marginTop: 500,
  borderColor: "black",
  borderRadius: 100,
  borderWidth: 1,
  shadowColor:'black',
},
  title: {
    fontSize: 24,
   //fontWeight: 'bold',
    marginBottom: 80,
    marginTop:100,
    fontFamily:'Roboto6'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 5,
    width: '80%',
    marginBottom: 10,

  },
  saveButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 90,
  
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SetNewPassword;