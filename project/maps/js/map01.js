var count = 0;


var mybook = new Array();

for (i = 0; i < 6; i++) {
	mybook[i] = new Image();
	if ( i < 4 ) {
		mybook[i] = "images/vehicles_all/0" + i + ".png";
	}else{

		mybook[i] = "images/vehicles_01/0" + i + ".png";

	}
	
	
}


function click_imgs( e ){


/* 						<img id="img_vehicles">

							<p>
								<strong id="p_text01">
								<span id="p_text02">
                <span ><strong id="p_text03">공용</strong></span> 
							</p> */

	if ( e.id == "img_left01" ) {


		if ( count <= 0 ) {

			count = 5;

		}else count -= 1;

		document.getElementById("img_vehicles").src = mybook[count];



		 var text01 = "";
		 var text02 = "";
		 var text03 = "";

		 switch( count ){

		 	case 0: 
		 	text01 = "버기";
		 	text02 = "2인승 체력 1500.";
		 	text03 = "공통";
		 	break;

		 	case 1:
		 	text01 = "오토바이";
		 	text02 = "2/3인승 체력 1000.";
		 	text03 = "공통";
		 	break;

		 	case 2:
		 	text01 = "보트";
		 	text02 = "5인승 체력 1500.";
		 	text03 = "공통";
		 	break;

		 	case 3:
		 	text01 = "아쿠아레일";
		 	text02 = "2인승";
		 	text03 = "공통";
		 	break;

		 	case 4:
		 	text01 = "다시아";
		 	text02 = "4인승 체력 1800";
		 	text03 = "에란겔";
		 	break;

		 	case 5:
		 	text01 = "USZ";
		 	text02 = "4인승 체력 2000.";
		 	text03 = "에란겔";
		 	break;

		 }

/*		 alert( text01 );
		 alert( text02 );
		 alert( text03 );*/

		 document.getElementById("p_text01").innerHTML = text01+"";
		 document.getElementById("p_text02").innerHTML = text02+"";
		 document.getElementById("p_text03").innerHTML = text03+"";




	}else if ( e.id == "img_right01" ) {

		if ( count >= 5 ) {

			count = 0;

		}else count += 1;

		document.getElementById("img_vehicles").src = mybook[count];

		 var text01 = "";
		 var text02 = "";
		 var text03 = "";

		 switch( count ){

		 	case 0: 
		 	text01 = "버기";
		 	text02 = "2인승 체력 1500.";
		 	text03 = "공통";
		 	break;

		 	case 1:
		 	text01 = "오토바이";
		 	text02 = "2/3인승 체력 1000.";
		 	text03 = "공통";
		 	break;

		 	case 2:
		 	text01 = "보트";
		 	text02 = "5인승 체력 1500.";
		 	text03 = "공통";
		 	break;

		 	case 3:
		 	text01 = "아쿠아레일";
		 	text02 = "2인승";
		 	text03 = "공통";
		 	break;

		 	case 4:
		 	text01 = "다시아";
		 	text02 = "4인승 체력 1800";
		 	text03 = "에란겔";
		 	break;

		 	case 5:
		 	text01 = "USZ";
		 	text02 = "4인승 체력 2000.";
		 	text03 = "에란겔";
		 	break;

		 }

		 document.getElementById("p_text01").innerHTML = text01+"";
		 document.getElementById("p_text02").innerHTML = text02+"";
		 document.getElementById("p_text03").innerHTML = text03+"";


	}

}


function over( e ) {
  
  /*var event_id = document.getElementById(e);*/

  if ( e.id == "zum01" ) {

    var subId = document.getElementById('zum_sub01');

    var str = "<strong>자르키(Zharki)</strong><br>";
    str += "북서쪽 끝에 있는 마을 수준의 소도시";

    subId.style.display = "block";

    //	left: 10%; top: 19.3%;
    
    subId.style.left = "18%"; /*120*/
    subId.style.top = "19.3%";


    subId.innerHTML = str;

  }

    if ( e.id == "zum02" ) {

    var subId = document.getElementById('zum_sub01');

    var str = "<strong>세베르니(Severny)</strong><br>";
    str += "북쪽 끝에 있는 소도시";

    subId.style.display = "block";

    /*
	left: 43%;
	top: 17%;
    */

    
    subId.style.left = "51%";
    subId.style.top = "17%";


    subId.innerHTML = str;

  }

    if ( e.id == "zum03" ) {

    var subId = document.getElementById('zum_sub01');


    var str = "<strong>학교(School)</strong><br>";
    str += "한가운데의 매우 커다란 사각형으로 표시된 건물";

    subId.style.display = "block";

    /*
	left: 48%;
	top: 43%;
    */
    
    subId.style.left = "56%";
    subId.style.top = "43%";


    subId.innerHTML = str;

  }



}

/*    
    기본 
    if ( e.id == "zum0" ) {

    var subId = document.getElementById('zum_sub01');

    var str = "<strong>  </strong><br>"

    subId.innerHTML = str;

  } */


function div_click(e){

  if ( e.id == "zum01" ) {

      var subId = document.getElementById('zum_sub02');

      var str = "<strong>자르키(Zharki)</strong><br><br>";
      str += "북서쪽 끝에 있는 마을 수준의 소도시. 섬 가장자리에 있는 데다 바로 아래에 최대 크기의 도시인 게오르고폴(BK)이 있어 사람들이 잘 가지 않는 마을. 그러나 사람들이 가지 않는 마을인 만큼 초반 싸움을 피하고 싶다면 한번쯤 가볼만하다. 생각보다 파밍할 건물이 많아서 기본적인 교전은 가능한 정도로 파밍할 수 있다. 사실 파밍은 상당히 수월하나, 첫 번째 자기장이 멀리 잡히는 경우가 많아 기피된다. "


      subId.innerHTML = str;

  }

    if ( e.id == "zum02" ) {

      var subId = document.getElementById('zum_sub02');

      var str = "<strong>세베르니(Severny)</strong><br><br>";
      str += "북쪽 끝에 있는 소도시. 마을 규모가 작아 스쿼드 4명이서 파밍하기엔 비좁고, 섬 가장자리라 그렇게 많은 사람들이 내리지는 않는다.<br>";
      str += "하지만 차량 스폰지점이 주변에 두세 개 정도 있어, 다른 외곽 마을과는 달리 차량을 구해 다른 지역으로 진출하기에 용이하다는 점은 소소한 메리트.<br>";
      str += "또한 스쿼드로 내리기엔 애매하다는 단점도 마을 바로 밑에 슈팅레인지가 붙어있기 때문에 3명은 서버니, 1명은 슈팅레인지에 내리는 것으로 커버가 되기 때문에 아예 비인기 지역은 아니다. <br>";
      str += "아무래도 북쪽 끝에 위치한 마을이니 안전지대 밖일 확률이 높아 로조크 방향으로 다음 진로를 결정하는 경우가 대부분인데, 지도를 보면 알겠지만 로조크와 세베르니 사이에는 짤파밍을 할 장소조차 없는 만큼 적과 조우할 일도 없어 2~3번째 원까지는 쉽게 이동할 확률이 높다. <br>";
      str += "지명의 유래는 '북쪽의'라는 뜻의 러시아어 형용사 '세베르니(Северный/Severnyy)'로 보인다. 사람에 따라서 '시버니', '서버니'라고 부르기도 한다.";
      subId.innerHTML = str;

  }

  if ( e.id == "zum03" ) {

    var subId = document.getElementById('zum_sub02');

    var str = "<strong>학교(School)</strong><br><br>"

    str += "한가운데의 매우 커다란 사각형으로 표시된 건물.<br>"
    str += "단일 건물 면적으로는 최대의 면적을 자랑하는데, 교실, 강당, 수영장 등 다양한 시설을 갖춘 대형 건물이다.<br>"
    str += "장소가 학교라 이 곳에 내린 모든 유저들을 정리하면 졸업했다고 표현한다.<br>"
    str += "학교 자체도 아이템 파밍에 유리할 뿐만 아니라, 졸업을 한 후에도 로조크나 아파트로 진출해 계속해서 싸울 수 있기에 여포를 좋아하는 유저가 많이 몰리는 지역들 중 하나이다. <br>"
    str += "하지만 내린 적이 많아 교전이 길어진다면 가뜩이나 한정된 자원이 순식간에 소모되며 주변 자동차의 젠 확률이 낮기 때문에 후반을 위한 이동이 까다로울 수 있다.<br>"
    str += "학교에 내리는 도중 많은 적이 학교에 내리는 것을 보았고 스스로 전투 능력이 떨어져 빠른 정리가 불가능하다고 판단되면 빠르게 낙하산을 돌려 차를 구해 비행기 동선 반대의 장소로 이동하는 것을 익혀 두는 것도 좋다.<br>"
    str += "트위치에서는 가끔 이곳을 팡팡교육대라고도 부르기도 한다.";

    subId.innerHTML = str;

  }


}

function div_out(e){


  var subId = document.getElementById('zum_sub01');

  subId.style.display = "none";

}