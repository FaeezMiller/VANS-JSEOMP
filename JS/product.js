let products = JSON.parse(localStorage.getItem('products'))?
JSON.parse(localStorage.getItem('products')): [

    {
        "image" : "https://i.postimg.cc/dQy9tbg4/vn-03z6l3a-vn-03z6l3a-blk-01-46712.jpg",
        "Name": "Classic slip-ons",
        "Design": "Old skool",
        "Price" : "R1000",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/gjWL0T6T/vn-0d3hbka.jpg",
        "Name": "CLASSIC OLD SKOOL",
        "Design": "OLD SKOOL",
        "Price" : "R1100",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/bNGdhPMw/vna5fcbb9m-blk-vna5fcbb9m-blk-01-352866.jpg",
        "Name" : "SKATE OLD SKOOL PRO",
        "Design" : "OLD SKOOL",
        "Price" : "R1100",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/T29Hm6Tk/era.jpg",
        "Name" : "ERA",
        "Design" : "ERA",
        "Price" : "R900",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/hjZdPLj9/vna5fc9bro-brn-vna5fc9bro-brn-01-954425.jpg",
        "Name" : "SKATE ERA",
        "Design" : "ERA",
        "Price" : "R1900",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/x8MYXQ59/vna5kx51re-brn-vna5kx51re-brn-01-990443.jpg",
        "Name" : "ERA PIG SUEDE",
        "Design" : "ERA",
        "Price" : "R2000",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/PJ6zDy4Q/vn-0eyeblk-01.jpg",
        "Name" : "CLASSIC SLIP-ON",
        "Design" : "SLIP-ON",
        "Price" : "R1000",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/j2Qq339y/vn-0eyebww-vn-0eyebww-bkw-01-4682.jpg",
        "Name" : "CLASSIC SLIP-ONS CHECKERBOARD",
        "Design" : "SLIP-ON",
        "Price" : "R1000",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/Wz2czNWJ/vn0eyebpj-bkpw-01.jpg",
        "Name" : "GREY CHECKER SLIP-ON",
        "Design" : "SLIP-ON",
        "Price" : "R1100",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/Wz2czNWJ/vn0eyebpj-bkpw-01.jpg",
        "Name" : "GREY CHECKER SLIP-ON",
        "Design" : "SLIP-ON",
        "Price" : "R1200",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/R0LMbJ22/shopping-2.webp",
        "Name" : "SKATEISTAN-SKATE-SK8-HI",
        "Design" : "SK8-HI",
        "Price" : "R2200",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/13ctbdqW/vna5krublk-blk-vna5krublk-blk-01-990311.jpg",
        "Name" : "SK8-HI TAPERED ECO THEORY",
        "Design" : "SK8-HI",
        "Price" : "R2300",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/7Lz4Js33/vna5fccora-org-vna5fccora-org-01-1012202.jpg",
        "Name" : "VANS X ONE PIECE SKATE SK8-HI",
        "Design" : "SK8-HI",
        "Price" : "R2500",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/BbVmxfwV/old-skool.jpg",
        "Name" : "OLD SKOOL SOLID BLACK",
        "Design" : "SK8-HI",
        "Price" : "R1500",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/BbVmxfwV/old-skool.jpg",
        "Name" : "OLD SKOOL SOLID BLACK",
        "Design" : "AUTHENTIC",
        "Price" : "R1500",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/0QNYyJXY/vna38g1p0s-blk-vna38g1p0s-blk-01-79254.jpg",
        "Name" : "PRIMARY CHECK OLD SKOOL",
        "Design" : "AUTHENTIC",
        "Price" : "R1500",
        "Quatity": ""
    },
    {
        "image" : "https://i.postimg.cc/NfVXmkQF/vna5jmibzw-bkw-vna5jmibzw-bkw-01-989926.jpg",
        "Name" : "OLD SKOOL VANS COLLAGE",
        "Design" : "AUTHENTIC",
        "Price" : "R1500",
        "Quatity": ""
    },

];

function displayProduct(){
    let tbody = document.querySelector('tbody');
    Object.keys(products).forEach((item)=>{
        if(products.length){
            console.log(`${item}: ${products[item]}`);
            tbody.innerHTML +=
            `
            <div class="card col-4>
            <img src="${product[item].image}" class="img-card">
            <div class="card-body">
            <h5 class="card-title">${product[item].Name}- ${products[item].Design}-${products[item].Price}-${products[item].Quatity}<h5>
            <button>Checkout</button>
            </div>
            </div>
            `
        }
    })
}

displayProducts()
localStorage.setItem('products',JSON.stringify(products));
let prods = JSON.parse(localStorage.getItem('products'))