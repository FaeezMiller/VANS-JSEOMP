let products;
// let products = JSON.parse(localStorage.getItem('products'))?
// JSON.parse(localStorage.getItem('products')): [

//     {
//         "Code" : "LTHOS",
//         "Name": "LEATHER OLD SKOOL ",
//         "Design": "OLD SKOOL",
//         "Price" : "R1000",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "CLSOS",
//         "Name": "CLASSIC OLD SKOOL",
//         "Design": "OLD SKOOL",
//         "Price" : "R1100",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "SK8OS",
//         "Name" : "SKATE OLD SKOOL PRO",
//         "Design" : "OLD SKOOL",
//         "Price" : "R1100",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "ERAAI",
//         "Name" : "ERA",
//         "Design" : "ERA",
//         "Price" : "R900",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "SK8ER",
//         "Name" : "SKATE ERA",
//         "Design" : "ERA",
//         "Price" : "R1900",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "EPIGS",
//         "Name" : "ERA PIG SUEDE",
//         "Design" : "ERA",
//         "Price" : "R2000",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "CLSSS",
//         "Name" : "CLASSIC SLIP-ON",
//         "Design" : "SLIP-ON",
//         "Price" : "R1000",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "CLSOC",
//         "Name" : "CLASSIC SLIP-ONS CHECKERBOARD",
//         "Design" : "SLIP-ON",
//         "Price" : "R1000",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "GCHSO",
//         "Name" : "GREY CHECKER SLIP-ON",
//         "Design" : "SLIP-ON",
//         "Price" : "R1100",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "STAN8",
//         "Name" : "SKATEISTAN-SKATE-SK8-HI",
//         "Design" : "SK8-HI",
//         "Price" : "R2200",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "TECOT",
//         "Name" : "SK8-HI TAPERED ECO THEORY",
//         "Design" : "SK8-HI",
//         "Price" : "R2300",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "VXOPS",
//         "Name" : "VANS X ONE PIECE SKATE SK8-HI",
//         "Design" : "SK8-HI",
//         "Price" : "R2500",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "OSKSB",
//         "Name" : "OLD SKOOL SOLID BLACK",
//         "Design" : "AUTHENTIC",
//         "Price" : "R1500",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "PYCOS",
//         "Name" : "PRIMARY CHECK OLD SKOOL",
//         "Design" : "AUTHENTIC",
//         "Price" : "R1500",
//         "Quantity": "60"
//     },
//     {
//         "Code" : "OSKVC",
//         "Name" : "OLD SKOOL VANS COLLAGE",
//         "Design" : "AUTHENTIC",
//         "Price" : "R1500",
//         "Quantity": "60"
//     },

// ];

products = JSON.parse(localStorage.getItem('checkout'))

console.log(products);
function displayProducts(){
    let tbody = document.querySelector('tbody');
    products.forEach((item)=>{
        if(products){
            console.log(`${item}: ${products[item]}`);
            tbody.innerHTML +=
            `
            <tr>
                <td>${item.Code}</td>
                <td>${item.Name}</td>
                <td>${item.Design}</td>
                <td>${item.Price}</td>
                <td>${item.Quantity}</td>
                
                <td>
				 <i class="material-icons" data-toggle="tooltip" title="Edit"><i class="fa-solid fa-pen-to-square"></i></i></a>
                 <i class="material-icons" data-toggle="tooltip" title="Delete" ><i class="fa-solid fa-trash"></i></i></a>
                 
                 </td>
                
             </td>
            </tr>
            `
        }
    })
}

displayProducts()





