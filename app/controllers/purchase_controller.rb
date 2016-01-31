class PurchaseController < ApplicationController

  def new
    @purchase = Purchase.new
    render layout: "purchase_new"
  end

  def create
    # binding.pry
    # Purchase.create(params[:purchase])
  end
end
