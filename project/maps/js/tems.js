	//Open Menus
			function clickGuide() {
			    var x = document.getElementById("listGuide");
			    if (x.className.indexOf("w3-show") == -1) {
			        x.className += " w3-show";
			    } else {
			        x.className = x.className.replace(" w3-show", "");
			    }
			}
		
			function clickWeapons() {
			    var x = document.getElementById("listWeapons");
			    if (x.className.indexOf("w3-show") == -1) {
			        x.className += " w3-show";
			    } else {
			        x.className = x.className.replace(" w3-show", "");
			    }
			}

			function clickItems() {
			    var x = document.getElementById("listItems");
			    if (x.className.indexOf("w3-show") == -1) {
			        x.className += " w3-show";
			    } else {
			        x.className = x.className.replace(" w3-show", "");
			    }
			}

			function clickMaps() {
			    var x = document.getElementById("listMaps");
			    if (x.className.indexOf("w3-show") == -1) {
			        x.className += " w3-show";
			    } else {
			        x.className = x.className.replace(" w3-show", "");
			    }
			}
			

			// Click on the "Jeans" link on page load to open the accordion for demo purposes
			// document.getElementById("weaponsBtn").click();
			// document.getElementById("guideBtn").click();


			// Script to open and close sidebar
			function w3_open() {
			    document.getElementById("mySidebar").style.display = "block";
			    document.getElementById("myOverlay").style.display = "block";
			    document.getElementById("mySidebar").className.replace("w3-top", "");
			    document.getElementById("myHeader").className += "w3-top";
			    document.getElementById("openBtn").className.replace("w3-hide-large", "w3-hide");
			    document.getElementById("closeBtn").className.replace("w3-hide", "w3-hide-large");
			}
			 
			function w3_close() {
			    document.getElementById("mySidebar").style.display = "none";
			    document.getElementById("myOverlay").style.display = "none";
			}