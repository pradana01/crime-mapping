import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import { Container, Content, Header, Form, Item, Input, Label, Textarea, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useSelector, useDispatch } from "react-redux";
import { edit_report } from "../store/actions/reportAction";

export default function Edit({
  route: {
    params: { data },
  },
}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const id = data.id;
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [location, setLocation] = useState(data.location);
  const [photo, setPhoto] = useState(data.photo);

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
      {/* <Header style={styles.header}>
        <Text style={styles.titleHeader}>Edit Report</Text>
      </Header> */}
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
          <Label style={{ marginVertical: 5, fontSize: 15 }}>Input file</Label>
          <Button bordered onPress={() => selectOneImage()}>
            <Text>Upload Image</Text>
          </Button>
          <Button block primary onPress={() => onPressed()}>
            <Text>Submit</Text>
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
