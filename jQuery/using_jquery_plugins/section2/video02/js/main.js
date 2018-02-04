$(".animsition").animsition({
  inClass: "fade-in-right-lg",
  outClass: "fade-out-right-lg",
  linkElement: "header a",
  inDuration: 1000,
  outDuration: 500
});

$(".header").sticky();
$(".header").on("sticky-start", () => {
  $(".description").html("We build <strong>great</strong> apps.");
});
$(".header").on("sticky-end", () => {
  $(".description").html("We build apps");
});

$(".emailus").sticky({ topSpacing: 60 });
$(".emailus").on("sticky-start", () => {
  $(this).append(' <a class="email-text"> Email us </a> ');
});
$(".emailus").on("sticky-end", () => {
  $(".email-text").remove();
});
