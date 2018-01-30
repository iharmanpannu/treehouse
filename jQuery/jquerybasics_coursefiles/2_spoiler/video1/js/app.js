// Reveal Spoiler button
const $button = $("<button>Reveal Spoiler</button>");
$(".spoiler").append($button);

//Hide the Spoiler
$(".spoiler span").hide();

// When the button is pressed

$(".spoiler").on("click", "button", e => {
  console.log(e.target);

  // Show the Spoiler
  $(".spoiler span")
    .fadeIn(500)
    .show();
  //Hide the 'Reveal Spoiler' Button
  $(e.target)
    .fadeOut(1000)
    .hide();
});
