class PurchaseController < ApplicationController

  def create
    binding.pry
    #Purchase.create(creation_params)
    redirect_to "/thank_you"
  end

  private
  def stripe_token
    purchase_params["stripeToken"]
  end

  def creation_params
    pp = purchase_params
    {  purchaser: pp["name"],
       state: pp["state"],
       city: pp["city"],
       address_line_1: pp["address_line_one"],
       address_line_2: pp["address_line_two"],
       apartment: pp["apartment"],
       zip_code: pp["zip_code"],
       art_array: pp["selectedArt"],
       total_cost: pp["totalCost"]
    }
  end

  def purchase_params
    params.require(:purchase).permit(:name, :email, :address_line_one, :address_line_two, :city, :state, :zip_code, :apartment, :selectedArt, :totalCost, :stripeToken)
  end 
end
