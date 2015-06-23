class CreateArts < ActiveRecord::Migration
  def change
    create_table :arts do |t|
      t.string :title
      t.string :tagline
      t.string :description
      t.boolean :limited
      t.integer :quantity
      t.decimal :price, :precision => 8, :scale => 2, :default => 0
      t.string :image_url

      t.timestamps null: false
    end
  end
end
