/* Zadatak 1 - Imamo definiranu varijablu koja sadrži broj stanovnika Hrvatske. Recimo da je prosjek svih zemalja EU
33e6. Provjeri, koristeći varijablu koju ćeš definirati kao „prosjek“ da li je populacija Hr veća od prosjeka
EU i ispiši koristeći if/else petlju što će se dogoditi ako je populacija veća/manja od prosjeka EU. Koristite
template literal za ispis. */

const populacija = 3.8e6;
const prosjek = 33e6;

if (populacija > prosjek) {
    console.log(`Hrvatska ima ${populacija} stanovnika i ima više od prosjkea EU`);
} else if (populacija === prosjek) {
    console.log(`Hrvatska ima isto stanovnika kao i prosjek EU`);
} else {
    console.log(`Hrvatska ima ${populacija} stanovnika i ima manje od prosjeka EU`);
}

/* Zadatak 2 - provjeri ITM (Indeks tjelesne mase) Marka i Josipa i utvrdi čiji je veći.
Neka piše Markov koeficijent mase je veći od Josipovog koeficijenta mase ili Josipov koeficijent mase je
veći od Markovog koeficijenta mase.
Koristite if else pristup i template string za console.log.
Podsjetnik: računa se tako da se masa dijeli sa visinom na kvadrat (formula je itm = masa/visina ** 2) */




/* Zadatak 3 - Rješite koristeći logičke operatore: zamislimo da želimo živjeti u zemlji u kojoj se priča engleski, koja ima
manje od 50 m stanovnika i koja nije otok.
Utvrdi da li Hrvatska ispunjava te uvjete i ako da ispiši : "Zemlja u kojoj želite živjeti je Hrvatska". Ako ne,
onda ispiši : "Hrvatska nije za vas.".
Koristite logičke operatore i if else petlju za rješenje zadatka. */

const engleski = true;
const manjeOd50M = true;
const nijeOtok = true;
const hrvatski = true;

const uvjeti = engleski && manjeOd50M && nijeOtok;
const zelje = !hrvatski && manjeOd50M && nijeOtok;

console.log(uvjeti, zelje);

if (uvjeti === zelje) {
    console.log("Zemlja u kojoj želite živjeti je Hrvatska");
} else {
    console.log("Zemlja u kojoj želite živjeti nije Hrvatska");
}

/* Zadatak 3a - Predvidi rezultat ovih operacija bez unošenja u VSC ili konzolu (pa provjeri):

"9" - "5" = 4
"19" - "13" + "17" = 617
"19" - "13" + 17 = 23
"123" < 57 = false
5 + 6 + "4" + 9 - 4 - 2 = 114942 */

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);