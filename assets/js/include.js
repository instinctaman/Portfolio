// include.js
document.addEventListener("DOMContentLoaded", function () {
  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");
});

function includeHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}
