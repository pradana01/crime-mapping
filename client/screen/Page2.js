import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Container, Content, Header, Form, Item, Input, Label, Textarea, Button } from "native-base";
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';
import { useSelector } from 'react-redux';

export default function Create() {
  const navigation = useNavigation()
  const [title, setTitle] = useState('Input report title')
  const [description, setDescription] = useState('Input description')
  const [location, setLocation] = useState('Input location')
  const [photo, setPhoto] = useState('')
  const [video, setVideo] = useState('')
  const url = 'http://192.168.1.115:3000'
  const token = useSelector(state => state.userReducer.token)


  const selectOneVideo = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'Videos'
    })
    if (!res.cancelled) {
      console.log(res)
      setVideo(res.uri)
    }
  }

  const selectOneImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync()
    if (!res.cancelled) {
      console.log(res.uri)
      setPhoto(res.uri)
    }
  }

  const onPressed = () => {
    fetch(`${url}/reports`, {
      method: 'post',
      headers: {
        'access_token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        location,
        photo,
        video
      }),
    })
      .then(res => res.json())
      .then(report => {
        alert(`You've successfuly submitted a report`)
        navigation.navigate('My Report')
      })
      .catch(err => {
        // console.log(err)
        alert(err)
      })
  }

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>Create Report</Text>
      </Header>
      <Content padder>
        <Form style={{ marginHorizontal: 10 }}>
          <Label style={styles.label}>Title</Label>
          <Item regular>
            <Input
              bordered
              onChangeText={title => setTitle(title)}
            />
          </Item>
          <Label style={styles.label}>Description</Label>
          <Item regular>
            <Input
              rowSpan={5}
              onChangeText={desc => setDescription(desc)}
            />
          </Item>
          <Label style={styles.label}>Location</Label>
          <Item regular>
            <Input
              bordered
              onChangeText={loc => setLocation(loc)}
            />
          </Item>
          <Label style={{ marginVertical: 5, fontSize: 15 }}>Input file</Label>
          <Button
            bordered
            onPress={() => selectOneImage()}
          >
            <Text>Upload Image</Text>
          </Button>
          <Button
            bordered
            onPress={() => selectOneVideo()}
          >
            <Text>Upload Video</Text>
          </Button>
          <Button
            block
            primary
            onPress={() => onPressed()}
            style={{ marginVertical: 10 }}
          >
            <Text style={{color:'#fff'}}> Submit Report </Text>
          </Button>
        </Form>
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
    }),
    backgroundColor: '#283148'
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    marginBottom: 5,
    fontSize: 15
  }
});