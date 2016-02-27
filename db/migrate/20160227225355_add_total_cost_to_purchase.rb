class AddTotalCostToPurchase < ActiveRecord::Migration
  def change
    add_column :purchases, :total_cost, :integer
  end
end
