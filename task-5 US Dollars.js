// a Get all the countries from Asia continent /region using Filter function
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();


request.onload = function()
{
  console.log("Name of the countries which uses US Dollars as currency");
  if(request.status==200){
    let a = JSON.parse(request.responseText)
    a.filter((e)=> e.currencies).filter((e)=>{
        if(e.currencies.USD){
            console.log(e.name.official);
            console.log(`currencies : ${Object.keys(e.currencies)}`);
        }
    })
  }else{
      console.log("onload error : oops! your script processing out of framework!");
  }
    
   
   
}
request.onerror = function() {
    console.log("error")
}
