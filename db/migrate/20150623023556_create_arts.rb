class CreateArts < ActiveRecord::Migration
  def change
    create_table :arts do |t|
      t.string :title, :unique => true
      t.string :tagline
      t.string :description
      t.boolean :limited
      t.integer :quantity
      t.integer :price
      t.string :image_url

      t.timestamps null: false
    end
  end
end
