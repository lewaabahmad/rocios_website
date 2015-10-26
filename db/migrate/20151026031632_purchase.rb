class Purchase < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
      t.string :purchaser
      t.string :state 
      t.string :city
      t.string :address_line_1
      t.string :address_line_2
      t.string :apartment
      t.string :zip_code

      t.integer :art_id
    end
  end
end
