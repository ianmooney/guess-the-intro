class MainController < ApplicationController
  def index
    @playlist = RSpotify::Playlist.find('iancmooney', '62pAWODrfGVlgSqnHKlTdr')
  end
end
