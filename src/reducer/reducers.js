import { SHOWSIDEBAR, HIDESIDEBAR } from "../actions"
import {combineReducer} from 'redux'

const displayInitState = {
    showSideBar:false,
}

const display = (state = displayInitState,action)=>{
    switch(action){
        case SHOWSIDEBAR:
            return Object.assign({},state,{
                showSideBar:true
            });
        case HIDESIDEBAR:
            return Object.assign({},state,{
                showSideBar:false
            })
    }
}
export default AppReducer=combineReducer({
    display:display,
})