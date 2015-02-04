var _state = function() {
	
}

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
	
	$(".favorite div").on('click', function() {
		$('.favorite div').css('background', 'white');
		$(this).css('background', 'black');
	});
	
	
};
// window.onload can work without <body onload="">
window.onload = init;



