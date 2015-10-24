ActiveAdmin.register Art do
  permit_params :title, :tagline, :description, :limited, :quantity, :price, :image_url
end
