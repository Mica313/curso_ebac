const form = document.getElementById('formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    alerta();
    limpaForm();
});

function alerta(){
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');

    if(numero1.value < numero2.value){
        alert("numeros aceitos")
    }else{
        alert("o segundo numero não é maior que o primeiro")
    }
};
function limpaForm(){
    numero1.value = ' ';
    numero2.value = ' ';
};