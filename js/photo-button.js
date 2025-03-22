$(document).ready(function(){
  $(".photobutton").click(function(){
    $(".allwork, .journo, .design, .about").fadeOut();
  });
  $(".photobutton").click(function(){
    $(".photo").fadeIn();
  });
});
