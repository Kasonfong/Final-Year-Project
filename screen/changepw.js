import React from "react";
import { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

import { Base64 } from "js-base64";

import color from "../config/color";
import font from "../config/font";
import general from "../config/general";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalPw: "",
      newPw: "",
      newPwConfirm: "",
    };
  }

  ChangePW = () => {
    var userName = this.props.route.params.userName;

    var originalPw = Base64.encode(this.state.originalPw);
    var newPw = Base64.encode(this.state.newPw);
    var newPwConfirm = Base64.encode(this.state.newPwConfirm);

    var same = newPw.localeCompare(newPwConfirm);

    if (same == -1) {
      alert("new password and Confirm Password are not the same");
    } else {
      var InsertAPIURL = "http://10.0.2.2:80/api/updatepw.php";

      var headers = {
        "Content-Type": "application/json",
      };

      var Data = {
        userName: userName,
        originalPw: originalPw,
        newPw: newPw,
      };

      //alert("ok now");

      fetch(InsertAPIURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((responseJS) => {
          if (responseJS == "Changed") {
            alert("successfully Changed");
            this.props.navigation.navigate("WelcomeScreen");
          } else if (responseJS == "Server Error updateR") {
            alert("Server Error updateR");
          } else if (responseJS == "original password is incorrect") {
            alert("original password is incorrect");
          } else {
            alert("Error?");
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={general.background}>
        <View style={general.textinput_header}>
          <Text style={[general.headertext]}> Change Pw </Text>
        </View>

        <View style={([general.input], { bottom: 340 })}>
          <TextInput
            style={font.input_placeholder}
            placeholder="Original Password"
            autoCapitalize="none"
            onChangeText={(originalPw) => this.setState({ originalPw })}
          />
        </View>

        <View style={([general.input], { bottom: 260 })}>
          <TextInput
            style={font.input_placeholder}
            placeholder="New Password"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(newPw) => this.setState({ newPw })}
          />
        </View>

        <View style={([general.input], { bottom: 180 })}>
          <TextInput
            style={font.input_placeholder}
            placeholder="Confirmed Password"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(newPwConfirm) => this.setState({ newPwConfirm })}
          />
        </View>

        <View style={styles.Buttonsubmit}>
          <TouchableWithoutFeedback onPress={this.ChangePW}>
            <Text style={font.Button_whitewords}>Submit</Text>
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
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  Buttonsubmit: {
    width: "70%",
    height: 70,
    backgroundColor: "indianred",
    borderRadius: 70 / 2,
    bottom: 100,
  },
});

export default Register;
