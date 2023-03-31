import React, { useState } from 'react';
import { View, TextInput, StyleSheet,Text } from 'react-native';

const Test1 = () => {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>{username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  usernameContainer: {
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: '#FFF',
    paddingHorizontal: 5,
  },
  usernameText: {
    fontSize: 12,
    color: '#333',
  },
});

export default Test1;
