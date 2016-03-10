window.Tracks = {
  currentTrackID: null,
  player: null,
  init: function() {
    $(document).on('click', 'a[data-behaviour="play-track"]', function() {
      $(this).attr('data-behaviour', 'pause-track')
        .removeClass('btn-success')
        .addClass('btn-danger')
        .html('Pause track');

      var trackID = $(this).data('track-id');
      Tracks.playTrack(trackID);
    });

    $(document).on('click', 'a[data-behaviour="pause-track"]', function() {
      $(this).attr('data-behaviour', 'play-track')
        .removeClass('btn-danger')
        .addClass('btn-success')
        .html('Play track');

      Tracks.player.pause();
    });

    $(document).on('click', 'a[data-behaviour="guess-track"]', function() {
      var trackID = $(this).data('track-id');

      $(this).addClass('disabled').prop('disabled', true);

      if (Tracks.currentTrackID == trackID) {
        $(this).addClass('btn-primary');
        $('#correctModal').modal();
      } else {
        $(this).addClass('btn-danger');
      }
    });
  },
  playTrack: function(trackID) {
    if (Tracks.player == undefined) {
      Tracks.player = new Audio();
    }

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
