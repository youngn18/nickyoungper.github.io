<script>
  function openNav() {
	document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }
 </script>
 <!--Use ESC to close menu -->
 <script>
	$(document).keyup(function(e) {
		 if (e.keyCode == 27) { // escape key maps to keycode `27`
		   document.getElementById("myNav").style.width = "0%";
		}
	});
 </script>