class SpotifyController < ApplicationController
  def callback
    session[:spotify_auth] = request.env['omniauth.auth']
    redirect_to root_path
  end

  def logout
    session.delete(:spotify_auth)
    redirect_to root_path
  end
end
