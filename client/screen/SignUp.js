import React from 'react';
import { StyleSheet, TextInput, View, Text, Button, Dimensions } from 'react-native';


export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text>Crime Port</Text>
      <View>
        <Text>Sign Up</Text>
        <View style={styles.column}>
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder="email"/>
        </View>
        <View style={styles.column}>
          <Text>Password</Text>
          <TextInput style={styles.input} placeholder="password" secureTextEntry={true}/>
        </View>
        <View style={styles.column}>
          <Text>Name</Text>
          <TextInput style={styles.input} placeholder="name"/>
        </View>
        <View style={styles.column}>
          <Text>Username</Text>
          <TextInput style={styles.input} placeholder="username"/>
        </View>
        <View style={styles.column}>
          <Text>Location</Text>
          <TextInput style={styles.input} placeholder="location"/>
        </View>
        <View style={styles.column}>
          <Button title="Sign Up"/>
          <Text>Already have account? Sign in Here!</Text>
        </View>
      </View>
      <View style={styles.column}>
          <Text>Or Login With Google</Text>
          <Button title="Google"/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  column: {
    width: Dimensions.get('window').width-100,
    margin: 2
  },
  input : {
    borderColor: "black",
    borderWidth: 1,
  }
});
