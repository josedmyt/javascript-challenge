// from data.js
var tableData = data;

tableData.forEach(entry => {
    var tbody= d3.select('tbody');
    var trow= tbody.append('tr');
    Object.entries(entry).forEach(([key, value])=>{
        trow.append('td').text(value);
    });
});

var button= d3.select('.btn');

button.on('click', function() { 
    var tbody= d3.select('tbody');
    tbody.html('');
    var input= d3.select('.form-control');
    var inputDate= input.property('value');

    var newData = tableData.filter(line=>
        line.datetime === inputDate
    );

    newData.forEach(entry => {
        var tableRow= tbody.append('tr');
        Object.entries(entry).forEach(([key, value])=>{
            tableRow.append('td').text(value);
        });
    });
});