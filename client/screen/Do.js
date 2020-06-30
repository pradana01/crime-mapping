import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, Button, StatusBar, Platform, Image } from "react-native";
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
            {/* THEFT */}
            <ListItem itemDivider>
              <Text style={{fontWeight:'bold', color:'#000',}}>#1 THEFT</Text>
            </ListItem>                    
            <ListItem style={{ backgroundColor:'#E4F8EC', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#01C04E', fontSize:16,marginHorizontal:10}}>DO's </Text>
              <Text>- Always be aware of your surrounding</Text>
              <Text>- Refrain from using valuables on the road</Text>
              <Text>- Not using phone while driving or riding</Text>
              <Text>- Keep your belongings infront of your body</Text>
            </ListItem>
            <ListItem style={{ backgroundColor:'#FBE4E4', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#DF0000', fontSize:16,marginHorizontal:10}}>DONT's </Text>
              <Text>- Wearing flashy jewelries on the road</Text>
              <Text>- Holding phone on hand</Text>
              <Text>- Showing off your valuables on the road</Text>
              <Text>- Sleeping inside public transportation</Text>
              <Text>- Using transparant bag</Text>
            </ListItem>

            {/* HOMICIDE */}
            <ListItem itemDivider>
              <Text style={{fontWeight:'bold', color:'#000',}}>#2 HOMICIDE</Text>
            </ListItem>                    
            <ListItem style={{ backgroundColor:'#E4F8EC', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#01C04E', fontSize:16,marginHorizontal:10}}>DO's </Text>
              <Text>- Always check who is coming to your house</Text>
              <Text>- Learn basic self defence</Text>
              <Text>- Keep a tazzer close to you</Text>
              <Text>- Run if you can, if not hide</Text>
              <Text>- Yell for help</Text>
            </ListItem>
            <ListItem style={{ backgroundColor:'#FBE4E4', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#DF0000', fontSize:16,marginHorizontal:10}}>DONT's </Text>
              <Text>- Letting strangers to your house</Text>
              <Text>- Provoking others</Text>
              <Text>- Losing conciousness by drinking</Text>
            </ListItem>

            {/* ASSAULT */}
            <ListItem itemDivider>
              <Text style={{fontWeight:'bold', color:'#000',}}>#3 ASSAULT</Text>
            </ListItem>                    
            <ListItem style={{ backgroundColor:'#E4F8EC', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#01C04E', fontSize:16,marginHorizontal:10}}>DO's </Text>
              <Text>- Bring friends or family when entering dangerous area</Text>
              <Text>- Only use main road at night</Text>
            </ListItem>
            <ListItem style={{ backgroundColor:'#FBE4E4', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#DF0000', fontSize:16,marginHorizontal:10}}>DONT's </Text>
              <Text>- Do not enter dangerous area alone</Text>
              <Text>- Not using small alleyway</Text>
              <Text>- Entering unknown area</Text>
            </ListItem>

            {/* HARASSMENT */}
            <ListItem itemDivider>
              <Text style={{fontWeight:'bold', color:'#000',}}>#4 HARASSMENT</Text>
            </ListItem>                    
            <ListItem style={{ backgroundColor:'#E4F8EC', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#01C04E', fontSize:16,marginHorizontal:10}}>DO's </Text>
              <Text>- Learn basic self defence</Text>
              <Text>- Only use main road at night</Text>
            </ListItem>
            <ListItem style={{ backgroundColor:'#FBE4E4', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#DF0000', fontSize:16,marginHorizontal:10}}>DONT's </Text>
              <Text>- Do not enter dangerous area alone</Text>
              <Text>- Not using small alleyway</Text>
              <Text>- Entering unknown area</Text>
            </ListItem>
        </List>
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
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
