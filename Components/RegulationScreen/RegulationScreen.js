import * as React from 'react';
import { View,  StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';


function RegulationScreen({ navigation }) {


  async function checkRegulations() {
      const regulation = await AsyncStorage.getItem('regulationAccept');
      if(JSON.parse(regulation)) {
        navigation.navigate('SelectTest');
      }
   }

  React.useEffect(() => {
    checkRegulations();
  }, []);

  const saveData = async () => {
    await AsyncStorage.setItem('regulationAccept', JSON.stringify(true));
    navigation.navigate('SelectTest');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={saveData}>
        <Text style={styles.textStyle}>Accept Regulation</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#69d5ff'

  },

  textStyle: {
    color: 'black',
    fontSize:30,
    alignSelf:'center',
    fontWeight: 'bold'
  }

})

export default RegulationScreen;
