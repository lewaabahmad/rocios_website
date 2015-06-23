Rails.application.routes.draw do
  
  resources :art
  resources :posts

  root to: "static_pages#index"
  

end
