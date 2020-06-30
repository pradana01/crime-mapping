import React from "react";
import { StyleSheet, Text, View, StatusBar, Platform, Button } from "react-native";
import { Container, Content, Header, Form, Item, Input, Label, Textarea } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../store/actions/userAction";

export default function Account() {
  const token = useSelector((state) => state.userReducer.token);

  const dispatch = useDispatch();
  const user_logout = () => {
    dispatch(userLogout());
  };

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>Account</Text>
      </Header>
      <Content padder>
        <View style={{ flex: 1, alignItems: "center" }}></View>
        <Label style={styles.label}>Name</Label>
        <Item regular disabled>
          <Input bordered placeholder="Your Name" />
        </Item>
        <Label style={styles.label}>Location</Label>
        <Item regular disabled>
          <Input placeholder="Your Location" />
        </Item>
        <Label style={styles.label}>Email</Label>
        <Item regular disabled>
          <Input bordered placeholder="Your Email" />
        </Item>
        <Label style={styles.label}>Username</Label>
        <Item regular disabled>
          <Input bordered placeholder="Your Username" />
        </Item>
        <Button title="Logout" onPress={() => user_logout()} />
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
  label: {
    marginVertical: 5,
    fontSize: 15,
  },
});
