// MASONRY
var container = document.querySelector('#folderContent');
var msnry = new Masonry(container, {
  gutter: '.gutterSizer',
  columnWidth: '.gridSizer',
  itemSelector: '.folderItem'
});

// ONLAYOUT
function onLayout(){
  setTimeout(function() {
    $(window).trigger("scroll");
  }, 600);
}

// bind event listener
msnry.on( 'layoutComplete', onLayout );