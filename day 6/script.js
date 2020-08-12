let h1 = document.querySelector('.display-4');
let p = document.querySelector('.description');
let input = document.querySelector('#input');
let trivia = document.querySelector('.trivia');
let year = document.querySelector('.year');
let number = document.querySelector('.number');

trivia.addEventListener('click', fetchTrivia);
year.addEventListener('click', fetchYear);
number.addEventListener('click', fetchNumber);

function fetchTrivia() {
    input.addEventListener('input', fetchTrivia)
    let inputValue = input.value;
    try {
        fetch('http://numbersapi.com/' + inputValue + '/trivia')
            .then(response => response.text())
            .then(data => {
                h1.innerHTML = 'Trivia - ' + inputValue;
                p.innerHTML = data;

            })
    } catch (error) {
        console.log(error);
    }

}

function fetchYear() {
    input.addEventListener('input', fetchYear)
    let inputValue = input.value;
    try {
        fetch('http://numbersapi.com/' + inputValue + '/year')
            .then(response => response.text())
            .then(data => {
                h1.innerHTML = 'Year Fact - ' + inputValue;
                p.innerHTML = data;
            })
    } catch (error) {
        console.log(error);
    }

}

function fetchNumber() {
    input.addEventListener('input', fetchNumber)
    let inputValue = input.value;
    try {
        fetch('http://numbersapi.com/' + inputValue + '/math')
            .then(response => response.text())
            .then(data => {
                h1.innerHTML = 'Number Fact - ' + inputValue;
                p.innerHTML = data;
            })
    } catch (error) {
        console.log(error);
    }

}