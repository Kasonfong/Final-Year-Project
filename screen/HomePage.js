import React, { Component, useState, useEffect } from "react";

import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import color from "../config/color";
import font from "../config/font";
import general from "../config/general";
import HeaderStyles from "../config/headerStyles";
//import FooterStyles from "../config/footerStyles"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      preferenceInsert: "",

      startSubmit: "",
      endSubmit: "",

      daySubmit: "",
      dateSubmit: "",
      monthSubmit: "",
      yearSubmit: "",

      hourSubmit: "",
      minutesSubmit: "",

      tunnelSuggested: "",


      isUpdated:'false'
    };
  }

  componentDidMount() {

    
      console.log('componentDidMount  isupdated:' + this.state.isUpdated)
      this.setState({
        
      isUpdated: true
      })
  }

  componentDidUpdate(prevProps, prevState) {

    if(prevState.isUpdated != this.state.isUpdated){
     
      console.log('componentDidUpdate  isupdated:' + this.state.isUpdated)
      this.getAllMysql()
      this.setState({
        isUpdated: false
      })
    }

  }

  getAllMysql = () => {

    console.log('isupdated:' + this.state.isUpdated)
    var findName = this.props.route.params.userName;

    var APIURL = "http://10.0.2.2:80/api/homepageinfosearch.php";
    //alert(userName);
    var headers = {
      "Content-Type": "application/json",
    };

    var Data = {
      findName: findName,
    };

    fetch(APIURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ preferenceInsert: response[0].preferenceInsert });

        if (response[0].startSubmit == 0) {
          this.setState({ startSubmit: "Islands District" });
        } else if (response[0].startSubmit == 1) {
          this.setState({ startSubmit: "Kwai Tsing District" });
        } else if (response[0].startSubmit == 2) {
          this.setState({ startSubmit: "North District" });
        } else if (response[0].startSubmit == 3) {
          this.setState({ startSubmit: "Sai Kung District" });
        } else if (response[0].startSubmit == 4) {
          this.setState({ startSubmit: " Sha Tin District" });
        } else if (response[0].startSubmit == 5) {
          this.setState({ startSubmit: "Tai Po District" });
        } else if (response[0].startSubmit == 6) {
          this.setState({ startSubmit: "Tsuen Wan District" });
        } else if (response[0].startSubmit == 7) {
          this.setState({ startSubmit: "Tuen Mun District" });
        } else if (response[0].startSubmit == 8) {
          this.setState({ startSubmit: "Yuen Long District" });
        } else if (response[0].startSubmit == 9) {
          this.setState({ startSubmit: "Kowloon City District" });
        } else if (response[0].startSubmit == 10) {
          this.setState({ startSubmit: "Kwun Tong District" });
        } else if (response[0].startSubmit == 11) {
          this.setState({ startSubmit: "Sham Shui Po District" });
        } else if (response[0].startSubmit == 12) {
          this.setState({ startSubmit: " Wong Tai Sin District" });
        } else if (response[0].startSubmit == 13) {
          this.setState({ startSubmit: "Yau Tsim Mong District" });
        } else if (response[0].startSubmit == 14) {
          this.setState({ startSubmit: "Central & Western District" });
        } else if (response[0].startSubmit == 15) {
          this.setState({ startSubmit: "Eastern District" });
        } else if (response[0].startSubmit == 16) {
          this.setState({ startSubmit: "Southern District" });
        } else if (response[0].startSubmit == 17) {
          this.setState({ startSubmit: "Wan Chai District" });
        } else if (response[0].startSubmit == 99) {
          this.setState({ startSubmit: "nil" });
        }

        if (response[0].endSubmit == 0) {
          this.setState({ endSubmit: "Islands District" });
        } else if (response[0].endSubmit == 1) {
          this.setState({ endSubmit: "Kwai Tsing District" });
        } else if (response[0].endSubmit == 2) {
          this.setState({ endSubmit: "North District" });
        } else if (response[0].endSubmit == 3) {
          this.setState({ endSubmit: "Sai Kung District" });
        } else if (response[0].endSubmit == 4) {
          this.setState({ endSubmit: " Sha Tin District" });
        } else if (response[0].endSubmit == 5) {
          this.setState({ endSubmit: "Tai Po District" });
        } else if (response[0].endSubmit == 6) {
          this.setState({ endSubmit: "Tsuen Wan District" });
        } else if (response[0].endSubmit == 7) {
          this.setState({ endSubmit: "Tuen Mun District" });
        } else if (response[0].endSubmit == 8) {
          this.setState({ endSubmit: "Yuen Long District" });
        } else if (response[0].endSubmit == 9) {
          this.setState({ endSubmit: "Kowloon City District" });
        } else if (response[0].endSubmit == 10) {
          this.setState({ endSubmit: "Kwun Tong District" });
        } else if (response[0].endSubmit == 11) {
          this.setState({ endSubmit: "Sham Shui Po District" });
        } else if (response[0].endSubmit == 12) {
          this.setState({ endSubmit: " Wong Tai Sin District" });
        } else if (response[0].endSubmit == 13) {
          this.setState({ endSubmit: "Yau Tsim Mong District" });
        } else if (response[0].endSubmit == 14) {
          this.setState({ endSubmit: "Central & Western District" });
        } else if (response[0].endSubmit == 15) {
          this.setState({ endSubmit: "Eastern District" });
        } else if (response[0].endSubmit == 16) {
          this.setState({ endSubmit: "Southern District" });
        } else if (response[0].endSubmit == 17) {
          this.setState({ endSubmit: "Wan Chai District" });
        } else if (response[0].endSubmit == 99) {
          this.setState({ endSubmit: "nil" });
        }

        this.setState({ daySubmit: response[0].daySubmit });
        this.setState({ dateSubmit: response[0].dateSubmit });

        this.setState({ monthSubmit: response[0].monthSubmit });

        this.setState({ yearSubmit: response[0].yearSubmit });

        this.setState({ hourSubmit: response[0].hourSubmit });

        this.setState({ minutesSubmit: response[0].minutesSubmit });

        this.setState({ tunnelSuggested: response[0].tunnel });
      })
      .catch((error) => {
        alert("WTF " + error);
      });
  };

  render() {
    return (
      <ImageBackground style={general.background}>
        <HeaderStyles title='Home Page' />

        <View style={general.journey_main}>
          <Text style={font.main_blackwords}>
            {" "}
            Hello, {this.props.route.params.userName} {"\n"}
          </Text>

          <Text style={font.main_blackwords}>
            {" "}
            Current Preference(1-5): {this.state.preferenceInsert}
            {"\n"}
          </Text>

          <Text style={font.main_blackwords}>
            Last Usage: {this.state.dateSubmit} / {this.state.monthSubmit} /
            {this.state.yearSubmit}
            {"\r"}in{"\r"}
            {this.state.hourSubmit} : {this.state.minutesSubmit}
            {"\n"}
          </Text>

          <Text style={font.main_blackwords}>
            {" "}
            Starting point: {this.state.startSubmit}
            {"\n"}{" "}
          </Text>

          <Text style={font.main_blackwords}>
            {" "}
            Destination: {this.state.endSubmit}
            {"\n"}{" "}
          </Text>

          <Text style={font.main_blackwords}>
            Tunnel Suggsted: {this.state.tunnelSuggested} {"\n"}
          </Text>
        </View>

        <View style={style.ConfirmButton}>
          <TouchableWithoutFeedback onPress={this.getAllMysql}>
            <Text style={font.Button_whitewords}>Refresh</Text>
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
  ConfirmButton: {
    width: "70%",
    height: 70,
    backgroundColor: "indianred",
    borderRadius: 70 / 2,
    bottom: 100,
  },
});

export default HomePage;
