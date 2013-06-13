(function($) {
// simplified, crapified Pinterest bookmarklet grid

var app = {
	opts: {
		style: ''//'@import url("http://dl.dropbox.com/u/5045906/imagesbookmarklet/style.css");'
		, w: '30%'
		, h: '400px'
		, minw: 150
		, minh: 200
	}
	,
	zindex: 500
	,
	$box: false
	,
	start: function() {
		// external option overrides from global var options
		app.opts = $.extend(app.opts, typeof bkoptions === typeof undefined ? {} : bkoptions);
	
		// stylesheet or style list
		$('<style type="text/css">#bg-blocker{background-color:#ccc;opacity:0.9;position:fixed;height:100%;width:100%;z-index:' + (app.zindex) + ';top:0;left:0} #ig-box {position:absolute;top:0;left:0;width:100%;z-index:' + (app.zindex+1) + '} #ig-box img{border:3px solid black;} ' + app.opts.style + '</style>').appendTo("head");
		
		// build
		app.build();
		
		// add cover, elements
		$('body').append('<div id="bg-blocker"></div>')
			.prepend(app.$box);

	}//--	fn	start
	,
	build: function() {
		app.$box = $('<div id="ig-box"></div>');
		
		// Find images and add to list
		$('img').each(function() {
			var $i = $(this);
			
			if( console && console.log ) console.log( $i.attr('src'), $i.width(), $i.height() );
			
			// not big enough?
			if( $i.width() <= app.opts.minw || $i.height() <= app.opts.minh ) return;
			
			var $a = $('<a target="_blank" />').attr('href', $i.attr('src')).append($i);

			$i.css({"max-width": app.opts.w, "max-height": app.opts.h});
			app.$box.append($a);
		});
	}//--	fn	build
};

// ensure jquery
if(!$) {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload=app.start;
	jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);
}
else {
	app.start();
}

})(typeof jQuery == 'undefined' ? false : jQuery);