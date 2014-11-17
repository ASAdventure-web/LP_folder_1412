// FILTERING SCRIPT
    var schoenen = "?schoenen";
    var fashion = "?fashion";
    var junior = "?junior";
    var outdoor = "?outdoor";
    var bike = "?bike";
    var jackWolfskin = "?jackWolfskin";
    var lookbook = "?lookbook";
    var energie = "?energie";

    var navFix = "navFix";

    var testArray = location.search.split("&");
    var testParam = testArray[0];

    var paramArray = ["?schoenen", "?fashion", "?junior", "?outdoor", "?bike", "?jackWolfskin", "?energie"];
    var classArray = [".schoenen", ".fashion", ".junior", ".outdoor", ".bike", ".jackWolfskin", ".energie"];

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

    if (testParam === schoenen) {
      $(".fashion, .junior, .outdoor, .bike, .jackWolfskin, .energie, .lookbook").hide();
      $(".schoenen").show();
      
      $("li#schoenen").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === fashion) {
      $(".schoenen, .junior, .outdoor, .bike, .jackWolfskin, .energie, .lookbook").hide();
      $(".fashion").show();
      
      $("li#fashion").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === junior) {
      $(".schoenen, .fashion, .outdoor, .bike, .jackWolfskin, .energie, .lookbook").hide();
      $(".junior").show();
      
      $("li#junior").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === outdoor) {
      $(".schoenen, .fashion, .junior, .bike, .jackWolfskin, .energie, .lookbook").hide();
      $(".outdoor").show();
      $("li#outdoor").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === bike) {
      $(".schoenen, .fashion, .junior, .outdoor, .jackWolfskin, .energie, .lookbook").hide();
      $(".bike").show();
      $("#bike").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === jackWolfskin) {
      $(".schoenen, .fashion, .junior, .outdoor, .bike, .energie, .lookbook, .sfeer").hide();
      $(".jackWolfskin").show();
      $("#jackWolfskin").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === lookbook) {
      $(".schoenen, .fashion, .junior, .outdoor, .bike, .energie, .jackWolfskin, .sfeer").hide();
      $(".lookbook").show();
      $("#lookbook").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === energie) {
      $(".schoenen, .fashion, .junior, .outdoor, .bike, .jackWolfskin, .lookbook").hide();
      $(".energie").show();
      
      $("#energie").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else {
      $(".schoenen, .fashion, .junior, .outdoor, .bike, .jackWolfskin, .energie, .lookbook").show();
      
      $("#alleFolderProducten").addClass("active");

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    }

    // Click Events


    $("#schoenen").click(function() {
      // $(".fashion, .junior, .outdoor, .bike, .actie, .energie, .lookbook").hide();
      // $(".schoenen").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = schoenen;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#fashion").click(function() {
      // $(".schoenen, .junior, .outdoor, .bike, .actie, .energie, .lookbook").hide();
      // $(".fashion").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = fashion;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#junior").click(function() {
      // $(".schoenen, .fashion, .outdoor, .bike, .actie, .energie, .lookbook").hide();
      // $(".junior").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = junior;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#outdoor").click(function() {
      // $(".schoenen, .fashion, .junior, .bike, .actie, .energie, .lookbook").hide();
      // $(".outdoor").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = outdoor;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#bike").click(function() {
      // $(".schoenen, .fashion, .junior, .outdoor, .actie, .energie, .lookbook").hide();
      // $(".bike").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = bike;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#jackWolfskin").click(function() {
      // $(".schoenen, .fashion, .junior, .outdoor, .bike, .energie, .lookbook, .sfeer").hide();
      // $(".actie").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = jackWolfskin;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#lookbook").click(function() {
      // $(".schoenen, .fashion, .junior, .outdoor, .bike, .energie, .actie, .sfeer").hide();
      // $(".lookbook").show();
      // $(".hidden").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = lookbook;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#energie").click(function() {
      // $(".schoenen, .fashion, .junior, .outdoor, .bike, .actie, .lookbook").hide();
      // $(".energie").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = energie;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#alleFolderProducten").click(function() {
      // $(".schoenen, .fashion, .junior, .outdoor, .bike, .actie, .energie, .lookbook").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = "";

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    // 

    imagesLoaded(container, function() {
      msnry.layout();
    });