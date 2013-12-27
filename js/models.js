var Picture = Backbone.Model.extend({
	defaults: {
		title: 'this is a picture',
		picURL: 'img/placeholder.jpg',
		pageURL: 'http://www.flickr.com/',
		clicks: '0'
	}	,
	addClick: function(){
		var clicks = this.get('clicks');
		console.log(clicks);
		this.set('clicks',++clicks);
		console.log("added a click:"+ this.get('clicks'));
	}
});