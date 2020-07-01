import React, {useState, useEffect} from "react";
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
import Constants from "expo-constants";
import { Container, Content, Header, Card, CardItem, Left, Right } from "native-base";
import { useNavigation } from '@react-navigation/native'
import { useSelector } from "react-redux";
const url = 'http://192.168.0.105:3000'

export default function Home({ navigation: { navigate } }) {
  const navigation = useNavigation()
  const [data, setData] = useState([])
  const [user, setUser] = useState([])
  const token = useSelector(state => state.userReducer.token)
  
  useEffect(() => {
    fetch(`${url}/reports`, {
      headers: {
        'access_token': token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setData(data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  const pindahPage = (reportData) => {
    console.log(reportData)
    navigation.navigate('Comment', {reportData})
}

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>News Feed</Text>
      </Header>

      <Content style={{ backgroundColor: "#f0f0f0" }}>

      {data.map((data, i) =>  
        <CardItem key={i}>
          <View style={{ width: 80, height: 100, backgroundColor: "#707070", marginLeft: -10 }}>
            <Image source={{uri: data.photo}} />
          </View>
          <Right style={{ flex: 1, alignItems: "flex-start", height: 100, marginLeft: 15 }}>
      <Text style={{ fontSize: 12, color: "#ccc" }}>By user: at {data.createdAt}</Text>
            <Text style={{ fontWeight: "bold" }}>{data.title}</Text>
            <Text
              style={{ marginTop: 5, fontStyle: "italic", color: "#5891FE", fontWeight: "700" }}
            >
              Kecamatan : {data.location}
            </Text>
            <Button 
                onPress={() => pindahPage(data)}
                title="View Comment" />
          </Right>
        </CardItem>
)}
      </Content>
{/*
      <View style={{ backgroundColor: "#f0f0f0" }}>
        <FlatList
          data={newsfeed}
          renderItem={(item) => <Newsfeed props={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
*/}
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
