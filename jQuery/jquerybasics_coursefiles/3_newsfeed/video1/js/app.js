const $odd = $("a:odd");
const $secureLinks = $('a[href^="https://"]');
const $pdfLinks = $('a[href$=".pdf"]');
// $pdfLinks.hide();
$secureLinks.attr("target", "_blank");
$pdfLinks.attr("download", true);
