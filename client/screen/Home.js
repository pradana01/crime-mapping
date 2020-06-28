import React from "react";
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
  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>News Feed</Text>
      </Header>
      <Content style={{ backgroundColor: "#f0f0f0" }}>
        <CardItem>
          <View style={{ width: 80, height: 100, backgroundColor: "#707070", marginLeft: -10 }}>
            {/* <Image source={URL} /> */}
          </View>
          <Right style={{ flex: 1, alignItems: "flex-start", height: 100, marginLeft: 15 }}>
            <Text style={{ fontSize: 12, color: "#ccc" }}>Jennie at 01.00 PM</Text>
            <Text style={{ fontWeight: "bold" }}>Kejadian seorang cowok nembak cewek di sini</Text>
            <Text
              style={{ marginTop: 5, fontStyle: "italic", color: "#5891FE", fontWeight: "700" }}
            >
              Kecamatan : Kuningan
            </Text>
          </Right>
        </CardItem>

        <CardItem style={{ marginVertical: 10, marginHorizontal: 5 }}>
          <View style={{ width: 80, height: 100, backgroundColor: "#707070", marginLeft: -10 }}>
            {/* <Image source={URL} /> */}
          </View>
          <Right style={{ flex: 1, alignItems: "flex-start", height: 100, marginLeft: 15 }}>
            <Text style={{ fontSize: 12, color: "#ccc" }}>Jennie at 01.00 PM</Text>
            <Text style={{ fontWeight: "bold" }}>Kejadian seorang cowok nembak cewek di sini</Text>
            <Text
              style={{ fontSize: 14, fontStyle: "italic", color: "#5891FE", fontWeight: "700" }}
            >
              Kecamatan : Kuningan
            </Text>
          </Right>
        </CardItem>
      </Content>
    </Container>
    // <View style={styles.container}>
    //   {/* <View style={{marginTop: Constants.statusBarHeight }}>
    //     <Text style={{fontSize:26}}>Newsfeed report</Text>
    //   </View> */}
    //   <View>
    //     <FlatList
    //       data={Data}
    //       renderItem={(item) => <Newsfeed props={item} />}
    //       keyExtractor={item => item.id}/>
    //   </View>
    // </View>
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
