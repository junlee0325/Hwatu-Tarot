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
    visibleCard.classList.add("scaleOnClick");
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
    visibleCard.classList.add("scaleOnClick");
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
    visibleCard.classList.add("scaleOnClick");
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
    visibleCard.classList.add("scaleOnClick");
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
  console.log("000000 START 00000");
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
console.log("00000000000000000000000000000000000000000000000000");
////
////
////

////
// Deck and hand displayed when facedown card is clicked
////
const facedown = document.getElementById("facedown");
const visibleHandContainer = document.getElementById("visibleHandContainer");
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
    // Stop circle bounce
    facedown.classList.remove("bounce");
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
    console.log("000000 Deck Cycled 00000");
    console.log("deck v");
    console.log(deck);
    console.log("hand v");
    console.log(hand);
    console.log("clickableCards v");
    console.log(clickableCards);
    console.log("00000000000000000000000000000000000000000000000000");

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
  else if (deck.length === 0 && hand.length === 0) {
    document.getElementById("handContainer").innerHTML = "";
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

    console.log("000000 Facedown Pressed 00000");
    console.log("deck v");
    console.log(deck);
    console.log("hand v");
    console.log(hand);
    console.log("unusableCards v");
    console.log(unusableCards);
    console.log("clickableCards v");
    console.log(clickableCards);
    console.log("lastTwoHand v");
    console.log(lastTwoHand);
    console.log("00000000000000000000000000000000000000000000000000");

    //
    // Replace facedown card to blank when cards run out
    if (deck.length === 0) {
      facedown.innerHTML = "";
      let circle = document.createElement("img");
      circle.src = "../images/circle.webp";
      facedown.appendChild(circle);
      // Make circle bounce
      facedown.classList.add("bounce");

      //
      // Check columns for matching pair
      let duplicateCheckArrayColumns = [];
      // if a column is not empty, the displayed card at the end is put into the duplicateCheckArrayColumns
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

      console.log("000000 Check Solvable 00000");
      console.log("duplicateCheckArrayColumns v");
      console.log(duplicateCheckArrayColumns);
      // A Set only stores unique values, so if the size of the Set is smaller than the length of the array, there is a duplicate.
      let noMatchInColumns =
        new Set(duplicateCheckArrayColumns).size ===
        duplicateCheckArrayColumns.length;
      // At least 1 column available and no matching pair in columns
      if (duplicateCheckArrayColumns.length !== 0) {
        // if column cards are of different months
        if (noMatchInColumns == true) {
          // Look to see if any of hand cards match the columns
          let handMonths = [];
          if (hand.length !== 0) {
            hand.forEach((x) => {
              handMonths.push(x.month);
            });
          } else {
            // if hand is empty, a decoy is added so there is at least something to check against
            handMonths.push("decoy");
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
            console.log("Still Possible");
            console.log("00000000000000000000000000000000000000000000000000");
            duplicateCheckArrayColumns.length = 0;
            handMonths.length = 0;
          }
        } else {
          console.log("Still Possible");
          console.log("00000000000000000000000000000000000000000000000000");
          duplicateCheckArrayColumns.length = 0;
        }
      }
    }
  }
}

////
////
////

///
/// this is used in checkPair function but is set up here so onDomChange can change it live
///
let lastTwoHand = [];
///
///
///

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
    // Assigns event listener to clickable cards from clickableCards array
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
    // Clear out lastTwoHand and update. Only fires when hand.length > 2 to avoid undefined
    lastTwoHand.length = 0;
    if (hand.length >= 2) {
      lastTwoHand.push(hand[hand.length - 2]);
      lastTwoHand.push(hand[hand.length - 1]);
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
  // Looks at DOM element id (which is a string) and turns it into an object of same name
  let strToObject = clickableCards.find((strToObject) =>
    strToObject.name.includes(`${event.target.id}`)
  );
  pair.push(strToObject);
  document.getElementById(strToObject.name).classList.add("glowing");

  // Console log objects in pair
  console.log("pair v");  
  console.log(pair);
  console.log("00000000000000000000000000000000000000000000000000");

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

      //
      // Reinstates cards from usuableCards to clickableCards and un-greys them
      //
      // if there is 1 greyed out card
      if (unusableCards.length === 1) {
        // if the one or both cards in pair is from hand
        if (hand.includes(pair[0]) || hand.includes(pair[1])) {
          let reinstatedCard = unusableCards.shift();
          document
            .getElementById(reinstatedCard.name)
            .classList.remove("greyed");
          clickableCards.push(reinstatedCard);
        }
      }
      //
      // if there is more than 1 greyed out card
      else if (unusableCards.length > 1) {
        //
        // if the pair are the LAST TWO of the hand (implying the last two were of same months)
        if (lastTwoHand.includes(pair[0]) && lastTwoHand.includes(pair[1])) {
          // a bcde FF or a bcdef FF
          // reinstated one
          let reinstatedCard = unusableCards.pop();
          document
            .getElementById(reinstatedCard.name)
            .classList.remove("greyed");
          clickableCards.push(reinstatedCard);
          // a bcdee FF or a bcdeff FF
          // reinstate another
          if (hand[hand.length - 3].month === hand[hand.length - 4].month) {
            let reinstatedCard = unusableCards.pop();
            document
              .getElementById(reinstatedCard.name)
              .classList.remove("greyed");
            clickableCards.push(reinstatedCard);
          }
        //
        // if only one of the pair card is from hand or if one is the FIRST of hand OR LAST of hand OR SECOND-FROM-LAST (not LAST *AND* SECOND-FROM-LAST)
        } else {
          // This runs twice
          pair.forEach((x) => {
            //
            // if one of the pair card is the FIRST of hand
            if (x.name === hand[0].name) {
              // reinstate the first card of the unusableCards into clickableCards
              let reinstatedCard = unusableCards.shift();
              document
                .getElementById(reinstatedCard.name)
                .classList.remove("greyed");
              clickableCards.push(reinstatedCard);
            //
            // if one of the pair card is the LAST of hand
            } else if (x.name === hand[hand.length - 1].name) {
              // a bcde F
              // reinstated one card from the end of hand from unusableCards into clickableCards
              if (hand[hand.length - 1].month !== hand[hand.length - 2].month) {
                let reinstatedCard = unusableCards.pop();
                document
                  .getElementById(reinstatedCard.name)
                  .classList.remove("greyed");
                clickableCards.push(reinstatedCard);
                // a bcdee F
                // reinstated another card from the end of hand from unusableCards into clickableCards
                if (
                  hand[hand.length - 2].month === hand[hand.length - 3].month
                ) {
                  let reinstatedCard = unusableCards.pop();
                  document
                    .getElementById(reinstatedCard.name)
                    .classList.remove("greyed");
                  clickableCards.push(reinstatedCard);
                }
              } else {
                // a bcde fF or a bcdee fF do nothing
              }
            } else if (x.name === hand[hand.length - 2].name) {
              // a bcde Ff do nothing
              // a bcdee Ff do nothing
              // a bcdef Ff or a bcdeff Ff
              // reinstated one card from the end of hand from unusableCards into clickableCards
              if (hand[hand.length - 2].month === hand[hand.length - 3].month) {
                let reinstatedCard = unusableCards.pop();
                document
                  .getElementById(reinstatedCard.name)
                  .classList.remove("greyed");
                clickableCards.push(reinstatedCard);
              }
            }
          });
        }
      }

      

      // Restructures the spread and hand on display and in arrays
      // This runs twice since it's a PAIR
      pair.forEach((x) => {
        // Removes paired cards from 4 spread columns arrays or hand arrays AND clickable array AND displays the next card in columns
        if (columnA.includes(x)) {
          let movingCard = columnA.pop();
          targetPileArray().push(movingCard);
          if (columnA.length >= 1) {
            let nextCard = columnA[columnA.length - 1];
            clickableCards.push(nextCard);
            let cardImg = document.getElementById(nextCard.name);
            cardImg.src = nextCard.img;
            cardImg.classList.add("scaleOnClick");
          }
        } else if (columnB.includes(x)) {
          let movingCard = columnB.pop();
          targetPileArray().push(movingCard);
          if (columnB.length >= 1) {
            let nextCard = columnB[columnB.length - 1];
            clickableCards.push(nextCard);
            let cardImg = document.getElementById(nextCard.name);
            cardImg.src = nextCard.img;
            cardImg.classList.add("scaleOnClick");
          }
        } else if (columnC.includes(x)) {
          let movingCard = columnC.pop();
          targetPileArray().push(movingCard);
          if (columnC.length >= 1) {
            let nextCard = columnC[columnC.length - 1];
            clickableCards.push(nextCard);
            let cardImg = document.getElementById(nextCard.name);
            cardImg.src = nextCard.img;
            cardImg.classList.add("scaleOnClick");
          }
        } else if (columnD.includes(x)) {
          let movingCard = columnD.pop();
          targetPileArray().push(movingCard);
          if (columnD.length >= 1) {
            let nextCard = columnD[columnD.length - 1];
            clickableCards.push(nextCard);
            let cardImg = document.getElementById(nextCard.name);
            cardImg.src = nextCard.img;
            cardImg.classList.add("scaleOnClick");
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

      console.log("000000 Pair Matched 00000");
      console.log("pileA v");
      console.log(pileA);
      console.log("pileB v");
      console.log(pileB);
      console.log("pileC v");
      console.log(pileC);
      console.log("pileD v");
      console.log(pileD);
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
      console.log("unusableCards v");
      console.log(unusableCards);
      console.log("lastTwoHand v")
      console.log(lastTwoHand)
      console.log("00000000000000000000000000000000000000000000000000");

      // Remove card from DOM
      pair.forEach((x) => {
        document.getElementById(x.name).remove();
      });

      // Empty pair array for the next pair
      pair.length = 0;

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

      // Empty pair array for the next pair
      pair.length = 0;
      console.log("Not a Match");

      // Reverses "Prevents facedown card from being clicked when a card is selected"
      facedown.addEventListener("click", placeCard);
    }
    // Prevents pair array from containing more than 2
  } else if (pair.length > 2) {
      // Empty pair array for the next pair
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
  document.getElementById("spreadA").remove();
  document.getElementById("spreadB").remove();
  document.getElementById("spreadC").remove();
  document.getElementById("spreadD").remove();
  document.getElementById("clickToSeeResult").style.display = "block";
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

// Array of four of a kind months
let fourMatchedAll = [];

// Pushes the months of all the cards in the piles into new arrays
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

  // Filters out four of a kind months into fourMatchedAll
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

  // Displays the result pop-up
  document.querySelector("#endingOverlay").style.display = "flex";

  // Displays all the cards from each pile
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

  // Displays the four of a kind months and meaning
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
////
////
////

////
// English/Korean options
////
document
  .getElementById("infoLanguageButton")
  .addEventListener("click", changeLanguage);

document
  .getElementById("resultLanguageButton")
  .addEventListener("click", changeLanguage);

// Default language is English
let isEnglish = true;

function changeLanguage() {
  // if page is in English
  if (isEnglish === true) {
    isEnglish = false;
    console.log("language: Korean");
    document.getElementById("resultTitle").textContent = "결과/풀이";
    document.getElementById("emptyMessage").textContent =
      "같은 달의 패 4장이 모으지 못했습니다. 다시 시도 하십시오";
    document.getElementById("resultCloseButton").textContent = "다시 하기";
    document.getElementById("infoTitle").textContent = "화투점 설명서";
    document.getElementById("paragraphOne").textContent =
      "화투 패 48장은 12개월로 달을 나누고, 각 달에 해당하는 패 4장으로 구성됩니다. 각 달과 그 달의 운세의 의미는 하단에 위치합니다. 간단히 말하자면 패를 같은 달로 짝지어 모으시면 됩니다. 같은 달의 패 4장이 한 더미에 모두 모이면, 그 달이 오늘의 운세를 나타냅니다.";
    document.getElementById("paragraphThree").innerHTML =
    `<li>같은 달의 패 2개를 선택하면 위에 더미로 이동합니다.</li>
        <li>사용 불가한 패는 반투명으로 표시됩니다.</li>
        <li>빛나는 뒷면 패를 선택하면 화투 1장씩 뽑힙니다.</li>
        <li>덱(deck)이 소진 될때까지 패가 순환 됩니다.</li>
        <li>모든 48개의 패가 모아지면 결과를 확인합니다.</li>
        <li>패를 모두 모으는 것이 불가능한 경우도 존재합니다.</li>`;
    document.getElementById("infoCloseButton").textContent = "진행하기";
    document.getElementById("impossibleTitle").textContent =
      "패를 모두 모으는 것이 불가능합니다. 다시 시도 하십시오";
    document.getElementById("impossibleResetButton").textContent = "다시 하기";
    document.getElementById("impossibleCloseButton").textContent = "닫기";
    document.getElementById("clickToSeeResult").textContent =
      "▲ 결과/풀이 보기 ▲";
    document.getElementById("janMeaning").textContent = "소식을 듣는다";
    document.getElementById("febMeaning").textContent = "애인을 만난다";
    document.getElementById("marMeaning").textContent = "나들이를 한다";
    document.getElementById("aprMeaning").textContent =
      "주변인과 가벼운 다툼이 있다";
    document.getElementById("mayMeaning").textContent =
      "외식을 하던가 사람을 만난다";
    document.getElementById("junMeaning").textContent = "기쁜 일이 생긴다";
    document.getElementById("julMeaning").textContent = "뜻밖에 횡재를 한다";
    document.getElementById("augMeaning").textContent = "돈이 들어온다";
    document.getElementById("sepMeaning").textContent = "술 마실 일이 생긴다";
    document.getElementById("octMeaning").textContent = "근심 걱정이 생긴다";
    document.getElementById("novMeaning").textContent =
      "돈을 쓰거나 돈 나갈 일이 생긴다";
    document.getElementById("decMeaning").textContent = "손님이 찾아온다";
  } else if (isEnglish !== true) {
    // if page is in English
    isEnglish = true;
    console.log("language: English");
    document.getElementById("resultTitle").textContent = "Results";
    document.getElementById("emptyMessage").textContent =
      "No Four of a Kind. Please Try Again.";
    document.getElementById("resultCloseButton").textContent = "Play Again";
    document.getElementById("infoTitle").textContent = "Hwatu Tarot Guide";
    document.getElementById("paragraphOne").textContent =
      "Hwatu card deck has 48 cards. There are 12 kinds with 4 cards each. Simply put, pair similar cards until the spread is empty. The 12 kinds and their meanings mentioned above are shown below. If all 4 cards of a kind are in a same pile, that kind is your fortune for the day.";
    document.getElementById("paragraphThree").innerHTML =
      `<li>Select 2 cards of the same kind to move them to the piles.</li>
					<li>Unusable cards will be half visible.</li>
					<li>Press the glowing face-down card to pull out a card.</li>
					<li>Deck will be cycled until empty.</li>
          <li>When all 48 cards are in the piles, you can check your result.</li>
					<li>If the spread is impossible to empty, simply try again.</li>`;
    document.getElementById("infoCloseButton").textContent = "Continue";
    document.getElementById("impossibleTitle").textContent =
      "Unsolvable Spread. Please Try Again";
    document.getElementById("impossibleResetButton").textContent = "Play Again";
    document.getElementById("impossibleCloseButton").textContent = "Close";
    document.getElementById("clickToSeeResult").textContent =
      "▲ Click to See Result ▲";

    document.getElementById("janMeaning").textContent =
      "Receive news or tidings";
    document.getElementById("febMeaning").textContent = "Meet your beloved";
    document.getElementById("marMeaning").textContent =
      "Set out on a brief journey";
    document.getElementById("aprMeaning").textContent =
      "Experience a minor conflict";
    document.getElementById("mayMeaning").textContent =
      "Dine out or meet with someone";
    document.getElementById("junMeaning").textContent =
      "Welcome a happy occasion";
    document.getElementById("julMeaning").textContent =
      "Stumble upon an unexpected windfall";
    document.getElementById("augMeaning").textContent = "Acquire money";
    document.getElementById("sepMeaning").textContent =
      "Encounter an occasion for a drink";
    document.getElementById("octMeaning").textContent =
      "Face worries or concerns";
    document.getElementById("novMeaning").textContent =
      "Spend money or come across an expense";
    document.getElementById("decMeaning").textContent = "Have a visitor";
  }
}
