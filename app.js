const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton =document.querySelector('#check-button');
const errorMessage = document.querySelector('#error-message');
const noOfNotes = document.querySelector('#no-of-notes');

const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", function validateBillandCashAmount(){
    hidemessage();
    if(billAmount.value >0){
        if (cashGiven.value >= billAmount.value ){
            const amountToBeReturned = cashGiven.value -billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            showerrorMessage('do you want to wash plates')
        }

    }
    else{
        showerrorMessage('invalid bill amount');
    }
})
function calculateChange(amountToBeReturned){
    for (let i=0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[0])
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;
    }

}
function hidemessage(){
errorMessage.style.display = 'none'
}
function showerrorMessage (message){
    errorMessage.style.display = 'block';
    errorMessage.innerText = message;
}