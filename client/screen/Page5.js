import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  StatusBar,
  Platform,
  Image,
  Dimensions
} from "react-native";
import Newsfeed from "../components/Newsfeed";
import Constants from "expo-constants";
import { Container, Content, Header, Card, CardItem, Left, Right, Textarea, Button } from "native-base";
import Swipe from "react-native-swiper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
const URL = "https://tribratanewsbengkulu.com/wp-content/uploads/20160109011636-curanmor.jpg"
export default function Detail({ navigation: { navigate } }) {
  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>Reports Detail</Text>
      </Header>
      <Content style={{ backgroundColor: "#f0f0f0" }}>
        <CardItem style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <View >
              <Image style={{ width: 30, height: 30, borderRadius: 100 }} source={{ uri: URL }} />
            </View>
            <View style={{ flex: 1, alignItems: "flex-start", height: 30, marginLeft: 15 }}>
              <Text style={{ fontSize: 10, color: "#ccc" }}>01.00 PM</Text>
              <Text style={{ fontWeight: "bold" }}>Jennie-chan</Text>
            </View>
          </View>
          <Swipe autoplay={true} autoplayTimeout={5}
            style={{ height: 180 }}>
            <View style={{ flex: 1, }}>
              <Image style={{ flex: 1, resizeMode: 'contain', width: null, height: null }} source={{ uri: URL }} />
            </View>
            <View style={{ flex: 1, }}>
              <Image style={{ flex: 1, resizeMode: 'contain', width: null, height: null }} source={{ uri: URL }} />
            </View>
          </Swipe>
          <View style={{}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 8 }}>Terjadi aksi penembakan di sekolah</Text>
            <Text style={{ marginTop: 8 }}>Seorang cowo berinitial ABC, diduga melakukan penembakan
kepada seorang cewe di sekolahnya</Text>
            <Text style={{ marginTop: 8, color: '#5891fe', fontWeight: 'bold' }}>Palmerah</Text>
          </View>

        </CardItem>
        <CardItem style={{ marginTop: 5, flexDirection: 'column', alignItems: 'flex-start' }}>
          <Text>Comments : </Text>
          <View style={{ width: '100%', borderStyle: "solid", borderWidth: 1, borderColor: '#ccc', marginVertical: 8 }}>
            <Textarea rowSpan={2} placeholder='your comment here..' />
          </View>
          <Button block>
            <Text style={{ color: '#fff' }}>SUBMIT COMMENT</Text>
          </Button>
        </CardItem>
      </Content>
    </Container>
    //     <FlatList
    //       data={Data}
    //       renderItem={(item) => <Newsfeed props={item} />}
    //       keyExtractor={item => item.id}/>
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
