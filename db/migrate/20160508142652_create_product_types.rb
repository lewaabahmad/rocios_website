class CreateProductType < ActiveRecord::Migration
  def change
    create_table :product_types do |t|
      t.string :title

      t.timestamps null: false
    end
  end
end
