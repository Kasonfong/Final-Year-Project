import React from "react";
import { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  SectionList,
} from "react-native";

import color from "../config/color";
import font from "../config/font";
import general from "../config/general";

const sections = [
  {
    id: "0",
    title: "Account",
    data: [
      { id: "0", text: "Name" },
      { id: "1", text: "Password" },
    ],
  },
];

class SettingPage extends Component {
  render() {
    return (
      <ImageBackground style={general.background}>
        <View style={general.header}>
          <Text style={general.headertext}>Setting</Text>
        </View>

        {/* <SectionList
          style={styles.container}
          sections={sections}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => console.log("OK")} //need to correct
            >
              <Text style={styles.row}>{item.text}</Text>
            </TouchableWithoutFeedback>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.listheader}>{section.title}</Text>
          )}
          keyExtractor={(item) => item.id}
        /> */}

        <View style={styles.ChangeButton}>
          <TouchableWithoutFeedback>
            <TouchableWithoutFeedback //onPress={this.getAllMysql}
              onPress={() => {
                this.props.navigation.navigate("changepw", {
                  userName: this.props.route.params.userName,
                });
              }}
            >
              <Text style={font.Button_whitewords}>Change Password</Text>
            </TouchableWithoutFeedback>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.ButtonLogout}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("WelcomeScreen")}
          >
            <Text style={font.Button_whitewords}> log out </Text>
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

test = () => {
  fetch("http://localhost/backend.php", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key: "test",
    }),
  })
    .then((response) => response.json())
    .then((res) => {
      alert(res.message);
    })
    .done();
};

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

  ButtonLogout: {
    width: "70%",
    height: 70,
    backgroundColor: "indianred",
    borderRadius: 70 / 2,
    bottom: 100,
  },

  ChangeButton: {
    width: "80%",
    height: 150,
    backgroundColor: "cadetblue",
    borderRadius: 70 / 2,
    bottom: 250,
  },
});

export default SettingPage;
