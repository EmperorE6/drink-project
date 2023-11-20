let margarita=document.getElementById("margarita");
let negroni=document.getElementById("negroni");
let rum=document.getElementById("rum");
let gin=document.getElementById("gin");


let kliknato=true;

let margaritaParaf=document.getElementById("margaritaParaf");
let negroniParaf=document.getElementById("negroniParaf");
let rumParaf=document.getElementById("rumParaf");
let ginParaf=document.getElementById("ginParaf");

const request = new XMLHttpRequest();
request.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
request.send();
request.addEventListener('load', function () {
const data = JSON.parse(this.responseText);

let margaritaIme=`<div class="margaritaTitle">${data.drinks[0].strDrink}</div>`
let instrukciiMarg=`<div class="margaritaInst"> <li> ${data.drinks[0].strInstructions}</li></div><`
margarita.addEventListener("click",function(){
    margaritaParaf.innerHTML= margaritaIme + instrukciiMarg ;
    
});


});

const request2 = new XMLHttpRequest();
request2.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni');
request2.send();
request2.addEventListener('load', function () {
const data2 = JSON.parse(this.responseText);

let negroniIme=`<div class="negroniTitle"> ${data2.drinks[0].strDrink}</div>`;
let instrukciiNegr=`<div class="negroniInst"><li> ${data2.drinks[0].strInstructions}</li></div>`;
negroni.addEventListener("click",function(){
    negroniParaf.innerHTML= negroniIme + instrukciiNegr ;
    
});

});

const request3 = new XMLHttpRequest();
request3.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum');
request3.send();
request3.addEventListener('load', function () {
const data3 = JSON.parse(this.responseText);

let rumIme=` <div class="rumTitle">${data3.drinks[0].strDrink}</div>`
let instrukciiRum=`<div class="rumInst"> <li>  ${data3.drinks[0].strInstructions}</li></div>`
rum.addEventListener("click",function(){
    rumParaf.innerHTML= rumIme + instrukciiRum ;
    
});

});

const request4 = new XMLHttpRequest();
request4.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin_lemon');
request4.send();
request4.addEventListener('load', function () {
const data4 = JSON.parse(this.responseText);


    let ginIme=`<div class="ginTitle"> ${data4.drinks[0].strDrink} </div> `
    let instrukciiGin=`<div class="ginInst"> <li> ${data4.drinks[0].strInstructions}</li></div>`
    gin.addEventListener("click",function(){
        if(kliknato){
            ginParaf.innerHTML= ginIme + instrukciiGin ;
            kliknato=false;
        }else{
            kliknato=true;
            ginParaf.innerHTML="";
           
        }
        
      
    });
    kliknato=false;


});

