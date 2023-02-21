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
import { getDistance } from "geolib";

class mapSumbit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      startindex: -1,
      destindex: -1,
    };
  }

  componentDidMount() {
    //var start

    var KCstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.323243853244207, longitude: 114.18554080756898 }
    );
    var WTSstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.354872301396917, longitude: 114.19741931209697 }
    );
    var KTstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.31570785871365, longitude: 114.23310893444913 }
    );
    var YTMstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.3116055151387, longitude: 114.17069073910119 }
    );
    var SSPstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.332106747250194, longitude: 114.14690632632977 }
    );
    var CWstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.273032523249825, longitude: 114.1498844230749 }
    );
    var WCstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.27626275835977, longitude: 114.18258147143216 }
    );
    var Eaststart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.273477798142306, longitude: 114.23604492459863 }
    );
    var Souternstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.243284296403104, longitude: 114.19745717562942 }
    );
    var TWstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.371363212622818, longitude: 114.11415845232278 }
    );
    var KwaiTsingstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.35491181469403, longitude: 114.12610676959737 }
    );
    var SKstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.38339824458076, longitude: 114.27095564285163 }
    );
    var STstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.386421201821797, longitude: 114.20931101558541 }
    );
    var TPstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.442333941126478, longitude: 114.16551654304322 }
    );
    var Northstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.500917298968144, longitude: 114.15581925890913 }
    );
    var TMstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.39076476424141, longitude: 113.97251283297363 }
    );
    var YLstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.444568396040747, longitude: 114.02219814112038 }
    );
    var Islandstart = getDistance(
      {
        latitude: this.props.route.params.startRegion.latitude,
        longitude: this.props.route.params.startRegion.longitude,
      },
      { latitude: 22.262841700897614, longitude: 113.96550178042749 }
    );

    var min = Math.min(
      KCstart,
      WTSstart,
      KTstart,
      YTMstart,
      SSPstart,
      CWstart,
      WCstart,
      Eaststart,
      Souternstart,
      TWstart,
      KwaiTsingstart,
      SKstart,
      STstart,
      TPstart,
      Northstart,
      TMstart,
      YLstart,
      Islandstart
    );
    console.log(min);

    if (min == KCstart) {
      var startindex = 9;
    } else if (min == WTSstart) {
      var startindex = 12;
    } else if (min == KTstart) {
      var startindex = 10;
    } else if (min == YTMstart) {
      var startindex = 13;
    } else if (min == SSPstart) {
      var startindex = 11;
    } else if (min == CWstart) {
      var startindex = 14;
    } else if (min == WCstart) {
      var startindex = 17;
    } else if (min == Eaststart) {
      var startindex = 15;
    } else if (min == Souternstart) {
      var startindex = 16;
    } else if (min == TWstart) {
      var startindex = 6;
    } else if (min == KwaiTsingstart) {
      var startindex = 1;
    } else if (min == SKstart) {
      var startindex = 3;
    } else if (min == STstart) {
      var startindex = 4;
    } else if (min == TPstart) {
      var startindex = 5;
    } else if (min == Northstart) {
      var startindex = 2;
    } else if (min == TMstart) {
      var startindex = 7;
    } else if (min == YLstart) {
      var startindex = 8;
    } else if (min == Islandstart) {
      var startindex = 0;
    }
    this.setState({
      startindex: startindex,
    });
    console.log(startindex);

    //var dest

    var KCdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.323243853244207, longitude: 114.18554080756898 }
    );
    var WTSdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.354872301396917, longitude: 114.19741931209697 }
    );
    var KTdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.31570785871365, longitude: 114.23310893444913 }
    );
    var YTMdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.3116055151387, longitude: 114.17069073910119 }
    );
    var SSPdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.332106747250194, longitude: 114.14690632632977 }
    );
    var CWdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.273032523249825, longitude: 114.1498844230749 }
    );
    var WCdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.27626275835977, longitude: 114.18258147143216 }
    );
    var Eastdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.273477798142306, longitude: 114.23604492459863 }
    );
    var Souterndest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.243284296403104, longitude: 114.19745717562942 }
    );
    var TWdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.371363212622818, longitude: 114.11415845232278 }
    );
    var KwaiTsingdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.35491181469403, longitude: 114.12610676959737 }
    );
    var SKdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.38339824458076, longitude: 114.27095564285163 }
    );
    var STdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.386421201821797, longitude: 114.20931101558541 }
    );
    var TPdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.442333941126478, longitude: 114.16551654304322 }
    );
    var Northdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.500917298968144, longitude: 114.15581925890913 }
    );
    var TMdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.39076476424141, longitude: 113.97251283297363 }
    );
    var YLdest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.444568396040747, longitude: 114.02219814112038 }
    );
    var Islanddest = getDistance(
      {
        latitude: this.props.route.params.destinRegion.latitude,
        longitude: this.props.route.params.destinRegion.longitude,
      },
      { latitude: 22.262841700897614, longitude: 113.96550178042749 }
    );

    var destmin = Math.min(
      KCdest,
      WTSdest,
      KTdest,
      YTMdest,
      SSPdest,
      CWdest,
      WCdest,
      Eastdest,
      Souterndest,
      TWdest,
      KwaiTsingdest,
      SKdest,
      STdest,
      TPdest,
      Northdest,
      TMdest,
      YLdest,
      Islanddest
    );
    console.log(destmin);

    if (destmin == KCdest) {
      var destindex = 9;
    } else if (destmin == WTSdest) {
      var destindex = 12;
    } else if (destmin == KTdest) {
      var destindex = 10;
    } else if (destmin == YTMdest) {
      var destindex = 13;
    } else if (destmin == SSPdest) {
      var destindex = 11;
    } else if (destmin == CWdest) {
      var destindex = 14;
    } else if (destmin == WCdest) {
      var destindex = 17;
    } else if (destmin == Eastdest) {
      var destindex = 15;
    } else if (destmin == Souterndest) {
      var destindex = 16;
    } else if (destmin == TWdest) {
      var destindex = 6;
    } else if (destmin == KwaiTsingdest) {
      var destindex = 1;
    } else if (destmin == SKdest) {
      var destindex = 3;
    } else if (destmin == STdest) {
      var destindex = 4;
    } else if (destmin == TPdest) {
      var destindex = 5;
    } else if (destmin == Northdest) {
      var destindex = 2;
    } else if (destmin == TMdest) {
      var destindex = 7;
    } else if (destmin == YLdest) {
      var destindex = 8;
    } else if (destmin == Islanddest) {
      var destindex = 0;
    }

    this.setState({
      destindex: destindex,
    });
    console.log(destindex);
  }

  mapInsert = () => {
    var userName = this.props.route.params.userName;
    var startLong = this.props.route.params.startRegion.longitude;
    var startLat = this.props.route.params.startRegion.latitude;
    var destLong = this.props.route.params.destinRegion.longitude;
    var destLat = this.props.route.params.destinRegion.latitude;

    var startindex = this.state.startindex;
    var destindex = this.state.destindex;

    var dt = new Date();
    var year = dt.getFullYear();
    var month = dt.getMonth();
    month = month + 1;
    var date = dt.getDate();
    var day = dt.getDay();

    var hour = dt.getHours();
    hour = hour + 8;
    var minutes = dt.getMinutes();

    var InsertAPIURL = "http://10.0.2.2:80/api/mapInsert.php";

    var headers = {
      "Content-Type": "application/json",
    };

    var Data = {
      userName: userName,
      startLong: startLong,
      startLat: startLat,
      destLong: destLong,
      destLat: destLat,

      startindex: startindex,
      destindex: destindex,

      daySubmit: day,
      dateSubmit: date,
      monthSubmit: month,

      yearSubmit: year,
      hourSubmit: hour,
      minutesSubmit: minutes,
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
        alert(error + "0.0");
      });
  };

  render() {
    return (
      <ImageBackground style={general.background}>
        <View style={general.header}>
          <Text style={general.headertext}> submit locations </Text>
        </View>

        <View style={general.journey_main}>
          <Text style={font.main_blackwords}>
            {" "}
            Start: {"\n"} {"\n"} {"\n"}
            {this.props.route.params.startAddr}
            {"\n"} {"\n"} {"\n"}
          </Text>
          <Text style={font.main_blackwords}>
            {" "}
            End: {"\n"} {"\n"} {"\n"}
            {this.props.route.params.destinAddr}
            {"\n"}
          </Text>
        </View>

        <View style={style.ConfirmButton}>
          <TouchableWithoutFeedback onPress={this.mapInsert}>
            <Text style={font.Button_whitewords}>Confirm</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={general.bottom}></View>

        <View style={general.HomePageButton}>
          <TouchableWithoutFeedback
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

export default mapSumbit;
