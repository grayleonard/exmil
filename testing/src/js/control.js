var load_ed_imgs = function(ed, callback) {
	if(has_loaded[ed-1] == true) {
		callback();
		return;
	}
	var count = 0;
	var imgs = $('#' + ed + ' img').filter(function(a) {
		var attr = $(this).attr('data-echo');
		if (typeof attr !== typeof undefined && attr !== false) {
			return true;
		} return false;
	});
	$('#loading-screen').removeClass('dont-show');
	$.each(imgs, function(idx, ele) {
		var real_url = $(ele).attr('data-echo');
		if(real_url != undefined && real_url != ele.src) {
			ele.src = real_url;
			$(ele).load(function() {
				count++;
				if(count == imgs.length-1) {
					callback();
				}
			});
		}
	});
}
var has_loaded = [false, false, false, false];
var hf = function() {
	if(document.location.hash.length > 1) {
		var page = document.location.hash.replace("#", "").split("/");
		var edition = $('.edition#'+page[0]);
		if(edition.length != 0) {
			var text = page[1];
			edition.addClass('active').removeClass('not-active');
			$('.entries').addClass('show').removeClass('dont-show');
			$('.edition').not(edition).addClass('not-active').removeClass('active');
			$('#navigation').addClass('show').removeClass('dont-show');
			load_ed_imgs(page[0], function() {
				has_loaded[page[0]-1] = true;
				$('#loading-screen').addClass('dont-show');
				$(document).scrollTop($('#' + page[0]).offset().top-40);
				if(text != undefined) {
					$(document).scrollTop( $('#' + text).offset().top );
					$(window).load(function() {
						$(document).scrollTop( $('#' + text).offset().top );
					});
				}
			});
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
