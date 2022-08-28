import ancientsData from "./data/ancients.js";
import green from "./data/mythicCards/green/index.js"
import brown from "./data/mythicCards/brown/index.js"
import blue from "./data/mythicCards/blue/index.js"

const card = document.querySelector('.card');
const card_azathoth = document.querySelector('.card_azathoth');
const card_cthulthu = document.querySelector('.card_cthulthu');
const card_iog_sothoth = document.querySelector('.card_iog-sothoth');
const card_snub_niggurath = document.querySelector('.card_snub_niggurath');

const circle_green_1 = document.querySelector('.circle_green-1');
const circle_brown_1 = document.querySelector('.circle_brown-1');
const circle_blue_1 = document.querySelector('.circle_blue-1');
const circle_green_2 = document.querySelector('.circle_green-2');
const circle_brown_2 = document.querySelector('.circle_brown-2');
const circle_blue_2 = document.querySelector('.circle_blue-2');
const circle_green_3 = document.querySelector('.circle_green-3');
const circle_brown_3 = document.querySelector('.circle_brown-3');
const circle_blue_3 = document.querySelector('.circle_blue-3');

const level_very_easy = document.querySelector('.level_very-easy');
const level_easy = document.querySelector('.level_easy');
const level_normal = document.querySelector('.level_normal');
const level_hard = document.querySelector('.level_hard');
const level_very_hard = document.querySelector('.level_very-hard');

const deck = document.querySelector(".deck");

let difficulty;
let ancient;
let green1, green2, green3;
let blue1, blue2, blue3;
let brown1, brown2, brown3;
let step1 = [];
let step2 = [];
let step3 = [];
let cardActive;

function steps(item) {
    green1 = ancientsData[item].firstStage.greenCards;
    brown1 = ancientsData[item].firstStage.brownCards;
    blue1 = ancientsData[item].firstStage.blueCards;
    green2 = ancientsData[item].secondStage.greenCards;
    brown2 = ancientsData[item].secondStage.brownCards;
    blue2 = ancientsData[item].secondStage.blueCards;
    green3 = ancientsData[item].thirdStage.greenCards;
    brown3 = ancientsData[item].thirdStage.brownCards;
    blue3 = ancientsData[item].thirdStage.blueCards;
    circle_green_1.textContent = green1;
    circle_brown_1.textContent = brown1;
    circle_blue_1.textContent = blue1;
    circle_green_2.textContent = green2;
    circle_brown_2.textContent = brown2;
    circle_blue_2.textContent = blue2;
    circle_green_3.textContent = green3;
    circle_brown_3.textContent = brown3;
    circle_blue_3.textContent = blue3;
    document.querySelector(".first").style.color = "white";
    document.querySelector(".second").style.color = "white";
    document.querySelector(".third").style.color = "white";
    document.querySelector(".deck_show").style.opacity = "0";
}

function active(currentCard) {
    if (cardActive === undefined) {
        cardActive = currentCard
        cardActive.classList.add('card_active')
    } else {
        cardActive.classList.remove('card_active')
        cardActive = currentCard
        currentCard.classList.add('card_active')
    }
}

card_azathoth.onclick = function() {
    let currentCard = this;
    active(currentCard)
    ancient = this.className.split(" ")[2];
    for (let item in ancientsData) {
        if (ancientsData[item].name === ancient) {
            steps(item);
        }
    }
    randomSteps();
}

card_cthulthu.onclick = function() {
    let currentCard = this;
    active(currentCard)
    ancient = this.className.split(" ")[2];
    for (let item in ancientsData) {
        if (ancientsData[item].name === ancient) {
            steps(item);
        }
    }
    randomSteps();
}

card_iog_sothoth.onclick = function() {
    let currentCard = this;
    active(currentCard)
    ancient = this.className.split(" ")[2];
    for (let item in ancientsData) {
        if (ancientsData[item].name === ancient) {
            steps(item);
        }
    }
    randomSteps();
}

card_snub_niggurath.onclick = function() {
    let currentCard = this;
    active(currentCard)
    ancient = this.className.split(" ")[2];
    for (let item in ancientsData) {
        if (ancientsData[item].name === ancient) {
            steps(item);
        }
    }
    randomSteps();
}

// level_very_easy.onclick = function () {
//     difficulty = this.className.split(" ")[1];
//     console.log(difficulty)
// }

deck.addEventListener('click', getCard);

function randomSteps() {
    function randomCard (color, step) {
        let cardFace = color[Math.floor(Math.random() * color.length)].cardFace
        if ((step1.indexOf(cardFace) === -1) && (step2.indexOf(cardFace) === -1) && (step3.indexOf(cardFace) === -1)) {
            step.push(cardFace);
        } else randomCard(color, step)
    }

    for (var i = 0; i < green1; i++) {
        randomCard(green, step1);
    }
    for (var i = 0; i < brown1; i++) {
        randomCard(brown, step1);
    }
    for (var i = 0; i < blue1; i++) {
        randomCard(blue, step1);
    }
    for (var i = 0; i < green2; i++) {
        randomCard(green, step2);
    }
    for (var i = 0; i < brown2; i++) {
        randomCard(brown, step2);
    }
    for (var i = 0; i < blue2; i++) {
        randomCard(blue, step2);
    }
    for (var i = 0; i < green3; i++) {
        randomCard(green, step3);
    }
    for (var i = 0; i < brown3; i++) {
        randomCard(brown, step3);
    }
    for (var i = 0; i < blue3; i++) {
        randomCard(blue, step3);
    }
    console.log(step1)
    console.log(step2)
    console.log(step3)
}

function stepOne() {
    if (step1.length === 0) {
        stepTwo()
        return
        }
    let currentStep = step1;
    let indexStep = Math.floor(Math.random() * currentStep.length);
    let image = currentStep[indexStep];
    let folderColor = image.slice(2,7)
    if (folderColor.slice(0, 2) === 'bl') {
        folderColor = image.slice(2,6)
    }
    document.querySelector(".deck_show").style.opacity = "1";
    document.querySelector(".deck_show").style.backgroundImage = `url('./assets/MythicCards/${folderColor}/${image}')`;
    currentStep.splice(indexStep, 1);
    if (folderColor === 'green') {
        circle_green_1.textContent = --green1;
    }
    if (folderColor === 'brown') {
        circle_brown_1.textContent = --brown1;
    }
    if (folderColor === 'blue') {
        circle_blue_1.textContent = --blue1;
    }
    if ((green1 == 0) && (brown1 == 0) && (blue1 == 0)) {
        document.querySelector('.first').style.color = "red";
    }
}

function stepTwo() {
    if (step2.length === 0) {
        stepThird();
        return
    }
    let indexStep = Math.floor(Math.random() * step2.length);
    let image = step2[indexStep];
    let folderColor = image.slice(2,7)
    if (folderColor.slice(0, 2) === 'bl') {
        folderColor = image.slice(2,6)
    }
    document.querySelector(".deck_show").style.opacity = "1";
    document.querySelector(".deck_show").style.backgroundImage = `url('./assets/MythicCards/${folderColor}/${image}')`;
    step2.splice(indexStep, 1);
    if (folderColor === 'green') {
        circle_green_2.textContent = --green2;
    }
    if (folderColor === 'brown') {
        circle_brown_2.textContent = --brown2;
    }
    if (folderColor === 'blue') {
        circle_blue_2.textContent = --blue2;
    }
    if ((green2 == 0) && (brown2 == 0) && (blue2 == 0)) {
        document.querySelector('.second').style.color = "red";
    }
}

function stepThird() {
    if (step3.length === 0) {
        return
    }
    let indexStep = Math.floor(Math.random() * step3.length);
    let image = step3[indexStep];
    let folderColor = image.slice(2,7)
    if (folderColor.slice(0, 2) === 'bl') {
        folderColor = image.slice(2,6)
    }
    document.querySelector(".deck_show").style.opacity = "1";
    document.querySelector(".deck_show").style.backgroundImage = `url('./assets/MythicCards/${folderColor}/${image}')`;
    step3.splice(indexStep, 1);
    if (folderColor === 'green') {
        circle_green_3.textContent = --green3;
    }
    if (folderColor === 'brown') {
        circle_brown_3.textContent = --brown3;
    }
    if (folderColor === 'blue') {
        circle_blue_3.textContent = --blue3;
    }
    if ((green3 == 0) && (brown3 == 0) && (blue3 == 0)) {
        document.querySelector('.third').style.color = "red";
    }
}

function getCard() {
    stepOne();
}