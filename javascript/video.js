// VIDEO SCRIPT

$('.videoPlaceHolder').click(function() {

  var video = '<div class="videoWrapper"><iframe id="video-player" width="640" height="360" src="' + $(this).attr('data-video') + '" frameborder="0" allowfullscreen></iframe></div>';
  $(this).replaceWith(video);

});

$('.videoPlaceHolderMobile').click(function() {

  var video = '<div class="videoWrapper"><iframe id="video-player" width="299" height="168" src="' + $(this).attr('data-video') + '" frameborder="0" allowfullscreen></iframe></div>';
  $(this).replaceWith(video);

});