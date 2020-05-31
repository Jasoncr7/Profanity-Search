/* let words = ["Hello", "Good", "Boy", "Hello", "Again", "Once", "Hello"];

const aWord = words.map(function(find) {
    return find === "Hello";
})
console.log(aWord);

const theTruth = aWord.filter(function(truthy) {
    return truthy === true;
})

console.log(theTruth);

console.log(theTruth.length); */

const textArea = document.querySelector('textarea');
const button = document.querySelector('.btn');
const numberOfSwears = document.querySelector('.nos');
const swearsPerMinute = document.querySelector('.spm');

button.addEventListener('click', (event) => {
    let string = textArea.value.toLowerCase();
    let splitVersion = string.split(" ");
    let mainLength = splitVersion.length;

    let wordOne = splitVersion.map(function(findOne) {
        return findOne == "fuck";
    });

    let truthOne = wordOne.filter(function(trueOne) {
        return trueOne === true;
    });

    let fuckLength = truthOne.length;

    //Find Shit
    let wordTwo = splitVersion.map(function(findTwo) {
        return findTwo == "shit";
    });

    let truthTwo = wordTwo.filter(function(trueTwo) {
        return trueTwo === true;
    });

    let shitLength = truthTwo.length;

    // Asshole
    let wordThree = splitVersion.map(function(findThree) {
        return findThree == "asshole";
    });

    let truthThree = wordThree.filter(function(trueThree) {
        return trueThree === true;
    });

    let assholeLength = truthThree.length;

    //Ass
    let wordFour = splitVersion.map(function(findFour) {
        return findFour == "ass";
    });

    let truthFour = wordFour.filter(function(trueFour) {
        return trueFour === true;
    });

    let assLength = truthFour.length;

    //Dick
    let wordFive = splitVersion.map(function(findFive) {
        return findFive == "dick";
    });

    let truthFive = wordFive.filter(function(trueFive) {
        return trueFive === true;
    });

    let dickLength = truthFive.length;

    //fucking
    let wordSix = splitVersion.map(function(findSix) {
        return findSix == "fucking";
    });

    let truthSix = wordSix.filter(function(trueSix) {
        return trueSix === true;
    });

    let fuckingLength = truthSix.length;

    //bitch
    let wordSeven = splitVersion.map(function(findSeven) {
        return findSeven == "bitch";
    });

    let truthSeven = wordSeven.filter(function(trueSeven) {
        return trueSeven === true;
    });

    let bitchLength = truthSeven.length;

    //pussy
    let wordEight = splitVersion.map(function(findEight) {
        return findEight == "pussy";
    });

    let truthEight = wordEight.filter(function(trueEight) {
        return trueEight === true;
    });

    let pussyLength = truthEight.length;

    //nigga
    let wordNine = splitVersion.map(function(findNine) {
        return findNine == "nigga";
    });

    let truthNine = wordNine.filter(function(trueNine) {
        return trueNine === true;
    });

    let niggaLength = truthNine.length;

    let total = fuckLength + shitLength + assLength + assholeLength + dickLength + fuckingLength + bitchLength + pussyLength + niggaLength;

    let others = total / mainLength * 100;
    numberOfSwears.textContent = `${total}.0 swears`;
    swearsPerMinute.textContent = `${others}% possibility of a swear`
});