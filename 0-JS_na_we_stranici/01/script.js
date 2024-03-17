/* Shift + Alt + A -  shortcut za višelinijski komentar */
/*  Možete definirati varijable pomoću cont, let i var */

/* Const način definiranja varijable se mora prilikom deklaracije odmah i inicijalizirati 
i ne miže se mijenjati vrijednost */
const js = "JS je suuuper";


/* Let način definiranja varijable se može deklarirati, naknadno inicijalizirati i može se mijanjati vrijednost. */
let js2;
js2 = "JS je super";

var varX = 5;
var varX = 6;

/* clg + ENTER */
console.log(js);
console.log(js2, varX);

// Vrste vrijednosti varijabli - primitivni i objektni...

// brojevi

const dob = 20;

// tekst / string (tekstualna sekvenca uvijek se stvlja u navodnike, svejedno jednostruke ili dvostruke)

const imePrezime = "Lucija Katuša";

// Boolean može biti samo true ili false

const polaznik = true;

// Undefined npr. varijabla kojoj nismo dodijelili vrijednost 

let brojPrisutnih;

// Postoji još i null, ali o tome kasnije...

console.log(dob, imePrezime, brojPrisutnih, polaznik);
console.log(typeof dob, typeof imePrezime, typeof brojPrisutnih, typeof polaznik);

brojPrisutnih = 21;
console.log(brojPrisutnih, typeof brojPrisutnih);

/* Matematički operateri */

const godineStarostiLucija = 2024 - 1996;
console.log(godineStarostiLucija);

const trenutnaGodina = 2024;
const godineStarostiHrvoje = trenutnaGodina - 1990;
const godineStarostiSara = trenutnaGodina - 1991;

console.log(godineStarostiHrvoje, godineStarostiLucija, godineStarostiSara);

console.log(godineStarostiHrvoje * 2, godineStarostiLucija / 2 );

let x = 10 + 5;
/* x = x + 10; */
x += 10;
x *= 4;
// uvećanje varijable x za 1 
x ++;
// umanjenje varijable x za 1
x --;
console.log(x);

/* Usporedni operateri - mogu biti sljedeća četiri: <, >, >=, <= 
Rezultat je uvijek Boolean - true ili false */
console.log(godineStarostiHrvoje > godineStarostiSara);
const punoljetan = godineStarostiHrvoje >= 18;
console.log(punoljetan);

// kombiniranje matematičkih i usporedbih operatera
console.log(trenutnaGodina - 1991 > trenutnaGodina - 1988);

/* Operator precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence */

// Spajanje vrijednosti ...
const ime = "Lucija";
const prezime = "Katuša";

console.log(ime + prezime);
console.log(ime , prezime);
console.log(ime + " " + prezime); //da bi dobili razmak između imena i prezimena


// Zadatak 1 - definirajte 3 varijable i dodijelite im vrijednosti. Nakon toga ih ispišite u konzoli.

const posao = "prodajni administator";
const godinaRada = 1;
const radnik = true;

console.log(posao, godinaRada, radnik);

// Zadatak 1 - rješenje od predavača
const zemlja = "Hrvatska";
let brojStanovnika = 3.8e6;
const clanicaEU = true;
console.log(zemlja, brojStanovnika, clanicaEU);