//var sample = '[{"url": "https://www.yahoo.com","children":[{"url":"www.test.com","children":[]},{"url":"www.espn.go.com","children":[{"url":"www.google.com","children":[{"url":"www.test2.com","children":[]}]}]},{"url":"www.netflix.com","children":[{"url":"www.youtube.com","children":[]},{"url":"www.buzzfeed.com","children":[]}]},{"url":"www.twitter.com","children":[{"url":"www.feedly.com","children":[]},{"url":"www.cnn.com","children":[]},{"url":"www.huffingtonpost.com","children":[]}]},{"url":"http://www.json.org/","children":[{"url":"www.bing.com","children":[]},{"url":"www.bbc.com","children":[]},{"url":"www.facebook.com","children":[]},{"url":"www.nytimes.com","children":[]},{"url":"www.vox.com","children":[]}]}]}]';
//var sample2 = '[{"url":"http://www.yahoo.com","children":[{"url":"https://www.yahoo.com","children":[]},{"url":"https://mail.yahoo.com","children":[{"url":"https://help.yahoo.com/kb/index?locale=en_US&page=product&y=PROD_ACCT","children":[{"url":"http://help.yahoo.com","children":[]}]}]},{"url":"https://www.flickr.com","children":[{"url":"https://www.flickr.com/explore","children":[{"url":"https://www.flickr.com/explore/explore","children":[]},{"url":"https://www.flickr.com/explore/photos/tags","children":[]},{"url":"https://www.flickr.com/explore/vr","children":[]},{"url":"https://www.flickr.com/explore/commons","children":[]},{"url":"https://www.flickr.com/explore/galleries","children":[]},{"url":"https://www.flickr.com/explore/map","children":[]},{"url":"https://www.flickr.com/explore/services","children":[]},{"url":"https://www.flickr.com/explore/cameras","children":[]}]},{"url":"https://www.flickr.com/photos/tags","children":[{"url":"https://www.flickr.com/photos/tags/explore","children":[]},{"url":"https://www.flickr.com/photos/tags/photos/tags","children":[]},{"url":"https://www.flickr.com/photos/tags/vr","children":[]},{"url":"https://www.flickr.com/photos/tags/commons","children":[]},{"url":"https://www.flickr.com/photos/tags/galleries","children":[]},{"url":"https://www.flickr.com/photos/tags/map","children":[]},{"url":"https://www.flickr.com/photos/tags/services","children":[]},{"url":"https://www.flickr.com/photos/tags/cameras","children":[]}]},{"url":"https://www.flickr.com/vr","children":[{"url":"https://www.flickr.com/vr/explore","children":[]},{"url":"https://www.flickr.com/vr/photos/tags","children":[]},{"url":"https://www.flickr.com/vr/vr","children":[]},{"url":"https://www.flickr.com/vr/commons","children":[]},{"url":"https://www.flickr.com/vr/galleries","children":[]},{"url":"https://www.flickr.com/vr/map","children":[]},{"url":"https://www.flickr.com/vr/services","children":[]},{"url":"https://www.flickr.com/vr/cameras","children":[]}]},{"url":"https://www.flickr.com/commons","children":[{"url":"https://www.flickr.com/commons/signup","children":[]},{"url":"https://www.flickr.com/commons/explore","children":[]},{"url":"https://www.flickr.com/commons/tags","children":[]},{"url":"https://www.flickr.com/commons/vr","children":[]},{"url":"https://www.flickr.com/commons/commons","children":[]},{"url":"https://www.flickr.com/commons/galleries","children":[]},{"url":"https://www.flickr.com/commons/map","children":[]}]},{"url":"https://www.flickr.com/galleries","children":[{"url":"https://www.flickr.com/galleries/signup","children":[]},{"url":"https://www.flickr.com/galleries/explore","children":[]},{"url":"https://www.flickr.com/galleries/tags","children":[]},{"url":"https://www.flickr.com/galleries/vr","children":[]},{"url":"https://www.flickr.com/galleries/commons","children":[]},{"url":"https://www.flickr.com/galleries/galleries","children":[]},{"url":"https://www.flickr.com/galleries/map","children":[]}]},{"url":"https://www.flickr.com/map","children":[{"url":"https://www.flickr.com/map/signup","children":[]},{"url":"https://www.flickr.com/map/explore","children":[]},{"url":"https://www.flickr.com/map/tags","children":[]},{"url":"https://www.flickr.com/map/vr","children":[]},{"url":"https://www.flickr.com/map/commons","children":[]},{"url":"https://www.flickr.com/map/galleries","children":[]},{"url":"https://www.flickr.com/map/map","children":[]}]},{"url":"https://www.flickr.com/services","children":[{"url":"https://www.flickr.com/services/signup","children":[]},{"url":"https://www.flickr.com/services/explore","children":[]},{"url":"https://www.flickr.com/services/tags","children":[]},{"url":"https://www.flickr.com/services/vr","children":[]},{"url":"https://www.flickr.com/services/commons","children":[]},{"url":"https://www.flickr.com/services/galleries","children":[]},{"url":"https://www.flickr.com/services/map","children":[]}]},{"url":"https://www.flickr.com/cameras","children":[{"url":"https://www.flickr.com/cameras/signup","children":[]},{"url":"https://www.flickr.com/cameras/explore","children":[]},{"url":"https://www.flickr.com/cameras/tags","children":[]},{"url":"https://www.flickr.com/cameras/vr","children":[]},{"url":"https://www.flickr.com/cameras/commons","children":[]},{"url":"https://www.flickr.com/cameras/galleries","children":[]},{"url":"https://www.flickr.com/cameras/map","children":[]}]}]},{"url":"https://www.tumblr.com","children":[{"url":"https://www.tumblr.com/policy","children":[{"url":"https://www.tumblr.com/login","children":[]},{"url":"https://www.tumblr.com/register","children":[]},{"url":"https://www.tumblr.com/policy/support","children":[]},{"url":"https://www.tumblr.com/policy/policy/community","children":[]},{"url":"https://www.tumblr.com/policy/policy/privacy","children":[]},{"url":"http://www.tumblr.com/developers","children":[]}]},{"url":"https://www.tumblr.com/forgot_password","children":[]},{"url":"https://app.appsflyer.com/id305343404?pid=tumblr_internal&c=signup_page","children":[]},{"url":"http://app.appsflyer.com/com.tumblr?pid=tumblr_internal&c=signup_page","children":[]},{"url":"https://www.tumblr.com/privacy_policy","children":[]},{"url":"https://www.tumblr.com/jobs","children":[]},{"url":"http://zolloc.tumblr.com/post/144818002399","children":[]}]},{"url":"https://answers.yahoo.com","children":[{"url":"https://mail.yahoo.com/?.intl=us&.lang=en-US&.src=ym","children":[]},{"url":"https://search.yahoo.com/search","children":[]},{"url":"https://www.yahoo.com/news","children":[]},{"url":"http://sports.yahoo.com","children":[]},{"url":"http://finance.yahoo.com","children":[]},{"url":"https://celebrity.yahoo.com","children":[]},{"url":"https://weather.yahoo.com","children":[]}]},{"url":"https://groups.yahoo.com","children":[{"url":"https://mlogin.yahoo.com/w/login/?.src=ygrp&.intl=us&.lang=en-US&.done=https://groups.yahoo.com/neo","children":[]},{"url":"https://games.yahoo.com","children":[]}]},{"url":"https://mobile.yahoo.com","children":[]},{"url":"https://everything.yahoo.com","children":[]},{"url":"https://www.yahoo.com/politics","children":[{"url":"https://mail.yahoo.com/?.intl=us&.lang=en-US","children":[]}]},{"url":"https://www.yahoo.com/celebrity","children":[]}]}]'

// This was added so that the JSON from index.html could be accessed here without repeating the API request.
var results = window.opener.results;

function draw() {
	//var links = JSON.parse(sample2);
    var links = JSON.parse(results);
	var label;
	// Create a stage from the canvas tag below
	var stage = new createjs.Stage("testCanvas");
	stage.enableMouseOver(5)
	var oldCanvas = document.getElementById("testCanvas");
	//Call draw tree function
	if(links[0].children.length > 0){
		// Create a label with the first  url
		label = new createjs.Text(links[0].url, "8px Arial", "#ff7700");
		stage.addChild(label);
		// Set the x and y coordinates of the label
		label.x = oldCanvas.width/2;
		label.y = 40;
		label.textAlign = "center";
		stage.update();
		drawTree(0, oldCanvas.width, 50, 0, links, stage);
	}        
}
function drawTree(lBoundary, rBoundary, y, idx, newLinks, stage) {
	var width = rBoundary - lBoundary;
	//alert("width: " + width);
	//alert("newLinks.length = " + newLinks.length);
	var startX = (rBoundary + lBoundary)/2;
	var startY = y;
	var numLinks = newLinks[idx].children.length;
	var linkDivide = (width/(numLinks + 1));
	var line;
	var j;
	var x;
	var label;
	var oldCanvas = document.getElementById("testCanvas");
	var fontFront = rBoundary/500
	fontFront = fontFront.toString();
	var fontBack = "px Arial"
	var font = fontFront + fontBack
	//alert("URL: " + newLinks[idx].url);
	x = lBoundary + linkDivide;
	//alert("linkDivide: " + linkDivide)
	//alert("numLinks = " + numLinks);
	for (j = 0; j < numLinks; j++) {
		// Get new 'shape' which comes with a 'graphics' property that allows us to draw
		line = new createjs.Shape();
		// Add this line shape to the canvas
		stage.addChild(line);
		// Set brush stroke style (line thickness) and draw black line
		line.graphics.setStrokeStyle(1).beginStroke("rgba(0,0,0,1)");
		// Tell EaselJS where to go to start drawing the line
		line.graphics.moveTo(startX, startY);		
		y = startY + oldCanvas.height/20;
		// Tell EaselJS where to draw the line to
		//alert("x = " + x + ", y = " + y);
		line.graphics.lineTo(x, y-10);
		// Stop drawing this line
		line.graphics.endStroke();
		circle = new createjs.Shape();//createjs.Text(newLinks[idx].children[j].url, "8px Arial", "#ff7700");
				circle.graphics.beginFill("#ff7700").drawCircle(0, 0, 10);
				// Set the x and y coordinates of the label
				circle.x = x;
				circle.y = y-10
				function setAlertVal () {
					var alertVal = newLinks[idx].children[j].url
					circle.on("mouseover", function() {
					//alert(alertVal);
						swal({   
							title: alertVal, 
							//type: "info",   
							showConfirmButton: false,
							allowOutsideClick: true,
							animation: false,
							timer:1500});
					});
				}
				setAlertVal ()
				stage.addChild(circle);
		stage.update();
		//alert("grandchild links: " + newLinks[idx].children[j].children.length);
		if(newLinks[idx].children[j].children.length > 0){
			//alert("Left Boundary = " + j*linkDivide + " right Boundary = " + ((j+2)*linkDivide));
			drawTree((x-(.5*linkDivide)), (x+(.5*linkDivide)), y, j, newLinks[idx].children, stage);
		}
		x += linkDivide;
		line.graphics.moveTo(startX, startY);
	}
	stage.update();
}