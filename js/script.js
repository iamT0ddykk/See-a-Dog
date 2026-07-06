const butao = document.querySelector("button");
const ispraite = document.querySelector(".image");
let conter = document.querySelector(".counter");
let i = 0;
butao.addEventListener("click", () => {
  ver();
  i += 1;
  conter.innerHTML = i;

  if (i >= 100) {
    conter.className = "texto-rgb";
  }
});
async function ver() {
  try {
    const resposta = await fetch("https://random.dog/woof.json");
    const data = await resposta.json();
    const url = data.url;
    if (url.endsWith(".mp4") || url.endsWith(".webm")) {
      ver();
      return;
    }
    ispraite.src = url;
    ispraite.style.display = "block";
  } catch (err) {
    console.log(err);
  }
}
