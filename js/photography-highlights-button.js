$(document).ready(function(){
  $(".highlightsbutton").click(function(){
    $(".nature, .heritage, .people, .urban").fadeOut();
  });
  $(".highlightsbutton").click(function(){
    $(".highlights").fadeIn();
  });
});
