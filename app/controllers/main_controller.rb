class MainController < ApplicationController
  include SpotifyHelper

  def index
    if spotify_user
      @track_answer = get_answer_track
      @track_options = 4.times.collect { get_random_track }
    end
  end

  private
  def get_answer_track
    track = get_random_track

    until track.preview_url
      track = get_random_track
    end

    track
  end

  def get_random_track
    spotify_user.playlists(limit: 50).sample.tracks.sample
  end
end
