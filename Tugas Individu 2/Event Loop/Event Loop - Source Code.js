const detik = new Date().getTime() / 100;

setTimeout(() => {
  console.log(`Output keluar setelah ${new Date().getTime() / 100 - detik} detik`);
}, 50)

while (true) {
  if (new Date().getTime() / 100 - detik >= 3) {
    console.log("Loop selama 3 detik");
    break;
  }
}