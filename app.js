const cashAmount = document.querySelector('#cashamount')
const billAmount = document.querySelector('#billamount')
const button = document.querySelector('#calculate')
const noOfNotes = document.querySelectorAll('.noofnotes')
const outputText = document.querySelector('#output-text')
var notes = [2000, 500, 100, 20, 10, 5, 1]

function checkValidAmount()
{

 if (cashAmount.value > 0)
 {
   if(cashAmount.value > billAmount.value)
   {
    checkAmount()
   }
   else
   {
     displayMessage('please wash plates')
   }
 }
}

function checkAmount() {
  const remainingAmount = Number(cashAmount.value) - Number(billAmount.value)
  outputText.innerHTML = remainingAmount;
  calculateNotes(remainingAmount) 
  return remainingAmount;
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
 function displayMessage(message){
   outputText.innerHTML = message;
 }
button.addEventListener('click', checkValidAmount)