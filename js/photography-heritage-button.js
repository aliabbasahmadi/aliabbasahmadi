$(document).ready(function(){
  $(".heritagebutton").click(function(){
    $(".nature, .highlights, .people, .urban").fadeOut();
  });
  $(".heritagebutton").click(function(){
    $(".heritage").fadeIn();
  });
});
