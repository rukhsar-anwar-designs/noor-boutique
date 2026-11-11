function orderNow(product) {
  let msg = "Assalam-o-Alaikum! Mujhe ye suit order karna hai: " + product;
  window.open("https://wa.me/923442730466?text=" + encodeURIComponent(msg), "_blank");
}

// Offer Timer - 2 hours countdown
let timeLeft = 2 * 60 * 60;
setInterval(() => {
  let h = Math.floor(timeLeft / 3600);
  let m = Math.floor((timeLeft % 3600) / 60);
  let s = timeLeft % 60;
  document.getElementById("timer").innerText = `Offer Ends In: 0${h}:${m}:${s}`;
  timeLeft--;
}, 1000);
