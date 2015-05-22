var PiecesCollection = Backbone.Collection.extend({
	model: PieceModel,
	url: '/pieces'
})