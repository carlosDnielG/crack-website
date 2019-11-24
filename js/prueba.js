$(document).ready(function(){
	$('.datepicker')ñ.datepicker();
});

$(document).ready(function(){
	$('select').formselect();
});

$('#iniciar').click(function(){
	$('#p1').slideDonw();
	$('#iniciar').hide();
});
$('#siguiente').click(function(){
	if($("#p1").show()){
	   $("#p1").hide();
	}
	if($("#p2").hide()){
		$("#p2").show();
	}
});