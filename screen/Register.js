import React from "react";
import { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

import { Base64 } from "js-base64";

import color from "../config/color";
import font from "../config/font";
import general from "../config/general";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUserName: "",
      inputUserPw: "",
      inputputUserPwConfirm: "",
    };
  }

  UserInsert = () => {
    var userName = this.state.inputUserName;
    var userPassword = Base64.encode(this.state.inputUserPw);
    var userPasswordConfirm = Base64.encode(this.state.inputputUserPwConfirm);

    var same = userPassword.localeCompare(userPasswordConfirm);
    if (
      userName.length != 0 &&
      userPassword.length != 0 &&
      userPasswordConfirm.length != 0
    ) {
      if (same == -1) {
        alert("Password and Confirm Password are not the same");
      } else {
        var InsertAPIURL = "http://10.0.2.2:80/api/registerUser.php";

        var headers = {
          "Content-Type": "application/json",
        };

        var Data = {
          userName: userName,
          userPassword: userPassword,
        };

        //alert("ok now");

        fetch(InsertAPIURL, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(Data),
        })
          .then((response) => response.json())
          .then((responseJS) => {
            if (responseJS == "Registered") {
              alert("successfully Registered");
              this.props.navigation.navigate("WelcomeScreen");
            } else {
              alert("incorrect input");
            }
          })
          .catch((error) => {
            alert(error);
          });
      }
    } else {
      alert("missing field(s)");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={general.background}>
        <View style={general.textinput_header}>
          <Text style={[general.headertext]}> Register </Text>
        </View>

        <View style={([general.input], { bottom: 300 })}>
          <TextInput
            style={font.input_placeholder}
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={(inputUserName) => this.setState({ inputUserName })}
          />
        </View>

        <View style={([general.input], { bottom: 220 })}>
          <TextInput
            style={font.input_placeholder}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(inputUserPw) => this.setState({ inputUserPw })}
          />
        </View>

        <View style={([general.input], { bottom: 140 })}>
          <TextInput
            style={font.input_placeholder}
            placeholder="Confirmed Password"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(inputputUserPwConfirm) =>
              this.setState({ inputputUserPwConfirm })
            }
          />
        </View>

        <View style={styles.ButtonResgister}>
          <TouchableWithoutFeedback onPress={this.UserInsert}>
            <Text style={font.Button_blackwords}>Register</Text>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  ButtonResgister: {
    width: "70%",
    height: 70,
    backgroundColor: "steelblue",
    borderRadius: 70 / 2,
    bottom: 40,
  },
});

export default Register;
