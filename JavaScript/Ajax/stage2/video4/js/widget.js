// Create an XMLHTTP Request object
const xhr = new XMLHttpRequest();
// Create a callback function
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("test").innerHTML = this.responseText;
  }
};
xhr.open("GET", "example.txt", true);
xhr.send();
