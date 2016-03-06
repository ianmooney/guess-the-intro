Rails.application.routes.draw do
  root 'main#index'

  get '/auth/spotify/callback', to: 'spotify#callback'
end
