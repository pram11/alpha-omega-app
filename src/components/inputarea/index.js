import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  Image,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

class TextInputComp extends Component{
    onChangeText(textinput){
        console.log(textinput)
        this.props.onChangeText(textinput)
    }
    render(){
        return(
            <View style={{margin:8}}>
                <Text style={{fontSize:22}}>{this.props.Title}</Text>
                <View style={{borderStyle:"solid",borderRadius:8,borderWidth:1}}>
                    <TextInput onChangeText={(textinput)=>this.onChangeText(textinput)}></TextInput>
                </View>
            </View>
        )
    }
}

export {TextInputComp}