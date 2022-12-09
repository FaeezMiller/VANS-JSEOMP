
let products = JSON.parse(localStorage.getItem('products'))?
JSON.parse(localStorage.getItem('products')): [

    {
        
        "Name": "LEATHER OLD SKOOL ",
        "Design": "OLD SKOOL",
        "Price" : "R1000",
        "Quantity": "60"
    },
    {
        
        "Name": "CLASSIC OLD SKOOL",
        "Design": "OLD SKOOL",
        "Price" : "R1100",
        "Quantity": "60"
    },
    {
        
        "Name" : "SKATE OLD SKOOL PRO",
        "Design" : "OLD SKOOL",
        "Price" : "R1100",
        "Quantity": "60"
    },
    {
        
        "Name" : "ERA",
        "Design" : "ERA",
        "Price" : "R900",
        "Quantity": "60"
    },
    {
        
        "Name" : "SKATE ERA",
        "Design" : "ERA",
        "Price" : "R1900",
        "Quantity": "60"
    },
    {
      
        "Name" : "ERA PIG SUEDE",
        "Design" : "ERA",
        "Price" : "R2000",
        "Quantity": "60"
    },
    {
       
        "Name" : "CLASSIC SLIP-ON",
        "Design" : "SLIP-ON",
        "Price" : "R1000",
        "Quantity": "60"
    },
    {
        
        "Name" : "CLASSIC SLIP-ONS CHECKERBOARD",
        "Design" : "SLIP-ON",
        "Price" : "R1000",
        "Quantity": "60"
    },
    {
        
        "Name" : "GREY CHECKER SLIP-ON",
        "Design" : "SLIP-ON",
        "Price" : "R1100",
        "Quantity": "60"
    },
    {
       
        "Name" : "SKATEISTAN-SKATE-SK8-HI",
        "Design" : "SK8-HI",
        "Price" : "R2200",
        "Quantity": "60"
    },
    {
        
        "Name" : "SK8-HI TAPERED ECO THEORY",
        "Design" : "SK8-HI",
        "Price" : "R2300",
        "Quantity": "60"
    },
    {
        
        "Name" : "VANS X ONE PIECE SKATE SK8-HI",
        "Design" : "SK8-HI",
        "Price" : "R2500",
        "Quantity": "60"
    },
    {
        
        "Name" : "OLD SKOOL SOLID BLACK",
        "Design" : "AUTHENTIC",
        "Price" : "R1500",
        "Quantity": "60"
    },
    {
      
        "Name" : "PRIMARY CHECK OLD SKOOL",
        "Design" : "AUTHENTIC",
        "Price" : "R1500",
        "Quantity": "60"
    },
    {
        
        "Name" : "OLD SKOOL VANS COLLAGE",
        "Design" : "AUTHENTIC",
        "Price" : "R1500",
        "Quantity": "60"
        
    },

];

function displayProduct(){
    let tbody = document.querySelector('tbody');
    Object.keys(products).forEach((item)=>{
        if(products.length){
            console.log(`${item}: ${products[item]}`);
            tbody.innerHTML +=
            `
            <tr>
                
                <td>${products[item].Name}</td>
                <td>${products[item].Design}</td>
                <td>${products[item].Price}</td>
                <td>${products[item].Quantity}</td>
                <td>
				   <a href="#editModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit"><i class="fa-solid fa-pen-to-square"></i></i></a>
                   <a href="#deleteModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete"><i class="fa-solid fa-trash"></i></i></a>
				</td>

            </tr>
            `
        }
    })
}

displayProduct()

// $(document).ready(function(){
// 	$('[data-toggle="tooltip"]').tooltip();}
