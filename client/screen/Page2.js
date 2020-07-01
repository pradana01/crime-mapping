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
  const url = 'http://93-sde.zudhhyy.client.exp.direct:3000'
  const token = useSelector(state => state.userReducer.token)


  const selectOneVideo = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:'Videos' 
    })
    if (!res.cancelled) {
      console.log(res)
      setVideo(res.uri)
    }
  }

  const selectOneImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });
    
    if (!result.cancelled) {
      // setPhoto(result.uri)
      
      let base64Img = `data:image/jpg;base64,${result.base64}`
      
      //Add your cloud name
      let apiUrl = 'https://api.cloudinary.com/v1_1/andrean/image/upload';
  
      let data = {
        "file": base64Img,
        "upload_preset": "pz1rtvsu",
      }

      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
      }).then(async r => {
          let data = await r.json()
          console.log(data.secure_url)
          return data.secure_url
      }).catch(err=>console.log(err))
}
  }

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>Create Report</Text>
      </Header>
      <Content padder>
        <Form style={{ marginHorizontal: 10 }}>
          <Label style={ styles.label }>Title</Label>
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
            <Text> Submit Report </Text>
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
  },
  label: { 
    marginBottom: 5, 
    fontSize: 15 
  }
});