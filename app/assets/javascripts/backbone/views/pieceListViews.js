var PieceListView = Backbone.View.extend({
	el: "#checkers",

	initialize: function() {
		this.listenTo(this.collection, 'reset', this.renderAll);
	},
	renderAll: function() {
		// this.$el.empty();  
		this.collection.each(this.renderOne.bind(this));


	},
	renderOne: function(piece){
		var view = new PieceView({model: piece});
		view.render();
		$("#"+ view.model.attributes.position + "").append(view.$el)
		// this.$el.append("#"+ view.model.attributes.position + "")
	}
});