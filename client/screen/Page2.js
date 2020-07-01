import React, { useState } from "react";
import { StyleSheet, Text, StatusBar, Platform } from "react-native";
import { Container, Content, Header, Form, Item, Input, Label, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { add_report } from "../store/actions/reportAction";
import * as ImagePicker from "expo-image-picker";

export default function Create() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");
  const token = useSelector((state) => state.userReducer.token);
  const dispatch = useDispatch();

  const selectOneImage = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      base64: true,
    });
    if (!res.cancelled) {
      let base64Img = `data:image/jpg;base64,${res.base64}`;
      setPhoto(base64Img);
    }
  };

  const onPressed = () => {
    let data = {
      token,
      title,
      description,
      location,
      photo,
    };
    dispatch(add_report(data));
    setTitle("");
    setDescription("");
    setLocation("");
    setPhoto("");
    navigation.navigate("My Report");
  };

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>Create Report</Text>
      </Header>
      <Content padder>
        <Form style={{ marginHorizontal: 10 }}>
          <Label style={styles.label}>Title</Label>
          <Item regular>
            <Input bordered onChangeText={(title) => setTitle(title)} />
          </Item>
          <Label style={styles.label}>Description</Label>
          <Item regular>
            <Input rowSpan={5} onChangeText={(desc) => setDescription(desc)} />
          </Item>
          <Label style={styles.label}>Location</Label>
          <Item regular>
            <Input bordered onChangeText={(loc) => setLocation(loc)} />
          </Item>
          <Button style={{ backgroundColor: "#336d88", marginTop: 20 }} onPress={() => selectOneImage()}>
            <Text style={{ color: "#fff", paddingLeft: 146 }}>Upload Image</Text>
          </Button>
          <Button block onPress={() => onPressed()} style={{ backgroundColor: "#913535", marginVertical: 20 }}>
            <Text style={{ color: "#fff" }}>Submit Report </Text>
          </Button>
        </Form>
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
  label: {
    marginBottom: 5,
    fontSize: 15,
  },
});
