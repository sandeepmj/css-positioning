$(document).ready(function () {
	$(".boxes").on("click", function () {
		var the_box_i_clicked_on = $(this);
		var message = the_box_i_clicked_on.data("text");
		$("#popUp").text(message);
		$("#popUp").addClass("active");
	});
});
