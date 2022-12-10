products = JSON.parse(localStorage.getItem('checkout'))
console.log(products);
let checkout = [];

localStorage.setItem("anything" , JSON.stringify ('checkout'))

let allProducts= JSON.parse(localStorage.getItem ('products'));
Object.keys(allProducts).forEach((products)=> {
    allProducts[products].addEventListener('click', (e) => {
        console.log('clicked', addBtn[item])
        console.log(allProducts[item])
        checkout.push(allProducts[item]);
        alert('added to cart');
        console.log(checkout)
        localStorage.setItem('myCheckout', JSON.stringify(checkout));
    })
}
)


function displayProducts(){
//show names of cars in console
    let p = allProducts[Products];
    let b = document.querySelector("#myProducts");
    console.log(allProducts[item].type);
    b.innerHTML +=
                `
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            
                                <div class="card-body">
                                    <p class="carName">${p.name}</p>
                                    <p class="carPrice">${p.price}</p>
                                    <button class="addToCart" href="#">Purchase</button>
                                </div>
                        </div>
                    </div>
                `
};

// let addBtn = document.querySelectorAll('.shoecheckout');
// Object.keys(addBtn).forEach((item) => {
//         addBtn[item].addEventListener('click', (e) => {
//             console.log('clicked', addBtn[item])
//             console.log(allProducts[item])
//             checkout.push(allProducts[item]);
//             alert('added to cart');
//             console.log(checkout)
//             localStorage.setItem('myCheckout', JSON.stringify(checkout));
//         })
//     }
// )