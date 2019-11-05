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
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

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
class InfoBoard extends Component{
    render(){
        return(
            <View style={{margin:8,padding:8,borderRadius:8,elevation:2,backgroundColor:'white'}}>
                <Text style={{fontSize:30}}>대피 요령 안내</Text>
                <Text style={{fontSize:20}}>----추후 내용 기재----</Text>

            </View>
        )
    }
}
class FireStatus extends Component{
    render(){
        return(
            <View style={{padding:8,margin:8,marginBottom:0,borderRadius:8,backgroundColor:'white',elevation:3}}>
                <FireStatusComponent status='success' Text="성공-샘플 문자열"/>
                <FireStatusComponent status='pending' Text="진행중-샘플문자열"/>
                <FireStatusComponent status='failure' Text="실패-샘플문자열"/>

            </View>
        )
    }
}
class FireStatusComponent extends Component{
    render(){
        switch(this.props.status){
            case 'success':        
                return(
                    <View style={{flexDirection:'row',padding:8,margin:8,elevation:4,borderRadius:8,backgroundColor:'lightgreen',justifyContent:'center',alignItems:'center'}}>
                        <View style={{flex:1,alignItems:'center'}}>
                            <Icon name='check' size={30}/>
                        </View>
                        <View style={{flex:5}}>
                            <Text style={{fontSize:30}}>{this.props.Text}
                            </Text>
                        </View>
                    </View>
                )
            case 'pending':        
                return(
                    <View style={{flexDirection:'row',padding:8,margin:8,elevation:4,borderRadius:8,backgroundColor:'lightyellow',justifyContent:'center',alignItems:'center'}}>
                        <View style={{flex:1,alignItems:'center'}}>
                            <ActivityIndicator size="large" color="yellow" />
                        </View>
                        <View style={{flex:5}}>
                            <Text style={{fontSize:30}}>{this.props.Text}
                            </Text>
                        </View>
                    </View>
                )
            case 'failure':
                return(
                    <View style={{flexDirection:'row',padding:8,margin:8,elevation:4,borderRadius:8,backgroundColor:'#FFCCCC',justifyContent:'center',alignItems:'center'}}>
                        <View style={{flex:1,alignItems:'center'}}>
                            <Icon name='exclamation-circle' size={30} color="red"/>
                        </View>
                        <View style={{flex:5}}>
                            <Text style={{fontSize:30}}>{this.props.Text}
                            </Text>
                        </View>
                    </View>
                )
            default:
                return null
        }

    }
}

class EscapeMap extends Component{
    render(){
        return(
            <View style={{margin:8,marginBottom:0,padding:8,backgroundColor:'white',borderRadius:8,elevation:3}}>
                <Text>지도 표출 영역</Text>
            </View>
        )
    }
}


export {AirStatus,InfoBoard,FireStatus,EscapeMap}