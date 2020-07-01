import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, StatusBar, Platform, Image } from "react-native";
import Constants from "expo-constants";
import { Container, Content, Header, Card, CardItem, Left, Right, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetch_newsfeed } from "../store/actions/reportAction";
const url = "http://192.168.1.115:3000";

export default function Home({ navigation: { navigate } }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [datas, setDatas] = useState([]);
  const [user, setUser] = useState([]);
  const token = useSelector((state) => state.userReducer.token);
  const newsfeed = useSelector((state) => state.reportReducer.newsfeed);

  useEffect(() => {
    let data = {
      token,
    };
    dispatch(fetch_newsfeed(data));
    setDatas(newsfeed);
  }, [newsfeed]);

  const pindahPage = (reportData) => {
    navigation.navigate("Comment", { reportData });
  };

  return (
    <Container>
      <Content style={{ backgroundColor: "#f0f0f0" }}>
        {newsfeed.length > 0 &&
          newsfeed.map((data, i) => (
            <CardItem key={i}>
              <View style={{ width: 80, height: 100, backgroundColor: "#707070", marginLeft: -10 }}>
                <Image source={{ uri: data.photo }} />
              </View>
              <Right style={{ flex: 1, alignItems: "flex-start", height: 100, marginLeft: 15 }}>
                <Text style={{ fontSize: 12, color: "#ccc" }}>By user: at {data.createdAt}</Text>
                <Text style={{ fontWeight: "bold" }}>{data.title}</Text>
                <Text style={{ marginTop: 5, fontStyle: "italic", color: "#5891FE", fontWeight: "700" }}>
                  Kecamatan : {data.location}
                </Text>
                <Button small onPress={() => pindahPage(data)} style={{ backgroundColor: "#913535" }}>
                  <Text style={{ color: "#fff" }}>View Comment</Text>
                </Button>
              </Right>
            </CardItem>
          ))}
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
    backgroundColor: "#283148",
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
