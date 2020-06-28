import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Container, Content, Header, Form, Item, Input, Label, Textarea, Button } from "native-base";
import AsyncStorage from '@react-native-community/async-storage';

export default function Account() {

  const clearAll = async () => {
    try{
      await AsyncStorage.clear()
    } 
    catch(err) {
      console.log(err)
    }
    console.log('pressed')
  }

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>Account</Text>
      </Header>
      <Content padder>
          <View style={{flex:1, alignItems: 'center'}}>

          </View>
          <Label style={{ marginBottom: 5, fontSize: 15 }}>Name</Label>
          <Item regular disabled>
            <Input bordered placeholder='Input report title' />
          </Item>
          <Label style={{ marginVertical: 5, fontSize: 15 }}>Location</Label>
          <Item regular disabled>
            <Input placeholder='Input report title' />
          </Item>
          <Label style={{ marginBottom: 5, fontSize: 15 }}>Email</Label>
          <Item regular disabled>
            <Input bordered placeholder='Input report title' />
          </Item>
          <Label style={{ marginBottom: 5, fontSize: 15 }}>Username</Label>
          <Item regular disabled>
            <Input bordered placeholder='Input report title' />
          </Item>
          <Button block primary onPress={() => {clearAll()}}>
            <Text>Logout</Text>
          </Button>
      </Content>
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,

      }
    })
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
});