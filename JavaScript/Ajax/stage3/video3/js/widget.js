$(document).ready(function() {
  const url = "data/employees.json"; // url file

  $.getJSON(url, function(response) {
    let status = `<ul class="bulleted">`;
    $.each(response, function(index, employee) {
      if (employee.inoffice === true) {
        status += `<li class="in">`;
      } else {
        status += `<li class="out">`;
      }
      status += employee.name + "</li>";
    });
    status += `</ul>`;
    $("#employeeList").html(status);
  }); // end json
}); // End ready
