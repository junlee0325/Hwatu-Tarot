////
// Buttons
////
document.querySelector("#resetButton").addEventListener("click", refreshPage);
function refreshPage() {
  window.location.reload();
}

document.querySelector("#infoButton").addEventListener("click", openInfo);
function openInfo() {
  document.querySelector("#infoOverlay").style.display = "flex";
}

document.querySelector("#infoCloseButton").addEventListener("click", closeInfo);
function closeInfo() {
  document.querySelector("#infoOverlay").style.display = "none";
}

document
  .querySelector("#resultCloseButton")
  .addEventListener("click", refreshPage);

document
  .querySelector("#impossibleResetButton")
  .addEventListener("click", refreshPage);

document
  .querySelector("#impossibleCloseButton")
  .addEventListener("click", closeImpossible);
function closeImpossible() {
  document.querySelector("#impossibleOverlay").style.display = "none";
}

////
////
////

////
// Title and meanings
////
/*
const janTitle = "January | Pine 솔";
const febTitle = "February | Plum Blossom 매화";
const marTitle = "March | Cherry Blossom 벚꽃";
const aprTitle = "April | Wisteria 흑싸리";
const mayTitle = "May | Iris 난초";
const junTitle = "June | Peony 목단";
const julTitle = "July | Bush Clover 홍싸리";
const augTitle = "August | Empty Hill 공산";
const sepTitle = "September | Chrysanthemum 국화";
const octTitle = "October | Maple 단풍";
const novTitle = "November | Paulownia 오동";
const decTitle = "December | Rain 비";

const janMeaning = "Receive news or tidings";
const febMeaning = "Meet your beloved";
const marMeaning = "Set out on a brief journey";
const aprMeaning = "Experience a minor conflict";
const mayMeaning = "Dine out or meet with someone";
const junMeaning = "Welcome a happy occasion";
const julMeaning = "Stumble upon an unexpected windfall";
const augMeaning = "Acquire money";
const sepMeaning = "Encounter an occasion for a drink";
const octMeaning = "Face worries or concerns";
const novMeaning = "Spend money or come across an expense";
const decMeaning = "Have a visitor";
*/
////
////
////

////
// Individual cards are made in to objects
////
const janA = {
  name: "janA",
  month: "jan",
  rank: "A",
  img: "../images/janA.webp",
};
const janB = {
  name: "janB",
  month: "jan",
  rank: "B",
  img: "../images/janB.webp",
};
const janC = {
  name: "janC",
  month: "jan",
  rank: "C",
  img: "../images/janC.webp",
};
const janD = {
  name: "janD",
  month: "jan",
  rank: "D",
  img: "../images/janD.webp",
};
const febA = {
  name: "febA",
  month: "feb",
  rank: "A",
  img: "../images/febA.webp",
};
const febB = {
  name: "febB",
  month: "feb",
  rank: "B",
  img: "../images/febB.webp",
};
const febC = {
  name: "febC",
  month: "feb",
  rank: "C",
  img: "../images/febC.webp",
};
const febD = {
  name: "febD",
  month: "feb",
  rank: "D",
  img: "../images/febD.webp",
};
const marA = {
  name: "marA",
  month: "mar",
  rank: "A",
  img: "../images/marA.webp",
};
const marB = {
  name: "marB",
  month: "mar",
  rank: "B",
  img: "../images/marB.webp",
};
const marC = {
  name: "marC",
  month: "mar",
  rank: "C",
  img: "../images/marC.webp",
};
const marD = {
  name: "marD",
  month: "mar",
  rank: "D",
  img: "../images/marD.webp",
};
const aprA = {
  name: "aprA",
  month: "apr",
  rank: "A",
  img: "../images/aprA.webp",
};
const aprB = {
  name: "aprB",
  month: "apr",
  rank: "B",
  img: "../images/aprB.webp",
};
const aprC = {
  name: "aprC",
  month: "apr",
  rank: "C",
  img: "../images/aprC.webp",
};
const aprD = {
  name: "aprD",
  month: "apr",
  rank: "D",
  img: "../images/aprD.webp",
};
const mayA = {
  name: "mayA",
  month: "may",
  rank: "A",
  img: "../images/mayA.webp",
};
const mayB = {
  name: "mayB",
  month: "may",
  rank: "B",
  img: "../images/mayB.webp",
};
const mayC = {
  name: "mayC",
  month: "may",
  rank: "C",
  img: "../images/mayC.webp",
};
const mayD = {
  name: "mayD",
  month: "may",
  rank: "D",
  img: "../images/mayD.webp",
};
const junA = {
  name: "junA",
  month: "jun",
  rank: "A",
  img: "../images/junA.webp",
};
const junB = {
  name: "junB",
  month: "jun",
  rank: "B",
  img: "../images/junB.webp",
};
const junC = {
  name: "junC",
  month: "jun",
  rank: "C",
  img: "../images/junC.webp",
};
const junD = {
  name: "junD",
  month: "jun",
  rank: "D",
  img: "../images/junD.webp",
};
const julA = {
  name: "julA",
  month: "jul",
  rank: "A",
  img: "../images/julA.webp",
};
const julB = {
  name: "julB",
  month: "jul",
  rank: "B",
  img: "../images/julB.webp",
};
const julC = {
  name: "julC",
  month: "jul",
  rank: "C",
  img: "../images/julC.webp",
};
const julD = {
  name: "julD",
  month: "jul",
  rank: "D",
  img: "../images/julD.webp",
};
const augA = {
  name: "augA",
  month: "aug",
  rank: "A",
  img: "../images/augA.webp",
};
const augB = {
  name: "augB",
  month: "aug",
  rank: "B",
  img: "../images/augB.webp",
};
const augC = {
  name: "augC",
  month: "aug",
  rank: "C",
  img: "../images/augC.webp",
};
const augD = {
  name: "augD",
  month: "aug",
  rank: "D",
  img: "../images/augD.webp",
};
const sepA = {
  name: "sepA",
  month: "sep",
  rank: "A",
  img: "../images/sepA.webp",
};
const sepB = {
  name: "sepB",
  month: "sep",
  rank: "B",
  img: "../images/sepB.webp",
};
const sepC = {
  name: "sepC",
  month: "sep",
  rank: "C",
  img: "../images/sepC.webp",
};
const sepD = {
  name: "sepD",
  month: "sep",
  rank: "D",
  img: "../images/sepD.webp",
};
const octA = {
  name: "octA",
  month: "oct",
  rank: "A",
  img: "../images/octA.webp",
};
const octB = {
  name: "octB",
  month: "oct",
  rank: "B",
  img: "../images/octB.webp",
};
const octC = {
  name: "octC",
  month: "oct",
  rank: "C",
  img: "../images/octC.webp",
};
const octD = {
  name: "octD",
  month: "oct",
  rank: "D",
  img: "../images/octD.webp",
};
const novA = {
  name: "novA",
  month: "nov",
  rank: "A",
  img: "../images/novA.webp",
};
const novB = {
  name: "novB",
  month: "nov",
  rank: "B",
  img: "../images/novB.webp",
};
const novC = {
  name: "novC",
  month: "nov",
  rank: "C",
  img: "../images/novC.webp",
};
const novD = {
  name: "novD",
  month: "nov",
  rank: "D",
  img: "../images/novD.webp",
};
const decA = {
  name: "decA",
  month: "dec",
  rank: "A",
  img: "../images/decA.webp",
};
const decB = {
  name: "decB",
  month: "dec",
  rank: "B",
  img: "../images/decB.webp",
};
const decC = {
  name: "decC",
  month: "dec",
  rank: "C",
  img: "../images/decC.webp",
};
const decD = {
  name: "decD",
  month: "dec",
  rank: "D",
  img: "../images/decD.webp",
};
////
////
////

////
// Date
////
/*
const date = new Date();
let dd = date.getDate();
let mm = date.getMonth() + 1;
let yyyy = date.getFullYear();
let currentDate = `${mm} / ${dd} / ${yyyy}`;
document.querySelector("#date").textContent = `${currentDate}`;
*/
////
////
////

////
// Original deck of cards that is not shuffled
////
let orderedDeck = [
  janA,
  janB,
  janC,
  janD,
  febA,
  febB,
  febC,
  febD,
  marA,
  marB,
  marC,
  marD,
  aprA,
  aprB,
  aprC,
  aprD,
  mayA,
  mayB,
  mayC,
  mayD,
  junA,
  junB,
  junC,
  junD,
  julA,
  julB,
  julC,
  julD,
  augA,
  augB,
  augC,
  augD,
  sepA,
  sepB,
  sepC,
  sepD,
  octA,
  octB,
  octC,
  octD,
  novA,
  novB,
  novC,
  novD,
  decA,
  decB,
  decC,
  decD,
];
////
////
////

////
// Shuffle original deck
////
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
let deck = shuffle(orderedDeck);
console.log(deck);
////
////
////

////
// Array of clickable and unusable cards on screen
////
let clickableCards = [];
let unusableCards = [];
////
////
////

////
// Build Spread of 4 columns and 5 rows
////
let columnA = [];
let columnB = [];
let columnC = [];
let columnD = [];

function placeIntoA() {
  let removedCard = deck.pop();
  columnA.push(removedCard);
  if (i !== 5) {
    let visibleCard = document.createElement("img");
    visibleCard.setAttribute("id", `${removedCard.name}`);
    visibleCard.classList.add(`spreadRow${i}`);
    visibleCard.src = `../images/back.webp`;
    document.querySelector(`#spreadA`).appendChild(visibleCard);
  }
  if (i === 5) {
    let visibleCard = document.createElement("img");
    visibleCard.setAttribute("id", `${removedCard.name}`);
    visibleCard.classList.add(`spreadRow${i}`);
    visibleCard.src = `${removedCard.img}`;
    document.querySelector(`#spreadA`).appendChild(visibleCard);
    clickableCards.push(removedCard);
  }
}
function placeIntoB() {
  let removedCard = deck.pop();
  columnB.push(removedCard);
  if (i !== 5) {
    let visibleCard = document.createElement("img");
    visibleCard.setAttribute("id", `${removedCard.name}`);
    visibleCard.classList.add(`spreadRow${i}`);
    visibleCard.src = `../images/back.webp`;
    document.querySelector(`#spreadB`).appendChild(visibleCard);
  }
  if (i === 5) {
    let visibleCard = document.createElement("img");
    visibleCard.setAttribute("id", `${removedCard.name}`);
    visibleCard.classList.add(`spreadRow${i}`);
    visibleCard.src = `${removedCard.img}`;
    document.querySelector(`#spreadB`).appendChild(visibleCard);
    clickableCards.push(removedCard);
  }
}
function placeIntoC() {
  let removedCard = deck.pop();
  columnC.push(removedCard);
  if (i !== 5) {
    let visibleCard = document.createElement("img");
    visibleCard.setAttribute("id", `${removedCard.name}`);
    visibleCard.classList.add(`spreadRow${i}`);
    visibleCard.src = `../images/back.webp`;
    document.querySelector(`#spreadC`).appendChild(visibleCard);
  }
  if (i === 5) {
    let visibleCard = document.createElement("img");
    visibleCard.setAttribute("id", `${removedCard.name}`);
    visibleCard.classList.add(`spreadRow${i}`);
    visibleCard.src = `${removedCard.img}`;
    document.querySelector(`#spreadC`).appendChild(visibleCard);
    clickableCards.push(removedCard);
  }
}
function placeIntoD() {
  let removedCard = deck.pop();
  columnD.push(removedCard);
  if (i !== 5) {
    let visibleCard = document.createElement("img");
    visibleCard.setAttribute("id", `${removedCard.name}`);
    visibleCard.classList.add(`spreadRow${i}`);
    visibleCard.src = `../images/back.webp`;
    document.querySelector(`#spreadD`).appendChild(visibleCard);
  }
  if (i === 5) {
    let visibleCard = document.createElement("img");
    visibleCard.setAttribute("id", `${removedCard.name}`);
    visibleCard.classList.add(`spreadRow${i}`);
    visibleCard.src = `${removedCard.img}`;
    document.querySelector(`#spreadD`).appendChild(visibleCard);
    clickableCards.push(removedCard);
  }
}

// Initial spread builder
function buildSpread() {
  for (i = 1; i <= 5; i++) {
    placeIntoA();
    placeIntoB();
    placeIntoC();
    placeIntoD();
  }
  console.log("columnA v");
  console.log(columnA);
  console.log("columnB v");
  console.log(columnB);
  console.log("columnC v");
  console.log(columnC);
  console.log("columnD v");
  console.log(columnD);
  console.log("deck v");
  console.log(deck);
}
// Shuffled spread loaded when site is refreshed
buildSpread();
console.log("clickableCards v");
console.log(clickableCards);
////
////
////

////
// Deck and hand displayed when facedown card is clicked
////
const facedown = document.querySelector("#facedown");
const visibleHandContainer = document.querySelector("#visibleHandContainer");
// Array of cards displayed
let hand = [];
// Create facedown card image in div
let back = document.createElement("img");
back.src = "../images/back.webp";
facedown.appendChild(back);
// Event listener for when facedown image is clicked
facedown.addEventListener("click", placeCard);

function placeCard() {
  // if-case for when deck is depleted
  if (deck.length === 0 && hand.length != 0) {
    // Removes unused hand from clickableCards
    hand.forEach((x) => {
      if (clickableCards.findIndex((index) => index === x) !== -1) {
        clickableCards.splice(
          clickableCards.findIndex((index) => index === x),
          1
        );
      }
    });

    // Purges unusableCards array
    unusableCards.length = 0;

    // Cycles deck
    for (i = hand.length - 1; i >= 0; i--) {
      let addedCard = hand.pop();
      deck.push(addedCard);
    }
    // Reinstates facedown card
    facedown.innerHTML = "";
    let back = document.createElement("img");
    back.src = "../images/back.webp";
    facedown.appendChild(back);

    //console logs
    console.log("deck v");
    console.log(deck);
    console.log("hand v");
    console.log(hand);
    console.log("clickableCards v");
    console.log(clickableCards);
    console.log("deck cycled");

    // Removes "greyed" class from elements before hand container div is emptied because memory will retain the class name even after "deleting" an element
    let greyedElements = document.getElementsByClassName("greyed");

    for (let i = 0; i < greyedElements.length; i++) {
      if (greyedElements[i].classList.contains("greyed")) {
        greyedElements[i].classList.remove("greyed");
      }
    }

    // Empties hand container
    visibleHandContainer.innerHTML = "";

    if (hand.length === 0 && deck.length === 0) {
      // Remove facedown
      document.getElementById("handContainer").innerHTML = "";
    }
  }
  // else-case for when deck is NOT depleted
  else {
    // Displays card from facedown (deck)
    let removedCard = deck.pop();
    hand.push(removedCard);

    let visibleCard = document.createElement("img");
    visibleCard.setAttribute(
      "id",
      `${removedCard.month}` + `${removedCard.rank}`
    );
    visibleCard.src = `${removedCard.img}`;
    visibleCard.classList.add("handCards");
    visibleHandContainer.appendChild(visibleCard);

    // Adds removedCard to clickableCards array
    clickableCards.push(removedCard);

    unusableCards.length = 0;

    // Filters out non-clickable cards from hand. This returns an array
    if (hand.length > 2) {
      hand.forEach((x) => {
        if (x == hand[0] || x == hand[hand.length - 1]) {
          // First and last cards are clickable
          return false;
        } else if (
          // If second to last card has the same month as the last card, it is clickable
          x == hand[hand.length - 2] &&
          x.month == hand[hand.length - 1].month
        ) {
          return false;
        } else {
          // Everything else in the middle is unclickable and taken out from clickableCards array
          if (clickableCards.findIndex((index) => index === x) !== -1) {
            clickableCards.splice(
              clickableCards.findIndex((index) => index === x),
              1
            );
          }
          // Filtered cards are pushed into unusableCards array

          unusableCards.push(x);
        }
      });
    }

    console.log("deck v");
    console.log(deck);
    console.log("hand v");
    console.log(hand);
    console.log("filtered v");
    console.log(unusableCards);
    console.log("clickableCards v");
    console.log(clickableCards);

    // Replace facedown card to blank when cards run out
    if (deck.length === 0) {
      facedown.innerHTML = "";
      let circle = document.createElement("img");
      circle.src = "../images/circle.webp";
      facedown.appendChild(circle);

      // Check columns for matching pair
      let duplicateCheckArrayColumns = [];

      if (columnA.length > 0) {
        duplicateCheckArrayColumns.push(columnA[columnA.length - 1].month);
      }
      if (columnB.length > 0) {
        duplicateCheckArrayColumns.push(columnB[columnB.length - 1].month);
      }
      if (columnC.length > 0) {
        duplicateCheckArrayColumns.push(columnC[columnC.length - 1].month);
      }
      if (columnD.length > 0) {
        duplicateCheckArrayColumns.push(columnD[columnD.length - 1].month);
      }

      console.log("duplicateCheckArrayColumns v");
      console.log(duplicateCheckArrayColumns);
      // A Set only stores unique values, so if the size of the Set is smaller than the length of the array, there is a duplicate.
      let hasDuplicateColumns =
        new Set(duplicateCheckArrayColumns).size !==
        duplicateCheckArrayColumns.length;

      // Columns not empty and no matching pair in columns
      if (
        columnA.length + columnB.length + columnC.length + columnD.length >
        0
      ) {
        if (hasDuplicateColumns !== true) {
          // Look to see if any of hand cards match the columns
          let handMonths = [];
          if (hand.length !== 0) {
            hand.forEach((x) => {
              handMonths.push(x.month);
            });
          }
          let hasMatch = duplicateCheckArrayColumns.some((item) =>
            handMonths.includes(item)
          );

          console.log("handMonths v");
          console.log(handMonths);
          /// if there is no match between hand and column cards
          if (hasMatch !== true) {
            // Display imposiblle message
            document.getElementById("impossibleOverlay").style.display = "flex";
          } else {
            // else empty the possibility checking arrays
            console.log("still possible");
            duplicateCheckArrayColumns.length = 0;
            handMonths.length = 0;
          }
        } else {
          duplicateCheckArrayColumns.length = 0;
        }
      }
    }
  }
}

////
////
////

////
// Detect changes to DOM to enable event listener to listen live
////
function onDomChange(mutationsList, observer) {
  if (mutationsList.length > 0) {
    hand.forEach((x) => {
      // Purges event listener from hand
      let selector = document.getElementById(`${x.month + x.rank}`);
      selector.removeEventListener("click", checkPair);
    });
    //Assigns event listener to clickable cards from clickableCards array
    clickableCards.forEach((x) => {
      let selector = document.getElementById(`${x.month + x.rank}`);
      selector.addEventListener("click", checkPair);
    });
    if (unusableCards.length > 0) {
      // Greys out cards
      unusableCards.forEach((x) => {
        let selector = document.getElementById(`${x.month + x.rank}`);
        if (!selector.classList.contains("greyed")) {
          selector.classList.add("greyed");
        }
      });
    }
  }
}
// Select the node to observe (e.g., the entire document body)
const targetNode = document.body;
// Set up the observer options
const config = {
  childList: true, // Detect additions and removals of child elements
  attributes: true, // Detect changes to attributes
  subtree: true, // Detect changes in all descendants
};
// Create an instance of MutationObserver and pass in the callback function
const observer = new MutationObserver(onDomChange);
// Start observing the target node with the specified options
observer.observe(targetNode, config);
////
////
////

////
// Piles preparation
////
const divPileA = document.querySelector("#pileA");
const divPileB = document.querySelector("#pileB");
const divPileC = document.querySelector("#pileC");
const divPileD = document.querySelector("#pileD");
/// Target pile div to be used
function targetPileDiv() {
  if (
    pileA.length == pileB.length &&
    pileA.length == pileC.length &&
    pileA.length == pileD.length
  ) {
    return divPileA;
  } else if (pileA.length > pileB.length) {
    return divPileB;
  } else if (pileB.length > pileC.length) {
    return divPileC;
  } else if (pileC.length > pileD.length) {
    return divPileD;
  }
}

// Arrays of piles
let pileA = [];
let pileB = [];
let pileC = [];
let pileD = [];

// Target pile array to be used
function targetPileArray() {
  // 0 0 0 0
  if (
    pileA.length - pileB.length === 0 &&
    pileB.length - pileC.length === 0 &&
    pileC.length - pileD.length === 0
  ) {
    return pileA;
  }
  // 1 0 0 0
  else if (
    pileA.length - pileB.length === 1 &&
    pileB.length - pileC.length === 0 &&
    pileC.length - pileD.length === 0
  ) {
    return pileA;
  }
  // 2 0 0 0
  else if (
    pileA.length - pileB.length === 2 &&
    pileB.length - pileC.length === 0 &&
    pileC.length - pileD.length === 0
  ) {
    return pileB;
  }
  // 2 1 0 0
  else if (
    pileA.length - pileB.length === 1 &&
    pileB.length - pileC.length === 1 &&
    pileC.length - pileD.length === 0
  ) {
    return pileB;
  }
  // 2 2 0 0
  else if (
    pileA.length - pileB.length === 0 &&
    pileB.length - pileC.length === 2 &&
    pileC.length - pileD.length === 0
  ) {
    return pileC;
  }
  // 2 2 1 0
  else if (
    pileA.length - pileB.length === 0 &&
    pileB.length - pileC.length === 1 &&
    pileC.length - pileD.length === 1
  ) {
    return pileC;
  }
  // 2 2 2 0
  else if (
    pileA.length - pileB.length === 0 &&
    pileB.length - pileC.length === 0 &&
    pileC.length - pileD.length === 2
  ) {
    return pileD;
  }
  // 2 2 2 1
  else if (
    pileA.length - pileB.length === 0 &&
    pileB.length - pileC.length === 0 &&
    pileC.length - pileD.length === 1
  ) {
    return pileD;
  }
}
////
////
////

////
// Callback function for clickable cards click event
////
let pair = [];

function checkPair(event) {
  let strToObject = clickableCards.find((strToObject) =>
    strToObject.name.includes(`${event.target.id}`)
  );
  pair.push(strToObject);
  document.getElementById(strToObject.name).classList.add("glowing");
  console.log(pair);
  // Prevents facedown card from being clicked when a card is selected
  facedown.removeEventListener("click", placeCard);
  // When two cards are clicked
  if (pair.length === 2) {
    // if months match and they are not the same cards
    if (pair[0].month === pair[1].month && pair[0].name !== pair[1].name) {
      // Empties the target pile div
      targetPileDiv().innerHTML = "";
      // enters the new img
      let pileImg = document.createElement("img");
      pileImg.classList.add("pileImg");
      targetPileDiv().appendChild(pileImg);
      // Image of second card clicked is displayed
      pileImg.src = pair[1].img;

      // Restructures the spread and hand on display and in arrays
      pair.forEach((x) => {
        //Un-greys newly clickable cards and reinstates previously unusable card to clickable card
        if (unusableCards.length > 0) {
          // if the card removed was the FIRST card in the hand
          if (x.name === hand[0].name) {
            // First card of the greyed out card would be reinstated
            let reinstatedCard = unusableCards.shift();
            document
              .getElementById(reinstatedCard.name)
              .classList.remove("greyed");
            clickableCards.push(reinstatedCard);
          }
          // if the card removed was the LAST card in the hand AND the second-to-last card of greyed cards WAS NOT a match to the last card of greyed cards
          else if (
            x.name === hand[hand.length - 1].name &&
            hand[hand.length - 1].month !== hand[hand.length - 2].month &&
            hand[hand.length - 2].month !== hand[hand.length - 3].month
          ) {
            // Last card of the greyed out card would be reinstated
            let reinstatedCard = unusableCards.pop();
            document
              .getElementById(reinstatedCard.name)
              .classList.remove("greyed");
            clickableCards.push(reinstatedCard);
          }
          // if the card removed was the LAST card in the hand AND the second-to-last card of greyed cards WAS a match to the last card of greyed cards
          else if (
            x.name === hand[hand.length - 1].name &&
            hand[hand.length - 1].month !== hand[hand.length - 2].month &&
            hand[hand.length - 2].month === hand[hand.length - 3].month
          ) {
            let reinstatedCardOne = unusableCards.pop();
            document
              .getElementById(reinstatedCardOne.name)
              .classList.remove("greyed");
            clickableCards.push(reinstatedCardOne);

            let reinstatedCardTwo = unusableCards.pop();
            document
              .getElementById(reinstatedCardTwo.name)
              .classList.remove("greyed");
            clickableCards.push(reinstatedCardTwo);
          } else {
          }
        }
        // Removes paired cards from 4 spread columns arrays or hand arrays AND clickable array AND displays the next card in columns
        if (columnA.includes(x)) {
          let movingCard = columnA.pop();
          targetPileArray().push(movingCard);
          if (columnA.length >= 1) {
            let nextCard = columnA[columnA.length - 1];
            clickableCards.push(nextCard);
            let cardImg = document.getElementById(nextCard.name);
            cardImg.src = nextCard.img;
          }
        } else if (columnB.includes(x)) {
          let movingCard = columnB.pop();
          targetPileArray().push(movingCard);
          if (columnB.length >= 1) {
            let nextCard = columnB[columnB.length - 1];
            clickableCards.push(nextCard);
            let cardImg = document.getElementById(nextCard.name);
            cardImg.src = nextCard.img;
          }
        } else if (columnC.includes(x)) {
          let movingCard = columnC.pop();
          targetPileArray().push(movingCard);
          if (columnC.length >= 1) {
            let nextCard = columnC[columnC.length - 1];
            clickableCards.push(nextCard);
            let cardImg = document.getElementById(nextCard.name);
            cardImg.src = nextCard.img;
          }
        } else if (columnD.includes(x)) {
          let movingCard = columnD.pop();
          targetPileArray().push(movingCard);
          if (columnD.length >= 1) {
            let nextCard = columnD[columnD.length - 1];
            clickableCards.push(nextCard);
            let cardImg = document.getElementById(nextCard.name);
            cardImg.src = nextCard.img;
          }
        } else if (hand.includes(x)) {
          let movingCard = hand.splice(
            hand.findIndex((index) => index === x),
            1
          );
          targetPileArray().push(movingCard[0]);
        }
        if (clickableCards.includes(x)) {
          clickableCards.splice(
            clickableCards.findIndex((index) => index === x),
            1
          );
        }
      });

      console.log("columnA v");
      console.log(columnA);
      console.log("columnB v");
      console.log(columnB);
      console.log("columnC v");
      console.log(columnC);
      console.log("columnD v");
      console.log(columnD);
      console.log("hand v");
      console.log(hand);
      console.log("clickableCards v");
      console.log(clickableCards);
      console.log("pileA v");
      console.log(pileA);
      console.log("pileB v");
      console.log(pileB);
      console.log("pileC v");
      console.log(pileC);
      console.log("pileD v");
      console.log(pileD);

      // Remove card from DOM
      pair.forEach((x) => {
        document.getElementById(x.name).remove();
      });

      // Empties pair array
      pair.length = 0;
      console.log(pair);

      // Reverses "Prevents facedown card from being clicked when a card is selected"
      facedown.addEventListener("click", placeCard);

      // Update DOM when all cards are matched and entered into pile
      if (pileA.length + pileB.length + pileC.length + pileD.length === 48) {
        updateDOMAtEnd();
      }
    }
    // if months don't match
    else if (pair[0].month !== pair[1].month || pair[0].name === pair[1].name) {
      pair.forEach((x) => {
        document.getElementById(x.name).classList.remove("glowing");
      });

      // Empties pair array
      pair.length = 0;
      console.log(pair);

      // Reverses "Prevents facedown card from being clicked when a card is selected"
      facedown.addEventListener("click", placeCard);
    }
    // Prevents pair array from containing more than 2
  } else if (pair.length > 2) {
    // Empties pair array
    pair.length = 0;

    // Reverses "Prevents facedown card from being clicked when a card is selected"
    facedown.addEventListener("click", placeCard);
  }
}
////
////
////

////
// DOM update when all 48 cards are in piles
////
function updateDOMAtEnd() {
  // Remove facedown
  document.getElementById("handContainer").innerHTML = "";
  // Empty spread container and display "click to see result"
  document.getElementById("spreadContainer").innerHTML = "";
  let clickToSeeResult = document.createElement("h4");
  clickToSeeResult.classList.add("clickToSeeResult");
  clickToSeeResult.textContent = "▲	Click to See Result ▲";
  document.getElementById("spreadContainer").appendChild(clickToSeeResult);
  // Make piles glow and clickable
  divPileA.classList.add("glowing");
  divPileB.classList.add("glowing");
  divPileC.classList.add("glowing");
  divPileD.classList.add("glowing");
  divPileA.addEventListener("click", openPile);
  divPileB.addEventListener("click", openPile);
  divPileC.addEventListener("click", openPile);
  divPileD.addEventListener("click", openPile);
}

let fourMatchedAll = [];

function openPile() {
  let monthsPileA = [];
  pileA.forEach((x) => {
    monthsPileA.push(x.month);
  });
  let monthsPileB = [];
  pileB.forEach((x) => {
    monthsPileB.push(x.month);
  });
  let monthsPileC = [];
  pileC.forEach((x) => {
    monthsPileC.push(x.month);
  });
  let monthsPileD = [];
  pileD.forEach((x) => {
    monthsPileD.push(x.month);
  });

  function findItemsAppearingFourTimes(arr) {
    const itemCounts = {};

    // Count occurrences of each item in the array
    for (let item of arr) {
      itemCounts[item] = (itemCounts[item] || 0) + 1;
    }

    // Create an array of objects for items appearing exactly four times
    for (let item in itemCounts) {
      if (itemCounts[item] === 4) {
        fourMatchedAll.push(item);
      }
    }
  }

  findItemsAppearingFourTimes(monthsPileA);
  findItemsAppearingFourTimes(monthsPileB);
  findItemsAppearingFourTimes(monthsPileC);
  findItemsAppearingFourTimes(monthsPileD);

  document.querySelector("#endingOverlay").style.display = "flex";

  let pileAImgDiv = document.querySelector("#pileAImgDiv");
  let pileBImgDiv = document.querySelector("#pileBImgDiv");
  let pileCImgDiv = document.querySelector("#pileCImgDiv");
  let pileDImgDiv = document.querySelector("#pileDImgDiv");

  pileAImgDiv.innerHTML = "";
  pileBImgDiv.innerHTML = "";
  pileCImgDiv.innerHTML = "";
  pileDImgDiv.innerHTML = "";

  pileA.forEach((x) => {
    let resultCardImg = document.createElement("img");
    resultCardImg.classList.add("resultCardClass");
    resultCardImg.src = x.img;
    pileAImgDiv.appendChild(resultCardImg);
  });
  pileB.forEach((x) => {
    let resultCardImg = document.createElement("img");
    resultCardImg.classList.add("resultCardClass");
    resultCardImg.src = x.img;
    pileBImgDiv.appendChild(resultCardImg);
  });
  pileC.forEach((x) => {
    let resultCardImg = document.createElement("img");
    resultCardImg.classList.add("resultCardClass");
    resultCardImg.src = x.img;
    pileCImgDiv.appendChild(resultCardImg);
  });
  pileD.forEach((x) => {
    let resultCardImg = document.createElement("img");
    resultCardImg.classList.add("resultCardClass");
    resultCardImg.src = x.img;
    pileDImgDiv.appendChild(resultCardImg);
  });

  const monthsDiv = document.getElementById("resultMonthsDiv");

  console.log(fourMatchedAll);

  if (fourMatchedAll.length > 0) {
    fourMatchedAll.forEach((x) => {
      monthsDiv.appendChild(document.querySelector(`#${x}`));
    });
  } else {
    let noFourMatchMessage = document.getElementById("emptyMessage");
    noFourMatchMessage.style.display = "block";
  }
}
