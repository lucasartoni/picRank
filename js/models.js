var Picture = Backbone.Model.extend({
	defaults: {
		title: 'loading',
		picURL: 'img/pic-loader.gif',
		pageURL: 'http://www.flickr.com/',
		clicks: '0'
	},
	addClick: function(){
		var clicks = this.get('clicks');
		this.set('clicks',++clicks);
	}
});

var Pictures = Backbone.Collection.extend({
	model: Picture,
	fetchPics: function(){
		var query = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1f8fdc67dc07dc24dfabdf20feb9866e&user_id=21925196%40N08&format=json&nojsoncallback=1'
		var that = this;
		$.getJSON(query).done(function(response){
			for (var i=0; i<response.photos.photo.length;i++){
				var photo=response.photos.photo[i];
				var pic=new Picture();
				pic.set('title',photo.title);
				pic.set('picURL','http://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret);
				pic.set('pageURL','http://www.flickr.com/photos/'+photo.owner+'/'+photo.id);
				that.add(pic);
			}
		});
	},
	comparator: function(model){
		return -model.get('clicks');
	}
});
