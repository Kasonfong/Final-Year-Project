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

//import { Picker } from "@react-native-picker/picker";

import RNPickerSelect from "react-native-picker-select";

import color from "../config/color";
import font from "../config/font";
import general from "../config/general";

class Journey extends Component {
  constructor() {
    super();
    this.state = {
      selectedStarting: 2,
      selectedDestination: 1,
      Start: -1,
      Destination: -1,

      KowloonItems: [
        {
          label: "Please choose a district",
          value: -1,
        },
        {
          label: "Kowloon City District",
          value: 9,
        },
        {
          label: "Wong Tai Sin District",
          value: 12,
        },
        {
          label: "Kwun Tong District",
          value: 10,
        },
        {
          label: "Yau Tsim Mong District",
          value: 13,
        },

        {
          label: "Sham Shui Po District",
          value: 11,
        },
      ],

      HkIslandItem: [
        {
          label: "Please choose a district",
          value: -1,
        },
        {
          label: "Central and Western District",
          value: 14,
        },
        {
          label: "Wanchai District",
          value: 17,
        },
        {
          label: "Eastern District",
          value: 15,
        },
        {
          label: "Soutern District",
          value: 16,
        },
      ],
      NTitem: [
        {
          label: "Please choose a district",
          value: -1,
        },
        {
          label: "Tsuen Wan District",
          value: 6,
        },
        {
          label: "Kwai Tsing District",
          value: 1,
        },
        {
          label: "Sai Kung District",
          value: 3,
        },
        {
          label: "Shatin District",
          value: 4,
        },
        {
          label: "Tai Po District",
          value: 5,
        },
        {
          label: "North District",
          value: 2,
        },
        {
          label: "Tuen Mun District",
          value: 7,
        },
        {
          label: "Yuen Long District",
          value: 8,
        },
        {
          label: "Islands District",
          value: 0,
        },
      ],
    };
    this.updateStarting = this.updateStarting.bind(this);
    this.updateDestination = this.updateDestination.bind(this);
  }

  updateStarting(selectedStarting) {
    this.setState({ selectedStarting });
  }

  updateDestination(selectedDestination) {
    this.setState({ selectedDestination });
  }

  essentialInsert = () => {
    var userName = this.props.route.params.userName;

    var dt = new Date();
    var year = dt.getFullYear();
    var month = dt.getMonth();
    month = month + 1;
    var date = dt.getDate();
    var day = dt.getDay();

    var charday;

    if (day == 0) {
      charday = "Sunday";
    } else if (day == 1) {
      charday = "Monday";
    } else if (day == 2) {
      charday = "Tuesday";
    } else if (day == 3) {
      charday = "Wednesday";
    } else if (day == 4) {
      charday = "Thursday";
    } else if (day == 5) {
      charday = "Friday";
    } else if (day == 6) {
      charday = "Saturday";
    }

    var hour = dt.getHours();
    hour = hour + 8;
    var minutes = dt.getMinutes();

    if (this.state.Start == -1 || this.state.Destination == -1) {
      alert("Please set both Start and Destination");
    } else {
      var InsertAPIURL = "http://10.0.2.2:80/api/dataInsert.php";

      var headers = {
        "Content-Type": "application/json",
      };

      var Data = {
        userName: userName,

        // now they are varchar, considering to change it to int--------> done
        startSubmit: this.state.Start,
        endSubmit: this.state.Destination,

        daySubmit: day,
        dateSubmit: date,
        monthSubmit: month,

        yearSubmit: year,
        hourSubmit: hour,
        minutesSubmit: minutes,

        //tunnel: EHC[1], //final
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
          //add new action
          //this.props.navigation.navigate("HomePage");
        })
        .catch((error) => {
          alert(" please check it out in home page");
          //  alert("ummm" + error);
        });
    }
  };

  render() {
    const StartingButtons = ["Kowloon", "Hong Kong Island", "New Territories"];

    const DestinationButtons = [
      "Kowloon",
      "Hong Kong Island",
      "New Territories",
    ];

    const { selectedStarting } = this.state;
    const { selectedDestination } = this.state;

    return (
      <ImageBackground style={general.background}>
        <View style={general.header}>
          <Text style={general.headertext}>district names</Text>
        </View>

        <View style={general.journey_main}>
          <ButtonGroup
            onPress={this.updateStarting}
            selectedIndex={selectedStarting}
            buttons={StartingButtons}
            containerStyle={{ height: 50 }}
          />
          {selectedStarting == 0 ? (
            <RNPickerSelect
              style={{ height: 100, width: "100%" }}
              value={this.state.Start}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ Start: itemValue });
              }}
              items={this.state.KowloonItems}
            ></RNPickerSelect>
          ) : null}
          {selectedStarting == 1 ? (
            <RNPickerSelect
              style={{ height: 100, width: "100%" }}
              value={this.state.Start}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ Start: itemValue });
              }}
              items={this.state.HkIslandItem}
            ></RNPickerSelect>
          ) : null}
          {selectedStarting == 2 ? (
            <RNPickerSelect
              style={{ height: 100, width: "100%" }}
              value={this.state.Start}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ Start: itemValue });
              }}
              items={this.state.NTitem}
            ></RNPickerSelect>
          ) : null}

          <ButtonGroup
            onPress={this.updateDestination}
            selectedIndex={selectedDestination}
            buttons={DestinationButtons}
            containerStyle={{ height: 50 }}
          />

          {selectedDestination == 0 ? (
            <RNPickerSelect
              style={{ height: 100, width: "100%" }}
              value={this.state.Destination}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ Destination: itemValue });
              }}
              items={this.state.KowloonItems}
            ></RNPickerSelect>
          ) : null}
          {selectedDestination == 1 ? (
            <RNPickerSelect
              style={{ height: 100, width: "100%" }}
              value={this.state.Destination}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ Destination: itemValue });
              }}
              items={this.state.HkIslandItem}
            ></RNPickerSelect>
          ) : null}
          {selectedDestination == 2 ? (
            <RNPickerSelect
              style={{ height: 100, width: "100%" }}
              value={this.state.Destination}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ Destination: itemValue });
              }}
              items={this.state.NTitem}
            ></RNPickerSelect>
          ) : null}
        </View>

        <View style={style.ConfirmButton}>
          <TouchableWithoutFeedback onPress={this.essentialInsert}>
            <Text style={font.Button_whitewords}>Confirm</Text>
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

  ConfirmButton: {
    width: "70%",
    height: 70,
    backgroundColor: "indianred",
    borderRadius: 70 / 2,
    bottom: 100,
  },
});

export default Journey;
