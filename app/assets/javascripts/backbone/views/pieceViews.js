var PieceView = Backbone.View.extend({
	className: 'piece',
	tagName: 'div',
	template: HandlebarsTemplates['pieces/show'],

	events: {
		"click": "mover"
	},

	initialize: function(){
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},

	render: function(){
		var renderedHTML = this.template(this.model.toJSON());
		this.$el.html(renderedHTML)
	},

	mover: function(){
	var view = this 
	$("#"+ view.model.attributes.position + "").css('background', 'yellow');
	storage = $("#"+ view.model.attributes.position + "")
	clicked = true;
	console.log(clicked)


	

	},

});