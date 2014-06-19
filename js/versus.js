$(document).ready(function(){
	$(function() {
		$('#home').show('slide', {direction: 'right'}, 500);
	});

	/*Tab Transitions*/
	$('#tab1').click(function(){
		event.preventDefault;
		if(!$('#tab1').parent().hasClass('.active')) {
			event.preventDefault;
			$('#about').hide('slide', 1000);
			$('#home').show('slide', 1000);
			
		};
	});
	$('#tab2').click(function(){
		event.preventDefault;
		if($('#tab1').parent().hasClass('active')) {
			event.preventDefault;
		 	$('#about').show().delay(100);
			$('section').hide('slide', {direction: 'left'}, 300);
			$('#about').show('slide', {direction: 'right'}, 300);
		}
		else {
			event.preventDefault;
			$('#about').show().delay(100);
			$('section').hide('slide', {direction: 'right'}, 300);
			$('#about').show('slide', {direction: 'left'}, 300);
		}
	});
	$('#tab3').click(function(){
		event.preventDefault;
		if($('#tab1').parent().hasClass('active') || $('#tab2').parent().hasClass('active')){
			$('#games').show();
			$('section').hide('slide', {direction: 'left'}, 300);
			$('#games').show('slide', {direction: 'right'}, 300);
		}
	});

	$('#nav > a').click(function(){
		event.preventDefault();
		//removes active from all #nav ids
		$('li').removeClass();
		//adds active class to selected attributes' parent list item
		$(this).parent().addClass('active');
	});
});