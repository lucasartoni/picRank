console.log('### picRank started ###');
console.log('### Fetching pics ###');

var pictures = new Pictures(); //the whole set of pics from flickr
pictures.fetchPics();
var h2h = new Pictures(); // the two pics head 2 head
var selector = new Selector({collection: h2h}); //the h2h view
var picSet = new PicSet({collection: pictures}); //the picset view


console.log('### picRank loading completed ###');

$(document).ready(function (){
	$('#pick').append(selector.el);
	$('#allpics').find('.panel-body').append(picSet.el);
	
	$('#startBtn').on('click',function(){
		var num1 = 0;
		var num2 = 0;
		while (num1 == num2){
			var num1 = Math.floor((Math.random()*(pictures.length-1)));
			var num2 = Math.floor((Math.random()*(pictures.length-1)));
		}
		h2h.reset();
		h2h.add(pictures.models[num1]);
		h2h.add(pictures.models[num2]);	
		selector.render();
		pictures.sort();
		picSet.render();
		$(this).html('Skip <span class="glyphicon glyphicon-circle-arrow-right"></span>');
		$('#toggleRes').fadeIn('slow');
		$('#pick-panel').slideDown('slow');
		$('#tips').slideDown('slow');
		$('#tips').on('click',function(){
			$(this).slideUp('slow');
			$(this).detach();
		})
	});
	$('#toggleRes').on('click',function(){
		$('#allpics').slideToggle('slow');
		if ($('#toggleRes').html() == 'Show Results'){
			$('#toggleRes').html('Hide Results');
		}else{
			$('#toggleRes').html('Show Results');
		}
	});
	
});