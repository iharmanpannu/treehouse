// $("#flashMessage").hide();
// $("#flashMessage").fadeIn(1000);
// $("#flashMessage").slideDown(1000);
// $("#flashMessage").delay(2000);
// $("#flashMessage").slideUp(500);

// $(".blogPage-title").text("Hello World");

//Compact way to write code
$("#flashMessage")
  .hide()
  .slideDown(1000)
  .delay(2000)
  .slideUp();

const title = "My First Blog Post";
const content = "<strong> Hello world!,</strong> How are you doing";

// $("#blogTitlePreview").text("My First Blog Post");
$("#blogTitlePreview").text(title);
$("#blogContentPreview").html(content);
