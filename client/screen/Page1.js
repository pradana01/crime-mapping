import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, View, Picker, Button } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
import { buildCoordinate } from "../coordinates";
import * as Location from "expo-location";
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function Page1() {
  const [location, setLocation] = useState({
    latitude: -6.353576,
    longitude: 106.7800195,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [coordinate, setCoordinates] = useState(buildCoordinate("tanjungPriok"));
  const [kecamatan, setKecamatan] = useState("tanjungPriok");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, [errorMsg]);
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const gantiKoor = () => {
    setCoordinates(buildCoordinate(kecamatan));
  };

  const cekPolygon = () => {
    console.log("taro modal box disini <------------------");
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Polygon
          coordinates={coordinate}
          //setting warna fill nya dibawah ini, mending rgba aja biar skalian ngatur opacity nya
          fillColor="rgba(255, 0, 0, 0.5)"
          tappable={true}
          onPress={() => cekPolygon(kecamatan)}
        />
        <Marker coordinate={location} />
      </MapView>
      <View>
        <Picker
          selectedValue={kecamatan}
          style={{ height: 50, width: 200 }}
          onValueChange={(value) => setKecamatan(value)}
        >
          <Picker.Item label="Tanjung Priok" value="tanjungPriok" />
          <Picker.Item label="Cengkareng" value="cengkareng" />
          <Picker.Item label="Palmerah" value="palmerah" />
          <Picker.Item label="Kemayoran" value="kemayoran" />
          <Picker.Item label="Jatinegara" value="jatinegara" />
          <Picker.Item label="Grogol Petamburan" value="grogolPetamburan" />
          <Picker.Item label="Kalideres" value="kalideres" />
          <Picker.Item label="Taman Sari" value="tamansari" />
          <Picker.Item label="Cipayung" value="cipayung" />
          <Picker.Item label="Jagakarsa" value="jagakarsa" />
        </Picker>
        <Button onPress={() => gantiKoor()} title="Change Location" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    height: (screenHeight - 100) / 1.15,
    width: screenWidth,
  },
});
