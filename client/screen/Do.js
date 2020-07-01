import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, Button, StatusBar, Platform, Image } from "react-native";
import Newsfeed from "../components/Newsfeed";
import Constants from "expo-constants";
import { Container, Content, Header, Card, CardItem, Left, Right, List, ListItem } from "native-base";

export default function Home({ navigation: { navigate } }) {
  return (
    <Container>
      <Header style={styles.header}>
        <Text style={{ marginLeft: 10 }} style={styles.titleHeader}>
          DOs and DONTs
        </Text>
      </Header>
      <Content style={{ backgroundColor: "#f0f0f0" }}>
        <List style={{ marginBottom: 20 }}>
          {/* THEFT */}
          <ListItem style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text style={{ marginLeft: 10 }} style={{ fontWeight: "bold", color: "#000", marginVertical: 8 }}>
              #1 THEFT
            </Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#E4F8EC",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#01C04E", fontSize: 16, marginHorizontal: 10 }}>DOs </Text>
            <Text style={{ marginLeft: 10 }}>+ Always be aware of your surrounding</Text>
            <Text style={{ marginLeft: 10 }}>+ Refrain from using valuables on the road</Text>
            <Text style={{ marginLeft: 10 }}>+ Not using phone while driving or riding</Text>
            <Text style={{ marginLeft: 10 }}>+ Keep your belongings infront of your body</Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#FBE4E4",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#DF0000", fontSize: 16, marginHorizontal: 10 }}>DONTs </Text>
            <Text style={{ marginLeft: 10 }}>- Wearing flashy jewelries on the road</Text>
            <Text style={{ marginLeft: 10 }}>- Holding phone on hand</Text>
            <Text style={{ marginLeft: 10 }}>- Showing off your valuables on the road</Text>
            <Text style={{ marginLeft: 10 }}>- Sleeping inside public transportation</Text>
            <Text style={{ marginLeft: 10 }}>- Using transparant bag</Text>
          </ListItem>

          {/* HOMICIDE */}
          <ListItem style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text style={{ marginLeft: 10 }} style={{ fontWeight: "bold", color: "#000", marginVertical: 8 }}>
              #2 HOMICIDE
            </Text>
            <Text style={{ marginLeft: 10 }}>
              There is no easy way to prevent homicide, since the reason behind every homicide differ from one to
              another. But, there are still things you can do in order to survive and get help.
            </Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#E4F8EC",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#01C04E", fontSize: 16, marginHorizontal: 10 }}>DOs </Text>
            <Text style={{ marginLeft: 10 }}>+ Always check who is coming to your house</Text>
            <Text style={{ marginLeft: 10 }}>+ Learn basic self defence</Text>
            <Text style={{ marginLeft: 10 }}>+ Keep a tazzer close to you</Text>
            <Text style={{ marginLeft: 10 }}>+ Run if you can, if not hide</Text>
            <Text style={{ marginLeft: 10 }}>+ Yell for help</Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#FBE4E4",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#DF0000", fontSize: 16, marginHorizontal: 10 }}>DONTs </Text>
            <Text style={{ marginLeft: 10 }}>- Letting strangers to your house</Text>
            <Text style={{ marginLeft: 10 }}>- Provoking others</Text>
            <Text style={{ marginLeft: 10 }}>- Losing conciousness by drinking</Text>
          </ListItem>

          {/* ASSAULT */}
          <ListItem style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text style={{ marginLeft: 10 }} style={{ fontWeight: "bold", color: "#000", marginVertical: 8 }}>
              #3 ASSAULT
            </Text>
            <Text style={{ marginLeft: 10 }}>
              In Indonesia most of assault are armed robbery. Safety driving and riding for private vehicle users are
              one necessary mean to prevent such victimization.
            </Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#E4F8EC",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#01C04E", fontSize: 16, marginHorizontal: 10 }}>DOs </Text>
            <Text style={{ marginLeft: 10 }}>+ Bring friends or family when entering dangerous area</Text>
            <Text style={{ marginLeft: 10 }}>+ Only use main road at night</Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#FBE4E4",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#DF0000", fontSize: 16, marginHorizontal: 10 }}>DONTs </Text>
            <Text style={{ marginLeft: 10 }}>- Do not enter dangerous area alone</Text>
            <Text style={{ marginLeft: 10 }}>- Not using small alleyway</Text>
            <Text style={{ marginLeft: 10 }}>- Entering unknown area</Text>
          </ListItem>

          {/* HARASSMENT */}
          <ListItem style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text style={{ marginLeft: 10 }} style={{ fontWeight: "bold", color: "#000", marginVertical: 8 }}>
              #4 HARASSMENT
            </Text>
            <Text style={{ marginLeft: 10 }}>
              Based on statistic harassment were done by people who are close to the victims. They are usually relatives
              or close friends.
            </Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#E4F8EC",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#01C04E", fontSize: 16, marginHorizontal: 10 }}>DOs </Text>
            <Text style={{ marginLeft: 10 }}>+ Learn basic self defence</Text>
            <Text style={{ marginLeft: 10 }}>+ Keep sober at all time</Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#FBE4E4",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#DF0000", fontSize: 16, marginHorizontal: 10 }}>DONTs </Text>
            <Text style={{ marginLeft: 10 }}>- Drugs abuse</Text>
            <Text style={{ marginLeft: 10 }}>- Taking part in harmful activities</Text>
          </ListItem>

          {/* ABDUCTION */}
          <ListItem style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text style={{ marginLeft: 10 }} style={{ fontWeight: "bold", color: "#000", marginVertical: 8 }}>
              #5 ABDUCTION
            </Text>
            <Text style={{ marginLeft: 10 }}>
              Abduction rarely targets adults. Most of time victims of abduction are children.
            </Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#E4F8EC",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#01C04E", fontSize: 16, marginHorizontal: 10 }}>DOs </Text>
            <Text style={{ marginLeft: 10 }}>+ Keep guard of your children</Text>
            <Text style={{ marginLeft: 10 }}>+ Teach your children not follow strangers</Text>
            <Text style={{ marginLeft: 10 }}>+ Teach your children not take things from strangers</Text>
            <Text style={{ marginLeft: 10 }}>
              + Teach your children to use whistle for warning others if your children feels unsafe
            </Text>
            <Text style={{ marginLeft: 10 }}>
              + If you can't pick-up your children, tells school's officers who'll be picking them up
            </Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#FBE4E4",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#DF0000", fontSize: 16, marginHorizontal: 10 }}>DONTs </Text>
            <Text style={{ marginLeft: 10 }}>- Letting strangers get near your children</Text>
            <Text style={{ marginLeft: 10 }}>- Child neglect</Text>
            <Text style={{ marginLeft: 10 }}>- Posting your children's photo on social media</Text>
          </ListItem>

          {/* ROBBERY */}
          <ListItem style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text style={{ marginLeft: 10 }} style={{ fontWeight: "bold", color: "#000", marginVertical: 8 }}>
              #6 ROBBERY
            </Text>
            <Text style={{ marginLeft: 10 }}>
              Most frequent robbery in Indonesia is home armed robberies. The perpetrator are usually a team consist of
              lock picker, driver and carrier. They are usually armed with sharp weapons or even guns.
            </Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#E4F8EC",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#01C04E", fontSize: 16, marginHorizontal: 10 }}>DOs </Text>
            <Text style={{ marginLeft: 10 }}>+ Lock your gates and doors</Text>
            <Text style={{ marginLeft: 10 }}>+ Bars your windows</Text>
            <Text style={{ marginLeft: 10 }}>+ Keep your car lock inside your bed room</Text>
            <Text style={{ marginLeft: 10 }}>+ Use your car alarm to deter robbers</Text>
            <Text style={{ marginLeft: 10 }}>
              + If the robbers had entered your house, hide yourself in the bed room and call for help
            </Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#FBE4E4",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#DF0000", fontSize: 16, marginHorizontal: 10 }}>DONTs </Text>
            <Text style={{ marginLeft: 10 }}>- Keeping your house unlock</Text>
            <Text style={{ marginLeft: 10 }}>- Using weak lock</Text>
            <Text style={{ marginLeft: 10 }}>- Opening windows at night</Text>
            <Text style={{ marginLeft: 10 }}>- Using dim lighting outside</Text>
          </ListItem>

          {/* DRUGS ABUSE */}
          <ListItem style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text style={{ marginLeft: 10 }} style={{ fontWeight: "bold", color: "#000", marginVertical: 8 }}>
              #7 DRUGS ABUSE
            </Text>
            <Text style={{ marginLeft: 10 }}>If you are addicted to drugs, seek help immediately.</Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#E4F8EC",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#01C04E", fontSize: 16, marginHorizontal: 10 }}>DOs </Text>
            <Text style={{ marginLeft: 10 }}>+ Keep a healthy life</Text>
            <Text style={{ marginLeft: 10 }}>+ If you're in a state of depression, seek professional help</Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#FBE4E4",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#DF0000", fontSize: 16, marginHorizontal: 10 }}>DONTs </Text>
            <Text style={{ marginLeft: 10 }}>- Trying any kind of drugs someone ask you to</Text>
            <Text style={{ marginLeft: 10 }}>- Being inside a harmful community</Text>
          </ListItem>

          {/* FRAUDULENCY */}
          <ListItem style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text style={{ marginLeft: 10 }} style={{ fontWeight: "bold", color: "#000", marginVertical: 8 }}>
              #8 FRAUDULENCY
            </Text>
            <Text style={{ marginLeft: 10 }}>
              There are so many types of fraudulency. One cannot simply take one action and be safe from all kind of
              fraudulence. But, following this list of action may guard you from several fraud attempt.
            </Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#E4F8EC",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#01C04E", fontSize: 16, marginHorizontal: 10 }}>DOs </Text>
            <Text style={{ marginLeft: 10 }}>+ Always read any transaction detail you do</Text>
            <Text style={{ marginLeft: 10 }}>
              + Having others to help you with transaction will give you a different view of the transaction
            </Text>
            <Text style={{ marginLeft: 10 }}>+ Always note your transaction history</Text>
            <Text style={{ marginLeft: 10 }}>+ Keep your transaction notes</Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#FBE4E4",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#DF0000", fontSize: 16, marginHorizontal: 10 }}>DONTs </Text>
            <Text style={{ marginLeft: 10 }}>- Reply to spam emails and messages</Text>
            <Text style={{ marginLeft: 10 }}>- Fully trust finance account on social media</Text>
          </ListItem>

          {/* ANARCHISM */}
          <ListItem style={{ flexDirection: "column", alignItems: "flex-start", marginRight: 15 }}>
            <Text style={{ marginLeft: 10 }} style={{ fontWeight: "bold", color: "#000", marginVertical: 8 }}>
              #9 ANARCHISM
            </Text>
            <Text style={{ marginLeft: 10 }}>
              Anarchism is a state of chaos which someone cannot control. Evacuate if you must. But, before that,
              following these list may help you.
            </Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#E4F8EC",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#01C04E", fontSize: 16, marginHorizontal: 10 }}>DOs </Text>
            <Text style={{ marginLeft: 10 }}>+ Store all your belongings</Text>
            <Text style={{ marginLeft: 10 }}>+ Call for help</Text>
          </ListItem>
          <ListItem
            style={{
              backgroundColor: "#FBE4E4",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#DF0000", fontSize: 16, marginHorizontal: 10 }}>DONTs </Text>
            <Text style={{ marginLeft: 10 }}>- Helping the riot</Text>
            <Text style={{ marginLeft: 10 }}>- Provoking the riot</Text>
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
    alignItems: "center",
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
