var PiecesRouter = Backbone.Router.extend({
	routes: {
		"": "pieces"
	},


	initialize: function(){
		storage = "";
		clicked = false;
		pieces = new PiecesCollection();
		pieceListView = new PieceListView({collection: pieces});
		pieces.fetch({reset: true});
	}
})