function calcular(){
    
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    var imc;
    imc = peso / altura * altura;
    var texto = "";

    if(imc > 18){
        texto = "Você está macro!"
    }
    else if(imc > 22){
        texto = "Você está normal!"
    }
    else if(imc > 25){
        texto = "Você está gordo!"
    }
    else if(imc > 28){
        texto = "Você está muito gordo!"
    }

    var mensagem = document.getElementById("mensagem");

    mensagem.textContent = "O seu imc: "+ +". "+ texto;


}