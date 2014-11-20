// LAZY LOAD

$(function() {
  $('img.lazy').lazyload({
    //effect: 'fadeIn',
    threshold : 100,
    failure_limit : 3,
    //skip_invisible : false,
    load: function() {
      imagesLoaded(container, function() {
        msnry.layout();
      });
    }
  });
});