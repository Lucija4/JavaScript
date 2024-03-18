const godina = 18;

/**ovo će se ispirati jer stroja (strict) provjera će provjertii vrijednosti podataka i tipove podataka i ako se oboje slaže
 onda će to biti true...*/
if (godina === 18) {
    console.log ("Punoljetni ste");
}

// ovo se neće ispisati jer iako je vrijednost podataka ista, tipovi nisu isti(string nije jednak broju)
if ("18" === 18) {
    console.log("ovo će se ispisati...");
}

/* ovo će se ispisati jer je labava (loose) provjra koje će samo provjeriti da li su vrijednosti podataka iste, 
neće provjeriti tipove podatak*/
if ("18" == 18) {
    console.log("ovo će se ispisati...");
}

//Praktični primjer
/*const broj = Number(prompt("Koji ti je najdraži broj?"));

if (broj === 1) {
    console.log("Broj 1 je top");
} else if (broj === 2) {
    console.log("Broj 2 je top");
} else if (broj === 3) {
    console.log("Broj 3 je top");
} else {
    console.log("1 je zakoj broj, zašto njega niste upisali?!?!");
} */

// i / ili operateri

const istina = true;
const laz = false;

// "I" operator se piše sa 2 znaka "&&" i rezultat njegove provjere će biti true samo ako su SVI ČLANOVI provjere TRUE
console.log(istina && laz);

// "ILI" operator se piše sa 2 znaka "||" i rezultat njegove provjere će bit true čim je JEDAN od članova provjere true
console.log(istina || laz || false);

// not operator

const punoljetan = true;

if (istina && !punoljetan) {
    console.log("Ovo je istinita tvrdnja i ovo će se ispisati....");
}

/*Nullish coalescng operator(Nulti operator spajanja) - logički operator koji će vratiti operand sa desne strane
ako je sa lijeve strane vrijednost operanda null ili undefined, inače će vratiti
 lijevog operanda (za razliku od truthy i falsy) koji će vratiti i 0 i prazan string*/

let nullish;
nullish = 10 ?? 20;
nullish = "lijeva" ?? "desna";
nullish = "" ?? "desna";
nullish = 0 ?? "desna";
nullish = null ?? "desna";
nullish = false ?? "desna";
nullish = undefined ?? "desna";

console.log(nullish); 

/*  && će vratiti prvu falsy vrijednost ili zadnju truthy vrijednost */
let x;

x = 10 && 20;
x = 10 && 20 && 30;
x = 10 && 0 && 20;
x = 10 && "" && 0 && 20;

console.log(x); 

let lista = [];

console.log(lista[0]);

// primjer ; lista length nije već aod nule, samim time se neće odvrtiti console.log desno od && operanda
lista.length > 0 && console.log(lista[0]);

// ovdje imamo članove liste, samim time je dužina liste veća od 0 i console.log će se ispisati
lista = [1, 2];
lista.length > 0 && console.log(lista[0]);

/*  || će se vratiti prvu truthy vrijednost ili zadnju falsy vrijednost */

let y;

y = 10 || 20;
y = 0 || 20;
y = 0 || null || "" || undefined; // izbacit će undefined jer je to zadnja falsy vrijednost 

console.log(y);

/* Par orimjera primjene ovakve sintakse prilikom definiranja vrijednosti varijable */

let a = false;

if (!a) {
    a = 10;
}

// ista stvar koristeći || operator

a = a || 10;
console.log(a);

// još kraći način pisanja 
a ||= 10;
console.log(a);

/*------------------------------------------------------------------------------------------------------*/

let b = 20;

if (b) {
    b = 30;
}

b = b && 40;
b &&= 50;
console.log(b);

// ista stvar koristeći ?? operator

let c = undefined;

if (c === undefined) {
    c = 20;
}

c = c ?? 20;
c ??= 20;
console.log(c);