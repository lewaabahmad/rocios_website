class PurchaseController < ApplicationController

  def new
    @purchase = Purchase.new
    render :layout => false
  end

  def create
    binding.pry
    Purchase.create(params[:purchase])
  end
end
