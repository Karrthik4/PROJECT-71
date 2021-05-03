import React from 'react';
import {Text, View, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { clockRunning } from 'react-native-reanimated';
import db from '../config';
import frebase from 'firebase';

export default class WriteStoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            author:'',
            story:''
        }
    }

    sumbitStory=()=>{
        db.collection("stories").add({
            title:this.state.title,
            author:this.state.author,
            story:this.state.story
        })
        this.setState({
            title:'',
            author:'',
            story:''
        })
    }

    render(){
        return(

            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FBE5C8'}}>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Story Hub</Text>
                </View>

                <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Story Title"
                    onChangeText={text => {
                        this.setState({ title: text });
                    }}
                    value={this.state.title}
                />
                </View>
                
                <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputBox}
                    placeholder="Author"
                    onChangeText={text => {
                        this.setState({ author: text });
                    }}
                    value={this.state.author}
                    />
                </View>

                <View style={styles.inputView}>
                <TextInput 
                    style={styles.storyText}
                    placeholder="Write Your Story"
                    multiline='true'
                    onChangeText={text => {
                        this.setState({ story: text });
                    }}
                    value={this.state.story}
                    />
                </View>

                <TouchableOpacity 
                style={styles.submitButton}
                onPress={this.sumbitStory}
                >

                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textContainer:{
      width:1000,
      backgroundColor: '#B6E5D8',
      marginBottom:100,
    },
    text:{
      color: 'orange',
      padding: 30,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
      },
      inputView:{
        flexDirection: 'row',
        margin: 20,
      },
      inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
      },
      submitButton:{
          backgroundColor:'#8FDDE7',
          width:150,
          height:50
      },
      submitButtonText:{
          padding:10,
          textAlign:'center',
          fontSize:20,
          fontWeight:'bold',
          color:'white'
      },
      storyText:{
        width: 200,
        height: 100,
        borderWidth: 1.5,
        fontSize: 20
      }
  });