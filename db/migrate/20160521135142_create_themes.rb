class CreateThemes < ActiveRecord::Migration
  def change
    create_table :themes do |t|
      t.string :title, :unique => true
      t.string :primary_color
      t.string :secondary_color
      t.string :background_image

      t.timestamps null: false
    end
  end
end
