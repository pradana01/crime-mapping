import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Header } from "native-base";
import { StyleSheet, Dimensions, View, Text, Modal, TouchableHighlight, Alert } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import * as Location from "expo-location";
import { district, buildCoordinate } from "../assets/coordinates/index";
import * as TaskManager from "expo-task-manager";
// import * as geolib from "geolib";

import axios from "axios";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function Page1() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [errorMsg, setErrorMsg] = useState(null);
  const [dataKecamatan, setDataKecamatan] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [fetchData, setFetchData] = useState([]);
  const [dataModal, setDataModal] = useState({});

  useEffect(() => {
    axios
      .get(`http://192.168.100.6:3000/districts`)
      .then((res) => {
        setFetchData(res.data);
        console.log("========fetch data============");
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
      console.log("========joining data===========");
      setDataKecamatan(finalData);
    }
  }, [fetchData]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();

    // TaskManager.defineTask(YOUR_TASK_NAME, ({ data: { eventType, region }, error }) => {
    //   if (error) {
    //     // check `error.message` for more details.
    //     return;
    //   }
    //   if (eventType === Location.GeofencingEventType.Enter) {
    //     console.log("You've entered region:", region);
    //   } else if (eventType === Location.GeofencingEventType.Exit) {
    //     console.log("You've left region:", region);
    //   }
    // });
  }, []);

  // useEffect(() => {
  //   let cordinates;

  //   dataKecamatan.forEach((data) => {
  //     cordinates = data.cords;
  //   });

  //   if (geolib.isPointInPolygon({ latitude: -6.260643, longitude: 106.781589 }, cordinates)) {
  //     console.log("<<<<<<<<<<<<< di dalem polygon");
  //     Alert.alert("assssss");
  //   }
  // }, [setDataKecamatan]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

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
                    : "rgba(100, 200, 100, 0.4)"
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
  //test modal
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
