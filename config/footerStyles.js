import React, {Component} from 'react'

import {
    Text,
    View,
    TouchableWithoutFeedback,
}  from 'react-native'

import color from "../config/color";
import font from "../config/font";
import general from "./general";


class FooterStyles extends Component{
    render(){
        
    return(
        
      
       <View style={general.bottom}/>
 
      //  <View style={general.HomePageButton}>
      //    <TouchableWithoutFeedback //onPress={this.getAllMysql}
      //      onPress={() => {
      //        this.props.navigation.navigate("HomePage", {
      //          userName: this.props.route.params.userName,
      //        });
      //      }}
      //    >
      //      <Image
      //        style={general.buttuonicon}
      //        source={require("../assets/home.png")}
      //      ></Image>
      //    </TouchableWithoutFeedback>
      //  </View>

      //  <View style={general.PreferenceButton}>
      //    <TouchableWithoutFeedback
      //      onPress={() => {
      //        this.props.navigation.navigate("Preference", {
      //          userName: this.props.route.params.userName,
      //        });
      //      }}
      //    >
      //      <Image
      //        style={general.buttuonicon}
      //        source={require("../assets/child.png")}
      //      ></Image>
      //    </TouchableWithoutFeedback>
      //  </View>

      //  <View style={general.JourneyButton}>
      //    <TouchableWithoutFeedback
      //      onPress={() => {
      //        this.props.navigation.navigate("split_journey", {
      //          userName: this.props.route.params.userName,
      //        });
      //      }}
      //    >
      //      <Image
      //        style={general.buttuonicon}
      //        source={require("../assets/car-side.png")}
      //      ></Image>
      //    </TouchableWithoutFeedback>
      //  </View>

      //  <View style={general.SettingButton}>
      //    <TouchableWithoutFeedback
      //      onPress={() => {
      //        this.props.navigation.navigate("Setting", {
      //          userName: this.props.route.params.userName,
      //        });
      //      }}
      //    >
      //      <Image
      //        style={general.buttuonicon}
      //        source={require("../assets/cogs.png")}
      //      ></Image>
      //    </TouchableWithoutFeedback>
      //  </View>

        
        )
    
    }

}       
       

export default FooterStyles