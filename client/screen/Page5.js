import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Page5(props) {
    const {params} = props.route
    // console.log(params)
  return (
    <View style={styles.container}>
      <Text>ini komen buat id yg : {params}</Text>
      <View>
        <Text>Nanti ada image</Text>
        <Text>ada title</Text>
        <Text>Tarik dari database newsfeed findOne</Text>
      </View>
      <Text>--------------------------------------</Text>
      <View>
        <Text>Ini buat isi komennya</Text>
        <Text>Tarik dari database komen findAll where id newsfeednya {params}</Text>
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
});