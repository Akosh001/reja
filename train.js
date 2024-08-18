console.log("Jack Ma maslahatlari");

const list = [
  "yahshi talaba boling", // 0-20

  "togri boshliq tanlang va koprog hato giling", // 20-30

  "uzingizga ishlashingizni boshlang", //30-40

  "siz kuchli bolgan narsalarni giling", // 40-50

  "yoshlarga investitsiya giling", // 50-60

  "endi dam oling, foydasi yoq endi", // 60
];

// CALLBACK functions
function maslahatBering(a, callback) {
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
console.log("passed here 1");

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
