// import { StatusBar } from "expo-status-bar";
// import React, { useState, useEffect } from "react";
// import { StyleSheet, Dimensions, View, Picker, Button } from "react-native";
// import MapView, { Marker, Polygon } from "react-native-maps";
// import { buildCoordinate } from "../coordinates";
// import * as Location from "expo-location";
// const screenWidth = Math.round(Dimensions.get("window").width);
// const screenHeight = Math.round(Dimensions.get("window").height);

export default function Page1() {
//   const [location, setLocation] = useState({
//     latitude: -6.353576,
//     longitude: 106.7800195,
//   });
//   const [errorMsg, setErrorMsg] = useState(null);

//   //test looping polygon
//   const [dataKecamatan, setDataKecamatan] = useState([]);

//   useEffect(() => {
//     const kec = [
//       "cengkareng",
//       "grogolPetamburan",
//       "kalideres",
//       "kebonJeruk",
//       "kembangan",
//       "palmerah",
//       "tamansari",
//       "tambora",
//       "cempakaPutih",
//       "gambir",
//       "joharBaru",
//       "kemayoran",
//       "menteng",
//       "sawahBesar",
//       "senen",
//       "tanahAbang",
//       "cilandak",
//       "jagakarsa",
//       "kebayoranLama",
//       "kebayoranBaru",
//       "mampangPrapatan",
//       "pancoran",
//       "pasarMinggu",
//       "pesanggrahan",
//       "setiaBudi",
//       "tebet",
//       "cakung",
//       "cipayung",
//       "ciracas",
//       "durenSawit",
//       "jatinegara",
//       "kramatJati",
//       "makasar",
//       "matraman",
//       "pasarRebo",
//       "pulogadung",
//       "cilincing",
//       "kelapaGading",
//       "koja",
//       "pademangan",
//       "penjaringan",
//       "tanjungPriok",
//     ];
//     const arr = [];
//     for (let i = 0; i < kec.length; i++) {
//       // arr.push(buildCoordinate(kec[i]));
//       let obj = {
//         cords: buildCoordinate(kec[i]),
//         status: null,
//       };
//       if (kec[i][0] == "p") {
//         obj.status = "danger";
//       } else if (kec[i][0] == "k") {
//         obj.status = "warning";
//       } else if (kec[i][0] == "t") {
//         obj.status = "beware";
//       } else {
//         obj.status = "save";
//       }
//       arr.push(obj);
//     }
//     setDataKecamatan(arr);
//     (async () => {
//       let { status } = await Location.requestPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location.coords);
//     })();
//   }, []);

//   let text = "Waiting..";
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   const cekPolygon = () => {
//     console.log("taro modal box disini <------------------");
//   };

  return (
    <View></View>
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: location.latitude,
//           longitude: location.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         {dataKecamatan.map((kec, index) => {
//           return (
//             <Polygon
//               key={index}
//               coordinates={kec.cords}
//               //setting warna fill nya dibawah ini, mending rgba aja biar skalian ngatur opacity nya
//               fillColor={
//                 kec.status == "danger"
//                   ? "rgba(255, 0, 0, 0.4)"
//                   : kec.status == "warning"
//                   ? "	rgba(255, 195, 160, 0.4)"
//                   : kec.status == "beware"
//                   ? "rgba(255, 255, 100, 0.4)"
//                   : kec.status == "save"
//                   ? "rgba(101, 220, 184, 0.4)"
//                   : "rgba(0, 0, 0, 0.4)"
//               }
//               strokeColor={
//                 kec.status == "danger"
//                   ? "rgba(255, 0, 0, 0.4)"
//                   : kec.status == "warning"
//                   ? "	rgba(255, 195, 160, 0.4)"
//                   : kec.status == "beware"
//                   ? "rgba(255, 242, 175, 0.4)"
//                   : kec.status == "save"
//                   ? "rgba(101, 220, 184, 0.4)"
//                   : "rgba(0, 0, 0, 0.4)"
//               }
//               tappable={true}
//               onPress={() => cekPolygon()}
//             />
//           );
//         })}
//         <Marker coordinate={location} />
//       </MapView>
//       <StatusBar style="auto" />
//     </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     height: screenHeight - 100,
//     width: screenWidth,
//   },
// });
