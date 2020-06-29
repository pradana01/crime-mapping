import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Button, StatusBar, Platform,Image } from 'react-native';
import { Container, Content, Header , Card, CardItem, Left,Right} from "native-base";


export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.mainLogo}>
      <Text>Sign In</Text>
        
      </View>
      <View style={styles.main}>
        <Text>Sign In</Text>
        
      </View>
    </View>
  //   <View style={styles.container}>
  //     <Text>Crime Port</Text>
  //     <View>
  //       <Text>Sign In</Text>
  //       <View style={styles.column}>
  //         <Text>Username</Text>
  //         <TextInput style={styles.input} placeholder="username"/>
  //       </View>
  //       <View style={styles.column}>
  //         <Text>Password</Text>
  //         <TextInput style={styles.input} placeholder="password" secureTextEntry={true}/>
  //       </View>
  //       <View style={styles.column}>
  //         <Button title="Sign In"/>
  //         <Text>If you are new, Register Here!</Text>
  //       </View>
  //     </View>
  //     <View style={styles.column}>
  //         <Text>Or Login With Google</Text>
  //         <Button title="Google"/>
  //       </View>
  //   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5891FE'
    
  },
  mainLogo: {
    width:300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 300,
    height: 240,
    borderRadius: 10,
    shadowColor: '#000',
    shadowRadius: 10,
  }
});
