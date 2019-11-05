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
import Icon from 'react-native-vector-icons/FontAwesome5';

class AirStatus extends Component{
    render(){
        return(
            <View>
                <View style={{flexDirection:"row",backgroundColor:"orange",borderRadius:8,margin:8,marginBottom:4 }}>
                    <View style={{flex:1,padding:16}}>
                        <Icon name = "meh" size={120} ></Icon>
                    </View>
                    <View style={{flex:2,paddingTop:16}}>
                        <Text style={{fontSize:22}}>실내 공기 상태</Text>
                        <Text style={{fontSize:36}}>나쁨</Text>
                        <Text style={{fontSize:20}}>환기를 하시겠습니까?</Text>
                    </View>

                </View>
                <View style={{flexDirection:"row",borderRadius:8,margin:8,marginTop:4}}>
                    <View style={{flex:1}}>                
                        <TouchableOpacity style={{backgroundColor:"skyblue",padding:8,borderRadius:8,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:24}}>실행</Text></TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                    <TouchableOpacity style={{backgroundColor:"gray",padding:8,borderRadius:8,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:24}}>취소</Text></TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

export {AirStatus}