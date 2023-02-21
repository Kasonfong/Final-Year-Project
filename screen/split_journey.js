import React, { Component, useEffect } from "react";

import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableWithoutFeedback,
  BottomSheet,
  useState,
  StyleSheet,
  Button,
} from "react-native";

import { ButtonGroup } from "react-native-elements";

import { Picker } from "@react-native-picker/picker";

import RNPickerSelect from "react-native-picker-select";

import color from "../config/color";
import font from "../config/font";
import general from "../config/general";

class Journey extends Component {
  render() {
    return (
      <ImageBackground style={general.background}>
        <View style={general.header}>
          <Text style={general.headertext}>New Journey</Text>
        </View>

        <View style={style.NameButton}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate("Journey", {
                userName: this.props.route.params.userName,
              });
            }}
          >
            <Text style={font.Button_whitewords}>choose with names</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={style.MapButton}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate("map_jour", {
                userName: this.props.route.params.userName,
              });
            }}
          >
            <Text style={font.Button_whitewords}>choose with map</Text>
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

const style = StyleSheet.create({
  containerStyle: { backgroundColor: "red" },
  titleStyle: { color: "white" },

  NameButton: {
    width: "80%",
    height: 150,
    backgroundColor: "cadetblue",
    borderRadius: 70 / 2,
    bottom: 250,
  },

  MapButton: {
    width: "80%",
    height: 150,
    backgroundColor: "darkseagreen",
    borderRadius: 70 / 2,
    bottom: 150,
  },
});

export default Journey;
