let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()

request.onload = function(){
    console.log(" All the countries name, capital and flag")
    if (request.status==200){
        let a=JSON.parse(request.responseText)
        let SNo=0;
        a.forEach((e)=>{
          SNo++;
          console.log(SNo + ". NAME :  " + e.name.official);
          console.log("   CAPITAL :  " + e.capital);
          console.log("   FLAG :  " + e.flags.png);
        })
    }
    else{
        console.log("Onload Error: Oops! Your script processing out of FrameWork!");
}
}
request.onerror=function(){
console.log("Onerror Error: Oops! There wass an error while loading Content");
}