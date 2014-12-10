// FILTERING SCRIPT
var wintersport = "?wintersport";
var fashion = "?fashion";
var junior = "?junior";
var outdoor = "?outdoor";
var bike = "?bike";
var gadgets = "?gadgets";
var lookbook = "?lookbook";
var groeneprijzen = "?groeneprijzen";
var christmas = "?christmas";

var navFix = "navFix";

var testArray = location.search.split("&");
var testParam = testArray[0];

// var paramArray = ["?wintersport", "?fashion", "?junior", "?outdoor", "?bike", "?gadgets", "?christmas"];
// var classArray = [".wintersport", ".fashion", ".junior", ".outdoor", ".bike", ".gadgets", ".christmas"];
//
// // URL PARAMETER
// function filter(paramArray, classArray){
//   //LOOPING THROUGH THE PARAM ARRAY
//   for(i=0; i<paramArray.length; i++){
//     var testParam = paramArray[i];
//     function urlParam(testParam){
//       var urlSuffix = location.search;
//       urlArray = urlSuffix.split("&");

//       if(testParam === urlArray[0]){
//         alert(testParam);
//         imagesLoaded(container, function() {
//           msnry.layout();
//           onLayout();
//         });
//       }
//     }
//   }
// }
//
// filter();

function filter() {

  if (testParam === wintersport) {
    $(".gadgets, .outdoor, .bike, .junior, .fashion, .christmas, .groeneprijzen, .lookbook, .hiddenBlock").hide();
    $(".wintersport").show();

    $("li#wintersport").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === fashion) {
    $(".wintersport, .gadgets, .outdoor, .bike, .junior, .christmas, .groeneprijzen, .lookbook, .hiddenBlock").hide();
    $(".fashion").show();

    $("li#fashion").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === junior) {
    $(".wintersport, .gadgets, .outdoor, .bike, .fashion, .christmas, .groeneprijzen, .lookbook, .hiddenBlock").hide();
    $(".junior").show();

    $("li#junior").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === outdoor) {
    $(".wintersport, .gadgets, .bike, .junior, .fashion, .christmas, .groeneprijzen, .lookbook, .hiddenBlock").hide();
    $(".outdoor").show();

    $("li#outdoor").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === bike) {
    $(".wintersport, .gadgets, .outdoor, .junior, .fashion, .christmas, .groeneprijzen, .lookbook, .hiddenBlock").hide();
    $(".bike").show();

    $("#bike").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === gadgets) {
    $(".wintersport, .outdoor, .bike, .junior, .fashion, .christmas, .groeneprijzen, .lookbook, .hiddenBlock").hide();
    $(".gadgets").show();

    $("#gadgets").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === lookbook) {
    $(".wintersport, .gadgets, .outdoor, .bike, .junior, .fashion, .christmas, .groeneprijzen, .hiddenBlock").hide();
    $(".lookbook").show();

    $("#lookbook").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === groeneprijzen) {
    $(".wintersport, .gadgets, .outdoor, .bike, .junior, .fashion, .christmas, .lookbook, .hiddenBlock").hide();
    $(".groeneprijzen").show();

    $("#groeneprijzen").addClass("active");
    $("#alleFolderProducten").removeClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === christmas) {
    $(".wintersport, .gadgets, .outdoor, .bike, .junior, .fashion, .groeneprijzen, .lookbook, .hiddenBlock").hide();
    $(".christmas").show();

    $("#christmas").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else {
    $(".folderItem").show();
    $(".hiddenBlock").hide();
    $("#alleFolderProducten").addClass("active");

    msnry.layout();
    onLayout();
  }

  // Click Events

  $("#wintersport").click(function() {
    location.search = wintersport;
  });

  $("#fashion").click(function() {
    location.search = fashion;
  });

  $("#junior").click(function() {
    location.search = junior;
  });

  $("#outdoor").click(function() {
    location.search = outdoor;
  });

  $("#bike").click(function() {
    location.search = bike;
  });

  $("#gadgets").click(function() {
    location.search = gadgets;
  });

  $("#lookbook").click(function() {
    location.search = lookbook;
  });

  $("#acties").click(function() {
    location.search = acties;
  });

  $("#groeneprijzen").click(function() {
    location.search = groeneprijzen;
  });

  $("#christmas").click(function() {
    location.search = christmas;
  });

  $("#alleFolderProducten").click(function() {
    location.search = "";
  });
}

filter();
