$(document).ready(function(){
  $(".journalismbutton").click(function(){
    $(".allwork, .photo, .design, .about").fadeOut();
  });
  $(".journalismbutton").click(function(){
    $(".journo").fadeIn();
  });
});
