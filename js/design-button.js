$(document).ready(function(){
  $(".designbutton").click(function(){
    $(".allwork, .journo, .photo, .about").fadeOut();
  });
  $(".designbutton").click(function(){
    $(".design").fadeIn();
  });
});
