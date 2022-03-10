// let ecran = document.getElementById('ecran');
// let buttons = Array.from( document.getElementsByClassName('button'));
// console.log(buttons);
// function calculer() 
// { let a = document.getElementById("output").value 
//     // let b = eval(a) 
//     document.getElementById("output").value = b
//     } 
let ecran = document.getElementById("output") 
ecran.value = 0;
function afficher(val) 
{ 
    ecran.value += val
    // ecran.value=parseFloat(ecran.value)
    // document.getElementById("output").value+=val
}

let luka = document.getElementById('efacer')
luka.addEventListener('click', function(){
ecran.value=0;
})



// parseFloat(ecran.value)

    // function effacer() 
    // { 
    //     document.getElementById("output").value = "" 
    // } 