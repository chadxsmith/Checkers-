var PiecesRouter = Backbone.Router.extend({
	routes: {
		"": "pieces"
	},


	initialize: function(){
		storage = ""
		pieces = new PiecesCollection();
		pieceListView = new PieceListView({collection: pieces});
		pieces.fetch({reset: true});
	}
})