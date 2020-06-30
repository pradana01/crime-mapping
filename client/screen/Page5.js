import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  StatusBar,
  Platform,
  Image,
  Dimensions
} from "react-native";
import Newsfeed from "../components/Newsfeed";
import Constants from "expo-constants";
import { useNavigation } from '@react-navigation/native'
import { Container, Content, Header, Card, CardItem, Left, Right, Textarea, Button } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Page5(props) {
  const navigation = useNavigation()
  const { reportData } = props.route.params
  // console.log(id)
  const [commentData, setCommentData] = useState([])
  const [newComment, setNewComment] = useState('')
  const url = 'http://localhost:3000'

  useEffect(() => {
    fetch(`${url}/comments/${reportData.id}`, {
      headers: {
        'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJyZXphMkBlbWFpbC5jb20iLCJpYXQiOjE1OTMzMDYxNDF9.5x_hXIU6PlxBWfOL5_4GqE5AYcDIQhS6GZ6xh96Dtkk',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(comment => {
        // console.log(id)
        console.log(comment)
        setCommentData(comment)
      })
      .catch(err => {
        console.log(err)
      })
  })


  const onPressAddComment = () => {
    if (newComment) {
      fetch(`${url}/comments`, {
        method: 'post',
        headers: {
          'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJyZXphMkBlbWFpbC5jb20iLCJpYXQiOjE1OTMzMDYxNDF9.5x_hXIU6PlxBWfOL5_4GqE5AYcDIQhS6GZ6xh96Dtkk',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          comment: newComment,
          CrimeReportId: reportData.id
        })
      })
        .then(res => res.json())
        .then(comment => {
          alert('Added a comment')
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      alert('Write something first')
    }
  }

  const pindahPage = () => {
    setCommentData([])
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>Reports Detail</Text>
      </Header>
      <Content style={{ backgroundColor: "#f0f0f0" }}>
        <CardItem style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <View >
              <Image style={{ width: 30, height: 30, borderRadius: 100 }} source={{ uri: reportData.photo }} />
            </View>
            <View style={{ flex: 1, alignItems: "flex-start", height: 30, marginLeft: 15 }}>
              <Text style={{ fontSize: 10, color: "#ccc" }}>{reportData.createdAt}</Text>
              <Text style={{ fontWeight: "bold" }}>user</Text>
            </View>
          </View>

          <View style={{}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 8 }}>{reportData.title}</Text>
            <Text style={{ marginTop: 8 }}>{reportData.description}</Text>
            <Text style={{ marginTop: 8, color: '#5891fe', fontWeight: 'bold' }}>{reportData.location}</Text>
          </View>

        </CardItem>
        <CardItem style={{ marginTop: 5, flexDirection: 'column', alignItems: 'flex-start' }}>
          <Text>Comments : </Text>
          {commentData.map((comment, i) =>
            <View key={i}>
              <Text>{comment.comment}</Text><br />
              <Text>By: {comment.User.name}</Text>
            </View>
          )}
          <View style={{ width: '100%', borderStyle: "solid", borderWidth: 1, borderColor: '#ccc', marginVertical: 8 }}>
            <Textarea rowSpan={2} placeholder='your comment here..' onChangeText={add => setNewComment(add)} />
          </View>
          <Button block onPress={() => onPressAddComment()}>
            <Text style={{ color: '#fff' }}>SUBMIT COMMENT</Text>
          </Button>
        </CardItem>
        <Button block onPress={() => pindahPage()}>
          <Text style={{ color: '#fff' }}>BACK</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    justifyContent: "center",
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});