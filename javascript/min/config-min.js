function onLayout(){setTimeout(function(){$(window).trigger("scroll")},600)}$(function(){$("img.lazy").lazyload({threshold:100,failure_limit:3,load:function(){imagesLoaded(container,function(){msnry.layout()})}})});var container=document.querySelector("#folderContent"),msnry=new Masonry(container,{gutter:".gutterSizer",columnWidth:".gridSizer",itemSelector:".folderItem"});msnry.on("layoutComplete",onLayout),$(".videoPlaceHolder").click(function(){var o='<div class="videoWrapper"><iframe id="video-player" width="640" height="360" src="'+$(this).attr("data-video")+'" frameborder="0" allowfullscreen></iframe></div>';$(this).replaceWith(o)}),$(".videoPlaceHolderMobile").click(function(){var o='<div class="videoWrapper"><iframe id="video-player" width="299" height="168" src="'+$(this).attr("data-video")+'" frameborder="0" allowfullscreen></iframe></div>';$(this).replaceWith(o)});var wintersport="?wintersport",fashion="?fashion",junior="?junior",outdoor="?outdoor",bike="?bike",gadgets="?gadgets",lookbook="?lookbook",christmas="?christmas",navFix="navFix",testArray=location.search.split("&"),testParam=testArray[0],paramArray=["?wintersport","?fashion","?junior","?outdoor","?bike","?gadgets","?christmas"],classArray=[".wintersport",".fashion",".junior",".outdoor",".bike",".gadgets",".christmas"];testParam===wintersport?($(".fashion, .junior, .outdoor, .bike, .gadgets, .christmas, .lookbook").hide(),$(".wintersport").show(),$("li#wintersport").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===fashion?($(".wintersport, .junior, .outdoor, .bike, .gadgets, .christmas, .lookbook").hide(),$(".fashion").show(),$("li#fashion").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===junior?($(".wintersport, .fashion, .outdoor, .bike, .gadgets, .christmas, .lookbook").hide(),$(".junior").show(),$("li#junior").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===outdoor?($(".wintersport, .fashion, .junior, .bike, .gadgets, .christmas, .lookbook").hide(),$(".outdoor").show(),$("li#outdoor").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===bike?($(".wintersport, .fashion, .junior, .outdoor, .gadgets, .christmas, .lookbook").hide(),$(".bike").show(),$("#bike").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===gadgets?($(".wintersport, .fashion, .junior, .outdoor, .bike, .christmas, .lookbook").hide(),$(".gadgets").show(),$("#gadgets").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===lookbook?($(".wintersport, .fashion, .junior, .outdoor, .bike, .christmas, .gadgets, .sfeer").hide(),$(".lookbook").show(),$("#lookbook").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):testParam===christmas?($(".wintersport, .fashion, .junior, .outdoor, .bike, .gadgets, .lookbook").hide(),$(".christmas").show(),$("#christmas").addClass("active"),window.location.hash=navFix,imagesLoaded(container,function(){msnry.layout(),onLayout()})):($(".wintersport, .fashion, .junior, .outdoor, .bike, .gadgets, .christmas, .lookbook").show(),$("#alleFolderProducten").addClass("active"),imagesLoaded(container,function(){msnry.layout(),onLayout()})),$("#wintersport").click(function(){location.search=wintersport,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#fashion").click(function(){location.search=fashion,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#junior").click(function(){location.search=junior,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#outdoor").click(function(){location.search=outdoor,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#bike").click(function(){location.search=bike,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#gadgets").click(function(){location.search=gadgets,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#lookbook").click(function(){location.search=lookbook,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#christmas").click(function(){location.search=christmas,imagesLoaded(container,function(){msnry.layout(),onLayout()})}),$("#alleFolderProducten").click(function(){location.search="",imagesLoaded(container,function(){msnry.layout(),onLayout()})}),imagesLoaded(container,function(){msnry.layout()});