class AddProductSeriesIdAndProductTypeIdToArts < ActiveRecord::Migration
  def change
    add_column :arts, :product_series_id, :integer
    add_column :arts, :product_type_id, :integer
  end
end
