function showList() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const employees = JSON.parse(xhr.responseText);
      let status = `<ul class="bulleted">`;
      employees.forEach(employee => {
        if (employee.inoffice === true) {
          status += `<li class="in">`;
        } else {
          status += `<li class="out">`;
        }
        status += employee.name;
        status += `</li>`;
      });
      status += `</ul>`;
      const div = document.getElementById("employeeList");
      div.innerHTML = status;
    }
  };
  xhr.open("GET", "data/employees.json", true);
  xhr.send();
}
showList();
function showRooms() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const rooms = JSON.parse(xhr.responseText);
      let status = `<ul class="rooms">`;
      rooms.forEach(room => {
        if (room.available === true) {
          status += `<li class="full">`;
        } else {
          status += `<li class="empty">`;
        }
        status += room.room;
        status += `</li>`;
      });
      status += `</ul>`;
      const div = document.getElementById("roomList");
      div.innerHTML = status;
    }
  };
  xhr.open("GET", "data/rooms.json");
  xhr.send();
}

showRooms();
