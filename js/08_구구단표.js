function createTable(){
    let start = parseInt(document.getElementById('start').value);
    let end = parseInt(document.getElementById('end').value);
    let theadRow = document.getElementById('thead-row');
    let tbody = document.getElementById('tbody');
    theadRow.innerHTML = "";
    tbody.innerHTML = "";


    for(let dan = start; dan <= end; dan++){
        theadRow.innerHTML += `<th>${dan}단</th>`;
    }
    for(let num = 1 ; num <= 9 ; num++){

        let str = "<tr>";
    
        for(let dan=start ; dan <= end ; dan++){
          str += `<td>${dan} x ${num} = ${dan * num}</td>`;
        }
    
        str += "</tr>";
      
        tbody.innerHTML += str;
      }
}