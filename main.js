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
const ageRating = document.querySelector('.age');

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
    
    //niggas
    let wordTen = splitVersion.map(function(findTen) {
        return findTen == "niggas";
    });
    let truthTen = wordTen.filter(function(trueTen) {
        return trueTen === true;
    });

    let niggasLength = truthTen.length;

    let total = fuckLength + shitLength + assLength + assholeLength + dickLength + fuckingLength + bitchLength + pussyLength + niggaLength + niggasLength;

    let others = total / mainLength * 100;
    numberOfSwears.textContent = `${total}.0 swears`;
    swearsPerMinute.textContent = `${others}% possibility of a swear`;
    
    if(total <= 7){
        ageRating.textContent = '1.0';
        ageRating.style.backgroundColor = 'white';
    } else if(total > 10){
        ageRating.textContent = '2.5';
        ageRating.style.backgroundColor = 'orange';
    }
    if(total >= 21){
        ageRating.textContent = '3.1';
        ageRating.style.backgroundColor = 'rosybrown';
    }
    if(total > 40){
        ageRating.textContent = '5.0';
        ageRating.style.backgroundColor = 'brown';
    }
    if(total > 60){
        ageRating.textContent = '8.0';
        ageRating.style.backgroundColor = 'brown';
    }
    if(total > 80){
        ageRating.textContent = '10.0';
        ageRating.style.backgroundColor = 'red';
    }
});
