
$(".left-side").on("click", function(){
    $(".sidebar").addClass("move-right");
});

$(".close").on("click", function(){
  $(".sidebar").removeClass("move-right");
});

$("#contact").on("click", function(){
  $(".contact-me").addClass("move-down");
})

$(".contact-close").on("click", function(){
  $(".contact-me").removeClass("move-down");
});
