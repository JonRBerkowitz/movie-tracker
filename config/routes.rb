Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :movie_lists
  resources :movies
  resources :lists
  get '/login', to: 'sessions#create'
  root to: 'users#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
