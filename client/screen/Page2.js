import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Container, Content, Header, Form, Item, Input, Label, Textarea, Button } from "native-base";

export default function Create() {
  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>Create Report</Text>
      </Header>
      <Content padder>
        <Form style={{ marginHorizontal: 10 }}>
          <Label style={ styles.label }>Title</Label>
          <Item regular>
            <Input bordered placeholder='Input report title' />
          </Item>
          <Label style={styles.label}>Description</Label>
          <Item regular>
            <Textarea rowSpan={5} placeholder='Input report description' />
          </Item>
          <Label style={styles.label}>Location</Label>
          <Item regular>
            <Input bordered placeholder='Input report location' />
          </Item>
          <Label style={styles.label}>Input file</Label>
          <Item regular>
            <Input bordered placeholder='Input report picture' />
          </Item>
          <Button block primary>
            <Text> Submit Report </Text>
          </Button>
        </Form>
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
  },
  label: { 
    marginBottom: 5, 
    fontSize: 15 
  }
});