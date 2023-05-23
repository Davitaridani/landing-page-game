// ================== Chpter 3 ==================
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    mybutton.style = "display: block";
  } else {
    mybutton.style = "display: none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mybutton?.addEventListener("click", backToTop);

// ========= Chapter 4 (Game Suit) =========
class Game {
  constructor() {
    this.player = "PLAYER";
    this.com = "COM";
    this.userChooice;
    this.comChooice;
    this.winner = "";
  }

  get getComChooice() {
    return this.comChooice;
  }

  set setComCooice(chooice) {
    this.comChooice = chooice;
  }

  get getChooiceUser() {
    return this.userChooice;
  }

  set setChooiceUser(chooice) {
    this.userChooice = chooice;
  }

  comResult() {
    const chooice = ["batu", "kertas", "gunting"];
    const com = chooice[Math.floor(Math.random() * chooice.length)];
    return com;
  }

  winCalculate() {
    if (this.comChooice === "kertas" && this.userChooice === "gunting") {
      return (this.winner = this.player);
    } else if (this.comChooice === "kertas" && this.userChooice === "batu") {
      return (this.winner = this.com);
    } else if (this.comChooice === "gunting" && this.userChooice === "kertas") {
      return (this.winner = this.com);
    } else if (this.comChooice === "gunting" && this.userChooice === "batu") {
      return (this.winner = this.player);
    } else if (this.comChooice === "batu" && this.userChooice === "kertas") {
      return (this.winner = this.player);
    } else if (this.comChooice === "batu" && this.userChooice === "gunting") {
      return (this.winner = this.com);
    } else {
      return (this.winner = "DRAW");
    }
  }

  gameResult() {
    if (this.winner !== "DRAW") {
      return `${this.winner} WIN`;
    } else {
      return `DRAW`;
    }
  }
}

function pickUser(params) {
  const myGame = new Game();
  myGame.setChooiceUser = params;
  myGame.setComCooice = myGame.comResult();
  myGame.winCalculate();
  console.log(
    `Player: ${myGame.getChooiceUser} VS COM: ${myGame.getComChooice}`
  );
  console.log(myGame.gameResult());

  const result = document.getElementById("result");
  result.textContent = myGame.gameResult();
  result.classList.replace("text-vs", "active-result");
}

// Funct Refresh Page
function refreshPage() {
  window.location.reload();
}

var btns = document.getElementsByClassName("btn-img");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("bgActive");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" bgActive", "");
    }
    this.className += " bgActive";
  });
}
