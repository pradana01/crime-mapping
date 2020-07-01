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
            <Text>There is no easy way to prevent homicide, since the reason behind every homicide differ from one to another. But, there are still things you can do in order to survive and get help.</Text>
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
            <Text>In Indonesia most of assault are armed robbery. Safety driving and riding for private vehicle users are one necessary mean to prevent such victimization.</Text>    
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
            <Text>Based on statistic harassment were done by people who are close to the victims. They are usually relatives or close friends.</Text>
            <ListItem style={{ backgroundColor:'#E4F8EC', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#01C04E', fontSize:16,marginHorizontal:10}}>DO's </Text>
              <Text>- Learn basic self defence</Text>
              <Text>- Keep sober at all time</Text>
            </ListItem>
            <ListItem style={{ backgroundColor:'#FBE4E4', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#DF0000', fontSize:16,marginHorizontal:10}}>DONT's </Text>
              <Text>- Drugs abuse</Text>
              <Text>- Taking part in harmful activities</Text>
            </ListItem>

            {/* ABDUCTION */}
            <ListItem itemDivider>
              <Text style={{fontWeight:'bold', color:'#000',}}>#5 ABDUCTION</Text>
            </ListItem>
            <Text>Abduction rarely targets adults. Most of time victims of abduction are children.</Text>
            <ListItem style={{ backgroundColor:'#E4F8EC', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#01C04E', fontSize:16,marginHorizontal:10}}>DO's </Text>
              <Text>- Keep guard of your children</Text>
              <Text>- Teach your children not follow strangers</Text>
              <Text>- Teach your children not take things from strangers</Text>
              <Text>- Teach your children to use whistle for warning others if your children feels unsafe</Text>
              <Text>- If you can't pick-up your children, tells school's officers who'll be picking them up</Text>
            </ListItem>
            <ListItem style={{ backgroundColor:'#FBE4E4', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#DF0000', fontSize:16,marginHorizontal:10}}>DONT's </Text>
              <Text>- Letting strangers get near your children</Text>
              <Text>- Child neglect</Text>
              <Text>- Posting your children's photo on social media</Text>
            </ListItem>

            {/* ROBBERY */}
            <ListItem itemDivider>
              <Text style={{fontWeight:'bold', color:'#000',}}>#6 ROBBERY</Text>
            </ListItem>
            <Text>Most frequent robbery in Indonesia is home armed robberies. The perpetrator are usually a team consist of lock picker, driver and carrier. They are usually armed with sharp weapons or even guns.</Text>
            <ListItem style={{ backgroundColor:'#E4F8EC', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#01C04E', fontSize:16,marginHorizontal:10}}>DO's </Text>
              <Text>- Lock your gates and doors</Text>
              <Text>- Bars your windows</Text>
              <Text>- Keep your car lock inside your bed room</Text>
              <Text>- Use your car alarm to deter robbers</Text>
              <Text>- If the robbers had entered your house, hide yourself in the bed room and call for help</Text>
            </ListItem>
            <ListItem style={{ backgroundColor:'#FBE4E4', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#DF0000', fontSize:16,marginHorizontal:10}}>DONT's </Text>
              <Text>- Keeping your house unlock</Text>
              <Text>- Using weak lock</Text>
              <Text>- Opening windows at night</Text>
              <Text>- Using dim lighting outside</Text>
            </ListItem>

            {/* DRUGS ABUSE */}
            <ListItem itemDivider>
              <Text style={{fontWeight:'bold', color:'#000',}}>#7 DRUGS ABUSE</Text>
            </ListItem>
            <Text>If you are addicted to drugs, seek help immediately.</Text>
            <ListItem style={{ backgroundColor:'#E4F8EC', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#01C04E', fontSize:16,marginHorizontal:10}}>DO's </Text>
              <Text>- Keep a healthy life</Text>
              <Text>- If you're in a state of depression, seek professional help</Text>
            </ListItem>
            <ListItem style={{ backgroundColor:'#FBE4E4', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#DF0000', fontSize:16,marginHorizontal:10}}>DONT's </Text>
              <Text>- Trying any kind of drugs someone ask you to</Text>
              <Text>- Being inside a harmful community</Text>
            </ListItem>

            {/* FRAUDULENCY */}
            <ListItem itemDivider>
              <Text style={{fontWeight:'bold', color:'#000',}}>#8 FRAUDULENCY</Text>
            </ListItem>
            <Text>There are so many types of fraudulency. One cannot simply take one action and be safe from all kind of fraudulence. But, following this list of action may guard you from several fraud attempt.</Text>
            <ListItem style={{ backgroundColor:'#E4F8EC', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#01C04E', fontSize:16,marginHorizontal:10}}>DO's </Text>
              <Text>- Always read any transaction detail you do</Text>
              <Text>- Having others to help you with transaction will give you a different view of the transaction</Text>
              <Text>- Always note your transaction history</Text>
              <Text>- Keep your transaction notes</Text>
            </ListItem>
            <ListItem style={{ backgroundColor:'#FBE4E4', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#DF0000', fontSize:16,marginHorizontal:10}}>DONT's </Text>
              <Text>- Reply to spam emails and messages</Text>
              <Text>- Fully trust finance account on social media</Text>
            </ListItem>

            {/* ANARCHISM */}
            <ListItem itemDivider>
              <Text style={{fontWeight:'bold', color:'#000',}}>#9 ANARCHISM</Text>
            </ListItem>
            <Text>Anarchism is a state of chaos which someone cannot control. Evacuate if you must. But, before that, following these list may help you.</Text>
            <ListItem style={{ backgroundColor:'#E4F8EC', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#01C04E', fontSize:16,marginHorizontal:10}}>DO's </Text>
              <Text>- Store all your belongings</Text>
              <Text>- Call for help</Text>
            </ListItem>
            <ListItem style={{ backgroundColor:'#FBE4E4', flexDirection:'column', alignItems:'flex-start', }}>
              <Text style={{fontWeight:'bold', color:'#DF0000', fontSize:16,marginHorizontal:10}}>DONT's </Text>
              <Text>- Helping the riot</Text>
              <Text>- Provoking the riot</Text>
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
