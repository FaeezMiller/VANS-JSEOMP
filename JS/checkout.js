let tableFromJson = () => {
   // the json data.
   const myProducts =[
   {
     "Item" : "1",
     "Title": "LEATHER OLD SKOOL",
     "Price": "R1000",
     "Quantity": "  " ,
     "Total": "38"
   },
   {
     "Item" : "2",
     "Title": "CLASSIC OLD SKOOL",
     "Price": "R1100",
     "Total": "23"
   },
   {
     "Item" : "3",
     "Title": "SKATE OLD SKOOL PRO",
     "Price": "R1100",
     "Total": "100"
   },
   {
     "Item" : "4",
     "Title": "ERA",
     "Price": "R900",
     "Total": "45"
   },
   {
     "Item" : "5",
     "Title": "SKATE ERA",
     "Price": "R1900",
     "Total": "66"
   },
   {
     "Item" : "6",
     "Title": "ERA PIG SUEDE",
     "Price": "R2000" ,
     "Total": "86"
   },
   {
     "Item" : "7",
     "Title": "CLASSIC SLIP-ON",
     "Price": "R1000",
     "Total": "86"
   },
   {
     "Item" : "8",
     "Title": "CLASSIC SLIP-ONS CHECKERBOARD",
     "Price": "R1000",
     "Total": "86"
   },
   {
     "Item" : "9",
     "Title": "GREY CHECKER SLIP-ON",
     "Price": "R1100",
     "Total": "86"
   },
   {
     "Item" : "10",
     "Title": "SKATEISTAN-SKATE-SK8-HI",
     "Price": "R2200",
     "Total": "86"
   },
   {
     "Item" : "11",
     "Title": "SK8-HI TAPERED ECO THEORY",
     "Price": "R2300",
     "Total": "86"
   },
   {
     "Item" : "12",
     "Title": "VANS X ONE PIECE SKATE SK8-HI",
     "Price": "R2500",
     "Total": "86"
   },
   {
     "Item" : "13",
     "Title": "OLD SKOOL SOLID BLACK",
     "Price": "R1500",
     "Total": "86"
   },
   {
     "Item" : "14",
     "Title": "PRIMARY CHECK OLD SKOOL",
     "Price": "R1500",
     "Total": "86"
   },
   {
     "Item" : "15",
     "Title": "OLD SKOOL VANS COLLAGE",
     "Price": "R1500",
     "Total": "86"
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
 


