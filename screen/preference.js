import { CardItem } from "native-base";
import React, { Component } from "react";

import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableWithoutFeedback,
  isVisible,
  modalProps,
  BottomSheet,
  ButtonGroup,
  StyleSheet,
  TextInput,
} from "react-native";
import { CheckBox, Card } from "react-native-elements";

import color from "../config/color";
import font from "../config/font";
import general from "../config/general";

class Preference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      chosen: 0,
    };
  }

  onePressed() {
    //  alert('one');
    this.setState({
      one: true,
      two: false,
      three: false,
      four: false,
      five: false,
    });
    this.setState({ chosen: 1 });
  }

  twoPressed() {
    // alert('two');

    this.setState({
      one: false,
      two: true,
      three: false,
      four: false,
      five: false,
    });
    this.setState({ chosen: 2 });
  }

  threePressed() {
    // alert('three');

    this.setState({
      one: false,
      two: false,
      three: true,
      four: false,
      five: false,
    });
    this.setState({ chosen: 3 });
  }

  fourPressed() {
    // alert('four');

    this.setState({
      one: false,
      two: false,
      three: false,
      four: true,
      five: false,
    });
    this.setState({ chosen: 4 });
  }

  fivePressed() {
    // alert('five');

    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: true,
    });
    this.setState({ chosen: 5 });
  }

  TestInsert = () => {
    var preferenceInsert = this.state.chosen;
    var userName = this.props.route.params.userName;

    if (preferenceInsert == 0) {
      alert("0");
    } else {
      //  alert("You have chosen")
      var InsertAPIURL = "http://10.0.2.2:80/api/prefinset.php";

      var headers = {
        "Content-Type": "application/json",
      };

      var Data = {
        userName: userName,
        preferenceInsert: preferenceInsert,
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
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  render() {
    return (
      <ImageBackground style={general.background}>
        <View style={general.header}>
          <Text style={general.headertext}>Preference</Text>
        </View>

        <View style={general.preference_main}>
          <Card>
            <CardItem header>
              <Text style={font.main_blackwords}>
                The importance of time, compared to real money ?
              </Text>
            </CardItem>

            <CardItem cardBody>
              <CheckBox
                checked={this.state.one}
                onPress={() => this.onePressed()}
              ></CheckBox>

              <Text style={font.main_blackwords}>1 ( least important )</Text>
            </CardItem>

            <CardItem cardBody>
              <CheckBox
                checked={this.state.two}
                onPress={() => this.twoPressed()}
              ></CheckBox>
              <Text style={font.main_blackwords}>2</Text>
            </CardItem>
            <CardItem cardBody>
              <CheckBox
                checked={this.state.three}
                onPress={() => this.threePressed()}
              ></CheckBox>

              <Text style={font.main_blackwords}>3 ( same )</Text>
            </CardItem>

            <CardItem cardBody>
              <CheckBox
                checked={this.state.four}
                onPress={() => this.fourPressed()}
              ></CheckBox>

              <Text style={font.main_blackwords}>4</Text>
            </CardItem>

            <CardItem cardBody>
              <CheckBox
                checked={this.state.five}
                onPress={() => this.fivePressed()}
              ></CheckBox>

              <Text style={font.main_blackwords}>5 ( most important )</Text>
            </CardItem>
          </Card>
        </View>

        <View style={style.ConfirmButton}>
          <TouchableWithoutFeedback onPress={this.TestInsert}>
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

export default Preference;
