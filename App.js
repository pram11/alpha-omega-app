/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Header, Sidebar} from './src/header'
import {AirStatus} from './src/main'
import connect from 'react-redux'

export default class Base extends Component{
    constructor(props){
      super(props)
      this.state={
        display:{
          showSideBar:false
        }
      }
    }
    render(){
      return(       
        <View>
          <Header></Header>
          <View style={{flexDirection:'row'}}>
            {this.state.display.showSideBar === true?<Sidebar/>:null}
            <ScrollView style={{flexDirection:'column',flex:1}}>
              <AirStatus/>
            
            </ScrollView>
          </View>
        </View>


        )      
    }

}

const styles = StyleSheet.create({
 
});

