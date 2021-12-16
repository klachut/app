import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useEffect } from 'react';



const question = [{
          "question": "Nietoperz to:",
          "answers": [
            {
              "content":  "Ssak",
              "isCorrect": true
            },
            {
              "content":  "Ptak",
              "isCorrect": false
            },
            {
              "content":  "Gad",
              "isCorrect": false
            },
            {
              "content":  "Płaz",
              "isCorrect": false
          },
        ]
  },
  {
          "question": "Największa roślina na świecie to: ",
          "answers": [
            {
              "content":  "Eukaliptus królewski",
              "isCorrect": true
            },
            {
              "content":  "Puchowiec pięciopręcikowy",
              "isCorrect": false
            },
            {
              "content":  "Lodoicja seszelska",
              "isCorrect": false
            },
            {
              "content":  "Barsz Sosnowskiego",
              "isCorrect": false
          },
        ]
},

        {
           "question": "Zasady tworzące DNA to",
          "answers": [
            {
              "content":  "Adenina, cytozyna, guanina, tymina",
              "isCorrect": true
            },
            {
              "content":  "Tryptofan, guaranina",
              "isCorrect": false
            },
            {
              "content":  "DNA tworzą aminokwasy",
              "isCorrect": false
            },
            {
              "content":  "Tymina, guanina",
              "isCorrect": false
          },
          ]
        },

]



function TestScreen({ navigation, route }) {


    const [test, setData] = React.useState([])
    const [isLoading, setLoading] = React.useState(true);
   const [questionNumber, setQuestionNumber] = React.useState(0)
   let points = React.useRef(0)
    const getQuiz = async () => {
        try {
            const response = await fetch('https://tgryl.pl/quiz/test/' + route.params.itemId);
            const json = await response.json();
            setData(json.tasks);
            console.log(route.params.itemId)
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

function handleOnPress(answerNumber){
    if(test[questionNumber].answers[answerNumber].isCorrect===true){
        points.current++
    }
    if(questionNumber+1===test.length){
        setQuestionNumber(0)
        navigation.navigate('Score',{points:points.current})
        points.current=0
        return
    }
    setQuestionNumber(questionNumber+1);
}

  return (
        test.length > 0 ? (
               <View style={{ flex: 1, backgroundColor: 'ivory' }}>
                   <View  style={styles.quest}>
                       <Text style={styles.text}>{test[questionNumber].question}</Text>
                   </View>

                   <TouchableHighlight style={styles.button} onPress={() => handleOnPress(0)}>
                       <Text style={styles.text_answer}>{test[questionNumber].answers[0].content}</Text>
                   </TouchableHighlight>

                   <TouchableHighlight style={styles.button} onPress={() => handleOnPress(1)}>
                       <Text style={styles.text_answer}>{test[questionNumber].answers[1].content}</Text>
                   </TouchableHighlight>

                   <TouchableHighlight style={styles.button} onPress={() => handleOnPress(2)}>
                       <Text style={styles.text_answer}>{test[questionNumber].answers[2].content}</Text>
                   </TouchableHighlight>

                   <TouchableHighlight style={styles.button} onPress={() => handleOnPress(3)}>
                       <Text style={styles.text_answer}>{test[questionNumber].answers[3].content}</Text>
                   </TouchableHighlight>
               </View>
           ) : <Text>Loading...</Text>

  );
}

const styles = StyleSheet.create({
  quest: {
      height: 200,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "Merriweather-Black",
      backgroundColor: 'ivory'
  },
  text: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
  },
  text_answer: {
      fontSize: 20,
      fontFamily: "NotoSans",
      letterSpacing: 0.25,
      color: 'white',
  },
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      width:'98%',
      margin: 5,
      borderRadius: 4,
      backgroundColor: '#69d5ff',

  },
});


export default TestScreen
