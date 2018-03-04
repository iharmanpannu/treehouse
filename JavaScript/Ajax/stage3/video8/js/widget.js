$(document).ready(function() {
  $.getJSON("data/employees.json", function(data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data, function(index, employee) {
      if (employee.inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + "</li>";
    });
    statusHTML += "</ul>";
    $("#employeeList").html(statusHTML);
  }); // end getJSON
  const $url = "data/rooms.json";
  $.getJSON($url, function(data) {
    let status = `<ul class="rooms">`;
    $.each(data, function(index, isAvailable) {
      if (isAvailable.available === true) {
        status += `<li class="full">`;
      } else {
        status += `<li class="empty">`;
      }
      status += `${isAvailable.room}</li>`;
    });
    status += `</ul>`;
    $("#roomList").html(status);
  });
}); // end ready
