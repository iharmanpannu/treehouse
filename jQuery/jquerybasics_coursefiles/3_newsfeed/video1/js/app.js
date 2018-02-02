const $odd = $("a:odd");
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $pdfCheckbox = $(
  '<label><input type="checkbox"> Allow PDF downloads</label>'
);

$("#links").append($pdfCheckbox);
// Add Attributes & Add Classes
$secureLinks.attr("target", "_blank").addClass("secure");
$pdfs.attr("download", true).addClass("pdf");

$pdfs.on("click", e => {
  //Check to see if the checkbox is checked
  // If no prevent user from downloading
  if ($(":checked").length === 0) {
    e.preventDefault();
    alert("Please check the checkbox to allow PDF download");
  }
});

$("a").each(function(index, link) {
  const url = $(link).attr("href");
  $(link)
    .paren()
    .append(`(${url})`);
});
