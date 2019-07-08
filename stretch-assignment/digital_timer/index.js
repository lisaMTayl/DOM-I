
const msTens = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');
const secondOnes = document.querySelector('#secondOnes');
const secondTens = document.querySelector('#secondTens');


// accumulators
let msTensAccum = 1;
let msHundredsAccum = 1;
let secondOnesAccum = 1;
let secondTensAccum = 1;

    // begin timer
    function plusMsTens() {
        msTensAccum++;
        // display msTens
        if (msTensAccum < 10) {
            msTens.textContent = `${msTensAccum}`;
        } else {
            msTens.textContent = `0`;
            plusMsHundreds();
        }
    }

    function plusMsHundreds() {
        msHundredsAccum++;
        // display msHundreds
        if (msHundredsAccum < 10) {
            msHundreds.textContent = `${msHundredsAccum}`;
        } else {
            plusSecondOnes();
            msHundreds.textContent = `0`;
        }
    }

    function plusSecondOnes() {
        secondOnesAccum++;
        // display secondOnes
        if (secondOnesAccum < 10) {
        secondOnes.textContent = `${secondOnesAccum}`;
        } else {
        plusSecondTens();  // call secondTens function
        secondOnes.textContent = `0`;
        }
    }

    function plusSecondTens() {
        secondTensAccum++;
        // display secondTens
        if (secondTensAccum <= 10) {
            secondTens.textContent = `${secondTensAccum}`;
            } else {
            clearInterval(intervalID);
        }
    }


const intervalID = window.setInterval(plusMsTens, 10);

