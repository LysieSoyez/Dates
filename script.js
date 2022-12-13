//date acctuelle
const date= new Date();
console.log(date)

//dates des pays demandé
console.log(date.toLocaleString('fr-BE', { timeZone: 'America/Anchorage' }));

console.log(date.toLocaleString('fr-BE', { timeZone: 'Atlantic/Reykjavik' }));

console.log(date.toLocaleString('fr-BE', { timeZone: 'Europe/Moscow' }));

//calcul de mon age en jour
const birth= new Date('2004-3-6');
const secPassed=date.getTime()-birth.getTime();
   //convertir le résultat (en millisecondes) en jours
const dayPassed= (secPassed / (1000 * 60 * 60 * 24)).toFixed(0);
console.log(dayPassed);

//calcul du nommbre de jours depuis 1970
function RandomDate(test){
    let now=new Date()
    let time=now.getTime()-test.getTime();
       //convertir le résultat (en millisecondes) en jours
    let dayPast= (time / (1000 * 60 * 60 * 25)).toFixed(0);
    return dayPast;
}
let yesterday=new Date('2022-12-12') 
console.log(RandomDate(yesterday));

//date dans 80000 heures
let hours= 1000 * 60 * 60 * 80000;
let futur= new Date(date.getTime() + hours);
console.log(futur.toString());

//crée un fonction
function jsp(sayHours){
    let hours= 1000 * 60 * 60 * sayHours;
    let futur= new Date(date.getTime() + hours);
    return futur;
}
console.log(jsp(100))

let PlusInspi=document.getElementById('platipus');
PlusInspi.addEventListener('keyup',()=>{
    let input=document.getElementById("platipus").value;
    console.log(jsp(input));
})