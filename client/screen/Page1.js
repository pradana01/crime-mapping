import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Header } from "native-base";
import { StyleSheet, Dimensions, View, Text, Modal, TouchableHighlight, Alert } from "react-native";
import MapView, { Polygon, Marker } from "react-native-maps";
import { district, buildCoordinate } from "../assets/coordinates/index";
import * as geolib from "geolib";
// import * as Location from "expo-location";

import axios from "axios";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function Page1() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [dataKecamatan, setDataKecamatan] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [fetchData, setFetchData] = useState([]);
  const [dataModal, setDataModal] = useState({});
  const [modalAlert, setModalAlert] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios
      .get(`http://192.168.0.105:3000/districts`)
      .then((res) => {
        setFetchData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const finalData = [];
    if (fetchData) {
      for (let i = 0; i < district.length; i++) {
        let districtData = {
          name: null,
          cords: buildCoordinate(district[i]),
          status: null,
        };
        for (let j = 0; j < fetchData.length; j++) {
          if (fetchData[j].mapName == district[i]) {
            districtData.name = fetchData[j].name;
            districtData.status = fetchData[j].status;
          }
        }
        finalData.push(districtData);
      }
      setDataKecamatan(finalData);
    }
  }, [fetchData]);

  useEffect(() => {
    function success(pos) {
      var crd = pos.coords;
      setLocation(crd);
    }

    function error(err) {
      console.warn("ERROR(" + err.code + "): " + err.message);
    }

    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 5000,
    };

    navigator.geolocation.watchPosition(success, error, options);
  }, []);

  useEffect(() => {
    dataKecamatan.forEach((data) => {
      if (geolib.isPointInPolygon({ latitude: location.latitude, longitude: location.longitude }, data.cords)) {
        if (data.status === "dangerous") {
          setStatus("DANGER");
        } else if (data.status === "warning") {
          setStatus("WARNING");
        } else {
          setStatus("SAFE");
        }
        setTimeout(() => {
          setModalAlert(true);
        }, 2000);
      }
    });
  }, [location]);

  const showModal = (value) => {
    let dataGrab = fetchData.filter(function (element) {
      return element.name === value.name;
    });
    if (dataGrab.length) {
      setDataModal(dataGrab[0]);
      setModalVisible(true);
    }
  };

  if (location.latitude === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading maps........</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
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
                fillColor={
                  kec.status == "dangerous"
                    ? "rgba(255, 0, 0, 0.4)"
                    : kec.status == "warning"
                    ? "rgba(255, 200, 100, 0.4)"
                    : "rgba(100, 200, 200, 0.5)"
                }
                strokeColor={
                  kec.status == "dangerous"
                    ? "rgba(255, 0, 0, 0.5)"
                    : kec.status == "warning"
                    ? "rgba(255, 200, 200, 0.5)"
                    : "rgba(100, 200, 200, 0.5)"
                }
                tappable={true}
                onPress={() => showModal(kec)}
              ></Polygon>
            );
          })}
        </MapView>

        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>City :{dataModal.city}</Text>
              <Text>District: {dataModal.name}</Text>
              <Text>Population: {dataModal.population}</Text>
              <Text>abduction: {dataModal.abduction} case</Text>
              <Text>anarchism: {dataModal.anarchism} case</Text>
              <Text>Drugs: {dataModal.drugs} case</Text>
              <Text>Fraudulency: {dataModal.fraudulency} case</Text>
              <Text>Harassment: {dataModal.harassment} case</Text>
              <Text>Homicide: {dataModal.homicide} case</Text>
              <Text>Robbery {dataModal.robbery} case</Text>
              <Text>Theft: {dataModal.theft} case</Text>
              <Text>Status: {dataModal.status}</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>thanks</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <Modal animationType="slide" transparent={true} visible={modalAlert}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>{status}</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalAlert(false);
                }}
              >
                <Text style={styles.textStyle}>thanks</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <StatusBar style="auto" />
      </View>
    );
  }
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
    padding: 50,
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
