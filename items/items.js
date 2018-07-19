		var helmet_1level = {
			dura : 32,
			damagedown : 30
		}
		var helmet_2level = {
			dura : 60,
			damagedown : 40
		}
		var helmet_3level = {
			dura : 92,
			damagedown : 55
		}


    var gauge_dura;
    var gauge_damage;
		var dura;
		var damage;

		function clickHelmet1(){
			gauge_dura = document.getElementById("durability");
			gauge_damage = document.getElementById("damage");
			dura = helmet_1level.dura;
			damage = helmet_1level.damagedown;
			var width1 = 0;
			var width2 = 0;

			var id = setInterval(frame, 10);
			function frame() {
  				if (width1 >= dura) {
      				clearInterval(id);
    			} else {
    				if(width2< damage){
   						width2++;
   						gauge_damage.innerHTML = width2+ '%';
   						gauge_damage.style.width = width2 + '%';
    				}
     				width1++; 
      				gauge_dura.style.width = width1 + '%'; 
      				gauge_dura.innerHTML = (width1+48);
   				}
   				// if (width2 >= damage) {
   				// 	clearInterval(id);
   				// } else {


   				// }
  			}	
		}
		function clickHelmet2(){
			gauge_dura = document.getElementById("durability");
			gauge_damage = document.getElementById("damage");
			dura = helmet_2level.dura;
			damage = helmet_2level.damagedown;
			var width1 = 0;
			var width2 = 0;
			
			var id = setInterval(frame, 10);
			function frame() {
  				if (width1 >= dura) {
      				clearInterval(id);
    			} else {
    				if(width2< damage){
   						width2++;
   						gauge_damage.innerHTML = width2+ '%';
   						gauge_damage.style.width = width2 + '%';
    				}
     				width1++; 
      				gauge_dura.innerHTML = (width1+90);
      				gauge_dura.style.width = width1 + '%'; 
   				}
   				// if (width2 >= damage) {
   				// 	clearInterval(id);
   				// } else {
   				// 	width2++;
   				// 	gauge_damage.style.width = width2 + '%';
   				// }
  			}	
		}
		function clickHelmet3(){
			gauge_dura = document.getElementById("durability");
			gauge_damage = document.getElementById("damage");
			dura = helmet_3level.dura;
			damage = helmet_3level.damagedown;
			var width1 = 0;
			var width2 = 0;

			var id = setInterval(frame, 10);
			function frame() {
  				if (width1 >= dura) {
      				clearInterval(id);
    			} else {
    				if(width2< damage){
   						width2++;
   						gauge_damage.innerHTML = width2+ '%';
   						gauge_damage.style.width = width2 + '%';
    				}
     				width1++; 
					gauge_dura.innerHTML = (width1+138);
      				gauge_dura.style.width = width1 + '%'; 
   				}
   				// if (width2 >= damage) {
   				// 	clearInterval(id);
   				// } else {
   				// 	width2++;
   				// 	gauge_damage.style.width = width2 + '%';
   				// }
  			}	
		}

		function closeModal() {
 			document.getElementById('modalHelmet').style.display = 'none';
		}