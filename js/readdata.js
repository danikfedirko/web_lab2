$.ajax({
    url: 'http://localhost:8080/api/bears',
    type: "get",
    dataType: "json",

    success: function(data) {
        drawTable(data);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<article class='card col-md-3' style='margin: 30px;'>")
    $("#personDataTable").append(row);
    row.append($("<div class='caption'>" + rowData.longdescription + "</div>"));
    row.append($("<p>" + rowData.shortdescription + "</p>"));
}
