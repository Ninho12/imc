function calcular(){
    
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    altura = altura / 100;

    var imc;
    imc = peso / (altura * altura);
    var texto = "";
   

    if(imc > 10){
        texto = "Você está muito macro!"
    }
    if(imc > 15){
        texto = "Você está macro!"
    }
    if(imc > 18){
        texto = "Você está normal!"
    }
    if(imc > 25){
        texto = "Você está gordo!"
    }
    if(imc > 30){
        texto = "Você está muito gordo!"
    }

    var mensagem = document.getElementById("mensagem");

    mensagem.textContent = "O seu imc: "+ imc.toFixed(2) +". "+ texto;


}