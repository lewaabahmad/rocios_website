class AddFulfilledToPurchase < ActiveRecord::Migration
  def change
    add_column :purchases, :fulfilled, :bool, null: false, default: false
  end
end
