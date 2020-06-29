import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
  StatusBar,
  Platform,
  Image,
} from "react-native";
import Newsfeed from "../components/Newsfeed";
import Constants from "expo-constants";
import { Container, Content, Header, Card, CardItem, Left, Right } from "native-base";

import axios from 'axios'
import { useSelector } from "react-redux";

const Data = [
  {
    id: "1",
    title: "AAA",
    comment: "wah gak bener ini asu",
    image:
      "https://risetcdn.jatimtimes.com/images/2020/02/06/Masuk-2020-600-Lebih-Tindak-Kejahatan-Belum-Diungkap-Polres-Malang73bb576a2f94d5ab.md.jpg",
  },
  {
    id: "2",
    title: "BBB",
    comment: "ih jambret",
    image: "https://cdn2.tstatic.net/jambi/foto/bank/images/ilustrasi-jambret.jpg",
  },
  {
    id: "3",
    title: "CCC",
    comment: "Maling curanmor",
    image: "https://tribratanewsbengkulu.com/wp-content/uploads/20160109011636-curanmor.jpg",
  },
];

const URL = "https://tribratanewsbengkulu.com/wp-content/uploads/20160109011636-curanmor.jpg";

export default function Home({ navigation: { navigate } }) {

  const [newsfeed, setNewsfeed] = useState([])
  const token = useSelector(state => state.userReducer.token)

  useEffect(() => {
    fetch(`http://192.168.0.105:3000/reports`,{
      headers: token
    })
    .then(res => res.json())
    .then(data => {
      setNewsfeed(data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>News Feed</Text>
      </Header>
      {/* <Content style={{ backgroundColor: "#f0f0f0" }}> */}
        <View>
        <FlatList
          data={newsfeed}
          renderItem={(item) => <Newsfeed props={item} />}
          keyExtractor={item => item.id}/>
        </View>
      {/* </Content> */}
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
