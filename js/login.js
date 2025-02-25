document.getElementById('login-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pinSet = document.getElementById('pin-number').value;

    if (accountNumber.length === 11) {
        if (parseInt(pinSet) === 1234) {
            console.log('right pin');
            window.location.href = "./main.html"; // Page redirect
        } else {
            alert('wrong pin');
        }
    } else {
        alert('need valid account number');
    }
});
