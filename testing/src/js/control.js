var load_ed_imgs = function(ed, callback) {
	console.log('load_ed_imgs' + ed);
	var imgs = $('#' + ed + ' img');
	$.each(imgs, function(idx, ele) {
		console.log($(ele));
		var real_url = $(ele).attr('data-echo');
		if(real_url != undefined && real_url != ele.src) {
			ele.src = real_url;
			$(ele).load(function() {
				if(idx == imgs.length-1) {
					console.log('calling callback');
					callback();
				}
			});
		}
	});
}
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
			//$(document).scrollTop( $('#' + page[0]).offset().top-40 );
			if(text != undefined) {
				console.log(text);
			//	$(document).scrollTop( $('#' + text).offset().top );
				$(window).load(function() {
					console.log('calling2');
			//		$(document).scrollTop( $('#' + text).offset().top );
				});
			}

			load_ed_imgs(page[0], function() {
				console.log('got here');
				$(document).scrollTop( $('#' + page[0]).offset().top-40 );
				if(text != undefined) {
					console.log(text);
					$(document).scrollTop( $('#' + text).offset().top );
					$(window).load(function() {
						console.log('calling2');
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
