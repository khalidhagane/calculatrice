
let ecran = document.getElementById("output");
let arr = [];
let input = 0;

function affichage(number){
    ecran.value = ecran.value + number
    input = input + number
    
    // (input + number) => fkola mara hat liya number kitzad 3la number li 9ablo okithat liya f case wahda ma array 
    // console.log(input)
}

let efacer = document.getElementById('suprimer')
efacer.addEventListener('click',function()
// function suprimer()
{
    ecran.value = "";
    input= 0;
    arr = [];
    // console.log(input)
})

let operateurs = document.querySelectorAll('.operateur')
operateurs.forEach(traite => {
    traite.addEventListener('click',function(){
        let content = traite.getAttribute('content')
        // function traiter(operateur)
        if(input !== 0 ){
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

function egale(arr){
    if(input !== 0){
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
        //console.log(arr);
    }
}
ecran.value = arr[0];

}
