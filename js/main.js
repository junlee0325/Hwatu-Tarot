//Individual cards are made in to objects
const janA = { month: "jan" , rank: "A" , img: "../images/janA.png" }
const janB = { month: "jan" , rank: "B" , img: "../images/janB.png" }
const janC = { month: "jan" , rank: "C" , img: "../images/janC.png" }
const janD = { month: "jan" , rank: "D" , img: "../images/janD.png" }
const febA = { month: "feb" , rank: "A" , img: "../images/febA.png" }
const febB = { month: "feb" , rank: "B" , img: "../images/febB.png" }
const febC = { month: "feb" , rank: "C" , img: "../images/febC.png" }
const febD = { month: "feb" , rank: "D" , img: "../images/febD.png" }
const marA = { month: "mar" , rank: "A" , img: "../images/marA.png" }
const marB = { month: "mar" , rank: "B" , img: "../images/marB.png" }
const marC = { month: "mar" , rank: "C" , img: "../images/marC.png" }
const marD = { month: "mar" , rank: "D" , img: "../images/marD.png" }
const aprA = { month: "apr" , rank: "A" , img: "../images/aprA.png" }
const aprB = { month: "apr" , rank: "B" , img: "../images/aprB.png" }
const aprC = { month: "apr" , rank: "C" , img: "../images/aprC.png" }
const aprD = { month: "apr" , rank: "D" , img: "../images/aprD.png" }
const mayA = { month: "may" , rank: "A" , img: "../images/mayA.png" }
const mayB = { month: "may" , rank: "B" , img: "../images/mayB.png" }
const mayC = { month: "may" , rank: "C" , img: "../images/mayC.png" }
const mayD = { month: "may" , rank: "D" , img: "../images/mayD.png" }
const junA = { month: "jun" , rank: "A" , img: "../images/junA.png" }
const junB = { month: "jun" , rank: "B" , img: "../images/junB.png" }
const junC = { month: "jun" , rank: "C" , img: "../images/junC.png" }
const junD = { month: "jun" , rank: "D" , img: "../images/junD.png" }
const julA = { month: "jul" , rank: "A" , img: "../images/julA.png" }
const julB = { month: "jul" , rank: "B" , img: "../images/julB.png" }
const julC = { month: "jul" , rank: "C" , img: "../images/julC.png" }
const julD = { month: "jul" , rank: "D" , img: "../images/julD.png" }
const augA = { month: "aug" , rank: "A" , img: "../images/augA.png" }
const augB = { month: "aug" , rank: "B" , img: "../images/augB.png" }
const augC = { month: "aug" , rank: "C" , img: "../images/augC.png" }
const augD = { month: "aug" , rank: "D" , img: "../images/augD.png" }
const sepA = { month: "sep" , rank: "A" , img: "../images/sepA.png" }
const sepB = { month: "sep" , rank: "B" , img: "../images/sepB.png" }
const sepC = { month: "sep" , rank: "C" , img: "../images/sepC.png" }
const sepD = { month: "sep" , rank: "D" , img: "../images/sepD.png" }
const octA = { month: "oct" , rank: "A" , img: "../images/octA.png" }
const octB = { month: "oct" , rank: "B" , img: "../images/octB.png" }
const octC = { month: "oct" , rank: "C" , img: "../images/octC.png" }
const octD = { month: "oct" , rank: "D" , img: "../images/octD.png" }
const novA = { month: "nov" , rank: "A" , img: "../images/novA.png" }
const novB = { month: "nov" , rank: "B" , img: "../images/novB.png" }
const novC = { month: "nov" , rank: "C" , img: "../images/novC.png" }
const novD = { month: "nov" , rank: "D" , img: "../images/novD.png" }
const decA = { month: "dec" , rank: "A" , img: "../images/decA.png" }
const decB = { month: "dec" , rank: "B" , img: "../images/decB.png" }
const decC = { month: "dec" , rank: "C" , img: "../images/decC.png" }
const decD = { month: "dec" , rank: "D" , img: "../images/decD.png" }

const date = new Date();

let dd = date.getDate();
let mm = date.getMonth() + 1;
let yyyy = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${dd}-${mm}-${yyyy}`;
document.querySelector("#date").textContent = `${currentDate}`

//original deck of cards that is not shuffled
let orderedDeck = [janA,janB,janC,janD,febA,febB,febC,febD,marA,marB,marC,marD,aprA,aprB,aprC,aprD,mayA,mayB,mayC,mayD,junA,junB,junC,junD,julA,julB,julC,julD,augA,augB,augC,augD,sepA,sepB,sepC,sepD,octA,octB,octC,octD,novA,novB,novC,novD,decA,decB,decC,decD]

//shuffle original deck
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
}
let deck = shuffle(orderedDeck)
console.log(deck)

let aaa = document.createElement("img")
aaa.src = "../images/back.png"
document.querySelector("#pileA").appendChild(aaa)

let newDeck = []

aaa.addEventListener("click", turn)

function turn() {
    aaa.src = deck[0].img
}

/*function remove() {
    let selectedCard = deck.shift()
    newDeck.push(selectedCard)
    console.log(newDeck)
    aaa.src = deck[0].img
    console.log(deck)
}*/