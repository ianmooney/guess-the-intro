module SpotifyHelper
  def spotify_user
    if session[:spotify_auth]
      @spotify_user ||= RSpotify::User.new(session[:spotify_auth])
    end
  end
end
