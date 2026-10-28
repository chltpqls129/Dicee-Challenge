const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const title = document.querySelector("#title");

const random1 = Math.floor(Math.random() * 6) + 1;
const random2 = Math.floor(Math.random() * 6) + 1;

image1.setAttribute("src", `images/dice${random1}.png`);
image2.setAttribute("src", `images/dice${random2}.png`);

if (random1 > random2) {
  title.textContent = "🚩 Player 1 Wins!";
} else if (random2 > random1) {
  title.textContent = "Player 2 Wins! 🚩";
} else {
  title.textContent = "🤝 Draw!";
}

// 주석달기
