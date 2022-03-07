let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()

request.onload = function(){
    console.log("Total population of all the countries")
    if (request.status==200){
       let a=JSON.parse(request.responseText)
       let SNo=0;
       let total =  a.reduce((t,e) => ({population: t.population + e.population}))
       console.log(total.population);
    }
    else{
        console.log("Onload Error: Oops! Your script processing out of FrameWork!");
}
}
request.onerror=function(){
console.log("Onerror Error: Oops! There wass an error while loading Content");
}