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

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import Geocoder from "react-native-geocoding";

import Geolocation from "react-native-geolocation-service";
//import { request, PERMISSIONS } from "react-native-permissions";

import color from "../config/color";
import font from "../config/font";
import general from "../config/general";

class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startRegion: {
        latitude: 22.4185817,
        longitude: 114.2093683,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      startAddr: "",
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      //error?
      (position) => {
        this.map.animateToRegion({
          ...this.state.startRegion,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        this.setState({
          ...this.state.startRegion,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(
          this.state.latitude,
          this.state.longitude + "        didmount"
        );
        this.getactualAddr(this.state.latitude, this.state.longitude);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onChangeValue = (startRegion) => {
    this.setState({
      startRegion,
    });

    this.getactualAddr(
      this.state.startRegion.latitude,
      this.state.startRegion.longitude
    );

    ToastAndroid.show(
      //JSON.stringify(startRegion) +
      this.state.startAddr,
      ToastAndroid.SHORT
    );
  };

  getactualAddr(lat, lng) {
    Geocoder.init("AIzaSyBIdElVmXH6aileTFiJ6vwGa4X-_OqxjFs", {
      language: "en",
    });
    Geocoder.from(lat, lng)
      .then((json) => {
        var addressComponent = json.results[0].address_components;
        var formattedAddr = json.results[0].formatted_address;

        //  var districtComponent = addressComponent[2].long_name;
        //  var regionComponent = addressComponent[1].long_name;
        //var buildingComponent = addressComponent[0].long_name;

        this.setState({
          startAddr: formattedAddr,
        });
        console.log(this.state.startAddr);
      })
      .catch((error) => console.warn(error));
  }

  render() {
    return (
      <ImageBackground style={general.background}>
        <View style={general.header}>
          <Text style={general.headertext}>Start</Text>
        </View>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation={true}
            initialRegion={this.state.startRegion}
            onRegionChangeComplete={this.onChangeValue}
            ref={(ref) => (this.map = ref)}
          ></MapView>
        </View>

        <View
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 20,
            height: 20,
          }}
        >
          <Image
            style={styles.pinicon}
            source={require("../assets/map-pin.png")}
          />
        </View>

        <View style={styles.Buttonsubmit}>
          <TouchableWithoutFeedback //go to map_destin
            onPress={() => {
              this.props.navigation.navigate("map_destin", {
                startRegion: this.state.startRegion,
                startAddr: this.state.startAddr,
                userName: this.props.route.params.userName,
              });
            }}
          >
            <Text style={font.Button_whitewords}>Next</Text>
          </TouchableWithoutFeedback>
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
