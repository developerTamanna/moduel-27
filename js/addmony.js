document.getElementById('add-mony')
.addEventListener('click', function(event){

event.preventDefault();
const amount = document.getElementById('amount').value;
const converTedAmount = parseFloat(amount)
// console.log(amount);
const pin = document.getElementById('pin-number').value;
const convertedPin = parseInt(pin);
const mainBalance = document.getElementById('main-balance').innerText;
// console.log(typeof mainBalance);
const covertMainBalance = parseFloat(mainBalance);

   if(convertedPin === 1234){
    // console.log('ad to mony');
    const sum = covertMainBalance + converTedAmount;
    // console.log(sum);
    document.getElementById('main-balance').innerText = sum;
   }
   else{
    console.log('Mony is not add , wrong pin')
   }
})