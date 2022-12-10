let products = JSON.parse(localStorage.getItem('products')) || [];

function addtocart(a){
    cart.push({...categories[a]});
    console.log({...categories[a]});
    localStorage.setItem('cart',JSON.stringify(cart))
    displaycart();
}

function delElement(id){
    try{
        cart= JSON.parse(localStorage.getItem('cart'))
        let newProduct = cart.splice(id,1);
        console.log(newProduct);

        localStorage.setItem('cart',JSON.stringify('cart'));
        console.log(JSON.parse(localStorage.getItem('cart')));
        displaycart();
    }
    catch(error){
        console.log(error)
    }
}

function displaycart(){
    let j=0, total=0;
    let cart = JSON.parse(localStorage.getItem('cart'))
    document.getElementById("count").innerHTML= cart.length;

    if(cart.lenght==0){
        document.getElementById('cartItem').innerHTML= "Your checkout is empty";
        document.getElementById('total').innerHTML= "R";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((item)=>
        {
            let {name,design,price,quantity} = items;
            total=total=price;
            document.getElementById("total").innerHTML = "R" +total+".00";
            return(
                `<div class='cart-item'>
                 <div class='row'>
                 <p>${title}</p>
                 <p>R ${price}</p>`
            );
        }).join('');

    }
}
displayProducts()






