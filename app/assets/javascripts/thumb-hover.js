$(document).ready(function() {

	//move the image in pixel
	var move = -15;
	
	//zoom percentage, 1.2 =120%
	var zoom = 1.2;

	//On mouse over those thumbnail
	$('.itemjhol').hover(function() {
		
		//Set the width and height according to the zoom percentage
		width = $('.itemjhol').width() * zoom;
		height = $('.itemjhol').height() * zoom;
		
		//Move and zoom the image
		$(this).find('imgchange').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});
		
		//Display the caption
		$(this).find('div.captionjhol').stop(false,true).fadeIn(200);
	},
	function() {
		//Reset the image
		$(this).find('imgchange').stop(false,true).animate({'width':$('.item').width(), 'height':$('.item').height(), 'top':'0', 'left':'0'}, {duration:100});	

		//Hide the caption
		$(this).find('div.captionjhol').stop(false,true).fadeOut(200);
	});

});
