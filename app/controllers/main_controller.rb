class MainController < ApplicationController
  include SpotifyHelper

  def index
    if spotify_user
      @playlist = spotify_user.playlists.first
    end
  end
end
