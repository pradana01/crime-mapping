import React from 'react';
import { StyleSheet, TextInput, View, Text, Button, Dimensions } from 'react-native';


export default function Page4() {
  return (
    <View style={styles.container}>
      <Text>Crime Port</Text>
      <View>
        <Text>Disini section display picture</Text>
        <View style={styles.column}>
          <Text>Name</Text>
          <TextInput style={styles.input} placeholder="name"/>
        </View>
        <View style={styles.column}>
          <Text>Location</Text>
          <TextInput style={styles.input} placeholder="location"/>
        </View>
        <View style={styles.column}>
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder="email"/>
        </View>
        <View style={styles.column}>
          <Text>Username</Text>
          <TextInput style={styles.input} placeholder="username"/>
        </View>
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
