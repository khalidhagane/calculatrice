
let ecran = document.getElementById("output");
let arr = [];
let input = 0;

function affichage(number){
    if(ecran.value==0){
        ecran.value=number
    }
    else{
        ecran.value += number
    }
    input += number 
    // console.log(input)
}

let efacer = document.getElementById('suprimer')
efacer.addEventListener('click',function()
// function suprimer()
{
    ecran.value = 0;
    input= 0;
    arr = [];
    // console.log(input)
})

let operateurs = document.querySelectorAll('.operateur')
operateurs.forEach(traite => 
    {
    traite.addEventListener('click',function(){
        let content = traite.getAttribute('content')
        // function traiter(operateur)
        if(input !== ""){
        //ecran.value = ecran.value + operateur; 
        ecran.value+=content;
        input= parseFloat(input);
        arr.push(input);
        arr.push(content);
        input = 0;
        // console.log(arr);
        // console.log(input);
        }
    });
});

// let point = document.getElementById('point')
// point.addEventListener('click',function(){
//     if(ecran.value !== ""){  
//     }
// }
// )

let suprimer_number = document.getElementById('sup_number')
suprimer_number.addEventListener('click',function(){
    // ecran.value = ecran.value.slice(0,-1)
    //  arr = arr.slice(0,-1)
    input= parseFloat(input);
    arr.push(input)
    ecran.value = ecran.value.slice(0,-1)
    arr.pop()
    // arr.pop() => proplime pop() kan tmssah liya number man tableau imakatmsahch liya operateur
})

function egale(arr){
    if(input !== ""){
        input= parseFloat(input);
        arr.push(input);
        // console.log(input);
        // console.log(arr);
    }
    for(let i=2 ; i<arr.length; i++){
    
    switch(arr[i-1]){
        case '+' : 
        arr[0] = arr[0] + arr[i];
        break; 
        case '-' : 
        arr[0] = arr[0] - arr[i];
        break;
        case '*' : 
        arr[0] = arr[0] * arr[i];
        break; 
        case '/' : 
        arr[0] = arr[0] / arr[i];
        break;  
        //console.log(arr);
    }
}
ecran.value = arr[0];

}
