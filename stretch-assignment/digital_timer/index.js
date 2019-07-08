
const msTens = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');
const secondOnes = document.querySelector('#secondOnes');
const secondTens = document.querySelector('#secondTens');


// accumulators
let msTensAccum = 0;
let msHundredsAccum = 0;
let secondOnesAccum = 0;
let secondTensAccum = 0;

    // begin timer
    function plusMsTens() {
        msTensAccum++;
        // display msTens
        if (msTensAccum < 9) {
            msTens.textContent = `${msTensAccum}`;
        } else {
            msTens.textContent = `0`;
            plusMsHundreds();
        }
    }

    function plusMsHundreds() {
        msHundredsAccum++;
        // display msHundreds
        if (msHundredsAccum < 9) {
            msHundreds.textContent = `${msHundredsAccum}`;
        } else {
            plusSecondOnes();
            msHundreds.textContent = `0`;
        }
    }

    function plusSecondOnes() {
        secondOnesAccum++;
        // display secondOnes
        if (secondOnesAccum < 9) {
        secondOnes.textContent = `${secondOnesAccum}`;
        } else {
        plusSecondTens();  // call secondTens function
        secondOnes.textContent = `0`;
        }
    }

    function plusSecondTens() {
        secondTensAccum++;
        // display secondTens
        if (secondTensAccum < 9) {
            secondTens.textContent = `${secondTensAccum}`;
            } else {
            clearInterval(intervalID);
        }
    }


const intervalID = window.setInterval(plusMsTens, 10);

