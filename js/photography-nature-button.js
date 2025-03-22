$(document).ready(function(){
  $(".naturebutton").click(function(){
    $(".highlights, .heritage, .people, .urban").fadeOut();
  });
  $(".naturebutton").click(function(){
    $(".nature").fadeIn();
  });
});
