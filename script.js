if("serviceWorker"in navigator){
    navigator.serviceWorker.register("sworker.js").then((res)=>{
     
    }).catch((err)=>{
        console.log(err.message)
    })
}else{
 console.log("service worker not working...")
}