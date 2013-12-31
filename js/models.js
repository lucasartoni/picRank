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


var tempJSON = '{ "photos": { "page": 1, "pages": "102", "perpage": 25, "total": "2535", "photo": [{ "id": "11399600295", "owner": "21925196@N08", "secret": "1c2e6e331b", "server": "3768", "farm": 4, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },    { "id": "11399593576", "owner": "21925196@N08", "secret": "ea6a25e0ae", "server": "5531", "farm": 6, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11399725763", "owner": "21925196@N08", "secret": "e4315e11aa", "server": "7362", "farm": 8, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11399508585", "owner": "21925196@N08", "secret": "b8affe10da", "server": "3673", "farm": 4, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11399545893", "owner": "21925196@N08", "secret": "2dba30160a", "server": "3769", "farm": 4, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },{ "id": "11399377235", "owner": "21925196@N08", "secret": "d2dd18af0c", "server": "7404", "farm": 8, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11144887606", "owner": "21925196@N08", "secret": "305df1263e", "server": "3782", "farm": 4, "title": "Ravenna", "ispublic": 1, "isfriend": 0, "isfamily": 0 },     { "id": "11399508506", "owner": "21925196@N08", "secret": "135fc64741", "server": "3831", "farm": 4, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11399489375", "owner": "21925196@N08", "secret": "bd707a6c95", "server": "5538", "farm": 6, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 }, { "id": "11399679613", "owner": "21925196@N08", "secret": "3b19d81dbf", "server": "3762", "farm": 4, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11399521666", "owner": "21925196@N08", "secret": "47e104f291", "server": "2849", "farm": 3, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },{ "id": "11399571885", "owner": "21925196@N08", "secret": "bf7e0bff60", "server": "3756", "farm": 4, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11399661703", "owner": "21925196@N08", "secret": "597c750814", "server": "3684", "farm": 4, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },{ "id": "11399557576", "owner": "21925196@N08", "secret": "9057bd874e", "server": "5524", "farm": 6, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11399557344", "owner": "21925196@N08", "secret": "39bb2efee5", "server": "7423", "farm": 8, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },{ "id": "11399650193", "owner": "21925196@N08", "secret": "597f73711e", "server": "3726", "farm": 4, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11399431095", "owner": "21925196@N08", "secret": "b130ba1285", "server": "5542", "farm": 6, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },{ "id": "11399574483", "owner": "21925196@N08", "secret": "0fc8e4fa5c", "server": "7424", "farm": 8, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11399495724", "owner": "21925196@N08", "secret": "c4bb0f324a", "server": "7316", "farm": 8, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },{ "id": "11399526193", "owner": "21925196@N08", "secret": "ec916c1bdb", "server": "5535", "farm": 6, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11399567323", "owner": "21925196@N08", "secret": "5b7723c7bc", "server": "3696", "farm": 4, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },{ "id": "11399398225", "owner": "21925196@N08", "secret": "ce06fb2ce3", "server": "3747", "farm": 4, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11399414705", "owner": "21925196@N08", "secret": "75160b4bf4", "server": "3732", "farm": 4, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },{ "id": "11399418204", "owner": "21925196@N08", "secret": "b11d0e3fe1", "server": "2834", "farm": 3, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 },      { "id": "11399413664", "owner": "21925196@N08", "secret": "64c02c0d4a", "server": "5472", "farm": 6, "title": "Paris", "ispublic": 1, "isfriend": 0, "isfamily": 0 }] }, "stat": "ok" }'; //temporary JSON for testing purposes until Fickr Auth is fixed;


var Pictures = Backbone.Collection.extend({
	model: Picture,
	fetchPics: function(){
		var query = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1f8fdc67dc07dc24dfabdf20feb9866e&user_id=21925196%40N08&format=json&nojsoncallback=1'
		query = 'http://www.lucasartoni.com/picRank/response.json';
		var that = this;
		if (!tempJSON){
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
		} else { //for testing purposes. then refactor
			var tempObj= eval("("+tempJSON+")");
			for (var i=0; i<tempObj.photos.photo.length;i++){
				var photo=tempObj.photos.photo[i];
				var pic=new Picture();
				pic.set('title',photo.title);
				pic.set('picURL','http://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret);
				pic.set('pageURL','http://www.flickr.com/photos/'+photo.owner+'/'+photo.id);
				that.add(pic);
			}
		}
	},
	comparator: function(model){
		return -model.get('clicks');
	}
});
