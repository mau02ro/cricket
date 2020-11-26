$(document).ready(() => {
  $("#ft__dropdown-label").click(() => {  	
    $("#ft__dropdown-container").slideToggle(400, () => {
    	let newScroll = $("#ft").offset().top - 160;
    	$(window).scrollTop(newScroll);
    });
  });
});