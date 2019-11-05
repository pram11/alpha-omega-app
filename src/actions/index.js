export const SHOWSIDEBAR = "SHOWSIDEBAR";
export const HIDESIDEBAR = "HIDESIDEBAR";
export const SHOWALERTWINDOW = "SHOWALERTWINDOW";
export const HIDEALERTWINDOW = "HIDEALERTWINDOW";
export const GOMAIN = "GOMAIN";
export const GOFIREALERT = "GOFIREALERT";
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
export const GoFireAlert=()=>{
    console.log("firealert action")
    return{
        type:GOFIREALERT
    }
}