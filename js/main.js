var a = 500;
var b = 250;
var c = 120;
var money = Number(prompt("Sayohat uchun qancha pulingiz bor?" , "so'mda kiriting"));

a = a * 10900;
b = b * 10900;
c = c * 12272.64;

var S = Number((a+b+c));

if (money >= S){
  console.log("Oq yo'l , Brat!");
}else{
  console.log("Brat, ozgina kutasiz");

}
