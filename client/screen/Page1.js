import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Picker, Button } from 'react-native';
import { buildCoordinate } from '../coordinates'
import MapView, {Polygon} from 'react-native-maps'
import * as Permissions from 'expo-permissions'

export default function Page1() {
  const [kecamatan, setKecamatan] = useState('tanjungPriok')

  //ini latitude longitude nya sengaja gw kasi koor rumah gw, caranya sih ada di yutub orang vietnam yg gw kasi
  const [latitude, setLatitude] = useState(-6.2709781)
  const [longitude, setLongitude] = useState(106.7323888)

  const [coordinate, setCoordinates] = useState(buildCoordinate('tanjungPriok'))
  
  // useEffect( async () => {
  //   const {status} = await Permissions.getAsync(Permissions.LOCATION)
  //   if (status !== 'granted'){
  //     const response = await Permissions.askAsync(Permissions.LOCATION)
  //   }
    
  // },[])

  console.log(`latitude: ${latitude}, longitude: ${longitude}`)

  const gantiKoor = () => {
    setCoordinates(buildCoordinate(kecamatan))
  }

  const cekPolygon = (value) => {
    console.log(value)
  }

  return (
    <>
      <MapView
        style={{flex:1}}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
      <Polygon 
        coordinates={coordinate}
        //setting warna fill nya dibawah ini, mending rgba aja biar skalian ngatur opacity nya
        fillColor="rgba(255, 0, 0, 0.5)"
        tappable = {true}
        onPress={() => cekPolygon(kecamatan)}
        />
      </MapView>
      <View
        style={styles.container}>
          <Picker 
            selectedValue={kecamatan}
            style={{height:50, width:200}}
            onValueChange={(value) => setKecamatan(value)}>
            <Picker.Item label="Tanjung Priok" value="tanjungPriok"/>
            <Picker.Item label="Cengkareng" value="cengkareng"/>
            <Picker.Item label="Palmerah" value="palmerah"/>
            <Picker.Item label="Kemayoran" value="kemayoran"/>
            <Picker.Item label="Jatinegara" value="jatinegara"/>
            <Picker.Item label="Grogol Petamburan" value="grogolPetamburan"/>
            <Picker.Item label="Kalideres" value="kalideres"/>
            <Picker.Item label="Taman Sari" value="tamansari"/>
            <Picker.Item label="Cipayung" value="cipayung"/>
            <Picker.Item label="Jagakarsa" value="jagakarsa"/>
          </Picker>
        <Button onPress={() => gantiKoor()} title="Change Location"/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});