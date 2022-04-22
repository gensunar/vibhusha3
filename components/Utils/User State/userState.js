export const userState = () => {
    if (typeof window !== "undefined"){
        const userInfo = localStorage.getItem("user") !== "undefined" ?
    JSON.parse(localStorage.getItem("user")) : localStorage.clear()
    
    return userInfo;
    }
    // const userInfo = localStorage.getItem("vibhusha.emailId") !== "undefined" ?
    // JSON.parse(localStorage.getItem("vibhusha.emailId")) : localStorage.clear()
}