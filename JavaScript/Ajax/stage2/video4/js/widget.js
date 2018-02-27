function showList() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const status = `<ul>`;
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
    }
  };

  xhr.open("GET", "data/employees.json", true);
  xhr.send();
}

showList();
