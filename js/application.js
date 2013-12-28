console.log('### picRank started ###');
console.log('### Fetching pics ###');

var pictures = new Pictures(); //the whole set of pics from flickr
pictures.fetchPics();
var h2h = new Pictures(); // the two pics head 2 head
var selector = new Selector({collection: h2h}); //the h2h view
var picSet = new PicSet({collection: pictures}); //the picset view
$('#pick').append(selector.el);

console.log('### picRank loading completed ###');

$(document).ready(function (){
	$('#startBtn').on('click',function(){
		console.log('start');	
		var num1 = 0;
		var num2 = 0;
		while (num1 == num2){
			var num1 = Math.floor((Math.random()*(pictures.length-1)));
			var num2 = Math.floor((Math.random()*(pictures.length-1)));
		}
		console.log(num1+' - '+num2);
		h2h.reset();
		h2h.add(pictures.models[num1]);
		h2h.add(pictures.models[num2]);	
		selector.render();
		//$(this).hide();	
	});
	
});