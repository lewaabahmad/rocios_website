class CreateProductSeries < ActiveRecord::Migration
  def change
    create_table :product_series do |t|
      t.string :title
      t.string :tagline
      t.string :description

      t.timestamps null: false
    end
  end
end