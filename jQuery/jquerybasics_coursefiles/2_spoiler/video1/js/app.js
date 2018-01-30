// Reveal Spoiler button
const $button = $("<button>Reveal Spoiler</button>");
$(".spoiler").append($button);

//Hide the Spoiler
$(".spoiler span").hide();

// When the button is pressed

$(".spoiler").on("click", "button", e => {
  // Show the Spoiler
  $(e.target)
    .prev()
    .fadeIn(500)
    .show();
  // $(this)
  //   .prev()
  //   .fadeIn(500)
  //   .show();
  //Hide the 'Reveal Spoiler' Button
  $(e.target)
    .fadeOut(1000)
    .hide();
});
