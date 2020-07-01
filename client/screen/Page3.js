import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Button, StatusBar, Platform, Image } from 'react-native';
import Newsfeed from '../components/Newsfeed'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import { Container, Content, Header, Card, CardItem, Left, Right, Input } from "native-base";


export default function Home({ navigation: { navigate } }) {
  const navigation = useNavigation()
  const url = 'http://192.168.1.6:3000'
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`${url}/reports`, {
      headers: {
        'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJyZXphMkBlbWFpbC5jb20iLCJpYXQiOjE1OTMzMDYxNDF9.5x_hXIU6PlxBWfOL5_4GqE5AYcDIQhS6GZ6xh96Dtkk',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(comment => {
        let temp = []
        for (let i = 0; i < comment.length; i++) {
          if (comment[i].UserId === 3) {
            temp.push(comment[i])
          }
        }
        setData(temp)
      })
      .catch(err => {
        console.log(err)
      })
  })

  const onPressDelete = (id) => {
    fetch(`${url}/reports/${id}`, {
      method: 'delete',
      headers: {
        'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJyZXphMkBlbWFpbC5jb20iLCJpYXQiOjE1OTMzMDYxNDF9.5x_hXIU6PlxBWfOL5_4GqE5AYcDIQhS6GZ6xh96Dtkk',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(result => {
        alert('report deleted')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const showEdit = (data) => {
    navigation.navigate('EditPage', { data })
  }

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>My Report</Text>
      </Header>
      <Content padder style={{ backgroundColor: '#f0f0f0' }}>

        {data.map((report) =>
          <CardItem key={report.id}>
            <View style={{ width: 80, height: 100, backgroundColor: '#707070', marginLeft: -10 }}>
              <Image source={{uri: report.photo}} />
            </View>
            <Right style={{ flex: 1, alignItems: "flex-start", height: 100, marginLeft: 15 }}>
              <Text style={{ fontSize: 12, color: '#ccc' }}>By user at {report.createdAt}</Text>
              <Text style={{ fontWeight: 'bold' }}>{report.title}</Text>
              <Text style={{ marginTop: 5, fontStyle: 'italic', color: '#5891FE', fontWeight: '700' }}>Kecamatan: {report.location}</Text>
              <Button onPress={() => onPressDelete(report.id)} title="Del"></Button>
              <Button onPress={() => showEdit(report)} title="Edit"></Button>
            </Right>
          </CardItem>
        )}

      </Content>
{/*
      <View style={{ backgroundColor: "#f0f0f0" }}>
        <FlatList
          data={reports}
          renderItem={(item) => <Report props={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
*/}
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
