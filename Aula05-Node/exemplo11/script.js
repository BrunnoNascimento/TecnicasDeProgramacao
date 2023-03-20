function coletarDados(){
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    //console.log(peso)
    //console.log(altura)
    calcularIMC(peso, altura);
}

function calcularIMC(argPeso, argAltura){
    /*
    IMC = Peso / (altura * altura)
    */

    //console.log(argPeso)
    //console.log(argAltura)

    let imc = argPeso / (argAltura * argAltura)
    //console.log(imc)
    document.getElementById("res").innerHTML = imc
    classificarIMC(imc)

}

function classificarIMC(argImc){
    /*
        IMC MENOR OU IGUAL A 18.5 = DESNUTRIÇÃO
        IMC MAIOR QUE 18.5 E MENOR OU IGUAL A 25 = PESO NORMAL
        IMC MAIOR QUE 25 E MENOR OU IGUAL A 30 = SOBREPESO
        IMC MAIOR QUE 30 E MENOR OU IGUAL A 35 = OBESIDADE I
        IMC MAIOR QUE 35 E MENOR OU IGUAL A 40 = OBESIDADE II
        IMC MAIOR QUE 40 = OBESIDADE III
    */
   let classificacao = ""

   if (argImc <= 18.5){
        classificacao = "Desnutrição"
   }
   else if(argImc <= 25){
        classificacao = "Peso Normal"
   }
   else if(argImc <= 30){
        classificacao = "Sobrepeso"
   }
   else if(argImc <= 35){
        classificacao = "Obesidade I"
   }
   else if(argImc <= 40){
        classificacao = "Obesidade II"
   }
   else{
        classificacao = "Obesidade III"
   }

   //console.log(classificacao)
   document.getElementById("status").innerHTML = classificacao 
}