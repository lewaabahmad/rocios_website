class Purchase < ActiveRecord::Base
  def self.valid(purchase_params)
    if cost_correct?(purchase_params)
      begin
        charge = Stripe::Charge.create(
          :amount => (purchase_params["totalCost"] + "00").to_i, # amount in cents, again
          :currency => "usd",
          :source => purchase_params["stripeToken"],
          :description => "Art Sale!!!"
        )
      rescue Stripe::CardError => e
        return false
      end
    else
      return false
    end
    create(creation_params(purchase_params))
  end

  def self.cost_correct?(pp)
    cost_from_client = pp["totalCost"].to_i
    cost_from_calculation = 0
    pp["selectedArt"].split(",").each do |piece_title| 
      piece = Art.find_by(title: piece_title)
      cost_from_calculation += piece.price
    end
    cost_from_client == cost_from_calculation
  end

  def self.creation_params(pp)
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
end