
  let tableFromJson = () => {
    // the json data.
    const myBooks =[
    {
      "item" : "1",
      "title": "LEATHER OLD SKOOL",
      "price": "1000",
      "quantity": "1",
      "total": "38"
    },
    {
      "item" : "2",
      "title": "CLASSIC OLD SKOOL",
      "price": "1100",
      "quantity": "1",
      "total": "23.5"
    },
    {
      "item" : "3",
      "title": "SKATE OLD SKOOL PRO",
      "price": "1100",
      "quantity": "1",
      "total": "100"
    },
    {
      "item" : "4",
      "title": "ERA",
      "price": "900",
      "quantity": "1",
      "total": "45"
    },
    {
      "item" : "5",
      "title": "SKATE ERA",
      "price": "1900",
      "quantity": "1",
      "total": "66"
    },
    {
      "item" : "6",
      "title": "ERA PIG SUEDE",
      "price": "2000" ,
      "quantity": "1",
      "total": "86"
    },
    {
      "item" : "7",
      "title": "CLASSIC SLIP-ON",
      "price": "1000",
      "quantity": "1",
      "total": "86"
    },
    {
      "item" : "8",
      "title": "CLASSIC SLIP-ONS CHECKERBOARD",
      "price": "1000",
      "quantity": "1",
      "total": "86"
    },
    {
      "item" : "9",
      "title": "GREY CHECKER SLIP-ON",
      "price": "1100",
      "quantity": "1",
      "total": "86"
    },
    {
      "item" : "10",
      "title": "SKATEISTAN-SKATE-SK8-HI",
      "price": "2200",
      "quantity": "1",
      "total": "86"
    },
    {
      "item" : "11",
      "title": "SK8-HI TAPERED ECO THEORY",
      "price": "2300",
      "quantity": "1",
      "total": "86"
    },
    {
      "item" : "12",
      "title": "VANS X ONE PIECE SKATE SK8-HI",
      "price": "2500",
      "quantity": "1",
      "total": "86"
    },
    {
      "item" : "13",
      "title": "OLD SKOOL SOLID BLACK",
      "price": "1500",
      "quantity": "1",
      "total": "86"
    },
    {
      "item" : "14",
      "title": "PRIMARY CHECK OLD SKOOL",
      "price": "1500",
      "quantity": "1",
      "total": "86"
    },
    {
      "item" : "15",
      "title": "OLD SKOOL VANS COLLAGE",
      "price": "1500",
      "quantity": "1",
      "total": "86"
    }
    
    
  ] 

    // Extract value from table header. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    let col = [];
    for (let i = 0; i < myBooks.length; i++) {
      for (let key in myBooks[i]) {
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
    for (let i = 0; i < myBooks.length; i++) {

      tr = table.insertRow(-1);

      for (let j = 0; j < col.length; j++) {
        let tabCell = tr.insertCell(-1);
        tabCell.innerHTML = myBooks[i][col[j]];
      }
    }

    // Now, add the newly created table with json data, to a container.
    const divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
    
            
  }