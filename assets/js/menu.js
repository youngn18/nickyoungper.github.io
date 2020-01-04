function openNav() {
	document.getElementById("myNav").style.width = "100%";
  }

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }
 <!--Use ESC to close menu -->
 $(document).keyup(function(e) {
		 if (e.keyCode == 27) { // escape key maps to keycode `27`
		   document.getElementById("myNav").style.width = "0%";
		}
	});