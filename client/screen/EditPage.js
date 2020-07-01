import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Container, Content, Header, Form, Item, Input, Label, Textarea, Button } from "native-base";
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';
import { useSelector } from 'react-redux';

export default function Edit({ route: { params: { data } } }) {
  const navigation = useNavigation()
  const id = data.id
  const [title, setTitle] = useState(data.title)
  const [description, setDescription] = useState(data.description)
  const [location, setLocation] = useState(data.location)
  const [photo, setPhoto] = useState(data.photo)
  const [video, setVideo] = useState(data.video)

  const url = 'http://192.168.0.105:3000'
  const token = useSelector(state => state.userReducer.token)

  const selectOneVideo = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'Videos',
      base64: true
    })
    if (!res.cancelled) {
      let base64Vid = `data:image/jpg;base64,${res.base64}`
      console.log(res)
      setVideo(base64Vid)
    }
  }

  const selectOneImage = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      base64: true
    })
    if (!res.cancelled) {
      let base64Img = `data:image/jpg;base64,${res.base64}`
      console.log(res)
      setPhoto(base64Img)
    }
  }

  const onPressed = () => {
    fetch(`${url}/reports/${id}`, {
      method: 'put',
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
      // files: {
      //   photo,
      //   video
      // }
    })
      .then(res => res.json())
      .then(report => { 
        alert(`You've successfuly edited the report`)
        navigation.navigate('MyReport')
      })
      .catch(err => {
        alert(err)
      })
  }

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>Edit Report</Text>
      </Header>
      <Content padder>
        <Form style={{ marginHorizontal: 10 }}>
          <Label style={{ marginBottom: 5, fontSize: 15 }}>Title</Label>
          <Item regular>
            <Input
              bordered
              onChangeText={title => setTitle(title)}
            ></Input>
          </Item>
          <Label style={{ marginVertical: 5, fontSize: 15 }}>Description</Label>
          <Item regular>
            <Input
              rowSpan={5}
              onChangeText={desc => setDescription(desc)}
            />
          </Item>
          <Label style={{ marginVertical: 5, fontSize: 15 }}>Location</Label>
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
          />
          <Button
            bordered
            onPress={() => selectOneVideo()}
          />
          <Button
            block
            primary
            onPress={() => onPressed()}
          >
            <Text>

              Submit
            </Text>
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
    })
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
});