var selectedRow = null;

function showAlert(message,className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(()=> document.querySelector(".alert").remove(),3000);
}
//Clear 
function clearfields(){
    document.querySelector("#code").value ="";
    document.querySelector("#name").value ="";
    document.querySelector("#design").value ="";
    document.querySelector("#price").value ="";
    document.querySelector("#quantity").value ="";
}

//Add
document.querySelector("#product-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    //Get Form Data
    const Code =document.querySelector("#code").value;
    const Name =document.querySelector("#name").value;
    const Design =document.querySelector("#design").value;
    const Price =document.querySelector("#price").value;
    const Quantity =document.querySelector("#quantity").value;

    //Validate
    if(Code == "" || Name =="" || Design =="" || Price =="" || Quantity ==""){
        showAlert("Fill Out All Fields!", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#product-list");
            const row = document.createComment("tr")

            row.innerHTML = `
            <td>${Code}</td>
            <td>${Name}</td>
            <td>${Design}</td>
            <td>${Price}</td>
            <td>${Quantity}</td>
            <td>
            <a href="#" class=btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class=btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Product Added", "success")
        }
        else{
            selectedRow.children[0].textContent = Code;
            selectedRow.children[0].textContent = Name;
            selectedRow.children[0].textContent = Design;
            selectedRow.children[0].textContent = Price;
            selectedRow.children[0].textContent = Quantity;
            selectedRow = null;
            showAlert("Product Info Edited", "info")
        }
        clearfields();
    }

});

//Edit Data
document.querySelector("#product-list").addEventListener("click", (e) =>{
    target = e.target;
    if (target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#code").value = selectedRow.children[0].textContent;
        document.querySelector("#name").value = selectedRow.children[1].textContent;
        document.querySelector("#design").value = selectedRow.children[2].textContent;
        document.querySelector("#price").value = selectedRow.children[3].textContent;
        document.querySelector("#quantity").value = selectedRow.children[4].textContent;
    }
})

//Delete
document.querySelector("#product-list").addEventListener("click",(e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Product Data Deleted", "danger")
    }
})
