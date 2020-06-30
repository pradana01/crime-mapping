import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Container, Content, Header, Form, Item, Input, Label, Textarea, Button } from "native-base";
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';

export default function Edit({ route: { params: { data } } }) {
  const navigation = useNavigation()
  const id = data.id
  const [title, setTitle] = useState(data.title)
  const [description, setDescription] = useState(data.description)
  const [location, setLocation] = useState(data.location)
  const [photo, setPhoto] = useState(data.photo)
  const [video, setVideo] = useState(data.video)
  const url = 'http://localhost:3000'

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
      console.log(res)
      setPhoto(res.uri)
    }
  }

  const onPressed = () => {
    fetch(`${url}/reports/${id}`, {
      method: 'put',
      headers: {
        'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJyZXphMkBlbWFpbC5jb20iLCJpYXQiOjE1OTMzMDYxNDF9.5x_hXIU6PlxBWfOL5_4GqE5AYcDIQhS6GZ6xh96Dtkk',
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
        navigation.navigate('My Report')
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
              placeholder={title}
              onChangeText={title => setTitle(title)}
            ></Input>
          </Item>
          <Label style={{ marginVertical: 5, fontSize: 15 }}>Description</Label>
          <Item regular>
            <Textarea
              rowSpan={5}
              placeholder={description}
              onChangeText={desc => setDescription(desc)}
            />
          </Item>
          <Label style={{ marginVertical: 5, fontSize: 15 }}>Location</Label>
          <Item regular>
            <Input
              bordered
              placeholder={location}
              onChangeText={loc => setLocation(loc)}
            />
          </Item>
          <Label style={{ marginVertical: 5, fontSize: 15 }}>Input file</Label>
          <Button
            bordered
            placeholder={photo}
            onPress={() => selectOneImage()}
          />
          <Button
            bordered
            placeholder={video}
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