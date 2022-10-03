var name = "Wira M Panjaitan";

function first() {
  var a = "Syalom";
  second();
  console.log(`${a} ${name}`);
}

function second() {
  var b = "Asalamualaikum";
  third();
  console.log(`${b} ${name}`);
}

function third() {
  var c = "Halo";
  console.log(`${c} ${name}`);
}

first();