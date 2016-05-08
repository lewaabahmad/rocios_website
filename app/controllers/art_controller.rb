class ArtController < ApplicationController
  def index
    @art = Art.all
    @types = ProductType.all
    @series = ProductSeries.all
  end

  def new
  end

  def create
    @art_piece = Art.new(art_params)
    if @art_piece.save
      redirect_to @art_piece
    else
      render :new
    end
  end

  def show
    @piece = Art.find(params[:id])
  end
end
