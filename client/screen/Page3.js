import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, Button, StatusBar, Platform, Image } from "react-native";
import Newsfeed from "../components/Newsfeed";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Header, Card, CardItem, Left, Right, Input } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { fetch_report, delete_report } from "../store/actions/reportAction";

export default function Home({ navigation: { navigate } }) {
  const url = "http://192.168.1.115:3000";
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [datas, setDatas] = useState([]);
  const token = useSelector((state) => state.userReducer.token);
  const reports = useSelector((state) => state.reportReducer.reports);

  useEffect(() => {
    let data = {
      token,
    };
    dispatch(fetch_report(data));
    setDatas(reports);
  }, [reports]);

  const onPressDelete = (id) => {
    let data = {
      token,
      id,
    };
    dispatch(delete_report(data));
  };

  const showEdit = (data) => {
    navigation.navigate("EditPage", { data });
  };

  return (
    <Container>
      <Content padder style={{ backgroundColor: "#f0f0f0" }}>
        {reports.length > 0 &&
          reports.map((report) => (
            <CardItem key={report.id}>
              <View style={{ width: 80, height: 100, backgroundColor: "#707070", marginLeft: -10 }}>
                <Image source={{ uri: report.photo }} />
              </View>
              <Right style={{ flex: 1, alignItems: "flex-start", height: 100, marginLeft: 15 }}>
                <Text style={{ fontSize: 12, color: "#ccc" }}>By user at {report.createdAt}</Text>
                <Text style={{ fontWeight: "bold" }}>{report.title}</Text>
                <Text style={{ marginTop: 5, fontStyle: "italic", color: "#5891FE", fontWeight: "700" }}>
                  Kecamatan: {report.location}
                </Text>
                <Button onPress={() => onPressDelete(report.id)} title="Del"></Button>
                <Button onPress={() => showEdit(report)} title="Edit"></Button>
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
