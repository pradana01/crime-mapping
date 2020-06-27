import React from 'react';
import { StyleSheet, TextInput, View, Text, Button, Dimensions } from 'react-native';

// tambahin header crime report, nanti dicari contoh nya
export default function Page2() {
  return (
    <View style={styles.container}>
      <Text>Crime Report</Text>
      <View>
        <View style={styles.column}>
          <Text>Title</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.column}>
          <Text>Report Description</Text>
          <TextInput style={styles.input} multiline={true} numberOfLines={4}/>
        </View>
        <View style={styles.column}>
          <Text>Location</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.column}>
          <Text>Photo / Evidence</Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.column}>
          <Button title="Create Report"/>
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
    margin: 4
  },
  input : {
    borderColor: "black",
    borderWidth: 1,
  }
});
