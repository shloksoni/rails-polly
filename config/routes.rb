Rails.application.routes.draw do
  resources :users, only: :create
  resource :sessions, only: %i[create destroy]
  resources :polls, only: %i[index create show]
  resource :responses, only: :create
  root "home#index"
  get '*path', to: 'home#index', via: :all

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
