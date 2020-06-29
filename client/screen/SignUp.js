import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Text, Button, Dimensions } from 'react-native';
import { userSignUp } from '../store/actions/userAction'
import { useDispatch, useSelector } from 'react-redux'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [location, setLocation] = useState('')

  const dispatch = useDispatch()
  const message = useSelector(state => state.userReducer.message)
  
  const user_SignUp = () => {
    let data = {
      email, password, name, username, location
    }
    console.log(data)
    dispatch(userSignUp(data))
    setEmail('')
    setPassword('')
    setName('')
    setUsername('')
    setLocation('')
  }

  return (
    <View style={styles.container}>
      <Text>Crime Port</Text>
      <Text style={{color:"blue"}}>{message && alert(message)}</Text>
      <View>
        <Text>Sign Up</Text>
        <View style={styles.column}>
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder="email" onChangeText={(text) => {setEmail(text)}}/>
        </View>
        <View style={styles.column}>
          <Text>Password</Text>
          <TextInput style={styles.input} placeholder="password" secureTextEntry={true} onChangeText={(text) => {setPassword(text)}}/>
        </View>
        <View style={styles.column}>
          <Text>Name</Text>
          <TextInput style={styles.input} placeholder="name" onChangeText={(text) => {setName(text)}}/>
        </View>
        <View style={styles.column}>
          <Text>Username</Text>
          <TextInput style={styles.input} placeholder="username" onChangeText={(text) => {setUsername(text)}}/>
        </View>
        <View style={styles.column}>
          <Text>Location</Text>
          <TextInput style={styles.input} placeholder="location" onChangeText={(text) => {setLocation(text)}}/>
        </View>
        <View style={styles.column}>
          <Button title="Sign Up" onPress={() => user_SignUp()}/>
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
