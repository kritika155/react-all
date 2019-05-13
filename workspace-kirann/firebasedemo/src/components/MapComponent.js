// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import MapView from "react-native-maps";

// export const MapComponent= () => (
//     <View style={styles.container}>
//         <MapView
//             style={styles.map}
//             initialRegion={{ // initial region set to Bileto
//                 latitude: 50.0517273,
//                 longitude: 14.4286503,
//                 latitudeDelta: 0.0922,
//                 longitudeDelta: 0.0421
//             }}
//         />
//     </View>
// );

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#F5FCFF"
//     },
//     map: {
//         flex: 1,
//     }
// });
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class MapComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});
