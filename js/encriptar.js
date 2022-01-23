


function validar() {
    var input = document.getElementById("input").value;
  
        if(input.match(/[A-Z]/g) || input.match(/[áéíóú]/)) {
            return false;}

        return true;
}


function encriptar (){
if (validar() == false) {
    alert("error");
    return 0;
}
var entrada = document.getElementById("input").value;

var palabraEncriptada = "";

for( var i = 0; i < entrada.length ; i++ ){
      if (entrada [i]== 'a' ) {
            palabraEncriptada += "ai";
          continue;
        }

        if (entrada [i]== 'e' ) {
        palabraEncriptada +="enter";
        continue;
        }
            
            if (entrada [i]== 'i' ) {
          palabraEncriptada +="imes";
          continue;
        } 
          
           if (entrada [i]== 'o' )  {
       palabraEncriptada +="ober";
                 continue;
        } 
           
           if (entrada [i]== 'u' ) {
       palabraEncriptada +="ufat";
          continue;       
        }

   palabraEncriptada += entrada[i];
}

document.getElementById("input2").value = palabraEncriptada;
}

document.getElementById("Encriptar").addEventListener('click',encriptar); 


function desencriptar(){
if (validar() == false) {
    alert("error");
    return 0;
}
let input2 = document.getElementById('input').value;

let palabraDesencriptada = "";

        for( var i = 0; i < input2.length; i++){
            if (input2[i] == "o" && input2[i+1] == "b" && input2[i+2]== "e" && 
                input2[i+3] == "r") {
                palabraDesencriptada += "o";
                i += 3;
                continue;}
              
                  if (input2[i] == "e" && input2[i+1] == "n" && input2[i+2]== "t" && 
                input2[i+3] == "e" && input2[i+4] == "r") {
                palabraDesencriptada += "e";
                i += 4;
                continue;}
                       
                        if (input2[i] == "i" && input2[i+1] == "m" && input2[i+2]== "e" && 
                input2[i+3] == "s") {
                palabraDesencriptada += "i";
                i += 3;
                continue;}


                        if (input2[i] == "u" && input2[i+1] == "f" && input2[i+2]== "a" && 
                input2[i+3] == "t") {
                palabraDesencriptada += "u";
                i += 3;
                continue;}


                        if (input2[i] == "a" && input2[i+1] == "i") {
                palabraDesencriptada += "a";
                i += 1;
                continue;}

                palabraDesencriptada += input2[i];
            } 
    document.getElementById("input2").value = palabraDesencriptada;

}   

document.getElementById("Desencriptar").addEventListener('click',desencriptar); 

function copiar(){

    navigator.clipboard.writeText(document.getElementById("input2").value);
    document.getElementById("input").value = "";

}

document.getElementById("Botoncopiar").addEventListener('click',copiar);
