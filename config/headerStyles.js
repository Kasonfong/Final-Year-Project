import React, {Component} from 'react'

import {
    Text,
    View,
}  from 'react-native'

import general from "./general";


class HeaderStyles extends Component{
    render(){

        return(

        <View style={general.header}>
          <Text style={general.headertext}> {this.props.title} </Text>
        </View>



        )
    }

}

export default HeaderStyles