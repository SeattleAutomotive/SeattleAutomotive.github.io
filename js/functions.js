function MakeTable(id, arr){
    var table = "";
        //Table Header
        table += '<thead><tr class="w3-light-gray">';
        for(col = 0; col < arr[0].length; col++){
            table += '<th data-sort-method="' + arr[0][col] + '" class="w3-border-right">' + arr[1][col] + '</th>';
        }
        table += '</tr></thead><tbody>';
        //Table Rows
        for(row = 2; row < arr.length; row++){
            table += '<tr class="w3-hover-blue">';
                for(col = 0; col < arr[row].length; col++){
                    table += '<td class="w3-border-right">' + arr[row][col] + '</td>';
                }
            table += '</tr>';
        }
        table += '</tbody>';
    document.getElementById(id).innerHTML = table;
}