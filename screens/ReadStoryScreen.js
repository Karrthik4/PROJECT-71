import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(

            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Story Hub</Text>
                </View>      

                <Text style={styles.text}>Read A Story</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textContainer:{
      width:1000,
      backgroundColor: 'pink',
      marginBottom:200,
    },
    text:{
      color: 'black',
      padding: 30,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  });