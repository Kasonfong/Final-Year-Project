import React from "react";
import { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import { Base64 } from "js-base64";

import color from "../config/color";
import font from "../config/font";
import general from "../config/general";

// import AsyncStorage from '@react-native-community/async-storage';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
    };
  }

  login = () => {
    var userName = this.state.Username;

    var userPassword = Base64.encode(this.state.Password);

    var APIURL = "http://10.0.2.2:80/api/loginsys.php";

    var headers = {
      "Content-Type": "application/json",
    };

    var Data = {
      userName: userName,
      userPassword: userPassword,
    };

    if (userName.length != 0 && userPassword.length != 0) {
      fetch(APIURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((responseJS) => {
          if (responseJS == "selected") {
            alert("successfully login");
            this.props.navigation.navigate("HomePage", {
              userName: this.state.Username,
            });
          } else {
            alert("incorrect ac name or pw");
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("missing name or pw");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={general.background}>
        <View>
          <Image
            style={[styles.icon]}
            source={require("../assets/icon.png")}
          ></Image>
        </View>

        <View style={([general.input], { bottom: 180 })}>
          <TextInput
            style={font.input_placeholder}
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={(Username) => this.setState({ Username })}
          />
        </View>

        <View style={([general.input], { bottom: 120 })}>
          <TextInput
            style={font.input_placeholder}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(Password) => this.setState({ Password })}
          />
        </View>

        <View style={styles.ButtonLogin}>
          <TouchableWithoutFeedback onPress={this.login}>
            <Text style={font.Button_whitewords}>Login</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.ButtonResgister}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={font.Button_blackwords}>Register</Text>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },

  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "whitesmoke",
  },

  icon: {
    position: "absolute",
    top: -450,
    left: -80,
    width: 200,
    height: 200,
    alignSelf: "center",
  },

  ButtonLogin: {
    width: "70%",
    height: 70,
    backgroundColor: "teal",
    borderRadius: 70 / 2,
    bottom: 70,
  },
  ButtonResgister: {
    width: "70%",
    height: 70,
    backgroundColor: "steelblue",
    borderRadius: 70 / 2,
    bottom: 40,
  },
});

export default WelcomeScreen;
