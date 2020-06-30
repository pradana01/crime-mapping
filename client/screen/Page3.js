import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, Button, StatusBar, Platform, Image } from "react-native";
import Report from "../components/Report";
import { Container, Content, Header } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { fetch_report } from "../store/actions/reportAction";
import Constants from "expo-constants";

export default function Page3({ navigation: { navigate } }) {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reportReducer.reports);
  const token = useSelector((state) => state.userReducer.token);

  useEffect(() => {
    let data = {
      token,
    };
    dispatch(fetch_report(data));
  }, []);

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>My Report</Text>
      </Header>
      <View style={{ backgroundColor: "#f0f0f0" }}>
        <FlatList
          data={reports}
          renderItem={(item) => <Report props={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
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
