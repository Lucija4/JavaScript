"use strict";

// na ovaj način deklariramo funkciju i njen kod koji se izvršava kada se funkcija pokrene

function ispis() {
    console.log("Zovem se Igor");
}

// na ovaj način inicijaliziramo funckiju (calling, running, invoking, executing a function)
ispis();
ispis();
ispis();
ispis();

/* Kod deklaracije funkcije moguće je napraviti inicijaliziranje funkcije u redovima prije funkcijske logike, 
drugim riječima, možemo ju hoistat iznad funkcije i sve će raditi. */
const test = nutriBullet(7, 2);

function nutriBullet(jabuke, kruske){
    console.log(jabuke, kruske);
    var sok = `Sok od ${jabuke} jabuka i ˘${kruske} krušaka`;
    return sok;
    console.log("Oovo se neće izvrtiti jer dolazi nakon returna");
}

const sokOdJabuke = nutriBullet(5, 1);
const sokOdKruske = nutriBullet(2, 4);

console.log(sokOdJabuke, sokOdKruske, test);

// Arrow funkcije

function rodjenje(godRodjenja) {
    return 2024 - godRodjenja;
}
console.log(rodjenje(2001));

/* ista funckija napisana arrow funkcijskom sintaksom - prilikom jednostavne funkcije arrow 
funkcije ima jednostavniju sintaksu */

const arrowRodjenje = (godRodjenja) => 2024 - godRodjenja;

const arrowFunkcija = (godRodjenja) => {
    const izracun = 2024 - godRodjenja;
    return izracun;
};

console.log(arrowRodjenje(2003));
console.log(arrowFunkcija(2004));

// primjer arrow funckije

const godMirovine = (godRodjenja, imePrezime) => {
    const godine = 2024 - godRodjenja;
    const mirovina = 65 - godine;
 if(mirovina > 0) {
    return `${imePrezime} će se umiroviti za ${mirovina} godina`;
} else {
    return `${imePrezime} je već u mirovini.`;
 }
};

console.log(godMirovine(1979, "Hrvoje Matašin"));
console.log(godMirovine(1945, "Marija Batur"));