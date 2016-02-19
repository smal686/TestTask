var second = 5; 

var showForm = function() {
	$('form').show('slide',750);
	};
	setTimeout(showForm, 5000)

var hideForm = function() {
		$('.output').click(function() {
			$('form').hide('explode',750);
			setTimeout(function() {
				$('body').html('<p class="cancel">спасибо за внимания</p>');
			}, 1000);	
		});
	};

var numberСheck = function() {
   		$("#id_numberPhone").mask("(999) 999-9999");
	};

var timer = function() {
	if(second != 0) {
		second = --second;
		$('#timer').html(second);
	} else {
		$('.timer').hide();
	};
	setTimeout(timer, 1000);
}

jQuery(function($){
	timer();
	hideForm();
	numberСheck();
});
