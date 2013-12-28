var PictureView = Backbone.View.extend({
	template: _.template('<div class="col-md-4"><a href="#" class="thumbnail"><img src="<%= picURL %>"></a><div class="caption"><h3><%= title %></a></h3><%= clicks %> Clicks</div><a href="<%= pageURL %>" target="_blank"><span class="glyphicon glyphicon-camera"></span></a></div>'),
	render: function(){
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
	},
	initialize: function(){
		this.model.on('change', this.render, this);
	},
	events: {'click img': 'addClick'},
	addClick: function(){
		this.model.addClick();
	}
});