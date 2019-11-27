import { SHOWSIDEBAR, HIDESIDEBAR,GOMAIN,GOFIREALERT,SHOWALERTWINDOW,HIDEALERTWINDOW, GOSETTING,REGISTERTOKEN, NETSETTING} from "../actions"
import {combineReducers} from 'redux'

const displayInitState = {
    display:'main',
    showSideBar:false,
}
const alertInitState = {
    show:false,
    message:null,
}
const pushInitState = {
    token:null,
    os:null
}
/*const NetConfigInitState = {
    url:null,
    port:80
}*/
const alertwindow = (state=alertInitState,action)=>{
    switch(action.type){
        case SHOWALERTWINDOW:
            return Object.assign({},state,{
                show:true,
                message:action.message
            })
        case HIDEALERTWINDOW:
            return Object.assign({},state,{
                show:false
            })
        default:
            return state
    }

}

const display = (state = displayInitState,action)=>{
    console.log('testing')
    switch(action.type){
        case SHOWSIDEBAR:
            console.log("show")
            return Object.assign({},state,{
                showSideBar:true
            });
        case HIDESIDEBAR:
            console.log('hide')
            return Object.assign({},state,{
                showSideBar:false
            })
        case GOMAIN:
            return Object.assign({},state,{
                display:'main',
                showSideBar:false
            })
        case GOFIREALERT:
            return Object.assign({},state,{
                display:'fire',
                showSideBar:false
            })  
        case GOSETTING:
            return Object.assign({},state,{
                display:'setting',
                showSideBar:false
            })
        default:
            return state;
    }
}
const pushnotification = (state=pushInitState,action)=>{
    switch(action.type){
        case REGISTERTOKEN:
            return Object.assign({},state,{
                token:action.token,
                os:action.os
            })
        default:
            return state;
    }
}

/*not in use
const NetConfig = (state=NetConfigInitState,action)=>{
    switch(action.type){
        case NETSETTING:
            return Object.assign({},state,{
                url:action.url,
                port:action.port
            })
        default:
            return state
    }
}*/
const AppReducer=combineReducers({
    display:display,
    alertWindow:alertwindow,
    pushnotification:pushnotification,
//   netConfig:NetConfig
})
export default AppReducer