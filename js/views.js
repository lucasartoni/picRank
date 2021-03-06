var PictureView = Backbone.View.extend({
	template: _.template('<img src="<%= picURL %>_q.jpg">'),
	className: 'col-md-6',
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	initialize: function(){
		this.model.on('change', this.render, this);
	},
	events: {'click img': 'addClick'},
	addClick: function(event){
		event.preventDefault();
		this.model.addClick();
		$('#startBtn').trigger('click');
	}
});

var SmallPictureView = Backbone.View.extend({
	className: 'smallThumb',
	template: _.template('<a href="<%= pageURL %>" target="_blank"><img src="<%= picURL %>_s.jpg" title="<%= clicks %> clicks"></a>'),
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});


var Selector = Backbone.View.extend({
	initialize: function(){
	 	this.collection.on('add', this.addOne, this);
	},
	addOne: function(picture){
 		var pictureView = new PictureView({model: picture});
 	   	this.$el.append(pictureView.render().el);
	},
	render: function(){
		this.$el.html('');
 	   this.collection.forEach(this.addOne, this);
 	}
	
});

var PicSet = Backbone.View.extend({
	initialize: function(){
	 	this.collection.on('add', this.addOne, this);
	},
	addOne: function(picture){
 		var pictureView = new SmallPictureView({model: picture});
		if (picture.get('clicks')>0){
 	   		this.$el.append(pictureView.render().el);
		};
	},
	render: function(){
		this.$el.html('');
 	   this.collection.forEach(this.addOne, this);
 	}
});