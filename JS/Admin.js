
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
				   <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit"><i class="fa-solid fa-pen-to-square"></i></i></a>
                   <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete"><i class="fa-solid fa-trash"></i></i></a>
				</td>

            </tr>
            `
        }
    })
}

displayProduct()

localStorage.setItem('products', JSON.stringify(products));
var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        // var formData = displayProducts();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["pName"] = document.getElementById("pName").value;
    formData["pPrice"] = document.getElementById("pPrice").value;
    formData["year"] = document.getElementById("year").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.pName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.pPrice;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.year;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a ><button onClick="onEdit(this)">Edit</button><button onClick="onDelete(this)">Delete</button></a>`;
}
function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("pName").value = "";
    document.getElementById("pPrice").value = "";
    document.getElementById("year").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("pPrice").value = selectedRow.cells[2].innerHTML;
    document.getElementById("year").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.pName;
    selectedRow.cells[2].innerHTML = formData.pPrice;
    selectedRow.cells[3].innerHTML = formData.year;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this product ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("id").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}


