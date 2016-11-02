
$( document ).ready(function() {

	// var key = {
	// 	"url(img/rea-photo.jpg)";
	

	$(".button").on("click", function() {
		console.log("cool");
		$(this).css('background' , key ); 
	});

	$(".js-icons").on( "mouseover", function() {
		$(this).animate({

			backgroundPosition: '(-35px 0px)',
		});

	});


	// $(".ports").on("mouseenter", function() {
	// 	$(this).find(".port-content").animate({
	// 		top:"50%",
	// 		opacity:1
	// 	},300).fadeIn(100);
	// });
	// $(".ports").on("mouseleave", function() {
	// 	$(this).find(".port-content").animate({
	// 		top:"80%",
	// 		opacity:0
	// 	},10);
	// });



});