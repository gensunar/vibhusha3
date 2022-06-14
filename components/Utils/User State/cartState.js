export const cartState = () => {
    try{
        if (typeof window !== "undefined"){
            const cartInfo = localStorage.getItem("cart") !== "undefined" ?
        JSON.parse(localStorage.getItem("cart")) : localStorage.clear()
        return cartInfo;
        }
    }
    catch(err){
        localStorage.clear()
    }
}