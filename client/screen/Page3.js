import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Platform, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, CardItem, Right, Button } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { fetch_report, delete_report } from "../store/actions/reportAction";

export default function Home({ navigation: { navigate } }) {
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
      <Content style={{ backgroundColor: "#f0f0f0" }}>
        {reports.length > 0 &&
          reports.map((report) => (
            <CardItem
              key={report.id}
              style={{ borderRadius: 10, marginHorizontal: 15, marginVertical: 5, elevation: 3 }}
            >
              <View>
                {report.photo == "" ? (
                  <Image
                    style={{ width: 80, height: 100, borderRadius: 7 }}
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg" }}
                  />
                ) : (
                  <Image style={{ width: 80, height: 100, borderRadius: 7 }} source={{ uri: report.photo }} />
                )}
              </View>
              <Right style={{ flex: 1, alignItems: "flex-start", height: 100, marginLeft: 15 }}>
                <Text style={{ fontSize: 12, color: "#ccc" }}>By user at {report.createdAt}</Text>
                <Text style={{ fontWeight: "bold" }}>{report.title}</Text>
                <Text style={{ marginTop: 5, fontStyle: "italic", color: "#5891FE", fontWeight: "700" }}>
                  Kecamatan: {report.location}
                </Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Button
                    small
                    onPress={() => showEdit(report)}
                    title="Edit"
                    style={{ backgroundColor: "#913535", padding: 10, marginRight: 10 }}
                  >
                    <Text style={{ color: "#fff" }}>Edit</Text>
                  </Button>
                  <Button
                    small
                    onPress={() => onPressDelete(report.id)}
                    style={{
                      borderColor: "#913535",
                      borderWidth: 1,
                      backgroundColor: "#fff",
                      padding: 10,
                      marginRight: 10,
                    }}
                  >
                    <Text style={{ color: "#913535" }}>Delete</Text>
                  </Button>
                </View>
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
