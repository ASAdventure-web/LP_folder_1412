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
    $(".folderItem").hide();
    $(".wintersport").show();

    $("li#wintersport").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === fashion) {
    $(".folderItem").hide();
    $(".fashion").show();

    $("li#fashion").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === junior) {
    $(".folderItem").hide();
    $(".junior").show();

    $("li#junior").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === outdoor) {
    $(".folderItem").hide();
    $(".outdoor").show();

    $("li#outdoor").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === bike) {
    $(".folderItem").hide();
    $(".bike").show();

    $("#bike").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === gadgets) {
    $(".folderItem").hide();
    $(".gadgets").show();

    $("#gadgets").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === lookbook) {
    $(".folderItem").hide();
    $(".lookbook").show();

    $("#lookbook").addClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === groeneprijzen) {
    $(".folderItem").hide();
    $(".groeneprijzen").show();

    $("#groeneprijzen").addClass("active");
    $("#alleFolderProducten").removeClass("active");
    window.location.hash = navFix;

    msnry.layout();
    onLayout();

  } else if (testParam === christmas) {
    $(".folderItem").hide();
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
