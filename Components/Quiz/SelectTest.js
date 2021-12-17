import * as React from 'react';
import { StatusBar,FlatList, Button, View,  StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {useEffect, useState} from 'react';



function SelectTest({ navigation }) {

    const [tags, setTags] = React.useState()

    const Item = ({title, score, type}) => (
        <TouchableOpacity   onPress={() => {
            navigation.navigate('Test', {
                itemId: type,
            });}}>

            <View style={{flex:1,flexDirection:"column"}}>
                <Text style={styles.barTitle} >{title}</Text>
                <Text style={styles.barCategory} >{score}</Text>
                <Text style={styles.barPoints} >{type}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item title={item.name} score={item.description} type={item.id} />
    );


    const getQuiz = async () => {
        try {
            const response = await fetch('https://tgryl.pl/quiz/tests');
            const json = await response.json();
            setTags(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        //setTest(question)
        getQuiz()
    }, [])

    return (
        <View style={{ flex: 2, backgroundColor:'ivory'}}>

                <View style={styles.container}>
                    <FlatList
                        data={tags}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}/>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flex:1,flexDirection:"column"

    },
    bar: {
        flex: 1,
        backgroundColor: 'ivory',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 60,
        fontSize: 20,
        fontFamily: "NotoSans-Italic",
        color: 'black',
    },
    title: {
        fontSize: 30,
        fontFamily: "NotoSans-Italic",
    },
    mainView:{
        backgroundColor: 'ivory',
        padding: 20,
        flexDirection: 'row',
        height: 50,
        width: 400,
    },
    container: {
        backgroundColor: 'ivory',
        padding: 20,
        flexDirection: 'column',
        width: '100%',
        alignSelf:'center'
    },
    barTitle: {
        flex: 1,
        backgroundColor: 'ivory',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 30,
        fontFamily: "Merriweather-Black",
        color: '#69d5ff',
    },
    barCategory: {
        flex: 1,
        backgroundColor: 'ivory',
        flexDirection: 'column',
        justifyContent: 'center',

        fontSize: 15,
        fontFamily: "Merriweather-Italic",
        color: 'black',
    },
    barPoints: {
        flex: 1,
        backgroundColor: 'ivory',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 15,
        fontFamily: "Merriweather-Italic",
        color: 'black',
    },
});


export default SelectTest

