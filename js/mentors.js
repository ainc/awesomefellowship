(function (window, angular, $) {
		
		// On window load. This waits until images have loaded which is essential
		$(window).load(function(){
			
			// Fade in images so there isn't a color "pop" document load and then on window load
			$(".thumbnails img").fadeIn(500);
			
			// clone image
			$('.thumbnails img').each(function(){
				var el = $(this);
				el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
					var el = $(this);
					el.parent().css({"width":this.width,"height":this.height});
					el.dequeue();
				});
				this.src = grayscale(this.src);
			});
			
			// Fade image 
			$('.thumbnails img').mouseover(function(){
				$(this).parent().find('img:first').stop().animate({opacity:1}, 400);
			})
			$('.img_grayscale').mouseout(function(){
				$(this).stop().animate({opacity:0}, 400);
			});		
		});

		
		// Grayscale w canvas method
		function grayscale(src){
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');
			var imgObj = new Image();
			imgObj.src = src;
			canvas.width = imgObj.width;
			canvas.height = imgObj.height; 
			ctx.drawImage(imgObj, 0, 0); 
			var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
			for(var y = 0; y < imgPixels.height; y++){
				for(var x = 0; x < imgPixels.width; x++){
					var i = (y * 4) * imgPixels.width + x * 4;
					var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
					imgPixels.data[i] = avg; 
					imgPixels.data[i + 1] = avg; 
					imgPixels.data[i + 2] = avg;
				}
			}
			ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
			return canvas.toDataURL();
	    }
		

	function MentorsCtrl($scope) {
	  $scope.mentors = [
	  {"title":"Founder","website":"http://www.linkedin.com/pub/drew-curtis/18/285/32b","name":"Drew Curtis","company":"Fark.com","website_text":"Founder, Fark.com","image":"mentors/curtis.jpg.pagespeed.ic.VTQQMUw6pQ.jpg"},
	  {"title":"CEO","website":"http://www.linkedin.com/in/nager","name":"Marc Nager","company":"Startup Weekend","website_text":"CEO, StartupWeekend","image":"mentors/nager.jpg"},
	  {"title":"Founder","website":"http://www.linkedin.com/in/nihalmehta","name":"Nihal Mehta","company":"LocalResponse. Partner, ENIAC Ventures","website_text":"CEO, LocalResponse | Partner, ENIAC Ventures","image":"mentors/mehta.jpg.pagespeed.ic.5rqx5N3oxH.jpg"},
	  {"title":"Founder","website":"http://www.engr.uky.edu/alumni/hod/davis-l-marksbury/","name":"Davis Marksbury","company":"Exstream Software (sold to HP)","website_text":"Founder, Exstream Software (sold to HP)","image":"mentors/marksbury.jpg.pagespeed.ic.Du_svn3ZEJ.jpg"},
	  {"title":"Founder","website":"http://en.wikipedia.org/wiki/Lee_T._Todd,_Jr.","name":"Lee Todd","company":"Databeam","website_text":"Founder, Databeam (sold to IBM) | Founder, Projectron (sold to Hughes Aircraft)","image":"mentors/todd.jpg"},
	  {"title":"Founder","website":"http://www.badgirlventures.com/index.php?option\u003dcom_content\u0026view\u003darticle\u0026id\u003d26\u0026Itemid\u003d34","name":"Candace Klein","company":"SoMoLend","website_text":"Founder, SoMoLend","image":"mentors/klein.jpg.pagespeed.ic.ye9E0wYzyp.jpg"},
	  {"title":"President \u0026 Co-Founder","website":"http://www.linkedin.com/in/seanshadmand","name":"Sean Shadmand","company":"Socialize, Inc","website_text":"President \u0026 Co-Founder, Socialize, Inc","image":"mentors/shadmand.jpg.pagespeed.ic.lJ67RD2ZI3.jpg"},
	  {"title":"Founder \u0026 CEO","website":"http://www.linkedin.com/pub/bambi-francisco/0/79/2a2/","name":"Bambi Francisco","company":"Vator.tv","website_text":"Founder \u0026 CEO, Vator.tv","image":"mentors/francisco.jpg"},
	  {"title":"Founder","website":"http://www.linkedin.com/in/brendanlim","name":"Brendan Lim","company":"Kicksend. YC Grad","website_text":"Founder, Kicksend | YC Grad","image":"mentors/lim.jpg.pagespeed.ic.Ld8nnIsq3_.jpg"},
	  {"title":"Founder","website":"http://jat.uky.edu/lectures/excellence-in-pr/item/174-w-james-host.html","name":"Jim Host","company":"Host Communications","website_text":"Founder, Host Communications (sold to IMG) | CEO, iHigh","image":"mentors/host.jpg"},
	  {"title":"Co-Founder \u0026 former CEO","website":"http://www.linkedin.com/pub/sean-o-leary/8/452/ab8","name":"Sean O\u0027Leary","company":"Genscape","website_text":"Co-Founder \u0026 former CEO, Genscape","image":"mentors/oleary2.jpg"},
	  {"title":"CEO","website":"http://www.linkedin.com/pub/steven-huey/0/b0/580","name":"Steve Huey","company":"Capture Higher Ed","website_text":"CEO, Capture Higher Ed","image":"mentors/huey.jpg"},
	  {"title":"Partner","website":"http://www.linkedin.com/in/nickseguin","name":"Nick Seguin","company":"Dynamit","website_text":"Board Member, Startup Weekend | Partner, Dynamit","image":"mentors/sequin.jpg"},
	  {"title":"CEO","website":"http://www.linkedin.com/in/kentoyler","name":"Kent Oyler","company":"OPM","website_text":"Co-founder, High Speed Access Corp. (IPO) | CEO, OPM Services","image":"mentors/oyler.jpg"},
	  {"title":"Founder. Angel Investor","website":"http://www.linkedin.com/pub/ben-self/0/96a/460","name":"Ben Self","company":"Blue State Digital","website_text":"Founder, Blue State Digital | Angel Investor","image":"mentors/self.jpg"},
	  {"title":"CEO","website":"http://www.linkedin.com/pub/matthew-wiley/33/836/364","name":"Matt Wiley","company":"uHAPS","website_text":"CEO, uHAPS | Angel Investor","image":"mentors/wiley.jpg"},
	  {"title":"Director","website":"http://www.linkedin.com/in/elizabethrounsavall","name":"Elizabeth Rounsavall","company":"Chrysalis Ventures","website_text":"Director, Chrysalis Ventures","image":"mentors/rounsavall.jpg"},
	  {"title":"Mayor \u0026 Former CEO","website":"http://www.lexingtonky.gov/index.aspx?page\u003d305","name":"Jim Gray","company":"Lexington, Gray Construction","website_text":"Former CEO, Gray Construction | Lexington Mayor","image":"mentors/gray.jpg.pagespeed.ic.H0NVQ0uzYu.jpg"},
	  {"title":"CEO","website":"http://www.linkedin.com/in/vanness","name":"Sidney VanNess","company":"On Call Central","website_text":"CEO, On Call Central","image":"mentors/vanness.jpg"},
	  {"title":"Director","website":"http://www.linkedin.com/in/rickcoplin","name":"Rick Coplin","company":"TechColumbus. Venture Accelerator","website_text":"Venture Acceleration. Director, TechColumbus","image":"mentors/coplin.jpg.pagespeed.ic.yfHkCqJJgx.jpg"},
	  {"title":"CEO \u0026 Founder","website":"http://www.linkedin.com/in/drodio","name":"Daniel Odio","company":"Socialize, Inc","website_text":"CEO \u0026 Co-Founder, Socialize, Inc","image":"mentors/odio.jpg.pagespeed.ic.T31MmWJ9ZO.jpg"},
	  {"title":"Executive Director. Angel Investor","website":"http://www.linkedin.com/pub/george-ward/8/482/500","name":"George Ward","company":"UK Coldstream","website_text":"Angel Investor | Executive Director at UK Coldstream","image":"mentors/ward.jpg"},
	  {"title":"Owner","website":"http://www.linkedin.com/pub/alan-stein/1/143/813","name":"Alan Stein","company":"Lexington Legends","website_text":"Angel Investor | Lexington Legends Owner","image":"mentors/stein.gif.pagespeed.ic.FcyAcZlsU2.png"},
	  {"title":"Angel Investor. GM","website":"http://www.linkedin.com/pub/chris-young/1/94/499","name":"Chris Young","company":"Overbrook Farms","website_text":"Angel Investor | GM, Overbrook Farms","image":"mentors/young.jpg"},
	  {"title":"Angel Investor. Founder","website":"http://www.linkedin.com/pub/j-whitney-wallingford/16/3bb/7a6","name":"Whitney Wallingford","company":"Wallingford Law","website_text":"Angel Investor | Founder, Wallingford Law","image":"mentors/wallingford.jpg"},
	  {"title":"Senior Director","website":"http://www.linkedin.com/pub/sean-o-leary/6/977/556","name":"Sean O\u0027Leary","company":"KSTC","website_text":"Senior Director, KSTC","image":"mentors/oleary.jpg"},
	  {"title":"Associate Dean","website":"http://www.linkedin.com/pub/bruce-walcott/25/822/380","name":"Bruce Walcott","company":"University of Kentucky","website_text":"Associate Dean, University of Kentucky","image":"mentors/walcott.jpg"},
	  {"title":"Principal","website":"http://www.linkedin.com/in/kelleysloane","name":"Kelley Sloane","company":"Sloane Marketing","website_text":"Principal, Sloane Marketing | Former VP Mktg, Exstream Software","image":"mentors/sloan.jpg"},
	  {"title":"Angel Investor","website":"http://www.linkedin.com/pub/richard-c-rick-miller/b/128/b54","name":"Rick Miller","company":"","website_text":"Angel Investor","image":"mentors/miller.jpg"},
	  {"title":"Angel Investor","website":"http://www.linkedin.com/in/medicalnews","name":"Tom McMahon","company":"","website_text":"Angel Investor","image":"mentors/mcmahon.jpg"},
	  {"title":"ICC Director","website":"http://www.linkedin.com/pub/warren-nash/14/8b9/68b","name":"Warren Nash","company":"Lexington","website_text":"Lexington ICC Director","image":"mentors/nash.jpg"},
	  {"title":"Director","website":"http://www.linkedin.com/pub/dov-rosenberg/0/45/1b8","name":"Dov Rosenberg","company":"Allos Ventures","website_text":"Director, Allos Ventures","image":"mentors/rosenberg.jpg"},
	  {"title":"Co-Founder","website":"http://www.linkedin.com/in/vikchadha","name":"Vik Chadha","company":"Backupify","website_text":"Co-Founder, Backupify","image":"mentors/chadha.jpg"},
	  {"title":"CEO. Founder","website":"http://www.linkedin.com/pub/randall-stevens/0/363/232","name":"Randall Stevens","company":"Punndit. Archvision","website_text":"CEO, Punndit. Founder, Archvision","image":"mentors/stevens.jpg"},
	  {"title":"Senior VP","website":"http://www.linkedin.com/in/tedsmith","name":"Ted Smith","company":"CNET","website_text":"Senior VP, CNET | Chief Economic Growth, Louisville Metro","image":"mentors/smith.jpg"},
	  {"title":"Director of Sales \u0026 Marketing","website":"http://www.linkedin.com/pub/joe-dover/a/299/2b8","name":"Joe Dover","company":"OPM","website_text":"Director of Sales \u0026 Marketing, OPM","image":"mentors/dover.jpg"},
	  {"title":"President","website":"http://www.linkedin.com/pub/chuck-woods/50/92a/46a","name":"Chuck Woods","company":"OPM","website_text":"President, OPM","image":"mentors/woods.jpg"},
	  {"title":"Director","website":"http://www.linkedin.com/pub/gordon-garrett/2/209/267","name":"Gordon Garrett","company":"KY Small Business Development Center","website_text":"Director, KY Small Business Development Center","image":"mentors/garrett.jpg"},
	  {"title":"Attorney","website":"http://www.linkedin.com/in/kensagan","name":"Ken Sagan","company":"Stites \u0026 Harbison","website_text":"Attorney, Stites \u0026 Harbison","image":"mentors/sagan.jpg"},
	  {"title":"Owner","website":"http://www.linkedin.com/pub/bryce-anderson/5/90/6b","name":"Bryce Anderson","company":"Orange Leaf Frozen Yogurt","website_text":"Owner, Orange Leaf Frozen Yogurt","image":"mentors/anderson.jpg"},
	  {"title":"Owner","website":"http://www.facebook.com/sizemore","name":"Jeremiah Sizemore","company":"Orange Leaf Frozen Yogurt","website_text":"Owner, Orange Leaf Frozen Yogurt","image":"mentors/sizemore.jpg"},
	  {"title":"Project Manager","website":"http://www.linkedin.com/pub/keith-kurzendoerfer/3/aa4/127","name":"Keith Kurzendoerfer","company":"APAX Software","website_text":"Project Manager, APAX Software","image":"mentors/kurzendoerfer.jpg"},
	  {"title":"Owner","website":"http://www.linkedin.com/in/evanmorris","name":"Evan Morris","company":"Orange Leaf Frozen Yogurt","website_text":"Owner, Orange Leaf Frozen Yogurt","image":"mentors/morris.jpg"},
	  {"title":"Wealth Manager","website":"http://www.linkedin.com/in/chadbischof","name":"Chad Bischof","company":"Strong Tower Group","website_text":"Wealth Management, Strong Tower Group","image":"mentors/bischof.jpg"},
	  {"title":"Founder. Owner","website":"http://www.linkedin.com/in/wayneyeager","name":"Wayne Yeager","company":"Webalytics. Bailey Run Farm","website_text":"Founder, Webalytics | Owner at Bailey Run Farm","image":"mentors/yeager.jpg"},
	  {"title":"President","website":"http://www.linkedin.com/in/jmclifton","name":"Jim Clifton","company":"Therix Medical","website_text":"President, Therix Medical","image":"mentors/clifton.jpg"},
	  {"title":"Member","website":"http://www.frostbrowntodd.com/professionals-506.html","name":"Bill Strench","company":"Frost Brown Todd","website_text":"Member, Frost Brown Todd Attorneys","image":"mentors/strench.jpg"},
	  {"title":"President","website":"http://www.linkedin.com/in/davedurand","name":"Dave Durand","company":"Forest Giant","website_text":"President, Forest Giant","image":"mentors/durand.jpg"},
	  {"title":"Founder","website":"http://morrisindustries.com/about/founder","name":"Nate Morris","company":"Morris Industries","website_text":"Founder, Morris Industries | Co-Founder, Rubicon Global","image":"mentors/nateMorris.jpg"}, 
	  {"title":"CEO","website":"http://www.linkedin.com/pub/fielding-rogers/0/960/a04","name":"Fielding Rogers","company":"Ale-8-One Bottling Company","website_text":"CEO, Ale-8-One","image":"mentors/Fielding-Rogers.jpg"}, 
	  {"title":"CEO","website":"https://www.linkedin.com/pub/billy-harper/10/983/575","name":"Billy Harper","company":"Harper Industries","website_text":"CEO, Harper Industries","image":"mentors/billy_harper.jpg"}, 
	  {"title":"CEO","website":"http://www.linkedin.com/in/brianpoe","name":"Brian Poe","company":"Corrisoft","website_text":"CEO, Corrisoft","image":"mentors/brian_poe.jpg"},
	  {"title":"CEO","website":"https://www.linkedin.com/pub/stephen-gray/0/a9/242/en","name":"Stephen Gray","company":"Gray Construction","website_text":"CEO, Gray Construction","image":"mentors/stephen_gray.jpg"}
	  ];
	}

	window.MentorsCtrl = MentorsCtrl;
}(window, angular, jQuery));
