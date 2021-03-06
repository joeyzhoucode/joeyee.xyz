Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  # Routes for Google authentication
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')

  scope '/api' do
    get 'user', to: 'users#show'
    get 'groups/new', to: 'groups#new'
    get 'gymLab/gyms', to: 'gym_lab_app#gyms'
    resources :groups
    resources :users
    resources :messages
  end

  get '*path', to: "application#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
