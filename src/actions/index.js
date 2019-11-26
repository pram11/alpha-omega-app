export const SHOWSIDEBAR = "SHOWSIDEBAR";
export const HIDESIDEBAR = "HIDESIDEBAR";
export const SHOWALERTWINDOW = "SHOWALERTWINDOW";
export const HIDEALERTWINDOW = "HIDEALERTWINDOW";
export const GOMAIN = "GOMAIN";
export const GOSETTING = "GOSETTING";
export const GOFIREALERT = "GOFIREALERT";
export const REGISTERTOKEN = "REGISTERTOKEN";
export const NETSETTING = "NETSETTING";

export const showSideBar=()=>{
    console.log('show sidebar')
    return{
        type:SHOWSIDEBAR
    }
}
export const hideSideBar=()=>{
    console.log("hide sidebar")
    return{
        type:HIDESIDEBAR
    }
}
export const ShowAlertWindow=(message)=>{
    return{
    type:SHOWALERTWINDOW,
    message:message
    }
}
export const hideAlertWindow=()=>{
    return{
    type:HIDEALERTWINDOW
    }
}
export const GoMain=()=>{
    return{
    type:GOMAIN
    }
}
export const GoSetting=()=>{
    return{
        type:GOSETTING
    }
}
export const GoFireAlert=()=>{
    console.log("firealert action")
    return{
        type:GOFIREALERT
    }
}
export const RegisterToken=(token,os)=>{
    console.log("registertoken:",token);
    return{
        type:REGISTERTOKEN,
        token:token,
        os:os
    }
}

export const NetSetting=(url,port)=>{
    console.log("NetSetting:",url+":"+port)
    return{
        type:NETSETTING,
        url:url,
        port:port
    }
}