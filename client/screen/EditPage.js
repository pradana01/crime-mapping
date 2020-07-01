import React, { useState } from "react";
import { StyleSheet, Text, StatusBar, Platform } from "react-native";
import { Container, Content, Form, Item, Input, Label, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { edit_report } from "../store/actions/reportAction";
import * as ImagePicker from "expo-image-picker";

export default function Edit({
  route: {
    params: { data },
  },
}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [location, setLocation] = useState(data.location);
  const [photo, setPhoto] = useState(data.photo);
  const id = data.id;

  const token = useSelector((state) => state.userReducer.token);

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
      id,
    };

    dispatch(edit_report(data));
    navigation.navigate("MyReport");
  };

  return (
    <Container>
      <Content padder>
        <Form style={{ marginHorizontal: 10 }}>
          <Label style={{ marginBottom: 5, fontSize: 15 }}>Title</Label>
          <Item regular>
            <Input bordered defaultValue={title} onChangeText={(title) => setTitle(title)}></Input>
          </Item>
          <Label style={{ marginVertical: 5, fontSize: 15 }}>Description</Label>
          <Item regular>
            <Input rowSpan={5} defaultValue={description} onChangeText={(desc) => setDescription(desc)} />
          </Item>
          <Label style={{ marginVertical: 5, fontSize: 15 }}>Location</Label>
          <Item regular>
            <Input bordered defaultValue={location} onChangeText={(loc) => setLocation(loc)} />
          </Item>
          <Button style={{ backgroundColor: "#336d88", marginVertical: 10 }} onPress={() => selectOneImage()}>
            <Text style={{ color: "#fff", paddingLeft: 146 }}>Upload Image</Text>
          </Button>
          <Button block onPress={() => onPressed()} style={{ backgroundColor: "#913535", marginVertical: 10 }}>
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
});
