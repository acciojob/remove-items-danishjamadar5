//your JS code here. If required.
function deleteElement() {
	// Get the dropdown list element by its id
  var colorSelect = document.getElementById("colorSelect");

  // Get the selected option index
  var selectedIndex = colorSelect.selectedIndex;

  // Remove the selected option from the dropdown list
  colorSelect.remove(selectedIndex);
}