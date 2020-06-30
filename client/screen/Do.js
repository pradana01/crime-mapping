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
import { Container, Content, Header, Card, CardItem, Left, Right, List, ListItem } from "native-base";

export default function Home({ navigation: { navigate } }) {
  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>DO's DONT's</Text>
      </Header>
      <Content style={{ backgroundColor: "#f0f0f0" }}>
      <List>
            <ListItem itemDivider>
              <Text style={{fontWeight:'bold', color:'#000',}}>#1 THEFT</Text>
            </ListItem>                    
            <ListItem style={{ backgroundColor:'#E4F8EC', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#01C04E', fontSize:16,marginHorizontal:10}}>DO's </Text>
              <Text>- Yelling for help</Text>
              <Text>- Call the police</Text>
            </ListItem>
            <ListItem style={{ backgroundColor:'#FBE4E4', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#DF0000', fontSize:16,marginHorizontal:10}}>DONT's </Text>
              <Text>- Yelling for help</Text>
              <Text>- Call the police</Text>
            </ListItem>
        </List>
        </Content>
    </Container>
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
