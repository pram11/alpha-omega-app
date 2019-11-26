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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { TextInputComp } from '../components/inputarea';

import { Button } from '../components/button';
import {GoBackHeader} from '../header';
import { NetSetting } from '../actions';
const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

const axios = require("axios")

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
                <Text style={{fontSize:30,textAlign:'center'}}>화재 예방 요령 안내</Text>
                <Text style={{fontSize:20,margin:8}}>자택에 불필요한 가연물(헌옷, 신문폐지, 폐박스 등)을 싸놓지 맙시다.</Text>
                <Text style={{fontSize:20,margin:8}}>인화성 액체(알코올, 휘발유 등)나 인화성 기체(부탄가스)를 함부로 놓지 맙시다.</Text>
                <Text style={{fontSize:20,margin:8}}>카펫의 밑면이나 장롱 뒤편 등의 보이지 않는 곳에 전선을 늘어뜨리지 맙시다.</Text>
                <Text style={{fontSize:20,margin:8}}>
                어린이의 손이 닿거나 쉽게 사용 가능한 곳에 라이터나 성냥갑을 두지 맙시다.</Text>
                <Text style={{fontSize:20,margin:8}}>
                가스불 위에 요리를 올려놓고, 내버려둔 채 주방을 장시간 비우지 맙시다.</Text>
                <Text style={{fontSize:20,margin:8}}>
                집에서는 담배를 피우지 맙시다. 담배를 피운다면 담배를 피우다 깜박 졸 수 있는 침대나 이불 주위에서는 피우지 말고, 될 수 있으면 큰 재떨이를 사용합시다.</Text>
                <Text style={{fontSize:26,margin:8}}>
                고층아파트에서는</Text>
                <Text style={{fontSize:20,margin:8}}>

                    이웃으로 통하는 발코니 비상문 또는 비상 칸막이벽이 있는지 확인하고, 통행을 막지 않도록 가구를 놓지 맙시다.
                    피난계단이 연기에 오염되는 경우를 대비하여 연기를 피해 공기를 마실 수 있는 발코니 창문을 염두에 둡시다.
                    발코니를 확장하여 창문의 개방이 어려운 주상복합 고층아파트에서는 현관문을 통하여 연기의 확산이 예상되므로 연기 침투를 막을 수 있는 안전구역(밀폐 가능한 작은방 등)이 필요합니다.

                </Text>

            </View>
        )
    }
}
class FireStatus extends Component{
    constructor(props){
        super(props)
        this.state={
            gas_status:'pending',
            elec_status:'pending'
        }
    }
    
    componentDidMount(){
        console.log(this.state.gas_status)

    }
    render(){
        return(
            <View style={{padding:8,margin:8,marginBottom:0,borderRadius:8,backgroundColor:'white',elevation:3}}>
                <FireStatusComponent status='success' Text="119 신고"/>
                <FireStatusComponent status={this.state.gas_status} Text="가스 차단"/>                
                <FireStatusComponent status={this.state.elec_status} Text="누전차단기 차단"/>
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
                <Text style={{width:"100%",textAlign:'center',fontSize:30}}>비상 대피로</Text>
                <Image style={{width:"100%",height:500}} source={{uri:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcPAIDF%2FbtqzZKh0o61%2FTRieFAcT4M5hmSJwS1kU00%2Fimg.jpg"}} />
            </View>
        )
    }
}


let AppSettingMSTP = (state)=>{
    return{
        device_id:state.pushnotification.token
    }
}
let AppSettingMDTP=(dispatch)=>{
    return{
        saveURI:(uri,port)=>dispatch(NetSetting(uri,port))
    }
}
class AppSetting extends Component{
    constructor(props){
        super(props)
        this.state={
            uri:null,
            port:null
        }
    }
    getURI(textinput){
        this.setState({uri:textinput});
    }
    getPort(port){
        console.log("port:",port)
    }
    saveURI(){
        this.props.saveURI(this.state.uri,this.state.port);
    }
    render(){
        return(
            <View>
                <GoBackHeader></GoBackHeader>
                <Text>push 정보:</Text>
                <Text>{this.props.device_id}</Text>
                <Button Text="Token 데이터 서버로 전송"></Button>
                <View style={{margin:8,padding:8,borderRadius:8,elevation:2,backgroundColor:'white'}}>
                    <TextInputComp Title="URI" onChangeText={(data)=>this.getURI(data)}></TextInputComp>
                    <TextInputComp Title="PORT" onChangeText={(data)=>this.getPort(data)}></TextInputComp>
                    <Button Text="저장"></Button>
                </View>
            </View>
        )
    }
}
AppSetting = connect(AppSettingMSTP,AppSettingMDTP)(AppSetting)

export {AirStatus,InfoBoard,FireStatus,EscapeMap,AppSetting}