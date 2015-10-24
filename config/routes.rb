Rails.application.routes.draw do
  
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :art
  resources :posts

  root to: "static_pages#index"
  get '/about', to: 'static_pages#about'

end
