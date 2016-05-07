class PurchaseController < ApplicationController

  def create
    if Purchase.valid(purchase_params)
      redirect_to "/thank_you"
    else
      redirect_to "/purchase_error_page"
    end
  end

  private
  def purchase_params
    params.require(:purchase).permit(:name, :email, :address_line_one, :address_line_two, :city, :state, :zip_code, :apartment, :selectedArt, :totalCost, :stripeToken)
  end 
end
