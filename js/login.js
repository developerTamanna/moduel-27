document.getElementById('login-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    // console.log('hello')
    const accountNumber = document.getElementById('account-number').value;
    // console.log(accountNumber)
    const pinSet = document.getElementById('pin-number').value;
    // console.log(pinSet)
    if(accountNumber.length===11){
        // console.log('yes right number')
        window.location.href="main.html"
        if(parseInt(pinSet)===1234){
            console.log('right pin')
        }
        else{
            alert('wrong pin')
        }
    }
    else{
        alert('need valid acount number')
    }
})