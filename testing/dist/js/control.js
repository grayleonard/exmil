var hf = function() {
	if(document.location.hash.length > 1) {
		var page = document.location.hash.replace("#", "").split("/");
		var edition = $('.edition#'+page[0]);
		console.log(edition);
		if(edition.length != 0) {
			var text = page[1];
			edition.addClass('active').removeClass('not-active');
			$('.entries').addClass('show').removeClass('dont-show');
			$('.edition').not(edition).addClass('not-active').removeClass('active');
			$('#navigation').addClass('show').removeClass('dont-show');
			$(document).scrollTop( $('#' + page[0]).offset().top-40 );
			if(text != undefined) {
				console.log(text);
				$(document).scrollTop( $('#' + text).offset().top );
				$(window).load(function() {
					console.log('calling2');
					$(document).scrollTop( $('#' + text).offset().top );
				});
			}
		} else {
			hp();
		}
	} else {
		$('.edition').removeClass('active').removeClass('not-active');
		$('#navigation').addClass('dont-show').removeClass('show');
	}

}
var hp = function() {
		$('.entries').addClass('dont-show').removeClass('show');
		$('.edition').addClass('active').removeClass('not-active');
		$('#navigation').addClass('dont-show').removeClass('show');
}
$(document).ready(function() {
	console.log('calling');
	hf();

	$('.cover-photo').click(function(e){
		console.log($(this).attr('id'));
		document.location.hash = $(this).attr('id');
	});
});
$(window).on('hashchange', function() {
	hf();
});
