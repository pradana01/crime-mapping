import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet, Text, View, FlatList, ScrollView, StatusBar, Platform, Image, Dimensions } from "react-native";
import Newsfeed from "../components/Newsfeed";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Header, Card, CardItem, Left, Right, Textarea, Button } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
export default function Page5(props) {
  const navigation = useNavigation();
  const { reportData } = props.route.params;
  // console.log(id)
  const [commentData, setCommentData] = useState([]);
  const [newComment, setNewComment] = useState("");
  const url = "https://crimeport-orchestrator.herokuapp.com";
  // const url = "http://192.168.1.115:3000";
  const token = useSelector((state) => state.userReducer.token);
  const [render, setRender] = useState(true);

  useEffect(() => {
    fetch(`${url}/comments/${reportData.id}`, {
      headers: {
        access_token: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((comment) => {
        setCommentData(comment);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render]);

  const onPressAddComment = () => {
    if (newComment) {
      fetch(`${url}/comments`, {
        method: "post",
        headers: {
          access_token: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: newComment,
          CrimeReportId: reportData.id,
        }),
      })
        .then((res) => res.json())
        .then((comment) => {
          alert("Thanks for commenting!!");
          setRender(!render);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Write something first");
    }
  };

  const pindahPage = () => {
    setCommentData([]);
    navigation.navigate("Home");
  };

  return (
    <Container>
      {/* <Header style={styles.header}>
        <Text style={styles.titleHeader}>Reports Detail</Text>
      </Header> */}
      <Content padder style={{ backgroundColor: "#f0f0f0" }}>
        <CardItem style={{ flexDirection: "column", borderRadius: 10 }}>
          <View style={{ flexDirection: "row", marginBottom: 15 }}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#707070",
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="account" style={{ color: "#fff", fontSize: 20 }} />
            </View>
            <View style={{ flex: 1, alignItems: "flex-start", height: 30, marginLeft: 15 }}>
              <Text style={{ fontSize: 10, color: "#ccc" }}>{reportData.createdAt}</Text>
              <Text style={{ fontWeight: "bold" }}>user</Text>
            </View>
          </View>

          <View style={{ width: "100%" }}>
            {reportData.photo == "" ? (
              <Image
                style={{ width: 80, height: 100, borderRadius: 7 }}
                source={{ uri: "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg" }}
              />
            ) : (
              <Image style={{ width: 80, height: 100, borderRadius: 7 }} source={{ uri: reportData.photo }} />
            )}
            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 8 }}>{reportData.title}</Text>
            <Text style={{ marginTop: 8 }}>{reportData.description}</Text>
            <Text style={{ marginTop: 8, color: "#5891fe", fontWeight: "bold" }}>{reportData.location}</Text>
          </View>
        </CardItem>
        <CardItem style={{ marginTop: 5, flexDirection: "column", alignItems: "flex-start", borderRadius: 10 }}>
          <Text style={{ marginBottom: 10, fontWeight: "700" }}>Comments : </Text>
          {commentData.map((comment, i) => (
            <View key={i} style={{ marginVertical: 5, flexDirection: "row" }}>
              <View style={{ marginRight: 5, marginLeft: -5 }}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: "#707070",
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name="account" style={{ color: "#fff", fontSize: 12 }} />
                </View>
              </View>
              <View style={{ marginTop: -3 }}>
                <Text style={{ color: "#913535", fontWeight: "bold" }}>{comment.User.name}</Text>
                <Text>{comment.comment}</Text>
              </View>
            </View>
          ))}
          <View style={{ width: "100%", borderStyle: "solid", borderWidth: 1, borderColor: "#ccc", marginVertical: 8 }}>
            <Textarea rowSpan={2} placeholder="your comment here.." onChangeText={(add) => setNewComment(add)} />
          </View>
          <Button
            block
            onPress={() => onPressAddComment()}
            style={{ elevation: 5, shadowColor: "#000", shadowOpacity: 1, shadowOffset: { width: 5, height: 5 } }}
          >
            <Text style={{ color: "#fff" }}>SUBMIT COMMENT</Text>
          </Button>
        </CardItem>
        <Button block onPress={() => pindahPage()} style={{ backgroundColor: "#913535" }}>
          <Text style={{ color: "#fff" }}>BACK</Text>
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
    backgroundColor: "#283148",
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
