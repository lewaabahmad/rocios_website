class ArtController < ApplicationController
  def index
    @art = Art.all
    @types = ProductType.all
    @series = ProductSeries.all
  end

  def show
    @piece = Art.find(params[:id])
  end
end
