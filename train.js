/*console.log("Jack Ma maslahatlari");

const list = [
  "yahshi talaba boling", // 0-20

  "togri boshliq tanlang va koprog hato giling", // 20-30

  "uzingizga ishlashingizni boshlang", //30-40

  "siz kuchli bolgan narsalarni giling", // 40-50

  "yoshlarga investitsiya giling", // 50-60

  "endi dam oling, foydasi yoq endi", // 60
];*/

// CALLBACK functions
/*function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  }
}

console.log("passed here 0");
maslahatBering(70, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log(data);
  }
});
console.log("passed here 1");*/

//ASYNC   functions
/* async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 3000);
    });
  }
}*/

//call via .then/catch

/*  console.log("passed here 0");
maslahatBering(25)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });

console.log("passed here 1");*/

//call via async/await

/*  async function run() {
  let javob = await maslahatBering(72);
  console.log(javob);
  javob = await maslahatBering(35);
  console.log(javob);
  javob = await maslahatBering(48);
  console.log(javob);
  javob = await maslahatBering(54);
  console.log(javob);
  javob = await maslahatBering(26);
  console.log(javob);
}
run();*/

//Masalani izohi A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

/*function countLetters(letter, word) {
  let count = 0;
  for (let i = 0; i <= word.length; i++) {
    if (word[i] == letter) {
      count++;
    }
  }
  return count;
}

const result = countLetters("a", "analytical");
console.log("result:", result);*/

// Masalani izohi B-TASK:
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

/*function countDigits(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= 0) count++;
  }
  return count;
}

const result = countDigits("asd31234809gfd87676h56g");
console.log("result:", result);*/

// Masalani izohi c-TASK:

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent ("mitgroup", "gmtiprou") return qiladi true;

/*function checkContent(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  // Har ikkala stringni tartiblab va solishtiryapdi
  return word1.split("").sort().join("") === word2.split("").sort().join("");
}

let result = checkContent("MIT eng zo'ri", "io'rz gen ITM");
console.log("result:", result);
let result1 = checkContent("Uzbekistan", "South Korea");
console.log("result1:", result1);*/

/*class Shop {
  constructor(non, lagmon, cola) {
    this.products = { non, lagmon, cola };
  }

  javob(message) {
    const currentTime = new Date().toLocaleTimeString();
    console.log(`Hozir ${currentTime}da ${message}`);
  }

  qoldiq() {
    const { non, lagmon, cola } = this.products;
    return `Hozir ${new Date().toLocaleTimeString()}da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`;
  }

  sotish(mahsulot, miqdor) {
    if (this.products[mahsulot] >= miqdor) {
      this.products[mahsulot] -= miqdor;
      this.javob(`${miqdor}ta ${mahsulot} sotildi!`);
    } else {
      this.javob(
        `${mahsulot} uchun yetarli miqdor yo'q yoki mahsulot topilmadi!`
      );
    }
  }

  qabul(mahsulot, miqdor) {
    if (this.products[mahsulot] !== undefined) {
      this.products[mahsulot] += miqdor;
      this.javob(`${miqdor}ta ${mahsulot} qabul qilindi!`);
    } else {
      this.javob(`${mahsulot} mahsuloti topilmadi!`);
    }
  }
}

const shop = new Shop(9, 4, 6);
console.log(shop.qoldiq());
shop.sotish("non", 4);
shop.qabul("cola", 2);
console.log(shop.qoldiq());*/

// Masalani izohi E-TASK:

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

/*function getReverse(string) {
  return string.split("").reverse().join("");
}

console.log(getReverse("MIT eng zo'ri"));*/

// Masalani izohi F-TASK:

//Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
//MASALAN: getReverse("hello") return true return qiladi

function findDoublers(s) {
  return s.split("").some((char, index, arr) => arr.indexOf(char) !== index);
}

console.log(findDoublers("Hello World!"));
