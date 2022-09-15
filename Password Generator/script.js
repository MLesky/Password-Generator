var symbols = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

var digits = ["0","1","2","3","4","5","6","7","8","9"];

var upper = 
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function getRange1() {
    var    x = document.getElementById("range").value;    document.getElementById("rngbx").value=x;
}

function getRange2() {
    var    x = document.getElementById("rngbx").value;
    if(x>=range.max) {                                             
        x=range.max;
    }
    else if(x<=range.min) {
        x=range.min;
    }
    document.getElementById("rngbx").value=x;
    document.getElementById("range").value=x;
}


function generatePassword(){
    var i;
    var length = document.getElementById("range").value;    document.getElementById("password").value="";
    var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
     if (document.getElementById("symbols").checked==true)                                                                {
        characters = characters.concat(symbols);
     }
     if (document.getElementById("digits").checked==true) {
        characters = characters.concat(digits);
            }
     if (cases.checked==true) {
        characters = characters.concat(upper);
            }
     if (ranlen.checked) {
        var con = Math.floor(Math.random()*(30-8))+8;
        for(i=0; i<con; i++){
            var index = Math.floor(Math.random()*characters.length);        document.getElementById("password").value+=characters[index];
         }
         rngbx.value=range.value=i;
     }
     else{
         for(i=0; i<length; i++){    
            var index = Math.floor(Math.random()*characters.length);             document.getElementById("password").value+=characters[index];
        }
    }
}                                

function disable(){
    range.disabled=false;
    rngbx.disabled=false;
    if (ranlen.checked) {
        range.disabled=true;
        rngbx.disabled=true;
    }
}
