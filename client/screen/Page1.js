import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Container, Content, Header, Card, CardItem, Left, Right } from "native-base";

export default function CrimeMap() {
  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>Crime Map</Text>
      </Header>
      <Content>
        {/* <View >
          
        </View> */}
      </Content>
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,

      }
    })
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
});