$(document).ready(function(){
  $(".peoplebutton").click(function(){
    $(".nature, .highlights, .urban, .heritage").fadeOut();
  });
  $(".peoplebutton").click(function(){
    $(".people").fadeIn();
  });
});
