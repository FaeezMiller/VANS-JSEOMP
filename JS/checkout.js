let tableFromJson = () => {
   // the json data.
   const myProducts =[
   {
     "Item" : "1",
     "Title": "LEATHER OLD SKOOL",
     "Price": "R1000",
     "Total": "69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "2",
     "Title": "CLASSIC OLD SKOOL",
     "Price": "R1100",
     "Total": "69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "3",
     "Title": "SKATE OLD SKOOL PRO",
     "Price": "R1100",
     "Total": "169",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "4",
     "Title": "ERA",
     "Price": "R900",
     "Total": "69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "5",
     "Title": "SKATE ERA",
     "Price": "R1900",
     "Total": "69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "6",
     "Title": "ERA PIG SUEDE",
     "Price": "R2000" ,
     "Total": "69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "7",
     "Title": "CLASSIC SLIP-ON",
     "Price": "R1000",
     "Total": "69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "8",
     "Title": "CLASSIC SLIP-ONS CHECKERBOARD",
     "Price": "R1000",
     "Total": "69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "9",
     "Title": "GREY CHECKER SLIP-ON",
     "Price": "R1100",
     "Total": "69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "10",
     "Title": "SKATEISTAN-SKATE-SK8-HI",
     "Price": "R2200",
     "Total": "69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "11",
     "Title": "SK8-HI TAPERED ECO THEORY",
     "Price": "R2300",
     "Total": "69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "12",
     "Title": "VANS X ONE PIECE SKATE SK8-HI",
     "Price": "R2500",
     "Total": "69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "13",
     "Title": "OLD SKOOL SOLID BLACK",
     "Price": "R1500",
     "Total": "69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "14",
     "Title": "PRIMARY CHECK OLD SKOOL",
     "Price": "R1500",
     "Total": " 69",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   },
   {
     "Item" : "15",
     "Title": "OLD SKOOL VANS COLLAGE",
     "Price": "R1500",
     "Total": "86 ",
     "Purchase": '<center><img src="https://i.postimg.cc/QM66fLzf/icons8-paid-50.png" id="cart"></center>'
   }
   
   
 ] 

   let col = [];
   for (let i = 0; i < myProducts.length; i++) {
     for (let key in myProducts[i]) {
       if (col.indexOf(key) === -1) {
         col.push(key);
       }
     }
   }

   // Create a table.
   const table = document.createElement("table");

   // Create table header row using the extracted headers above.
   let tr = table.insertRow(-1);                   // table row.

   for (let i = 0; i < col.length; i++) {
     let th = document.createElement("th");      // table header.
     th.innerHTML = col[i];
     tr.appendChild(th);
   }

   // add json data to the table as rows.
   for (let i = 0; i < myProducts.length; i++) {

     tr = table.insertRow(-1);

     for (let j = 0; j < col.length; j++) {
       let tabCell = tr.insertCell(-1);
       tabCell.innerHTML = myProducts[i][col[j]];
     }
   }

   // Now, add the newly created table with json data, to a container.
   const divShowData = document.getElementById('showData');
   divShowData.innerHTML = "";
   divShowData.appendChild(table);
   
           
 }
 


