var cont = 0;
var ax = 0;
var botonesP =[];
var botonesN =[];
function crearAlimento(){    
    cont+=1;
    ax++;
    var aux = cont + 1;
    var alimentoLabel = document.createElement('div');
    alimentoLabel.innerHTML = `                     
    <label for ="comida`+cont+`">Alimento `+aux+`:</label></br> 
    <label for ="gramos`+cont+`">Peso consumido en gramos:</label></br> 
    <label for ="kcal`+cont+`">Calorías consumidas:</label></br>`;
    document.getElementById("l").appendChild(alimentoLabel);

    var alimentoinput = document.createElement('div');
    alimentoinput.innerHTML = `<input name="alimento:" type="text" id = "comida`+cont+`" pattern="[A-Za-zÀ-ÿ\u00f1\u00d1]{3,20}" title="Introduzca entre 3 y 20 letras" required></br>            
    <input name="peso_gr:" type="number" min="0" id = "gramos`+cont+`" required class="ip"></br>                    
    <input name="calorias:" type="number" min="0" id = "kcal`+cont+`" required class="ip"></br>
    <input name="boton" type="button" value="+" id="btnP`+cont+`"  onclick="crearAlimento(), desaparecer()">
    <input name="boton" type="button" value="-" id="btnN`+cont+`" onclick="eliminarAlimento(), aparecer()">`;
    document.getElementById("r").appendChild(alimentoinput);

    if(ax===1){        
        botonesN.push(document.getElementById("btnN0"))
        botonesP.push(document.getElementById("btnP0"))
    }
    botonesN.push(document.getElementById("btnN"+cont+""))
    botonesP.push(document.getElementById("btnP"+cont+""))
}

function desaparecer(){
    /*console.log(cont-1)
    console.log(botonesN[0]);
    console.log(botonesP[cont-1]);*/
    botonesN[cont-1].style.display = "none";
    botonesP[cont-1].style.display = "none";    
    console.log("Contador:",cont);
}
function aparecer(){
    botonesN.pop();
    botonesP.pop();
    console.log("Longitud botones - :",botonesN.length);
    console.log("Longitud botones + :",botonesP.length);
    if(botonesN.length != 1){
        botonesN[botonesN.length-1].style.display = "inline-block";
        botonesP[botonesP.length-1].style.display = "inline-block"; 
    }
    else{
        botonesP[botonesP.length-1].style.display = "inline-block"; 
    }
    
}

function eliminarAlimento(){    
    var izq= document.getElementById("l");
    var der = document.getElementById("r");
    var aux1 = izq.childNodes;
    var aux2 = der.childNodes;
    izq.removeChild(aux1.item(aux1.length-1));
    der.removeChild(aux2.item(aux2.length-1 )); 
    cont--;
}


