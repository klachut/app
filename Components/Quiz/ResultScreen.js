import * as React from 'react';
import { FlatList, View,  StyleSheet, Text } from 'react-native';
import {useEffect} from "react";


const results = [
  {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  "title": "Marek",
  "score": 15,
  "total": 20,
  "type": "historia",
  "date": "2020-09-22",
},
{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
"title": "Kasia",
"score": 20,
"total": 20,
"type": "informatyka",
"date": "2020-12-03",
},  {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
  "title": "Adam",
  "score": 1,
  "total": 20,
  "type": "geografia",
  "date": "2021-12-12",
},
];



const Item = ({nick, type, score }) => (

  <View style={styles.item}>
    <Text style={styles.bar} >{nick}</Text>
    <Text style={styles.bar} >{score}</Text>
    <Text style={styles.bar} >{type}</Text>
  </View>
);



function ResultScreen({ navigation }) {

    const [tags, setTags] = React.useState()

  const renderItem = ({ item }) => (

     <Item nick={item.nick} score={item.score} type={item.type} />
   );

    const getQuiz = async () => {
        try {
            const response = await fetch('https://tgryl.pl/quiz/results');
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
    <View style={styles.container}>
    <View style={styles.mainView}>
         <Text style={styles.barTitle} >Nick</Text>
         <Text style={styles.barTitle} >Score</Text>
         <Text style={styles.barTitle} >Category</Text>
    </View>
        <FlatList
     data={tags}
     renderItem={renderItem}
     keyExtractor={item => item.id}
   />
   </View>

  );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
       flexDirection:'column',
       alignItems: 'center',
       justifyContent: 'center',
    },
      item: {
        backgroundColor: 'ivory',
        padding: 20,
        width: 400,
        height: 60,
        flex:3,
        flexDirection: 'row'

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
      barTitle: {
          flex: 1,
          backgroundColor: 'ivory',
          flexDirection: 'column',
          justifyContent: 'center',
          height: 40,
          fontSize: 20,
          fontFamily: "Merriweather-Black",
          color: '#69d5ff',
    },
      mainView:{
        backgroundColor: 'ivory',
         padding: 20,
         flexDirection: 'row',
         height: 50,
         width: 400,
    },
});


export default ResultScreen
