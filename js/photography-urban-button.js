$(document).ready(function(){
  $(".urbanbutton").click(function(){
    $(".nature, .highlights, .people, .heritage").fadeOut();
  });
  $(".urbanbutton").click(function(){
    $(".urban").fadeIn();
  });
});
