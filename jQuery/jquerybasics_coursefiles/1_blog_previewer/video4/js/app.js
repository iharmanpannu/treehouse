$("#flashMessage").hide();

$("#previewButton").click(() => {
  const title = $("#blogTitleInput").val();
  const content = $("#blogContentInput").val();
  $("#blogTitlePreview").text(title);
  $("#blogContentPreview").text(content);
  $("#flashMessage")
    .slideDown(1000)
    .delay(2000)
    .slideUp();
});

// $(".blogPage-title").text("Hello World");

//Compact way to write code
// $("#flashMessage")
//   .hide()
//   .slideDown(1000)
//   .delay(2000)
//   .slideUp();

// const title = "My First Blog Post";
// const content = "<strong> Hello world!,</strong> How are you doing";

// // $("#blogTitlePreview").text("My First Blog Post");
// $("#blogTitlePreview").text(title);
// $("#blogContentPreview").html(content);
