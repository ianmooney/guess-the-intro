window.Tracks = {
  currentTrackID: null,
  player: new Audio(),
  init: function() {
    $('a.play-track').click(function() {
      var trackID = $(this).data('track-id');

      Tracks.playTrack(trackID);
    });

    $('a.guess-track').click(function() {
      var trackID = $(this).data('track-id');

      if (Tracks.currentTrackID == trackID) {
        alert('Correct!');
      } else {
        alert('Wrong, try again.');
      }
    });
  },
  playTrack: function(trackID) {
    Tracks.currentTrackID = trackID;
    
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
