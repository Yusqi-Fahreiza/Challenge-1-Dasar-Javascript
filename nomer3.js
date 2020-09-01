let a = 170;
let b = 90;
let tinggi = a/100;
let tinggi2 = tinggi*tinggi;
let bmi = b/tinggi2;

if(bmi < 18.5){
    console.log("Kekurangan berat badan");
}else if(bmi < 25){
    console.log("Normal (ideal)");
}else if(bmi < 30){
    console.log("Kelebihan berat badan");
}else if(bmi >= 30){
    console.log("Kegemukan (Obesitas)");
}