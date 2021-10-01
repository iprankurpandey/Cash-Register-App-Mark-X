const cashAmount = document.querySelector('#cashamount')
const billAmount = document.querySelector('#billamount')
const button = document.querySelector('#calculate')
const noOfNotes = document.querySelectorAll('.noofnotes')
const outputText = document.querySelector('#output-text')
const form = document.querySelector('#form')
const body = document.querySelector('.container')
const image = 'https://media.giphy.com/media/d2YMJ481F8qqs/giphy.gif'
var notes = [2000, 500, 100, 20, 10, 5, 1]

function checkValidAmount() {



	const remainingAmount = Number(cashAmount.value) - Number(billAmount.value)
	displayMessage('amount to be returned :' + remainingAmount)
	calculateNotes(remainingAmount)
	if (remainingAmount < 0) {
		displayMessage('wash plates' )
		document.body.style.backgroundImage = "url('https://media.giphy.com/media/d2YMJ481F8qqs/giphy.gif')"
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundPosition = 'inline'
	}
	else {

		displayMessage('amount to be returned :' + remainingAmount)

	}
}

function displayClear() {
	form.reset()
}

function calculateNotes(remainingAmount) {
	for (index = 0; index < notes.length; index++) {
		console.log(notes[index])
		const amountToBeReturned = Math.trunc(Number(remainingAmount) / Number(notes[index]))
		console.log(amountToBeReturned)
		remainingAmount = remainingAmount % notes[index]
		noOfNotes[index].innerHTML = amountToBeReturned
	}
}
function displayMessage(message) {
	outputText.innerHTML = message;
}
button.addEventListener('click', checkValidAmount)