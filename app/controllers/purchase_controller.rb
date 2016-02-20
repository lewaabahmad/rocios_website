class PurchaseController < ApplicationController

  def new
    @purchase = Purchase.new
    render layout: "purchase_new"
  end

  def create
    purchase_params
    #Purchase.create(params[:purchase])
  end

  private
  def purchase_params
    binding.pry
    params.require(:purchase).permit()
  end 
end
