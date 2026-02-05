// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
let scaleIn = 1;
let scaleOut = 1;
// Click Envelope

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

let count = 0;
noBtn.addEventListener("click", () => {
  count += 1;
  if (count == 1) {
    title.textContent = "Re-Thinking Buddy!";
    catImg.src = "./assets/giphy.webp";
  } else if (count == 2) {
    title.textContent = "Are you serious?";
    catImg.src = "./assets/cat-meme.gif";
  } else if (count == 3) {
    title.textContent = "Are you sure ?";
    catImg.src = "./assets/cat.gif";
  } else if (count == 4) {
    title.textContent = "so don't you love me?";
    catImg.src = "./assets/cat-cat-meme.gif";
  } else {
    function moveRandom(elm) {
      scaleIn -= 0.1;
      scaleOut += 0.4;
      elm.style.scale = scaleIn;
      yesBtn.style.scale = scaleOut;
      console.log(scaleIn);
    }
    noBtn.addEventListener("click", function (e) {
      moveRandom(e.target);
    });
  }
});
yesBtn.addEventListener("click", () => {
  title.textContent = "hehehe!";
  catImg.src = "./assets/hehe.gif";
  document.querySelector(".letter-window").classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
  finalText.textContent = "Valentine Date: At my room 😈";
  setTimeout(prank, 1000);
});

function prank() {
  title.textContent = "Just Kidding!";
  catImg.src = "./assets/cat-jump.gif";
  buttons.style.display = "none";
  finalText.innerHTML = `Valentine Date: At Cat Cafe. <br/>I love you`;
  document.querySelector(".letter-window").classList.add("final");
  finalText.style.display = "block";
}
