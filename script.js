const noMessages = [
  "Are you sure? 🥺",
  "Really sure?? 😭",
  "Bebi naman eh 💔",
  "Think again pls 😔",
  "Last chance 😢",
  "Please say yes na 💗",
  "I’ll be sad 😞",
  "Don’t do this to me 😭",
  "You love me... right? 🥺",
  "Okay fine... last na talaga 😭"
];

let clickCount = 0;

function goYes() {
  window.location.href = "./next.html";
}

function handleNo() {
  const noBtn = document.getElementById("noBtn");
  const question = document.getElementById("question");

  if (clickCount < noMessages.length) {
    noBtn.innerText = noMessages[clickCount];
  } else {
    noBtn.innerText = "YES NA PLS 😭💗";
  }

  if (clickCount >= 3) {
    question.innerText = "Do you still love me, bebi? 🥺💔";
  }

  if (clickCount >= 6) {
    question.innerText = "Please say yes... 💗";
  }

  clickCount++;
}
