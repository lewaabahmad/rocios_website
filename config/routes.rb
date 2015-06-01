Rails.application.routes.draw do
  
  resources :posts

  root to: "static_pages#index"
  

end
