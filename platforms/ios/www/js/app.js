$(document).on('click', "#select-picture", function() {
	navigator.camera.getPicture(cameraSuccess,cameraFail, {
		quality: 75,
		destinationType: Camera.DestinationType.File_URI,
		sourceType: Camera.PictureSourceType.PHOTOLIBRARY
	});

	function cameraSuccess(imageUri) {
		$('#picture').attr("src", imageUri)
	}

	function cameraFail() {
		alert("Something went wrong...");
	}
});

$(document).on('click', "#take-picture", function() {
	navigator.camera.getPicture(cameraSuccess,cameraFail, {
		quality: 75,
		destinationType: Camera.DestinationType.File_URI,
		sourceType: Camera.PictureSourceType.CAMERA
	});

	function cameraSuccess(imageUri) {
		$('#picture').attr("src", imageUri)
	}

	function cameraFail() {
		alert("Something went wrong...");
	}
});