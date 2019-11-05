import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);


class Button extends Component{
    render(){
        return(
            <TouchableOpacity style={[{maxHeight:46,margin:8,padding:8,borderRadius:8,alignItems:'center',justifyContent:'center',elevation:5,backgroundColor:'white'},this.props.buttonStyle]} onPress = {()=>this.props.onPress()}>
                <Text style={{fontSize:30,color:this.props.fontColor!==undefined?this.props.fontColor:'black'}}>{this.props.Text}</Text>
            </TouchableOpacity>
        )
    }
}

export{Button}