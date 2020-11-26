$(document).ready(() => {
	let controller_dropDown = true;
  $("#ft__dropdown-label").click(() => {
  	if(controller_dropDown){
    	$("#ft__dropdown-container").slideDown(400);
    	controller_dropDown = !controller_dropDown;
  	}else{
    	$("#ft__dropdown-container").slideUp(400, () => {
    		console.log('ok')

    		let newScroll = $("#ft").offset().top - 210;
	    	$(window).scrollTop(newScroll);
    	});

  
    	controller_dropDown = !controller_dropDown;
  	}
  });
});