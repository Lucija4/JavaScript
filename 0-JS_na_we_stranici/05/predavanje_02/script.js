const dan = prompt("Koji je danas dan?");

switch (dan) {
   case "ponedjeljak": // ovaj case radi provjere kao da sam upisao : dan == ponedjeljak
    console.log("danas je prvi dan tjedna");
    break; // kada ovjde ne bi bilo breaka, kod će ispisati i idući dan, u biti sve dok ne naleti na pevi break
  
    case "utorak":
    console.log("dana je drugi dan u tjednu");
  
    case "srijeda":
    console.log("sredina tjedna");
  
    case "četvrtak": // s obzirom da nakon case-a srijede nije bilo breaka, ispisat će se i case četvrtak
    console.log("mali petak");
  
    case "petka":
    console.log("PETAK JEE !!");
  
  case "subota":
  case "nedjelja":
    console.log("vikend....");   
    break;
  default:
    console.log("niste unijeli dan u tjednu");
}

// primjer do-while, while-do

const count = 0;
while (count < 10) {
    console.log(count); 
    count++;
}

let brojac = 0;

do {
    brojac++;
    console.log(brojac); 
} while (brojac < 10);

// napišite while petlja koja će ispisivati sve brojeve od 3 do 20 koji su djeljivi sa 9

let broj = 3;
while (broj <= 20) {
    if (broj % 9 === 0) {
        console.log(broj);   
    } else if (broj % 9 != 0) {
        console.log(broj);
    }
    broj++;
}

l