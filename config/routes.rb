Rails.application.routes.draw do
  root "home#index"
  get '*path', to: 'home#index', via: :all
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
