import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fire from './Firebase';


export default class App extends Component {

  componentDidMount(){
    console.log("Hello world");
     Fire.firestore().collection("DATA").set({
      FName: "USMAN"
    })
    .then(function(docRef) {
      console.log("UPLOAD SUCCESSFULLY: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
   });

  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Thos is the Firest Repo of the Project Testing!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
