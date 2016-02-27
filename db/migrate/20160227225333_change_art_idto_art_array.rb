class ChangeArtIdtoArtArray < ActiveRecord::Migration
  def change
    rename_column :purchases, :art_id, :art_array
    change_column :purchases, :art_array, :string
  end
end
