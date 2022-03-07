let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()

request.onload = function(){
    console.log("Name of the countries with a Population of less than 2 Lakhs")
    if (request.status==200){
       let a=JSON.parse(request.responseText)
       let SNo=0;
             a.filter((e)=> e.population<200000)
              .map((e)=>{
                SNo++;
                console.log(SNo + ". NAME :  " + e.name.official)
                console.log("    POPULATION :  " + e.population);
              })
    }
    else{
        console.log("Onload Error: Oops! Your script processing out of FrameWork!");
}
}
request.onerror=function(){
console.log("Onerror Error: Oops! There wass an error while loading Content");
}