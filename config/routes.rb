Rails.application.routes.draw do
  
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :art
  resources :posts

  root to: "static_pages#index"
  get '/about', to: 'static_pages#about'
  get '/cart', to: 'static_pages#cart'
  get '/contact', to: 'static_pages#contact'
  get '/purchase/new', to: 'purchase#new'
  post '/purchase', to: 'purchase#create'
  get '/thank_you', to: 'static_pages#thank_you'

# POST       /admin/posts(.:format)                    admin/posts#create
end
