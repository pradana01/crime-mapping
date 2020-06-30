import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native'
import { TextInput, ScrollView } from 'react-native-gesture-handler';

export default function Page5(props) {
  const navigation = useNavigation()
  const { id, title, location, photo, video } = props.route.params
  // console.log(id)
  const [commentData, setCommentData] = useState([])
  const [newComment, setNewComment] = useState('')
  const url = 'http://localhost:3000'

  useEffect(() => {
    fetch(`${url}/comments/${id}`, {
      headers: {
        'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJyZXphMkBlbWFpbC5jb20iLCJpYXQiOjE1OTMzMDYxNDF9.5x_hXIU6PlxBWfOL5_4GqE5AYcDIQhS6GZ6xh96Dtkk',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(comment => {
        console.log(id)
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
          CrimeReportId: id
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
    <View style={styles.container}>
      <View>
        <View>
          <Image
            style={styles.logo}
            source={{ uri: photo }} />
        </View>
        <View>
          <Text>{title}</Text>
          <Text>{location}</Text>
          <Text>{video}</Text>
        </View>
      </View>
      <Text>--------------------------------------</Text>
      <ScrollView>
        <View>
          <Text>Comments:</Text>
          {commentData.map((comment, i) => <Text key={i}>{comment.comment}<br />by: {comment.User.name}</Text>)}
        </View>
        <View style={styles.addComment}>
          <Text>--------------------------------------</Text>
          <Text>Add comment</Text>
          <TextInput
            onChangeText={add => setNewComment(add)}
            placeholder="add a comment"
          />
          <Button
            onPress={() => onPressAddComment()}
            title="Add"
          />
        </View>
        <Text> </Text>
        <Button
          onPress={() => pindahPage()}
          title="Back" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    color: "white"
  },
  logo: {
    width: 200,
    height: 200,
  },
  addComment: {
    border: "solid black 1px"
  }
});