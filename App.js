import React, { Component, useState } from "react";
import { Button, View,  StyleSheet, TouchableOpacity, Text, } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, navigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

import SelectTest from "./Components/Quiz/SelectTest";
import ResultScreen from "./Components/Quiz/ResultScreen";
import TestScreen from "./Components/Quiz/TestScreen";
import RegulationScreen from "./Components/RegulationScreen/RegulationScreen";
import ScoreScreen from "./Components/Quiz/ScoreScreen";
import CustomDrawer from "./Components/Drawer/CustomDrawer";

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


class App extends Component {
  componentDidMount(){
   SplashScreen.hide();
}
  render () {
  return(

    <NavigationContainer>

      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName={'Tests'} screenOptions={
        {
          drawerActiveBackgroundColor: '#faf0e6',
        }
      }>
        <Stack.Screen name="RegulationScreen" component={RegulationScreen} options={{ gestureEnabled: false, headerShown: false,   drawerItemStyle: { height: 0 } }}/>
        <Drawer.Screen name="Score" component={ScoreScreen} options={{ gestureEnabled: false, headerShown: false,   drawerItemStyle: { height: 0, fontFamily: 'NotoSans-Italic' } }}/>
        <Drawer.Screen name="Test" component={TestScreen} options={{ gestureEnabled: false, headerShown: false,   drawerItemStyle: { height: 0 } }} />
        <Drawer.Screen name="Result" component={ResultScreen} options={{headerShown: false}} />
        <Drawer.Screen name="Tests" component={SelectTest} options={{headerShown: false, fontSize: 40 }} />
      </Drawer.Navigator>

    </NavigationContainer>


);
  };


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf0e6',

  },
});

export default App;
