import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Header } from "native-base";
import { StyleSheet, Dimensions, View, Text, Alert, Modal, TouchableHighlight } from "react-native";
import MapView, { Polygon, Callout, Marker } from "react-native-maps";
import { buildCoordinate } from "../coordinates";
import * as Location from "expo-location";
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function Page1() {
  const [location, setLocation] = useState({
    latitude: -6.260643,
    longitude: 106.781589,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [dataKecamatan, setDataKecamatan] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const district = [
      "cengkareng",
      "grogolPetamburan",
      "kalideres",
      "kebonJeruk",
      "kembangan",
      "palmerah",
      "tamansari",
      "tambora",
      "cempakaPutih",
      "gambir",
      "joharBaru",
      "kemayoran",
      "menteng",
      "sawahBesar",
      "senen",
      "tanahAbang",
      "cilandak",
      "jagakarsa",
      "kebayoranLama",
      "kebayoranLama1",
      "kebayoranBaru",
      "mampangPrapatan",
      "pancoran",
      "pasarMinggu",
      "pesanggrahan",
      "setiaBudi",
      "tebet",
      "cakung",
      "cipayung",
      "ciracas",
      "durenSawit",
      "jatinegara",
      "kramatJati",
      "makasar",
      "matraman",
      "pasarRebo",
      "pulogadung",
      "cilincing",
      "kelapaGading",
      "koja",
      "pademangan",
      "penjaringan",
      "tanjungPriok",
    ];
    const finalData = [];
    for (let i = 0; i < district.length; i++) {
      let districtData = {
        name: district[i],
        cords: buildCoordinate(district[i]),
        status: null,
      };
      if (district[i][0] == "p") {
        districtData.status = "danger";
      } else if (district[i][0] == "k") {
        districtData.status = "warning";
      } else if (district[i][0] == "t") {
        districtData.status = "beware";
      } else {
        districtData.status = "save";
      }
      finalData.push(districtData);
    }
    setDataKecamatan(finalData);

    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const showModal = () => {
    // Alert.alert(`Welcome to`);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Header style={styles.header}>
        <Text style={styles.titleHeader}>Maps</Text>
      </Header>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        showsMyLocationButton
      >
        {dataKecamatan.map((kec, index) => {
          return (
            <Polygon
              key={index}
              coordinates={kec.cords}
              //setting warna fill nya dibawah ini, mending rgba aja biar skalian ngatur opacity nya
              fillColor={
                kec.status == "danger"
                  ? "rgba(255, 0, 0, 0.4)"
                  : kec.status == "warning"
                  ? "	rgba(255, 195, 160, 0.4)"
                  : kec.status == "beware"
                  ? "rgba(255, 255, 100, 0.4)"
                  : kec.status == "save"
                  ? "rgba(101, 220, 184, 0.4)"
                  : "rgba(0, 0, 0, 0.4)"
              }
              strokeColor={
                kec.status == "danger"
                  ? "rgba(255, 255, 255, 0.4)"
                  : kec.status == "warning"
                  ? "	rgba(255, 195, 160, 0.4)"
                  : kec.status == "beware"
                  ? "rgba(255, 242, 175, 0.4)"
                  : kec.status == "save"
                  ? "rgba(101, 220, 184, 0.4)"
                  : "rgba(0, 0, 0, 0.4)"
              }
              tappable={true}
              onPress={() => showModal()}
            ></Polygon>
          );
        })}
      </MapView>

      {/* MODAL */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
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
    height: screenHeight - 105,
    width: screenWidth,
  },
  header: {
    width: screenWidth,
    justifyContent: "center",
  },
  titleHeader: {
    paddingTop: 22,
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
  },
  //test modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },
});
