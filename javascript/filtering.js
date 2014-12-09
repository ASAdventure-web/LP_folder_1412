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

var paramArray = ["?wintersport", "?fashion", "?junior", "?outdoor", "?bike", "?gadgets", "?christmas"];
var classArray = [".wintersport", ".fashion", ".junior", ".outdoor", ".bike", ".gadgets", ".christmas"];

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

// filter();

function filter() {

  if (testParam === wintersport) {
    $(".fashion, .junior, .outdoor, .bike, .gadgets, .christmas, .lookbook, .hiddenBlock").hide();
    $(".wintersport").show();

    $("li#wintersport").addClass("active");
    window.location.hash = navFix;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });

  } else if (testParam === fashion) {
    $(".wintersport, .junior, .outdoor, .bike, .gadgets, .christmas, .lookbook, .hiddenBlock").hide();
    $(".fashion").show();

    $("li#fashion").addClass("active");
    window.location.hash = navFix;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });

  } else if (testParam === junior) {
    $(".wintersport, .fashion, .outdoor, .bike, .gadgets, .christmas, .lookbook, .hiddenBlock").hide();
    $(".junior").show();

    $("li#junior").addClass("active");
    window.location.hash = navFix;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });

  } else if (testParam === outdoor) {
    $(".wintersport, .fashion, .junior, .bike, .gadgets, .christmas, .lookbook, .hiddenBlock").hide();
    $(".outdoor").show();

    $("li#outdoor").addClass("active");
    window.location.hash = navFix;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });

  } else if (testParam === bike) {
    $(".wintersport, .fashion, .junior, .outdoor, .gadgets, .christmas, .lookbook, .groeneprijzen, .hiddenBlock").hide();
    $(".bike").show();

    $("#bike").addClass("active");
    window.location.hash = navFix;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });

  } else if (testParam === gadgets) {
    $(".wintersport, .fashion, .junior, .outdoor, .bike, .christmas, .lookbook, .groeneprijzen, .hiddenBlock").hide();
    $(".gadgets").show();

    $("#gadgets").addClass("active");
    window.location.hash = navFix;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });

  } else if (testParam === lookbook) {
    $(".wintersport, .fashion, .junior, .outdoor, .bike, .christmas, .gadgets, .groeneprijzen, .hiddenBlock").hide();
    $(".lookbook").show();

    $("#lookbook").addClass("active");
    window.location.hash = navFix;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });

  } else if (testParam === groeneprijzen) {
    $(".wintersport, .fashion, .junior, .outdoor, .bike, .christmas, .gadgets, .lookbook, .hiddenBlock").hide();
    $(".groeneprijzen").show();

    $("#groeneprijzen").addClass("active");
    $("#alleFolderProducten").removeClass("active");
    window.location.hash = navFix;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });

  } else if (testParam === christmas) {
    $(".wintersport, .fashion, .junior, .outdoor, .bike, .gadgets, .lookbook, .groeneprijzen, .hiddenBlock").hide();
    $(".christmas").show();

    $("#christmas").addClass("active");
    window.location.hash = navFix;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });

  } else {
    $(".wintersport, .fashion, .junior, .outdoor, .bike, .gadgets, .christmas, .lookbook, .groeneprijzen").show();
    $(".hiddenBlock").hide();
    $("#alleFolderProducten").addClass("active");

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });
  }

  // Click Events

  $("#wintersport").click(function() {
    location.search = wintersport;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });
  });

  $("#fashion").click(function() {
    location.search = fashion;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });
  });

  $("#junior").click(function() {
    location.search = junior;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });
  });

  $("#outdoor").click(function() {
    location.search = outdoor;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });
  });

  $("#bike").click(function() {
    location.search = bike;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });
  });

  $("#gadgets").click(function() {
    location.search = gadgets;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });
  });

  $("#lookbook").click(function() {
    location.search = lookbook;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });
  });

  $("#acties").click(function() {
    location.search = acties;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });
  });

  $("#groeneprijzen").click(function() {
    location.search = groeneprijzen;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });
  });

  $("#christmas").click(function() {
    location.search = christmas;

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });
  });

  $("#alleFolderProducten").click(function() {
    location.search = "";

    // imagesLoaded(container, function() {
    //   msnry.layout();
    //   onLayout();
    // });
  });

  // 

  // imagesLoaded(container, function() {
  //   msnry.layout();
  // });

}

filter();
