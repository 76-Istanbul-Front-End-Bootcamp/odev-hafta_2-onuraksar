// /*
//   Odev 1:
//   Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
//  */

var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message.bind(person);  // insert the person object as "this" into the function expression.
messageFunc();  


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map((number, numberIndex) => {
        const result = number * this.numbers[1];
        console.log(result)
    });
  }
};
// by turning map function into an arrow function, "this" will refer to parent scope as it's supposed to, for our case.
numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
function isValidName(name){
    if(typeof(name) === "string") {
        let trimmedString = name.trim(); // delete all the spaces from both sides.
        let splittedStringArray = trimmedString.split(" "); // split the string into substrings inside an Array.
        for(let i = 0; i<splittedStringArray.length; i++) {
            if(splittedStringArray[i].length > 1) {
                return true // this is a valid name if the string contains more than 1 letter logically...
            } else {
                return false // otherwise, single letter string doesn't make sense as a valid name.
            }
        }
    } else {
        console.log( name + " is not even a string!"); 
        return false;
        }
}


/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/


function katilimSaati(dersSayisi, dersSuresi){
    let nonValidEntries = [true,false,null,undefined,NaN,""]; // all the possible non-numbers.
    const checkExists = (item) => {return item === dersSayisi || item === dersSuresi}; // function for .some method.
  
    if(nonValidEntries.some(checkExists) || isNaN(dersSayisi) || isNaN(dersSuresi)) {
        console.log("Your entries are not a number.");
    } else {
        return dersSayisi * dersSuresi;
    }
}


