import { Toast } from "native-base";
import React from "react";
import { Component } from "react";
import { ToastAndroid } from "react-native";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  SectionList,
  Platform,
} from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import Geocoder from "react-native-geocoding";

import Geolocation from "react-native-geolocation-service";
import MapViewDirections from "react-native-maps-directions";

import color from "../config/color";
import font from "../config/font";
import general from "../config/general";

class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: {
        startLong: "",
        startLat: "",
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },
      dest: { destLong: "", destLat: "" },
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.mapSearch();
    }, 1000);
  }

  mapSearch = () => {
    var userName = this.props.route.params.userName;

    var InsertAPIURL = "http://10.0.2.2:80/api/mapRoute.php";

    var headers = {
      "Content-Type": "application/json",
    };

    var Data = {
      userName: userName,
    };

    //alert("ok now");

    fetch(InsertAPIURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        alert(response[0].Message);

        this.setState({ startLong: response[0].startLong });

        this.setState({ startLat: response[0].startLat });

        this.setState({ destLong: response[0].destLong });

        this.setState({ destLat: response[0].destLat });
        console.log(
          this.state.startLong,
          this.state.startLat,
          this.state.destLat,
          this.state.destLong
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  render() {
    return (
      <ImageBackground style={general.background}>
        <View style={general.header}>
          <Text style={general.headertext}>Route</Text>
        </View>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation={true}
            initialRegion={{
              latitude: 22.417548028627,
              longitude: 114.20925261453,
              longitudeDelta: 0.0922,
              latitudeDelta: 0.0421,
            }}
          >
            <MapViewDirections
              origin={this.state.start}
              destination={this.state.dest}
              apikey={"AIzaSyBIdElVmXH6aileTFiJ6vwGa4X-_OqxjFs"}
              strokeWidth={20}
              strokeColor="hotpink"
            />
          </MapView>
        </View>

        <View style={general.bottom}></View>

        <View style={general.HomePageButton}>
          <TouchableWithoutFeedback //onPress={this.getAllMysql}
            onPress={() => {
              this.props.navigation.navigate("HomePage", {
                userName: this.props.route.params.userName,
              });
            }}
          >
            <Image
              style={general.buttuonicon}
              source={require("../assets/home.png")}
            ></Image>
          </TouchableWithoutFeedback>
        </View>

        <View style={general.PreferenceButton}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate("Preference", {
                userName: this.props.route.params.userName,
              });
            }}
          >
            <Image
              style={general.buttuonicon}
              source={require("../assets/child.png")}
            ></Image>
          </TouchableWithoutFeedback>
        </View>

        <View style={general.JourneyButton}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate("split_journey", {
                userName: this.props.route.params.userName,
              });
            }}
          >
            <Image
              style={general.buttuonicon}
              source={require("../assets/car-side.png")}
            ></Image>
          </TouchableWithoutFeedback>
        </View>

        <View style={general.SettingButton}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate("Setting", {
                userName: this.props.route.params.userName,
              });
            }}
          >
            <Image
              style={general.buttuonicon}
              source={require("../assets/cogs.png")}
            ></Image>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 120,
    width: "100%",
  },

  row: {
    // item
    padding: 15,
    marginBottom: 5,
    backgroundColor: "powderblue",
    width: "100%",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 18,
  },
  listheader: {
    //header
    padding: 15,
    marginBottom: 5,
    backgroundColor: "teal",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  Buttonsubmit: {
    width: "70%",
    height: 70,
    backgroundColor: "indianred",
    borderRadius: 70 / 2,
    bottom: 80,
  },
  map: {
    height: "100%",
  },

  pinicon: {
    position: "absolute",

    width: "100%",
    height: "170%",
    alignSelf: "center",
  },
});

export default SettingPage;
