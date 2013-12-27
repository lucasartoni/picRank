var PictureView = Backbone.View.extend({
	template: _.template('<div class="picture"><img src="<%= picURL %>"><div class="caption"><p><span class="pictitle"><a href="<%= pageURL %>"><%= title %></a></span> <span class="clicks"><%= clicks %> Clicks</span></p></div></div>'),
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