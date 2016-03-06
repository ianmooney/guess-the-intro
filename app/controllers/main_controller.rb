class MainController < ApplicationController
  include SpotifyHelper

  def index
    if spotify_user
      @track_answer = get_random_track
      @track_options = 4.times.collect { get_random_track }
    end
  end

  private
  def get_random_track
    spotify_user.playlists.sample.tracks.sample
  end
end
