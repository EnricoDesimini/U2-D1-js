/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log ("Primo punto Esercizio")
var numero = 15
var stringa = "Ciao belli"
var falso = false
var vero = true

console.log ("Questa è una variabile di tipo number: " + numero + " <--------questa variabile contiene caratteri di tipo numerico")
console.log ("Questa è una variabile di tipo string:" + stringa + " <--------questa variabile contiene caratteri di tipo alfanumerico e ha bisogno degli apici per essere definita")
console.log ("Questa è una variabile boolean:  " + vero + " <-------questa può avere due valori (V/F)")

//---------------------------------------- esercizio 2
console.log ("2° Punto Esercizio")
var MyName = "Enrico "
console.log (MyName)
console.log ("3° Punto Esercizio")
var PrimoNum = 12
var SecondoNum = 20
 //-------------------------------------- esercizio 3
console.log ("LA SOMMA è : ")
var Risultato = PrimoNum +SecondoNum 
console.log (Risultato)
//-------------------------------------- esercizio 4
console.log ("4° Punto Esercizio")
var x = 12 
console.log ("La variabile x ha valore: " + x)
//-------------------------------------- esercizio 5
console.log ("5° Punto Esercizio")
MyName= "Enrico Desimini"
console.log (MyName)
console.log ("Se invece nella dichiarazione della variabile Myname la avessimo definita come una costante ci avrebbe dato un'errore quando sarei andato a sovrascrivere il valore aggiungendo il cognome")
//const myname2 = "ENRY"
myname2 = "EnryDesimini"
console.log (myname2)
//-------------------------------------- esercizio 6

console.log ("6° Punto Esercizio - SOTTRAZIONE")
var Differenza = 4 - x
console.log (Differenza)

//-------------------------------------- esercizio 7
console.log ("7° Punto Esercizio")
var name1 = "john"
var name2 = "John"
console.log (name1===name2)

// EXTRA ------------------------------

name2=name2.toLowerCase()
console.log ("name2=name2.toLowerCase() renderà i numeri uguali quindi la condizione riuslterà vera ")
console.log (name1===name2)


