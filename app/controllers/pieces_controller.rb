class PiecesController < ApplicationController
  def index
    @pieces = Piece.where(jumped: false)
    render status: 200, json: @pieces.to_json
  end

  def show
  	@piece = Piece.find(params[:id])
  	render status: 200, json: @piece.to_json
  end

end
