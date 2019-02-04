$( document ).ready(function() {
    alert("Hello");
    // File Browser
	$("#customFile").change(function () {

	  var fieldVal = $(this).val();

	  // Change the node's value by removing the fake path (Chrome)
	  fieldVal = fieldVal.replace("C:\\fakepath\\", "");

	  if (fieldVal != undefined || fieldVal != "") {
	    $(this).next(".custom-file-label").attr('.custom-file-label', fieldVal);
	  }

	});
});
