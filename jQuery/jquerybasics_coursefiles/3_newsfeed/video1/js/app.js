const $odd = $("a:odd");
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $checkBox = $("input").attr("checkbox");

// Add Attributes & Add Classes
$secureLinks.attr("target", "_blank").addClass("secure");
$pdfs.attr("download", false).addClass("pdf");

$pdfs.on("click", e => {
  //Check to see if the checkbox is checked
  e.preventDefault();
  // If no prevent user from downloading
  if ($($checkBox).is(":checked")) {
    $pdfs.attr("download", true);
  }
  // If yes allow user to download
});
