// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


// FUNZIONE NUMERI CASUALI
function random(max, min){
  numeroCasuale = Math.floor(Math.random() * (max - min) + min);
  return numeroCasuale;
}

$(document).ready(
  function(){

    // VARIABILI
    var arrayCasuali = [];
    var numeroCasuale;
    var i = 0;
    var k = 0;
    var numeroUtente;
    var arrayUtente = [];
    var indovinato = false;
    var arrayResult = [];

    // GENERATORE 5 NUMERI CASUALI E CONTROLLO DOPPIONI CON INCLUDES()
    i = 0;
    while(i < 5){
      numeroCasuale = random(100, 1);
      if(arrayCasuali.includes(numeroCasuale) == false){
        arrayCasuali.push(numeroCasuale);
        i++;
      }
    }

    // GENERATORE NUMERI CASUALI E CONTROLLO DOPPIONI CON CICLI MANUALI
    // for(i = 0; i < 5; i++){
    //   numeroCasuale = random(100, 1);
    //   k = 0;
    //   while(k < arrayCasuali.length){
    //     if(numeroCasuale == arrayCasuali[k]){
    //       numeroCasuale = random(100, 1);
    //       k = 0;
    //     } else {
    //         k++;
    //     }
    //   }
    //   arrayCasuali.push(numeroCasuale);
    // }

    alert(arrayCasuali);

    // FUNZIONE CON RITARDO DI 30 SECONDI
    setTimeout(function(){
      // CHIEDO ALL'UTENTE 5 NUMERI TRAMITE PROMPT
      for(i = 0; i < 5; i++){
        numeroUtente = parseInt(prompt("Prompt N° " + (i + 1) + "\nInserisci un numero"));
        arrayUtente.push(numeroUtente);
      }
      console.log(arrayUtente);

      // CONTROLLO NUMERI INDOVINATI CON INCLUDES
      for(i = 0; i < 5; i++){
        if(arrayCasuali.includes(arrayUtente[i])){
          arrayResult.push(arrayUtente[i]);
        }
      }

      // CONTROLLO NUMERI INDOVINATI CON CICLI MANUALI
      // for(i = 0; i < 5; i++){
      //   k = 0;
      //   indovinato = false;
      //   while(k < 5 && indovinato == false){
      //     if(arrayCasuali[i] == arrayUtente[k]){
      //       indovinato = true;
      //       arrayResult.push(arrayUtente[k]);
      //     } else{
      //       k++;
      //     }
      //   }
      // }


      if(arrayResult.length == 0){
        alert("Non hai indovinato nessun numero!\nPunteggio " + arrayResult.length + " su 5\n");
      } else if(arrayResult.length == 5){
        alert("Hai indovinato tutti i numeri!\nPunteggio " + arrayResult.length + " su 5\n" + "I numeri indovinati sono " + arrayResult);
      } else{
        alert("Hai indovinato " + arrayResult.length + " numeri su 5\n" + "I numeri indovinati sono " + arrayResult);
      }
    }, 30000);

    // COUNTDOWN DA 30 A 0 SU CONSOLE
    var x = 29;
    $("#box").text(x);
    var countdown = setInterval(function(){
      x--;
      $("#box").text(x);
      if(x == 0){
        $("#box").css("color", "red");
        clearInterval(countdown);
      }
    }, 1000);
  }
);
