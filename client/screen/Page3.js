import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Report from '../components/Report'

const Data = [
  {
      id: '1',
      title: 'AAA',
      description: "wah gak bener ini asu",
      image: 'https://risetcdn.jatimtimes.com/images/2020/02/06/Masuk-2020-600-Lebih-Tindak-Kejahatan-Belum-Diungkap-Polres-Malang73bb576a2f94d5ab.md.jpg',
  },
  {
      id: '2',
      title: 'BBB',
      description: 'ih jambret',
      image: 'https://cdn2.tstatic.net/jambi/foto/bank/images/ilustrasi-jambret.jpg',
  },
  {
      id: '3',
      title: 'CCC',
      description: 'Maling curanmor',
      image: 'https://tribratanewsbengkulu.com/wp-content/uploads/20160109011636-curanmor.jpg',
  }
]

export default function Page3() {
  return (
    <View>
      <FlatList 
        data={Data}
        renderItem={(item) => <Report props={item} />}
        keyExtractor={item => item.id}/>
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
