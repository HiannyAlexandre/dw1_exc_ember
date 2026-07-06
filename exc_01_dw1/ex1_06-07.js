function trocaDeSesamo() {
   let t = document.getElementById("textoDoido").value;
   let p = t.split(" ");
   let r = "";
   for(i = 0; i < t.length; i++){
      let resp = avaliarTroca(p[i]);
      r += resp + " ";
   }
   document.getElementById("span").innerHTML = r;
}


function avaliarTroca(palavra) {
   let aux = " ";
   for(let i = palavra.length-1; i=0; i--){
     aux += palavra[i];
   }
   return aux;
}
