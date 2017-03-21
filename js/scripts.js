$(document).ready(function() {
  // $("#js-but").click(function() {
  // $(".def").removeClass("show");
  // $("#js-def").addClass("show");
  // });
  // $("#op-but").click(function() {
  // $(".def").removeClass("show");
  // $("#op-def").addClass("show");
  // });

  $("li").click(function() {
    // create variable to get the id value of this (whatever it is that we clicked on)
    var thisTerm = $(this).attr('id');
    // log progress
    console.log(thisTerm);

    // remove last 4 characters from variable name "-but"
    thisTerm = thisTerm.slice(0, -4);
    // log progress
    console.log(thisTerm);

    // remove the show class from ALL elements with a class ".def"
    $(".def").removeClass("show");

    // create variable to target a specific definition using the trimmed id from the clicked list item
    var thisDef = "#" + thisTerm + "-def";
    // log progress
    console.log(thisDef);

    // target definition element with our concatenated id
    $(thisDef).addClass("show");
  });

});
