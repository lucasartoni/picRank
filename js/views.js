var PictureView = Backbone.View.extend({
	template: _.template('<div class="col-md-4"><a href="#" class="thumbnail"><img src="<%= picURL %>"></a><div class="caption"><h3><%= title %></a><span class="badge pull-right	"><%= clicks %></span></h3></div><a href="<%= pageURL %>" target="_blank"><span class="glyphicon glyphicon-camera"></span></a></div>'),
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
	tagname: 'img',
	className: 'smallThumb',
	template: _.template('<img src="<%= picURL %>" title="<%= clicks %>">'),
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
 	   	this.$el.append(pictureView.render().el);
	},
	render: function(){
		this.$el.html('');
 	   this.collection.forEach(this.addOne, this);
 	}
});