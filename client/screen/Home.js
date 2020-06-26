import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Button } from 'react-native';
import Newsfeed from '../components/Newsfeed'
import Constants from 'expo-constants'

const Data = [
    {
        id: '1',
        title: 'AAA',
        comment: "wah gak bener ini asu",
        image: 'https://risetcdn.jatimtimes.com/images/2020/02/06/Masuk-2020-600-Lebih-Tindak-Kejahatan-Belum-Diungkap-Polres-Malang73bb576a2f94d5ab.md.jpg',
    },
    {
        id: '2',
        title: 'BBB',
        comment: 'ih jambret',
        image: 'https://cdn2.tstatic.net/jambi/foto/bank/images/ilustrasi-jambret.jpg',
    },
    {
        id: '3',
        title: 'CCC',
        comment: 'Maling curanmor',
        image: 'https://tribratanewsbengkulu.com/wp-content/uploads/20160109011636-curanmor.jpg',
    }
]

export default function Home({navigation: {navigate}}) {

  return (
    <View style={styles.container}>
      {/* <View style={{marginTop: Constants.statusBarHeight }}>
        <Text style={{fontSize:26}}>Newsfeed report</Text>
      </View> */}
      <View>
        <FlatList 
          data={Data}
          renderItem={(item) => <Newsfeed props={item} />}
          keyExtractor={item => item.id}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
