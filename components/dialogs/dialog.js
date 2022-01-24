(function () {
	var dialog = document.getElementById("dialog-one");
	document.getElementById("show-dialog-one").onclick = function () {
		dialog.show();
	};
	document.getElementById("hide-dialog-one-btn").onclick = function () {
		dialog.close();
	};

	var dialog2 = document.getElementById("dialog-two");
	document.getElementById("show-dialog-two").onclick = function () {
		dialog2.show();
	};
	document.getElementById("hide-dialog-two-yes").onclick = function () {
		dialog2.close();
	};
	document.getElementById("hide-dialog-two-no").onclick = function () {
		dialog2.close();
	};
})();
