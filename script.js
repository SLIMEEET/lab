$(function() {
	// When the form is submitted, add the new item to the list
	$("#to-do-form").submit(function(event) {
		event.preventDefault();
		var newItem = $("#new-item").val();
		if (newItem) {
			$("#to-do-list").append("<li class='list-group-item'>" + newItem + " <button type='button' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button></li>");
			$("#new-item").val("");
		}
	});

	// When a close button is clicked, remove the item from the list
	$("#to-do-list").on("click", ".close", function() {
		$(this).parent().remove();
	});

	// When an item is clicked, toggle the completed class
	$("#to-do-list").on("click", "li", function() {
		$(this).toggleClass("completed");
	});
});