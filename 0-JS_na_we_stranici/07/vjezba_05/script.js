/*  Napisat ćemo IIFE - Immediately Invodek Function Expression - ovo će biti funkcija koja će se odmah izvršiti nakon što 
se definira. Sintaksa IIFE je takva da ju postavljamo unutar okruglih zagrada i unutar prve pišemo funkciju, a druga
služi za definiranje pokretanja. */

"use strict";

/* const user = "Elena";
console.log(user); */

(function () {
    const user = "Elena";
    console.log(user);
})();

(function () {
    const user = "Lucija";
    console.log(user);
    const ifi= () => console.log("Ovo dolazi iz IIFE funkcije");
    ifi();
})();

(function (ime, godine) {
    console.log(`Pozdrav, ja sam ${ime} i imam ${godine} godine`);
})("Veronika", 33)