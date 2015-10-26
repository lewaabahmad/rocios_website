class PurchaseController < ApplicationController
  def new
    @purchase = Purchase.new
  end

  def create
    binding.pry
    Purchase.create(params[:purchase])
  end
end
