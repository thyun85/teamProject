$(document).ready(function(){
	$('#menuGuide').on('click', function(){
		$('.listGuide').slideToggle("fast");
		return false;
	});

	$('#menuWeapons').on('click', function(){
		$('.listWeapons').slideToggle("fast");
		return false;
	});

	$('#menuItems').on('click', function(){
		$('.listItems').slideToggle("fast");
		return false;
	});

	$('#menuMaps').on('click', function(){
		$('.listMaps').slideToggle("fast");
		return false;
	});

	// GUIDE
	$('#guide_main').click(function(){
		$('#articlePage').load('./guide/pro_main.html');
		return false;
	});

	$('#guide_mode').click(function(){
		$('#articlePage').load('./guide/pro_mode.html');
		return false;
	});

	$('#guide_airplane').click(function(){
		$('#articlePage').load('./guide/pro_airplane.html');
		return false;
	});

	$('#guide_magneticField').click(function(){
		$('#articlePage').load('./guide/pro_magneticField.html');
		return false;
	});

	$('#guide_redZone').click(function(){
		$('#articlePage').load('./guide/pro_redZone.html');
		return false;
	});

	$('#guide_supply').click(function(){
		$('#articlePage').load('./guide/pro_supply.html');
		return false;
	});

	$('#guide_parkur').click(function(){
		$('#articlePage').load('./guide/pro_parkur.html');
		return false;
	});

	$('#guide_soundPlay').click(function(){
		$('#articlePage').load('./guide/pro_soundPlay.html');
		return false;
	});

	$('#guide_fallDamage').click(function(){
		$('#articlePage').load('./guide/pro_fallDamage.html');
		return false;
	});

	$('#guide_replay').click(function(){
		$('#articlePage').load('./guide/pro_replay.html');
		return false;
	});

	//WEAPONS
	$('#ar').click(function(){
		$('#articlePage').load('./weapons/ar.html');
		return false;
	});

	$('#dmr').click(function(){
		$('#articlePage').load('./weapons/dmr.html');
		return false;
	});

	$('#sr').click(function(){
		$('#articlePage').load('./weapons/sr.html');
		return false;
	});

	$('#smg').click(function(){
		$('#articlePage').load('./weapons/smg.html');
		return false;
	});

	$('#lmg').click(function(){
		$('#articlePage').load('./weapons/lmg.html');
		return false;
	});

	$('#sg').click(function(){
		$('#articlePage').load('./weapons/sg.html');
		return false;
	});

	$('#sw').click(function(){
		$('#articlePage').load('./weapons/sw.html');
		return false;
	});

	$('#amm').click(function(){
		$('#articlePage').load('./weapons/amm.html');
		return false;
	});

	// ITEMS
	$('#item1').click(function(){
		$('#articlePage').load('./items/items.html');
		return false;
	});

	//MAPS
	$('#map1').click(function(){
		$('#articlePage').load('./maps/map/map01.html');
		return false;
	});

	$('#map2').click(function(){
		$('#articlePage').load('./maps/map/map02.html');
		return false;
	});

	//자유게시판
	$('#menuFreeboard').click(function(){
		$('#articlePage').load('./freeBoard/index.php');
		return false;
	});


	// 모바일
	$('#menuGuide_mobile').on('click', function(){
		$('.listGuide_mobile').slideToggle("fast");
		return false;
	});

	$('#menuWeapons_mobile').on('click', function(){
		$('.listWeapons_mobile').slideToggle("fast");
		return false;
	});

	$('#menuItems_mobile').on('click', function(){
		$('.listItems_mobile').slideToggle("fast");
		return false;
	});

	$('#menuMaps_mobile').on('click', function(){
		$('.listMaps_mobile').slideToggle("fast");
		return false;
	});

	// GUIDE
	$('#guide_main_mobile').click(function(){
		$('#articlePage').load('./guide/pro_main.html');
		return false;
	});

	$('#guide_mode_mobile').click(function(){
		$('#articlePage').load('./guide/pro_mode.html');
		return false;
	});

	$('#guide_airplane_mobile').click(function(){
		$('#articlePage').load('./guide/pro_airplane.html');
		return false;
	});

	$('#guide_magneticField_mobile').click(function(){
		$('#articlePage').load('./guide/pro_magneticField.html');
		return false;
	});

	$('#guide_redZone_mobile').click(function(){
		$('#articlePage').load('./guide/pro_redZone.html');
		return false;
	});

	$('#guide_supply_mobile').click(function(){
		$('#articlePage').load('./guide/pro_supply.html');
		return false;
	});

	$('#guide_parkur_mobile').click(function(){
		$('#articlePage').load('./guide/pro_parkur.html');
		return false;
	});

	$('#guide_soundPlay_mobile').click(function(){
		$('#articlePage').load('./guide/pro_soundPlay.html');
		return false;
	});

	$('#guide_fallDamage_mobile').click(function(){
		$('#articlePage').load('./guide/pro_fallDamage.html');
		return false;
	});

	$('#guide_replay_mobile').click(function(){
		$('#articlePage').load('./guide/pro_replay.html');
		return false;
	});

	//WEAPONS
	$('#ar_mobile').click(function(){
		$('#articlePage').load('./weapons/ar.html');
		return false;
	});

	$('#dmr_mobile').click(function(){
		$('#articlePage').load('./weapons/dmr.html');
		return false;
	});

	$('#sr_mobile').click(function(){
		$('#articlePage').load('./weapons/sr.html');
		return false;
	});

	$('#smg_mobile').click(function(){
		$('#articlePage').load('./weapons/smg.html');
		return false;
	});

	$('#lmg_mobile').click(function(){
		$('#articlePage').load('./weapons/lmg.html');
		return false;
	});

	$('#sg_mobile').click(function(){
		$('#articlePage').load('./weapons/sg.html');
		return false;
	});

	$('#sw_mobile').click(function(){
		$('#articlePage').load('./weapons/sw.html');
		return false;
	});

	$('#amm_mobile').click(function(){
		$('#articlePage').load('./weapons/amm.html');
		return false;
	});

	// ITEMS
	$('#item1_mobile').click(function(){
		$('#articlePage').load('./items/itmes.html');
		return false;
	});

	//MAPS
	$('#map1_mobile').click(function(){
		$('#articlePage').load('./maps/map/map01.html');
		return false;
	});

	$('#map2_mobile').click(function(){
		$('#articlePage').load('./maps/map/map02.html');
		return false;
	});

	//자유게시판
	$('#menuFreeboard_mobile').click(function(){
		$('#articlePage').load('./freeBoard/index.php');
		return false;
	});

});