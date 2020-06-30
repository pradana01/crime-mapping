import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Dimensions } from 'react-native';
import { userLogin } from '../store/actions/userAction'
import { useDispatch } from 'react-redux'

export default function SignIn() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const user_login = () => {
    let data = {
      username, password
    }
    // console.log(data)
    dispatch(userLogin(data))
  }

  return (
    <View style={styles.container}>
      <Text>Crime Port</Text>
      <View>
        <Text>Sign In</Text>
        <View style={styles.column}>
          <Text>Username</Text>
          <TextInput style={styles.input} placeholder="username" onChangeText={(text) => setUsername(text)}/>
        </View>
        <View style={styles.column}>
          <Text>Password</Text>
          <TextInput style={styles.input} placeholder="password" secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
        </View>
        <View style={styles.column}>
          <Button title="Sign In" onPress={() => user_login()}/>
          <Text>If you are new, Register Here!</Text>
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
