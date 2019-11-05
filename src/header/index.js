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
import Icon from 'react-native-vector-icons/FontAwesome';
import { showSideBar,hideSideBar } from '../actions';

class Header extends Component{
    render(){
        return(
            <View style={[styles.Header,{flexDirection:"row"}]}>
                <TouchableOpacity style={{flex:1,backgroundColor:'white',borderRadius:4,alignItems:'center',justifyContent:'center'}} >
                    <Icon name="bars" size={48} color="black" />
                </TouchableOpacity>
                <View style={{flex:7}}>

                </View>
            </View>
        )
    }
}
class Sidebar extends Component{
    render(){
        return(
            <View style={{flex:4}}>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    Header:{
        backgroundColor:"lightgray",
        height:64,
        padding:8


    }
})

export {Header,Sidebar}