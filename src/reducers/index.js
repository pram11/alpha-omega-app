import { SHOWSIDEBAR, HIDESIDEBAR,GOMAIN,GOFIREALERT,SHOWALERTWINDOW,HIDEALERTWINDOW} from "../actions"
import {combineReducers} from 'redux'

const displayInitState = {
    display:'main',
    showSideBar:false,
}
const alertInitState = {
    show:false,
    message:null,
}
const dataInitState = {
    token:null
}
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
                display:'main'
            })
        case GOFIREALERT:
            return Object.assign({},state,{
                display:'fire'
            })  
        default:
            return state;
    }
}
const data = (state=dataInitState,action)=>{
    switch(action.type){
        case REGISTERTOKEN:
            return Object.assign({},state,{
                token:action.token,
                os:action.os
            })
    }
}
const AppReducer=combineReducers({
    display:display,
    alertWindow:alertwindow
})
export default AppReducer