let checkoutButtons = document.querySelectorAll('.shoecheckout')
let shoesCheckout = JSON.parse(localStorage.getItem('checkout')) || []

function addToCheckout(product) {
    shoesCheckout.push(product)
    localStorage.setItem('checkout', JSON.stringify(shoesCheckout))
}