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
  Dimensions
} from 'react-native';
import {Header, Sidebar, FireHeader} from './src/header'
import {AirStatus, InfoBoard, FireStatus,EscapeMap} from './src/main'
import {Provider,connect} from 'react-redux'
import {createStore} from 'redux';
import AppReducer from './src/reducers';
import { GoFireAlert } from './src/actions';
import { Button } from './src/components/button';
const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

const store = createStore(AppReducer)

var PushNotification = require("react-native-push-notification");

export default class Base extends Component{
    componentDidMount(){
      //상태 확인 통신 모듈 삽입 위치.
    }
    render(){
      return(       
          <Provider store={store}>
            <Display/>
          </Provider>


        )      
    }

}
class Display extends Component{
     
  constructor(props){
    super(props)
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log("TOKEN:", token);
      },
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log("NOTIFICATION:", notification);
        // process the notification
        store.dispatch(GoFireAlert())
      },
      // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: "655591607190",
      popInitialNotification:false,
      }
    )
    this.state={
      display:{
        show:false
      }
    }
  }
  onPressFireAlert(){
    //화재 신고 통신 위치
    console.log("firealert!")
    this.props.GoFireAlert()

  }
  onPressSetting(){
    //설정 페이지로 이동
  }
  cancelFireReport(){
    //TODO:논의 필요.
  }
  render(){
    console.log(this.props)
    switch(this.props.display){
      case 'main':
        return(
          <View>
          <Header/>
          <View style={{flexDirection:'row'}}>
            {this.props.showSideBar === true?<Sidebar onPressSetting={()=>this.onPressSetting()} onPressFireAlert={()=>{this.onPressFireAlert()}}/>:null}
            <View style={{flexDirection:'column'}}>
              <ScrollView style={{height:'100%',width:deviceWidth,backgroundColor:'lightgray'}}>
                <InfoBoard/>
              </ScrollView>
            </View>
            

          </View>
        </View>
        )
      case 'fire':
        return(
          <View>
            <FireHeader/>
            <ScrollView style={{flexDirection:'column',height:'100%',width:deviceWidth,backgroundColor:'lightgray'}}>
              <FireStatus/>
              <EscapeMap/>
              <Button Text="신고 취소" buttonStyle={{backgroundColor:'#FF8888'}} onPress={()=>{this.cancelFireReport()}}/>
            </ScrollView>

          </View>
        )
      default:
        return null
    }

  }
}
let DisplayMSTP=(state)=>{
  return{

    display:state.display.display,
    showSideBar:state.display.showSideBar
  }
}
let DisplayMDTP=(dispatch)=>{
  return{
    GoFireAlert:()=>dispatch(GoFireAlert())
  }
}
Display = connect(DisplayMSTP,DisplayMDTP)(Display)

const styles = StyleSheet.create({
 
});

