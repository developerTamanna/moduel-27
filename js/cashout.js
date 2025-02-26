document.getElementById('cashout-btn').addEventListener('click', function(event){
event.preventDefault();
 const pin = document.getElementById('cashout-pin-number').value;
 const convertedPin = parseInt(pin);
 const amount = document.getElementById('cashout-amount').value; 
 convertedAmount = parseFloat(amount);
 const mainBalance = document.getElementById('main-balance-add').innerText;
 convertedMainBalance = parseFloat(mainBalance);
 if(convertedPin === 1234){
            const sum = convertedMainBalance - convertedAmount;
            // console.log(sum)
            document.getElementById('main-balance-add').innerText = sum;
 }
 else{
    alert('incorrect pin')
 }
})