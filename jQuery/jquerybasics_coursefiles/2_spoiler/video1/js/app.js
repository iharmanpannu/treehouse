// Reveal Spoiler button
const $button = $("<button>Reveal Spoiler</button>");
$(".spoiler").append($button);

//Hide the Spoiler
$(".spoiler span").hide();

// When the button is pressed

$(".spoiler").on("click", "button", () => {
  // Show the Spoiler
  $(".spoiler span")
    .fadeIn(500)
    .show();
  //Hide the 'Reveal Spoiler' Button
  $(".spoiler button")
    .fadeOut(1000)
    .hide();
});
