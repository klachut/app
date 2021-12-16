import * as React from 'react';
import { StatusBar, View,  StyleSheet, Text, TouchableOpacity } from 'react-native';






function ScoreScreen({ navigation, route }) {

  function goHome(){
    navigation.navigate('Tests')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textView}>Gratulacje! </Text>
      <Text style={styles.textView}>Ukoczyłeś test!</Text>
      <Text style={styles.textView}>Zdobyłeś {route.params.points} punktów</Text>
        <TouchableOpacity onPress={goHome}>
          <View style={styles.button}>
            <Text style={styles.buttonText} >Press to go home</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1, backgroundColor: 'ivory', justifyContent: 'center',
  },
  textView: {
    color: '#69d5ff',
    fontSize:30,
    alignItems:'center',
    alignSelf:'center',
    fontFamily: "NotoSans-Bold",
},
  button: {
    backgroundColor: 'ivory',
    padding: 20,
    flexDirection: 'column',
    height: 150,
    width: 400,
    justifyContent:'flex-end',
},
  buttonText: {
    fontFamily: "NotoSans-Italic",
    color: 'black',
    fontSize:15,
    alignSelf:'center',
},

});


export default ScoreScreen
