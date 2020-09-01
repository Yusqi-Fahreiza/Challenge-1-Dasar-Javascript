const phi = 3.15;

let rbola = 15;
let rbola3 = rbola*rbola*rbola;
let vbola = 4/3*phi*rbola3;
console.log("Volume bola tersebut adalah : "+vbola);

let rbola2 = rbola*rbola;
let lbola = 4*phi*rbola2;
console.log("Luas bola tersebut adalah : "+lbola);

let rkerucut = 10;
let tkerucut = 40;
let skerucut = 41;
let rkerucut2 = rkerucut*rkerucut;
let vkerucut = 1/3*phi*rkerucut2*tkerucut;
console.log("Volume kerucut tersebut adalah : "+vkerucut);

let lakerucut = phi*rkerucut2;
let lskerucut = phi*rkerucut*skerucut;
let lkerucut = lakerucut+lskerucut;
console.log("Luas kerucut tersebut adalah : "+lkerucut);

let rtabung = 7.5;
let ttabung = 50;
let rtabung2 = rtabung*rtabung;
let vtabung = phi*rtabung2*ttabung;
console.log("Volume tabung tersebut adalah : "+vtabung);

let rttabung = rtabung+ttabung;
let ltabung = 2*phi*rtabung*rttabung;
console.log("Luas tabung tersebut adalah : "+ltabung);



