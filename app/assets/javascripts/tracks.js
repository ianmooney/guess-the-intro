window.Tracks = {
  player: new Audio(),

  init: function() {
    $('ul.tracks a').click(function() {
      var trackID = $(this).data('track-id');

      Tracks.playTrack(trackID);
    });
  },

  playTrack: function(trackID) {
    $.get('https://api.spotify.com/v1/tracks/' + trackID, function(track) {
      if (!Tracks.player.paused && Tracks.player.src == track.preview_url) {
        Tracks.player.pause();
      } else {
        Tracks.player.src = track.preview_url;
        Tracks.player.play();
      }
    });
  }
};
