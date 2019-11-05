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
  Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import {Button} from '../components/button'

import { showSideBar,hideSideBar } from '../actions';
const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);


class Header extends Component{
    _onPressMenu(){
        console.log('onPress')
        console.log(this.props.show)
        this.props.show===true?this.props.hideSideBar():this.props.showSideBar()

    }
    render(){
        return(
            <View style={[styles.Header,{flexDirection:"row"}]}>
                <TouchableOpacity style={{flex:1,backgroundColor:'white',borderRadius:4,alignItems:'center',justifyContent:'center'}} onPress={()=>this._onPressMenu()} >
                    <Icon name="bars" size={48} color="black" />
                </TouchableOpacity>
                <View style={{flex:7}}>

                </View>
            </View>
        )
    }
}
let HeaderMDTP=(dispatch)=>{
    return{
        showSideBar:()=>dispatch(showSideBar()),
        hideSideBar:()=>dispatch(hideSideBar())
    }
}
let HeaderMSTP=(state)=>{
    return{
        show:state.display.showSideBar
    }
}
Header = connect(HeaderMSTP,HeaderMDTP)(Header)

class FireHeader extends Component{
    render(){
        return(
            <View style={[styles.Header,{flexDirection:"row",backgroundColor:'red',alignContent:'center',justifyContent:'center'}]}>
                <Text style={{fontSize:36,alignSelf:'center'}}>화재 발생</Text>
            </View>
        )
    }
}


class Sidebar extends Component{
    constructor(props){
        super(props)
        this.state={
            showValue:new Animated.Value(0)
        }
    }
    componentDidMount()
    {   console.log("compmount")
        this.OpenSidebar();
    }
    CloseSidebar(){
        console.log("close sidebar");
        Animated.spring(this.state.showValue,{toValue:0,friction:9,tension:20})
    }
    OpenSidebar(){
        console.log("opensidebar");
        Animated.spring(this.state.showValue,{toValue:deviceWidth*0.75,friction:9,tension:20}).start()
    }
    _AnimaionShow(){
        return{
            width:this.state.showValue
        }
    }
    _onPressFireAlert(){
        this.props.onPressFireAlert()
    }
    render(){
        return(
            <Animated.View style={[{backgroundColor:"white",elevation:3},this._AnimaionShow()]}>
                <Button Text="설정" buttonStyle={{elevation:4}} onPress={()=>{}} fontColor="green"/>
                <Button Text="신고" buttonStyle={{backgroundColor:"red",elevation:4}} onPress={()=>this._onPressFireAlert()} fontColor="white"/>
            </Animated.View>
        )
    }
}
let SidebarMSTP=(state)=>{
    return{
        show:state.display.showSideBar
    }
}
Sidebar = connect(SidebarMSTP,undefined)(Sidebar)
const styles = StyleSheet.create({
    Header:{
        backgroundColor:"white",
        height:64,
        padding:8,
        elevation:5

    }
})

export {Header,Sidebar,FireHeader}