document.getElementById('add-mony-1').addEventListener('click', function(event){

event.preventDefault();
const amount = document.getElementById('amount-add').value;
const converTedAmount = parseFloat(amount)
// console.log(amount);
const pin = document.getElementById('pin-number').value;
const convertedPin = parseInt(pin);
const mainBalance = document.getElementById('main-balance-add');
// console.log(typeof mainBalance);
const covertMainBalance = parseFloat(mainBalance.innerText);
const acountNumber = document.getElementById('account-number').value;


  if(acountNumber.length === 11){
   // console.log('ok')
   if(convertedPin === 1234){
      // console.log('ad to money');
      console.log(converTedAmount, covertMainBalance)
      const sum = converTedAmount + covertMainBalance;
      console.log(sum)
      mainBalance.innerText = sum;
   }
   else{
      alert('wrong pin');
   }
  }
  else{
   console.log('Mony is not add , wrong pin')
  }
   // if(convertedPin === 1234){
   //  // console.log('ad to mony');
   //  const sum = converTedAmount + covertMainBalance ;
   // //  console.log(sum);
   // //  document.getElementById('main-balance').innerText = sum;
   // }
   // else{
   //  console.log('Mony is not add , wrong pin')
   // }
})