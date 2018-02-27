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
