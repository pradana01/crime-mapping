import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, Button, StatusBar, Platform, Image } from "react-native";
import Newsfeed from "../components/Newsfeed";
import { Container, Content, Header, Card, CardItem, Left, Right } from "native-base";
import Constants from "expo-constants";

import { useSelector, useDispatch } from "react-redux";
import { fetch_newsfeed } from "../store/actions/reportAction";

export default function Home({ navigation: { navigate } }) {
  const dispatch = useDispatch();
  const newsfeed = useSelector((state) => state.reportReducer.newsfeed);
  const token = useSelector((state) => state.userReducer.token);

  useEffect(() => {
    let data = {
      token,
    };
    dispatch(fetch_newsfeed(data));
  }, []);

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>News Feed</Text>
      </Header>
      <View style={{ backgroundColor: "#f0f0f0" }}>
        <FlatList
          data={newsfeed}
          renderItem={(item) => <Newsfeed props={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
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
