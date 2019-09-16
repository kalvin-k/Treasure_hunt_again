

// onclick submit

function submit() {
  let data = document.getElementById('userName').value;
  document.getElementById('outputName').innerHTML = `Welcome ${data}!`
  document.getElementById('outputCounter').innerHTML = `${data}\'s`;
};



// treasure hunt game
// random placement for bomb/treasure
const treasure = Math.floor(Math.random()*9)
const bomb = Math.floor(Math.random()*9)
let counter = 5;
//on click for table items as well as counter

function playGame(loc) {
  counter = counter - 1;
  document.getElementById('counter').innerHTML = `Counter: ${counter}`
  if (loc === treasure) {
    document.getElementById('table').innerHTML = 'You Win! 👑'
  } else if (loc !== treasure && loc !== bomb) {
    document.getElementById(loc).innerHTML = ' 👎 👎 👎'
  } else if (loc === bomb) {
    document.getElementById('table').innerHTML = 'You Lose! ☠️'
  } else if (loc === treasure && loc === bomb) {
    alert("You're Treasure Exploded!");
  } else {
    alert('error');
  };
  if (counter === 0 && loc !== treasure) {
    document.getElementById('table').innerHTML = 'YOU RAN OUT OF TURNS!';
  }
};

// function resize(txt) {
//   if (document.body.style.fontSize == '') {
//     document.body.style.fontSize = '1em';
//   }
//   document.body.style.fontSize = ParseFloat(document.body.style.fontSize) + (mult * 0.2) + 'em';
// }

// function hover(elem) {
//   elem.setAttribute(src, https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg)
// };
// function unHover(elem) {
//   elem.setAttribute(src, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjk-3LMSBtUyQ6q7rCNiKeT2b4Ys-kfnpvnYGuAKpMeItRqimcwA)
// }
