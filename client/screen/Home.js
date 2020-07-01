import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Platform, Image } from "react-native";
import { Container, Content, CardItem, Right, Button, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { fetch_newsfeed } from "../store/actions/reportAction";
import { useSelector, useDispatch } from "react-redux";

export default function Home({ navigation: { navigate } }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [datas, setDatas] = useState([]);
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
        <View style={{ alignItems: "center", width: "100%", height: 105, backgroundColor: "#283148" }}></View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 55,
            marginTop: -75,
            borderRadius: 15,
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#f0f0f0",
              height: 100,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          ></View>
        </View>
        <View style={{ marginTop: -50 }}>
          {newsfeed.length > 0 &&
            newsfeed.map((data, i) => (
              <CardItem key={i} style={{ borderRadius: 10, marginHorizontal: 15, marginVertical: 5 }}>
                <View>
                  {data.photo == "" ? (
                    <Image
                      style={{ width: 80, height: 100, borderRadius: 7 }}
                      source={{ uri: "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg" }}
                    />
                  ) : (
                    <Image style={{ width: 80, height: 100, borderRadius: 7 }} source={{ uri: data.photo }} />
                  )}
                </View>
                <Right style={{ flex: 3, alignItems: "flex-start", height: 100, marginLeft: 15 }}>
                  <Text style={{ fontSize: 12, color: "#ccc" }}>By user: at {data.createdAt.split("T")[0]}</Text>
                  <Text style={{ fontWeight: "bold" }}>{data.title}</Text>
                  <Text style={{ marginTop: 5, fontStyle: "italic", color: "#5891FE", fontSize: 12 }}>
                    Kecamatan : {data.location}
                  </Text>
                </Right>
                <View style={{}}>
                  <View>
                    <Button
                      onPress={() => pindahPage(data)}
                      style={{ backgroundColor: "#fff", borderRadius: 5, elevation: 0 }}
                    >
                      <Icon name="eye" style={{ fontSize: 25, color: "#913535" }} />
                    </Button>
                  </View>
                  <View>
                    <Text style={{ color: "#913535", fontSize: 10, textAlign: "center" }}>View Detail</Text>
                  </View>
                </View>
              </CardItem>
            ))}
        </View>
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
