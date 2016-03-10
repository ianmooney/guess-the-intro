Rails.application.routes.draw do
  root 'main#index'

  get '/auth/spotify/callback', to: 'spotify#callback'
  get '/logout', to: 'spotify#logout', as: 'logout_spotify'
end
