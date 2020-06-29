import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, Picker } from 'react-native';
import { Container, Content, Header, Form, Item, Input, Label, Textarea, Button, Icon, } from "native-base";

export default function Create() {
  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>Create Report</Text>
      </Header>
      <Content padder>
        <Form style={{ marginHorizontal: 10, }}>
          <Label style={{ marginBottom: 5, fontSize: 15 }}>Title</Label>
          <View style={{ borderStyle: "solid", borderWidth: 1, borderColor: '#ccc' }}>
            <Input bordered placeholder='Input report title' />
          </View>
          <Label style={{ marginVertical: 5, fontSize: 15 }}>Description</Label>
          <View style={{ borderStyle: "solid", borderWidth: 1, borderColor: '#ccc' }}>
            <Textarea rowSpan={5} placeholder='Input report description' />
          </View>
          <Label style={{ marginVertical: 5, fontSize: 15 }}>Location</Label>
          {/* <Item regular>
            <Input bordered placeholder='Input report location' />
          </Item> */}
          <View style={{ borderStyle: "solid", borderWidth: 1, borderColor: '#ccc' }}>

            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />

              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </View>

          <Label style={{ marginVertical: 5, fontSize: 15 }}>Input file</Label>
          <View style={{ borderStyle: "solid", borderWidth: 1, borderColor: '#ccc' }}>
            <Input bordered placeholder='Input report picture' />
          </View>
          <Button block primary style={{marginTop:10, color: '#fff'}}>
            <Text style={{color: '#ffffff'}}>
              Submit Report
            </Text>
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
  }
});