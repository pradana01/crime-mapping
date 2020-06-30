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

import { useSelector, useDispatch } from "react-redux";
import {fetch_newsfeed} from '../store/actions/reportAction'
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
  const dispatch = useDispatch()
  const newsfeed = useSelector(state => state.reportReducer.newsfeed)
  const token = useSelector(state => state.userReducer.token)

  useEffect(() => {
    let data = {
      token
    }
    dispatch(fetch_newsfeed(data))
  },[])

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>News Feed</Text>
      </Header>
      {/* <Content style={{ backgroundColor: "#f0f0f0" }}> */}
        <View style={{backgroundColor: '#f0f0f0'}}>
        <FlatList
          data={newsfeed}
          renderItem={(item) => <Newsfeed props={item} />}
          keyExtractor={item => String(item.id)}/>
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
