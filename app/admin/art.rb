ActiveAdmin.register Art do
  permit_params :title, :tagline, :description, :limited, :quantity, :price, :image_url, :product_series_id, :product_type_id
end