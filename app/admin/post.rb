ActiveAdmin.register Post do
  permit_params :title, :tagline, :body
end
