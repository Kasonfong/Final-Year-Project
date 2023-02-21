import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./HomePage";
import Setting from "./SettingPage";
import Preference from "./preference";
import Journey from "./journey";

import WelcomeScreen from "./WelcomeScreen";
import Register from "./Register";

import map_jour from "./map_jour";
import map_destin from "./map_destin";

import split_journey from "./split_journey";
import changepw from "./changepw";

import mapSubmit from "./mapSubmit";
import mapRoute from "./mapRoute";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <RootStack.Screen name="Register" component={Register} />

    <RootStack.Screen name="HomePage" component={HomePage} />
    <RootStack.Screen name="Setting" component={Setting} />
    <RootStack.Screen name="Preference" component={Preference} />
    <RootStack.Screen name="Journey" component={Journey} />

    <RootStack.Screen name="map_jour" component={map_jour} />

    <RootStack.Screen name="map_destin" component={map_destin} />

    <RootStack.Screen name="split_journey" component={split_journey} />

    <RootStack.Screen name="changepw" component={changepw} />

    <RootStack.Screen name="mapSubmit" component={mapSubmit} />

    <RootStack.Screen name="mapRoute" component={mapRoute} />
  </RootStack.Navigator>
);
export default RootStackScreen;
