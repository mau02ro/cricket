$(document).ready(() => {
	let controller_dropDown = true;
  $("#ft__dropdown-label").click(() => {
  	if(controller_dropDown){
    	$("#ft__dropdown-container").slideDown(400);
    	controller_dropDown = !controller_dropDown;
  	}else{

    	$("#ft__dropdown-container").slideUp(400, () => {
	    	$(document).scrollTop(0)
	    	$(document).scrollTop($(document).height())
    	});
  
    	controller_dropDown = !controller_dropDown;
  	}
  });
});