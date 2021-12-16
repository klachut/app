import * as React from 'react';
import { Button, View,  StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerNavigatorItems, labelStyle} from '@react-navigation/drawer';

const CustomDrawer = props => {

  return(
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
        <ImageBackground style={styles.imageBack}>
            <Image source={require('./quiz.jpg')} style={styles.imageParams}/>
        </ImageBackground>

        <View style = {styles.customDrawer}>
            <DrawerItemList {...props} labelStyle={{fontSize: 30}}/>
        </View>

    </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    imageBack: {
      backgroundColor: '#69d5ff',
      padding: 20,
      borderRadius: 6,
      overflow: 'hidden',
    },
    customDrawer: {
      flex: 1,
      backgroundColor:'#fff',
      paddingTop:10,

    },
    imageParams:{
      height: 250,
      width: 250,
      borderRadius: 40,
      alignSelf:'center'
    }

})



export default CustomDrawer
