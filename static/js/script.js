$( document ).ready(function() {

    // File Browser
	$('#customFile').change(function(e){
        var fileName = "";
        for (var i = 0; i <= e.target.files.length - 1; i++) {
        	if (fileName == "") {
        		fileName += e.target.files[i].name;
        	}
        	else {
        		fileName += ", " + e.target.files[i].name;
        	}
        }
        $('#customFileLabel').html(fileName);
        console.log("Done");
    });

    $('#customModel').change(function(e){
        var fileName = "";
        for (var i = 0; i <= e.target.files.length - 1; i++) {
        	if (fileName == "") {
        		fileName += e.target.files[i].name;
        	}
        	else {
        		fileName += ", " + e.target.files[i].name;
        	}
        }
        $('#customModelLabel').html(fileName);
        console.log("Done");
    });
});
