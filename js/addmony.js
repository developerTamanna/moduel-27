document.getElementById('add-mony')
.addEventListener('click', function(event){

event.preventDefault();
const amount = document.getElementById('amount').value;
console.log(amount);
})