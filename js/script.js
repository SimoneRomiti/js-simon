// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(document).ready(
  function(){

    var arrayCasuali = [];
    var numeroCasuale;
    var i = 0;
    var k = 0;
    var numeroUtente;
    var arrayUtente = [];
    var counter = 0;
    var arrayResult = [];

    function myFunction(max, min){
      numeroCasuale = Math.floor(Math.random() * (max - min) + min);

      return numeroCasuale;
    }


    for(i = 0; i < 5; i++){
      numeroCasuale = myFunction(100, 1);
      k = 0;
      while(k < arrayCasuali.length){
        if(numeroCasuale == arrayCasuali[k]){
          numeroCasuale = myFunction(100, 1);
          k = 0;
        } else {
            k++;
        }
      }
      arrayCasuali.push(numeroCasuale);
    }

    alert(arrayCasuali);

    setTimeout(function(){
      for(i = 0; i < 5; i++){
        numeroUtente = parseInt(prompt("Inserisci il numero che era in posizione " + (i + 1)));
        arrayUtente.push(numeroUtente);
      }
      console.log(arrayUtente);
      for(i = 0; i < 5; i++){
        for(k = 0; k < 5; k++){
          if(arrayCasuali[i] == arrayUtente[k]){
            counter++;
            console.log(counter);
            arrayResult.push(arrayUtente[k]);
          }
        }
      }
      alert("Hai indovinato " + counter + " numeri su 5\n" + "I numeri indovinati sono " + arrayResult);
    }, 5000);

  }
);
