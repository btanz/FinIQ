/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright � 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright � 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */




/*global jQuery */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null},d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return d.className="fit-vids-style",d.innerHTML="&shy;<style> .fluid-width-video-wrapper { width: 100%; position: relative; padding: 0; } .fluid-width-video-wrapper iframe, .fluid-width-video-wrapper object, .fluid-width-video-wrapper embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style>",e.parentNode.insertBefore(d,e),b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.youtube-nocookie.com']","iframe[src*='www.kickstarter.com']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}})(jQuery);




/*
 * jQuery Superfish Menu Plugin - v1.7.5
 * Copyright (c) 2014 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;(function(e,s){"use strict";var n=function(){var n={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},o=function(){var n=/iPhone|iPad|iPod/i.test(navigator.userAgent);return n&&e(s).load(function(){e("body").children().on("click",e.noop)}),n}(),t=function(){var e=document.documentElement.style;return"behavior"in e&&"fill"in e&&/iemobile/i.test(navigator.userAgent)}(),i=function(){return!!s.PointerEvent}(),r=function(e,s){var o=n.menuClass;s.cssArrows&&(o+=" "+n.menuArrowClass),e.toggleClass(o)},a=function(s,o){return s.find("li."+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+" "+n.bcClass).filter(function(){return e(this).children(o.popUpSelector).hide().show().length}).removeClass(o.pathClass)},l=function(e){e.children("a").toggleClass(n.anchorClass)},h=function(e){var s=e.css("ms-touch-action"),n=e.css("touch-action");n=n||s,n="pan-y"===n?"auto":"pan-y",e.css({"ms-touch-action":n,"touch-action":n})},u=function(s,n){var r="li:has("+n.popUpSelector+")";e.fn.hoverIntent&&!n.disableHI?s.hoverIntent(c,f,r):s.on("mouseenter.superfish",r,c).on("mouseleave.superfish",r,f);var a="MSPointerDown.superfish";i&&(a="pointerdown.superfish"),o||(a+=" touchend.superfish"),t&&(a+=" mousedown.superfish"),s.on("focusin.superfish","li",c).on("focusout.superfish","li",f).on(a,"a",n,p)},p=function(s){var n=e(this),o=n.siblings(s.data.popUpSelector);o.length>0&&o.is(":hidden")&&(n.one("click.superfish",!1),"MSPointerDown"===s.type||"pointerdown"===s.type?n.trigger("focus"):e.proxy(c,n.parent("li"))())},c=function(){var s=e(this),n=m(s);clearTimeout(n.sfTimer),s.siblings().superfish("hide").end().superfish("show")},f=function(){var s=e(this),n=m(s);o?e.proxy(d,s,n)():(clearTimeout(n.sfTimer),n.sfTimer=setTimeout(e.proxy(d,s,n),n.delay))},d=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(v(this)),s.$path.length&&e.proxy(c,s.$path)())},v=function(e){return e.closest("."+n.menuClass)},m=function(e){return v(e).data("sf-options")};return{hide:function(s){if(this.length){var n=this,o=m(n);if(!o)return this;var t=o.retainPath===!0?o.$path:"",i=n.find("li."+o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector),r=o.speedOut;s&&(i.show(),r=0),o.retainPath=!1,o.onBeforeHide.call(i),i.stop(!0,!0).animate(o.animationOut,r,function(){var s=e(this);o.onHide.call(s)})}return this},show:function(){var e=m(this);if(!e)return this;var s=this.addClass(e.hoverClass),n=s.children(e.popUpSelector);return e.onBeforeShow.call(n),n.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(n)}),this},destroy:function(){return this.each(function(){var s,o=e(this),t=o.data("sf-options");return t?(s=o.find(t.popUpSelector).parent("li"),clearTimeout(t.sfTimer),r(o,t),l(s),h(o),o.off(".superfish").off(".hoverIntent"),s.children(t.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),t.$path.removeClass(t.hoverClass+" "+n.bcClass).addClass(t.pathClass),o.find("."+t.hoverClass).removeClass(t.hoverClass),t.onDestroy.call(o),o.removeData("sf-options"),void 0):!1})},init:function(s){return this.each(function(){var o=e(this);if(o.data("sf-options"))return!1;var t=e.extend({},e.fn.superfish.defaults,s),i=o.find(t.popUpSelector).parent("li");t.$path=a(o,t),o.data("sf-options",t),r(o,t),l(i),h(o),u(o,t),i.not("."+n.bcClass).superfish("hide",!0),t.onInit.call(this)})}}}();e.fn.superfish=function(s){return n[s]?n[s].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof s&&s?e.error("Method "+s+" does not exist on jQuery.fn.superfish"):n.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop}})(jQuery,window);

(function($) {
	$.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

		// default configuration values
		var cfg = {
			interval: 100,
			sensitivity: 7,
			timeout: 0
		};

		if ( typeof handlerIn === "object" ) {
			cfg = $.extend(cfg, handlerIn );
		} else if ($.isFunction(handlerOut)) {
			cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
		} else {
			cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
		}

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).off("mousemove.hoverIntent",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// if e.type == "mouseenter"
			if (e.type == "mouseenter") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).on("mousemove.hoverIntent",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

				// else e.type == "mouseleave"
			} else {
				// unbind expensive mousemove event
				$(ob).off("mousemove.hoverIntent",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// listen for mouseenter and mouseleave
		return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
	};
})(jQuery);




/**
 *
 * Twitter Feed Fetcher
 *
 */


function sm_format_twitter(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
	var username = twitters[i].user.screen_name;
	var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
	  return '<a href="'+url+'" target="_blank">'+url+'</a>';
	}).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
	  return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'" target="_blank">'+reply.substring(1)+'</a>';
	});
	statusHTML.push('<li><i class="icon-twitter"></i><span>'+status+'</span><small><a href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'" target="_blank">'+relative_time(twitters[i].created_at)+'</a></small></li>');
  }
  return statusHTML.join('');
}

function sm_format_twitter2(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
	var username = twitters[i].user.screen_name;
	var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
	  return '<a href="'+url+'" target="_blank">'+url+'</a>';
	}).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
	  return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'" target="_blank">'+reply.substring(1)+'</a>';
	});
	statusHTML.push('<div class="slide"><span>'+status+'</span><small><a href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'" target="_blank">'+relative_time(twitters[i].created_at)+'</a></small></div>');
  }
  return statusHTML.join('');
}

function sm_format_twitter3(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
	var username = twitters[i].user.screen_name;
	var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
	  return '<a href="'+url+'" target="_blank">'+url+'</a>';
	}).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
	  return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'" target="_blank">'+reply.substring(1)+'</a>';
	});
	statusHTML.push('<div class="slide"><div class="testi-content"><p>'+status+'</p><div class="testi-meta"><span><a href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'" target="_blank">'+relative_time(twitters[i].created_at)+'</a></span></div></div></div>');
  }
  return statusHTML.join('');
}

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  if (delta < 60) {
	return 'less than a minute ago';
  } else if(delta < 120) {
	return 'about a minute ago';
  } else if(delta < (60*60)) {
	return (parseInt(delta / 60)).toString() + ' minutes ago';
  } else if(delta < (120*60)) {
	return 'about an hour ago';
  } else if(delta < (24*60*60)) {
	return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
  } else if(delta < (48*60*60)) {
	return '1 day ago';
  } else {
	return (parseInt(delta / 86400)).toString() + ' days ago';
  }
}




/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */
!function(a,b,c){"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=c:(a[b]=c,"function"==typeof define&&define.amd&&define(b,[],function(){return c}))}(this,"jRespond",function(a,b,c){"use strict";return function(a){var b=[],d=[],e=a,f="",g="",i=0,j=100,k=500,l=k,m=function(){var a=0;return a="number"!=typeof window.innerWidth?0!==document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth:window.innerWidth},n=function(a){if(a.length===c)o(a);else for(var b=0;b<a.length;b++)o(a[b])},o=function(a){var e=a.breakpoint,h=a.enter||c;b.push(a),d.push(!1),r(e)&&(h!==c&&h.call(null,{entering:f,exiting:g}),d[b.length-1]=!0)},p=function(){for(var a=[],e=[],h=0;h<b.length;h++){var i=b[h].breakpoint,j=b[h].enter||c,k=b[h].exit||c;"*"===i?(j!==c&&a.push(j),k!==c&&e.push(k)):r(i)?(j===c||d[h]||a.push(j),d[h]=!0):(k!==c&&d[h]&&e.push(k),d[h]=!1)}for(var l={entering:f,exiting:g},m=0;m<e.length;m++)e[m].call(null,l);for(var n=0;n<a.length;n++)a[n].call(null,l)},q=function(a){for(var b=!1,c=0;c<e.length;c++)if(a>=e[c].enter&&a<=e[c].exit){b=!0;break}b&&f!==e[c].label?(g=f,f=e[c].label,p()):b||""===f||(f="",p())},r=function(a){if("object"==typeof a){if(a.join().indexOf(f)>=0)return!0}else{if("*"===a)return!0;if("string"==typeof a&&f===a)return!0}},s=function(){var a=m();a!==i?(l=j,q(a)):l=k,i=a,setTimeout(s,l)};return s(),{addFunc:function(a){n(a)},getBreakpoint:function(){return f}}}}(this,this.document));





!function(t,e){"function"==typeof define&&define.amd?define(["../../../../../../../Users/benjamintanz/Dropbox/11_Property_static/WEB & WP Themes/Canvas/HTML/js/jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(t.jQuery)}(this,function(t){function e(t){if(t in p.style)return t;for(var e=["Moz","Webkit","O","ms"],n=t.charAt(0).toUpperCase()+t.substr(1),i=0;i<e.length;++i){var r=e[i]+n;if(r in p.style)return r}}function n(){return p.style[d.transform]="",p.style[d.transform]="rotateY(90deg)",""!==p.style[d.transform]}function i(t){return"string"==typeof t&&this.parse(t),this}function r(t,e,n){e===!0?t.queue(n):e?t.queue(e,n):t.each(function(){n.call(this)})}function s(e){var n=[];return t.each(e,function(e){e=t.camelCase(e),e=t.transit.propertyMap[e]||t.cssProps[e]||e,e=u(e),d[e]&&(e=u(d[e])),-1===t.inArray(e,n)&&n.push(e)}),n}function a(e,n,i,r){var a=s(e);t.cssEase[i]&&(i=t.cssEase[i]);var o=""+f(n)+" "+i;parseInt(r,10)>0&&(o+=" "+f(r));var u=[];return t.each(a,function(t,e){u.push(e+" "+o)}),u.join(", ")}function o(e,n){n||(t.cssNumber[e]=!0),t.transit.propertyMap[e]=d.transform,t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i),t(n).css({"transit:transform":r})}}}function u(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function c(t,e){return"string"!=typeof t||t.match(/^[\-0-9\.]+$/)?""+t+e:t}function f(e){var n=e;return"string"!=typeof n||n.match(/^[\-0-9\.]+/)||(n=t.fx.speeds[n]||t.fx.speeds._default),c(n,"ms")}t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var p=document.createElement("div"),d={},l=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;d.transition=e("transition"),d.transitionDelay=e("transitionDelay"),d.transform=e("transform"),d.transformOrigin=e("transformOrigin"),d.filter=e("Filter"),d.transform3d=n();var h={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},b=d.transitionEnd=h[d.transition]||null;for(var y in d)d.hasOwnProperty(y)&&"undefined"==typeof t.support[y]&&(t.support[y]=d[y]);return p=null,t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new i},set:function(e,n){var r=n;r instanceof i||(r=new i(r)),e.style[d.transform]="WebkitTransform"!==d.transform||l?r.toString():r.toString(!0),t(e).data("transform",r)}},t.cssHooks.transform={set:t.cssHooks["transit:transform"].set},t.cssHooks.filter={get:function(t){return t.style[d.filter]},set:function(t,e){t.style[d.filter]=e}},t.fn.jquery<"1.8"&&(t.cssHooks.transformOrigin={get:function(t){return t.style[d.transformOrigin]},set:function(t,e){t.style[d.transformOrigin]=e}},t.cssHooks.transition={get:function(t){return t.style[d.transition]},set:function(t,e){t.style[d.transition]=e}}),o("scale"),o("scaleX"),o("scaleY"),o("translate"),o("rotate"),o("rotateX"),o("rotateY"),o("rotate3d"),o("perspective"),o("skewX"),o("skewY"),o("x",!0),o("y",!0),i.prototype={setFromString:function(t,e){var n="string"==typeof e?e.split(","):e.constructor===Array?e:[e];n.unshift(t),i.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);this.setter[t]?this.setter[t].apply(this,e):this[t]=e.join(",")},get:function(t){return this.getter[t]?this.getter[t].apply(this):this[t]||0},setter:{rotate:function(t){this.rotate=c(t,"deg")},rotateX:function(t){this.rotateX=c(t,"deg")},rotateY:function(t){this.rotateY=c(t,"deg")},scale:function(t,e){void 0===e&&(e=t),this.scale=t+","+e},skewX:function(t){this.skewX=c(t,"deg")},skewY:function(t){this.skewY=c(t,"deg")},perspective:function(t){this.perspective=c(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==t&&void 0!==t&&(this._translateX=c(t,"px")),null!==e&&void 0!==e&&(this._translateY=c(e,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");return t[0]&&(t[0]=parseFloat(t[0])),t[1]&&(t[1]=parseFloat(t[1])),t[0]===t[1]?t[0]:t},rotate3d:function(){for(var t=(this.rotate3d||"0,0,0,0deg").split(","),e=0;3>=e;++e)t[e]&&(t[e]=parseFloat(t[e]));return t[3]&&(t[3]=c(t[3],"deg")),t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var n in this)if(this.hasOwnProperty(n)){if(!d.transform3d&&("rotateX"===n||"rotateY"===n||"perspective"===n||"transformOrigin"===n))continue;"_"!==n[0]&&e.push(t&&"scale"===n?n+"3d("+this[n]+",1)":t&&"translate"===n?n+"3d("+this[n]+",0)":n+"("+this[n]+")")}return e.join(" ")}},t.fn.transition=t.fn.transit=function(e,n,i,s){var o=this,u=0,c=!0,p=t.extend(!0,{},e);"function"==typeof n&&(s=n,n=void 0),"object"==typeof n&&(i=n.easing,u=n.delay||0,c="undefined"==typeof n.queue?!0:n.queue,s=n.complete,n=n.duration),"function"==typeof i&&(s=i,i=void 0),"undefined"!=typeof p.easing&&(i=p.easing,delete p.easing),"undefined"!=typeof p.duration&&(n=p.duration,delete p.duration),"undefined"!=typeof p.complete&&(s=p.complete,delete p.complete),"undefined"!=typeof p.queue&&(c=p.queue,delete p.queue),"undefined"!=typeof p.delay&&(u=p.delay,delete p.delay),"undefined"==typeof n&&(n=t.fx.speeds._default),"undefined"==typeof i&&(i=t.cssEase._default),n=f(n);var l=a(p,n,i,u),h=t.transit.enabled&&d.transition,y=h?parseInt(n,10)+parseInt(u,10):0;if(0===y){var g=function(t){o.css(p),s&&s.apply(o),t&&t()};return r(o,c,g),o}var m={},v=function(e){var n=!1,i=function(){n&&o.unbind(b,i),y>0&&o.each(function(){this.style[d.transition]=m[this]||null}),"function"==typeof s&&s.apply(o),"function"==typeof e&&e()};y>0&&b&&t.transit.useTransitionEnd?(n=!0,o.bind(b,i)):window.setTimeout(i,y),o.each(function(){y>0&&(this.style[d.transition]=l),t(this).css(p)})},z=function(t){this.offsetWidth,v(t)};return r(o,c,z),this},t.transit.getTransitionValue=a,t});





// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: ssc_pulse Algorithm
if( navigator.platform.toUpperCase().indexOf('MAC') === -1 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini|BlackBerry)/) && jQuery(window).width() > 991 ) {
	function ssc_init(){if(!document.body)return;var e=document.body;var t=document.documentElement;var n=window.innerHeight;var r=e.scrollHeight;ssc_root=document.compatMode.indexOf("CSS")>=0?t:e;ssc_activeElement=e;ssc_initdone=true;if(top!=self){ssc_frame=true}else if(r>n&&(e.offsetHeight<=n||t.offsetHeight<=n)){ssc_root.style.height="auto";if(ssc_root.offsetHeight<=n){var i=document.createElement("div");i.style.clear="both";e.appendChild(i)}}if(!ssc_fixedback){e.style.backgroundAttachment="scroll";t.style.backgroundAttachment="scroll"}if(ssc_keyboardsupport){ssc_addEvent("keydown",ssc_keydown)}}function ssc_scrollArray(e,t,n,r){r||(r=1e3);ssc_directionCheck(t,n);ssc_que.push({x:t,y:n,lastX:t<0?.99:-.99,lastY:n<0?.99:-.99,start:+(new Date)});if(ssc_pending){return}var i=function(){var s=+(new Date);var o=0;var u=0;for(var a=0;a<ssc_que.length;a++){var f=ssc_que[a];var l=s-f.start;var c=l>=ssc_animtime;var h=c?1:l/ssc_animtime;if(ssc_pulseAlgorithm){h=ssc_pulse(h)}var p=f.x*h-f.lastX>>0;var d=f.y*h-f.lastY>>0;o+=p;u+=d;f.lastX+=p;f.lastY+=d;if(c){ssc_que.splice(a,1);a--}}if(t){var v=e.scrollLeft;e.scrollLeft+=o;if(o&&e.scrollLeft===v){t=0}}if(n){var m=e.scrollTop;e.scrollTop+=u;if(u&&e.scrollTop===m){n=0}}if(!t&&!n){ssc_que=[]}if(ssc_que.length){setTimeout(i,r/ssc_framerate+1)}else{ssc_pending=false}};setTimeout(i,0);ssc_pending=true}function ssc_wheel(e){if(!ssc_initdone){ssc_init()}var t=e.target;var n=ssc_overflowingAncestor(t);if(!n||e.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||ssc_isNodeName(t,"embed")&&/\.pdf/i.test(t.src)){return true}var r=e.wheelDeltaX||0;var i=e.wheelDeltaY||0;if(!r&&!i){i=e.wheelDelta||0}if(Math.abs(r)>1.2){r*=ssc_stepsize/120}if(Math.abs(i)>1.2){i*=ssc_stepsize/120}ssc_scrollArray(n,-r,-i);e.preventDefault()}function ssc_keydown(e){var t=e.target;var n=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n){return true}if(ssc_isNodeName(t,"button")&&e.keyCode===ssc_key.spacebar){return true}var r,i=0,s=0;var o=ssc_overflowingAncestor(ssc_activeElement);var u=o.clientHeight;if(o==document.body){u=window.innerHeight}switch(e.keyCode){case ssc_key.up:s=-ssc_arrowscroll;break;case ssc_key.down:s=ssc_arrowscroll;break;case ssc_key.spacebar:r=e.shiftKey?1:-1;s=-r*u*.9;break;case ssc_key.pageup:s=-u*.9;break;case ssc_key.pagedown:s=u*.9;break;case ssc_key.home:s=-o.scrollTop;break;case ssc_key.end:var a=o.scrollHeight-o.scrollTop-u;s=a>0?a+10:0;break;case ssc_key.left:i=-ssc_arrowscroll;break;case ssc_key.right:i=ssc_arrowscroll;break;default:return true}ssc_scrollArray(o,i,s);e.preventDefault()}function ssc_mousedown(e){ssc_activeElement=e.target}function ssc_setCache(e,t){for(var n=e.length;n--;)ssc_cache[ssc_uniqueID(e[n])]=t;return t}function ssc_overflowingAncestor(e){var t=[];var n=ssc_root.scrollHeight;do{var r=ssc_cache[ssc_uniqueID(e)];if(r){return ssc_setCache(t,r)}t.push(e);if(n===e.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<n){return ssc_setCache(t,document.body)}}else if(e.clientHeight+10<e.scrollHeight){overflow=getComputedStyle(e,"").getPropertyValue("overflow");if(overflow==="scroll"||overflow==="auto"){return ssc_setCache(t,e)}}}while(e=e.parentNode)}function ssc_addEvent(e,t,n){window.addEventListener(e,t,n||false)}function ssc_removeEvent(e,t,n){window.removeEventListener(e,t,n||false)}function ssc_isNodeName(e,t){return e.nodeName.toLowerCase()===t.toLowerCase()}function ssc_directionCheck(e,t){e=e>0?1:-1;t=t>0?1:-1;if(ssc_direction.x!==e||ssc_direction.y!==t){ssc_direction.x=e;ssc_direction.y=t;ssc_que=[]}}function ssc_pulse_(e){var t,n,r;e=e*ssc_pulseScale;if(e<1){t=e-(1-Math.exp(-e))}else{n=Math.exp(-1);e-=1;r=1-Math.exp(-e);t=n+r*(1-n)}return t*ssc_pulseNormalize}function ssc_pulse(e){if(e>=1)return 1;if(e<=0)return 0;if(ssc_pulseNormalize==1){ssc_pulseNormalize/=ssc_pulse_(1)}return ssc_pulse_(e)}var ssc_framerate=150;var ssc_animtime=500;var ssc_stepsize=150;var ssc_pulseAlgorithm=true;var ssc_pulseScale=6;var ssc_pulseNormalize=1;var ssc_keyboardsupport=true;var ssc_arrowscroll=50;var ssc_frame=false;var ssc_direction={x:0,y:0};var ssc_initdone=false;var ssc_fixedback=true;var ssc_root=document.documentElement;var ssc_activeElement;var ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var ssc_que=[];var ssc_pending=false;var ssc_cache={};setInterval(function(){ssc_cache={}},10*1e3);var ssc_uniqueID=function(){var e=0;return function(t){return t.ssc_uniqueID||(t.ssc_uniqueID=e++)}}();var ischrome=/chrome/.test(navigator.userAgent.toLowerCase());if(ischrome){ssc_addEvent("mousedown",ssc_mousedown);ssc_addEvent("mousewheel",ssc_wheel);ssc_addEvent("load",ssc_init)}
}




!function(t){var o=0;t.fn.scrolled=function(a,n){"function"==typeof a&&(n=a,a=300);var c="scrollTimer"+o++;this.scroll(function(){var o=t(this),e=o.data(c);e&&clearTimeout(e),e=setTimeout(function(){o.removeData(c),n.call(o[0])},a),o.data(c,e)})}}(jQuery);




/*
* Copyright (C) 2009 Joel Sutherland
* Licenced under the MIT license
* http://www.newmediacampaigns.com/page/jquery-flickr-plugin
*
* Available tags for templates:
* title, link, date_taken, description, published, author, author_id, tags, image*
*/
(function($){$.fn.jflickrfeed=function(settings,callback){settings=$.extend(true,{flickrbase:'http://api.flickr.com/services/feeds/',feedapi:'photos_public.gne',limit:20,qstrings:{lang:'en-us',format:'json',jsoncallback:'?'},cleanDescription:true,useTemplate:true,itemTemplate:'',itemCallback:function(){}},settings);var url=settings.flickrbase+settings.feedapi+'?';var first=true;for(var key in settings.qstrings){if(!first)
url+='&';url+=key+'='+settings.qstrings[key];first=false;}
return $(this).each(function(){var $container=$(this);var container=this;$.getJSON(url,function(data){$.each(data.items,function(i,item){if(i<settings.limit){if(settings.cleanDescription){var regex=/<p>(.*?)<\/p>/g;var input=item.description;if(regex.test(input)){item.description=input.match(regex)[2]
if(item.description!=undefined)
item.description=item.description.replace('<p>','').replace('</p>','');}}
item['image_s']=item.media.m.replace('_m','_s');item['image_t']=item.media.m.replace('_m','_t');item['image_m']=item.media.m.replace('_m','_m');item['image']=item.media.m.replace('_m','');item['image_b']=item.media.m.replace('_m','_b');delete item.media;if(settings.useTemplate){var template=settings.itemTemplate;for(var key in item){var rgx=new RegExp('{{'+key+'}}','g');template=template.replace(rgx,item[key]);}
$container.append(template)}
settings.itemCallback.call(container,item);}});if($.isFunction(callback)){callback.call(container,data);}});});}})(jQuery);




/*!
 * jQuery - Spectragram by Adrian Quevedo
 * http://adrianquevedo.com/  - http://lab.adrianquevedo.com/ - http://elnucleo.com.co/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * You are free to use this plugin in commercial projects as long as the copyright header is left intact.
 *
 * This plugin uses the Instagram(tm) API and is not endorsed or certified by Instagram or Burbn, inc.
 * All Instagram(tm) logos and trademarks displayed on this plugin are property of Burbn, Inc.
 *
 * Date: Thu Jul 15 14:05:02 2012 -0500
 */

if(typeof Object.create!=='function'){Object.create=function(obj){function F(){};F.prototype=obj;return new F()}}(function($,window,document,undefined){var Instagram={init:function(options,elem){var self=this;self.elem=elem;self.$elem=$(elem);self.api='https://api.instagram.com/v1',self.accessData=$.fn.spectragram.accessData,self.options=$.extend({},$.fn.spectragram.options,options)},getRecentMedia:function(userID){var self=this,getData='/users/'+userID+'/media/recent/?'+self.accessData.clientID+'&access_token='+self.accessData.accessToken+'';self.fetch(getData).done(function(results){self.display(results)})},getUserFeed:function(){var self=this,getData='/users/search?q='+self.options.query+'&count='+self.options.max+'&client_id='+self.accessData.clientID+'';self.fetch(getData).done(function(results){if(results.data.length){self.getRecentMedia(results.data[0].id)}else{$.error('Spectagram.js - Error: the username '+self.options.query+' does not exist.')}})},getPopular:function(){var self=this,getData='/media/popular?client_id='+self.accessData.clientID+'&access_token='+self.accessData.accessToken+'';self.fetch(getData).done(function(results){self.display(results)})},getRecentTagged:function(){var self=this,getData='/tags/'+self.options.query+'/media/recent?client_id='+self.accessData.clientID+'&access_token='+self.accessData.accessToken+'';self.fetch(getData).done(function(results){if(results.data.length){self.display(results)}else{$.error('Spectagram.js - Error: the tag '+self.options.query+' does not have results.')}})},fetch:function(getData){var self=this,getUrl=self.api+getData;return $.ajax({type:"GET",dataType:"jsonp",cache:false,url:getUrl})},display:function(results){var self=this,setSize=self.options.size,size,max=(self.options.max>=results.data.length)?results.data.length:self.options.max;if(results.data.length===0){self.$elem.append($(self.options.wrapEachWith).append(self.options.notFoundMsg))}else{for(var i=0;i<max;i++){if(setSize=="small"){size=results.data[i].images.thumbnail.url}else if(setSize=="medium"){size=results.data[i].images.low_resolution.url}else{size=results.data[i].images.standard_resolution.url}self.$elem.append("<a target='_blank' href='"+results.data[i].link+"'><img src='"+size+"'></img></a>")}}}};jQuery.fn.spectragram=function(method,options){if(jQuery.fn.spectragram.accessData.clientID){this.each(function(){var instagram=Object.create(Instagram);instagram.init(options,this);if(instagram[method]){return instagram[method](this)}else{$.error('Method '+method+' does not exist on jQuery.spectragram')}})}else{$.error('You must define an accessToken and a clientID on jQuery.spectragram')}};jQuery.fn.spectragram.options={max:10,query:'coffee',size:'medium',wrapEachWith:'<li></li>'};jQuery.fn.spectragram.accessData={accessToken:null,clientID:null}})(jQuery,window,document);




/**
 * jQuery Plugin - Jribbble v@VERSION
 * A jQuery plugin to fetch shot and player data from the Dribbble API,
 * http://dribbble.com/api
 *
 * Copyright (c) 2011 Tyler Gaw
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * Date: @DATE
 *
 */

(function ($) {
	'use strict';

	// @return OBJ
	$.fn.jribbble = function () {

		// Make a request to the API
		// @param STRING url
		// @param FUNCTION callback
		// @param OBJ OPTIONAL options
		this.makeRequest = function (url, callback, options) {
			var successHandler = function (data) {
				if ($.isFunction(callback)) {
					callback(data);
				}
			},

				// Catch any double '/' that may be caused by our pathname storage
				cleanURL = url.replace('//', '/');

			$.ajax({
				data: options,
				dataType: 'jsonp',
				success: successHandler,
				type: 'GET',
				url: $.jribbble.baseUrl + cleanURL
			});
		};

		// Returning "this", allows this plugin to be chainable
		return this;
	};

	// Create a public object for jribbble
	$.jribbble = {};

	// Public Static Members
	// Can be set globally for all jquery.jribbble requests

	// @member STRING baseUrl - Will be prepended to all API requests
	$.jribbble.baseUrl = 'http://api.dribbble.com';

	// @member OBJ paths - Pathnames to resourses
	$.jribbble.paths = {
		shots:     '/shots/',
		rebounds:  '/rebounds/',
		following: '/following/',
		players:   '/players/',
		followers: '/followers/',
		draftees:  '/draftees/',
		comments:  '/comments/',
		likes:     '/likes/'
	};

	// Public Static Methods
	// These are available at any time, you do not have to
	// instantiate the jribbble plugin on an element to use

	// Retrieve the shot specified by shotId
	// @param INT shotId - The id of the shot you want.
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback
	$.jribbble.getShotById = function (shotId, callback) {
		var resource = $.jribbble.paths.shots + shotId;
		$.fn.jribbble().makeRequest(resource, callback);
	};

	// Retrieve the rebounds of a shot specified by shotId
	// @param INT shotId - The id of the shot you want rebounds for.
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback
	// @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
	//                                  @see http://dribbble.com/api#pagination
	$.jribbble.getReboundsOfShot = function (shotId, callback, pagingOpts) {
		var resource = $.jribbble.paths.shots + shotId + $.jribbble.paths.rebounds;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// @param STRING listName - One of the following: 'debuts', 'everyone', 'popular'
	// @param FUNCTION callback  - Function that will be called once the
	//                             request has successfully completed. The data
	//                             from the request will be passed to the callback
	// @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
	//                                  @see http://dribbble.com/api#pagination
	$.jribbble.getShotsByList = function (listName, callback, pagingOpts) {
		var resource = $.jribbble.paths.shots + listName;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve the most recent shots for the player specified by playerId
	// @param STRING | INT playerId - Can be 'username' or 2318
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	// @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
	//                                  @see http://dribbble.com/api#pagination
	$.jribbble.getShotsByPlayerId = function (playerId, callback, pagingOpts) {
		var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.shots;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve the most recent shots published by those the player, specified by playerId, follows
	// @param STRING | INT playerId - Can be 'username' or 2318
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	// @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
	//                                  @see http://dribbble.com/api#pagination
	$.jribbble.getShotsThatPlayerFollows = function (playerId, callback, pagingOpts) {
		var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.shots + $.jribbble.paths.following;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve profile details for the player specified by playerId
	// @param STRING | INT playerId - Can be 'username' or 2318
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	$.jribbble.getPlayerById = function (playerId, callback) {
		var resource = $.jribbble.paths.players + playerId;
		$.fn.jribbble().makeRequest(resource, callback);
	};

	// Retrieve followers of a player by the playerId
	// @param STRING | INT playerId - Can be 'username' or 2318
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	$.jribbble.getPlayerFollowers = function (playerId, callback, pagingOpts) {
		var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.followers;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve the list of players that are following playerId
	// @param STRING | INT playerId - Can be 'username' or 2318
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	$.jribbble.getPlayerFollowing = function (playerId, callback, pagingOpts) {
		var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.following;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve the list of players drafted by the playerId
	// @param STRING | INT playerId - Can be 'username' or 2318
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	$.jribbble.getPlayerDraftees = function (playerId, callback, pagingOpts) {
		var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.draftees;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve the set of comments for the shot specified by shotId
	// @param INT shotId - The id of the shot you want comments for.
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	// @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
	//                                  @see http://dribbble.com/api#pagination
	$.jribbble.getCommentsOfShot = function (shotId, callback, pagingOpts) {
		var resource = $.jribbble.paths.shots + shotId + $.jribbble.paths.comments;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve the set of likes of the player specified by playerID
	// @param INT playerId - The id of the player whose likes you want
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	// @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 }
	//                                  @see http://dribbble.com/api#pagination
	$.jribbble.getShotsThatPlayerLikes = function (playerId, callback, pagingOpts) {
		var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.shots + $.jribbble.paths.likes;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

}(jQuery));




// jquery.mb.YTPlayer 24-05-2015

function onYouTubeIframeAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}var ytp=ytp||{};!function(jQuery,ytp){var getYTPVideoID=function(a){var b,c;return a.indexOf("youtu.be")>0?(b=a.substr(a.lastIndexOf("/")+1,a.length),c=b.indexOf("?list=")>0?b.substr(b.lastIndexOf("="),b.length):null,b=c?b.substr(0,b.lastIndexOf("?")):b):a.indexOf("http")>-1?(b=a.match(/[\\?&]v=([^&#]*)/)[1],c=a.indexOf("list=")>0?a.match(/[\\?&]list=([^&#]*)/)[1]:null):(b=a.length>15?null:a,c=b?null:a),{videoID:b,playlistID:c}};jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"2.9.2",author:"Matteo Bicocchi",apiKey:"",defaults:{containment:"body",ratio:"auto",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:50,addRaster:!1,opacity:1,quality:"default",mute:!1,loop:!0,showControls:!0,showAnnotations:!1,showYTLogo:!0,stopMovieOnBlur:!0,realfullscreen:!0,gaTrack:!0,optimizeDisplay:!0,onReady:function(a){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},locationProtocol:"https:",buildPlayer:function(options){return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0,YTPlayer.opt={},YTPlayer.state={},YTPlayer.filtersEnabled=!0,YTPlayer.filters={grayscale:{value:0,unit:"%"},hue_rotate:{value:0,unit:"deg"},invert:{value:0,unit:"%"},opacity:{value:0,unit:"%"},saturate:{value:0,unit:"%"},sepia:{value:0,unit:"%"},brightness:{value:0,unit:"%"},contrast:{value:0,unit:"%"},blur:{value:0,unit:"px"}},$YTPlayer.addClass("mb_YTPlayer");var property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");"undefined"!=typeof property&&"undefined"!=typeof property.vol&&(property.vol=0===property.vol?property.vol=1:property.vol),jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property),YTPlayer.hasChanged||(YTPlayer.defaultOpt={},jQuery.extend(YTPlayer.defaultOpt,jQuery.mbYTPlayer.defaults,options,property)),YTPlayer.isRetina=window.retina||window.devicePixelRatio>1;var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};YTPlayer.canGoFullScreen=!(jQuery.browser.msie||jQuery.browser.opera||isIframe()),YTPlayer.canGoFullScreen||(YTPlayer.opt.realfullscreen=!1),$YTPlayer.attr("id")||$YTPlayer.attr("id","video_"+(new Date).getTime());var playerID="mbYTP_"+YTPlayer.id;YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0;var videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).videoID:!1,playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).playlistID:!1;YTPlayer.videoID=videoID,YTPlayer.playlistID=playlistID,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"0":"3";var playerVars={autoplay:0,modestbranding:1,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations};document.createElement("video").canPlayType&&jQuery.extend(playerVars,{html5:1}),jQuery.browser.msie&&jQuery.browser.version<9&&(this.opt.opacity=1);var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox"),overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");if(YTPlayer.isSelf="self"==YTPlayer.opt.containment,YTPlayer.defaultOpt.containment=YTPlayer.opt.containment=jQuery("self"==YTPlayer.opt.containment?this:YTPlayer.opt.containment),YTPlayer.isBackground="body"==YTPlayer.opt.containment.get(0).tagName.toLowerCase(),!YTPlayer.isBackground||!ytp.backgroundIsInited){var isPlayer=YTPlayer.opt.containment.is(jQuery(this));if(YTPlayer.canPlayOnMobile=isPlayer&&0===jQuery(this).children().length,isPlayer?YTPlayer.isPlayer=!0:$YTPlayer.hide(),jQuery.browser.mobile&&!YTPlayer.canPlayOnMobile)return void $YTPlayer.remove();var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);if(wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0}),playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"}),wrapper.append(playerBox),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({boxSizing:"border-box"}),wrapper.css({position:"fixed",top:0,left:0,zIndex:0}),$YTPlayer.hide()):"static"==YTPlayer.opt.containment.css("position")&&YTPlayer.opt.containment.css({position:"relative"}),YTPlayer.opt.containment.prepend(wrapper),YTPlayer.wrapper=wrapper,playerBox.css({opacity:1}),jQuery.browser.mobile||(playerBox.after(overlay),YTPlayer.overlay=overlay),YTPlayer.isBackground||overlay.on("mouseenter",function(){YTPlayer.controlBar&&YTPlayer.controlBar.addClass("visible")}).on("mouseleave",function(){YTPlayer.controlBar&&YTPlayer.controlBar.removeClass("visible")}),ytp.YTAPIReady)setTimeout(function(){jQuery(document).trigger("YTAPIReady")},100);else{jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/iframe_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head").prepend(tag)}jQuery(document).on("YTAPIReady",function(){YTPlayer.isBackground&&ytp.backgroundIsInited||YTPlayer.isInit||(YTPlayer.isBackground&&(ytp.backgroundIsInited=!0),YTPlayer.opt.autoPlay="undefined"==typeof YTPlayer.opt.autoPlay?YTPlayer.isBackground?!0:!1:YTPlayer.opt.autoPlay,YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100,jQuery.mbYTPlayer.getDataFromAPI(YTPlayer),jQuery(YTPlayer).on("YTPChanged",function(){if(!YTPlayer.isInit){if(YTPlayer.isInit=!0,jQuery.browser.mobile&&YTPlayer.canPlayOnMobile){if(YTPlayer.opt.containment.outerWidth()>jQuery(window).width()){YTPlayer.opt.containment.css({maxWidth:"100%"});var h=.6*YTPlayer.opt.containment.outerWidth();YTPlayer.opt.containment.css({maxHeight:h})}return void new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),height:"100%",width:"100%",events:{onReady:function(a){YTPlayer.player=a.target,playerBox.css({opacity:1}),YTPlayer.wrapper.css({opacity:1})}}})}new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(a){if(YTPlayer.player=a.target,!YTPlayer.isReady){YTPlayer.isReady=YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay?!1:!0,YTPlayer.playerEl=YTPlayer.player.getIframe(),$YTPlayer.optimizeDisplay(),YTPlayer.videoID=videoID,jQuery(window).on("resize.YTP",function(){$YTPlayer.optimizeDisplay()}),jQuery.mbYTPlayer.checkForState(YTPlayer);var b=jQuery.Event("YTPUnstarted");b.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(b)}},onStateChange:function(event){if("function"==typeof event.target.getPlayerState){var state=event.target.getPlayerState();if(YTPlayer.state!=state){YTPlayer.state=state;var eventType;switch(state){case-1:eventType="YTPUnstarted";break;case 0:eventType="YTPEnd";break;case 1:eventType="YTPStart",YTPlayer.controlBar&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)&&_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()]),"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString());break;case 2:eventType="YTPPause",YTPlayer.controlBar&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),eventType="YTPBuffering",YTPlayer.controlBar&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 5:eventType="YTPCued"}var YTPEvent=jQuery.Event(eventType);YTPEvent.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(YTPEvent)}}},onPlaybackQualityChange:function(a){var b=a.target.getPlaybackQuality(),c=jQuery.Event("YTPQualityChange");c.quality=b,jQuery(YTPlayer).trigger(c)},onError:function(a){150==a.data&&(console.log("Embedding this video is restricted by Youtube."),YTPlayer.isPlayList&&jQuery(YTPlayer).playNext()),2==a.data&&YTPlayer.isPlayList&&jQuery(YTPlayer).playNext(),"function"==typeof YTPlayer.opt.onError&&YTPlayer.opt.onError($YTPlayer,a)}}})}}))})}})},getDataFromAPI:function(a){if(a.videoData=jQuery.mbStorage.get("YYTPlayer_data_"+a.videoID),a.videoData)setTimeout(function(){a.opt.ratio="auto"==a.opt.ratio?"16/9":a.opt.ratio,a.dataReceived=!0,jQuery(a).trigger("YTPChanged");var b=jQuery.Event("YTPData");b.prop={};for(var c in a.videoData)b.prop[c]=a.videoData[c];jQuery(a).trigger(b)},500),a.hasData=!0;else if(jQuery.mbYTPlayer.apiKey)jQuery.getJSON("https://www.googleapis.com/youtube/v3/videos?id="+a.videoID+"&key="+jQuery.mbYTPlayer.apiKey+"&part=snippet",function(b){function c(b){a.videoData={},a.videoData.id=a.videoID,a.videoData.channelTitle=b.channelTitle,a.videoData.title=b.title,a.videoData.description=b.description.length<400?b.description:b.description.substring(0,400)+" ...",a.videoData.aspectratio="auto"==a.opt.ratio?"16/9":a.opt.ratio,a.opt.ratio=a.videoData.aspectratio,a.videoData.thumb_max=b.thumbnails.maxres?b.thumbnails.maxres.url:null,a.videoData.thumb_high=b.thumbnails.high?b.thumbnails.high.url:null,a.videoData.thumb_medium=b.thumbnails.medium?b.thumbnails.medium.url:null,jQuery.mbStorage.set("YYTPlayer_data_"+a.videoID,a.videoData)}a.dataReceived=!0,jQuery(a).trigger("YTPChanged"),c(b.items[0].snippet),a.hasData=!0;var d=jQuery.Event("YTPData");d.prop={};for(var e in a.videoData)d.prop[e]=a.videoData[e];jQuery(a).trigger(d)});else{if(setTimeout(function(){jQuery(a).trigger("YTPChanged")},50),a.isPlayer&&!a.opt.autoPlay){var b="https://i.ytimg.com/vi/"+a.videoID+"/hqdefault.jpg";a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"}),a.opt.backgroundUrl=b}a.videoData=null,a.opt.ratio="auto"==a.opt.ratio?"16/9":a.opt.ratio}jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer",function(){if(!a.hasData&&(a.hasData=!0,a.isPlayer&&!a.opt.autoPlay)){var b=a.videoData.thumb_max||a.videoData.thumb_high||a.videoData.thumb_medium;a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"}),a.opt.backgroundUrl=b}}),a.isPlayer&&!a.opt.autoPlay&&(a.loading=jQuery("<div/>").addClass("loading").html("Loading").hide(),jQuery(a).append(a.loading),a.loading.fadeIn())},removeStoredData:function(){jQuery.mbStorage.remove()},getVideoData:function(){var a=this.get(0);return a.videoData},getVideoID:function(){var a=this.get(0);return a.videoID||!1},setVideoQuality:function(a){var b=this.get(0);jQuery.browser.chrome||b.player.setPlaybackQuality(a)},playlist:function(a,b,c){var d=this,e=d.get(0);return e.isPlayList=!0,b&&(a=jQuery.shuffle(a)),e.videoID||(e.videos=a,e.videoCounter=0,e.videoLength=a.length,jQuery(e).data("property",a[0]),jQuery(e).mb_YTPlayer()),"function"==typeof c&&jQuery(e).on("YTPChanged",function(){c(e)}),jQuery(e).on("YTPEnd",function(){jQuery(e).playNext()}),d},playNext:function(){var a=this.get(0);return a.videoCounter++,a.videoCounter>=a.videoLength&&(a.videoCounter=0),jQuery(a).changeMovie(a.videos[a.videoCounter]),this},playPrev:function(){var a=this.get(0);return a.videoCounter--,a.videoCounter<0&&(a.videoCounter=a.videoLength-1),jQuery(a).changeMovie(a.videos[a.videoCounter]),this},changeMovie:function(a){var b=this.get(0);b.opt.startAt=0,b.opt.stopAt=0,b.opt.mute=!0,b.hasData=!1,b.hasChanged=!0,a&&jQuery.extend(b.opt,b.defaultOpt,a),b.videoID=getYTPVideoID(b.opt.videoURL).videoID,jQuery(b.playerEl).CSSAnimate({opacity:0},200,function(){return jQuery(b).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+b.videoID),1,b.opt.quality),jQuery.mbYTPlayer.checkForState(b),jQuery(b).optimizeDisplay(),jQuery.mbYTPlayer.getDataFromAPI(b),this})},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var a=this.get(0);ytp.YTAPIReady=!1,ytp.backgroundIsInited=!1,a.isInit=!1,a.videoID=null;var b=a.wrapper;return b.remove(),jQuery("#controlBar_"+a.id).remove(),clearInterval(a.checkForStartAt),clearInterval(a.getState),this},fullscreen:function(real){function hideMouse(){YTPlayer.overlay.css({cursor:"none"})}function RunPrefixMethod(a,b){for(var c,d,e=["webkit","moz","ms","o",""],f=0;f<e.length&&!a[c];){if(c=b,""==e[f]&&(c=c.substr(0,1).toLowerCase()+c.substr(1)),c=e[f]+c,d=typeof a[c],"undefined"!=d)return e=[e[f]],"function"==d?a[c]():a[c];f++}}function launchFullscreen(a){RunPrefixMethod(a,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}var YTPlayer=this.get(0);"undefined"==typeof real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.browser.mozilla?"mozfullscreenchange":jQuery.browser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var a=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");a?(jQuery(YTPlayer).YTPSetVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("fullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}return YTPlayer.isAlone?(jQuery(document).off("mousemove.YTPlayer"),YTPlayer.overlay.css({cursor:"auto"}),real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1):(jQuery(document).on("mousemove.YTPlayer",function(a){YTPlayer.overlay.css({cursor:"auto"}),clearTimeout(YTPlayer.hideCursor),jQuery(a.target).parents().is(".mb_YTPBar")||(YTPlayer.hideCursor=setTimeout(hideMouse,3e3))}),hideMouse(),real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("fullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},1e3),YTPlayer.wrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},500)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},1e3),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0),this},toggleLoops:function(){var a=this.get(0),b=a.opt;return 1==b.loop?b.loop=0:(b.startAt?a.player.seekTo(b.startAt):a.player.playVideo(),b.loop=1),this},play:function(){var a=this.get(0);if(a.isReady){var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.pause),a.player.playVideo(),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},2e3),jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),jQuery(a).css("background-image","none"),this}},togglePlay:function(a){var b=this.get(0);return 1==b.state?this.YTPPause():this.YTPPlay(),"function"==typeof a&&a(b.state),this},stop:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.play),a.player.stopVideo(),this},pause:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.play),a.player.pauseVideo(),this},seekTo:function(a){var b=this.get(0);return b.player.seekTo(a,!0),this},setVolume:function(a){var b=this.get(0);return a||b.opt.vol||0!=b.player.getVolume()?!a&&b.player.getVolume()>0||a&&b.opt.vol==a?b.isMute?jQuery(b).YTPUnmute():jQuery(b).YTPMute():(b.opt.vol=a,b.player.setVolume(b.opt.vol),b.volumeBar&&b.volumeBar.length&&b.volumeBar.updateSliderVal(a)):jQuery(b).YTPUnmute(),this},mute:function(){var a=this.get(0);if(!a.isMute){a.player.mute(),a.isMute=!0,a.player.setVolume(0),a.volumeBar&&a.volumeBar.length&&a.volumeBar.width()>10&&a.volumeBar.updateSliderVal(0);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.unmute),jQuery(a).addClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.addClass("muted");var d=jQuery.Event("YTPMuted");return d.time=a.player.time,a.canTrigger&&jQuery(a).trigger(d),this}},unmute:function(){var a=this.get(0);if(a.isMute){a.player.unMute(),a.isMute=!1,a.player.setVolume(a.opt.vol),a.volumeBar&&a.volumeBar.length&&a.volumeBar.updateSliderVal(a.opt.vol>10?a.opt.vol:10);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.mute),jQuery(a).removeClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.removeClass("muted");var d=jQuery.Event("YTPUnmuted");return d.time=a.player.time,a.canTrigger&&jQuery(a).trigger(d),this}},applyFilter:function(a,b){var c=this.get(0);return c.filters[a].value=b,c.filtersEnabled&&this.YTPEnableFilters(),this},applyFilters:function(a){var b=this.get(0);return this.on("YTPReady",function(){for(var c in a)b.filters[c].value=a[c],jQuery(b).YTPApplyFilter(c,a[c]);jQuery(b).trigger("YTPFiltersApplied")}),this},toggleFilter:function(a,b){return this.each(function(){var c=this;c.filters[a].value?c.filters[a].value=0:c.filters[a].value=b,c.filtersEnabled&&jQuery(this).YTPEnableFilters()})},toggleFilters:function(a){return this.each(function(){var b=this;b.filtersEnabled?(jQuery(b).trigger("YTPDisableFilters"),jQuery(b).YTPDisableFilters()):(jQuery(b).YTPEnableFilters(),jQuery(b).trigger("YTPEnableFilters")),"function"==typeof a&&a(b.filtersEnabled)})},disableFilters:function(){return this.each(function(){var a=this,b=jQuery(a.playerEl);b.css("-webkit-filter",""),b.css("filter",""),a.filtersEnabled=!1})},enableFilters:function(){return this.each(function(){var a=this,b=jQuery(a.playerEl),c="";for(var d in a.filters)a.filters[d].value&&(c+=d.replace("_","-")+"("+a.filters[d].value+a.filters[d].unit+") ");b.css("-webkit-filter",c),b.css("filter",c),a.filtersEnabled=!0})},removeFilter:function(a,b){return this.each(function(){"function"==typeof a&&(b=a,a=null);var c=this;if(a)jQuery(this).YTPApplyFilter(a,0),"function"==typeof b&&b(a);else for(var d in c.filters)jQuery(this).YTPApplyFilter(d,0),"function"==typeof b&&b(d)})},manageProgress:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPProgress"),d=b.find(".mb_YTPLoaded"),e=b.find(".mb_YTPseekbar"),f=c.outerWidth(),g=Math.floor(a.player.getCurrentTime()),h=Math.floor(a.player.getDuration()),i=g*f/h,j=0,k=100*a.player.getVideoLoadedFraction();return d.css({left:j,width:k+"%"}),e.css({left:0,width:i}),{totalTime:h,currentTime:g}},buildControls:function(YTPlayer){var data=YTPlayer.opt;if(data.showYTLogo=data.showYTLogo||data.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){YTPlayer.controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide();var buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).YTPPause():jQuery(YTPlayer).YTPPlay()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).YTPUnmute():jQuery(YTPlayer).YTPMute()}),volumeBar=jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display:"inline-block"});YTPlayer.volumeBar=volumeBar;var idx=jQuery("<span/>").addClass("mb_YTPTime"),vURL=data.videoURL?data.videoURL:"";vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(a){timeBar.css({width:a.clientX-timeBar.offset().left}),YTPlayer.timeW=a.clientX-timeBar.offset().left,YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0});var b=Math.floor(YTPlayer.player.getDuration());YTPlayer["goto"]=timeBar.outerWidth()*b/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]),!0),YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),data.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),YTPlayer.controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(YTPlayer.controlBar):(YTPlayer.controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(YTPlayer.controlBar)),volumeBar.simpleSlider({initialval:YTPlayer.opt.vol,scale:100,orientation:"h",callback:function(a){0==a.value?jQuery(YTPlayer).YTPMute():jQuery(YTPlayer).YTPUnmute(),YTPlayer.player.setVolume(a.value),YTPlayer.isMute||(YTPlayer.opt.vol=a.value)}})}},checkForState:function(YTPlayer){var interval=YTPlayer.opt.showControls?100:1e3;return clearInterval(YTPlayer.getState),jQuery.contains(document,YTPlayer)?(jQuery.mbYTPlayer.checkForStart(YTPlayer),void(YTPlayer.getState=setInterval(function(){var prog=jQuery(YTPlayer).YTPManageProgress(),$YTPlayer=jQuery(YTPlayer),data=YTPlayer.opt,startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:0,stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;if(stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0,YTPlayer.player.time!=prog.currentTime){var YTPEvent=jQuery.Event("YTPTime");YTPEvent.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(YTPEvent)}if(YTPlayer.player.time=prog.currentTime,0==YTPlayer.player.getVolume()?$YTPlayer.addClass("isMuted"):$YTPlayer.removeClass("isMuted"),YTPlayer.opt.showControls&&(prog.totalTime?YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime)):YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),eval(YTPlayer.opt.stopMovieOnBlur)&&(document.hasFocus()?document.hasFocus()&&!YTPlayer.hasFocus&&-1!=YTPlayer.state&&0!=YTPlayer.state&&(YTPlayer.hasFocus=!0,$YTPlayer.YTPPlay()):1==YTPlayer.state&&(YTPlayer.hasFocus=!1,$YTPlayer.YTPPause())),YTPlayer.controlBar&&YTPlayer.controlBar.outerWidth()<=400&&!YTPlayer.isCompact?(YTPlayer.controlBar.addClass("compact"),YTPlayer.isCompact=!0,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)):YTPlayer.controlBar&&YTPlayer.controlBar.outerWidth()>400&&YTPlayer.isCompact&&(YTPlayer.controlBar.removeClass("compact"),YTPlayer.isCompact=!1,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),1==YTPlayer.player.getPlayerState()&&(parseFloat(YTPlayer.player.getDuration()-3)<YTPlayer.player.getCurrentTime()||stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt)){if(YTPlayer.isEnded)return;if(YTPlayer.isEnded=!0,setTimeout(function(){YTPlayer.isEnded=!1},2e3),YTPlayer.isPlayList){clearInterval(YTPlayer.getState);var YTPEnd=jQuery.Event("YTPEnd");return YTPEnd.time=YTPlayer.player.time,void jQuery(YTPlayer).trigger(YTPEnd)}data.loop?YTPlayer.player.seekTo(startAt,!0):(YTPlayer.player.pauseVideo(),YTPlayer.wrapper.CSSAnimate({opacity:0},1e3,function(){var a=jQuery.Event("YTPEnd");a.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(a),YTPlayer.player.seekTo(startAt,!0),YTPlayer.isBackground||YTPlayer.opt.containment.css({background:"rgba(0,0,0,0.5) url("+YTPlayer.opt.backgroundUrl+") center center",backgroundSize:"cover"})}))}},interval))):(jQuery(YTPlayer).YTPPlayerDestroy(),clearInterval(YTPlayer.getState),void clearInterval(YTPlayer.checkForStartAt))},checkForStart:function(a){var b=jQuery(a);if(!jQuery.contains(document,a))return void jQuery(a).YTPPlayerDestroy();if(jQuery.browser.chrome&&(a.opt.quality="default"),a.player.pauseVideo(),jQuery(a).muteYTPVolume(),jQuery("#controlBar_"+a.id).remove(),a.opt.showControls&&jQuery.mbYTPlayer.buildControls(a),a.opt.addRaster){var c="dot"==a.opt.addRaster?"raster-dot":"raster";a.overlay.addClass(a.isRetina?c+" retina":c)}else a.overlay.removeClass(function(a,b){var c=b.split(" "),d=[];return jQuery.each(c,function(a,b){/raster.*/.test(b)&&d.push(b)}),d.push("retina"),d.join(" ")});a.checkForStartAt=setInterval(function(){jQuery(a).YTPMute();var c=a.opt.startAt?a.opt.startAt:1,d=a.player.getVideoLoadedFraction()>c/a.player.getDuration();if(a.player.getDuration()>0&&a.player.getCurrentTime()>=c&&d){clearInterval(a.checkForStartAt),a.isReady=!0,"function"==typeof a.opt.onReady&&a.opt.onReady(a);var e=jQuery.Event("YTPReady");jQuery(a).trigger(e),a.player.pauseVideo(),a.opt.mute||jQuery(a).YTPUnmute(),a.canTrigger=!0,a.opt.autoPlay?(b.YTPPlay(),b.css("background-image","none"),jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},1e3)):(a.player.pauseVideo(),a.isPlayer||(jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},1e3))),a.isPlayer&&!a.opt.autoPlay&&(a.loading.html("Ready"),setTimeout(function(){a.loading.fadeOut()},100)),a.controlBar&&a.controlBar.slideDown(1e3)}else c>=0&&a.player.seekTo(c,!0)},1e3)},formatTime:function(a){var b=Math.floor(a/60),c=Math.floor(a-60*b);return(9>=b?"0"+b:b)+" : "+(9>=c?"0"+c:c)}},jQuery.fn.toggleVolume=function(){var a=this.get(0);if(a)return a.player.isMuted()?(jQuery(a).YTPUnmute(),!0):(jQuery(a).YTPMute(),!1)},jQuery.fn.optimizeDisplay=function(){var a=this.get(0),b=a.opt,c=jQuery(a.playerEl),d={},e=a.wrapper;d.width=e.outerWidth(),d.height=e.outerHeight();var f=24,g=100,h={};b.optimizeDisplay?(h.width=d.width+d.width*f/100,h.height="16/9"==b.ratio?Math.ceil(9*d.width/16):Math.ceil(3*d.width/4),h.marginTop=-((h.height-d.height)/2),h.marginLeft=-(d.width*(f/2)/100),h.height<d.height&&(h.height=d.height+d.height*f/100,h.width="16/9"==b.ratio?Math.floor(16*d.height/9):Math.floor(4*d.height/3),h.marginTop=-(d.height*(f/2)/100),h.marginLeft=-((h.width-d.width)/2)),h.width+=g,h.height+=g,h.marginTop-=g/2,h.marginLeft-=g/2):(h.width="100%",h.height="100%",h.marginTop=0,h.marginLeft=0),c.css({width:h.width,height:h.height,marginTop:h.marginTop,marginLeft:h.marginLeft})},jQuery.shuffle=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.playlist,jQuery.fn.YTPPlayNext=jQuery.mbYTPlayer.playNext,jQuery.fn.YTPPlayPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.YTPChangeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.YTPGetVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.YTPGetPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.YTPPlayerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.YTPFullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.YTPPlay=jQuery.mbYTPlayer.play,jQuery.fn.YTPTogglePlay=jQuery.mbYTPlayer.togglePlay,jQuery.fn.YTPToggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.YTPStop=jQuery.mbYTPlayer.stop,jQuery.fn.YTPPause=jQuery.mbYTPlayer.pause,jQuery.fn.YTPSeekTo=jQuery.mbYTPlayer.seekTo,jQuery.fn.YTPMute=jQuery.mbYTPlayer.mute,jQuery.fn.YTPUnmute=jQuery.mbYTPlayer.unmute,jQuery.fn.YTPToggleVolume=jQuery.mbYTPlayer.toggleVolume,jQuery.fn.YTPSetVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.YTPSetVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.YTPManageProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPGetVideoData=jQuery.mbYTPlayer.getVideoData,jQuery.fn.YTPApplyFilter=jQuery.mbYTPlayer.applyFilter,jQuery.fn.YTPApplyFilters=jQuery.mbYTPlayer.applyFilters,jQuery.fn.YTPToggleFilter=jQuery.mbYTPlayer.toggleFilter,jQuery.fn.YTPToggleFilters=jQuery.mbYTPlayer.toggleFilters,jQuery.fn.YTPRemoveFilter=jQuery.mbYTPlayer.removeFilter,jQuery.fn.YTPDisableFilters=jQuery.mbYTPlayer.disableFilters,jQuery.fn.YTPEnableFilters=jQuery.mbYTPlayer.enableFilters,jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.playNext=jQuery.mbYTPlayer.playNext,jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildControls,jQuery.fn.playYTP=jQuery.mbYTPlayer.play,jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.stopYTP=jQuery.mbYTPlayer.stop,jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pause,jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekTo,jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.mute,jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmute,jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPGetDataFromFeed=jQuery.mbYTPlayer.getVideoData}(jQuery,ytp),!function($){function uncamel(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function setUnit(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+$/)?""+a+b:a}function setFilter(a,b,c){var d=uncamel(b),e=jQuery.browser.mozilla?"":$.CSS.sfx;a[e+"filter"]=a[e+"filter"]||"",c=setUnit(c>$.CSS.filters[b].max?$.CSS.filters[b].max:c,$.CSS.filters[b].unit),a[e+"filter"]+=d+"("+c+") ",delete a[b]}eval(function(a,b,c,d,e,f){if(e=function(a){return a},!"".replace(/^/,String)){for(;c--;)f[c]=d[c]||c;d=[function(a){return f[a]}],e=function(){return"\\w+"},c=1}for(;c--;)d[c]&&(a=a.replace(new RegExp("\\b"+e(c)+"\\b","g"),d[c]));return a}('29 11=17.53;24(!2.9){2.9={};2.9.34=!1;2.9.22=!1;2.9.45=!1;2.9.42=!1;2.9.40=!1;2.9.28=!1;2.9.56=11;2.9.16=17.51;2.9.13=""+47(17.23);2.9.18=26(17.23,10);29 32,12,20;24(-1!=(12=11.15("33")))2.9.45=!0,2.9.16="33",2.9.13=11.14(12+6),-1!=(12=11.15("25"))&&(2.9.13=11.14(12+8));27 24(-1!=(12=11.15("58")))2.9.28=!0,2.9.16="36 38 39",2.9.13=11.14(12+5);27 24(-1!=11.15("57")){2.9.28=!0;2.9.16="36 38 39";29 30=11.15("59:")+3,43=30+4;2.9.13=11.14(30,43)}27-1!=(12=11.15("41"))?(2.9.22=!0,2.9.40=!0,2.9.16="41",2.9.13=11.14(12+7)):-1!=(12=11.15("31"))?(2.9.22=!0,2.9.42=!0,2.9.16="31",2.9.13=11.14(12+7),-1!=(12=11.15("25"))&&(2.9.13=11.14(12+8))):-1!=(12=11.15("68"))?(2.9.22=!0,2.9.16="31",2.9.13=11.14(12+7),-1!=(12=11.15("25"))&&(2.9.13=11.14(12+8))):-1!=(12=11.15("35"))?(2.9.34=!0,2.9.16="35",2.9.13=11.14(12+8)):(32=11.37(" ")+1)<(12=11.37("/"))&&(2.9.16=11.14(32,12),2.9.13=11.14(12+1),2.9.16.63()==2.9.16.64()&&(2.9.16=17.51));-1!=(20=2.9.13.15(";"))&&(2.9.13=2.9.13.14(0,20));-1!=(20=2.9.13.15(" "))&&(2.9.13=2.9.13.14(0,20));2.9.18=26(""+2.9.13,10);67(2.9.18)&&(2.9.13=""+47(17.23),2.9.18=26(17.23,10));2.9.69=2.9.18}2.9.46=/65/19.21(11);2.9.49=/66/19.21(11);2.9.48=/60|61|55/19.21(11);2.9.50=/33 52/19.21(11);2.9.44=/54/19.21(11);2.9.62=2.9.46||2.9.49||2.9.48||2.9.44||2.9.50;',10,70,"||jQuery|||||||browser||nAgt|verOffset|fullVersion|substring|indexOf|name|navigator|majorVersion|i|ix|test|webkit|appVersion|if|Version|parseInt|else|msie|var|start|Safari|nameOffset|Opera|mozilla|Firefox|Microsoft|lastIndexOf|Internet|Explorer|chrome|Chrome|safari|end|windowsMobile|opera|android|parseFloat|ios|blackberry|operaMobile|appName|Mini|userAgent|IEMobile|iPod|ua|Trident|MSIE|rv|iPhone|iPad|mobile|toLowerCase|toUpperCase|Android|BlackBerry|isNaN|AppleWebkit|version".split("|"),0,{})),jQuery.support.CSStransition=function(){var a=document.body||document.documentElement,b=a.style;return void 0!==b.transition||void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.MsTransition||void 0!==b.OTransition}(),$.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(a){var b=jQuery.extend(!0,{},a);jQuery.browser.webkit||jQuery.browser.opera?$.CSS.sfx="-webkit-":jQuery.browser.mozilla?$.CSS.sfx="-moz-":jQuery.browser.msie&&($.CSS.sfx="-ms-");for(var c in b){"transform"===c&&(b[$.CSS.sfx+"transform"]=b[c],delete b[c]),"transform-origin"===c&&(b[$.CSS.sfx+"transform-origin"]=a[c],delete b[c]),"filter"!==c||jQuery.browser.mozilla||(b[$.CSS.sfx+"filter"]=a[c],delete b[c]),"blur"===c&&setFilter(b,"blur",a[c]),"brightness"===c&&setFilter(b,"brightness",a[c]),"contrast"===c&&setFilter(b,"contrast",a[c]),"grayscale"===c&&setFilter(b,"grayscale",a[c]),"hueRotate"===c&&setFilter(b,"hueRotate",a[c]),"invert"===c&&setFilter(b,"invert",a[c]),"saturate"===c&&setFilter(b,"saturate",a[c]),"sepia"===c&&setFilter(b,"sepia",a[c]);var d="";"x"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateX("+setUnit(a[c],"px")+")",delete b[c]),"y"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateY("+setUnit(a[c],"px")+")",delete b[c]),"z"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateZ("+setUnit(a[c],"px")+")",delete b[c]),"rotate"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotate("+setUnit(a[c],"deg")+")",delete b[c]),"rotateX"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateX("+setUnit(a[c],"deg")+")",delete b[c]),"rotateY"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateY("+setUnit(a[c],"deg")+")",delete b[c]),"rotateZ"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateZ("+setUnit(a[c],"deg")+")",delete b[c]),"scale"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scale("+setUnit(a[c],"")+")",delete b[c]),"scaleX"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleX("+setUnit(a[c],"")+")",delete b[c]),"scaleY"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleY("+setUnit(a[c],"")+")",delete b[c]),"scaleZ"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleZ("+setUnit(a[c],"")+")",delete b[c]),"skew"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skew("+setUnit(a[c],"deg")+")",delete b[c]),"skewX"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewX("+setUnit(a[c],"deg")+")",delete b[c]),"skewY"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewY("+setUnit(a[c],"deg")+")",delete b[c]),"perspective"===c&&(d=$.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" perspective("+setUnit(a[c],"px")+")",delete b[c])}return b},getProp:function(a){var b=[];for(var c in a)b.indexOf(c)<0&&b.push(uncamel(c));return b.join(",")},animate:function(a,b,c,d,e){return this.each(function(){function f(){g.called=!0,g.CSSAIsRunning=!1,h.off($.CSS.transitionEnd+"."+g.id),clearTimeout(g.timeout),h.css($.CSS.sfx+"transition",""),"function"==typeof e&&e.apply(g),"function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)}var g=this,h=jQuery(this);g.id=g.id||"CSSA_"+(new Date).getTime();var i=i||{type:"noEvent"};if(g.CSSAIsRunning&&g.eventType==i.type&&!jQuery.browser.msie&&jQuery.browser.version<=9)return void(g.CSSqueue=function(){h.CSSAnimate(a,b,c,d,e)});if(g.CSSqueue=null,g.eventType=i.type,0!==h.length&&a){if(a=$.normalizeCss(a),g.CSSAIsRunning=!0,"function"==typeof b&&(e=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(d=c,c=0),"string"==typeof c&&(e=c,c=0),"function"==typeof d&&(e=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b)for(var j in jQuery.fx.speeds){if(b==j){b=jQuery.fx.speeds[j];break}b=jQuery.fx.speeds._default}if(b||(b=jQuery.fx.speeds._default),"string"==typeof e&&(d=e,e=null),!jQuery.support.CSStransition){for(var k in a){if("transform"===k&&delete a[k],"filter"===k&&delete a[k],"transform-origin"===k&&delete a[k],"auto"===a[k]&&delete a[k],"x"===k){var l=a[k],m="left";a[m]=l,delete a[k]}if("y"===k){var l=a[k],m="top";a[m]=l,delete a[k]}("-ms-transform"===k||"-ms-filter"===k)&&delete a[k]}return void h.delay(c).animate(a,b,e)}var n={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};n[d]&&(d=n[d]),h.off($.CSS.transitionEnd+"."+g.id);var o=$.CSS.getProp(a),p={};$.extend(p,a),p[$.CSS.sfx+"transition-property"]=o,p[$.CSS.sfx+"transition-duration"]=b+"ms",p[$.CSS.sfx+"transition-delay"]=c+"ms",p[$.CSS.sfx+"transition-timing-function"]=d,setTimeout(function(){h.one($.CSS.transitionEnd+"."+g.id,f),h.css(p)},1),g.timeout=setTimeout(function(){return g.called||!e?(g.called=!1,void(g.CSSAIsRunning=!1)):(h.css($.CSS.sfx+"transition",""),e.apply(g),g.CSSAIsRunning=!1,void("function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)))},b+c+10)}})}},$.fn.CSSAnimate=$.CSS.animate,$.normalizeCss=$.CSS.normalizeCss,$.fn.css3=function(a){return this.each(function(){var b=$(this),c=$.normalizeCss(a);b.css(c)})}}(jQuery);var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,!function(a){/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());var b="ontouchstart"in window||window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture||window.DocumentTouch&&document instanceof DocumentTouch||!1;a.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:b?"touchstart":"mousedown",end:b?"touchend":"mouseup",move:b?"touchmove":"mousemove"},init:function(c){return this.each(function(){var d=this,e=a(d);e.addClass("simpleSlider"),d.opt={},a.extend(d.opt,a.simpleSlider.defaults,c),a.extend(d.opt,e.data());var f="h"==d.opt.orientation?"horizontal":"vertical",g=a("<div/>").addClass("level").addClass(f);e.prepend(g),d.level=g,e.css({cursor:"default"}),"auto"==d.opt.scale&&(d.opt.scale=a(d).outerWidth()),e.updateSliderVal(),d.opt.readonly||(e.on(a.simpleSlider.events.start,function(a){b&&(a=a.changedTouches[0]),d.canSlide=!0,e.updateSliderVal(a),e.css({cursor:"col-resize"}),a.preventDefault(),a.stopPropagation()}),a(document).on(a.simpleSlider.events.move,function(c){b&&(c=c.changedTouches[0]),d.canSlide&&(a(document).css({cursor:"default"}),e.updateSliderVal(c),c.preventDefault(),c.stopPropagation())}).on(a.simpleSlider.events.end,function(){a(document).css({cursor:"auto"}),d.canSlide=!1,e.css({cursor:"auto"})}))})},updateSliderVal:function(b){function c(a,b){return Math.floor(100*a/b)}var d=this,e=d.get(0);e.opt.initialval="number"==typeof e.opt.initialval?e.opt.initialval:e.opt.initialval(e);var f=a(e).outerWidth(),g=a(e).outerHeight();e.x="object"==typeof b?b.clientX+document.body.scrollLeft-d.offset().left:"number"==typeof b?b*f/e.opt.scale:e.opt.initialval*f/e.opt.scale,e.y="object"==typeof b?b.clientY+document.body.scrollTop-d.offset().top:"number"==typeof b?(e.opt.scale-e.opt.initialval-b)*g/e.opt.scale:e.opt.initialval*g/e.opt.scale,e.y=d.outerHeight()-e.y,e.scaleX=e.x*e.opt.scale/f,e.scaleY=e.y*e.opt.scale/g,e.outOfRangeX=e.scaleX>e.opt.scale?e.scaleX-e.opt.scale:e.scaleX<0?e.scaleX:0,e.outOfRangeY=e.scaleY>e.opt.scale?e.scaleY-e.opt.scale:e.scaleY<0?e.scaleY:0,e.outOfRange="h"==e.opt.orientation?e.outOfRangeX:e.outOfRangeY,e.value="undefined"!=typeof b?"h"==e.opt.orientation?e.x>=d.outerWidth()?e.opt.scale:e.x<=0?0:e.scaleX:e.y>=d.outerHeight()?e.opt.scale:e.y<=0?0:e.scaleY:"h"==e.opt.orientation?e.scaleX:e.scaleY,"h"==e.opt.orientation?e.level.width(c(e.x,f)+"%"):e.level.height(c(e.y,g)),"function"==typeof e.opt.callback&&e.opt.callback(e)}},a.fn.simpleSlider=a.simpleSlider.init,a.fn.updateSliderVal=a.simpleSlider.updateSliderVal}(jQuery),!function(a){a.mbCookie={set:function(a,b,c,d){b=JSON.stringify(b),c||(c=7),d=d?"; domain="+d:"";var e,f=new Date;f.setTime(f.getTime()+864e5*c),e="; expires="+f.toGMTString(),document.cookie=a+"="+b+e+"; path=/"+d},get:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return JSON.parse(e.substring(b.length,e.length))}return null},remove:function(b){a.mbCookie.set(b,"",-1)}},a.mbStorage={set:function(a,b){b=JSON.stringify(b),localStorage.setItem(a,b)},get:function(a){return localStorage[a]?JSON.parse(localStorage[a]):null},remove:function(a){a?localStorage.removeItem(a):localStorage.clear()}}}(jQuery);




/*
Easy pie chart is a jquery plugin to display simple animated pie charts for only one value

Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.

Built on top of the jQuery library (http://jquery.com)

@source: http://github.com/rendro/easy-pie-chart/
@autor: Robert Fleischmann
@version: 1.2.5

Inspired by: http://dribbble.com/shots/631074-Simple-Pie-Charts-II?list=popular&offset=210
Thanks to Philip Thrasher for the jquery plugin boilerplate for coffee script
*/

(function(e){e.easyPieChart=function(t,n){var r,i,s,o,u,a,f,l,c=this;this.el=t;this.$el=e(t);this.$el.data("easyPieChart",this);this.init=function(){var t,r;c.options=e.extend({},e.easyPieChart.defaultOptions,n);t=parseInt(c.$el.data("percent"),10);c.percentage=0;c.canvas=e("<canvas width='"+c.options.size+"' height='"+c.options.size+"'></canvas>").get(0);c.$el.append(c.canvas);if(typeof G_vmlCanvasManager!=="undefined"&&G_vmlCanvasManager!==null){G_vmlCanvasManager.initElement(c.canvas)}c.ctx=c.canvas.getContext("2d");if(window.devicePixelRatio>1){r=window.devicePixelRatio;e(c.canvas).css({width:c.options.size,height:c.options.size});c.canvas.width*=r;c.canvas.height*=r;c.ctx.scale(r,r)}c.ctx.translate(c.options.size/2,c.options.size/2);c.ctx.rotate(c.options.rotate*Math.PI/180);c.$el.addClass("easyPieChart");c.$el.css({width:c.options.size,height:c.options.size,lineHeight:""+c.options.size+"px"});c.update(t);return c};this.update=function(e){e=parseFloat(e)||0;if(c.options.animate===false){s(e)}else{if(c.options.delay){i(c.percentage,0);setTimeout(function(){return i(c.percentage,e)},c.options.delay)}else{i(c.percentage,e)}}return c};f=function(){var e,t,n;c.ctx.fillStyle=c.options.scaleColor;c.ctx.lineWidth=1;n=[];for(e=t=0;t<=24;e=++t){n.push(r(e))}return n};r=function(e){var t;t=e%6===0?0:c.options.size*.017;c.ctx.save();c.ctx.rotate(e*Math.PI/12);c.ctx.fillRect(c.options.size/2-t,0,-c.options.size*.05+t,1);c.ctx.restore()};l=function(){var e;e=c.options.size/2-c.options.lineWidth/2;if(c.options.scaleColor!==false){e-=c.options.size*.08}c.ctx.beginPath();c.ctx.arc(0,0,e,0,Math.PI*2,true);c.ctx.closePath();c.ctx.strokeStyle=c.options.trackColor;c.ctx.lineWidth=c.options.lineWidth;c.ctx.stroke()};a=function(){if(c.options.scaleColor!==false){f()}if(c.options.trackColor!==false){l()}};s=function(t){var n;a();c.ctx.strokeStyle=e.isFunction(c.options.barColor)?c.options.barColor(t):c.options.barColor;c.ctx.lineCap=c.options.lineCap;c.ctx.lineWidth=c.options.lineWidth;n=c.options.size/2-c.options.lineWidth/2;if(c.options.scaleColor!==false){n-=c.options.size*.08}c.ctx.save();c.ctx.rotate(-Math.PI/2);c.ctx.beginPath();c.ctx.arc(0,0,n,0,Math.PI*2*t/100,false);c.ctx.stroke();c.ctx.restore()};u=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)}}();i=function(e,t){var n,r;c.options.onStart.call(c);c.percentage=t;Date.now||(Date.now=function(){return+(new Date)});r=Date.now();n=function(){var i,f;f=Math.min(Date.now()-r,c.options.animate);c.ctx.clearRect(-c.options.size/2,-c.options.size/2,c.options.size,c.options.size);a.call(c);i=[o(f,e,t-e,c.options.animate)];c.options.onStep.call(c,i);s.call(c,i);if(f>=c.options.animate){return c.options.onStop.call(c,i,t)}else{return u(n)}};u(n)};o=function(e,t,n,r){var i,s;i=function(e){return Math.pow(e,2)};s=function(e){if(e<1){return i(e)}else{return 2-i(e/2*-2+2)}};e/=r/2;return n/2*s(e)+t};return this.init()};e.easyPieChart.defaultOptions={barColor:"#ef1e25",trackColor:"#f2f2f2",scaleColor:"#dfe0e0",lineCap:"round",rotate:0,size:110,lineWidth:3,animate:false,delay:false,onStart:e.noop,onStop:e.noop,onStep:e.noop};e.fn.easyPieChart=function(t){return e.each(this,function(n,r){var i,s;i=e(r);if(!i.data("easyPieChart")){s=e.extend({},t,i.data());return i.data("easyPieChart",new e.easyPieChart(r,s))}})};return void 0})(jQuery);




/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function(e){e.fn.appear=function(t,n){var r=e.extend({data:undefined,one:true,accX:0,accY:0},n);return this.each(function(){var n=e(this);n.appeared=false;if(!t){n.trigger("appear",r.data);return}var i=e(window);var s=function(){if(!n.is(":visible")){n.appeared=false;return}var e=i.scrollLeft();var t=i.scrollTop();var s=n.offset();var o=s.left;var u=s.top;var a=r.accX;var f=r.accY;var l=n.height();var c=i.height();var h=n.width();var p=i.width();if(u+l+f>=t&&u<=t+c+f&&o+h+a>=e&&o<=e+p+a){if(!n.appeared)n.trigger("appear",r.data)}else{n.appeared=false}};var o=function(){n.appeared=true;if(r.one){i.unbind("scroll",s);var o=e.inArray(s,e.fn.appear.checks);if(o>=0)e.fn.appear.checks.splice(o,1)}t.apply(this,arguments)};if(r.one)n.one("appear",r.data,o);else n.bind("appear",r.data,o);i.scroll(s);e.fn.appear.checks.push(s);s()})};e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var t=e.fn.appear.checks.length;if(t>0)while(t--)e.fn.appear.checks[t]()},run:function(){if(e.fn.appear.timeout)clearTimeout(e.fn.appear.timeout);e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}});e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(t,n){var r=e.fn[n];if(r){e.fn[n]=function(){var t=r.apply(this,arguments);e.fn.appear.run();return t}}})})(jQuery);



/*!
 * animsition v3.5.2
 * http://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
!function(a){"use strict";var b="animsition",c={init:function(d){d=a.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",loadingHtml:'<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>',unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"},d);var e=c.supportCheck.call(this,d);if(!e)return"console"in window||(window.console={},window.console.log=function(a){return a}),console.log("Animsition does not support this browser."),c.destroy.call(this);var f=c.optionCheck.call(this,d);return f&&c.addOverlay.call(this,d),d.loading&&c.addLoading.call(this,d),this.each(function(){var e=this,f=a(this),g=a(window),h=f.data(b);h||(d=a.extend({},d),f.data(b,{options:d}),g.on("load."+b+" pageshow."+b,function(){c.pageIn.call(e)}),g.on("unload."+b,function(){}),a(d.linkElement).on("click."+b,function(b){b.preventDefault();var d=a(this),f=d.attr("href");2===b.which||b.metaKey||b.shiftKey||-1!==navigator.platform.toUpperCase().indexOf("WIN")&&b.ctrlKey?window.open(f,"_blank"):c.pageOut.call(e,d,f)}))})},addOverlay:function(b){a(b.overlayParentElement).prepend('<div class="'+b.overlayClass+'"></div>')},addLoading:function(b){a(b.loadingParentElement).append('<div class="'+b.loadingClass+'">'+b.loadingHtml+'</div>')},removeLoading:function(){var c=a(this),d=c.data(b).options,e=a(d.loadingParentElement).children("."+d.loadingClass);e.fadeOut().remove()},supportCheck:function(b){var c=a(this),d=b.unSupportCss,e=d.length,f=!1;0===e&&(f=!0);for(var g=0;e>g;g++)if("string"==typeof c.css(d[g])){f=!0;break}return f},optionCheck:function(b){var c,d=a(this);return c=b.overlay||d.data("animsition-overlay")?!0:!1},animationCheck:function(c,d,e){var f=a(this),g=f.data(b).options,h=typeof c,i=!d&&"number"===h,j=d&&"string"===h&&c.length>0;return i||j?c=c:d&&e?c=g.inClass:!d&&e?c=g.inDuration:d&&!e?c=g.outClass:d||e||(c=g.outDuration),c},pageIn:function(){var d=this,e=a(this),f=e.data(b).options,g=e.data("animsition-in-duration"),h=e.data("animsition-in"),i=c.animationCheck.call(d,g,!1,!0),j=c.animationCheck.call(d,h,!0,!0),k=c.optionCheck.call(d,f);f.loading&&c.removeLoading.call(d),k?c.pageInOverlay.call(d,j,i):c.pageInBasic.call(d,j,i)},pageInBasic:function(b,c){var d=a(this);d.trigger("animsition.start").css({"animation-duration":c/1e3+"s"}).addClass(b).animateCallback(function(){d.removeClass(b).css({opacity:1}).trigger("animsition.end")})},pageInOverlay:function(c,d){var e=a(this),f=e.data(b).options;e.trigger("animsition.start").css({opacity:1}),a(f.overlayParentElement).children("."+f.overlayClass).css({"animation-duration":d/1e3+"s"}).addClass(c).animateCallback(function(){e.trigger("animsition.end")})},pageOut:function(d,e){var f=this,g=a(this),h=g.data(b).options,i=d.data("animsition-out"),j=g.data("animsition-out"),k=d.data("animsition-out-duration"),l=g.data("animsition-out-duration"),m=i?i:j,n=k?k:l,o=c.animationCheck.call(f,m,!0,!1),p=c.animationCheck.call(f,n,!1,!1),q=c.optionCheck.call(f,h);q?c.pageOutOverlay.call(f,o,p,e):c.pageOutBasic.call(f,o,p,e)},pageOutBasic:function(b,c,d){var e=a(this);e.css({"animation-duration":c/1e3+"s"}).addClass(b).animateCallback(function(){location.href=d})},pageOutOverlay:function(d,e,f){var g=this,h=a(this),i=h.data(b).options,j=h.data("animsition-in"),k=c.animationCheck.call(g,j,!0,!0);a(i.overlayParentElement).children("."+i.overlayClass).css({"animation-duration":e/1e3+"s"}).removeClass(k).addClass(d).animateCallback(function(){location.href=f})},destroy:function(){return this.each(function(){var c=a(this);a(window).unbind("."+b),c.css({opacity:1}).removeData(b)})}};a.fn.animateCallback=function(b){var c="animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";return this.each(function(){a(this).bind(c,function(){return a(this).unbind(c),b.call(this)})})},a.fn.animsition=function(d){return c[d]?c[d].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof d&&d?void a.error("Method "+d+" does not exist on jQuery."+b):c.init.apply(this,arguments)}}(jQuery);





/*! Stellar.js v0.6.2 | Copyright 2013, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
(function(e,t,n,r){function d(t,n){this.element=t,this.options=e.extend({},s,n),this._defaults=s,this._name=i,this.init()}var i="stellar",s={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(e){e.hide()},showElement:function(e){e.show()}},o={scroll:{getLeft:function(e){return e.scrollLeft()},setLeft:function(e,t){e.scrollLeft(t)},getTop:function(e){return e.scrollTop()},setTop:function(e,t){e.scrollTop(t)}},position:{getLeft:function(e){return parseInt(e.css("left"),10)*-1},getTop:function(e){return parseInt(e.css("top"),10)*-1}},margin:{getLeft:function(e){return parseInt(e.css("margin-left"),10)*-1},getTop:function(e){return parseInt(e.css("margin-top"),10)*-1}},transform:{getLeft:function(e){var t=getComputedStyle(e[0])[f];return t!=="none"?parseInt(t.match(/(-?[0-9]+)/g)[4],10)*-1:0},getTop:function(e){var t=getComputedStyle(e[0])[f];return t!=="none"?parseInt(t.match(/(-?[0-9]+)/g)[5],10)*-1:0}}},u={position:{setLeft:function(e,t){e.css("left",t)},setTop:function(e,t){e.css("top",t)}},transform:{setPosition:function(e,t,n,r,i){e[0].style[f]="translate3d("+(t-n)+"px, "+(r-i)+"px, 0)"}}},a=function(){var t=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,n=e("script")[0].style,r="",i;for(i in n)if(t.test(i)){r=i.match(t)[0];break}return"WebkitOpacity"in n&&(r="Webkit"),"KhtmlOpacity"in n&&(r="Khtml"),function(e){return r+(r.length>0?e.charAt(0).toUpperCase()+e.slice(1):e)}}(),f=a("transform"),l=e("<div />",{style:"background:#fff"}).css("background-position-x")!==r,c=l?function(e,t,n){e.css({"background-position-x":t,"background-position-y":n})}:function(e,t,n){e.css("background-position",t+" "+n)},h=l?function(e){return[e.css("background-position-x"),e.css("background-position-y")]}:function(e){return e.css("background-position").split(" ")},p=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};d.prototype={init:function(){this.options.name=i+"_"+Math.floor(Math.random()*1e9),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),this.options.scrollProperty==="scroll"?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===n.body&&(this.element=t),this.$scrollElement=e(this.element),this.$element=this.element===t?e("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==r?e(this.options.viewportElement):this.$scrollElement[0]===t||this.options.scrollProperty==="scroll"?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var e=this,t=o[e.options.scrollProperty];this._getScrollLeft=function(){return t.getLeft(e.$scrollElement)},this._getScrollTop=function(){return t.getTop(e.$scrollElement)}},_defineSetters:function(){var t=this,n=o[t.options.scrollProperty],r=u[t.options.positionProperty],i=n.setLeft,s=n.setTop;this._setScrollLeft=typeof i=="function"?function(e){i(t.$scrollElement,e)}:e.noop,this._setScrollTop=typeof s=="function"?function(e){s(t.$scrollElement,e)}:e.noop,this._setPosition=r.setPosition||function(e,n,i,s,o){t.options.horizontalScrolling&&r.setLeft(e,n,i),t.options.verticalScrolling&&r.setTop(e,s,o)}},_handleWindowLoadAndResize:function(){var n=this,r=e(t);n.options.responsive&&r.bind("load."+this.name,function(){n.refresh()}),r.bind("resize."+this.name,function(){n._detectViewport(),n.options.responsive&&n.refresh()})},refresh:function(n){var r=this,i=r._getScrollLeft(),s=r._getScrollTop();(!n||!n.firstLoad)&&this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),n&&n.firstLoad&&/WebKit/.test(navigator.userAgent)&&e(t).load(function(){var e=r._getScrollLeft(),t=r._getScrollTop();r._setScrollLeft(e+1),r._setScrollTop(t+1),r._setScrollLeft(e),r._setScrollTop(t)}),this._setScrollLeft(i),this._setScrollTop(s)},_detectViewport:function(){var e=this.$viewportElement.offset(),t=e!==null&&e!==r;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=t?e.top:0,this.viewportOffsetLeft=t?e.left:0},_findParticles:function(){var t=this,n=this._getScrollLeft(),i=this._getScrollTop();if(this.particles!==r)for(var s=this.particles.length-1;s>=0;s--)this.particles[s].$element.data("stellar-elementIsActive",r);this.particles=[];if(!this.options.parallaxElements)return;this.$element.find("[data-stellar-ratio]").each(function(n){var i=e(this),s,o,u,a,f,l,c,h,p,d=0,v=0,m=0,g=0;if(!i.data("stellar-elementIsActive"))i.data("stellar-elementIsActive",this);else if(i.data("stellar-elementIsActive")!==this)return;t.options.showElement(i),i.data("stellar-startingLeft")?(i.css("left",i.data("stellar-startingLeft")),i.css("top",i.data("stellar-startingTop"))):(i.data("stellar-startingLeft",i.css("left")),i.data("stellar-startingTop",i.css("top"))),u=i.position().left,a=i.position().top,f=i.css("margin-left")==="auto"?0:parseInt(i.css("margin-left"),10),l=i.css("margin-top")==="auto"?0:parseInt(i.css("margin-top"),10),h=i.offset().left-f,p=i.offset().top-l,i.parents().each(function(){var t=e(this);if(t.data("stellar-offset-parent")===!0)return d=m,v=g,c=t,!1;m+=t.position().left,g+=t.position().top}),s=i.data("stellar-horizontal-offset")!==r?i.data("stellar-horizontal-offset"):c!==r&&c.data("stellar-horizontal-offset")!==r?c.data("stellar-horizontal-offset"):t.horizontalOffset,o=i.data("stellar-vertical-offset")!==r?i.data("stellar-vertical-offset"):c!==r&&c.data("stellar-vertical-offset")!==r?c.data("stellar-vertical-offset"):t.verticalOffset,t.particles.push({$element:i,$offsetParent:c,isFixed:i.css("position")==="fixed",horizontalOffset:s,verticalOffset:o,startingPositionLeft:u,startingPositionTop:a,startingOffsetLeft:h,startingOffsetTop:p,parentOffsetLeft:d,parentOffsetTop:v,stellarRatio:i.data("stellar-ratio")!==r?i.data("stellar-ratio"):1,width:i.outerWidth(!0),height:i.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var t=this,n=this._getScrollLeft(),i=this._getScrollTop(),s;this.backgrounds=[];if(!this.options.parallaxBackgrounds)return;s=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(s=s.add(this.$element)),s.each(function(){var s=e(this),o=h(s),u,a,f,l,p,d,v,m,g,y=0,b=0,w=0,E=0;if(!s.data("stellar-backgroundIsActive"))s.data("stellar-backgroundIsActive",this);else if(s.data("stellar-backgroundIsActive")!==this)return;s.data("stellar-backgroundStartingLeft")?c(s,s.data("stellar-backgroundStartingLeft"),s.data("stellar-backgroundStartingTop")):(s.data("stellar-backgroundStartingLeft",o[0]),s.data("stellar-backgroundStartingTop",o[1])),p=s.css("margin-left")==="auto"?0:parseInt(s.css("margin-left"),10),d=s.css("margin-top")==="auto"?0:parseInt(s.css("margin-top"),10),v=s.offset().left-p-n,m=s.offset().top-d-i,s.parents().each(function(){var t=e(this);if(t.data("stellar-offset-parent")===!0)return y=w,b=E,g=t,!1;w+=t.position().left,E+=t.position().top}),u=s.data("stellar-horizontal-offset")!==r?s.data("stellar-horizontal-offset"):g!==r&&g.data("stellar-horizontal-offset")!==r?g.data("stellar-horizontal-offset"):t.horizontalOffset,a=s.data("stellar-vertical-offset")!==r?s.data("stellar-vertical-offset"):g!==r&&g.data("stellar-vertical-offset")!==r?g.data("stellar-vertical-offset"):t.verticalOffset,t.backgrounds.push({$element:s,$offsetParent:g,isFixed:s.css("background-attachment")==="fixed",horizontalOffset:u,verticalOffset:a,startingValueLeft:o[0],startingValueTop:o[1],startingBackgroundPositionLeft:isNaN(parseInt(o[0],10))?0:parseInt(o[0],10),startingBackgroundPositionTop:isNaN(parseInt(o[1],10))?0:parseInt(o[1],10),startingPositionLeft:s.position().left,startingPositionTop:s.position().top,startingOffsetLeft:v,startingOffsetTop:m,parentOffsetLeft:y,parentOffsetTop:b,stellarRatio:s.data("stellar-background-ratio")===r?1:s.data("stellar-background-ratio")})})},_reset:function(){var e,t,n,r,i;for(i=this.particles.length-1;i>=0;i--)e=this.particles[i],t=e.$element.data("stellar-startingLeft"),n=e.$element.data("stellar-startingTop"),this._setPosition(e.$element,t,t,n,n),this.options.showElement(e.$element),e.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(i=this.backgrounds.length-1;i>=0;i--)r=this.backgrounds[i],r.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),c(r.$element,r.startingValueLeft,r.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=e.noop,e(t).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var n=this,r=e(t);r.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),typeof this.options.horizontalOffset=="function"?(this.horizontalOffset=this.options.horizontalOffset(),r.bind("resize.horizontal-"+this.name,function(){n.horizontalOffset=n.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,typeof this.options.verticalOffset=="function"?(this.verticalOffset=this.options.verticalOffset(),r.bind("resize.vertical-"+this.name,function(){n.verticalOffset=n.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var e=this._getScrollLeft(),t=this._getScrollTop(),n,r,i,s,o,u,a,f=!0,l=!0,h,p,d,v,m;if(this.currentScrollLeft===e&&this.currentScrollTop===t&&this.currentWidth===this.viewportWidth&&this.currentHeight===this.viewportHeight)return;this.currentScrollLeft=e,this.currentScrollTop=t,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight;for(m=this.particles.length-1;m>=0;m--)i=this.particles[m],s=i.isFixed?1:0,this.options.horizontalScrolling?(h=(e+i.horizontalOffset+this.viewportOffsetLeft+i.startingPositionLeft-i.startingOffsetLeft+i.parentOffsetLeft)*-(i.stellarRatio+s-1)+i.startingPositionLeft,d=h-i.startingPositionLeft+i.startingOffsetLeft):(h=i.startingPositionLeft,d=i.startingOffsetLeft),this.options.verticalScrolling?(p=(t+i.verticalOffset+this.viewportOffsetTop+i.startingPositionTop-i.startingOffsetTop+i.parentOffsetTop)*-(i.stellarRatio+s-1)+i.startingPositionTop,v=p-i.startingPositionTop+i.startingOffsetTop):(p=i.startingPositionTop,v=i.startingOffsetTop),this.options.hideDistantElements&&(l=!this.options.horizontalScrolling||d+i.width>(i.isFixed?0:e)&&d<(i.isFixed?0:e)+this.viewportWidth+this.viewportOffsetLeft,f=!this.options.verticalScrolling||v+i.height>(i.isFixed?0:t)&&v<(i.isFixed?0:t)+this.viewportHeight+this.viewportOffsetTop),l&&f?(i.isHidden&&(this.options.showElement(i.$element),i.isHidden=!1),this._setPosition(i.$element,h,i.startingPositionLeft,p,i.startingPositionTop)):i.isHidden||(this.options.hideElement(i.$element),i.isHidden=!0);for(m=this.backgrounds.length-1;m>=0;m--)o=this.backgrounds[m],s=o.isFixed?0:1,u=this.options.horizontalScrolling?(e+o.horizontalOffset-this.viewportOffsetLeft-o.startingOffsetLeft+o.parentOffsetLeft-o.startingBackgroundPositionLeft)*(s-o.stellarRatio)+"px":o.startingValueLeft,a=this.options.verticalScrolling?(t+o.verticalOffset-this.viewportOffsetTop-o.startingOffsetTop+o.parentOffsetTop-o.startingBackgroundPositionTop)*(s-o.stellarRatio)+"px":o.startingValueTop,c(o.$element,u,a)},_handleScrollEvent:function(){var e=this,t=!1,n=function(){e._repositionElements(),t=!1},r=function(){t||(p(n),t=!0)};this.$scrollElement.bind("scroll."+this.name,r),r()},_startAnimationLoop:function(){var e=this;this._animationLoop=function(){p(e._animationLoop),e._repositionElements()},this._animationLoop()}},e.fn[i]=function(t){var n=arguments;if(t===r||typeof t=="object")return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new d(this,t))});if(typeof t=="string"&&t[0]!=="_"&&t!=="init")return this.each(function(){var r=e.data(this,"plugin_"+i);r instanceof d&&typeof r[t]=="function"&&r[t].apply(r,Array.prototype.slice.call(n,1)),t==="destroy"&&e.data(this,"plugin_"+i,null)})},e[i]=function(n){var r=e(t);return r.stellar.apply(r,Array.prototype.slice.call(arguments,0))},e[i].scrollProperty=o,e[i].positionProperty=u,t.Stellar=d})(jQuery,this,document);




/** Abstract base class for collection plugins.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. */
(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a)};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);


/* http://keith-wood.name/countdown.html
   Countdown for jQuery v2.0.0.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license.
   Please attribute the author if you use it. */
(function($){var w='countdown';var Y=0;var O=1;var W=2;var D=3;var H=4;var M=5;var S=6;$.JQPlugin.createPlugin({name:w,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:'dHMS',layout:'',compact:false,padZeroes:false,significant:0,description:'',expiryUrl:'',expiryText:'',alwaysExpire:false,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{'':{labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false}},_getters:['getTimes'],_rtlClass:w+'-rtl',_sectionClass:w+'-section',_amountClass:w+'-amount',_periodClass:w+'-period',_rowClass:w+'-row',_holdingClass:w+'-holding',_showClass:w+'-show',_descrClass:w+'-descr',_timerElems:[],_init:function(){var c=this;this._super();this._serverSyncs=[];var d=(typeof Date.now=='function'?Date.now:function(){return new Date().getTime()});var e=(window.performance&&typeof window.performance.now=='function');function timerCallBack(a){var b=(a<1e12?(e?(performance.now()+performance.timing.navigationStart):d()):a||d());if(b-g>=1000){c._updateElems();g=b}f(timerCallBack)}var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;var g=0;if(!f||$.noRequestAnimationFrame){$.noRequestAnimationFrame=null;setInterval(function(){c._updateElems()},980)}else{g=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||d();f(timerCallBack)}},UTCDate:function(a,b,c,e,f,g,h,i){if(typeof b=='object'&&b.constructor==Date){i=b.getMilliseconds();h=b.getSeconds();g=b.getMinutes();f=b.getHours();e=b.getDate();c=b.getMonth();b=b.getFullYear()}var d=new Date();d.setUTCFullYear(b);d.setUTCDate(1);d.setUTCMonth(c||0);d.setUTCDate(e||1);d.setUTCHours(f||0);d.setUTCMinutes((g||0)-(Math.abs(a)<30?a*60:a));d.setUTCSeconds(h||0);d.setUTCMilliseconds(i||0);return d},periodsToSeconds:function(a){return a[0]*31557600+a[1]*2629800+a[2]*604800+a[3]*86400+a[4]*3600+a[5]*60+a[6]},_instSettings:function(a,b){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(a){if(!this._hasElem(a)){this._timerElems.push(a)}},_hasElem:function(a){return($.inArray(a,this._timerElems)>-1)},_removeElem:function(b){this._timerElems=$.map(this._timerElems,function(a){return(a==b?null:a)})},_updateElems:function(){for(var i=this._timerElems.length-1;i>=0;i--){this._updateCountdown(this._timerElems[i])}},_optionsChanged:function(a,b,c){if(c.layout){c.layout=c.layout.replace(/&lt;/g,'<').replace(/&gt;/g,'>')}this._resetExtraLabels(b.options,c);var d=(b.options.timezone!=c.timezone);$.extend(b.options,c);this._adjustSettings(a,b,c.until!=null||c.since!=null||d);var e=new Date();if((b._since&&b._since<e)||(b._until&&b._until>e)){this._addElem(a[0])}this._updateCountdown(a,b)},_updateCountdown:function(a,b){a=a.jquery?a:$(a);b=b||a.data(this.name);if(!b){return}a.html(this._generateHTML(b)).toggleClass(this._rtlClass,b.options.isRTL);if($.isFunction(b.options.onTick)){var c=b._hold!='lap'?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date());if(b.options.tickInterval==1||this.periodsToSeconds(c)%b.options.tickInterval==0){b.options.onTick.apply(a[0],[c])}}var d=b._hold!='pause'&&(b._since?b._now.getTime()<b._since.getTime():b._now.getTime()>=b._until.getTime());if(d&&!b._expiring){b._expiring=true;if(this._hasElem(a[0])||b.options.alwaysExpire){this._removeElem(a[0]);if($.isFunction(b.options.onExpiry)){b.options.onExpiry.apply(a[0],[])}if(b.options.expiryText){var e=b.options.layout;b.options.layout=b.options.expiryText;this._updateCountdown(a[0],b);b.options.layout=e}if(b.options.expiryUrl){window.location=b.options.expiryUrl}}b._expiring=false}else if(b._hold=='pause'){this._removeElem(a[0])}},_resetExtraLabels:function(a,b){var c=false;for(var n in b){if(n!='whichLabels'&&n.match(/[Ll]abels/)){c=true;break}}if(c){for(var n in a){if(n.match(/[Ll]abels[02-9]|compactLabels1/)){a[n]=null}}}},_adjustSettings:function(a,b,c){var d;var e=0;var f=null;for(var i=0;i<this._serverSyncs.length;i++){if(this._serverSyncs[i][0]==b.options.serverSync){f=this._serverSyncs[i][1];break}}if(f!=null){e=(b.options.serverSync?f:0);d=new Date()}else{var g=($.isFunction(b.options.serverSync)?b.options.serverSync.apply(a[0],[]):null);d=new Date();e=(g?d.getTime()-g.getTime():0);this._serverSyncs.push([b.options.serverSync,e])}var h=b.options.timezone;h=(h==null?-d.getTimezoneOffset():h);if(c||(!c&&b._until==null&&b._since==null)){b._since=b.options.since;if(b._since!=null){b._since=this.UTCDate(h,this._determineTime(b._since,null));if(b._since&&e){b._since.setMilliseconds(b._since.getMilliseconds()+e)}}b._until=this.UTCDate(h,this._determineTime(b.options.until,d));if(e){b._until.setMilliseconds(b._until.getMilliseconds()+e)}}b._show=this._determineShow(b)},_preDestroy:function(a,b){this._removeElem(a[0]);a.empty()},pause:function(a){this._hold(a,'pause')},lap:function(a){this._hold(a,'lap')},resume:function(a){this._hold(a,null)},toggle:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'pause':'resume'](a)},toggleLap:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'lap':'resume'](a)},_hold:function(a,b){var c=$.data(a,this.name);if(c){if(c._hold=='pause'&&!b){c._periods=c._savePeriods;var d=(c._since?'-':'+');c[c._since?'_since':'_until']=this._determineTime(d+c._periods[0]+'y'+d+c._periods[1]+'o'+d+c._periods[2]+'w'+d+c._periods[3]+'d'+d+c._periods[4]+'h'+d+c._periods[5]+'m'+d+c._periods[6]+'s');this._addElem(a)}c._hold=b;c._savePeriods=(b=='pause'?c._periods:null);$.data(a,this.name,c);this._updateCountdown(a,c)}},getTimes:function(a){var b=$.data(a,this.name);return(!b?null:(b._hold=='pause'?b._savePeriods:(!b._hold?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date()))))},_determineTime:function(k,l){var m=this;var n=function(a){var b=new Date();b.setTime(b.getTime()+a*1000);return b};var o=function(a){a=a.toLowerCase();var b=new Date();var c=b.getFullYear();var d=b.getMonth();var e=b.getDate();var f=b.getHours();var g=b.getMinutes();var h=b.getSeconds();var i=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;var j=i.exec(a);while(j){switch(j[2]||'s'){case's':h+=parseInt(j[1],10);break;case'm':g+=parseInt(j[1],10);break;case'h':f+=parseInt(j[1],10);break;case'd':e+=parseInt(j[1],10);break;case'w':e+=parseInt(j[1],10)*7;break;case'o':d+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break;case'y':c+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break}j=i.exec(a)}return new Date(c,d,e,f,g,h,0)};var p=(k==null?l:(typeof k=='string'?o(k):(typeof k=='number'?n(k):k)));if(p)p.setMilliseconds(0);return p},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(c){var d=this;c._periods=(c._hold?c._periods:this._calculatePeriods(c,c._show,c.options.significant,new Date()));var e=false;var f=0;var g=c.options.significant;var h=$.extend({},c._show);for(var i=Y;i<=S;i++){e|=(c._show[i]=='?'&&c._periods[i]>0);h[i]=(c._show[i]=='?'&&!e?null:c._show[i]);f+=(h[i]?1:0);g-=(c._periods[i]>0?1:0)}var j=[false,false,false,false,false,false,false];for(var i=S;i>=Y;i--){if(c._show[i]){if(c._periods[i]){j[i]=true}else{j[i]=g>0;g--}}}var k=(c.options.compact?c.options.compactLabels:c.options.labels);var l=c.options.whichLabels||this._normalLabels;var m=function(a){var b=c.options['compactLabels'+l(c._periods[a])];return(h[a]?d._translateDigits(c,c._periods[a])+(b?b[a]:k[a])+' ':'')};var n=(c.options.padZeroes?2:1);var o=function(a){var b=c.options['labels'+l(c._periods[a])];return((!c.options.significant&&h[a])||(c.options.significant&&j[a])?'<span class="'+d._sectionClass+'">'+'<span class="'+d._amountClass+'">'+d._minDigits(c,c._periods[a],n)+'</span>'+'<span class="'+d._periodClass+'">'+(b?b[a]:k[a])+'</span></span>':'')};return(c.options.layout?this._buildLayout(c,h,c.options.layout,c.options.compact,c.options.significant,j):((c.options.compact?'<span class="'+this._rowClass+' '+this._amountClass+(c._hold?' '+this._holdingClass:'')+'">'+m(Y)+m(O)+m(W)+m(D)+(h[H]?this._minDigits(c,c._periods[H],2):'')+(h[M]?(h[H]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[M],2):'')+(h[S]?(h[H]||h[M]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[S],2):''):'<span class="'+this._rowClass+' '+this._showClass+(c.options.significant||f)+(c._hold?' '+this._holdingClass:'')+'">'+o(Y)+o(O)+o(W)+o(D)+o(H)+o(M)+o(S))+'</span>'+(c.options.description?'<span class="'+this._rowClass+' '+this._descrClass+'">'+c.options.description+'</span>':'')))},_buildLayout:function(c,d,e,f,g,h){var j=c.options[f?'compactLabels':'labels'];var k=c.options.whichLabels||this._normalLabels;var l=function(a){return(c.options[(f?'compactLabels':'labels')+k(c._periods[a])]||j)[a]};var m=function(a,b){return c.options.digits[Math.floor(a/b)%10]};var o={desc:c.options.description,sep:c.options.timeSeparator,yl:l(Y),yn:this._minDigits(c,c._periods[Y],1),ynn:this._minDigits(c,c._periods[Y],2),ynnn:this._minDigits(c,c._periods[Y],3),y1:m(c._periods[Y],1),y10:m(c._periods[Y],10),y100:m(c._periods[Y],100),y1000:m(c._periods[Y],1000),ol:l(O),on:this._minDigits(c,c._periods[O],1),onn:this._minDigits(c,c._periods[O],2),onnn:this._minDigits(c,c._periods[O],3),o1:m(c._periods[O],1),o10:m(c._periods[O],10),o100:m(c._periods[O],100),o1000:m(c._periods[O],1000),wl:l(W),wn:this._minDigits(c,c._periods[W],1),wnn:this._minDigits(c,c._periods[W],2),wnnn:this._minDigits(c,c._periods[W],3),w1:m(c._periods[W],1),w10:m(c._periods[W],10),w100:m(c._periods[W],100),w1000:m(c._periods[W],1000),dl:l(D),dn:this._minDigits(c,c._periods[D],1),dnn:this._minDigits(c,c._periods[D],2),dnnn:this._minDigits(c,c._periods[D],3),d1:m(c._periods[D],1),d10:m(c._periods[D],10),d100:m(c._periods[D],100),d1000:m(c._periods[D],1000),hl:l(H),hn:this._minDigits(c,c._periods[H],1),hnn:this._minDigits(c,c._periods[H],2),hnnn:this._minDigits(c,c._periods[H],3),h1:m(c._periods[H],1),h10:m(c._periods[H],10),h100:m(c._periods[H],100),h1000:m(c._periods[H],1000),ml:l(M),mn:this._minDigits(c,c._periods[M],1),mnn:this._minDigits(c,c._periods[M],2),mnnn:this._minDigits(c,c._periods[M],3),m1:m(c._periods[M],1),m10:m(c._periods[M],10),m100:m(c._periods[M],100),m1000:m(c._periods[M],1000),sl:l(S),sn:this._minDigits(c,c._periods[S],1),snn:this._minDigits(c,c._periods[S],2),snnn:this._minDigits(c,c._periods[S],3),s1:m(c._periods[S],1),s10:m(c._periods[S],10),s100:m(c._periods[S],100),s1000:m(c._periods[S],1000)};var p=e;for(var i=Y;i<=S;i++){var q='yowdhms'.charAt(i);var r=new RegExp('\\{'+q+'<\\}([\\s\\S]*)\\{'+q+'>\\}','g');p=p.replace(r,((!g&&d[i])||(g&&h[i])?'$1':''))}$.each(o,function(n,v){var a=new RegExp('\\{'+n+'\\}','g');p=p.replace(a,v)});return p},_minDigits:function(a,b,c){b=''+b;if(b.length>=c){return this._translateDigits(a,b)}b='0000000000'+b;return this._translateDigits(a,b.substr(b.length-c))},_translateDigits:function(b,c){return(''+c).replace(/[0-9]/g,function(a){return b.options.digits[a]})},_determineShow:function(a){var b=a.options.format;var c=[];c[Y]=(b.match('y')?'?':(b.match('Y')?'!':null));c[O]=(b.match('o')?'?':(b.match('O')?'!':null));c[W]=(b.match('w')?'?':(b.match('W')?'!':null));c[D]=(b.match('d')?'?':(b.match('D')?'!':null));c[H]=(b.match('h')?'?':(b.match('H')?'!':null));c[M]=(b.match('m')?'?':(b.match('M')?'!':null));c[S]=(b.match('s')?'?':(b.match('S')?'!':null));return c},_calculatePeriods:function(c,d,e,f){c._now=f;c._now.setMilliseconds(0);var g=new Date(c._now.getTime());if(c._since){if(f.getTime()<c._since.getTime()){c._now=f=g}else{f=c._since}}else{g.setTime(c._until.getTime());if(f.getTime()>c._until.getTime()){c._now=f=g}}var h=[0,0,0,0,0,0,0];if(d[Y]||d[O]){var i=this._getDaysInMonth(f.getFullYear(),f.getMonth());var j=this._getDaysInMonth(g.getFullYear(),g.getMonth());var k=(g.getDate()==f.getDate()||(g.getDate()>=Math.min(i,j)&&f.getDate()>=Math.min(i,j)));var l=function(a){return(a.getHours()*60+a.getMinutes())*60+a.getSeconds()};var m=Math.max(0,(g.getFullYear()-f.getFullYear())*12+g.getMonth()-f.getMonth()+((g.getDate()<f.getDate()&&!k)||(k&&l(g)<l(f))?-1:0));h[Y]=(d[Y]?Math.floor(m/12):0);h[O]=(d[O]?m-h[Y]*12:0);f=new Date(f.getTime());var n=(f.getDate()==i);var o=this._getDaysInMonth(f.getFullYear()+h[Y],f.getMonth()+h[O]);if(f.getDate()>o){f.setDate(o)}f.setFullYear(f.getFullYear()+h[Y]);f.setMonth(f.getMonth()+h[O]);if(n){f.setDate(o)}}var p=Math.floor((g.getTime()-f.getTime())/1000);var q=function(a,b){h[a]=(d[a]?Math.floor(p/b):0);p-=h[a]*b};q(W,604800);q(D,86400);q(H,3600);q(M,60);q(S,1);if(p>0&&!c._since){var r=[1,12,4.3482,7,24,60,60];var s=S;var t=1;for(var u=S;u>=Y;u--){if(d[u]){if(h[s]>=t){h[s]=0;p=1}if(p>0){h[u]++;p=0;s=u;t=1}}t*=r[u]}}if(e){for(var u=Y;u<=S;u++){if(e&&h[u]){e--}else if(!e){h[u]=0}}}return h}})})(jQuery);



/* https://github.com/mhuggins/jquery-countTo
   CountTo */
(function(e){function t(e,t){return e.toFixed(t.decimals)}e.fn.countTo=function(t){t=t||{};return e(this).each(function(){function l(){a+=i;u++;c(a);if(typeof n.onUpdate=="function"){n.onUpdate.call(s,a)}if(u>=r){o.removeData("countTo");clearInterval(f.interval);a=n.to;if(typeof n.onComplete=="function"){n.onComplete.call(s,a)}}}function c(e){var t=n.formatter.call(s,e,n);o.text(t)}var n=e.extend({},e.fn.countTo.defaults,{from:e(this).data("from"),to:e(this).data("to"),speed:e(this).data("speed"),refreshInterval:e(this).data("refresh-interval"),decimals:e(this).data("decimals")},t);var r=Math.ceil(n.speed/n.refreshInterval),i=(n.to-n.from)/r;var s=this,o=e(this),u=0,a=n.from,f=o.data("countTo")||{};o.data("countTo",f);if(f.interval){clearInterval(f.interval)}f.interval=setInterval(l,n.refreshInterval);c(a)})};e.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:t,onUpdate:null,onComplete:null}})(jQuery);




/* Own Carousel 2.0.0.beta.2.4 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);




/*! Morphext - v2.3.2 - 2014-10-10 */
!function(a){"use strict";function b(b,c){this.element=a(b),this.settings=a.extend({},d,c),this._defaults=d,this._init()}var c="Morphext",d={animation:"bounceIn",separator:",",speed:2e3,complete:a.noop};b.prototype={_init:function(){var b=this;this.phrases=[],a.each(this.element.text().split(this.settings.separator),function(a,c){b.phrases.push(c.trim())}),this.index=-1,this.animate(),this.start()},animate:function(){this.index+1===this.phrases.length&&(this.index=-1),++this.index,this.element[0].innerHTML='<span class="animated '+this.settings.animation+'">'+this.phrases[this.index]+"</span>",a.isFunction(this.settings.complete)&&this.settings.complete.call(this)},start:function(){var a=this;this._interval=setInterval(function(){a.animate()},this.settings.speed)},stop:function(){this._interval=clearInterval(this._interval)}},a.fn[c]=function(d){return this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(this,d))})}}(jQuery);




/*!
 * Isotope PACKAGED v2.2.0
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["../../../../../../../Users/benjamintanz/Dropbox/11_Property_static/WEB & WP Themes/Canvas/HTML/js/jquery"],i):"object"==typeof exports?i(require("jquery")):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(window),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){}function o(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function n(i){function n(){if(!d){d=!0;var o=t.getComputedStyle;if(p=function(){var t=o?function(t){return o(t,null)}:function(t){return t.currentStyle};return function(e){var i=t(e);return i||r("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? "+"See http://bit.ly/getsizebug1"),i}}(),h=i("boxSizing")){var n=document.createElement("div");n.style.width="200px",n.style.padding="1px 2px 3px 4px",n.style.borderStyle="solid",n.style.borderWidth="1px 2px 3px 4px",n.style[h]="border-box";var s=document.body||document.documentElement;s.appendChild(n);var a=p(n);f=200===e(a.width),s.removeChild(n)}}}function a(t){if(n(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=p(t);if("none"===i.display)return o();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var a=r.isBorderBox=!(!h||!i[h]||"border-box"!==i[h]),d=0,l=s.length;l>d;d++){var c=s[d],m=i[c];m=u(t,m);var y=parseFloat(m);r[c]=isNaN(y)?0:y}var g=r.paddingLeft+r.paddingRight,v=r.paddingTop+r.paddingBottom,_=r.marginLeft+r.marginRight,I=r.marginTop+r.marginBottom,z=r.borderLeftWidth+r.borderRightWidth,L=r.borderTopWidth+r.borderBottomWidth,x=a&&f,E=e(i.width);E!==!1&&(r.width=E+(x?0:g+z));var b=e(i.height);return b!==!1&&(r.height=b+(x?0:v+L)),r.innerWidth=r.width-(g+z),r.innerHeight=r.height-(v+L),r.outerWidth=r.width+_,r.outerHeight=r.height+I,r}}function u(e,i){if(t.getComputedStyle||-1===i.indexOf("%"))return i;var o=e.style,n=o.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),o.left=i,i=o.pixelLeft,o.left=n,s&&(r.left=s),i}var p,h,f,d=!1;return a}var r="undefined"==typeof console?i:function(t){console.error(t)},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],n):"object"==typeof exports?module.exports=n(require("desandro-get-style-property")):t.getSize=n(t.getStyleProperty)}(window),function(t){function e(t){"function"==typeof t&&(e.isReady?t():s.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==r.readyState;e.isReady||i||o()}function o(){e.isReady=!0;for(var t=0,i=s.length;i>t;t++){var o=s[t];o()}}function n(n){return"complete"===r.readyState?o():(n.bind(r,"DOMContentLoaded",i),n.bind(r,"readystatechange",i),n.bind(t,"load",i)),e}var r=t.document,s=[];e.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],n):"object"==typeof exports?module.exports=n(require("eventie")):t.docReady=n(t.eventie)}(window),function(t){function e(t,e){return t[s](e)}function i(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){i(t);for(var o=t.parentNode.querySelectorAll(e),n=0,r=o.length;r>n;n++)if(o[n]===t)return!0;return!1}function n(t,o){return i(t),e(t,o)}var r,s=function(){if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0,o=e.length;o>i;i++){var n=e[i],r=n+"MatchesSelector";if(t[r])return r}}();if(s){var a=document.createElement("div"),u=e(a,"div");r=u?e:n}else r=o;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return r}):"object"==typeof exports?module.exports=r:window.matchesSelector=r}(Element.prototype),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(i,o){return e(t,i,o)}):"object"==typeof exports?module.exports=e(t,require("doc-ready"),require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.docReady,t.matchesSelector)}(window,function(t,e,i){var o={};o.extend=function(t,e){for(var i in e)t[i]=e[i];return t},o.modulo=function(t,e){return(t%e+e)%e};var n=Object.prototype.toString;o.isArray=function(t){return"[object Array]"==n.call(t)},o.makeArray=function(t){var e=[];if(o.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0,n=t.length;n>i;i++)e.push(t[i]);else e.push(t);return e},o.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1},o.removeFrom=function(t,e){var i=o.indexOf(t,e);-1!=i&&t.splice(i,1)},o.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1==t.nodeType&&"string"==typeof t.nodeName},o.setText=function(){function t(t,i){e=e||(void 0!==document.documentElement.textContent?"textContent":"innerText"),t[e]=i}var e;return t}(),o.getParent=function(t,e){for(;t!=document.body;)if(t=t.parentNode,i(t,e))return t},o.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},o.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.filterFindElements=function(t,e){t=o.makeArray(t);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r];if(o.isElement(a))if(e){i(a,e)&&n.push(a);for(var u=a.querySelectorAll(e),p=0,h=u.length;h>p;p++)n.push(u[p])}else n.push(a)}return n},o.debounceMethod=function(t,e,i){var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];t&&clearTimeout(t);var e=arguments,r=this;this[n]=setTimeout(function(){o.apply(r,e),delete r[n]},i||100)}},o.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var r=t.console;return o.htmlInit=function(i,n){e(function(){for(var e=o.toDashed(n),s=document.querySelectorAll(".js-"+e),a="data-"+e+"-options",u=0,p=s.length;p>u;u++){var h,f=s[u],d=f.getAttribute(a);try{h=d&&JSON.parse(d)}catch(l){r&&r.error("Error parsing "+a+" on "+f.nodeName.toLowerCase()+(f.id?"#"+f.id:"")+": "+l);continue}var c=new i(f,h),m=t.jQuery;m&&m.data(f,n,c)}})},o}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(i,o,n,r){return e(t,i,o,n,r)}):"object"==typeof exports?module.exports=e(t,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(t.Outlayer={},t.Outlayer.Item=e(t,t.EventEmitter,t.getSize,t.getStyleProperty,t.fizzyUIUtils))}(window,function(t,e,i,o,n){function r(t){for(var e in t)return!1;return e=null,!0}function s(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var a=t.getComputedStyle,u=a?function(t){return a(t,null)}:function(t){return t.currentStyle},p=o("transition"),h=o("transform"),f=p&&h,d=!!o("perspective"),l={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[p],c=["transform","transition","transitionDuration","transitionProperty"],m=function(){for(var t={},e=0,i=c.length;i>e;e++){var n=c[e],r=o(n);r&&r!==n&&(t[n]=r)}return t}();n.extend(s.prototype,e.prototype),s.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},s.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.prototype.getSize=function(){this.size=i(this.element)},s.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=m[i]||i;e[o]=t[i]}},s.prototype.getPosition=function(){var t=u(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var s=this.layout.size;n-=i?s.paddingLeft:s.paddingRight,r-=o?s.paddingTop:s.paddingBottom,this.position.x=n,this.position.y=r},s.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={},o=e.isOriginLeft?"paddingLeft":"paddingRight",n=e.isOriginLeft?"left":"right",r=e.isOriginLeft?"right":"left",s=this.position.x+t[o];s=e.percentPosition&&!e.isHorizontal?100*(s/t.width)+"%":s+"px",i[n]=s,i[r]="";var a=e.isOriginTop?"paddingTop":"paddingBottom",u=e.isOriginTop?"top":"bottom",p=e.isOriginTop?"bottom":"top",h=this.position.y+t[a];h=e.percentPosition&&e.isHorizontal?100*(h/t.height)+"%":h+"px",i[u]=h,i[p]="",this.css(i),this.emitEvent("layout",[this])};var y=d?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};s.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},s.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},s.prototype.moveTo=f?s.prototype._transitionTo:s.prototype.goTo,s.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},s.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},s.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var g=h&&n.toDashed(h)+",opacity";s.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:g,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(l,this,!1))},s.prototype.transition=s.prototype[p?"_transition":"_nonTransition"],s.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},s.prototype.onotransitionend=function(t){this.ontransitionend(t)};var v={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};s.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=v[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],r(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd){var o=e.onEnd[i];o.call(this),delete e.onEnd[i]}this.emitEvent("transitionEnd",[this])}},s.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(l,this,!1),this.isTransitioning=!1},s.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var _={transitionProperty:"",transitionDuration:""};return s.prototype.removeTransitionStyles=function(){this.css(_)},s.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},s.prototype.remove=function(){if(!p||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.once("transitionEnd",function(){t.removeElem()}),this.hide()},s.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},s.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},s.prototype.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},s.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},s.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},s.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},s}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,r,s){return e(t,i,o,n,r,s)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.eventie,t.EventEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n,r){function s(t,e){var i=n.getQueryElement(t);if(!i)return a&&a.error("Bad element for "+this.constructor.namespace+": "+(i||t)),void 0;this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++h;this.element.outlayerGUID=o,f[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var a=t.console,u=t.jQuery,p=function(){},h=0,f={};return s.namespace="outlayer",s.Item=r,s.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},n.extend(s.prototype,i.prototype),s.prototype.option=function(t){n.extend(this.options,t)},s.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},s.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},s.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},s.prototype._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},s.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},s.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},s.prototype._init=s.prototype.layout,s.prototype._resetLayout=function(){this.getSize()},s.prototype.getSize=function(){this.size=o(this.element)},s.prototype._getMeasurement=function(t,e){var i,r=this.options[t];r?("string"==typeof r?i=this.element.querySelector(r):n.isElement(r)&&(i=r),this[t]=i?o(i)[e]:r):this[t]=0},s.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},s.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},s.prototype._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){for(var i=[],o=0,n=t.length;n>o;o++){var r=t[o],s=this._getItemLayoutPosition(r);s.item=r,s.isInstant=e||r.isLayoutInstant,i.push(s)}this._processLayoutQueue(i)}},s.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},s.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},s.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},s.prototype._postLayout=function(){this.resizeContainer()},s.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},s.prototype._getContainerSize=p,s.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},s.prototype._emitCompleteOnItems=function(t,e){function i(){n.emitEvent(t+"Complete",[e])}function o(){s++,s===r&&i()}var n=this,r=e.length;if(!e||!r)return i(),void 0;for(var s=0,a=0,u=e.length;u>a;a++){var p=e[a];p.once(t,o)}},s.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},s.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},s.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},s.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n.removeFrom(this.stamps,o),this.unignore(o)}},s.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},s.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},s.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},s.prototype._manageStamp=p,s.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=o(t),r={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return r},s.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.prototype.bindResize=function(){this.isResizeBound||(e.bind(t,"resize",this),this.isResizeBound=!0)},s.prototype.unbindResize=function(){this.isResizeBound&&e.unbind(t,"resize",this),this.isResizeBound=!1},s.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},s.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},s.prototype.needsResizeLayout=function(){var t=o(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},s.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},s.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},s.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},s.prototype.reveal=function(t){this._emitCompleteOnItems("reveal",t);for(var e=t&&t.length,i=0;e&&e>i;i++){var o=t[i];o.reveal()}},s.prototype.hide=function(t){this._emitCompleteOnItems("hide",t);for(var e=t&&t.length,i=0;e&&e>i;i++){var o=t[i];o.hide()}},s.prototype.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},s.prototype.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},s.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},s.prototype.getItems=function(t){t=n.makeArray(t);for(var e=[],i=0,o=t.length;o>i;i++){var r=t[i],s=this.getItem(r);s&&e.push(s)}return e},s.prototype.remove=function(t){var e=this.getItems(t);if(this._emitCompleteOnItems("remove",e),e&&e.length)for(var i=0,o=e.length;o>i;i++){var r=e[i];r.remove(),n.removeFrom(this.items,r)}},s.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize();var n=this.element.outlayerGUID;delete f[n],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){function i(){s.apply(this,arguments)}return Object.create?i.prototype=Object.create(s.prototype):n.extend(i.prototype,s.prototype),i.prototype.constructor=i,i.defaults=n.extend({},s.defaults),n.extend(i.defaults,e),i.prototype.settings={},i.namespace=t,i.data=s.data,i.Item=function(){r.apply(this,arguments)},i.Item.prototype=new r,n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i},s.Item=r,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){function e(){t.Item.apply(this,arguments)}e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var i=e.prototype.destroy;return e.prototype.destroy=function(){i.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],e):"object"==typeof exports?module.exports=e(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):t.Masonry=e(t.Outlayer,t.getSize,t.fizzyUIUtils)}(window,function(t,e,i){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,r=n/o,s=o-n%o,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i.indexOf(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;i(o.prototype,e.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,o,n,r,s,a){return e(t,i,o,n,r,s,a)}):"object"==typeof exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,r,s){function a(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var u=t.jQuery,p=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},h=document.documentElement,f=h.textContent?function(t){return t.textContent}:function(t){return t.innerText},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=r,d.LayoutMode=s,d.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in s.modes)this._initLayoutMode(t)},d.prototype.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},d.prototype._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0,o=t.length;o>i;i++){var n=t[i];n.id=this.itemGUID++}return this._updateItemsSortData(t),t},d.prototype._initLayoutMode=function(t){var e=s.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},d.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},d.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.prototype.arrange=function(t){function e(){o.reveal(i.needReveal),o.hide(i.needHide)}this.option(t),this._getIsInstant();var i=this._filter(this.items);this.filteredItems=i.matches;var o=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(e):e(),this._sort(),this._layout()},d.prototype._init=d.prototype.arrange,d.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},d.prototype._bindArrangeComplete=function(){function t(){e&&i&&o&&n.emitEvent("arrangeComplete",[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},d.prototype._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],r=this._getFilterTest(e),s=0,a=t.length;a>s;s++){var u=t[s];if(!u.isIgnored){var p=r(u);p&&i.push(u),p&&u.isHidden?o.push(u):p||u.isHidden||n.push(u)}}return{matches:i,needReveal:o,needHide:n}},d.prototype._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},d.prototype.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},d.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=l(i)}},d.prototype._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var o=t[i];o.updateSortData()}};var l=function(){function t(t){if("string"!=typeof t)return t;var i=p(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&f(i)}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=a(e,this.options.sortAscending);this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},d.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},d.prototype._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},d.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},d.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},d.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},d.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},d.prototype._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},d.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e).matches;for(i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var c=d.prototype.remove;return d.prototype.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);var i=e&&e.length;if(i)for(var o=0;i>o;o++){var r=e[o];n.removeFrom(this.filteredItems,r)}},d.prototype.shuffle=function(){for(var t=0,e=this.items.length;e>t;t++){var i=this.items[t];i.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},d.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},d.prototype.getFilteredItemElements=function(){for(var t=[],e=0,i=this.filteredItems.length;i>e;e++)t.push(this.filteredItems[e].element);return t},d});




/*
 * Swiper 2.7.5
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: January 4, 2015
*/
var Swiper=function(a,b){"use strict";function c(a,b){return document.querySelectorAll?(b||document).querySelectorAll(a):jQuery(a,b)}function d(a){return"[object Array]"===Object.prototype.toString.apply(a)?!0:!1}function e(){var a=G-J;return b.freeMode&&(a=G-J),b.slidesPerView>D.slides.length&&!b.centeredSlides&&(a=0),0>a&&(a=0),a}function f(){function a(a){var c,d,e=function(){"undefined"!=typeof D&&null!==D&&(void 0!==D.imagesLoaded&&D.imagesLoaded++,D.imagesLoaded===D.imagesToLoad.length&&(D.reInit(),b.onImagesReady&&D.fireCallback(b.onImagesReady,D)))};a.complete?e():(d=a.currentSrc||a.getAttribute("src"),d?(c=new Image,c.onload=e,c.onerror=e,c.src=d):e())}var d=D.h.addEventListener,e="wrapper"===b.eventTarget?D.wrapper:D.container;if(D.browser.ie10||D.browser.ie11?(d(e,D.touchEvents.touchStart,p),d(document,D.touchEvents.touchMove,q),d(document,D.touchEvents.touchEnd,r)):(D.support.touch&&(d(e,"touchstart",p),d(e,"touchmove",q),d(e,"touchend",r)),b.simulateTouch&&(d(e,"mousedown",p),d(document,"mousemove",q),d(document,"mouseup",r))),b.autoResize&&d(window,"resize",D.resizeFix),g(),D._wheelEvent=!1,b.mousewheelControl){if(void 0!==document.onmousewheel&&(D._wheelEvent="mousewheel"),!D._wheelEvent)try{new WheelEvent("wheel"),D._wheelEvent="wheel"}catch(f){}D._wheelEvent||(D._wheelEvent="DOMMouseScroll"),D._wheelEvent&&d(D.container,D._wheelEvent,j)}if(b.keyboardControl&&d(document,"keydown",i),b.updateOnImagesReady){D.imagesToLoad=c("img",D.container);for(var h=0;h<D.imagesToLoad.length;h++)a(D.imagesToLoad[h])}}function g(){var a,d=D.h.addEventListener;if(b.preventLinks){var e=c("a",D.container);for(a=0;a<e.length;a++)d(e[a],"click",n)}if(b.releaseFormElements){var f=c("input, textarea, select",D.container);for(a=0;a<f.length;a++)d(f[a],D.touchEvents.touchStart,o,!0),D.support.touch&&b.simulateTouch&&d(f[a],"mousedown",o,!0)}if(b.onSlideClick)for(a=0;a<D.slides.length;a++)d(D.slides[a],"click",k);if(b.onSlideTouch)for(a=0;a<D.slides.length;a++)d(D.slides[a],D.touchEvents.touchStart,l)}function h(){var a,d=D.h.removeEventListener;if(b.onSlideClick)for(a=0;a<D.slides.length;a++)d(D.slides[a],"click",k);if(b.onSlideTouch)for(a=0;a<D.slides.length;a++)d(D.slides[a],D.touchEvents.touchStart,l);if(b.releaseFormElements){var e=c("input, textarea, select",D.container);for(a=0;a<e.length;a++)d(e[a],D.touchEvents.touchStart,o,!0),D.support.touch&&b.simulateTouch&&d(e[a],"mousedown",o,!0)}if(b.preventLinks){var f=c("a",D.container);for(a=0;a<f.length;a++)d(f[a],"click",n)}}function i(a){var b=a.keyCode||a.charCode;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey)){if(37===b||39===b||38===b||40===b){for(var c=!1,d=D.h.getOffset(D.container),e=D.h.windowScroll().left,f=D.h.windowScroll().top,g=D.h.windowWidth(),h=D.h.windowHeight(),i=[[d.left,d.top],[d.left+D.width,d.top],[d.left,d.top+D.height],[d.left+D.width,d.top+D.height]],j=0;j<i.length;j++){var k=i[j];k[0]>=e&&k[0]<=e+g&&k[1]>=f&&k[1]<=f+h&&(c=!0)}if(!c)return}N?((37===b||39===b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),39===b&&D.swipeNext(),37===b&&D.swipePrev()):((38===b||40===b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),40===b&&D.swipeNext(),38===b&&D.swipePrev())}}function j(a){var c=D._wheelEvent,d=0;if(a.detail)d=-a.detail;else if("mousewheel"===c)if(b.mousewheelControlForceToAxis)if(N){if(!(Math.abs(a.wheelDeltaX)>Math.abs(a.wheelDeltaY)))return;d=a.wheelDeltaX}else{if(!(Math.abs(a.wheelDeltaY)>Math.abs(a.wheelDeltaX)))return;d=a.wheelDeltaY}else d=a.wheelDelta;else if("DOMMouseScroll"===c)d=-a.detail;else if("wheel"===c)if(b.mousewheelControlForceToAxis)if(N){if(!(Math.abs(a.deltaX)>Math.abs(a.deltaY)))return;d=-a.deltaX}else{if(!(Math.abs(a.deltaY)>Math.abs(a.deltaX)))return;d=-a.deltaY}else d=Math.abs(a.deltaX)>Math.abs(a.deltaY)?-a.deltaX:-a.deltaY;if(b.freeMode){var f=D.getWrapperTranslate()+d;if(f>0&&(f=0),f<-e()&&(f=-e()),D.setWrapperTransition(0),D.setWrapperTranslate(f),D.updateActiveSlide(f),0===f||f===-e())return}else(new Date).getTime()-V>60&&(0>d?D.swipeNext():D.swipePrev()),V=(new Date).getTime();return b.autoplay&&D.stopAutoplay(!0),a.preventDefault?a.preventDefault():a.returnValue=!1,!1}function k(a){D.allowSlideClick&&(m(a),D.fireCallback(b.onSlideClick,D,a))}function l(a){m(a),D.fireCallback(b.onSlideTouch,D,a)}function m(a){if(a.currentTarget)D.clickedSlide=a.currentTarget;else{var c=a.srcElement;do{if(c.className.indexOf(b.slideClass)>-1)break;c=c.parentNode}while(c);D.clickedSlide=c}D.clickedSlideIndex=D.slides.indexOf(D.clickedSlide),D.clickedSlideLoopIndex=D.clickedSlideIndex-(D.loopedSlides||0)}function n(a){return D.allowLinks?void 0:(a.preventDefault?a.preventDefault():a.returnValue=!1,b.preventLinksPropagation&&"stopPropagation"in a&&a.stopPropagation(),!1)}function o(a){return a.stopPropagation?a.stopPropagation():a.returnValue=!1,!1}function p(a){if(b.preventLinks&&(D.allowLinks=!0),D.isTouched||b.onlyExternal)return!1;var c=a.target||a.srcElement;document.activeElement&&document.activeElement!==document.body&&document.activeElement!==c&&document.activeElement.blur();var d="input select textarea".split(" ");if(b.noSwiping&&c&&t(c))return!1;if(_=!1,D.isTouched=!0,$="touchstart"===a.type,!$&&"which"in a&&3===a.which)return D.isTouched=!1,!1;if(!$||1===a.targetTouches.length){D.callPlugins("onTouchStartBegin"),!$&&!D.isAndroid&&d.indexOf(c.tagName.toLowerCase())<0&&(a.preventDefault?a.preventDefault():a.returnValue=!1);var e=$?a.targetTouches[0].pageX:a.pageX||a.clientX,f=$?a.targetTouches[0].pageY:a.pageY||a.clientY;D.touches.startX=D.touches.currentX=e,D.touches.startY=D.touches.currentY=f,D.touches.start=D.touches.current=N?e:f,D.setWrapperTransition(0),D.positions.start=D.positions.current=D.getWrapperTranslate(),D.setWrapperTranslate(D.positions.start),D.times.start=(new Date).getTime(),I=void 0,b.moveStartThreshold>0&&(X=!1),b.onTouchStart&&D.fireCallback(b.onTouchStart,D,a),D.callPlugins("onTouchStartEnd")}}function q(a){if(D.isTouched&&!b.onlyExternal&&(!$||"mousemove"!==a.type)){var c=$?a.targetTouches[0].pageX:a.pageX||a.clientX,d=$?a.targetTouches[0].pageY:a.pageY||a.clientY;if("undefined"==typeof I&&N&&(I=!!(I||Math.abs(d-D.touches.startY)>Math.abs(c-D.touches.startX))),"undefined"!=typeof I||N||(I=!!(I||Math.abs(d-D.touches.startY)<Math.abs(c-D.touches.startX))),I)return void(D.isTouched=!1);if(N){if(!b.swipeToNext&&c<D.touches.startX||!b.swipeToPrev&&c>D.touches.startX)return}else if(!b.swipeToNext&&d<D.touches.startY||!b.swipeToPrev&&d>D.touches.startY)return;if(a.assignedToSwiper)return void(D.isTouched=!1);if(a.assignedToSwiper=!0,b.preventLinks&&(D.allowLinks=!1),b.onSlideClick&&(D.allowSlideClick=!1),b.autoplay&&D.stopAutoplay(!0),!$||1===a.touches.length){if(D.isMoved||(D.callPlugins("onTouchMoveStart"),b.loop&&(D.fixLoop(),D.positions.start=D.getWrapperTranslate()),b.onTouchMoveStart&&D.fireCallback(b.onTouchMoveStart,D)),D.isMoved=!0,a.preventDefault?a.preventDefault():a.returnValue=!1,D.touches.current=N?c:d,D.positions.current=(D.touches.current-D.touches.start)*b.touchRatio+D.positions.start,D.positions.current>0&&b.onResistanceBefore&&D.fireCallback(b.onResistanceBefore,D,D.positions.current),D.positions.current<-e()&&b.onResistanceAfter&&D.fireCallback(b.onResistanceAfter,D,Math.abs(D.positions.current+e())),b.resistance&&"100%"!==b.resistance){var f;if(D.positions.current>0&&(f=1-D.positions.current/J/2,D.positions.current=.5>f?J/2:D.positions.current*f),D.positions.current<-e()){var g=(D.touches.current-D.touches.start)*b.touchRatio+(e()+D.positions.start);f=(J+g)/J;var h=D.positions.current-g*(1-f)/2,i=-e()-J/2;D.positions.current=i>h||0>=f?i:h}}if(b.resistance&&"100%"===b.resistance&&(D.positions.current>0&&(!b.freeMode||b.freeModeFluid)&&(D.positions.current=0),D.positions.current<-e()&&(!b.freeMode||b.freeModeFluid)&&(D.positions.current=-e())),!b.followFinger)return;if(b.moveStartThreshold)if(Math.abs(D.touches.current-D.touches.start)>b.moveStartThreshold||X){if(!X)return X=!0,void(D.touches.start=D.touches.current);D.setWrapperTranslate(D.positions.current)}else D.positions.current=D.positions.start;else D.setWrapperTranslate(D.positions.current);return(b.freeMode||b.watchActiveIndex)&&D.updateActiveSlide(D.positions.current),b.grabCursor&&(D.container.style.cursor="move",D.container.style.cursor="grabbing",D.container.style.cursor="-moz-grabbin",D.container.style.cursor="-webkit-grabbing"),Y||(Y=D.touches.current),Z||(Z=(new Date).getTime()),D.velocity=(D.touches.current-Y)/((new Date).getTime()-Z)/2,Math.abs(D.touches.current-Y)<2&&(D.velocity=0),Y=D.touches.current,Z=(new Date).getTime(),D.callPlugins("onTouchMoveEnd"),b.onTouchMove&&D.fireCallback(b.onTouchMove,D,a),!1}}}function r(a){if(I&&D.swipeReset(),!b.onlyExternal&&D.isTouched){D.isTouched=!1,b.grabCursor&&(D.container.style.cursor="move",D.container.style.cursor="grab",D.container.style.cursor="-moz-grab",D.container.style.cursor="-webkit-grab"),D.positions.current||0===D.positions.current||(D.positions.current=D.positions.start),b.followFinger&&D.setWrapperTranslate(D.positions.current),D.times.end=(new Date).getTime(),D.touches.diff=D.touches.current-D.touches.start,D.touches.abs=Math.abs(D.touches.diff),D.positions.diff=D.positions.current-D.positions.start,D.positions.abs=Math.abs(D.positions.diff);var c=D.positions.diff,d=D.positions.abs,f=D.times.end-D.times.start;5>d&&300>f&&D.allowLinks===!1&&(b.freeMode||0===d||D.swipeReset(),b.preventLinks&&(D.allowLinks=!0),b.onSlideClick&&(D.allowSlideClick=!0)),setTimeout(function(){"undefined"!=typeof D&&null!==D&&(b.preventLinks&&(D.allowLinks=!0),b.onSlideClick&&(D.allowSlideClick=!0))},100);var g=e();if(!D.isMoved&&b.freeMode)return D.isMoved=!1,b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),void D.callPlugins("onTouchEnd");if(!D.isMoved||D.positions.current>0||D.positions.current<-g)return D.swipeReset(),b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),void D.callPlugins("onTouchEnd");if(D.isMoved=!1,b.freeMode){if(b.freeModeFluid){var h,i=1e3*b.momentumRatio,j=D.velocity*i,k=D.positions.current+j,l=!1,m=20*Math.abs(D.velocity)*b.momentumBounceRatio;-g>k&&(b.momentumBounce&&D.support.transitions?(-m>k+g&&(k=-g-m),h=-g,l=!0,_=!0):k=-g),k>0&&(b.momentumBounce&&D.support.transitions?(k>m&&(k=m),h=0,l=!0,_=!0):k=0),0!==D.velocity&&(i=Math.abs((k-D.positions.current)/D.velocity)),D.setWrapperTranslate(k),D.setWrapperTransition(i),b.momentumBounce&&l&&D.wrapperTransitionEnd(function(){_&&(b.onMomentumBounce&&D.fireCallback(b.onMomentumBounce,D),D.callPlugins("onMomentumBounce"),D.setWrapperTranslate(h),D.setWrapperTransition(300))}),D.updateActiveSlide(k)}return(!b.freeModeFluid||f>=300)&&D.updateActiveSlide(D.positions.current),b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),void D.callPlugins("onTouchEnd")}H=0>c?"toNext":"toPrev","toNext"===H&&300>=f&&(30>d||!b.shortSwipes?D.swipeReset():D.swipeNext(!0,!0)),"toPrev"===H&&300>=f&&(30>d||!b.shortSwipes?D.swipeReset():D.swipePrev(!0,!0));var n=0;if("auto"===b.slidesPerView){for(var o,p=Math.abs(D.getWrapperTranslate()),q=0,r=0;r<D.slides.length;r++)if(o=N?D.slides[r].getWidth(!0,b.roundLengths):D.slides[r].getHeight(!0,b.roundLengths),q+=o,q>p){n=o;break}n>J&&(n=J)}else n=F*b.slidesPerView;"toNext"===H&&f>300&&(d>=n*b.longSwipesRatio?D.swipeNext(!0,!0):D.swipeReset()),"toPrev"===H&&f>300&&(d>=n*b.longSwipesRatio?D.swipePrev(!0,!0):D.swipeReset()),b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),D.callPlugins("onTouchEnd")}}function s(a,b){return a&&a.getAttribute("class")&&a.getAttribute("class").indexOf(b)>-1}function t(a){var c=!1;do s(a,b.noSwipingClass)&&(c=!0),a=a.parentElement;while(!c&&a.parentElement&&!s(a,b.wrapperClass));return!c&&s(a,b.wrapperClass)&&s(a,b.noSwipingClass)&&(c=!0),c}function u(a,b){var c,d=document.createElement("div");return d.innerHTML=b,c=d.firstChild,c.className+=" "+a,c.outerHTML}function v(a,c,d){function e(){var f=+new Date,l=f-g;h+=i*l/(1e3/60),k="toNext"===j?h>a:a>h,k?(D.setWrapperTranslate(Math.ceil(h)),D._DOMAnimating=!0,window.setTimeout(function(){e()},1e3/60)):(b.onSlideChangeEnd&&("to"===c?d.runCallbacks===!0&&D.fireCallback(b.onSlideChangeEnd,D,j):D.fireCallback(b.onSlideChangeEnd,D,j)),D.setWrapperTranslate(a),D._DOMAnimating=!1)}var f="to"===c&&d.speed>=0?d.speed:b.speed,g=+new Date;if(D.support.transitions||!b.DOMAnimation)D.setWrapperTranslate(a),D.setWrapperTransition(f);else{var h=D.getWrapperTranslate(),i=Math.ceil((a-h)/f*(1e3/60)),j=h>a?"toNext":"toPrev",k="toNext"===j?h>a:a>h;if(D._DOMAnimating)return;e()}D.updateActiveSlide(a),b.onSlideNext&&"next"===c&&d.runCallbacks===!0&&D.fireCallback(b.onSlideNext,D,a),b.onSlidePrev&&"prev"===c&&d.runCallbacks===!0&&D.fireCallback(b.onSlidePrev,D,a),b.onSlideReset&&"reset"===c&&d.runCallbacks===!0&&D.fireCallback(b.onSlideReset,D,a),"next"!==c&&"prev"!==c&&"to"!==c||d.runCallbacks!==!0||w(c)}function w(a){if(D.callPlugins("onSlideChangeStart"),b.onSlideChangeStart)if(b.queueStartCallbacks&&D.support.transitions){if(D._queueStartCallbacks)return;D._queueStartCallbacks=!0,D.fireCallback(b.onSlideChangeStart,D,a),D.wrapperTransitionEnd(function(){D._queueStartCallbacks=!1})}else D.fireCallback(b.onSlideChangeStart,D,a);if(b.onSlideChangeEnd)if(D.support.transitions)if(b.queueEndCallbacks){if(D._queueEndCallbacks)return;D._queueEndCallbacks=!0,D.wrapperTransitionEnd(function(c){D.fireCallback(b.onSlideChangeEnd,c,a)})}else D.wrapperTransitionEnd(function(c){D.fireCallback(b.onSlideChangeEnd,c,a)});else b.DOMAnimation||setTimeout(function(){D.fireCallback(b.onSlideChangeEnd,D,a)},10)}function x(){var a=D.paginationButtons;if(a)for(var b=0;b<a.length;b++)D.h.removeEventListener(a[b],"click",z)}function y(){var a=D.paginationButtons;if(a)for(var b=0;b<a.length;b++)D.h.addEventListener(a[b],"click",z)}function z(a){for(var c,d=a.target||a.srcElement,e=D.paginationButtons,f=0;f<e.length;f++)d===e[f]&&(c=f);b.autoplay&&D.stopAutoplay(!0),D.swipeTo(c)}function A(){ab=setTimeout(function(){b.loop?(D.fixLoop(),D.swipeNext(!0,!0)):D.swipeNext(!0,!0)||(b.autoplayStopOnLast?(clearTimeout(ab),ab=void 0):D.swipeTo(0)),D.wrapperTransitionEnd(function(){"undefined"!=typeof ab&&A()})},b.autoplay)}function B(){D.calcSlides(),b.loader.slides.length>0&&0===D.slides.length&&D.loadSlides(),b.loop&&D.createLoop(),D.init(),f(),b.pagination&&D.createPagination(!0),b.loop||b.initialSlide>0?D.swipeTo(b.initialSlide,0,!1):D.updateActiveSlide(0),b.autoplay&&D.startAutoplay(),D.centerIndex=D.activeIndex,b.onSwiperCreated&&D.fireCallback(b.onSwiperCreated,D),D.callPlugins("onSwiperCreated")}if(!document.body.outerHTML&&document.body.__defineGetter__&&HTMLElement){var C=HTMLElement.prototype;C.__defineGetter__&&C.__defineGetter__("outerHTML",function(){return(new XMLSerializer).serializeToString(this)})}if(window.getComputedStyle||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){for(var c=b||0,d=this.length;d>c;c++)if(this[c]===a)return c;return-1}),(document.querySelectorAll||window.jQuery)&&"undefined"!=typeof a&&(a.nodeType||0!==c(a).length)){var D=this;D.touches={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,diff:0,abs:0},D.positions={start:0,abs:0,diff:0,current:0},D.times={start:0,end:0},D.id=(new Date).getTime(),D.container=a.nodeType?a:c(a)[0],D.isTouched=!1,D.isMoved=!1,D.activeIndex=0,D.centerIndex=0,D.activeLoaderIndex=0,D.activeLoopIndex=0,D.previousIndex=null,D.velocity=0,D.snapGrid=[],D.slidesGrid=[],D.imagesToLoad=[],D.imagesLoaded=0,D.wrapperLeft=0,D.wrapperRight=0,D.wrapperTop=0,D.wrapperBottom=0,D.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>=0;var E,F,G,H,I,J,K={eventTarget:"wrapper",mode:"horizontal",touchRatio:1,speed:300,freeMode:!1,freeModeFluid:!1,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,slidesPerView:1,slidesPerGroup:1,slidesPerViewFit:!0,simulateTouch:!0,followFinger:!0,shortSwipes:!0,longSwipesRatio:.5,moveStartThreshold:!1,onlyExternal:!1,createPagination:!0,pagination:!1,paginationElement:"span",paginationClickable:!1,paginationAsRange:!0,resistance:!0,scrollContainer:!1,preventLinks:!0,preventLinksPropagation:!1,noSwiping:!1,noSwipingClass:"swiper-no-swiping",initialSlide:0,keyboardControl:!1,mousewheelControl:!1,mousewheelControlForceToAxis:!1,useCSS3Transforms:!0,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,loop:!1,loopAdditionalSlides:0,roundLengths:!1,calculateHeight:!1,cssWidthAndHeight:!1,updateOnImagesReady:!0,releaseFormElements:!0,watchActiveIndex:!1,visibilityFullFit:!1,offsetPxBefore:0,offsetPxAfter:0,offsetSlidesBefore:0,offsetSlidesAfter:0,centeredSlides:!1,queueStartCallbacks:!1,queueEndCallbacks:!1,autoResize:!0,resizeReInit:!1,DOMAnimation:!0,loader:{slides:[],slidesHTMLType:"inner",surroundGroups:1,logic:"reload",loadAllSlides:!1},swipeToPrev:!0,swipeToNext:!0,slideElement:"div",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",wrapperClass:"swiper-wrapper",paginationElementClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch",paginationVisibleClass:"swiper-visible-switch"};b=b||{};for(var L in K)if(L in b&&"object"==typeof b[L])for(var M in K[L])M in b[L]||(b[L][M]=K[L][M]);else L in b||(b[L]=K[L]);D.params=b,b.scrollContainer&&(b.freeMode=!0,b.freeModeFluid=!0),b.loop&&(b.resistance="100%");var N="horizontal"===b.mode,O=["mousedown","mousemove","mouseup"];D.browser.ie10&&(O=["MSPointerDown","MSPointerMove","MSPointerUp"]),D.browser.ie11&&(O=["pointerdown","pointermove","pointerup"]),D.touchEvents={touchStart:D.support.touch||!b.simulateTouch?"touchstart":O[0],touchMove:D.support.touch||!b.simulateTouch?"touchmove":O[1],touchEnd:D.support.touch||!b.simulateTouch?"touchend":O[2]};for(var P=D.container.childNodes.length-1;P>=0;P--)if(D.container.childNodes[P].className)for(var Q=D.container.childNodes[P].className.split(/\s+/),R=0;R<Q.length;R++)Q[R]===b.wrapperClass&&(E=D.container.childNodes[P]);D.wrapper=E,D._extendSwiperSlide=function(a){return a.append=function(){return b.loop?a.insertAfter(D.slides.length-D.loopedSlides):(D.wrapper.appendChild(a),D.reInit()),a},a.prepend=function(){return b.loop?(D.wrapper.insertBefore(a,D.slides[D.loopedSlides]),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()):D.wrapper.insertBefore(a,D.wrapper.firstChild),D.reInit(),a},a.insertAfter=function(c){if("undefined"==typeof c)return!1;var d;return b.loop?(d=D.slides[c+1+D.loopedSlides],d?D.wrapper.insertBefore(a,d):D.wrapper.appendChild(a),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()):(d=D.slides[c+1],D.wrapper.insertBefore(a,d)),D.reInit(),a},a.clone=function(){return D._extendSwiperSlide(a.cloneNode(!0))},a.remove=function(){D.wrapper.removeChild(a),D.reInit()},a.html=function(b){return"undefined"==typeof b?a.innerHTML:(a.innerHTML=b,a)},a.index=function(){for(var b,c=D.slides.length-1;c>=0;c--)a===D.slides[c]&&(b=c);return b},a.isActive=function(){return a.index()===D.activeIndex?!0:!1},a.swiperSlideDataStorage||(a.swiperSlideDataStorage={}),a.getData=function(b){return a.swiperSlideDataStorage[b]},a.setData=function(b,c){return a.swiperSlideDataStorage[b]=c,a},a.data=function(b,c){return"undefined"==typeof c?a.getAttribute("data-"+b):(a.setAttribute("data-"+b,c),a)},a.getWidth=function(b,c){return D.h.getWidth(a,b,c)},a.getHeight=function(b,c){return D.h.getHeight(a,b,c)},a.getOffset=function(){return D.h.getOffset(a)},a},D.calcSlides=function(a){var c=D.slides?D.slides.length:!1;D.slides=[],D.displaySlides=[];for(var d=0;d<D.wrapper.childNodes.length;d++)if(D.wrapper.childNodes[d].className)for(var e=D.wrapper.childNodes[d].className,f=e.split(/\s+/),i=0;i<f.length;i++)f[i]===b.slideClass&&D.slides.push(D.wrapper.childNodes[d]);for(d=D.slides.length-1;d>=0;d--)D._extendSwiperSlide(D.slides[d]);c!==!1&&(c!==D.slides.length||a)&&(h(),g(),D.updateActiveSlide(),D.params.pagination&&D.createPagination(),D.callPlugins("numberOfSlidesChanged"))},D.createSlide=function(a,c,d){c=c||D.params.slideClass,d=d||b.slideElement;var e=document.createElement(d);return e.innerHTML=a||"",e.className=c,D._extendSwiperSlide(e)},D.appendSlide=function(a,b,c){return a?a.nodeType?D._extendSwiperSlide(a).append():D.createSlide(a,b,c).append():void 0},D.prependSlide=function(a,b,c){return a?a.nodeType?D._extendSwiperSlide(a).prepend():D.createSlide(a,b,c).prepend():void 0},D.insertSlideAfter=function(a,b,c,d){return"undefined"==typeof a?!1:b.nodeType?D._extendSwiperSlide(b).insertAfter(a):D.createSlide(b,c,d).insertAfter(a)},D.removeSlide=function(a){if(D.slides[a]){if(b.loop){if(!D.slides[a+D.loopedSlides])return!1;D.slides[a+D.loopedSlides].remove(),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()}else D.slides[a].remove();return!0}return!1},D.removeLastSlide=function(){return D.slides.length>0?(b.loop?(D.slides[D.slides.length-1-D.loopedSlides].remove(),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()):D.slides[D.slides.length-1].remove(),!0):!1},D.removeAllSlides=function(){for(var a=D.slides.length,b=D.slides.length-1;b>=0;b--)D.slides[b].remove(),b===a-1&&D.setWrapperTranslate(0)},D.getSlide=function(a){return D.slides[a]},D.getLastSlide=function(){return D.slides[D.slides.length-1]},D.getFirstSlide=function(){return D.slides[0]},D.activeSlide=function(){return D.slides[D.activeIndex]},D.fireCallback=function(){var a=arguments[0];if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)"function"==typeof a[c]&&a[c](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);else"[object String]"===Object.prototype.toString.call(a)?b["on"+a]&&D.fireCallback(b["on"+a],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]):a(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},D.addCallback=function(a,b){var c,e=this;return e.params["on"+a]?d(this.params["on"+a])?this.params["on"+a].push(b):"function"==typeof this.params["on"+a]?(c=this.params["on"+a],this.params["on"+a]=[],this.params["on"+a].push(c),this.params["on"+a].push(b)):void 0:(this.params["on"+a]=[],this.params["on"+a].push(b))},D.removeCallbacks=function(a){D.params["on"+a]&&(D.params["on"+a]=null)};var S=[];for(var T in D.plugins)if(b[T]){var U=D.plugins[T](D,b[T]);U&&S.push(U)}D.callPlugins=function(a,b){b||(b={});for(var c=0;c<S.length;c++)a in S[c]&&S[c][a](b)},!D.browser.ie10&&!D.browser.ie11||b.onlyExternal||D.wrapper.classList.add("swiper-wp8-"+(N?"horizontal":"vertical")),b.freeMode&&(D.container.className+=" swiper-free-mode"),D.initialized=!1,D.init=function(a,c){var d=D.h.getWidth(D.container,!1,b.roundLengths),e=D.h.getHeight(D.container,!1,b.roundLengths);if(d!==D.width||e!==D.height||a){D.width=d,D.height=e;var f,g,h,i,j,k,l;J=N?d:e;var m=D.wrapper;if(a&&D.calcSlides(c),"auto"===b.slidesPerView){var n=0,o=0;b.slidesOffset>0&&(m.style.paddingLeft="",m.style.paddingRight="",m.style.paddingTop="",m.style.paddingBottom=""),m.style.width="",m.style.height="",b.offsetPxBefore>0&&(N?D.wrapperLeft=b.offsetPxBefore:D.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(N?D.wrapperRight=b.offsetPxAfter:D.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(N?(D.wrapperLeft=(J-this.slides[0].getWidth(!0,b.roundLengths))/2,D.wrapperRight=(J-D.slides[D.slides.length-1].getWidth(!0,b.roundLengths))/2):(D.wrapperTop=(J-D.slides[0].getHeight(!0,b.roundLengths))/2,D.wrapperBottom=(J-D.slides[D.slides.length-1].getHeight(!0,b.roundLengths))/2)),N?(D.wrapperLeft>=0&&(m.style.paddingLeft=D.wrapperLeft+"px"),D.wrapperRight>=0&&(m.style.paddingRight=D.wrapperRight+"px")):(D.wrapperTop>=0&&(m.style.paddingTop=D.wrapperTop+"px"),D.wrapperBottom>=0&&(m.style.paddingBottom=D.wrapperBottom+"px")),k=0;var p=0;for(D.snapGrid=[],D.slidesGrid=[],h=0,l=0;l<D.slides.length;l++){f=D.slides[l].getWidth(!0,b.roundLengths),g=D.slides[l].getHeight(!0,b.roundLengths),b.calculateHeight&&(h=Math.max(h,g));var q=N?f:g;if(b.centeredSlides){var r=l===D.slides.length-1?0:D.slides[l+1].getWidth(!0,b.roundLengths),s=l===D.slides.length-1?0:D.slides[l+1].getHeight(!0,b.roundLengths),t=N?r:s;if(q>J){if(b.slidesPerViewFit)D.snapGrid.push(k+D.wrapperLeft),D.snapGrid.push(k+q-J+D.wrapperLeft);else for(var u=0;u<=Math.floor(q/(J+D.wrapperLeft));u++)D.snapGrid.push(0===u?k+D.wrapperLeft:k+D.wrapperLeft+J*u);D.slidesGrid.push(k+D.wrapperLeft)}else D.snapGrid.push(p),D.slidesGrid.push(p);p+=q/2+t/2}else{if(q>J)if(b.slidesPerViewFit)D.snapGrid.push(k),D.snapGrid.push(k+q-J);else if(0!==J)for(var v=0;v<=Math.floor(q/J);v++)D.snapGrid.push(k+J*v);else D.snapGrid.push(k);else D.snapGrid.push(k);D.slidesGrid.push(k)}k+=q,n+=f,o+=g}b.calculateHeight&&(D.height=h),N?(G=n+D.wrapperRight+D.wrapperLeft,b.cssWidthAndHeight&&"height"!==b.cssWidthAndHeight||(m.style.width=n+"px"),b.cssWidthAndHeight&&"width"!==b.cssWidthAndHeight||(m.style.height=D.height+"px")):(b.cssWidthAndHeight&&"height"!==b.cssWidthAndHeight||(m.style.width=D.width+"px"),b.cssWidthAndHeight&&"width"!==b.cssWidthAndHeight||(m.style.height=o+"px"),G=o+D.wrapperTop+D.wrapperBottom)}else if(b.scrollContainer)m.style.width="",m.style.height="",i=D.slides[0].getWidth(!0,b.roundLengths),j=D.slides[0].getHeight(!0,b.roundLengths),G=N?i:j,m.style.width=i+"px",m.style.height=j+"px",F=N?i:j;else{if(b.calculateHeight){for(h=0,j=0,N||(D.container.style.height=""),m.style.height="",l=0;l<D.slides.length;l++)D.slides[l].style.height="",h=Math.max(D.slides[l].getHeight(!0),h),N||(j+=D.slides[l].getHeight(!0));g=h,D.height=g,N?j=g:(J=g,D.container.style.height=J+"px")}else g=N?D.height:D.height/b.slidesPerView,b.roundLengths&&(g=Math.ceil(g)),j=N?D.height:D.slides.length*g;for(f=N?D.width/b.slidesPerView:D.width,b.roundLengths&&(f=Math.ceil(f)),i=N?D.slides.length*f:D.width,F=N?f:g,b.offsetSlidesBefore>0&&(N?D.wrapperLeft=F*b.offsetSlidesBefore:D.wrapperTop=F*b.offsetSlidesBefore),b.offsetSlidesAfter>0&&(N?D.wrapperRight=F*b.offsetSlidesAfter:D.wrapperBottom=F*b.offsetSlidesAfter),b.offsetPxBefore>0&&(N?D.wrapperLeft=b.offsetPxBefore:D.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(N?D.wrapperRight=b.offsetPxAfter:D.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(N?(D.wrapperLeft=(J-F)/2,D.wrapperRight=(J-F)/2):(D.wrapperTop=(J-F)/2,D.wrapperBottom=(J-F)/2)),N?(D.wrapperLeft>0&&(m.style.paddingLeft=D.wrapperLeft+"px"),D.wrapperRight>0&&(m.style.paddingRight=D.wrapperRight+"px")):(D.wrapperTop>0&&(m.style.paddingTop=D.wrapperTop+"px"),D.wrapperBottom>0&&(m.style.paddingBottom=D.wrapperBottom+"px")),G=N?i+D.wrapperRight+D.wrapperLeft:j+D.wrapperTop+D.wrapperBottom,parseFloat(i)>0&&(!b.cssWidthAndHeight||"height"===b.cssWidthAndHeight)&&(m.style.width=i+"px"),parseFloat(j)>0&&(!b.cssWidthAndHeight||"width"===b.cssWidthAndHeight)&&(m.style.height=j+"px"),k=0,D.snapGrid=[],D.slidesGrid=[],l=0;l<D.slides.length;l++)D.snapGrid.push(k),D.slidesGrid.push(k),k+=F,parseFloat(f)>0&&(!b.cssWidthAndHeight||"height"===b.cssWidthAndHeight)&&(D.slides[l].style.width=f+"px"),parseFloat(g)>0&&(!b.cssWidthAndHeight||"width"===b.cssWidthAndHeight)&&(D.slides[l].style.height=g+"px")}D.initialized?(D.callPlugins("onInit"),b.onInit&&D.fireCallback(b.onInit,D)):(D.callPlugins("onFirstInit"),b.onFirstInit&&D.fireCallback(b.onFirstInit,D)),D.initialized=!0}},D.reInit=function(a){D.init(!0,a)},D.resizeFix=function(a){D.callPlugins("beforeResizeFix"),D.init(b.resizeReInit||a),b.freeMode?D.getWrapperTranslate()<-e()&&(D.setWrapperTransition(0),D.setWrapperTranslate(-e())):(D.swipeTo(b.loop?D.activeLoopIndex:D.activeIndex,0,!1),b.autoplay&&(D.support.transitions&&"undefined"!=typeof ab?"undefined"!=typeof ab&&(clearTimeout(ab),ab=void 0,D.startAutoplay()):"undefined"!=typeof bb&&(clearInterval(bb),bb=void 0,D.startAutoplay()))),D.callPlugins("afterResizeFix")},D.destroy=function(a){var c=D.h.removeEventListener,d="wrapper"===b.eventTarget?D.wrapper:D.container;if(D.browser.ie10||D.browser.ie11?(c(d,D.touchEvents.touchStart,p),c(document,D.touchEvents.touchMove,q),c(document,D.touchEvents.touchEnd,r)):(D.support.touch&&(c(d,"touchstart",p),c(d,"touchmove",q),c(d,"touchend",r)),b.simulateTouch&&(c(d,"mousedown",p),c(document,"mousemove",q),c(document,"mouseup",r))),b.autoResize&&c(window,"resize",D.resizeFix),h(),b.paginationClickable&&x(),b.mousewheelControl&&D._wheelEvent&&c(D.container,D._wheelEvent,j),b.keyboardControl&&c(document,"keydown",i),b.autoplay&&D.stopAutoplay(),a){D.wrapper.removeAttribute("style");for(var e=0;e<D.slides.length;e++)D.slides[e].removeAttribute("style")}D.callPlugins("onDestroy"),window.jQuery&&window.jQuery(D.container).data("swiper")&&window.jQuery(D.container).removeData("swiper"),window.Zepto&&window.Zepto(D.container).data("swiper")&&window.Zepto(D.container).removeData("swiper"),D=null},D.disableKeyboardControl=function(){b.keyboardControl=!1,D.h.removeEventListener(document,"keydown",i)},D.enableKeyboardControl=function(){b.keyboardControl=!0,D.h.addEventListener(document,"keydown",i)};var V=(new Date).getTime();if(D.disableMousewheelControl=function(){return D._wheelEvent?(b.mousewheelControl=!1,D.h.removeEventListener(D.container,D._wheelEvent,j),!0):!1},D.enableMousewheelControl=function(){return D._wheelEvent?(b.mousewheelControl=!0,D.h.addEventListener(D.container,D._wheelEvent,j),!0):!1},b.grabCursor){var W=D.container.style;W.cursor="move",W.cursor="grab",W.cursor="-moz-grab",W.cursor="-webkit-grab"}D.allowSlideClick=!0,D.allowLinks=!0;var X,Y,Z,$=!1,_=!0;D.swipeNext=function(a,c){"undefined"==typeof a&&(a=!0),!c&&b.loop&&D.fixLoop(),!c&&b.autoplay&&D.stopAutoplay(!0),D.callPlugins("onSwipeNext");var d=D.getWrapperTranslate().toFixed(2),f=d;if("auto"===b.slidesPerView){for(var g=0;g<D.snapGrid.length;g++)if(-d>=D.snapGrid[g].toFixed(2)&&-d<D.snapGrid[g+1].toFixed(2)){f=-D.snapGrid[g+1];break}}else{var h=F*b.slidesPerGroup;f=-(Math.floor(Math.abs(d)/Math.floor(h))*h+h)}return f<-e()&&(f=-e()),f===d?!1:(v(f,"next",{runCallbacks:a}),!0)},D.swipePrev=function(a,c){"undefined"==typeof a&&(a=!0),!c&&b.loop&&D.fixLoop(),!c&&b.autoplay&&D.stopAutoplay(!0),D.callPlugins("onSwipePrev");var d,e=Math.ceil(D.getWrapperTranslate());if("auto"===b.slidesPerView){d=0;for(var f=1;f<D.snapGrid.length;f++){if(-e===D.snapGrid[f]){d=-D.snapGrid[f-1];break}if(-e>D.snapGrid[f]&&-e<D.snapGrid[f+1]){d=-D.snapGrid[f];break}}}else{var g=F*b.slidesPerGroup;d=-(Math.ceil(-e/g)-1)*g}return d>0&&(d=0),d===e?!1:(v(d,"prev",{runCallbacks:a}),!0)},D.swipeReset=function(a){"undefined"==typeof a&&(a=!0),D.callPlugins("onSwipeReset");{var c,d=D.getWrapperTranslate(),f=F*b.slidesPerGroup;-e()}if("auto"===b.slidesPerView){c=0;for(var g=0;g<D.snapGrid.length;g++){if(-d===D.snapGrid[g])return;if(-d>=D.snapGrid[g]&&-d<D.snapGrid[g+1]){c=D.positions.diff>0?-D.snapGrid[g+1]:-D.snapGrid[g];break}}-d>=D.snapGrid[D.snapGrid.length-1]&&(c=-D.snapGrid[D.snapGrid.length-1]),d<=-e()&&(c=-e())}else c=0>d?Math.round(d/f)*f:0,d<=-e()&&(c=-e());return b.scrollContainer&&(c=0>d?d:0),c<-e()&&(c=-e()),b.scrollContainer&&J>F&&(c=0),c===d?!1:(v(c,"reset",{runCallbacks:a}),!0)},D.swipeTo=function(a,c,d){a=parseInt(a,10),D.callPlugins("onSwipeTo",{index:a,speed:c}),b.loop&&(a+=D.loopedSlides);var f=D.getWrapperTranslate();if(!(a>D.slides.length-1||0>a)){var g;return g="auto"===b.slidesPerView?-D.slidesGrid[a]:-a*F,g<-e()&&(g=-e()),g===f?!1:("undefined"==typeof d&&(d=!0),v(g,"to",{index:a,speed:c,runCallbacks:d}),!0)}},D._queueStartCallbacks=!1,D._queueEndCallbacks=!1,D.updateActiveSlide=function(a){if(D.initialized&&0!==D.slides.length){D.previousIndex=D.activeIndex,"undefined"==typeof a&&(a=D.getWrapperTranslate()),a>0&&(a=0);var c;if("auto"===b.slidesPerView){if(D.activeIndex=D.slidesGrid.indexOf(-a),D.activeIndex<0){for(c=0;c<D.slidesGrid.length-1&&!(-a>D.slidesGrid[c]&&-a<D.slidesGrid[c+1]);c++);var d=Math.abs(D.slidesGrid[c]+a),e=Math.abs(D.slidesGrid[c+1]+a);D.activeIndex=e>=d?c:c+1}}else D.activeIndex=Math[b.visibilityFullFit?"ceil":"round"](-a/F);if(D.activeIndex===D.slides.length&&(D.activeIndex=D.slides.length-1),D.activeIndex<0&&(D.activeIndex=0),D.slides[D.activeIndex]){if(D.calcVisibleSlides(a),D.support.classList){var f;for(c=0;c<D.slides.length;c++)f=D.slides[c],f.classList.remove(b.slideActiveClass),D.visibleSlides.indexOf(f)>=0?f.classList.add(b.slideVisibleClass):f.classList.remove(b.slideVisibleClass);D.slides[D.activeIndex].classList.add(b.slideActiveClass)}else{var g=new RegExp("\\s*"+b.slideActiveClass),h=new RegExp("\\s*"+b.slideVisibleClass);for(c=0;c<D.slides.length;c++)D.slides[c].className=D.slides[c].className.replace(g,"").replace(h,""),D.visibleSlides.indexOf(D.slides[c])>=0&&(D.slides[c].className+=" "+b.slideVisibleClass);D.slides[D.activeIndex].className+=" "+b.slideActiveClass}if(b.loop){var i=D.loopedSlides;D.activeLoopIndex=D.activeIndex-i,D.activeLoopIndex>=D.slides.length-2*i&&(D.activeLoopIndex=D.slides.length-2*i-D.activeLoopIndex),D.activeLoopIndex<0&&(D.activeLoopIndex=D.slides.length-2*i+D.activeLoopIndex),D.activeLoopIndex<0&&(D.activeLoopIndex=0)}else D.activeLoopIndex=D.activeIndex;b.pagination&&D.updatePagination(a)}}},D.createPagination=function(a){if(b.paginationClickable&&D.paginationButtons&&x(),D.paginationContainer=b.pagination.nodeType?b.pagination:c(b.pagination)[0],b.createPagination){var d="",e=D.slides.length,f=e;b.loop&&(f-=2*D.loopedSlides);for(var g=0;f>g;g++)d+="<"+b.paginationElement+' class="'+b.paginationElementClass+'"></'+b.paginationElement+">";D.paginationContainer.innerHTML=d}D.paginationButtons=c("."+b.paginationElementClass,D.paginationContainer),a||D.updatePagination(),D.callPlugins("onCreatePagination"),b.paginationClickable&&y()},D.updatePagination=function(a){if(b.pagination&&!(D.slides.length<1)){var d=c("."+b.paginationActiveClass,D.paginationContainer);if(d){var e=D.paginationButtons;if(0!==e.length){for(var f=0;f<e.length;f++)e[f].className=b.paginationElementClass;var g=b.loop?D.loopedSlides:0;if(b.paginationAsRange){D.visibleSlides||D.calcVisibleSlides(a);var h,i=[];for(h=0;h<D.visibleSlides.length;h++){var j=D.slides.indexOf(D.visibleSlides[h])-g;b.loop&&0>j&&(j=D.slides.length-2*D.loopedSlides+j),b.loop&&j>=D.slides.length-2*D.loopedSlides&&(j=D.slides.length-2*D.loopedSlides-j,j=Math.abs(j)),i.push(j)}for(h=0;h<i.length;h++)e[i[h]]&&(e[i[h]].className+=" "+b.paginationVisibleClass);b.loop?void 0!==e[D.activeLoopIndex]&&(e[D.activeLoopIndex].className+=" "+b.paginationActiveClass):e[D.activeIndex]&&(e[D.activeIndex].className+=" "+b.paginationActiveClass)}else b.loop?e[D.activeLoopIndex]&&(e[D.activeLoopIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass):e[D.activeIndex]&&(e[D.activeIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass)}}}},D.calcVisibleSlides=function(a){var c=[],d=0,e=0,f=0;N&&D.wrapperLeft>0&&(a+=D.wrapperLeft),!N&&D.wrapperTop>0&&(a+=D.wrapperTop);for(var g=0;g<D.slides.length;g++){d+=e,e="auto"===b.slidesPerView?N?D.h.getWidth(D.slides[g],!0,b.roundLengths):D.h.getHeight(D.slides[g],!0,b.roundLengths):F,f=d+e;var h=!1;b.visibilityFullFit?(d>=-a&&-a+J>=f&&(h=!0),-a>=d&&f>=-a+J&&(h=!0)):(f>-a&&-a+J>=f&&(h=!0),d>=-a&&-a+J>d&&(h=!0),-a>d&&f>-a+J&&(h=!0)),h&&c.push(D.slides[g])}0===c.length&&(c=[D.slides[D.activeIndex]]),D.visibleSlides=c};var ab,bb;D.startAutoplay=function(){if(D.support.transitions){if("undefined"!=typeof ab)return!1;if(!b.autoplay)return;D.callPlugins("onAutoplayStart"),b.onAutoplayStart&&D.fireCallback(b.onAutoplayStart,D),A()}else{if("undefined"!=typeof bb)return!1;if(!b.autoplay)return;D.callPlugins("onAutoplayStart"),b.onAutoplayStart&&D.fireCallback(b.onAutoplayStart,D),bb=setInterval(function(){b.loop?(D.fixLoop(),D.swipeNext(!0,!0)):D.swipeNext(!0,!0)||(b.autoplayStopOnLast?(clearInterval(bb),bb=void 0):D.swipeTo(0))},b.autoplay)}},D.stopAutoplay=function(a){if(D.support.transitions){if(!ab)return;ab&&clearTimeout(ab),ab=void 0,a&&!b.autoplayDisableOnInteraction&&D.wrapperTransitionEnd(function(){A()}),D.callPlugins("onAutoplayStop"),b.onAutoplayStop&&D.fireCallback(b.onAutoplayStop,D)}else bb&&clearInterval(bb),bb=void 0,D.callPlugins("onAutoplayStop"),b.onAutoplayStop&&D.fireCallback(b.onAutoplayStop,D)},D.loopCreated=!1,D.removeLoopedSlides=function(){if(D.loopCreated)for(var a=0;a<D.slides.length;a++)D.slides[a].getData("looped")===!0&&D.wrapper.removeChild(D.slides[a])},D.createLoop=function(){if(0!==D.slides.length){D.loopedSlides="auto"===b.slidesPerView?b.loopedSlides||1:b.slidesPerView+b.loopAdditionalSlides,D.loopedSlides>D.slides.length&&(D.loopedSlides=D.slides.length);var a,c="",d="",e="",f=D.slides.length,g=Math.floor(D.loopedSlides/f),h=D.loopedSlides%f;for(a=0;g*f>a;a++){var i=a;if(a>=f){var j=Math.floor(a/f);i=a-f*j}e+=D.slides[i].outerHTML}for(a=0;h>a;a++)d+=u(b.slideDuplicateClass,D.slides[a].outerHTML);for(a=f-h;f>a;a++)c+=u(b.slideDuplicateClass,D.slides[a].outerHTML);var k=c+e+E.innerHTML+e+d;for(E.innerHTML=k,D.loopCreated=!0,D.calcSlides(),a=0;a<D.slides.length;a++)(a<D.loopedSlides||a>=D.slides.length-D.loopedSlides)&&D.slides[a].setData("looped",!0);D.callPlugins("onCreateLoop")}},D.fixLoop=function(){var a;D.activeIndex<D.loopedSlides?(a=D.slides.length-3*D.loopedSlides+D.activeIndex,D.swipeTo(a,0,!1)):("auto"===b.slidesPerView&&D.activeIndex>=2*D.loopedSlides||D.activeIndex>D.slides.length-2*b.slidesPerView)&&(a=-D.slides.length+D.activeIndex+D.loopedSlides,D.swipeTo(a,0,!1))},D.loadSlides=function(){var a="";D.activeLoaderIndex=0;for(var c=b.loader.slides,d=b.loader.loadAllSlides?c.length:b.slidesPerView*(1+b.loader.surroundGroups),e=0;d>e;e++)a+="outer"===b.loader.slidesHTMLType?c[e]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+e+'">'+c[e]+"</"+b.slideElement+">";D.wrapper.innerHTML=a,D.calcSlides(!0),b.loader.loadAllSlides||D.wrapperTransitionEnd(D.reloadSlides,!0)},D.reloadSlides=function(){var a=b.loader.slides,c=parseInt(D.activeSlide().data("swiperindex"),10);if(!(0>c||c>a.length-1)){D.activeLoaderIndex=c;var d=Math.max(0,c-b.slidesPerView*b.loader.surroundGroups),e=Math.min(c+b.slidesPerView*(1+b.loader.surroundGroups)-1,a.length-1);if(c>0){var f=-F*(c-d);D.setWrapperTranslate(f),D.setWrapperTransition(0)}var g;if("reload"===b.loader.logic){D.wrapper.innerHTML="";var h="";for(g=d;e>=g;g++)h+="outer"===b.loader.slidesHTMLType?a[g]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+g+'">'+a[g]+"</"+b.slideElement+">";D.wrapper.innerHTML=h}else{var i=1e3,j=0;for(g=0;g<D.slides.length;g++){var k=D.slides[g].data("swiperindex");d>k||k>e?D.wrapper.removeChild(D.slides[g]):(i=Math.min(k,i),j=Math.max(k,j))}for(g=d;e>=g;g++){var l;i>g&&(l=document.createElement(b.slideElement),l.className=b.slideClass,l.setAttribute("data-swiperindex",g),l.innerHTML=a[g],D.wrapper.insertBefore(l,D.wrapper.firstChild)),g>j&&(l=document.createElement(b.slideElement),l.className=b.slideClass,l.setAttribute("data-swiperindex",g),l.innerHTML=a[g],D.wrapper.appendChild(l))}}D.reInit(!0)}},B()}};Swiper.prototype={plugins:{},wrapperTransitionEnd:function(a,b){"use strict";function c(h){if(h.target===f&&(a(e),e.params.queueEndCallbacks&&(e._queueEndCallbacks=!1),!b))for(d=0;d<g.length;d++)e.h.removeEventListener(f,g[d],c)}var d,e=this,f=e.wrapper,g=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];if(a)for(d=0;d<g.length;d++)e.h.addEventListener(f,g[d],c)},getWrapperTranslate:function(a){"use strict";var b,c,d,e,f=this.wrapper;return"undefined"==typeof a&&(a="horizontal"===this.params.mode?"x":"y"),this.support.transforms&&this.params.useCSS3Transforms?(d=window.getComputedStyle(f,null),window.WebKitCSSMatrix?e=new WebKitCSSMatrix("none"===d.webkitTransform?"":d.webkitTransform):(e=d.MozTransform||d.OTransform||d.MsTransform||d.msTransform||d.transform||d.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),b=e.toString().split(",")),"x"===a&&(c=window.WebKitCSSMatrix?e.m41:parseFloat(16===b.length?b[12]:b[4])),"y"===a&&(c=window.WebKitCSSMatrix?e.m42:parseFloat(16===b.length?b[13]:b[5]))):("x"===a&&(c=parseFloat(f.style.left,10)||0),"y"===a&&(c=parseFloat(f.style.top,10)||0)),c||0},setWrapperTranslate:function(a,b,c){"use strict";var d,e=this.wrapper.style,f={x:0,y:0,z:0};3===arguments.length?(f.x=a,f.y=b,f.z=c):("undefined"==typeof b&&(b="horizontal"===this.params.mode?"x":"y"),f[b]=a),this.support.transforms&&this.params.useCSS3Transforms?(d=this.support.transforms3d?"translate3d("+f.x+"px, "+f.y+"px, "+f.z+"px)":"translate("+f.x+"px, "+f.y+"px)",e.webkitTransform=e.MsTransform=e.msTransform=e.MozTransform=e.OTransform=e.transform=d):(e.left=f.x+"px",e.top=f.y+"px"),this.callPlugins("onSetWrapperTransform",f),this.params.onSetWrapperTransform&&this.fireCallback(this.params.onSetWrapperTransform,this,f)},setWrapperTransition:function(a){"use strict";var b=this.wrapper.style;b.webkitTransitionDuration=b.MsTransitionDuration=b.msTransitionDuration=b.MozTransitionDuration=b.OTransitionDuration=b.transitionDuration=a/1e3+"s",this.callPlugins("onSetWrapperTransition",{duration:a}),this.params.onSetWrapperTransition&&this.fireCallback(this.params.onSetWrapperTransition,this,a)},h:{getWidth:function(a,b,c){"use strict";var d=window.getComputedStyle(a,null).getPropertyValue("width"),e=parseFloat(d);return(isNaN(e)||d.indexOf("%")>0||0>e)&&(e=a.offsetWidth-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),b&&(e+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),c?Math.ceil(e):e},getHeight:function(a,b,c){"use strict";if(b)return a.offsetHeight;var d=window.getComputedStyle(a,null).getPropertyValue("height"),e=parseFloat(d);return(isNaN(e)||d.indexOf("%")>0||0>e)&&(e=a.offsetHeight-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),b&&(e+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),c?Math.ceil(e):e},getOffset:function(a){"use strict";var b=a.getBoundingClientRect(),c=document.body,d=a.clientTop||c.clientTop||0,e=a.clientLeft||c.clientLeft||0,f=window.pageYOffset||a.scrollTop,g=window.pageXOffset||a.scrollLeft;return document.documentElement&&!window.pageYOffset&&(f=document.documentElement.scrollTop,g=document.documentElement.scrollLeft),{top:b.top+f-d,left:b.left+g-e}},windowWidth:function(){"use strict";return window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:void 0},windowHeight:function(){"use strict";return window.innerHeight?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:void 0},windowScroll:function(){"use strict";return"undefined"!=typeof pageYOffset?{left:window.pageXOffset,top:window.pageYOffset}:document.documentElement?{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}:void 0},addEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},removeEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)}},setTransform:function(a,b){"use strict";var c=a.style;c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=b},setTranslate:function(a,b){"use strict";var c=a.style,d={x:b.x||0,y:b.y||0,z:b.z||0},e=this.support.transforms3d?"translate3d("+d.x+"px,"+d.y+"px,"+d.z+"px)":"translate("+d.x+"px,"+d.y+"px)";c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=e,this.support.transforms||(c.left=d.x+"px",c.top=d.y+"px")},setTransition:function(a,b){"use strict";var c=a.style;c.webkitTransitionDuration=c.MsTransitionDuration=c.msTransitionDuration=c.MozTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms"},support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){"use strict";return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){"use strict";var a=document.createElement("div").style;return"webkitPerspective"in a||"MozPerspective"in a||"OPerspective"in a||"MsPerspective"in a||"perspective"in a}(),transforms:window.Modernizr&&Modernizr.csstransforms===!0||function(){"use strict";var a=document.createElement("div").style;return"transform"in a||"WebkitTransform"in a||"MozTransform"in a||"msTransform"in a||"MsTransform"in a||"OTransform"in a}(),transitions:window.Modernizr&&Modernizr.csstransitions===!0||function(){"use strict";var a=document.createElement("div").style;return"transition"in a||"WebkitTransition"in a||"MozTransition"in a||"msTransition"in a||"MsTransition"in a||"OTransition"in a}(),classList:function(){"use strict";var a=document.createElement("div");return"classList"in a}()},browser:{ie8:function(){"use strict";var a=-1;if("Microsoft Internet Explorer"===navigator.appName){var b=navigator.userAgent,c=new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);null!==c.exec(b)&&(a=parseFloat(RegExp.$1))}return-1!==a&&9>a}(),ie10:window.navigator.msPointerEnabled,ie11:window.navigator.pointerEnabled}},(window.jQuery||window.Zepto)&&!function(a){"use strict";a.fn.swiper=function(b){var c;return this.each(function(d){var e=a(this),f=new Swiper(e[0],b);d||(c=f),e.data("swiper",f)}),c}}(window.jQuery||window.Zepto),"undefined"!=typeof module&&(module.exports=Swiper),"function"==typeof define&&define.amd&&define([],function(){"use strict";return Swiper});




/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,r){var h,n=Array.prototype.slice,t=decodeURIComponent,a=$.param,j,c,m,y,b=$.bbq=$.bbq||{},s,x,k,e=$.event.special,d="hashchange",B="querystring",F="fragment",z="elemUrlAttr",l="href",w="src",p=/^.*\?|#.*$/g,u,H,g,i,C,E={};function G(I){return typeof I==="string"}function D(J){var I=n.call(arguments,1);return function(){return J.apply(this,I.concat(n.call(arguments)))}}function o(I){return I.replace(H,"$2")}function q(I){return I.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(K,P,I,L,J){var R,O,N,Q,M;if(L!==h){N=I.match(K?H:/^([^#?]*)\??([^#]*)(#?.*)/);M=N[3]||"";if(J===2&&G(L)){O=L.replace(K?u:p,"")}else{Q=m(N[2]);L=G(L)?m[K?F:B](L):L;O=J===2?L:J===1?$.extend({},L,Q):$.extend({},Q,L);O=j(O);if(K){O=O.replace(g,t)}}R=N[1]+(K?C:O||!N[1]?"?":"")+O+M}else{R=P(I!==h?I:location.href)}return R}a[B]=D(f,0,q);a[F]=c=D(f,1,o);a.sorted=j=function(J,K){var I=[],L={};$.each(a(J,K).split("&"),function(P,M){var O=M.replace(/(?:%5B|=).*$/,""),N=L[O];if(!N){N=L[O]=[];I.push(O)}N.push(M)});return $.map(I.sort(),function(M){return L[M]}).join("&")};c.noEscape=function(J){J=J||"";var I=$.map(J.split(""),encodeURIComponent);g=new RegExp(I.join("|"),"g")};c.noEscape(",/");c.ajaxCrawlable=function(I){if(I!==h){if(I){u=/^.*(?:#!|#)/;H=/^([^#]*)(?:#!|#)?(.*)$/;C="#!"}else{u=/^.*#/;H=/^([^#]*)#?(.*)$/;C="#"}i=!!I}return i};c.ajaxCrawlable(0);$.deparam=m=function(L,I){var K={},J={"true":!0,"false":!1,"null":null};$.each(L.replace(/\+/g," ").split("&"),function(O,T){var N=T.split("="),S=t(N[0]),M,R=K,P=0,U=S.split("]["),Q=U.length-1;if(/\[/.test(U[0])&&/\]$/.test(U[Q])){U[Q]=U[Q].replace(/\]$/,"");U=U.shift().split("[").concat(U);Q=U.length-1}else{Q=0}if(N.length===2){M=t(N[1]);if(I){M=M&&!isNaN(M)?+M:M==="undefined"?h:J[M]!==h?J[M]:M}if(Q){for(;P<=Q;P++){S=U[P]===""?R.length:U[P];R=R[S]=P<Q?R[S]||(U[P+1]&&isNaN(U[P+1])?{}:[]):M}}else{if($.isArray(K[S])){K[S].push(M)}else{if(K[S]!==h){K[S]=[K[S],M]}else{K[S]=M}}}}else{if(S){K[S]=I?h:""}}});return K};function A(K,I,J){if(I===h||typeof I==="boolean"){J=I;I=a[K?F:B]()}else{I=G(I)?I.replace(K?u:p,""):I}return m(I,J)}m[B]=D(A,0);m[F]=y=D(A,1);$[z]||($[z]=function(I){return $.extend(E,I)})({a:l,base:l,iframe:w,img:w,input:w,form:"action",link:l,script:w});k=$[z];function v(L,J,K,I){if(!G(K)&&typeof K!=="object"){I=K;K=J;J=h}return this.each(function(){var O=$(this),M=J||k()[(this.nodeName||"").toLowerCase()]||"",N=M&&O.attr(M)||"";O.attr(M,a[L](N,K,I))})}$.fn[B]=D(v,B);$.fn[F]=D(v,F);b.pushState=s=function(L,I){if(G(L)&&/^#/.test(L)&&I===h){I=2}var K=L!==h,J=c(location.href,K?L:{},K?I:2);location.href=J};b.getState=x=function(I,J){return I===h||typeof I==="boolean"?y(I):y(J)[I]};b.removeState=function(I){var J={};if(I!==h){J=x();$.each($.isArray(I)?I:arguments,function(L,K){delete J[K]})}s(J,2)};e[d]=$.extend(e[d],{add:function(I){var K;function J(M){var L=M[F]=c();M.getState=function(N,O){return N===h||typeof N==="boolean"?m(L,N):m(L,O)[N]};K.apply(this,arguments)}if($.isFunction(I)){K=I;return J}else{K=I.handler;I.handler=J}}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(e,t,n){"$:nomunge";function f(e){e=e||location.href;return"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var r="hashchange",i=document,s,o=e.event.special,u=i.documentMode,a="on"+r in t&&(u===n||u>7);e.fn[r]=function(e){return e?this.bind(r,e):this.trigger(r)};e.fn[r].delay=50;o[r]=e.extend(o[r],{setup:function(){if(a){return false}e(s.start)},teardown:function(){if(a){return false}e(s.stop)}});s=function(){function p(){var n=f(),i=h(u);if(n!==u){c(u=n,i);e(t).trigger(r)}else if(i!==u){location.href=location.href.replace(/#.*/,"")+i}o=setTimeout(p,e.fn[r].delay)}var s={},o,u=f(),l=function(e){return e},c=l,h=l;s.start=function(){o||p()};s.stop=function(){o&&clearTimeout(o);o=n};navigator.appName==="Microsoft Internet Explorer"&&!a&&function(){var t,n;s.start=function(){if(!t){n=e.fn[r].src;n=n&&n+f();t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){n||c(f());p()}).attr("src",n||"javascript:0").insertAfter("body")[0].contentWindow;i.onpropertychange=function(){try{if(event.propertyName==="title"){t.document.title=i.title}}catch(e){}}}};s.stop=l;h=function(){return f(t.location.href)};c=function(n,s){var o=t.document,u=e.fn[r].domain;if(n!==s){o.title=i.title;o.open();u&&o.write('<script>document.domain="'+u+'"</script>');o.close();t.location.hash=n}}}();return s}()})(jQuery,this);




// Toastr v2.1.0
(function(e){e(["jquery"],function(e){return function(){function u(e,t,n){return w({type:i.error,iconClass:E().iconClasses.error,message:e,optionsOverride:n,title:t})}function a(n,r){if(!n){n=E()}t=e("#"+n.containerId);if(t.length){return t}if(r){t=g(n)}return t}function f(e,t,n){return w({type:i.info,iconClass:E().iconClasses.info,message:e,optionsOverride:n,title:t})}function l(e){n=e}function c(e,t,n){return w({type:i.success,iconClass:E().iconClasses.success,message:e,optionsOverride:n,title:t})}function h(e,t,n){return w({type:i.warning,iconClass:E().iconClasses.warning,message:e,optionsOverride:n,title:t})}function p(e){var n=E();if(!t){a(n)}if(!m(e,n)){v(n)}}function d(n){var r=E();if(!t){a(r)}if(n&&e(":focus",n).length===0){S(n);return}if(t.children().length){t.remove()}}function v(n){var r=t.children();for(var i=r.length-1;i>=0;i--){m(e(r[i]),n)}}function m(t,n){if(t&&e(":focus",t).length===0){t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){S(t)}});return true}return false}function g(n){t=e("<div/>").attr("id",n.containerId).addClass(n.positionClass).attr("aria-live","polite").attr("role","alert");t.appendTo(e(n.target));return t}function y(){return{tapToDismiss:true,toastClass:"toast",containerId:"toast-container",debug:false,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:undefined,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:undefined,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:"<button>&times;</button>",newestOnTop:true,preventDuplicates:false}}function b(e){if(!n){return}n(e)}function w(n){function d(t){if(e(":focus",f).length&&!t){return}return f[i.hideMethod]({duration:i.hideDuration,easing:i.hideEasing,complete:function(){S(f);if(i.onHidden&&p.state!=="hidden"){i.onHidden()}p.state="hidden";p.endTime=new Date;b(p)}})}function v(){if(i.timeOut>0||i.extendedTimeOut>0){u=setTimeout(d,i.extendedTimeOut)}}function m(){clearTimeout(u);f.stop(true,true)[i.showMethod]({duration:i.showDuration,easing:i.showEasing})}var i=E(),s=n.iconClass||i.iconClass;if(i.preventDuplicates){if(n.message===o){return}else{o=n.message}}if(typeof n.optionsOverride!=="undefined"){i=e.extend(i,n.optionsOverride);s=n.optionsOverride.iconClass||s}r++;t=a(i,true);var u=null,f=e("<div/>"),l=e("<div/>"),c=e("<div/>"),h=e(i.closeHtml),p={toastId:r,state:"visible",startTime:new Date,options:i,map:n};if(n.iconClass){f.addClass(i.toastClass).addClass(s)}if(n.title){l.append(n.title).addClass(i.titleClass);f.append(l)}if(n.message){c.append(n.message).addClass(i.messageClass);f.append(c)}if(i.closeButton){h.addClass("toast-close-button").attr("role","button");f.prepend(h)}f.hide();if(i.newestOnTop){t.prepend(f)}else{t.append(f)}f[i.showMethod]({duration:i.showDuration,easing:i.showEasing,complete:i.onShown});if(i.timeOut>0){u=setTimeout(d,i.timeOut)}f.hover(m,v);if(!i.onclick&&i.tapToDismiss){f.click(d)}if(i.closeButton&&h){h.click(function(e){if(e.stopPropagation){e.stopPropagation()}else if(e.cancelBubble!==undefined&&e.cancelBubble!==true){e.cancelBubble=true}d(true)})}if(i.onclick){f.click(function(){i.onclick();d()})}b(p);if(i.debug&&console){console.log(p)}return f}function E(){return e.extend({},y(),s.options)}function S(e){if(!t){t=a()}if(e.is(":visible")){return}e.remove();e=null;if(t.children().length===0){t.remove()}}var t;var n;var r=0;var i={error:"error",info:"info",success:"success",warning:"warning"};var s={clear:p,remove:d,error:u,getContainer:a,info:f,options:{},subscribe:l,success:c,version:"2.1.0",warning:h};var o;return s}()})})(typeof define==="function"&&define.amd?define:function(e,t){if(typeof module!=="undefined"&&module.exports){module.exports=t(require("jquery"))}else{window["toastr"]=t(window["jQuery"])}});




/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
(function(){"use strict";var t=this,i=t.Chart,e=function(t){this.canvas=t.canvas,this.ctx=t;var i=function(t,i){return t["offset"+i]?t["offset"+i]:document.defaultView.getComputedStyle(t).getPropertyValue(i)},e=this.width=i(t.canvas,"Width"),n=this.height=i(t.canvas,"Height");t.canvas.width=e,t.canvas.height=n;var e=this.width=t.canvas.width,n=this.height=t.canvas.height;return this.aspectRatio=this.width/this.height,s.retinaScale(this),this};e.defaults={global:{animation:!0,animationSteps:60,animationEasing:"easeOutQuart",showScale:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleIntegersOnly:!0,scaleBeginAtZero:!1,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:!1,maintainAspectRatio:!0,showTooltips:!0,customTooltips:!1,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= value %>",multiTooltipKeyBackground:"#fff",onAnimationProgress:function(){},onAnimationComplete:function(){}}},e.types={};var s=e.helpers={},n=s.each=function(t,i,e){var s=Array.prototype.slice.call(arguments,3);if(t)if(t.length===+t.length){var n;for(n=0;n<t.length;n++)i.apply(e,[t[n],n].concat(s))}else for(var o in t)i.apply(e,[t[o],o].concat(s))},o=s.clone=function(t){var i={};return n(t,function(e,s){t.hasOwnProperty(s)&&(i[s]=e)}),i},a=s.extend=function(t){return n(Array.prototype.slice.call(arguments,1),function(i){n(i,function(e,s){i.hasOwnProperty(s)&&(t[s]=e)})}),t},h=s.merge=function(){var t=Array.prototype.slice.call(arguments,0);return t.unshift({}),a.apply(null,t)},l=s.indexOf=function(t,i){if(Array.prototype.indexOf)return t.indexOf(i);for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1},r=(s.where=function(t,i){var e=[];return s.each(t,function(t){i(t)&&e.push(t)}),e},s.findNextWhere=function(t,i,e){e||(e=-1);for(var s=e+1;s<t.length;s++){var n=t[s];if(i(n))return n}},s.findPreviousWhere=function(t,i,e){e||(e=t.length);for(var s=e-1;s>=0;s--){var n=t[s];if(i(n))return n}},s.inherits=function(t){var i=this,e=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return i.apply(this,arguments)},s=function(){this.constructor=e};return s.prototype=i.prototype,e.prototype=new s,e.extend=r,t&&a(e.prototype,t),e.__super__=i.prototype,e}),c=s.noop=function(){},u=s.uid=function(){var t=0;return function(){return"chart-"+t++}}(),d=s.warn=function(t){window.console&&"function"==typeof window.console.warn&&console.warn(t)},p=s.amd="function"==typeof define&&define.amd,f=s.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},g=s.max=function(t){return Math.max.apply(Math,t)},m=s.min=function(t){return Math.min.apply(Math,t)},v=(s.cap=function(t,i,e){if(f(i)){if(t>i)return i}else if(f(e)&&e>t)return e;return t},s.getDecimalPlaces=function(t){return t%1!==0&&f(t)?t.toString().split(".")[1].length:0}),S=s.radians=function(t){return t*(Math.PI/180)},x=(s.getAngleFromPoint=function(t,i){var e=i.x-t.x,s=i.y-t.y,n=Math.sqrt(e*e+s*s),o=2*Math.PI+Math.atan2(s,e);return 0>e&&0>s&&(o+=2*Math.PI),{angle:o,distance:n}},s.aliasPixel=function(t){return t%2===0?0:.5}),y=(s.splineCurve=function(t,i,e,s){var n=Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)),o=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)),a=s*n/(n+o),h=s*o/(n+o);return{inner:{x:i.x-a*(e.x-t.x),y:i.y-a*(e.y-t.y)},outer:{x:i.x+h*(e.x-t.x),y:i.y+h*(e.y-t.y)}}},s.calculateOrderOfMagnitude=function(t){return Math.floor(Math.log(t)/Math.LN10)}),C=(s.calculateScaleRange=function(t,i,e,s,n){var o=2,a=Math.floor(i/(1.5*e)),h=o>=a,l=g(t),r=m(t);l===r&&(l+=.5,r>=.5&&!s?r-=.5:l+=.5);for(var c=Math.abs(l-r),u=y(c),d=Math.ceil(l/(1*Math.pow(10,u)))*Math.pow(10,u),p=s?0:Math.floor(r/(1*Math.pow(10,u)))*Math.pow(10,u),f=d-p,v=Math.pow(10,u),S=Math.round(f/v);(S>a||a>2*S)&&!h;)if(S>a)v*=2,S=Math.round(f/v),S%1!==0&&(h=!0);else if(n&&u>=0){if(v/2%1!==0)break;v/=2,S=Math.round(f/v)}else v/=2,S=Math.round(f/v);return h&&(S=o,v=f/S),{steps:S,stepValue:v,min:p,max:p+S*v}},s.template=function(t,i){function e(t,i){var e=/\W/.test(t)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):s[t]=s[t];return i?e(i):e}if(t instanceof Function)return t(i);var s={};return e(t,i)}),w=(s.generateLabels=function(t,i,e,s){var o=new Array(i);return labelTemplateString&&n(o,function(i,n){o[n]=C(t,{value:e+s*(n+1)})}),o},s.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),-(s*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e)))},easeOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),s*Math.pow(2,-10*t)*Math.sin(2*(1*t-i)*Math.PI/e)+1)},easeInOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:2==(t/=.5)?1:(e||(e=.3*1.5),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),1>t?-.5*s*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e):s*Math.pow(2,-10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e)*.5+1)},easeInBack:function(t){var i=1.70158;return 1*(t/=1)*t*((i+1)*t-i)},easeOutBack:function(t){var i=1.70158;return 1*((t=t/1-1)*t*((i+1)*t+i)+1)},easeInOutBack:function(t){var i=1.70158;return(t/=.5)<1?.5*t*t*(((i*=1.525)+1)*t-i):.5*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)},easeInBounce:function(t){return 1-w.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*w.easeInBounce(2*t):.5*w.easeOutBounce(2*t-1)+.5}}),b=s.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),P=s.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),L=(s.animationLoop=function(t,i,e,s,n,o){var a=0,h=w[e]||w.linear,l=function(){a++;var e=a/i,r=h(e);t.call(o,r,e,a),s.call(o,r,e),i>a?o.animationFrame=b(l):n.apply(o)};b(l)},s.getRelativePosition=function(t){var i,e,s=t.originalEvent||t,n=t.currentTarget||t.srcElement,o=n.getBoundingClientRect();return s.touches?(i=s.touches[0].clientX-o.left,e=s.touches[0].clientY-o.top):(i=s.clientX-o.left,e=s.clientY-o.top),{x:i,y:e}},s.addEvent=function(t,i,e){t.addEventListener?t.addEventListener(i,e):t.attachEvent?t.attachEvent("on"+i,e):t["on"+i]=e}),k=s.removeEvent=function(t,i,e){t.removeEventListener?t.removeEventListener(i,e,!1):t.detachEvent?t.detachEvent("on"+i,e):t["on"+i]=c},F=(s.bindEvents=function(t,i,e){t.events||(t.events={}),n(i,function(i){t.events[i]=function(){e.apply(t,arguments)},L(t.chart.canvas,i,t.events[i])})},s.unbindEvents=function(t,i){n(i,function(i,e){k(t.chart.canvas,e,i)})}),R=s.getMaximumWidth=function(t){var i=t.parentNode;return i.clientWidth},T=s.getMaximumHeight=function(t){var i=t.parentNode;return i.clientHeight},A=(s.getMaximumSize=s.getMaximumWidth,s.retinaScale=function(t){var i=t.ctx,e=t.canvas.width,s=t.canvas.height;window.devicePixelRatio&&(i.canvas.style.width=e+"px",i.canvas.style.height=s+"px",i.canvas.height=s*window.devicePixelRatio,i.canvas.width=e*window.devicePixelRatio,i.scale(window.devicePixelRatio,window.devicePixelRatio))}),M=s.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},W=s.fontString=function(t,i,e){return i+" "+t+"px "+e},z=s.longestText=function(t,i,e){t.font=i;var s=0;return n(e,function(i){var e=t.measureText(i).width;s=e>s?e:s}),s},B=s.drawRoundedRectangle=function(t,i,e,s,n,o){t.beginPath(),t.moveTo(i+o,e),t.lineTo(i+s-o,e),t.quadraticCurveTo(i+s,e,i+s,e+o),t.lineTo(i+s,e+n-o),t.quadraticCurveTo(i+s,e+n,i+s-o,e+n),t.lineTo(i+o,e+n),t.quadraticCurveTo(i,e+n,i,e+n-o),t.lineTo(i,e+o),t.quadraticCurveTo(i,e,i+o,e),t.closePath()};e.instances={},e.Type=function(t,i,s){this.options=i,this.chart=s,this.id=u(),e.instances[this.id]=this,i.responsive&&this.resize(),this.initialize.call(this,t)},a(e.Type.prototype,{initialize:function(){return this},clear:function(){return M(this.chart),this},stop:function(){return P(this.animationFrame),this},resize:function(t){this.stop();var i=this.chart.canvas,e=R(this.chart.canvas),s=this.options.maintainAspectRatio?e/this.chart.aspectRatio:T(this.chart.canvas);return i.width=this.chart.width=e,i.height=this.chart.height=s,A(this.chart),"function"==typeof t&&t.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:c,render:function(t){return t&&this.reflow(),this.options.animation&&!t?s.animationLoop(this.draw,this.options.animationSteps,this.options.animationEasing,this.options.onAnimationProgress,this.options.onAnimationComplete,this):(this.draw(),this.options.onAnimationComplete.call(this)),this},generateLegend:function(){return C(this.options.legendTemplate,this)},destroy:function(){this.clear(),F(this,this.events);var t=this.chart.canvas;t.width=this.chart.width,t.height=this.chart.height,t.style.removeProperty?(t.style.removeProperty("width"),t.style.removeProperty("height")):(t.style.removeAttribute("width"),t.style.removeAttribute("height")),delete e.instances[this.id]},showTooltip:function(t,i){"undefined"==typeof this.activeElements&&(this.activeElements=[]);var o=function(t){var i=!1;return t.length!==this.activeElements.length?i=!0:(n(t,function(t,e){t!==this.activeElements[e]&&(i=!0)},this),i)}.call(this,t);if(o||i){if(this.activeElements=t,this.draw(),this.options.customTooltips&&this.options.customTooltips(!1),t.length>0)if(this.datasets&&this.datasets.length>1){for(var a,h,r=this.datasets.length-1;r>=0&&(a=this.datasets[r].points||this.datasets[r].bars||this.datasets[r].segments,h=l(a,t[0]),-1===h);r--);var c=[],u=[],d=function(){var t,i,e,n,o,a=[],l=[],r=[];return s.each(this.datasets,function(i){t=i.points||i.bars||i.segments,t[h]&&t[h].hasValue()&&a.push(t[h])}),s.each(a,function(t){l.push(t.x),r.push(t.y),c.push(s.template(this.options.multiTooltipTemplate,t)),u.push({fill:t._saved.fillColor||t.fillColor,stroke:t._saved.strokeColor||t.strokeColor})},this),o=m(r),e=g(r),n=m(l),i=g(l),{x:n>this.chart.width/2?n:i,y:(o+e)/2}}.call(this,h);new e.MultiTooltip({x:d.x,y:d.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:c,legendColors:u,legendColorBackground:this.options.multiTooltipKeyBackground,title:t[0].label,chart:this.chart,ctx:this.chart.ctx,custom:this.options.customTooltips}).draw()}else n(t,function(t){var i=t.tooltipPosition();new e.Tooltip({x:Math.round(i.x),y:Math.round(i.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:C(this.options.tooltipTemplate,t),chart:this.chart,custom:this.options.customTooltips}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),e.Type.extend=function(t){var i=this,s=function(){return i.apply(this,arguments)};if(s.prototype=o(i.prototype),a(s.prototype,t),s.extend=e.Type.extend,t.name||i.prototype.name){var n=t.name||i.prototype.name,l=e.defaults[i.prototype.name]?o(e.defaults[i.prototype.name]):{};e.defaults[n]=a(l,t.defaults),e.types[n]=s,e.prototype[n]=function(t,i){var o=h(e.defaults.global,e.defaults[n],i||{});return new s(t,o,this)}}else d("Name not provided for this chart, so it hasn't been registered");return i},e.Element=function(t){a(this,t),this.initialize.apply(this,arguments),this.save()},a(e.Element.prototype,{initialize:function(){},restore:function(t){return t?n(t,function(t){this[t]=this._saved[t]},this):a(this,this._saved),this},save:function(){return this._saved=o(this),delete this._saved._saved,this},update:function(t){return n(t,function(t,i){this._saved[i]=this[i],this[i]=t},this),this},transition:function(t,i){return n(t,function(t,e){this[e]=(t-this._saved[e])*i+this._saved[e]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return f(this.value)}}),e.Element.extend=r,e.Point=e.Element.extend({display:!0,inRange:function(t,i){var e=this.hitDetectionRadius+this.radius;return Math.pow(t-this.x,2)+Math.pow(i-this.y,2)<Math.pow(e,2)},draw:function(){if(this.display){var t=this.ctx;t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath(),t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.fillStyle=this.fillColor,t.fill(),t.stroke()}}}),e.Arc=e.Element.extend({inRange:function(t,i){var e=s.getAngleFromPoint(this,{x:t,y:i}),n=e.angle>=this.startAngle&&e.angle<=this.endAngle,o=e.distance>=this.innerRadius&&e.distance<=this.outerRadius;return n&&o},tooltipPosition:function(){var t=this.startAngle+(this.endAngle-this.startAngle)/2,i=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+Math.cos(t)*i,y:this.y+Math.sin(t)*i}},draw:function(t){var i=this.ctx;i.beginPath(),i.arc(this.x,this.y,this.outerRadius,this.startAngle,this.endAngle),i.arc(this.x,this.y,this.innerRadius,this.endAngle,this.startAngle,!0),i.closePath(),i.strokeStyle=this.strokeColor,i.lineWidth=this.strokeWidth,i.fillStyle=this.fillColor,i.fill(),i.lineJoin="bevel",this.showStroke&&i.stroke()}}),e.Rectangle=e.Element.extend({draw:function(){var t=this.ctx,i=this.width/2,e=this.x-i,s=this.x+i,n=this.base-(this.base-this.y),o=this.strokeWidth/2;this.showStroke&&(e+=o,s-=o,n+=o),t.beginPath(),t.fillStyle=this.fillColor,t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.moveTo(e,this.base),t.lineTo(e,n),t.lineTo(s,n),t.lineTo(s,this.base),t.fill(),this.showStroke&&t.stroke()},height:function(){return this.base-this.y},inRange:function(t,i){return t>=this.x-this.width/2&&t<=this.x+this.width/2&&i>=this.y&&i<=this.base}}),e.Tooltip=e.Element.extend({draw:function(){var t=this.chart.ctx;t.font=W(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign="center",this.yAlign="above";var i=this.caretPadding=2,e=t.measureText(this.text).width+2*this.xPadding,s=this.fontSize+2*this.yPadding,n=s+this.caretHeight+i;this.x+e/2>this.chart.width?this.xAlign="left":this.x-e/2<0&&(this.xAlign="right"),this.y-n<0&&(this.yAlign="below");var o=this.x-e/2,a=this.y-n;if(t.fillStyle=this.fillColor,this.custom)this.custom(this);else{switch(this.yAlign){case"above":t.beginPath(),t.moveTo(this.x,this.y-i),t.lineTo(this.x+this.caretHeight,this.y-(i+this.caretHeight)),t.lineTo(this.x-this.caretHeight,this.y-(i+this.caretHeight)),t.closePath(),t.fill();break;case"below":a=this.y+i+this.caretHeight,t.beginPath(),t.moveTo(this.x,this.y+i),t.lineTo(this.x+this.caretHeight,this.y+i+this.caretHeight),t.lineTo(this.x-this.caretHeight,this.y+i+this.caretHeight),t.closePath(),t.fill()}switch(this.xAlign){case"left":o=this.x-e+(this.cornerRadius+this.caretHeight);break;case"right":o=this.x-(this.cornerRadius+this.caretHeight)}B(t,o,a,e,s,this.cornerRadius),t.fill(),t.fillStyle=this.textColor,t.textAlign="center",t.textBaseline="middle",t.fillText(this.text,o+e/2,a+s/2)}}}),e.MultiTooltip=e.Element.extend({initialize:function(){this.font=W(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=W(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+1.5*this.titleFontSize,this.ctx.font=this.titleFont;var t=this.ctx.measureText(this.title).width,i=z(this.ctx,this.font,this.labels)+this.fontSize+3,e=g([i,t]);this.width=e+2*this.xPadding;var s=this.height/2;this.y-s<0?this.y=s:this.y+s>this.chart.height&&(this.y=this.chart.height-s),this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(t){var i=this.y-this.height/2+this.yPadding,e=t-1;return 0===t?i+this.titleFontSize/2:i+(1.5*this.fontSize*e+this.fontSize/2)+1.5*this.titleFontSize},draw:function(){if(this.custom)this.custom(this);else{B(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var t=this.ctx;t.fillStyle=this.fillColor,t.fill(),t.closePath(),t.textAlign="left",t.textBaseline="middle",t.fillStyle=this.titleTextColor,t.font=this.titleFont,t.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),t.font=this.font,s.each(this.labels,function(i,e){t.fillStyle=this.textColor,t.fillText(i,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(e+1)),t.fillStyle=this.legendColorBackground,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize),t.fillStyle=this.legendColors[e].fill,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}}),e.Scale=e.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}));this.yLabelWidth=this.display&&this.showLabels?z(this.ctx,this.font,this.yLabels):0},addXLabel:function(t){this.xLabels.push(t),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},fit:function(){this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,this.startPoint+=this.padding,this.endPoint-=this.padding;var t,i=this.endPoint-this.startPoint;for(this.calculateYRange(i),this.buildYLabels(),this.calculateXLabelRotation();i>this.endPoint-this.startPoint;)i=this.endPoint-this.startPoint,t=this.yLabelWidth,this.calculateYRange(i),this.buildYLabels(),t<this.yLabelWidth&&this.calculateXLabelRotation()},calculateXLabelRotation:function(){this.ctx.font=this.font;var t,i,e=this.ctx.measureText(this.xLabels[0]).width,s=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width;if(this.xScalePaddingRight=s/2+3,this.xScalePaddingLeft=e/2>this.yLabelWidth+10?e/2:this.yLabelWidth+10,this.xLabelRotation=0,this.display){var n,o=z(this.ctx,this.font,this.xLabels);this.xLabelWidth=o;for(var a=Math.floor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>a&&0===this.xLabelRotation||this.xLabelWidth>a&&this.xLabelRotation<=90&&this.xLabelRotation>0;)n=Math.cos(S(this.xLabelRotation)),t=n*e,i=n*s,t+this.fontSize/2>this.yLabelWidth+8&&(this.xScalePaddingLeft=t+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=n*o;this.xLabelRotation>0&&(this.endPoint-=Math.sin(S(this.xLabelRotation))*o+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},calculateYRange:c,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(t){var i=this.drawingArea()/(this.min-this.max);return this.endPoint-i*(t-this.min)},calculateX:function(t){var i=(this.xLabelRotation>0,this.width-(this.xScalePaddingLeft+this.xScalePaddingRight)),e=i/Math.max(this.valuesCount-(this.offsetGridLines?0:1),1),s=e*t+this.xScalePaddingLeft;return this.offsetGridLines&&(s+=e/2),Math.round(s)},update:function(t){s.extend(this,t),this.fit()},draw:function(){var t=this.ctx,i=(this.endPoint-this.startPoint)/this.steps,e=Math.round(this.xScalePaddingLeft);this.display&&(t.fillStyle=this.textColor,t.font=this.font,n(this.yLabels,function(n,o){var a=this.endPoint-i*o,h=Math.round(a),l=this.showHorizontalLines;t.textAlign="right",t.textBaseline="middle",this.showLabels&&t.fillText(n,e-10,a),0!==o||l||(l=!0),l&&t.beginPath(),o>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),h+=s.aliasPixel(t.lineWidth),l&&(t.moveTo(e,h),t.lineTo(this.width,h),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(e-5,h),t.lineTo(e,h),t.stroke(),t.closePath()},this),n(this.xLabels,function(i,e){var s=this.calculateX(e)+x(this.lineWidth),n=this.calculateX(e-(this.offsetGridLines?.5:0))+x(this.lineWidth),o=this.xLabelRotation>0,a=this.showVerticalLines;0!==e||a||(a=!0),a&&t.beginPath(),e>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),a&&(t.moveTo(n,this.endPoint),t.lineTo(n,this.startPoint-3),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(n,this.endPoint),t.lineTo(n,this.endPoint+5),t.stroke(),t.closePath(),t.save(),t.translate(s,o?this.endPoint+12:this.endPoint+8),t.rotate(-1*S(this.xLabelRotation)),t.font=this.font,t.textAlign=o?"right":"center",t.textBaseline=o?"middle":"top",t.fillText(i,0,0),t.restore()},this))}}),e.RadialScale=e.Element.extend({initialize:function(){this.size=m([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(t){var i=this.drawingArea/(this.max-this.min);return(t-this.min)*i},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}))},getCircumference:function(){return 2*Math.PI/this.valuesCount},setScaleSize:function(){var t,i,e,s,n,o,a,h,l,r,c,u,d=m([this.height/2-this.pointLabelFontSize-5,this.width/2]),p=this.width,g=0;for(this.ctx.font=W(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),i=0;i<this.valuesCount;i++)t=this.getPointPosition(i,d),e=this.ctx.measureText(C(this.templateString,{value:this.labels[i]})).width+5,0===i||i===this.valuesCount/2?(s=e/2,t.x+s>p&&(p=t.x+s,n=i),t.x-s<g&&(g=t.x-s,a=i)):i<this.valuesCount/2?t.x+e>p&&(p=t.x+e,n=i):i>this.valuesCount/2&&t.x-e<g&&(g=t.x-e,a=i);l=g,r=Math.ceil(p-this.width),o=this.getIndexAngle(n),h=this.getIndexAngle(a),c=r/Math.sin(o+Math.PI/2),u=l/Math.sin(h+Math.PI/2),c=f(c)?c:0,u=f(u)?u:0,this.drawingArea=d-(u+c)/2,this.setCenterPoint(u,c)},setCenterPoint:function(t,i){var e=this.width-i-this.drawingArea,s=t+this.drawingArea;this.xCenter=(s+e)/2,this.yCenter=this.height/2},getIndexAngle:function(t){var i=2*Math.PI/this.valuesCount;return t*i-Math.PI/2},getPointPosition:function(t,i){var e=this.getIndexAngle(t);return{x:Math.cos(e)*i+this.xCenter,y:Math.sin(e)*i+this.yCenter}},draw:function(){if(this.display){var t=this.ctx;if(n(this.yLabels,function(i,e){if(e>0){var s,n=e*(this.drawingArea/this.steps),o=this.yCenter-n;if(this.lineWidth>0)if(t.strokeStyle=this.lineColor,t.lineWidth=this.lineWidth,this.lineArc)t.beginPath(),t.arc(this.xCenter,this.yCenter,n,0,2*Math.PI),t.closePath(),t.stroke();else{t.beginPath();for(var a=0;a<this.valuesCount;a++)s=this.getPointPosition(a,this.calculateCenterOffset(this.min+e*this.stepValue)),0===a?t.moveTo(s.x,s.y):t.lineTo(s.x,s.y);t.closePath(),t.stroke()}if(this.showLabels){if(t.font=W(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var h=t.measureText(i).width;t.fillStyle=this.backdropColor,t.fillRect(this.xCenter-h/2-this.backdropPaddingX,o-this.fontSize/2-this.backdropPaddingY,h+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.fontColor,t.fillText(i,this.xCenter,o)}}},this),!this.lineArc){t.lineWidth=this.angleLineWidth,t.strokeStyle=this.angleLineColor;for(var i=this.valuesCount-1;i>=0;i--){if(this.angleLineWidth>0){var e=this.getPointPosition(i,this.calculateCenterOffset(this.max));t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(e.x,e.y),t.stroke(),t.closePath()}var s=this.getPointPosition(i,this.calculateCenterOffset(this.max)+5);t.font=W(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),t.fillStyle=this.pointLabelFontColor;var o=this.labels.length,a=this.labels.length/2,h=a/2,l=h>i||i>o-h,r=i===h||i===o-h;t.textAlign=0===i?"center":i===a?"center":a>i?"left":"right",t.textBaseline=r?"middle":l?"bottom":"top",t.fillText(this.labels[i],s.x,s.y)}}}}}),s.addEvent(window,"resize",function(){var t;return function(){clearTimeout(t),t=setTimeout(function(){n(e.instances,function(t){t.options.responsive&&t.resize(t.render,!0)})},50)}}()),p?define(function(){return e}):"object"==typeof module&&module.exports&&(module.exports=e),t.Chart=e,e.noConflict=function(){return t.Chart=i,e}}).call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Bar",defaults:s,initialize:function(t){var s=this.options;this.ScaleClass=i.Scale.extend({offsetGridLines:!0,calculateBarX:function(t,i,e){var n=this.calculateBaseWidth(),o=this.calculateX(e)-n/2,a=this.calculateBarWidth(t);return o+a*i+i*s.barDatasetSpacing+a/2},calculateBaseWidth:function(){return this.calculateX(1)-this.calculateX(0)-2*s.barValueSpacing},calculateBarWidth:function(t){var i=this.calculateBaseWidth()-(t-1)*s.barDatasetSpacing;return i/t}}),this.datasets=[],this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getBarsAtEvent(t):[];this.eachBars(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),this.BarClass=i.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,bars:[]};this.datasets.push(s),e.each(i.data,function(e,n){s.bars.push(new this.BarClass({value:e,label:t.labels[n],datasetLabel:i.label,strokeColor:i.strokeColor,fillColor:i.fillColor,highlightFill:i.highlightFill||i.fillColor,highlightStroke:i.highlightStroke||i.strokeColor}))},this)},this),this.buildScale(t.labels),this.BarClass.prototype.base=this.scale.endPoint,this.eachBars(function(t,i,s){e.extend(t,{width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(this.datasets.length,s,i),y:this.scale.endPoint}),t.save()},this),this.render()},update:function(){this.scale.update(),e.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachBars(function(t){t.save()}),this.render()},eachBars:function(t){e.each(this.datasets,function(i,s){e.each(i.bars,t,this,s)},this)},getBarsAtEvent:function(t){for(var i,s=[],n=e.getRelativePosition(t),o=function(t){s.push(t.bars[i])},a=0;a<this.datasets.length;a++)for(i=0;i<this.datasets[a].bars.length;i++)if(this.datasets[a].bars[i].inRange(n.x,n.y))return e.each(this.datasets,o),s;return s},buildScale:function(t){var i=this,s=function(){var t=[];return i.eachBars(function(i){t.push(i.value)}),t},n={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=e.calculateScaleRange(s(),t,this.fontSize,this.beginAtZero,this.integersOnly);e.extend(this,i)},xLabels:t,font:e.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.barShowStroke?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&e.extend(n,{calculateYRange:e.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new this.ScaleClass(n)},addData:function(t,i){e.each(t,function(t,e){this.datasets[e].bars.push(new this.BarClass({value:t,label:i,x:this.scale.calculateBarX(this.datasets.length,e,this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[e].strokeColor,fillColor:this.datasets[e].fillColor}))},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),e.each(this.datasets,function(t){t.bars.shift()},this),this.update()},reflow:function(){e.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});var t=e.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();this.chart.ctx;this.scale.draw(i),e.each(this.datasets,function(t,s){e.each(t.bars,function(t,e){t.hasValue()&&(t.base=this.scale.endPoint,t.transition({x:this.scale.calculateBarX(this.datasets.length,s,e),y:this.scale.calculateY(t.value),width:this.scale.calculateBarWidth(this.datasets.length)},i).draw())},this)},this)}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Doughnut",defaults:s,initialize:function(t){this.segments=[],this.outerRadius=(e.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,this.SegmentArc=i.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2}),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];e.each(this.segments,function(t){t.restore(["fillColor"])}),e.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.calculateTotal(t),e.each(t,function(t,i){this.addData(t,i,!0)},this),this.render()},getSegmentsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.segments,function(t){t.inRange(s.x,s.y)&&i.push(t)},this),i},addData:function(t,i,e){var s=i||this.segments.length;this.segments.splice(s,0,new this.SegmentArc({value:t.value,outerRadius:this.options.animateScale?0:this.outerRadius,innerRadius:this.options.animateScale?0:this.outerRadius/100*this.options.percentageInnerCutout,fillColor:t.color,highlightColor:t.highlight||t.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:1.5*Math.PI,circumference:this.options.animateRotate?0:this.calculateCircumference(t.value),label:t.label})),e||(this.reflow(),this.update())},calculateCircumference:function(t){return 2*Math.PI*(Math.abs(t)/this.total)},calculateTotal:function(t){this.total=0,e.each(t,function(t){this.total+=Math.abs(t.value)},this)},update:function(){this.calculateTotal(this.segments),e.each(this.activeElements,function(t){t.restore(["fillColor"])}),e.each(this.segments,function(t){t.save()}),this.render()},removeData:function(t){var i=e.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},reflow:function(){e.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.outerRadius=(e.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,e.each(this.segments,function(t){t.update({outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout})},this)},draw:function(t){var i=t?t:1;this.clear(),e.each(this.segments,function(t,e){t.transition({circumference:this.calculateCircumference(t.value),outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout},i),t.endAngle=t.startAngle+t.circumference,t.draw(),0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle)},this)}}),i.types.Doughnut.extend({name:"Pie",defaults:e.merge(s,{percentageInnerCutout:0})})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,bezierCurve:!0,bezierCurveTension:.4,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Line",defaults:s,initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx,inRange:function(t){return Math.pow(t-this.x,2)<Math.pow(this.radius+this.hitDetectionRadius,2)}}),this.datasets=[],this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(s),e.each(i.data,function(e,n){s.points.push(new this.PointClass({value:e,label:t.labels[n],datasetLabel:i.label,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this),this.buildScale(t.labels),this.eachPoints(function(t,i){e.extend(t,{x:this.scale.calculateX(i),y:this.scale.endPoint}),t.save()},this)},this),this.render()},update:function(){this.scale.update(),e.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachPoints(function(t){t.save()}),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.datasets,function(t){e.each(t.points,function(t){t.inRange(s.x,s.y)&&i.push(t)})},this),i},buildScale:function(t){var s=this,n=function(){var t=[];return s.eachPoints(function(i){t.push(i.value)}),t},o={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=e.calculateScaleRange(n(),t,this.fontSize,this.beginAtZero,this.integersOnly);e.extend(this,i)},xLabels:t,font:e.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.pointDotRadius+this.options.pointDotStrokeWidth,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&e.extend(o,{calculateYRange:e.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new i.Scale(o)},addData:function(t,i){e.each(t,function(t,e){this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:this.scale.calculateX(this.scale.valuesCount+1),y:this.scale.endPoint,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),e.each(this.datasets,function(t){t.points.shift()},this),this.update()},reflow:function(){var t=e.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();var s=this.chart.ctx,n=function(t){return null!==t.value},o=function(t,i,s){return e.findNextWhere(i,n,s)||t},a=function(t,i,s){return e.findPreviousWhere(i,n,s)||t};this.scale.draw(i),e.each(this.datasets,function(t){var h=e.where(t.points,n);e.each(t.points,function(t,e){t.hasValue()&&t.transition({y:this.scale.calculateY(t.value),x:this.scale.calculateX(e)},i)},this),this.options.bezierCurve&&e.each(h,function(t,i){var s=i>0&&i<h.length-1?this.options.bezierCurveTension:0;t.controlPoints=e.splineCurve(a(t,h,i),t,o(t,h,i),s),t.controlPoints.outer.y>this.scale.endPoint?t.controlPoints.outer.y=this.scale.endPoint:t.controlPoints.outer.y<this.scale.startPoint&&(t.controlPoints.outer.y=this.scale.startPoint),t.controlPoints.inner.y>this.scale.endPoint?t.controlPoints.inner.y=this.scale.endPoint:t.controlPoints.inner.y<this.scale.startPoint&&(t.controlPoints.inner.y=this.scale.startPoint)},this),s.lineWidth=this.options.datasetStrokeWidth,s.strokeStyle=t.strokeColor,s.beginPath(),e.each(h,function(t,i){if(0===i)s.moveTo(t.x,t.y);else if(this.options.bezierCurve){var e=a(t,h,i);s.bezierCurveTo(e.controlPoints.outer.x,e.controlPoints.outer.y,t.controlPoints.inner.x,t.controlPoints.inner.y,t.x,t.y)}else s.lineTo(t.x,t.y)},this),s.stroke(),this.options.datasetFill&&h.length>0&&(s.lineTo(h[h.length-1].x,this.scale.endPoint),s.lineTo(h[0].x,this.scale.endPoint),s.fillStyle=t.fillColor,s.closePath(),s.fill()),e.each(h,function(t){t.draw()})},this)}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBeginAtZero:!0,scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,scaleShowLine:!0,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"PolarArea",defaults:s,initialize:function(t){this.segments=[],this.SegmentArc=i.Arc.extend({showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,ctx:this.chart.ctx,innerRadius:0,x:this.chart.width/2,y:this.chart.height/2}),this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,lineArc:!0,width:this.chart.width,height:this.chart.height,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,valuesCount:t.length}),this.updateScaleRange(t),this.scale.update(),e.each(t,function(t,i){this.addData(t,i,!0)},this),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];e.each(this.segments,function(t){t.restore(["fillColor"])}),e.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.render()},getSegmentsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.segments,function(t){t.inRange(s.x,s.y)&&i.push(t)},this),i},addData:function(t,i,e){var s=i||this.segments.length;this.segments.splice(s,0,new this.SegmentArc({fillColor:t.color,highlightColor:t.highlight||t.color,label:t.label,value:t.value,outerRadius:this.options.animateScale?0:this.scale.calculateCenterOffset(t.value),circumference:this.options.animateRotate?0:this.scale.getCircumference(),startAngle:1.5*Math.PI})),e||(this.reflow(),this.update())},removeData:function(t){var i=e.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},calculateTotal:function(t){this.total=0,e.each(t,function(t){this.total+=t.value},this),this.scale.valuesCount=this.segments.length},updateScaleRange:function(t){var i=[];e.each(t,function(t){i.push(t.value)});var s=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,s,{size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2})},update:function(){this.calculateTotal(this.segments),e.each(this.segments,function(t){t.save()}),this.reflow(),this.render()},reflow:function(){e.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.updateScaleRange(this.segments),this.scale.update(),e.extend(this.scale,{xCenter:this.chart.width/2,yCenter:this.chart.height/2}),e.each(this.segments,function(t){t.update({outerRadius:this.scale.calculateCenterOffset(t.value)})},this)},draw:function(t){var i=t||1;this.clear(),e.each(this.segments,function(t,e){t.transition({circumference:this.scale.getCircumference(),outerRadius:this.scale.calculateCenterOffset(t.value)},i),t.endAngle=t.startAngle+t.circumference,0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle),t.draw()},this),this.scale.draw()}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers;i.Type.extend({name:"Radar",defaults:{scaleShowLine:!0,angleShowLineOut:!0,scaleShowLabels:!1,scaleBeginAtZero:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:10,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx}),this.datasets=[],this.buildScale(t),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(s),e.each(i.data,function(e,n){var o;this.scale.animation||(o=this.scale.getPointPosition(n,this.scale.calculateCenterOffset(e))),s.points.push(new this.PointClass({value:e,label:t.labels[n],datasetLabel:i.label,x:this.options.animation?this.scale.xCenter:o.x,y:this.options.animation?this.scale.yCenter:o.y,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this)},this),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=e.getRelativePosition(t),s=e.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},i),n=2*Math.PI/this.scale.valuesCount,o=Math.round((s.angle-1.5*Math.PI)/n),a=[];return(o>=this.scale.valuesCount||0>o)&&(o=0),s.distance<=this.scale.drawingArea&&e.each(this.datasets,function(t){a.push(t.points[o])}),a},buildScale:function(t){this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:this.options.angleShowLineOut?this.options.angleLineWidth:0,pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:t.labels,valuesCount:t.datasets[0].data.length}),this.scale.setScaleSize(),this.updateScaleRange(t.datasets),this.scale.buildYLabels()},updateScaleRange:function(t){var i=function(){var i=[];return e.each(t,function(t){t.data?i=i.concat(t.data):e.each(t.points,function(t){i.push(t.value)})}),i}(),s=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,s)},addData:function(t,i){this.scale.valuesCount++,e.each(t,function(t,e){var s=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(t));this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:s.x,y:s.y,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.labels.push(i),this.reflow(),this.update()},removeData:function(){this.scale.valuesCount--,this.scale.labels.shift(),e.each(this.datasets,function(t){t.points.shift()},this),this.reflow(),this.update()},update:function(){this.eachPoints(function(t){t.save()}),this.reflow(),this.render()},reflow:function(){e.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2}),this.updateScaleRange(this.datasets),this.scale.setScaleSize(),this.scale.buildYLabels()},draw:function(t){var i=t||1,s=this.chart.ctx;this.clear(),this.scale.draw(),e.each(this.datasets,function(t){e.each(t.points,function(t,e){t.hasValue()&&t.transition(this.scale.getPointPosition(e,this.scale.calculateCenterOffset(t.value)),i)},this),s.lineWidth=this.options.datasetStrokeWidth,s.strokeStyle=t.strokeColor,s.beginPath(),e.each(t.points,function(t,i){0===i?s.moveTo(t.x,t.y):s.lineTo(t.x,t.y)},this),s.closePath(),s.stroke(),s.fillStyle=t.fillColor,s.fill(),e.each(t.points,function(t){t.hasValue()&&t.draw()})},this)}})}.call(this);
window.Modernizr=function(e,t,n){function r(e){p.cssText=e}function i(e,t){return r(prefixes.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:s(o,"function")?o.bind(r||t):o}return!1}var a="2.6.2",f={},l=t.documentElement,c="modernizr",h=t.createElement(c),p=h.style,d,v={}.toString,m={},g={},y={},b=[],w=b.slice,E,S={}.hasOwnProperty,x;!s(S,"undefined")&&!s(S.call,"undefined")?x=function(e,t){return S.call(e,t)}:x=function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if(typeof t!="function")throw new TypeError;var n=w.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(w.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(w.call(arguments)))};return r}),m.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")};for(var T in m)x(m,T)&&(E=T.toLowerCase(),f[E]=m[T](),b.push((f[E]?"":"no-")+E));return f.addTest=function(e,t){if(typeof e=="object")for(var r in e)x(e,r)&&f.addTest(r,e[r]);else{e=e.toLowerCase();if(f[e]!==n)return f;t=typeof t=="function"?t():t,typeof enableClasses!="undefined"&&enableClasses&&(l.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),h=d=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return typeof e=="string"?e.split(" "):e}function i(e){var t=v[e[p]];return t||(t={},d++,e[p]=d,v[d]=t),t}function s(e,n,r){n||(n=t);if(m)return n.createElement(e);r||(r=i(n));var s;return r.cache[e]?s=r.cache[e].cloneNode():c.test(e)?s=(r.cache[e]=r.createElem(e)).cloneNode():s=r.createElem(e),s.canHaveChildren&&!l.test(e)?r.frag.appendChild(s):s}function o(e,n){e||(e=t);if(m)return e.createDocumentFragment();n=n||i(e);var s=n.frag.cloneNode(),o=0,u=r(),a=u.length;for(;o<a;o++)s.createElement(u[o]);return s}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function a(e){e||(e=t);var r=i(e);return g.shivCSS&&!h&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),m||u(e,r),e}var f=e.html5||{},l=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,c=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h,p="_html5shiv",d=0,v={},m;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,m=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){h=!0,m=!0}})();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:m,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:a,createElement:s,createDocumentFragment:o};e.html5=g,a(t)}(this,t),f._version=a,f}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};




/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["../../../../../../../Users/benjamintanz/Dropbox/11_Property_static/WEB & WP Themes/Canvas/HTML/js/jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});




/*! Magnific Popup - v1.0.0 - 2015-01-03
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["../../../../../../../Users/benjamintanz/Dropbox/11_Property_static/WEB & WP Themes/Canvas/HTML/js/jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",b.ev=c.mainEl&&c.mainEl.length?c.mainEl.eq(0):d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.wrap.css(b.fixedContentPos?{overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}:{top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),b.currTemplate[d]=f?a(f):!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||2!==c.which&&!c.ctrlKey&&!c.metaKey){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});




/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(e){e.flexslider=function(t,a,n){var i=e(t);i.vars=e.extend({},e.flexslider.defaults,a);var s,r=i.vars.namespace,o=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,l=("ontouchstart"in window||o||window.DocumentTouch&&document instanceof DocumentTouch)&&i.vars.touch,c="click"+i.vars.eventNamespace+" touchend"+i.vars.eventNamespace+"  MSPointerUp"+i.vars.eventNamespace,d="",u="vertical"===i.vars.direction,v=i.vars.reverse,p=i.vars.itemWidth>0,m="fade"===i.vars.animation,f=""!==i.vars.asNavFor,g={},h=!0,n="undefined"!=typeof n?n++:0;e.data(t,"flexslider",i),g={init:function(){i.id=n,i.animating=!1,i.currentSlide=parseInt(i.vars.startAt?i.vars.startAt:0,10),isNaN(i.currentSlide)&&(i.currentSlide=0),i.animatingTo=i.currentSlide,i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=i.vars.selector.substr(0,i.vars.selector.search(" ")),i.slides=e(i.vars.selector,i),i.container=e(i.containerSelector,i),i.count=i.slides.length,i.syncExists=e(i.vars.sync).length>0,"slide"===i.vars.animation&&(i.vars.animation="swing"),i.prop=u?"top":"marginLeft",i.args={},i.manualPause=!1,i.stopped=!1,i.started=!1,i.startTimeout=null,i.transitions=!i.vars.video&&!m&&i.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return i.pfx=t[a].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",!0;return!1}(),""!==i.vars.controlsContainer&&(i.controlsContainer=e(i.vars.controlsContainer).length>0&&e(i.vars.controlsContainer)),""!==i.vars.manualControls&&(i.manualControls=e(i.vars.manualControls).length>0&&e(i.vars.manualControls)),i.vars.randomize&&(i.slides.sort(function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),i.setup("init"),i.vars.controlNav&&g.controlNav.setup(),i.vars.directionNav&&g.directionNav.setup(),i.vars.keyboard&&(1===e(i.containerSelector).length||i.vars.multipleKeyboard)&&e(document).bind("keyup"+i.vars.eventNamespace+"-"+i.id,function(e){var t=e.keyCode;if(!i.animating&&(39===t||37===t)){var a=39===t?i.getTarget("next"):37===t?i.getTarget("prev"):!1;i.flexAnimate(a,i.vars.pauseOnAction)}}),i.vars.mousewheel&&i.bind("mousewheel"+i.vars.eventNamespace,function(e,t){e.preventDefault();var a=i.getTarget(0>t?"next":"prev");i.flexAnimate(a,i.vars.pauseOnAction)}),i.vars.pausePlay&&g.pausePlay.setup(),i.vars.slideshow&&i.vars.pauseInvisible&&g.pauseInvisible.init(),i.vars.slideshow&&(i.vars.pauseOnHover&&i.hover(function(){i.manualPlay||i.manualPause||i.pause()},function(){i.manualPause||i.manualPlay||i.stopped||i.play()}),i.vars.pauseInvisible&&g.pauseInvisible.isHidden()||(i.vars.initDelay>0?i.startTimeout=setTimeout(i.play,i.vars.initDelay):i.play())),f&&g.asNav.setup(),l&&i.vars.touch&&g.touch(),(!m||m&&i.vars.smoothHeight)&&e(window).bind("resize"+i.vars.eventNamespace+"-"+i.id+" orientationchange"+i.vars.eventNamespace+"-"+i.id+" focus"+i.vars.eventNamespace+"-"+i.id,g.resize),i.find("img").attr("draggable","false"),setTimeout(function(){i.vars.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(r+"active-slide").eq(i.currentItem).addClass(r+"active-slide"),o?(t._slider=i,i.slides.each(function(){var t=this;t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),t.addEventListener("MSGestureTap",function(t){t.preventDefault();var a=e(this),n=a.index();e(i.vars.asNavFor).data("flexslider").animating||a.hasClass("active")||(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction,!1,!0,!0))})})):i.slides.on(c,function(t){t.preventDefault();var a=e(this),n=a.index(),s=a.offset().left-e(i).scrollLeft();0>=s&&a.hasClass(r+"active-slide")?i.flexAnimate(i.getTarget("prev"),!0):e(i.vars.asNavFor).data("flexslider").animating||a.hasClass(r+"active-slide")||(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){i.manualControls?g.controlNav.setupManual():g.controlNav.setupPaging()},setupPaging:function(){var t,a,n="thumbnails"===i.vars.controlNav?"control-thumbs":"control-paging",s=1;if(i.controlNavScaffold=e('<ol class="'+r+"control-nav "+r+n+'"></ol>'),i.pagingCount>1)for(var o=0;o<i.pagingCount;o++){if(a=i.slides.eq(o),t="thumbnails"===i.vars.controlNav?'<img src="'+a.attr("data-thumb")+'"/>':"<a>"+s+"</a>","thumbnails"===i.vars.controlNav&&!0===i.vars.thumbCaptions){var l=a.attr("data-thumbcaption");""!=l&&void 0!=l&&(t+='<span class="'+r+'caption">'+l+"</span>")}i.controlNavScaffold.append("<li data-animate=\"zoomIn\" data-delay=\""+ s*200 +"\">"+t+"</li>"),s++}i.controlsContainer?e(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),g.controlNav.set(),g.controlNav.active(),i.controlNavScaffold.delegate("a, img",c,function(t){if(t.preventDefault(),""===d||d===t.type){var a=e(this),n=i.controlNav.index(a);a.hasClass(r+"active")||(i.direction=n>i.currentSlide?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction))}""===d&&(d=t.type),g.setToClearWatchedEvent()})},setupManual:function(){i.controlNav=i.manualControls,g.controlNav.active(),i.controlNav.bind(c,function(t){if(t.preventDefault(),""===d||d===t.type){var a=e(this),n=i.controlNav.index(a);a.hasClass(r+"active")||(i.direction=n>i.currentSlide?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction))}""===d&&(d=t.type),g.setToClearWatchedEvent()})},set:function(){var t="thumbnails"===i.vars.controlNav?"img":"a";i.controlNav=e("."+r+"control-nav li "+t,i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(r+"active").eq(i.animatingTo).addClass(r+"active")},update:function(t,a){i.pagingCount>1&&"add"===t?i.controlNavScaffold.append(e("<li><a>"+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(a).closest("li").remove(),g.controlNav.set(),i.pagingCount>1&&i.pagingCount!==i.controlNav.length?i.update(a,t):g.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+r+'direction-nav"><li><a class="'+r+'prev" href="#">'+i.vars.prevText+'</a></li><li><a class="'+r+'next" href="#">'+i.vars.nextText+"</a></li></ul>");i.controlsContainer?(e(i.controlsContainer).append(t),i.directionNav=e("."+r+"direction-nav li a",i.controlsContainer)):(i.append(t),i.directionNav=e("."+r+"direction-nav li a",i)),g.directionNav.update(),i.directionNav.bind(c,function(t){t.preventDefault();var a;(""===d||d===t.type)&&(a=i.getTarget(e(this).hasClass(r+"next")?"next":"prev"),i.flexAnimate(a,i.vars.pauseOnAction)),""===d&&(d=t.type),g.setToClearWatchedEvent()})},update:function(){var e=r+"disabled";1===i.pagingCount?i.directionNav.addClass(e).attr("tabindex","-1"):i.vars.animationLoop?i.directionNav.removeClass(e).removeAttr("tabindex"):0===i.animatingTo?i.directionNav.removeClass(e).filter("."+r+"prev").addClass(e).attr("tabindex","-1"):i.animatingTo===i.last?i.directionNav.removeClass(e).filter("."+r+"next").addClass(e).attr("tabindex","-1"):i.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+r+'pauseplay"><a></a></div>');i.controlsContainer?(i.controlsContainer.append(t),i.pausePlay=e("."+r+"pauseplay a",i.controlsContainer)):(i.append(t),i.pausePlay=e("."+r+"pauseplay a",i)),g.pausePlay.update(i.vars.slideshow?r+"pause":r+"play"),i.pausePlay.bind(c,function(t){t.preventDefault(),(""===d||d===t.type)&&(e(this).hasClass(r+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())),""===d&&(d=t.type),g.setToClearWatchedEvent()})},update:function(e){"play"===e?i.pausePlay.removeClass(r+"pause").addClass(r+"play").html(i.vars.playText):i.pausePlay.removeClass(r+"play").addClass(r+"pause").html(i.vars.pauseText)}},touch:function(){function e(e){i.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(i.pause(),g=u?i.h:i.w,S=Number(new Date),b=e.touches[0].pageX,x=e.touches[0].pageY,f=p&&v&&i.animatingTo===i.last?0:p&&v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:v?(i.last-i.currentSlide+i.cloneOffset)*g:(i.currentSlide+i.cloneOffset)*g,c=u?x:b,d=u?b:x,t.addEventListener("touchmove",a,!1),t.addEventListener("touchend",n,!1))}function a(e){b=e.touches[0].pageX,x=e.touches[0].pageY,h=u?c-x:c-b,y=u?Math.abs(h)<Math.abs(b-d):Math.abs(h)<Math.abs(x-d);var t=500;(!y||Number(new Date)-S>t)&&(e.preventDefault(),!m&&i.transitions&&(i.vars.animationLoop||(h/=0===i.currentSlide&&0>h||i.currentSlide===i.last&&h>0?Math.abs(h)/g+2:1),i.setProps(f+h,"setTouch")))}function n(){if(t.removeEventListener("touchmove",a,!1),i.animatingTo===i.currentSlide&&!y&&null!==h){var e=v?-h:h,s=i.getTarget(e>0?"next":"prev");i.canAdvance(s)&&(Number(new Date)-S<550&&Math.abs(e)>50||Math.abs(e)>g/2)?i.flexAnimate(s,i.vars.pauseOnAction):m||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}t.removeEventListener("touchend",n,!1),c=null,d=null,h=null,f=null}function s(e){e.stopPropagation(),i.animating?e.preventDefault():(i.pause(),t._gesture.addPointer(e.pointerId),N=0,g=u?i.h:i.w,S=Number(new Date),f=p&&v&&i.animatingTo===i.last?0:p&&v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:v?(i.last-i.currentSlide+i.cloneOffset)*g:(i.currentSlide+i.cloneOffset)*g)}function r(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;return N+=u?i:n,h=N,y=u?Math.abs(N)<Math.abs(-n):Math.abs(N)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!y||Number(new Date)-S>500)&&(e.preventDefault(),!m&&a.transitions&&(a.vars.animationLoop||(h=N/(0===a.currentSlide&&0>N||a.currentSlide===a.last&&N>0?Math.abs(N)/g+2:1)),a.setProps(f+h,"setTouch"))))}}function l(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==h){var a=v?-h:h,n=t.getTarget(a>0?"next":"prev");t.canAdvance(n)&&(Number(new Date)-S<550&&Math.abs(a)>50||Math.abs(a)>g/2)?t.flexAnimate(n,t.vars.pauseOnAction):m||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}c=null,d=null,h=null,f=null,N=0}}var c,d,f,g,h,S,y=!1,b=0,x=0,N=0;o?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",s,!1),t._slider=i,t.addEventListener("MSGestureChange",r,!1),t.addEventListener("MSGestureEnd",l,!1)):t.addEventListener("touchstart",e,!1)},resize:function(){!i.animating&&i.is(":visible")&&(p||i.doMath(),m?g.smoothHeight():p?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):u?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(i.vars.smoothHeight&&g.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(e){if(!u||m){var t=m?i:i.viewport;e?t.animate({height:i.slides.eq(i.animatingTo).height()},e):t.height(i.slides.eq(i.animatingTo).height())}},sync:function(t){var a=e(i.vars.sync).data("flexslider"),n=i.animatingTo;switch(t){case"animate":a.flexAnimate(n,i.vars.pauseOnAction,!1,!0);break;case"play":a.playing||a.asNav||a.play();break;case"pause":a.pause()}},uniqueID:function(t){return t.find("[id]").each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")}),t},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(g.pauseInvisible.visProp=e[t]+"Hidden");if(g.pauseInvisible.visProp){var a=g.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(a,function(){g.pauseInvisible.isHidden()?i.startTimeout?clearTimeout(i.startTimeout):i.pause():i.started?i.play():i.vars.initDelay>0?setTimeout(i.play,i.vars.initDelay):i.play()})}},isHidden:function(){return document[g.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(s),s=setTimeout(function(){d=""},3e3)}},i.flexAnimate=function(t,a,n,s,o){if(i.vars.animationLoop||t===i.currentSlide||(i.direction=t>i.currentSlide?"next":"prev"),f&&1===i.pagingCount&&(i.direction=i.currentItem<t?"next":"prev"),!i.animating&&(i.canAdvance(t,o)||n)&&i.is(":visible")){if(f&&s){var c=e(i.vars.asNavFor).data("flexslider");if(i.atEnd=0===t||t===i.count-1,c.flexAnimate(t,!0,!1,!0,o),i.direction=i.currentItem<t?"next":"prev",c.direction=i.direction,Math.ceil((t+1)/i.visible)-1===i.currentSlide||0===t)return i.currentItem=t,i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),!1;i.currentItem=t,i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),t=Math.floor(t/i.visible)}if(i.animating=!0,i.animatingTo=t,a&&i.pause(),i.vars.before(i),i.syncExists&&!o&&g.sync("animate"),i.vars.controlNav&&g.controlNav.active(),p||i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),i.atEnd=0===t||t===i.last,i.vars.directionNav&&g.directionNav.update(),t===i.last&&(i.vars.end(i),i.vars.animationLoop||i.pause()),m)l?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}),i.slides.eq(t).css({opacity:1,zIndex:2}),i.wrapup(y)):(i.slides.eq(i.currentSlide).css({zIndex:1}).animate({opacity:0},i.vars.animationSpeed,i.vars.easing),i.slides.eq(t).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing,i.wrapup));else{var d,h,S,y=u?i.slides.filter(":first").height():i.computedW;p?(d=i.vars.itemMargin,S=(i.itemW+d)*i.move*i.animatingTo,h=S>i.limit&&1!==i.visible?i.limit:S):h=0===i.currentSlide&&t===i.count-1&&i.vars.animationLoop&&"next"!==i.direction?v?(i.count+i.cloneOffset)*y:0:i.currentSlide===i.last&&0===t&&i.vars.animationLoop&&"prev"!==i.direction?v?0:(i.count+1)*y:v?(i.count-1-t+i.cloneOffset)*y:(t+i.cloneOffset)*y,i.setProps(h,"",i.vars.animationSpeed),i.transitions?(i.vars.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd"+i.vars.eventNamespace+" transitionend"+i.vars.eventNamespace),i.container.bind("webkitTransitionEnd"+i.vars.eventNamespace+" transitionend"+i.vars.eventNamespace,function(){i.wrapup(y)})):i.container.animate(i.args,i.vars.animationSpeed,i.vars.easing,function(){i.wrapup(y)})}i.vars.smoothHeight&&g.smoothHeight(i.vars.animationSpeed)}},i.wrapup=function(e){m||p||(0===i.currentSlide&&i.animatingTo===i.last&&i.vars.animationLoop?i.setProps(e,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&i.vars.animationLoop&&i.setProps(e,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,i.vars.after(i)},i.animateSlides=function(){!i.animating&&h&&i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.animatedSlides=null,i.playing=!1,i.vars.pausePlay&&g.pausePlay.update("play"),i.syncExists&&g.sync("pause")},i.play=function(){i.playing&&clearInterval(i.animatedSlides),i.animatedSlides=i.animatedSlides||setInterval(i.animateSlides,i.vars.slideshowSpeed),i.started=i.playing=!0,i.vars.pausePlay&&g.pausePlay.update("pause"),i.syncExists&&g.sync("play")},i.stop=function(){i.pause(),i.stopped=!0},i.canAdvance=function(e,t){var a=f?i.pagingCount-1:i.last;return t?!0:f&&i.currentItem===i.count-1&&0===e&&"prev"===i.direction?!0:f&&0===i.currentItem&&e===i.pagingCount-1&&"next"!==i.direction?!1:e!==i.currentSlide||f?i.vars.animationLoop?!0:i.atEnd&&0===i.currentSlide&&e===a&&"next"!==i.direction?!1:i.atEnd&&i.currentSlide===a&&0===e&&"next"===i.direction?!1:!0:!1},i.getTarget=function(e){return i.direction=e,"next"===e?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(e,t,a){var n=function(){var a=e?e:(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo,n=function(){if(p)return"setTouch"===t?e:v&&i.animatingTo===i.last?0:v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:a;switch(t){case"setTotal":return v?(i.count-1-i.currentSlide+i.cloneOffset)*e:(i.currentSlide+i.cloneOffset)*e;case"setTouch":return v?e:e;case"jumpEnd":return v?e:i.count*e;case"jumpStart":return v?i.count*e:e;default:return e}}();return-1*n+"px"}();i.transitions&&(n=u?"translate3d(0,"+n+",0)":"translate3d("+n+",0,0)",a=void 0!==a?a/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",a),i.container.css("transition-duration",a)),i.args[i.prop]=n,(i.transitions||void 0===a)&&i.container.css(i.args),i.container.css("transform",n)},i.setup=function(t){if(m)i.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(l?i.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2}):i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing)),i.vars.smoothHeight&&g.smoothHeight();else{var a,n;"init"===t&&(i.viewport=e('<div class="'+r+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,v&&(n=e.makeArray(i.slides).reverse(),i.slides=e(n),i.container.empty().append(i.slides))),i.vars.animationLoop&&!p&&(i.cloneCount=2,i.cloneOffset=1,"init"!==t&&i.container.find(".clone").remove(),i.container.append(i.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(i.slides.last().clone().addClass("clone").attr("aria-hidden","true")),g.uniqueID(i.slides.first().clone().addClass("clone")).appendTo(i.container),g.uniqueID(i.slides.last().clone().addClass("clone")).prependTo(i.container)),i.newSlides=e(i.vars.selector,i),a=v?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,u&&!p?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(a*i.h,"init")},"init"===t?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(a*i.computedW,"init"),setTimeout(function(){i.doMath(),i.newSlides.css({width:i.computedW,"float":"left",display:"block"}),i.vars.smoothHeight&&g.smoothHeight()},"init"===t?100:0))}p||i.slides.removeClass(r+"active-slide").eq(i.currentSlide).addClass(r+"active-slide"),i.vars.init(i)},i.doMath=function(){var e=i.slides.first(),t=i.vars.itemMargin,a=i.vars.minItems,n=i.vars.maxItems;i.w=void 0===i.viewport?i.width():i.viewport.width(),i.h=e.height(),i.boxPadding=e.outerWidth()-e.width(),p?(i.itemT=i.vars.itemWidth+t,i.minW=a?a*i.itemT:i.w,i.maxW=n?n*i.itemT-t:i.w,i.itemW=i.minW>i.w?(i.w-t*(a-1))/a:i.maxW<i.w?(i.w-t*(n-1))/n:i.vars.itemWidth>i.w?i.w:i.vars.itemWidth,i.visible=Math.floor(i.w/i.itemW),i.move=i.vars.move>0&&i.vars.move<i.visible?i.vars.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:i.vars.itemWidth>i.w?i.itemW*(i.count-1)+t*(i.count-1):(i.itemW+t)*i.count-i.w-t):(i.itemW=i.w,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding},i.update=function(e,t){i.doMath(),p||(e<i.currentSlide?i.currentSlide+=1:e<=i.currentSlide&&0!==e&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),i.vars.controlNav&&!i.manualControls&&("add"===t&&!p||i.pagingCount>i.controlNav.length?g.controlNav.update("add"):("remove"===t&&!p||i.pagingCount<i.controlNav.length)&&(p&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),g.controlNav.update("remove",i.last))),i.vars.directionNav&&g.directionNav.update()},i.addSlide=function(t,a){var n=e(t);i.count+=1,i.last=i.count-1,u&&v?void 0!==a?i.slides.eq(i.count-a).after(n):i.container.prepend(n):void 0!==a?i.slides.eq(a).before(n):i.container.append(n),i.update(a,"add"),i.slides=e(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.added(i)},i.removeSlide=function(t){var a=isNaN(t)?i.slides.index(e(t)):t;i.count-=1,i.last=i.count-1,isNaN(t)?e(t,i.slides).remove():u&&v?i.slides.eq(i.last).remove():i.slides.eq(t).remove(),i.doMath(),i.update(a,"remove"),i.slides=e(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.removed(i)},i.destroy=function(){var t="."+i.vars.namespace;i.vars.controlNav&&i.controlNav.closest(t+"control-nav").remove(),i.vars.directionNav&&i.directionNav.closest(t+"direction-nav").remove(),i.vars.pausePlay&&i.pausePlay.closest(t+"pauseplay").remove(),i.find(".clone").remove(),i.unbind(i.vars.eventNamespace),"fade"!=i.vars.animation&&i.container.unwrap(),i.container.removeAttr("style"),i.container.unbind(i.vars.eventNamespace),i.slides.removeAttr("style"),i.slides.filter(t+"active-slide").removeClass(i.vars.namespace+"active-slide"),i.slides.unbind(i.vars.eventNamespace),e(document).unbind(i.vars.eventNamespace+"-"+i.id),e(window).unbind(i.vars.eventNamespace+"-"+i.id),i.stop(),i.removeData("flexslider")},g.init()},e(window).blur(function(){focused=!1}).focus(function(){focused=!0}),e.flexslider.defaults={namespace:"flex-",eventNamespace:".flexslider",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};var t=0;e.fn.flexslider=function(a){if(void 0===a&&(a={}),"object"==typeof a)return this.each(function(){var n=e(this),i=a.selector?a.selector:".slides > li",s=n.find(i);1===s.length&&a.allowOneSlide===!0||0===s.length?(s.fadeIn(400),a.start&&a.start(n)):void 0===n.data("flexslider")&&new e.flexslider(this,a,t++)});var n=e(this).data("flexslider");switch(a){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;case"destroy":n.destroy();break;default:"number"==typeof a&&n.flexAnimate(a,!0)}}}(jQuery);




// jQuery Paginate v0.4
;(function($){$.fn.pajinate=function(options){var current_page="current_page";var items_per_page="items_per_page";var meta;var defaults={item_container_id:".content",items_per_page:10,nav_panel_id:".page_navigation",nav_info_id:".info_text",num_page_links_to_display:20,start_page:0,wrap_around:false,nav_label_first:"First",nav_label_prev:"Prev",nav_label_next:"Next",nav_label_last:"Last",nav_order:["first","prev","num","next","last"],nav_label_info:"Showing {0}-{1} of {2} results",show_first_last:true,abort_on_small_lists:false,jquery_ui:false,jquery_ui_active:"ui-state-highlight",jquery_ui_default:"ui-state-default",jquery_ui_disabled:"ui-state-disabled"};var options=$.extend(defaults,options);var $item_container;var $page_container;var $items;var $nav_panels;var total_page_no_links;var jquery_ui_default_class=options.jquery_ui?options.jquery_ui_default:"";var jquery_ui_active_class=options.jquery_ui?options.jquery_ui_active:"";var jquery_ui_disabled_class=options.jquery_ui?options.jquery_ui_disabled:"";return this.each(function(){$page_container=$(this);$item_container=$(this).find(options.item_container_id);$items=$page_container.find(options.item_container_id).children();if(options.abort_on_small_lists&&options.items_per_page>=$items.size()){return $page_container}meta=$page_container;meta.data(current_page,0);meta.data(items_per_page,options.items_per_page);var total_items=$item_container.children().size();var number_of_pages=Math.ceil(total_items/options.items_per_page);var more='<li class="disabled ellipse more"><span>...</span></li>';var less='<li class="disabled ellipse less"><span>...</span></li>';var first=!options.show_first_last?"":'<li class="first_link '+jquery_ui_default_class+'"><a href="#">'+options.nav_label_first+"</a></li>";var last=!options.show_first_last?"":'<li class="last_link '+jquery_ui_default_class+'"><a href="#">'+options.nav_label_last+"</a></li>";var navigation_html="";for(var i=0;i<options.nav_order.length;i++){switch(options.nav_order[i]){case"first":navigation_html+=first;break;case"last":navigation_html+=last;break;case"next":navigation_html+='<li class="next_link '+jquery_ui_default_class+'"><a href="#">'+options.nav_label_next+"</a></li>";break;case"prev":navigation_html+='<li class="previous_link '+jquery_ui_default_class+'"><a href="#">'+options.nav_label_prev+"</a></li>";break;case"num":navigation_html+=less;var current_link=0;while(number_of_pages>current_link){navigation_html+='<li class="page_link '+jquery_ui_default_class+'" longdesc="'+current_link+'"><a href="#">'+(current_link+1)+"</a></li>";current_link++}navigation_html+=more;break;default:break}}$nav_panels=$page_container.find(options.nav_panel_id);$nav_panels.html(navigation_html).each(function(){$(this).find(".page_link:first").addClass("first");$(this).find(".page_link:last").addClass("last")});$nav_panels.children(".ellipse").hide();$nav_panels.find(".previous_link").next().next().addClass("active "+jquery_ui_active_class);$items.hide();$items.slice(0,meta.data(items_per_page)).show();total_page_no_links=$page_container.find(options.nav_panel_id+":first").children(".page_link").size();options.num_page_links_to_display=Math.min(options.num_page_links_to_display,total_page_no_links);$nav_panels.children(".page_link").hide();$nav_panels.each(function(){$(this).children(".page_link").slice(0,options.num_page_links_to_display).show()});$page_container.find(".first_link").click(function(e){e.preventDefault();movePageNumbersRight($(this),0);gotopage(0)});$page_container.find(".last_link").click(function(e){e.preventDefault();var lastPage=total_page_no_links-1;movePageNumbersLeft($(this),lastPage);gotopage(lastPage)});$page_container.find(".previous_link").click(function(e){e.preventDefault();showPrevPage($(this))});$page_container.find(".next_link").click(function(e){e.preventDefault();showNextPage($(this))});$page_container.find(".page_link").click(function(e){e.preventDefault();gotopage($(this).attr("longdesc"))});gotopage(parseInt(options.start_page));toggleMoreLess();if(!options.wrap_around){tagNextPrev()}});function showPrevPage(e){new_page=parseInt(meta.data(current_page))-1;if($(e).siblings(".active").prev(".page_link").length==true){movePageNumbersRight(e,new_page);gotopage(new_page)}else{if(options.wrap_around){gotopage(total_page_no_links-1)}}}function showNextPage(e){new_page=parseInt(meta.data(current_page))+1;if($(e).siblings(".active").next(".page_link").length==true){movePageNumbersLeft(e,new_page);gotopage(new_page)}else{if(options.wrap_around){gotopage(0)}}}function gotopage(page_num){page_num=parseInt(page_num,10);var ipp=parseInt(meta.data(items_per_page));start_from=page_num*ipp;end_on=start_from+ipp;var items=$items.hide().slice(start_from,end_on);items.fadeIn(700);$page_container.find(options.nav_panel_id).children(".page_link[longdesc="+page_num+"]").addClass("active "+jquery_ui_active_class).siblings(".active").removeClass("active "+jquery_ui_active_class);meta.data(current_page,page_num);var $current_page=parseInt(meta.data(current_page)+1);var total_items=$item_container.children().size();var $number_of_pages=Math.ceil(total_items/options.items_per_page);$page_container.find(options.nav_info_id).html(options.nav_label_info.replace("{0}",start_from+1).replace("{1}",start_from+items.length).replace("{2}",$items.length).replace("{3}",$current_page).replace("{4}",$number_of_pages));toggleMoreLess();tagNextPrev();if(typeof(options.onPageDisplayed)!=="undefined"){options.onPageDisplayed.call(this,page_num+1)}}function movePageNumbersLeft(e,new_p){var new_page=new_p;var $current_active_link=$(e).siblings(".active");if($current_active_link.siblings(".page_link[longdesc="+new_page+"]").css("display")=="none"){$nav_panels.each(function(){$(this).children(".page_link").hide().slice(parseInt(new_page-options.num_page_links_to_display+1),new_page+1).show()})}}function movePageNumbersRight(e,new_p){var new_page=new_p;var $current_active_link=$(e).siblings(".active");if($current_active_link.siblings(".page_link[longdesc="+new_page+"]").css("display")=="none"){$nav_panels.each(function(){$(this).children(".page_link").hide().slice(new_page,new_page+parseInt(options.num_page_links_to_display)).show()})}}function toggleMoreLess(){}function tagNextPrev(){if($nav_panels.children(".last").hasClass("active")){$nav_panels.children(".next_link").add(".last_link").addClass("no_more "+jquery_ui_disabled_class)}else{$nav_panels.children(".next_link").add(".last_link").removeClass("no_more "+jquery_ui_disabled_class)}if($nav_panels.children(".first").hasClass("active")){$nav_panels.children(".previous_link").add(".first_link").addClass("no_more "+jquery_ui_disabled_class)}else{$nav_panels.children(".previous_link").add(".first_link").removeClass("no_more "+jquery_ui_disabled_class)}}}})(jQuery);



/*!
   --------------------------------
   Infinite Scroll
   --------------------------------
   + https://github.com/paulirish/infinite-scroll
   + version 2.0.2
   + Copyright 2011/12 Paul Irish & Luke Shumard
   + Licensed under the MIT license

   + Documentation: http://infinite-scroll.com/
*/
(function(e,t,n){"use strict";t.infinitescroll=function(n,r,i){this.element=t(i);if(!this._create(n,r)){this.failed=true}};t.infinitescroll.defaults={loading:{finished:n,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:n},state:{isDuringAjax:false,isInvalidPage:false,isDestroyed:false,isDone:false,isPaused:false,isBeyondMaxPage:false,currPage:1},debug:false,behavior:n,binder:t(e),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:false,pathParse:n,dataType:"html",appendCallback:true,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:n,path:n,prefill:false,maxPage:n};t.infinitescroll.prototype={_binding:function(t){var r=this,i=r.options;i.v="2.0b2.120520";if(!!i.behavior&&this["_binding_"+i.behavior]!==n){this["_binding_"+i.behavior].call(this);return}if(t!=="bind"&&t!=="unbind"){this._debug("Binding value  "+t+" not valid");return false}if(t==="unbind"){this.options.binder.unbind("smartscroll.infscr."+r.options.infid)}else{this.options.binder[t]("smartscroll.infscr."+r.options.infid,function(){r.scroll()})}this._debug("Binding",t)},_create:function(i,s){var o=t.extend(true,{},t.infinitescroll.defaults,i);this.options=o;var u=t(e);var a=this;if(!a._validate(i)){return false}var f=t(o.nextSelector).attr("href");if(!f){this._debug("Navigation selector not found");return false}o.path=o.path||this._determinepath(f);o.contentSelector=o.contentSelector||this.element;o.loading.selector=o.loading.selector||o.contentSelector;o.loading.msg=o.loading.msg||t('<div id="infscr-loading"><img alt="Loading..." src="'+o.loading.img+'" /><div>'+o.loading.msgText+"</div></div>");(new Image).src=o.loading.img;if(o.pixelsFromNavToBottom===n){o.pixelsFromNavToBottom=t(document).height()-t(o.navSelector).offset().top;this._debug("pixelsFromNavToBottom: "+o.pixelsFromNavToBottom)}var l=this;o.loading.start=o.loading.start||function(){t(o.navSelector).hide();o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed,t.proxy(function(){this.beginAjax(o)},l))};o.loading.finished=o.loading.finished||function(){if(!o.state.isBeyondMaxPage)o.loading.msg.fadeOut(o.loading.speed)};o.callback=function(e,r,i){if(!!o.behavior&&e["_callback_"+o.behavior]!==n){e["_callback_"+o.behavior].call(t(o.contentSelector)[0],r,i)}if(s){s.call(t(o.contentSelector)[0],r,o,i)}if(o.prefill){u.bind("resize.infinite-scroll",e._prefill)}};if(i.debug){if(Function.prototype.bind&&(typeof console==="object"||typeof console==="function")&&typeof console.log==="object"){["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(e){console[e]=this.call(console[e],console)},Function.prototype.bind)}}this._setup();if(o.prefill){this._prefill()}return true},_prefill:function(){function s(){return r.options.contentSelector.height()<=i.height()}var r=this;var i=t(e);this._prefill=function(){if(s()){r.scroll()}i.bind("resize.infinite-scroll",function(){if(s()){i.unbind("resize.infinite-scroll");r.scroll()}})};this._prefill()},_debug:function(){if(true!==this.options.debug){return}if(typeof console!=="undefined"&&typeof console.log==="function"){if(Array.prototype.slice.call(arguments).length===1&&typeof Array.prototype.slice.call(arguments)[0]==="string"){console.log(Array.prototype.slice.call(arguments).toString())}else{console.log(Array.prototype.slice.call(arguments))}}else if(!Function.prototype.bind&&typeof console!=="undefined"&&typeof console.log==="object"){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}},_determinepath:function(t){var r=this.options;if(!!r.behavior&&this["_determinepath_"+r.behavior]!==n){return this["_determinepath_"+r.behavior].call(this,t)}if(!!r.pathParse){this._debug("pathParse manual");return r.pathParse(t,this.options.state.currPage+1)}else if(t.match(/^(.*?)\b2\b(.*?$)/)){t=t.match(/^(.*?)\b2\b(.*?$)/).slice(1)}else if(t.match(/^(.*?)2(.*?$)/)){if(t.match(/^(.*?page=)2(\/.*|$)/)){t=t.match(/^(.*?page=)2(\/.*|$)/).slice(1);return t}t=t.match(/^(.*?)2(.*?$)/).slice(1)}else{if(t.match(/^(.*?page=)1(\/.*|$)/)){t=t.match(/^(.*?page=)1(\/.*|$)/).slice(1);return t}else{this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");r.state.isInvalidPage=true}}this._debug("determinePath",t);return t},_error:function(t){var r=this.options;if(!!r.behavior&&this["_error_"+r.behavior]!==n){this["_error_"+r.behavior].call(this,t);return}if(t!=="destroy"&&t!=="end"){t="unknown"}this._debug("Error",t);if(t==="end"||r.state.isBeyondMaxPage){this._showdonemsg()}r.state.isDone=true;r.state.currPage=1;r.state.isPaused=false;r.state.isBeyondMaxPage=false;this._binding("unbind")},_loadcallback:function(i,s,o){var u=this.options,a=this.options.callback,f=u.state.isDone?"done":!u.appendCallback?"no-append":"append",l;if(!!u.behavior&&this["_loadcallback_"+u.behavior]!==n){this["_loadcallback_"+u.behavior].call(this,i,s);return}switch(f){case"done":this._showdonemsg();return false;case"no-append":if(u.dataType==="html"){s="<div>"+s+"</div>";s=t(s).find(u.itemSelector)}break;case"append":var c=i.children();if(c.length===0){return this._error("end")}l=document.createDocumentFragment();while(i[0].firstChild){l.appendChild(i[0].firstChild)}this._debug("contentSelector",t(u.contentSelector)[0]);t(u.contentSelector)[0].appendChild(l);s=c.get();break}u.loading.finished.call(t(u.contentSelector)[0],u);if(u.animate){var h=t(e).scrollTop()+t(u.loading.msg).height()+u.extraScrollPx+"px";t("html,body").animate({scrollTop:h},800,function(){u.state.isDuringAjax=false})}if(!u.animate){u.state.isDuringAjax=false}a(this,s,o);if(u.prefill){this._prefill()}},_nearbottom:function(){var i=this.options,s=0+t(document).height()-i.binder.scrollTop()-t(e).height();if(!!i.behavior&&this["_nearbottom_"+i.behavior]!==n){return this["_nearbottom_"+i.behavior].call(this)}this._debug("math:",s,i.pixelsFromNavToBottom);return s-i.bufferPx<i.pixelsFromNavToBottom},_pausing:function(t){var r=this.options;if(!!r.behavior&&this["_pausing_"+r.behavior]!==n){this["_pausing_"+r.behavior].call(this,t);return}if(t!=="pause"&&t!=="resume"&&t!==null){this._debug("Invalid argument. Toggling pause value instead")}t=t&&(t==="pause"||t==="resume")?t:"toggle";switch(t){case"pause":r.state.isPaused=true;break;case"resume":r.state.isPaused=false;break;case"toggle":r.state.isPaused=!r.state.isPaused;break}this._debug("Paused",r.state.isPaused);return false},_setup:function(){var t=this.options;if(!!t.behavior&&this["_setup_"+t.behavior]!==n){this["_setup_"+t.behavior].call(this);return}this._binding("bind");return false},_showdonemsg:function(){var r=this.options;if(!!r.behavior&&this["_showdonemsg_"+r.behavior]!==n){this["_showdonemsg_"+r.behavior].call(this);return}r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({opacity:1},2e3,function(){t(this).parent().fadeOut(r.loading.speed)});r.errorCallback.call(t(r.contentSelector)[0],"done")},_validate:function(n){for(var r in n){if(r.indexOf&&r.indexOf("Selector")>-1&&t(n[r]).length===0){this._debug("Your "+r+" found no elements.");return false}}return true},bind:function(){this._binding("bind")},destroy:function(){this.options.state.isDestroyed=true;this.options.loading.finished();return this._error("destroy")},pause:function(){this._pausing("pause")},resume:function(){this._pausing("resume")},beginAjax:function(r){var i=this,s=r.path,o,u,a,f;r.state.currPage++;if(r.maxPage!=n&&r.state.currPage>r.maxPage){r.state.isBeyondMaxPage=true;this.destroy();return}o=t(r.contentSelector).is("table, tbody")?t("<tbody/>"):t("<div/>");u=typeof s==="function"?s(r.state.currPage):s.join(r.state.currPage);i._debug("heading into ajax",u);a=r.dataType==="html"||r.dataType==="json"?r.dataType:"html+callback";if(r.appendCallback&&r.dataType==="html"){a+="+callback"}switch(a){case"html+callback":i._debug("Using HTML via .load() method");o.load(u+" "+r.itemSelector,n,function(t){i._loadcallback(o,t,u)});break;case"html":i._debug("Using "+a.toUpperCase()+" via $.ajax() method");t.ajax({url:u,dataType:r.dataType,complete:function(t,n){f=typeof t.isResolved!=="undefined"?t.isResolved():n==="success"||n==="notmodified";if(f){i._loadcallback(o,t.responseText,u)}else{i._error("end")}}});break;case"json":i._debug("Using "+a.toUpperCase()+" via $.ajax() method");t.ajax({dataType:"json",type:"GET",url:u,success:function(e,t,s){f=typeof s.isResolved!=="undefined"?s.isResolved():t==="success"||t==="notmodified";if(r.appendCallback){if(r.template!==n){var a=r.template(e);o.append(a);if(f){i._loadcallback(o,a)}else{i._error("end")}}else{i._debug("template must be defined.");i._error("end")}}else{if(f){i._loadcallback(o,e,u)}else{i._error("end")}}},error:function(){i._debug("JSON ajax request failed.");i._error("end")}});break}},retrieve:function(r){r=r||null;var i=this,s=i.options;if(!!s.behavior&&this["retrieve_"+s.behavior]!==n){this["retrieve_"+s.behavior].call(this,r);return}if(s.state.isDestroyed){this._debug("Instance is destroyed");return false}s.state.isDuringAjax=true;s.loading.start.call(t(s.contentSelector)[0],s)},scroll:function(){var t=this.options,r=t.state;if(!!t.behavior&&this["scroll_"+t.behavior]!==n){this["scroll_"+t.behavior].call(this);return}if(r.isDuringAjax||r.isInvalidPage||r.isDone||r.isDestroyed||r.isPaused){return}if(!this._nearbottom()){return}this.retrieve()},toggle:function(){this._pausing()},unbind:function(){this._binding("unbind")},update:function(n){if(t.isPlainObject(n)){this.options=t.extend(true,this.options,n)}}};t.fn.infinitescroll=function(n,r){var i=typeof n;switch(i){case"string":var s=Array.prototype.slice.call(arguments,1);this.each(function(){var e=t.data(this,"infinitescroll");if(!e){return false}if(!t.isFunction(e[n])||n.charAt(0)==="_"){return false}e[n].apply(e,s)});break;case"object":this.each(function(){var e=t.data(this,"infinitescroll");if(e){e.update(n)}else{e=new t.infinitescroll(n,r,this);if(!e.failed){t.data(this,"infinitescroll",e)}}});break}return this};var r=t.event,i;r.special.smartscroll={setup:function(){t(this).bind("scroll",r.special.smartscroll.handler)},teardown:function(){t(this).unbind("scroll",r.special.smartscroll.handler)},handler:function(e,n){var r=this,s=arguments;e.type="smartscroll";if(i){clearTimeout(i)}i=setTimeout(function(){t(r).trigger("smartscroll",s)},n==="execAsap"?0:100)}};t.fn.smartscroll=function(e){return e?this.bind("smartscroll",e):this.trigger("smartscroll",["execAsap"])}})(window,jQuery);




/*! jQuery UI - v1.10.3 - 2013-10-16
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.tabs.js, jquery.ui.effect.js, jquery.ui.effect-fade.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),s===e)return o[i]===e?null:o[i];o[i]=s}else{if(s===e)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),k=t.position.getScrollInfo(y),w=(e.collision||"flip").split(" "),D={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=h.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=h.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),D[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),a=i(D.at,p,g),v.left+=a[0],v.top+=a[1],this.each(function(){var n,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),x=u+f+s(this,"marginRight")+k.width,C=d+_+s(this,"marginBottom")+k.height,M=t.extend({},v),T=i(D.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?M.left-=u:"center"===e.my[0]&&(M.left-=u/2),"bottom"===e.my[1]?M.top-=d:"center"===e.my[1]&&(M.top-=d/2),M.left+=T[0],M.top+=T[1],t.support.offsetFractions||(M.left=l(M.left),M.top=l(M.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[w[i]]&&t.ui.position[w[i]][s](M,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:x,collisionHeight:C,offset:[a[0]+T[0],a[1]+T[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(h=function(t){var i=m.left-M.left,s=i+p-u,n=m.top-M.top,a=n+g-d,l={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:M.left,top:M.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(l.horizontal="center"),d>g&&g>r(n+a)&&(l.vertical="middle"),l.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,l)}),c.offset(t.extend(M,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-o-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-o-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-o-a,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(t,e){function i(){return++n}function s(t){return t.hash.length>1&&decodeURIComponent(t.href.replace(a,""))===decodeURIComponent(location.href.replace(a,""))}var n=0,a=/#.*$/;t.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,a){return t(a).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),a=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:a=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,a),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var a,o,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),c=l.attr("aria-controls");s(n)?(a=n.hash,o=e.element.find(e._sanitizeSelector(a))):(r=e._tabId(l),a="#"+r,o=e.element.find(a),o.length||(o=e._createPanel(r),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),c&&l.data("ui-tabs-aria-controls",c),l.attr({"aria-controls":a.substring(1),"aria-labelledby":h}),o.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?t():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():a,newPanel:h};e.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?t():a,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),e),this._toggle(e,c))},_toggle:function(e,i){function s(){a.running=!1,a._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,a=this.tabs.eq(e),o=a.find(".ui-tabs-anchor"),r=this._getPanelForTab(a),h={tab:a,panel:r};s(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(a.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),a.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,a){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:a},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery);(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=h(),n=s._rgba=[];return i=i.toLowerCase(),f(l,function(t,a){var o,r=a.re.exec(i),l=r&&a.parse(r),h=a.space||"rgba";return l?(o=s[h](l),s[c[h].cache]=o[c[h].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=h.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=t.extend(h.prototype,{parse:function(n,o,r,l){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,l],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof h?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=h(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=h(t),n=s._space(),a=c[n],o=0===this.alpha()?h("transparent"):this,r=o[a.cache]||a.to(o._rgba),l=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],h=s[a],c=u[n.type]||{};null!==h&&(null===o?l[a]=h:(c.mod&&(h-o>c.mod/2?o+=c.mod:o-h>c.mod/2&&(o-=c.mod)),l[a]=i((h-o)*e+o,n)))}),this[n](l)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=h(e)._rgba;return h(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),l=Math.min(s,n,a),h=r-l,c=r+l,u=.5*c;return e=l===r?0:s===r?60*(n-a)/h+360:n===r?60*(a-s)/h+120:60*(s-n)/h+240,i=0===h?0:.5>=u?h/c:h/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,l=n.to,c=n.from;h.fn[s]=function(s){if(l&&!this[o]&&(this[o]=l(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=h(c(d)),n[o]=d,n):h(d)},f(a,function(e,i){h.fn[e]||(h.fn[e]=function(n){var a,o=t.type(n),l="alpha"===e?this._hsla?"hsla":"rgba":s,h=this[l](),c=h[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),h[i.idx]=n,this[l](h)))})})}),h.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=h(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(l){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=h(e.elem,i),e.end=h(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},h.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var l=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",h=l.children?o.find("*").addBack():o;h=h.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),h=h.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),h=h.map(function(){var e=this,i=t.Deferred(),s=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,h.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.3",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);(function(t){t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}})(jQuery);




/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.4",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t(s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.4",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));t&&this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),a="string"==typeof e?e:s.slide;n||o.data("bs.carousel",n=new i(this,s)),"number"==typeof e?n.to(e):a?n[a]():s.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.4",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var n="prev"==t?-1:1,s=(i+n)%this.$items.length;return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,o){var n=this.$element.find(".item.active"),s=o||this.getItemForDirection(e,n),a=this.interval,r="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var h=s[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(s)]);p&&p.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,n.addClass(r),s.addClass(r),n.one("bsTransitionEnd",function(){s.removeClass([e,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this};var n=function(i){var o,n=t(this),s=t(n.attr("data-target")||(o=n.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var a=t.extend({},s.data(),n.data()),r=n.attr("data-slide-to");r&&(a.interval=!1),e.call(s,a),r&&s.data("bs.carousel").to(r),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){e&&3===e.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=i(o),s={relatedTarget:this};n.hasClass("open")&&(n.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.4",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=i(n),a=s.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var n=i(o),a=n.hasClass("open");if(!a&&27!=e.which||a&&27==e.which)return 27==e.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find('[role="menu"]'+r+', [role="listbox"]'+r);if(l.length){var h=l.index(e.target);38==e.which&&h>0&&h--,40==e.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.4",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",t,e)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i&&i.$tip&&i.$tip.is(":visible")?void(i.hoverState="in"):(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element);var d=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var f=r,u=this.options.container?t(this.options.container):this.$element.parent(),g=this.getPosition(u);r="bottom"==r&&d.bottom+c>g.bottom?"top":"top"==r&&d.top-c<g.top?"bottom":"right"==r&&d.right+p>g.width?"left":"left"==r&&d.left-p<g.left?"right":r,s.removeClass(f).addClass(r)}var m=this.getCalculatedOffset(r,d,p,c);this.applyPlacement(m,r);var v=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top=e.top+a,e.left=e.left+r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},r=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,r,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.width&&(n.left=a.left+a.width-d)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.4",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof e&&e;n||o.data("bs.affix",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.4",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>n?"top":!1;if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+a?!1:"bottom";var r=null==this.affixed,l=r?n:s.top,h=r?a:e;return null!=i&&i>=n?"top":null!=o&&l+h>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,a=t(document.body).height();"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var r=this.getState(a,e,n,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.4",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(i,o){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i;n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})}e.VERSION="3.3.4",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),n=e.data("target")||e.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(void 0===n[t+1]||e<n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);




/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["../../../../../../../Users/benjamintanz/Dropbox/11_Property_static/WEB & WP Themes/Canvas/HTML/js/jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});
var $ = jQuery.noConflict();

$.fn.inlineStyle = function (prop) {
	return this.prop("style")[$.camelCase(prop)];
};

$.fn.doOnce = function( func ) {
	this.length && func.apply( this );
	return this;
}

$.extend($.infinitescroll.prototype,{
	_setup_portfolioinfiniteitemsloader: function infscr_setup_portfolioinfiniteitemsloader() {
		var opts = this.options,
			instance = this;
		// Bind nextSelector link to retrieve
		$(opts.nextSelector).click(function(e) {
			if (e.which == 1 && !e.metaKey && !e.shiftKey) {
				e.preventDefault();
				instance.retrieve();
			}
		});
		// Define loadingStart to never hide pager
		instance.options.loading.start = function (opts) {
			opts.loading.msg
				.appendTo(opts.loading.selector)
				.show(opts.loading.speed, function () {
					instance.beginAjax(opts);
				});
		}
	},
	_showdonemsg_portfolioinfiniteitemsloader: function infscr_showdonemsg_portfolioinfiniteitemsloader () {
		var opts = this.options,
			instance = this;
		//Do all the usual stuff
		opts.loading.msg
			.find('img')
			.hide()
			.parent()
			.find('div').html(opts.loading.finishedMsg).animate({ opacity: 1 }, 2000, function () {
				$(this).parent().fadeOut('normal');
			});
		//And also hide the navSelector
		$(opts.navSelector).fadeOut('normal');
		// user provided callback when done
		opts.errorCallback.call($(opts.contentSelector)[0],'done');
	}
});

(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
									|| window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); },
			  timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
}());



function debounce(func, wait, immediate) {
	var timeout, args, context, timestamp, result;
	return function() {
		context = this;
		args = arguments;
		timestamp = new Date();
		var later = function() {
			var last = (new Date()) - timestamp;
			if (last < wait) {
				timeout = setTimeout(later, wait - last);
			} else {
				timeout = null;
				if (!immediate) result = func.apply(context, args);
			}
		};
		var callNow = immediate && !timeout;
		if (!timeout) {
			timeout = setTimeout(later, wait);
		}
		if (callNow) result = func.apply(context, args);
		return result;
	};
}


var requesting = false;

var killRequesting = debounce(function () {
	requesting = false;
}, 100);

function onScrollSliderParallax() {
	if (!requesting) {
		requesting = true;
		requestAnimationFrame(function(){
			SEMICOLON.slider.sliderParallax();
			SEMICOLON.slider.sliderElementsFade();
		});
	}
	killRequesting();
}



var SEMICOLON = SEMICOLON || {};

(function($){

	// USE STRICT
	"use strict";

	SEMICOLON.initialize = {

		init: function(){

			SEMICOLON.initialize.responsiveClasses();
			SEMICOLON.initialize.imagePreload( '.portfolio-item:not(:has(.fslider)) img' );
			SEMICOLON.initialize.stickyElements();
			SEMICOLON.initialize.goToTop();
			SEMICOLON.initialize.fullScreen();
			SEMICOLON.initialize.verticalMiddle();
			SEMICOLON.initialize.lightbox();
			SEMICOLON.initialize.resizeVideos();
			SEMICOLON.initialize.imageFade();
			SEMICOLON.initialize.pageTransition();
			SEMICOLON.initialize.dataStyles();
			SEMICOLON.initialize.dataResponsiveHeights();

			$('.fslider').addClass('preloader2');

		},

		responsiveClasses: function(){
			var jRes = jRespond([
				{
					label: 'smallest',
					enter: 0,
					exit: 479
				},{
					label: 'handheld',
					enter: 480,
					exit: 767
				},{
					label: 'tablet',
					enter: 768,
					exit: 991
				},{
					label: 'laptop',
					enter: 992,
					exit: 1199
				},{
					label: 'desktop',
					enter: 1200,
					exit: 10000
				}
			]);
			jRes.addFunc([
				{
					breakpoint: 'desktop',
					enter: function() { $body.addClass('device-lg'); },
					exit: function() { $body.removeClass('device-lg'); }
				},{
					breakpoint: 'laptop',
					enter: function() { $body.addClass('device-md'); },
					exit: function() { $body.removeClass('device-md'); }
				},{
					breakpoint: 'tablet',
					enter: function() { $body.addClass('device-sm'); },
					exit: function() { $body.removeClass('device-sm'); }
				},{
					breakpoint: 'handheld',
					enter: function() { $body.addClass('device-xs'); },
					exit: function() { $body.removeClass('device-xs'); }
				},{
					breakpoint: 'smallest',
					enter: function() { $body.addClass('device-xxs'); },
					exit: function() { $body.removeClass('device-xxs'); }
				}
			]);
		},

		imagePreload: function(selector, parameters){
			var params = {
				delay: 250,
				transition: 400,
				easing: 'linear'
			};
			$.extend(params, parameters);

			$(selector).each(function() {
				var image = $(this);
				image.css({visibility:'hidden', opacity: 0, display:'block'});
				image.wrap('<span class="preloader" />');
				image.one("load", function(evt) {
					$(this).delay(params.delay).css({visibility:'visible'}).animate({opacity: 1}, params.transition, params.easing, function() {
						$(this).unwrap('<span class="preloader" />');
					});
				}).each(function() {
					if(this.complete) $(this).trigger("load");
				});
			});
		},

		verticalMiddle: function(){
			if( $verticalMiddleEl.length > 0 ) {
				$verticalMiddleEl.each( function(){
					var element = $(this),
						verticalMiddleH = element.outerHeight(),
						headerHeight = $header.outerHeight();

					if( element.parents('#slider').length > 0 && !element.hasClass('ignore-header') ) {
						if( $header.hasClass('transparent-header') && ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) ) {
							verticalMiddleH = verticalMiddleH - 70;
							if( $slider.next('#header').length > 0 ) { verticalMiddleH = verticalMiddleH + headerHeight; }
						}
					}

					if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') ) {
						if( element.parents('.full-screen').length && !element.parents('.force-full-screen').length ){
							element.css({ position: 'relative', top: '0', width: 'auto', marginTop: '0', padding: '60px 0' }).addClass('clearfix');
						} else {
							element.css({ position: 'absolute', top: '50%', width: '100%', marginTop: -(verticalMiddleH/2)+'px' });
						}
					} else {
						element.css({ position: 'absolute', top: '50%', width: '100%', marginTop: -(verticalMiddleH/2)+'px' });
					}
				});
			}
		},

		stickyElements: function(){
			if( $siStickyEl.length > 0 ) {
				var siStickyH = $siStickyEl.outerHeight();
				$siStickyEl.css({ marginTop: -(siStickyH/2)+'px' });
			}

			if( $dotsMenuEl.length > 0 ) {
				var opmdStickyH = $dotsMenuEl.outerHeight();
				$dotsMenuEl.css({ marginTop: -(opmdStickyH/2)+'px' });
			}
		},

		goToTop: function(){
			$goToTopEl.click(function() {
				$('body,html').stop(true).animate({scrollTop:0},400);
				return false;
			});
		},

		goToTopScroll: function(){
			if( $body.hasClass('device-lg') || $body.hasClass('device-md') || $body.hasClass('device-sm') ) {
				if($window.scrollTop() > 450) {
					$goToTopEl.fadeIn();
				} else {
					$goToTopEl.fadeOut();
				}
			}
		},

		fullScreen: function(){
			if( $fullScreenEl.length > 0 ) {
				$fullScreenEl.each( function(){
					var element = $(this),
						scrHeight = $window.height();
					if( element.attr('id') == 'slider' ) {
						var sliderHeightOff = $slider.offset().top;
						scrHeight = scrHeight - sliderHeightOff;
						if( element.hasClass('slider-parallax') ) {
							var transformVal = element.css('transform'),
								transformX = transformVal.match(/-?[\d\.]+/g);
							if( !transformX ) { var transformXvalue = 0; } else { var transformXvalue = transformX[5]; }
							scrHeight = ( $window.height() + Number( transformXvalue ) ) - sliderHeightOff;
						}
						if( $('#slider.with-header').next('#header:not(.transparent-header)').length > 0 && ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) ) {
							var headerHeightOff = $header.outerHeight();
							scrHeight = scrHeight - headerHeightOff;
						}
					}
					if( element.parents('.full-screen').length > 0 ) { scrHeight = element.parents('.full-screen').height(); }

					if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') ) {
						if( !element.hasClass('force-full-screen') ){ scrHeight = 'auto'; }
					}

					element.css('height', scrHeight);
					if( element.attr('id') == 'slider' && !element.hasClass('canvas-slider-grid') ) { if( element.has('.swiper-slide') ) { element.find('.swiper-slide').css('height', scrHeight); } }
				});
			}
		},

		maxHeight: function(){
			if( $commonHeightEl.length > 0 ) {
				$commonHeightEl.each( function(){
					var element = $(this);
					if( element.has('.common-height') ) {
						SEMICOLON.initialize.commonHeight( element.find('.common-height') );
					}

					SEMICOLON.initialize.commonHeight( element );
				});
			}
		},

		commonHeight: function( element ){
			var maxHeight = 0;
			element.children('[class^=col-]').each(function() {
				var element = $(this).children('div');
				if( element.hasClass('max-height') ){
					maxHeight = element.outerHeight();
				} else {
					if (element.outerHeight() > maxHeight)
					maxHeight = element.outerHeight();
				}
			});

			element.children('[class^=col-]').each(function() {
				$(this).height(maxHeight);
			});
		},

		testimonialsGrid: function(){
			if( $testimonialsGridEl.length > 0 ) {
				if( $body.hasClass('device-sm') || $body.hasClass('device-md') || $body.hasClass('device-lg') ) {
					var maxHeight = 0;
					$testimonialsGridEl.each( function(){
						$(this).find("li > .testimonial").each(function(){
						   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
						});
						$(this).find("li").height(maxHeight);
						maxHeight = 0;
					});
				} else {
					$testimonialsGridEl.find("li").css({ 'height': 'auto' });
				}
			}
		},

		lightbox: function(){
			var $lightboxImageEl = $('[data-lightbox="image"]'),
				$lightboxGalleryEl = $('[data-lightbox="gallery"]'),
				$lightboxIframeEl = $('[data-lightbox="iframe"]'),
				$lightboxAjaxEl = $('[data-lightbox="ajax"]'),
				$lightboxAjaxGalleryEl = $('[data-lightbox="ajax-gallery"]');

			if( $lightboxImageEl.length > 0 ) {
				$lightboxImageEl.magnificPopup({
					type: 'image',
					closeOnContentClick: true,
					closeBtnInside: false,
					fixedContentPos: true,
					mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
					image: {
						verticalFit: true
					}
				});
			}

			if( $lightboxGalleryEl.length > 0 ) {
				$lightboxGalleryEl.each(function() {
					var element = $(this);

					if( element.find('a[data-lightbox="gallery-item"]').parent('.clone').hasClass('clone') ) {
						element.find('a[data-lightbox="gallery-item"]').parent('.clone').find('a[data-lightbox="gallery-item"]').attr('data-lightbox','');
					}

					element.magnificPopup({
						delegate: 'a[data-lightbox="gallery-item"]',
						type: 'image',
						closeOnContentClick: true,
						closeBtnInside: false,
						fixedContentPos: true,
						mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
						image: {
							verticalFit: true
						},
						gallery: {
							enabled: true,
							navigateByImgClick: true,
							preload: [0,1] // Will preload 0 - before current, and 1 after the current image
						}
					});
				});
			}

			if( $lightboxIframeEl.length > 0 ) {
				$lightboxIframeEl.magnificPopup({
					disableOn: 600,
					type: 'iframe',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false
				});
			}

			if( $lightboxAjaxEl.length > 0 ) {
				$lightboxAjaxEl.magnificPopup({
					type: 'ajax',
					closeBtnInside: false,
					callbacks: {
						ajaxContentAdded: function(mfpResponse) {
							SEMICOLON.widget.loadFlexSlider();
							SEMICOLON.initialize.resizeVideos();
							SEMICOLON.widget.masonryThumbs();
						},
						open: function() {
							$body.addClass('ohidden');
						},
						close: function() {
							$body.removeClass('ohidden');
						}
					}
				});
			}

			if( $lightboxAjaxGalleryEl.length > 0 ) {
				$lightboxAjaxGalleryEl.magnificPopup({
					delegate: 'a[data-lightbox="ajax-gallery-item"]',
					type: 'ajax',
					closeBtnInside: false,
					gallery: {
						enabled: true,
						preload: 0,
						navigateByImgClick: false
					},
					callbacks: {
						ajaxContentAdded: function(mfpResponse) {
							SEMICOLON.widget.loadFlexSlider();
							SEMICOLON.initialize.resizeVideos();
							SEMICOLON.widget.masonryThumbs();
						},
						open: function() {
							$body.addClass('ohidden');
						},
						close: function() {
							$body.removeClass('ohidden');
						}
					}
				});
			}
		},

		resizeVideos: function(){
			if ( $().fitVids ) {
				$("#content,#footer,#slider:not(.revslider-wrap),.landing-offer-media,.portfolio-ajax-modal").fitVids({
					customSelector: "iframe[src^='http://www.dailymotion.com/embed']",
					ignore: '.no-fv'
				});
			}
		},

		imageFade: function(){
			$('.image_fade').hover( function(){
				$(this).filter(':not(:animated)').animate({opacity: 0.8}, 400);
			}, function() {
				$(this).animate({opacity: 1}, 400);
			});
		},

		blogTimelineEntries: function(){
			$('.post-timeline.grid-2').find('.entry').each( function(){
				var position = $(this).inlineStyle('left');
				if( position == '0px' ) {
					$(this).removeClass('alt');
				} else {
					$(this).addClass('alt');
				}
				$(this).find('.entry-timeline').fadeIn();
			});
		},

		pageTransition: function(){
			if( !$body.hasClass('no-transition') ){
				var animationIn = $body.attr('data-animation-in'),
					animationOut = $body.attr('data-animation-out'),
					durationIn = $body.attr('data-speed-in'),
					durationOut = $body.attr('data-speed-out'),
					loaderStyle = $body.attr('data-loader'),
					loaderColor = $body.attr('data-loader-color'),
					loaderStyleHtml = '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>',
					loaderBgStyle = '',
					loaderBorderStyle = '',
					loaderBgClass = '',
					loaderBorderClass = '',
					loaderBgClass2 = '',
					loaderBorderClass2 = '';

				if( !animationIn ) { animationIn = 'fadeIn'; }
				if( !animationOut ) { animationOut = 'fadeOut'; }
				if( !durationIn ) { durationIn = 1500; }
				if( !durationOut ) { durationOut = 800; }

				if( loaderColor ) {
					if( loaderColor == 'theme' ) {
						loaderBgClass = ' bgcolor';
						loaderBorderClass = ' border-color';
						loaderBgClass2 = ' class="bgcolor"';
						loaderBorderClass2 = ' class="border-color"';
					} else {
						loaderBgStyle = ' style="background-color:'+ loaderColor +';"';
						loaderBorderStyle = ' style="border-color:'+ loaderColor +';"';
					}
					loaderStyleHtml = '<div class="css3-spinner-bounce1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-bounce2'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-bounce3'+ loaderBgClass +'"'+ loaderBgStyle +'></div>'
				}

				if( loaderStyle == '2' ) {
					loaderStyleHtml = '<div class="css3-spinner-flipper'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
				} else if( loaderStyle == '3' ) {
					loaderStyleHtml = '<div class="css3-spinner-double-bounce1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-double-bounce2'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
				} else if( loaderStyle == '4' ) {
					loaderStyleHtml = '<div class="css3-spinner-rect1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect2'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect3'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect4'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect5'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
				} else if( loaderStyle == '5' ) {
					loaderStyleHtml = '<div class="css3-spinner-cube1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-cube2'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
				} else if( loaderStyle == '6' ) {
					loaderStyleHtml = '<div class="css3-spinner-scaler'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
				} else if( loaderStyle == '7' ) {
					loaderStyleHtml = '<div class="css3-spinner-grid-pulse"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
				} else if( loaderStyle == '8' ) {
					loaderStyleHtml = '<div class="css3-spinner-clip-rotate"><div'+ loaderBorderClass2 + loaderBorderStyle +'></div></div>';
				} else if( loaderStyle == '9' ) {
					loaderStyleHtml = '<div class="css3-spinner-ball-rotate"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
				} else if( loaderStyle == '10' ) {
					loaderStyleHtml = '<div class="css3-spinner-zig-zag"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
				} else if( loaderStyle == '11' ) {
					loaderStyleHtml = '<div class="css3-spinner-triangle-path"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
				} else if( loaderStyle == '12' ) {
					loaderStyleHtml = '<div class="css3-spinner-ball-scale-multiple"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
				} else if( loaderStyle == '13' ) {
					loaderStyleHtml = '<div class="css3-spinner-ball-pulse-sync"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
				} else if( loaderStyle == '14' ) {
					loaderStyleHtml = '<div class="css3-spinner-scale-ripple"><div'+ loaderBorderClass2 + loaderBorderStyle +'></div><div'+ loaderBorderClass2 + loaderBorderStyle +'></div><div'+ loaderBorderClass2 + loaderBorderStyle +'></div></div>';
				}

				$wrapper.animsition({
					inClass : animationIn,
					outClass : animationOut,
					inDuration : Number(durationIn),
					outDuration : Number(durationOut),
					linkElement : '#primary-menu ul li a:not([target="_blank"]):not([href^=#])',
					loading : true,
					loadingParentElement : 'body',
					loadingClass : 'css3-spinner',
					loadingHtml : loaderStyleHtml,
					unSupportCss : [
									 'animation-duration',
									 '-webkit-animation-duration',
									 '-o-animation-duration'
								   ],
					overlay : false,
					overlayClass : 'animsition-overlay-slide',
					overlayParentElement : 'body'
				});
			}
		},

		topScrollOffset: function() {
			var topOffsetScroll = 0;

			if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && !SEMICOLON.isMobile.any() ) {
				if( $header.hasClass('sticky-header') ) {
					if( $pagemenu.hasClass('dots-menu') ) { topOffsetScroll = 100; } else { topOffsetScroll = 144; }
				} else {
					if( $pagemenu.hasClass('dots-menu') ) { topOffsetScroll = 140; } else { topOffsetScroll = 184; }
				}

				if( !$pagemenu.length ) {
					if( $header.hasClass('sticky-header') ) { topOffsetScroll = 100; } else { topOffsetScroll = 140; }
				}
			} else {
				topOffsetScroll = 40;
			}

			return topOffsetScroll;
		},

		defineColumns: function( element ){
			var column = 4;

			if( element.hasClass('portfolio-full') ) {
				if( element.hasClass('portfolio-3') ) column = 3;
				else if( element.hasClass('portfolio-5') ) column = 5;
				else if( element.hasClass('portfolio-6') ) column = 6;
				else column = 4;

				if( $body.hasClass('device-sm') && ( column == 4 || column == 5 || column == 6 ) ) {
					column = 3;
				} else if( $body.hasClass('device-xs') && ( column == 3 || column == 4 || column == 5 || column == 6 ) ) {
					column = 2;
				} else if( $body.hasClass('device-xxs') ) {
					column = 1;
				}
			} else if( element.hasClass('masonry-thumbs') ) {

				var lgCol = element.attr('data-lg-col'),
					mdCol = element.attr('data-md-col'),
					smCol = element.attr('data-sm-col'),
					xsCol = element.attr('data-xs-col'),
					xxsCol = element.attr('data-xxs-col');

				if( element.hasClass('col-2') ) column = 2;
				else if( element.hasClass('col-3') ) column = 3;
				else if( element.hasClass('col-5') ) column = 5;
				else if( element.hasClass('col-6') ) column = 6;
				else column = 4;

				if( $body.hasClass('device-lg') ) {
					if( lgCol ) { column = Number(lgCol); }
				} else if( $body.hasClass('device-md') ) {
					if( mdCol ) { column = Number(mdCol); }
				} else if( $body.hasClass('device-sm') ) {
					if( smCol ) { column = Number(smCol); }
				} else if( $body.hasClass('device-xs') ) {
					if( xsCol ) { column = Number(xsCol); }
				} else if( $body.hasClass('device-xxs') ) {
					if( xxsCol ) { column = Number(xxsCol); }
				}

			}

			return column;
		},

		setFullColumnWidth: function( element ){

			if( element.hasClass('portfolio-full') ) {
				var columns = SEMICOLON.initialize.defineColumns( element );
				var containerWidth = element.width();
				if( containerWidth == ( Math.floor(containerWidth/columns) * columns ) ) { containerWidth = containerWidth - 1; }
				var postWidth = Math.floor(containerWidth/columns);
				if( $body.hasClass('device-xxs') ) { var deviceSmallest = 1; } else { var deviceSmallest = 0; }
				element.find(".portfolio-item").each(function(index){
					if( deviceSmallest == 0 && $(this).hasClass('wide') ) { var elementSize = ( postWidth*2 ); } else { var elementSize = postWidth; }
					$(this).css({"width":elementSize+"px"});
				});
			} else if( element.hasClass('masonry-thumbs') ) {
				var columns = SEMICOLON.initialize.defineColumns( element ),
					containerWidth = element.innerWidth(),
					windowWidth = $window.width();
				if( containerWidth == windowWidth ){
					containerWidth = windowWidth*1.004;
					element.css({ 'width': containerWidth+'px' });
				}
				var postWidth = (containerWidth/columns);

				postWidth = Math.floor(postWidth);

				if( ( postWidth * columns ) >= containerWidth ) { element.css({ 'margin-right': '-1px' }); }

				element.children('a').css({"width":postWidth+"px"});

				var firstElementWidth = element.find('a:eq(0)').outerWidth();

				element.isotope({
					masonry: {
						columnWidth: firstElementWidth
					}
				});

				var bigImageNumbers = element.attr('data-big');
				if( bigImageNumbers ) {
					bigImageNumbers = bigImageNumbers.split(",");
					var bigImageNumber = '',
						bigi = '';
					for( bigi = 0; bigi < bigImageNumbers.length; bigi++ ){
						bigImageNumber = Number(bigImageNumbers[bigi]) - 1;
						element.find('a:eq('+bigImageNumber+')').css({ width: firstElementWidth*2 + 'px' });
					}
					var t = setTimeout( function(){
						element.isotope('layout');
					}, 1000 );
				}
			}

		},

		aspectResizer: function(){
			var $aspectResizerEl = $('.aspect-resizer');
			if( $aspectResizerEl.length > 0 ) {
				$aspectResizerEl.each( function(){
					var element = $(this),
						elementW = element.inlineStyle('width'),
						elementH = element.inlineStyle('height'),
						elementPW = element.parent().innerWidth();
				});
			}
		},

		dataStyles: function(){
			var $dataStyleXxs = $('[data-style-xxs]'),
				$dataStyleXs = $('[data-style-xs]'),
				$dataStyleSm = $('[data-style-sm]'),
				$dataStyleMd = $('[data-style-md]'),
				$dataStyleLg = $('[data-style-lg]');

			if( $dataStyleXxs.length > 0 ) {
				$dataStyleXxs.each( function(){
					var element = $(this),
						elementStyle = element.attr('data-style-xxs');

					if( $body.hasClass('device-xxs') ) {
						if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
					}
				});
			}

			if( $dataStyleXs.length > 0 ) {
				$dataStyleXs.each( function(){
					var element = $(this),
						elementStyle = element.attr('data-style-xs');

					if( $body.hasClass('device-xs') ) {
						if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
					}
				});
			}

			if( $dataStyleSm.length > 0 ) {
				$dataStyleSm.each( function(){
					var element = $(this),
						elementStyle = element.attr('data-style-sm');

					if( $body.hasClass('device-sm') ) {
						if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
					}
				});
			}

			if( $dataStyleMd.length > 0 ) {
				$dataStyleMd.each( function(){
					var element = $(this),
						elementStyle = element.attr('data-style-md');

					if( $body.hasClass('device-md') ) {
						if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
					}
				});
			}

			if( $dataStyleLg.length > 0 ) {
				$dataStyleLg.each( function(){
					var element = $(this),
						elementStyle = element.attr('data-style-lg');

					if( $body.hasClass('device-lg') ) {
						if( elementStyle != '' ) { element.attr( 'style', elementStyle ); }
					}
				});
			}
		},

		dataResponsiveHeights: function(){
			var $dataHeightXxs = $('[data-height-xxs]'),
				$dataHeightXs = $('[data-height-xs]'),
				$dataHeightSm = $('[data-height-sm]'),
				$dataHeightMd = $('[data-height-md]'),
				$dataHeightLg = $('[data-height-lg]');

			if( $dataHeightXxs.length > 0 ) {
				$dataHeightXxs.each( function(){
					var element = $(this),
						elementHeight = element.attr('data-height-xxs');

					if( $body.hasClass('device-xxs') ) {
						if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
					}
				});
			}

			if( $dataHeightXs.length > 0 ) {
				$dataHeightXs.each( function(){
					var element = $(this),
						elementHeight = element.attr('data-height-xs');

					if( $body.hasClass('device-xs') ) {
						if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
					}
				});
			}

			if( $dataHeightSm.length > 0 ) {
				$dataHeightSm.each( function(){
					var element = $(this),
						elementHeight = element.attr('data-height-sm');

					if( $body.hasClass('device-sm') ) {
						if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
					}
				});
			}

			if( $dataHeightMd.length > 0 ) {
				$dataHeightMd.each( function(){
					var element = $(this),
						elementHeight = element.attr('data-height-md');

					if( $body.hasClass('device-md') ) {
						if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
					}
				});
			}

			if( $dataHeightLg.length > 0 ) {
				$dataHeightLg.each( function(){
					var element = $(this),
						elementHeight = element.attr('data-height-lg');

					if( $body.hasClass('device-lg') ) {
						if( elementHeight != '' ) { element.css( 'height', elementHeight ); }
					}
				});
			}
		},

		stickFooterOnSmall: function(){
			var windowH = $window.height(),
				wrapperH = $wrapper.height();

			if( $footer.length > 0 && $wrapper.has('#footer') ) {
				if( windowH > wrapperH ) {
					$footer.css({ 'margin-top': ( windowH - wrapperH ) });
				}
			}
		}

	};

	SEMICOLON.header = {

		init: function(){

			SEMICOLON.header.superfish();
			SEMICOLON.header.menufunctions();
			SEMICOLON.header.fullWidthMenu();
			SEMICOLON.header.overlayMenu();
			SEMICOLON.header.stickyMenu();
			SEMICOLON.header.sideHeader();
			SEMICOLON.header.sidePanel();
			SEMICOLON.header.onePageScroll();
			SEMICOLON.header.onepageScroller();
			SEMICOLON.header.darkLogo();
			SEMICOLON.header.topsearch();
			SEMICOLON.header.topcart();

		},

		superfish: function(){

			if ( $().superfish ) {
				if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
					$('#primary-menu ul ul, #primary-menu ul .mega-menu-content').css('display', 'block');
					SEMICOLON.header.menuInvert();
				}

				$('body:not(.side-header) #primary-menu > ul, body:not(.side-header) #primary-menu > div > ul,.top-links > ul').superfish({
					popUpSelector: 'ul,.mega-menu-content,.top-link-section',
					delay: 250,
					speed: 350,
					animation: {opacity:'show'},
					animationOut:  {opacity:'hide'},
					cssArrows: false
				});

				$('body.side-header #primary-menu > ul').superfish({
					popUpSelector: 'ul',
					delay: 250,
					speed: 350,
					animation: {opacity:'show',height:'show'},
					animationOut:  {opacity:'hide',height:'hide'},
					cssArrows: false
				});
			}

		},

		menuInvert: function() {

			$('#primary-menu .mega-menu-content, #primary-menu ul ul').each( function( index, element ){
				var $menuChildElement = $(element);
				var windowWidth = $window.width();
				var menuChildOffset = $menuChildElement.offset();
				var menuChildWidth = $menuChildElement.width();
				var menuChildLeft = menuChildOffset.left;

				if(windowWidth - (menuChildWidth + menuChildLeft) < 0) {
					$menuChildElement.addClass('menu-pos-invert');
				}
			});

		},

		menufunctions: function(){

			$( '#primary-menu ul li:has(ul)' ).addClass('sub-menu');
			$( '.top-links ul li:has(ul) > a' ).append( ' <i class="icon-angle-down"></i>' );
			$( '.top-links > ul' ).addClass( 'clearfix' );

			if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
				$('#primary-menu.sub-title > ul > li').hover(function() {
					$(this).prev().css({ backgroundImage : 'none' });
				}, function() {
					$(this).prev().css({ backgroundImage : 'url("images/icons/menu-divider.png")' });
				});

				$('#primary-menu.sub-title').children('ul').children('.current').prev().css({ backgroundImage : 'none' });
			}

			if( SEMICOLON.isMobile.Android() ) {
				$( '#primary-menu ul li.sub-menu' ).children('a').on('touchstart', function(e){
					if( !$(this).parent('li.sub-menu').hasClass('sfHover') ) {
						e.preventDefault();
					}
				});
			}

			if( SEMICOLON.isMobile.Windows() ) {
				$('#primary-menu > ul, #primary-menu > div > ul,.top-links > ul').superfish('destroy').addClass('windows-mobile-menu');

				$( '#primary-menu ul li:has(ul)' ).append('<a href="#" class="wn-submenu-trigger"><i class="icon-angle-down"></i></a>');

				$( '#primary-menu ul li.sub-menu' ).children('a.wn-submenu-trigger').click( function(e){
					$(this).parent().toggleClass('open');
					$(this).parent().find('> ul, > .mega-menu-content').stop(true,true).toggle();
					return false;
				});
			}

		},

		fullWidthMenu: function(){
			if( $body.hasClass('stretched') ) {
				if( $header.find('.container-fullwidth').length > 0 ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 120 }); }
				if( $header.hasClass('full-header') ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 60 }); }
			} else {
				if( $header.find('.container-fullwidth').length > 0 ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 120 }); }
				if( $header.hasClass('full-header') ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 80 }); }
			}
		},

		overlayMenu: function(){
			if( $body.hasClass('overlay-menu') ) {
				var overlayMenuItem = $('#primary-menu').children('ul').children('li'),
					overlayMenuItemHeight = overlayMenuItem.outerHeight(),
					overlayMenuItemTHeight = overlayMenuItem.length * overlayMenuItemHeight,
					firstItemOffset = ( $window.height() - overlayMenuItemTHeight ) / 2;

				$('#primary-menu').children('ul').children('li:first-child').css({ 'margin-top': firstItemOffset+'px' });
			}
		},

		stickyMenu: function( headerOffset ){
			if ($window.scrollTop() > headerOffset) {
				if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
					$('body:not(.side-header) #header:not(.no-sticky)').addClass('sticky-header');
					$('#page-menu:not(.dots-menu,.no-sticky)').addClass('sticky-page-menu');
					if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
					SEMICOLON.header.stickyMenuClass();
				} else if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm') ) {
					if( $body.hasClass('sticky-responsive-menu') ) {
						$('#header:not(.no-sticky)').addClass('responsive-sticky-header');
						SEMICOLON.header.stickyMenuClass();
					}
				}
			} else {
				SEMICOLON.header.removeStickyness();
			}
		},

		removeStickyness: function(){
			if( $header.hasClass('sticky-header') ){
				$('body:not(.side-header) #header:not(.no-sticky)').removeClass('sticky-header');
				$header.removeClass().addClass(oldHeaderClasses);
				$headerWrap.removeClass().addClass(oldHeaderWrapClasses);
				if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
				SEMICOLON.slider.swiperSliderMenu();
				SEMICOLON.slider.revolutionSliderMenu();
			}
			if( $pagemenu.hasClass('sticky-page-menu') ){
				$('#page-menu:not(.dots-menu,.no-sticky)').removeClass('sticky-page-menu');
			}
			if( $header.hasClass('responsive-sticky-header') ){
				$('body.sticky-responsive-menu #header').removeClass('responsive-sticky-header');
			}
			if( ( $body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm') ) && ( typeof responsiveMenuClasses === 'undefined' ) ) {
				$header.removeClass().addClass(oldHeaderClasses);
				$headerWrap.removeClass().addClass(oldHeaderWrapClasses);
				if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
			}
		},

		sideHeader: function(){
			$("#header-trigger").click(function(){
				$('body.open-header').toggleClass("side-header-open");
				return false;
			});
		},

		sidePanel: function(){
			$(".side-panel-trigger").click(function(){
				$body.toggleClass("side-panel-open");
				if( $body.hasClass('device-touch') ) {
					$body.toggleClass("ohidden");
				}
				return false;
			});
		},

		onePageScroll: function(){
			if( $onePageMenuEl.length > 0 ){
				var onePageSpeed = $onePageMenuEl.attr('data-speed'),
					onePageOffset = $onePageMenuEl.attr('data-offset'),
					onePageEasing = $onePageMenuEl.attr('data-easing');

				if( !onePageSpeed ) { onePageSpeed = 1000; }
				if( !onePageEasing ) { onePageEasing = 'easeOutQuad'; }

				$onePageMenuEl.find('a[data-href]').click(function(){
					var element = $(this),
						divScrollToAnchor = element.attr('data-href'),
						divScrollSpeed = element.attr('data-speed'),
						divScrollOffset = element.attr('data-offset'),
						divScrollEasing = element.attr('data-easing');

					if( $( divScrollToAnchor ).length > 0 ) {

						if( !onePageOffset ) {
							var onePageOffsetG = SEMICOLON.initialize.topScrollOffset();
						} else {
							var onePageOffsetG = onePageOffset;
						}

						if( !divScrollSpeed ) { divScrollSpeed = onePageSpeed; }
						if( !divScrollOffset ) { divScrollOffset = onePageOffsetG; }
						if( !divScrollEasing ) { divScrollEasing = onePageEasing; }

						if( $onePageMenuEl.hasClass('no-offset') ) { divScrollOffset = 0; }

						onePageGlobalOffset = Number(divScrollOffset);

						$onePageMenuEl.find('li').removeClass('current');
						$onePageMenuEl.find('a[data-href="' + divScrollToAnchor + '"]').parent('li').addClass('current');

						$('#primary-menu > ul, #primary-menu > .container > ul').toggleClass('show', function() {
							$('html,body').stop(true).animate({
								'scrollTop': $( divScrollToAnchor ).offset().top - Number(divScrollOffset)
							}, Number(divScrollSpeed), divScrollEasing);
						}, false);

						onePageGlobalOffset = Number(divScrollOffset);
					}

					return false;
				});
			}
		},

		onepageScroller: function(){
			$onePageMenuEl.find('li').removeClass('current');
			$onePageMenuEl.find('a[data-href="#' + SEMICOLON.header.onePageCurrentSection() + '"]').parent('li').addClass('current');
		},

		onePageCurrentSection: function(){
			var currentOnePageSection = 'home';

			$pageSectionEl.each(function(index) {
				var h = $(this).offset().top;
				var y = $window.scrollTop();

				var offsetScroll = 100 + onePageGlobalOffset;

				if( y + offsetScroll >= h && y < h + $(this).height() && $(this).attr('id') != currentOnePageSection ) {
					currentOnePageSection = $(this).attr('id');
				}
			});

			return currentOnePageSection;
		},

		darkLogo: function(){
			if( ( $header.hasClass('dark') || $body.hasClass('dark') ) && !$headerWrap.hasClass('not-dark') ) {
				if( defaultDarkLogo ){ defaultLogo.find('img').attr('src', defaultDarkLogo); }
				if( retinaDarkLogo ){ retinaLogo.find('img').attr('src', retinaDarkLogo); }
			} else {
				if( defaultLogoImg ){ defaultLogo.find('img').attr('src', defaultLogoImg); }
				if( retinaLogoImg ){ retinaLogo.find('img').attr('src', retinaLogoImg); }
			}
		},

		stickyMenuClass: function(){
			if( stickyMenuClasses ) { var newClassesArray = stickyMenuClasses.split(/ +/); } else { var newClassesArray = ''; }
			var noOfNewClasses = newClassesArray.length;

			if( noOfNewClasses > 0 ) {
				var i = 0;
				for( i=0; i<noOfNewClasses; i++ ) {
					if( newClassesArray[i] == 'not-dark' ) {
						$header.removeClass('dark');
						$headerWrap.addClass('not-dark');
					} else if( newClassesArray[i] == 'dark' ) {
						$headerWrap.removeClass('not-dark force-not-dark');
						if( !$header.hasClass( newClassesArray[i] ) ) {
							$header.addClass( newClassesArray[i] );
						}
					} else if( !$header.hasClass( newClassesArray[i] ) ) {
						$header.addClass( newClassesArray[i] );
					}
				}
			}
		},

		responsiveMenuClass: function(){
			if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm') ){
				if( responsiveMenuClasses ) { var newClassesArray = responsiveMenuClasses.split(/ +/); } else { var newClassesArray = ''; }
				var noOfNewClasses = newClassesArray.length;

				if( noOfNewClasses > 0 ) {
					var i = 0;
					for( i=0; i<noOfNewClasses; i++ ) {
						if( newClassesArray[i] == 'not-dark' ) {
							$header.removeClass('dark');
							$headerWrap.addClass('not-dark');
						} else if( newClassesArray[i] == 'dark' ) {
							$headerWrap.removeClass('not-dark force-not-dark');
							if( !$header.hasClass( newClassesArray[i] ) ) {
								$header.addClass( newClassesArray[i] );
							}
						} else if( !$header.hasClass( newClassesArray[i] ) ) {
							$header.addClass( newClassesArray[i] );
						}
					}
				}
				SEMICOLON.header.darkLogo();
			}
		},

		topsocial: function(){
			if( $topSocialEl.length > 0 ){
				if( $body.hasClass('device-md') || $body.hasClass('device-lg') ) {
					$topSocialEl.show();
					$topSocialEl.find('a').css({width: 40});

					$topSocialEl.find('.ts-text').each( function(){
						var $clone = $(this).clone().css({'visibility': 'hidden', 'display': 'inline-block', 'font-size': '13px', 'font-weight':'bold'}).appendTo($body),
							cloneWidth = $clone.innerWidth() + 52;
						$(this).parent('a').attr('data-hover-width',cloneWidth);
						$clone.remove();
					});

					$topSocialEl.find('a').hover(function() {
						if( $(this).find('.ts-text').length > 0 ) {
							$(this).css({width: $(this).attr('data-hover-width')});
						}
					}, function() {
						$(this).css({width: 40});
					});
				} else {
					$topSocialEl.show();
					$topSocialEl.find('a').css({width: 40});

					$topSocialEl.find('a').each(function() {
						var topIconTitle = $(this).find('.ts-text').text();
						$(this).attr('title', topIconTitle);
					});

					$topSocialEl.find('a').hover(function() {
						$(this).css({width: 40});
					}, function() {
						$(this).css({width: 40});
					});

					if( $body.hasClass('device-xxs') ) {
						$topSocialEl.hide();
						$topSocialEl.slice(0, 8).show();
					}
				}
			}
		},

		topsearch: function(){

			$(document).on('click', function(event) {
				if (!$(event.target).closest('#top-search').length) { $body.toggleClass('top-search-open', false); }
				if (!$(event.target).closest('#top-cart').length) { $topCart.toggleClass('top-cart-open', false); }
				if (!$(event.target).closest('#page-menu').length) { $pagemenu.toggleClass('pagemenu-active', false); }
				if (!$(event.target).closest('#side-panel').length) { $body.toggleClass('side-panel-open', false); }
			});

			$("#top-search-trigger").click(function(e){
				$body.toggleClass('top-search-open');
				$topCart.toggleClass('top-cart-open', false);
				$( '#primary-menu > ul, #primary-menu > div > ul' ).toggleClass("show", false);
				$pagemenu.toggleClass('pagemenu-active', false);
				if ($body.hasClass('top-search-open')){
					$topSearch.find('input').focus();
				}
				e.stopPropagation();
				e.preventDefault();
			});

		},

		topcart: function(){

			$("#top-cart-trigger").click(function(e){
				$pagemenu.toggleClass('pagemenu-active', false);
				$topCart.toggleClass('top-cart-open');
				e.stopPropagation();
				e.preventDefault();
			});

		}

	};

	SEMICOLON.slider = {

		init: function() {

			SEMICOLON.slider.sliderParallax();
			SEMICOLON.slider.sliderElementsFade();
			SEMICOLON.slider.captionPosition();

		},

		sliderParallaxOffset: function(){
			var sliderParallaxOffsetTop = 0;
			var headerHeight = $header.outerHeight();
			if( $body.hasClass('side-header') || $header.hasClass('transparent-header') ) { headerHeight = 0; }
			if( $pageTitle.length > 0 ) {
				var pageTitleHeight = $pageTitle.outerHeight();
				sliderParallaxOffsetTop = pageTitleHeight + headerHeight;
			} else {
				sliderParallaxOffsetTop = headerHeight;
			}

			if( $slider.next('#header').length > 0 ) { sliderParallaxOffsetTop = 0; }

			return sliderParallaxOffsetTop;
		},

		sliderParallax: function(){
			if( $sliderParallaxEl.length > 0 ) {
				if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && !SEMICOLON.isMobile.any() ) {
					var parallaxOffsetTop = SEMICOLON.slider.sliderParallaxOffset(),
						parallaxElHeight = $sliderParallaxEl.outerHeight();

					if( ( parallaxElHeight + parallaxOffsetTop + 50 ) > $window.scrollTop() ){
						$sliderParallaxEl.find('.slider-inner').css({ 'display': 'block', 'visibility': 'visible' });
						if ($window.scrollTop() > parallaxOffsetTop) {
							var tranformAmount = (($window.scrollTop()-parallaxOffsetTop) / 1.5 ).toFixed(2);
							var tranformAmount2 = (($window.scrollTop()-parallaxOffsetTop) / 7 ).toFixed(2);
							$sliderParallaxEl.stop(true,true).transition({ y: tranformAmount },0);
							$('.slider-parallax .slider-caption,.ei-title').stop(true,true).transition({ y: -tranformAmount2 },0);
						} else {
							$('.slider-parallax,.slider-parallax .slider-caption,.ei-title').transition({ y: 0 },0);
						}
					} else {
						$sliderParallaxEl.find('.slider-inner').css({ 'display': 'none', 'visibility': 'hidden' });
					}
					if (requesting) {
						requestAnimationFrame(function(){
							SEMICOLON.slider.sliderParallax();
							SEMICOLON.slider.sliderElementsFade();
						});
					}
				} else {
					$('.slider-parallax,.slider-parallax .slider-caption,.ei-title').transition({ y: 0 },0);
				}
			}
		},

		sliderElementsFade: function(){
			if( $sliderParallaxEl.length > 0 ) {
				if( ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) && !SEMICOLON.isMobile.any() ) {
					var parallaxOffsetTop = SEMICOLON.slider.sliderParallaxOffset();
					if( $slider.length > 0 ) {
						if( $header.hasClass('transparent-header') || $('body').hasClass('side-header') ) { var tHeaderOffset = 100; } else { var tHeaderOffset = 0; }
						$sliderParallaxEl.find('#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next').css({'opacity':( ( 100 + ( $slider.offset().top + parallaxOffsetTop + tHeaderOffset ) - $window.scrollTop() ) ) /90});
					}
				} else {
					$sliderParallaxEl.find('#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next').css({'opacity': 1});
				}
			}
		},

		captionPosition: function(){
			$slider.find('.slider-caption').each(function(){
				var scapHeight = $(this).outerHeight();
				var scapSliderHeight = $slider.outerHeight();
				if( $(this).parents('#slider').prev('#header').hasClass('transparent-header') && ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) ) {
					if( $(this).parents('#slider').prev('#header').hasClass('floating-header') ) {
						$(this).css({ top: ( scapSliderHeight + 160 - scapHeight ) / 2 + 'px' });
					} else {
						$(this).css({ top: ( scapSliderHeight + 100 - scapHeight ) / 2 + 'px' });
					}
				} else {
					$(this).css({ top: ( scapSliderHeight - scapHeight ) / 2 + 'px' });
				}
			});
		},

		swiperSliderMenu: function(){
			if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
				var activeSlide = $slider.find('.swiper-slide.swiper-slide-visible');
				SEMICOLON.slider.headerSchemeChanger(activeSlide);
			}
		},

		revolutionSliderMenu: function(){
			if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
				var activeSlide = $slider.find('.current-sr-slide-visible');
				SEMICOLON.slider.headerSchemeChanger(activeSlide);
			}
		},

		headerSchemeChanger: function( activeSlide ){
			if( activeSlide.length > 0 ) {
				if( activeSlide.hasClass('dark') ){
					$('#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)').addClass('dark');
					$('#header.transparent-header.sticky-header,#header.transparent-header.semi-transparent.sticky-header,#header.transparent-header.floating-header.sticky-header').removeClass('dark');
					$headerWrap.removeClass('not-dark');
				} else {
					if( $body.hasClass('dark') ) {
						activeSlide.addClass('not-dark');
						$('#header.transparent-header:not(.semi-transparent,.floating-header)').removeClass('dark');
						$('#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)').find('#header-wrap').addClass('not-dark');
					} else {
						$('#header.transparent-header:not(.semi-transparent,.floating-header)').removeClass('dark');
						$headerWrap.removeClass('not-dark');
					}
				}
				SEMICOLON.header.darkLogo();
			}
		},

		owlCaptionInit: function(){
			if( $owlCarouselEl.length > 0 ){
				$owlCarouselEl.each( function(){
					var element = $(this);
					if( element.find('.owl-dot').length > 0 ) {
						element.find('.owl-controls').addClass('with-carousel-dots');
					}
				});
			}
		}

	};

	SEMICOLON.portfolio = {

		init: function(){

			SEMICOLON.portfolio.ajaxload();

		},

		portfolioDescMargin: function(){
			var $portfolioOverlayEl = $('.portfolio-overlay');
			if( $portfolioOverlayEl.length > 0 ){
				$portfolioOverlayEl.each(function() {
					var element = $(this);
					if( element.find('.portfolio-desc').length > 0 ) {
						var portfolioOverlayHeight = element.outerHeight();
						var portfolioOverlayDescHeight = element.find('.portfolio-desc').outerHeight();
						if( element.find('a.left-icon').length > 0 || element.find('a.right-icon').length > 0 || element.find('a.center-icon').length > 0 ) {
							var portfolioOverlayIconHeight = 40 + 20;
						} else {
							var portfolioOverlayIconHeight = 0;
						}
						var portfolioOverlayMiddleAlign = ( portfolioOverlayHeight - portfolioOverlayDescHeight - portfolioOverlayIconHeight ) / 2
						element.find('.portfolio-desc').css({ 'margin-top': portfolioOverlayMiddleAlign });
					}
				});
			}
		},

		arrange: function(){
			SEMICOLON.initialize.setFullColumnWidth( $portfolio );
			$('#portfolio.portfolio-full').isotope('layout');
		},

		ajaxload: function(){
			$('.portfolio-ajax .portfolio-item a.center-icon').click( function(e) {
				var portPostId = $(this).parents('.portfolio-item').attr('id');
				if( !$(this).parents('.portfolio-item').hasClass('portfolio-active') ) {
					SEMICOLON.portfolio.loadItem(portPostId, prevPostPortId);
				}
				e.preventDefault();
			});
		},

		newNextPrev: function( portPostId ){
			var portNext = SEMICOLON.portfolio.getNextItem(portPostId);
			var portPrev = SEMICOLON.portfolio.getPrevItem(portPostId);
			$('#next-portfolio').attr('data-id', portNext);
			$('#prev-portfolio').attr('data-id', portPrev);
		},

		loadItem: function( portPostId, prevPostPortId, getIt ){
			if(!getIt) { getIt = false; }
			var portNext = SEMICOLON.portfolio.getNextItem(portPostId);
			var portPrev = SEMICOLON.portfolio.getPrevItem(portPostId);
			if(getIt == false) {
				SEMICOLON.portfolio.closeItem();
				$portfolioAjaxLoader.fadeIn();
				var portfolioDataLoader = $('#' + portPostId).attr('data-loader');
				$portfolioDetailsContainer.load(portfolioDataLoader, { portid: portPostId, portnext: portNext, portprev: portPrev },
				function(){
					SEMICOLON.portfolio.initializeAjax(portPostId);
					SEMICOLON.portfolio.openItem();
					$portfolioItems.removeClass('portfolio-active');
					$('#' + portPostId).addClass('portfolio-active');
				});
			}
		},

		closeItem: function(){
			if( $portfolioDetails && $portfolioDetails.height() > 32 ) {
				$portfolioAjaxLoader.fadeIn();
				$portfolioDetails.find('#portfolio-ajax-single').fadeOut('600', function(){
					$(this).remove();
				});
				$portfolioDetails.removeClass('portfolio-ajax-opened');
			}
		},

		openItem: function(){
			var noOfImages = $portfolioDetails.find('img').length;
			var noLoaded = 0;

			if( noOfImages > 0 ) {
				$portfolioDetails.find('img').on('load', function(){
					noLoaded++;
					var topOffsetScroll = SEMICOLON.initialize.topScrollOffset();
					if(noOfImages === noLoaded) {
						$portfolioDetailsContainer.css({ 'display': 'block' });
						$portfolioDetails.addClass('portfolio-ajax-opened');
						$portfolioAjaxLoader.fadeOut();
						var t=setTimeout(function(){
							SEMICOLON.widget.loadFlexSlider();
							SEMICOLON.initialize.lightbox();
							SEMICOLON.initialize.resizeVideos();
							SEMICOLON.widget.masonryThumbs();
							$('html,body').stop(true).animate({
								'scrollTop': $portfolioDetails.offset().top - topOffsetScroll
							}, 900, 'easeOutQuad');
						},500);
					}
				});
			} else {
				var topOffsetScroll = SEMICOLON.initialize.topScrollOffset();
				$portfolioDetailsContainer.css({ 'display': 'block' });
				$portfolioDetails.addClass('portfolio-ajax-opened');
				$portfolioAjaxLoader.fadeOut();
				var t=setTimeout(function(){
					SEMICOLON.widget.loadFlexSlider();
					SEMICOLON.initialize.lightbox();
					SEMICOLON.initialize.resizeVideos();
					SEMICOLON.widget.masonryThumbs();
					$('html,body').stop(true).animate({
						'scrollTop': $portfolioDetails.offset().top - topOffsetScroll
					}, 900, 'easeOutQuad');
				},500);
			}
		},

		getNextItem: function( portPostId ){
			var portNext = '';
			var hasNext = $('#' + portPostId).next();
			if(hasNext.length != 0) {
				portNext = hasNext.attr('id');
			}
			return portNext;
		},

		getPrevItem: function( portPostId ){
			var portPrev = '';
			var hasPrev = $('#' + portPostId).prev();
			if(hasPrev.length != 0) {
				portPrev = hasPrev.attr('id');
			}
			return portPrev;
		},

		initializeAjax: function( portPostId ){
			prevPostPortId = $('#' + portPostId);

			$('#next-portfolio, #prev-portfolio').click( function() {
				var portPostId = $(this).attr('data-id');
				$portfolioItems.removeClass('portfolio-active');
				$('#' + portPostId).addClass('portfolio-active');
				SEMICOLON.portfolio.loadItem(portPostId,prevPostPortId);
				return false;
			});

			$('#close-portfolio').click( function() {
				$portfolioDetailsContainer.fadeOut('600', function(){
					$portfolioDetails.find('#portfolio-ajax-single').remove();
				});
				$portfolioDetails.removeClass('portfolio-ajax-opened');
				$portfolioItems.removeClass('portfolio-active');
				return false;
			});
		}

	};

	SEMICOLON.widget = {

		init: function(){

			SEMICOLON.widget.animations();
			SEMICOLON.widget.youtubeBgVideo();
			SEMICOLON.widget.tabs();
			SEMICOLON.widget.tabsJustify();
			SEMICOLON.widget.toggles();
			SEMICOLON.widget.accordions();
			SEMICOLON.widget.counter();
			SEMICOLON.widget.roundedSkill();
			SEMICOLON.widget.progress();
			SEMICOLON.widget.twitterFeed();
			SEMICOLON.widget.flickrFeed();
			SEMICOLON.widget.instagramPhotos( '36286274.b9e559e.4824cbc1d0c94c23827dc4a2267a9f6b', 'b9e559ec7c284375bf41e9a9fb72ae01' );
			SEMICOLON.widget.dribbbleShots();
			SEMICOLON.widget.navTree();
			SEMICOLON.widget.textRotater();
			SEMICOLON.widget.linkScroll();
			SEMICOLON.widget.extras();

		},

		parallax: function(){
			if( !SEMICOLON.isMobile.any() ){
				$.stellar({
					horizontalScrolling: false,
					verticalOffset: 150
				});
			} else {
				$parallaxEl.addClass('mobile-parallax');
				$parallaxPageTitleEl.addClass('mobile-parallax');
			}
		},

		animations: function(){
			var $dataAnimateEl = $('[data-animate]');
			if( $dataAnimateEl.length > 0 ){
				if( $body.hasClass('device-lg') || $body.hasClass('device-md') || $body.hasClass('device-sm') ){
					$dataAnimateEl.each(function(){
						var element = $(this),
							animationDelay = element.attr('data-delay'),
							animationDelayTime = 0;

						if( animationDelay ) { animationDelayTime = Number( animationDelay ) + 500; } else { animationDelayTime = 500; }

						if( !element.hasClass('animated') ) {
							element.addClass('not-animated');
							var elementAnimation = element.attr('data-animate');
							element.appear(function () {
								setTimeout(function() {
									element.removeClass('not-animated').addClass( elementAnimation + ' animated');
								}, animationDelayTime);
							},{accX: 0, accY: -120},'easeInCubic');
						}
					});
				}
			}
		},

		loadFlexSlider: function(){
			var $flexSliderEl = $('.fslider:not(.customjs)').find('.flexslider');
			if( $flexSliderEl.length > 0 ){
				$flexSliderEl.each(function() {
					var $flexsSlider = $(this),
						flexsAnimation = $flexsSlider.parent('.fslider').attr('data-animation'),
						flexsEasing = $flexsSlider.parent('.fslider').attr('data-easing'),
						flexsDirection = $flexsSlider.parent('.fslider').attr('data-direction'),
						flexsSlideshow = $flexsSlider.parent('.fslider').attr('data-slideshow'),
						flexsPause = $flexsSlider.parent('.fslider').attr('data-pause'),
						flexsSpeed = $flexsSlider.parent('.fslider').attr('data-speed'),
						flexsVideo = $flexsSlider.parent('.fslider').attr('data-video'),
						flexsPagi = $flexsSlider.parent('.fslider').attr('data-pagi'),
						flexsArrows = $flexsSlider.parent('.fslider').attr('data-arrows'),
						flexsThumbs = $flexsSlider.parent('.fslider').attr('data-thumbs'),
						flexsHover = $flexsSlider.parent('.fslider').attr('data-hover'),
						flexsSheight = true,
						flexsUseCSS = false;

					if( !flexsAnimation ) { flexsAnimation = 'slide'; }
					if( !flexsEasing || flexsEasing == 'swing' ) {
						flexsEasing = 'swing';
						flexsUseCSS = true;
					}
					if( !flexsDirection ) { flexsDirection = 'horizontal'; }
					if( !flexsSlideshow ) { flexsSlideshow = true; } else { flexsSlideshow = false; }
					if( !flexsPause ) { flexsPause = 5000; }
					if( !flexsSpeed ) { flexsSpeed = 600; }
					if( !flexsVideo ) { flexsVideo = false; }
					if( flexsDirection == 'vertical' ) { flexsSheight = false; }
					if( flexsPagi == 'false' ) { flexsPagi = false; } else { flexsPagi = true; }
					if( flexsThumbs == 'true' ) { flexsPagi = 'thumbnails'; } else { flexsPagi = flexsPagi; }
					if( flexsArrows == 'false' ) { flexsArrows = false; } else { flexsArrows = true; }
					if( flexsHover == 'false' ) { flexsHover = false; } else { flexsHover = true; }

					$flexsSlider.flexslider({
						selector: ".slider-wrap > .slide",
						animation: flexsAnimation,
						easing: flexsEasing,
						direction: flexsDirection,
						slideshow: flexsSlideshow,
						slideshowSpeed: Number(flexsPause),
						animationSpeed: Number(flexsSpeed),
						pauseOnHover: flexsHover,
						video: flexsVideo,
						controlNav: flexsPagi,
						directionNav: flexsArrows,
						smoothHeight: flexsSheight,
						useCSS: flexsUseCSS,
						start: function(slider){
							SEMICOLON.widget.animations();
							SEMICOLON.initialize.verticalMiddle();
							slider.parent().removeClass('preloader2');
							var t = setTimeout( function(){ $('#portfolio.portfolio-masonry,#portfolio.portfolio-full,#posts.post-masonry').isotope('layout'); }, 1200 );
							SEMICOLON.initialize.lightbox();
							$('.flex-prev').html('<i class="icon-angle-left"></i>');
							$('.flex-next').html('<i class="icon-angle-right"></i>');
							SEMICOLON.portfolio.portfolioDescMargin();
						},
						after: function(){
							if( $portfolio.has('portfolio-full') ) {
								$('#portfolio.portfolio-full').isotope('layout');
								SEMICOLON.portfolio.portfolioDescMargin();
							}
						}
					});
				});
			}
		},

		html5Video: function(){
			var videoEl = $('.video-wrap:has(video)');
			if( videoEl.length > 0 ) {
				videoEl.each(function(){
					var element = $(this),
						elementVideo = element.find('video'),
						outerContainerWidth = element.outerWidth(),
						outerContainerHeight = element.outerHeight(),
						innerVideoWidth = elementVideo.outerWidth(),
						innerVideoHeight = elementVideo.outerHeight();

					if( innerVideoHeight < outerContainerHeight ) {
						var videoAspectRatio = innerVideoWidth/innerVideoHeight,
							newVideoWidth = outerContainerHeight * videoAspectRatio,
							innerVideoPosition = (newVideoWidth - outerContainerWidth) / 2;
						elementVideo.css({ 'width': newVideoWidth+'px', 'height': outerContainerHeight+'px', 'left': -innerVideoPosition+'px' });
					} else {
						var innerVideoPosition = (innerVideoHeight - outerContainerHeight) / 2;
						elementVideo.css({ 'width': innerVideoWidth+'px', 'height': innerVideoHeight+'px', 'top': -innerVideoPosition+'px' });
					}

					if( SEMICOLON.isMobile.any() ) {
						var placeholderImg = elementVideo.attr('poster');

						if( placeholderImg != '' ) {
							element.append('<div class="video-placeholder" style="background-image: url('+ placeholderImg +');"></div>')
						}
					}
				});
			}
		},

		youtubeBgVideo: function(){
			if( $youtubeBgPlayerEl.length > 0 ){
				$youtubeBgPlayerEl.each( function(){
					var element = $(this),
						ytbgVideo = element.attr('data-video'),
						ytbgMute = element.attr('data-mute'),
						ytbgRatio = element.attr('data-ratio'),
						ytbgQuality = element.attr('data-quality'),
						ytbgOpacity = element.attr('data-opacity'),
						ytbgContainer = element.attr('data-container'),
						ytbgOptimize = element.attr('data-optimize'),
						ytbgLoop = element.attr('data-loop'),
						ytbgVolume = element.attr('data-volume'),
						ytbgStart = element.attr('data-start'),
						ytbgStop = element.attr('data-stop'),
						ytbgAutoPlay = element.attr('data-autoplay'),
						ytbgFullScreen = element.attr('data-fullscreen');

					if( ytbgMute == 'false' ) { ytbgMute = false; } else { ytbgMute = true; }
					if( !ytbgRatio ) { ytbgRatio = '16/9'; }
					if( !ytbgQuality ) { ytbgQuality = 'hd720'; }
					if( !ytbgOpacity ) { ytbgOpacity = 1; }
					if( !ytbgContainer ) { ytbgContainer = 'self'; }
					if( ytbgOptimize == 'false' ) { ytbgOptimize = false; } else { ytbgOptimize = true; }
					if( ytbgLoop == 'false' ) { ytbgLoop = false; } else { ytbgLoop = true; }
					if( !ytbgVolume ) { ytbgVolume = 1; }
					if( !ytbgStart ) { ytbgStart = 0; }
					if( !ytbgStop ) { ytbgStop = 0; }
					if( ytbgAutoPlay == 'false' ) { ytbgAutoPlay = false; } else { ytbgAutoPlay = true; }
					if( ytbgFullScreen == 'true' ) { ytbgFullScreen = true; } else { ytbgFullScreen = false; }

					element.mb_YTPlayer({
						videoURL: ytbgVideo,
						mute: ytbgMute,
						ratio: ytbgRatio,
						quality: ytbgQuality,
						opacity: ytbgOpacity,
						containment: ytbgContainer,
						optimizeDisplay: ytbgOptimize,
						loop: ytbgLoop,
						vol: ytbgVolume,
						startAt: ytbgStart,
						stopAt: ytbgStop,
						autoplay: ytbgAutoPlay,
						realfullscreen: ytbgFullScreen,
						showYTLogo: false,
						showControls: false
					});
				});
			}
		},

		tabs: function(){
			var $tabs = $('.tabs:not(.customjs)');
			if( $tabs.length > 0 ) {
				$tabs.each( function(){
					var element = $(this),
						elementSpeed = element.attr('data-speed'),
						tabActive = element.attr('data-active');

					if( !elementSpeed ) { elementSpeed = 400; }
					if( !tabActive ) { tabActive = 0; } else { tabActive = tabActive - 1; }

					element.tabs({
						active: Number(tabActive),
						show: {
							effect: "fade",
							duration: Number(elementSpeed)
						}
					});
				});
			}
		},

		tabsJustify: function(){
			if( !$('body').hasClass('device-xxs') && !$('body').hasClass('device-xs') ){
				var $tabsJustify = $('.tabs.tabs-justify');
				if( $tabsJustify.length > 0 ) {
					$tabsJustify.each( function(){
						var element = $(this),
							elementTabs = element.find('.tab-nav > li'),
							elementTabsNo = elementTabs.length,
							elementContainer = 0,
							elementWidth = 0;

						if( element.hasClass('tabs-bordered') || element.hasClass('tabs-bb') ) {
							elementContainer = element.find('.tab-nav').outerWidth();
						} else {
							if( element.find('tab-nav').hasClass('tab-nav2') ) {
								elementContainer = element.find('.tab-nav').outerWidth() - (elementTabsNo * 10);
							} else {
								elementContainer = element.find('.tab-nav').outerWidth() - 30;
							}
						}

						elementWidth = Math.floor(elementContainer/elementTabsNo);
						elementTabs.css({ 'width': elementWidth + 'px' });

					});
				}
			} else { $('.tabs.tabs-justify').find('.tab-nav > li').css({ 'width': 'auto' }); }
		},

		toggles: function(){
			var $toggle = $('.toggle');
			if( $toggle.length > 0 ) {
				$toggle.each( function(){
					var element = $(this),
						elementState = element.attr('data-state');

					if( elementState != 'open' ){
						element.find('.togglec').hide();
					} else {
						element.find('.togglet').addClass("toggleta");
					}

					element.find('.togglet').click(function(){
						$(this).toggleClass('toggleta').next('.togglec').slideToggle(300);
						return true;
					});
				});
			}
		},

		accordions: function(){
			var $accordionEl = $('.accordion');
			if( $accordionEl.length > 0 ){
				$accordionEl.each( function(){
					var element = $(this),
						elementState = element.attr('data-state'),
						accordionActive = element.attr('data-active');

					if( !accordionActive ) { accordionActive = 0; } else { accordionActive = accordionActive - 1; }

					element.find('.acc_content').hide();

					if( elementState != 'closed' ) {
						element.find('.acctitle:eq('+ Number(accordionActive) +')').addClass('acctitlec').next().show();
					}

					element.find('.acctitle').click(function(){
						if( $(this).next().is(':hidden') ) {
							element.find('.acctitle').removeClass('acctitlec').next().slideUp("normal");
							$(this).toggleClass('acctitlec').next().slideDown("normal");
						}
						return false;
					});
				});
			}
		},

		counter: function(){
			var $counterEl = $('.counter:not(.counter-instant)');
			if( $counterEl.length > 0 ){
				$counterEl.each(function(){
					var element = $(this);
					var counterElementComma = $(this).find('span').attr('data-comma');
					if( !counterElementComma ) { counterElementComma = false; } else { counterElementComma = true; }
					if( $body.hasClass('device-lg') || $body.hasClass('device-md') ){
						element.appear( function(){
							SEMICOLON.widget.runCounter( element, counterElementComma );
						},{accX: 0, accY: -120},'easeInCubic');
					} else {
						SEMICOLON.widget.runCounter( element, counterElementComma );
					}
				});
			}
		},

		runCounter: function( counterElement,counterElementComma ){
			if( counterElementComma == true ) {
				counterElement.find('span').countTo({
					formatter: function (value, options) {
						value = value.toFixed(options.decimals);
						value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
						return value;
					}
				});
			} else {
				counterElement.find('span').countTo();
			}
		},

		roundedSkill: function(){
			var $roundedSkillEl = $('.rounded-skill');
			if( $roundedSkillEl.length > 0 ){
				$roundedSkillEl.each(function(){
					var element = $(this);

					var roundSkillSize = element.attr('data-size');
					var roundSkillAnimate = element.attr('data-animate');
					var roundSkillWidth = element.attr('data-width');
					var roundSkillColor = element.attr('data-color');
					var roundSkillTrackColor = element.attr('data-trackcolor');

					if( !roundSkillSize ) { roundSkillSize = 140; }
					if( !roundSkillAnimate ) { roundSkillAnimate = 2000; }
					if( !roundSkillWidth ) { roundSkillWidth = 8; }
					if( !roundSkillColor ) { roundSkillColor = '#0093BF'; }
					if( !roundSkillTrackColor ) { roundSkillTrackColor = 'rgba(0,0,0,0.04)'; }

					var properties = {roundSkillSize:roundSkillSize, roundSkillAnimate:roundSkillAnimate, roundSkillWidth:roundSkillWidth, roundSkillColor:roundSkillColor, roundSkillTrackColor:roundSkillTrackColor};

					if( $body.hasClass('device-lg') || $body.hasClass('device-md') ){
						element.css({'width':roundSkillSize+'px','height':roundSkillSize+'px'}).animate({opacity: '0'}, 10);
						element.appear( function(){
							if (!element.hasClass('skills-animated')) {
								element.css({opacity: '1'});
								SEMICOLON.widget.runRoundedSkills( element, properties );
								element.addClass('skills-animated');
							}
						},{accX: 0, accY: -120},'easeInCubic');
					} else {
						SEMICOLON.widget.runRoundedSkills( element, properties );
					}
				});
			}
		},

		runRoundedSkills: function( element, properties ){
			element.easyPieChart({
				size: Number(properties.roundSkillSize),
				animate: Number(properties.roundSkillAnimate),
				scaleColor: false,
				trackColor: properties.roundSkillTrackColor,
				lineWidth: Number(properties.roundSkillWidth),
				lineCap: 'square',
				barColor: properties.roundSkillColor
			});
		},

		progress: function(){
			var $progressEl = $('.progress');
			if( $progressEl.length > 0 ){
				$progressEl.each(function(){
					var element = $(this),
						skillsBar = element.parent('li'),
						skillValue = skillsBar.attr('data-percent');

					if( $body.hasClass('device-lg') || $body.hasClass('device-md') ){
						element.appear( function(){
							if (!skillsBar.hasClass('skills-animated')) {
								element.find('.counter-instant span').countTo();
								skillsBar.find('.progress').css({width: skillValue + "%"}).addClass('skills-animated');
							}
						},{accX: 0, accY: -120},'easeInCubic');
					} else {
						element.find('.counter-instant span').countTo();
						skillsBar.find('.progress').css({width: skillValue + "%"});
					}
				});
			}
		},

		twitterFeed: function(){
			var $twitterFeedEl = $('.twitter-feed');
			if( $twitterFeedEl.length > 0 ){
				$twitterFeedEl.each(function() {
					var element = $(this),
						twitterFeedUser = element.attr('data-username'),
						twitterFeedCount = element.attr('data-count');

					if( !twitterFeedUser ) { twitterFeedUser = 'twitter' }
					if( !twitterFeedCount ) { twitterFeedCount = 3 }

					$.getJSON('include/twitter/tweets.php?username='+ twitterFeedUser +'&count='+ twitterFeedCount, function(tweets){
						if( element.hasClass('fslider') ) {
							element.find(".slider-wrap").html(sm_format_twitter3(tweets)).promise().done(function(){
								var timer = setInterval(function(){
									if( element.find('.slide').length > 1 ) {
										element.removeClass('customjs');
										var t = setTimeout( function(){ SEMICOLON.widget.loadFlexSlider(); }, 500);
										clearInterval(timer);
									}
								},500);
							});
						} else {
							element.html(sm_format_twitter(tweets));
						}
					});
				});
			}
		},

		flickrFeed: function(){
			var $flickrFeedEl = $('.flickr-feed');
			if( $flickrFeedEl.length > 0 ){
				$flickrFeedEl.each(function() {
					var element = $(this),
						flickrFeedID = element.attr('data-id'),
						flickrFeedCount = element.attr('data-count'),
						flickrFeedType = element.attr('data-type'),
						flickrFeedTypeGet = 'photos_public.gne';

					if( flickrFeedType == 'group' ) { flickrFeedTypeGet = 'groups_pool.gne'; }
					if( !flickrFeedCount ) { flickrFeedCount = 9; }

					element.jflickrfeed({
						feedapi: flickrFeedTypeGet,
						limit: Number(flickrFeedCount),
						qstrings: {
							id: flickrFeedID
						},
						itemTemplate: '<a href="{{image_b}}" title="{{title}}" data-lightbox="gallery-item">' +
											'<img src="{{image_s}}" alt="{{title}}" />' +
									  '</a>'
					}, function(data) {
						SEMICOLON.initialize.lightbox();
					});
				});
			}
		},

		instagramPhotos: function( c_accessToken, c_clientID ){
			var $instagramPhotosEl = $('.instagram-photos');
			if( $instagramPhotosEl.length > 0 ){
				$.fn.spectragram.accessData = {
					accessToken: c_accessToken,
					clientID: c_clientID
				};

				$instagramPhotosEl.each(function() {
					var element = $(this),
						instaGramUsername = element.attr('data-user'),
						instaGramTag = element.attr('data-tag'),
						instaGramCount = element.attr('data-count'),
						instaGramType = element.attr('data-type');

					if( !instaGramCount ) { instaGramCount = 9; }

					if( instaGramType == 'tag' ) {
						element.spectragram('getRecentTagged',{
							query: instaGramTag,
							max: Number( instaGramCount ),
							size: 'medium',
							wrapEachWith: ' '
						});
					} else if( instaGramType == 'user' ) {
						element.spectragram('getUserFeed',{
							query: instaGramUsername,
							max: Number( instaGramCount ),
							size: 'medium',
							wrapEachWith: ' '
						});
					} else {
						element.spectragram('getPopular',{
							max: Number( instaGramCount ),
							size: 'medium',
							wrapEachWith: ' '
						});
					}
				});
			}
		},

		dribbbleShots: function(){
			var $dribbbleShotsEl = $('.dribbble-shots');
			if( $dribbbleShotsEl.length > 0 ){
				$dribbbleShotsEl.each(function() {
					var element = $(this),
						dribbbleUsername = element.attr('data-user'),
						dribbbleCount = element.attr('data-count'),
						dribbbleList = element.attr('data-list'),
						dribbbleType = element.attr('data-type');

					if( !dribbbleCount ) { dribbbleCount = 9; }

					if( dribbbleType == 'follows' ) {
						$.jribbble.getShotsThatPlayerFollows( dribbbleUsername , function (followedShots) {
							var html = [];
							$.each(followedShots.shots, function (i, shot) {
								html.push('<a href="' + shot.url + '" target="_blank">');
								html.push('<img src="' + shot.image_teaser_url + '" ');
								html.push('alt="' + shot.title + '"></a>');
							});
							element.html(html.join(''));
						}, {page: 1, per_page: Number(dribbbleCount)});
					} else if( dribbbleType == 'user' ) {
						$.jribbble.getShotsByPlayerId( dribbbleUsername , function (playerShots) {
							var html = [];
							$.each(playerShots.shots, function (i, shot) {
								html.push('<a href="' + shot.url + '" target="_blank">');
								html.push('<img src="' + shot.image_teaser_url + '" ');
								html.push('alt="' + shot.title + '"></a>');
							});
							element.html(html.join(''));
						}, {page: 1, per_page: Number(dribbbleCount)});
					} else if( dribbbleType == 'list' ) {
						$.jribbble.getShotsByList( dribbbleList , function (listDetails) {
							var html = [];
							$.each(listDetails.shots, function (i, shot) {
								html.push('<a href="' + shot.url + '" target="_blank">');
								html.push('<img src="' + shot.image_teaser_url + '" ');
								html.push('alt="' + shot.title + '"></a>');
							});
							element.html(html.join(''));
						}, {page: 1, per_page: Number(dribbbleCount)});
					}
				});
			}
		},

		navTree: function(){
			var $navTreeEl = $('.nav-tree');
			if( $navTreeEl.length > 0 ){
				$navTreeEl.each( function(){
					var element = $(this),
						elementSpeed = element.attr('data-speed'),
						elementEasing = element.attr('data-easing');

					if( !elementSpeed ) { elementSpeed = 250; }
					if( !elementEasing ) { elementEasing = 'swing'; }

					element.find( 'ul li:has(ul)' ).addClass('sub-menu');
					element.find( 'ul li:has(ul) > a' ).append( ' <i class="icon-angle-down"></i>' );

					element.find( 'ul li:has(ul) > a' ).click( function(e){
						var childElement = $(this);
						element.find( 'ul li' ).not(childElement.parents()).removeClass('active');
						childElement.parent().children('ul').slideToggle( Number(elementSpeed), elementEasing, function(){
							$(this).find('ul').hide();
							$(this).find('li.active').removeClass('active');
						});
						element.find( 'ul li > ul' ).not(childElement.parent().children('ul')).not(childElement.parents('ul')).slideUp( Number(elementSpeed), elementEasing );
						childElement.parent('li:has(ul)').toggleClass('active');
						e.preventDefault();
					});
				});
			}
		},

		masonryThumbs: function(){
			var $masonryThumbsEl = $('.masonry-thumbs');
			if( $masonryThumbsEl.length > 0 ){
				$masonryThumbsEl.each( function(){
					var masonryItemContainer = $(this);
					SEMICOLON.widget.masonryThumbsArrange( masonryItemContainer );
				});
			}
		},

		masonryThumbsArrange: function( element ){
			SEMICOLON.initialize.setFullColumnWidth( element );
			element.isotope('layout');
		},

		notifications: function( element ){
			toastr.clear();
			var notifyElement = $(element),
				notifyPosition = notifyElement.attr('data-notify-position'),
				notifyType = notifyElement.attr('data-notify-type'),
				notifyMsg = notifyElement.attr('data-notify-msg'),
				notifyCloseButton = notifyElement.attr('data-notify-close');

			if( !notifyPosition ) { notifyPosition = 'toast-top-right'; } else { notifyPosition = 'toast-' + notifyElement.attr('data-notify-position'); }
			if( !notifyMsg ) { notifyMsg = 'Please set a message!'; }
			if( notifyCloseButton == 'true' ) { notifyCloseButton = true; } else { notifyCloseButton = false; }

			toastr.options.positionClass = notifyPosition;
			toastr.options.closeButton = notifyCloseButton;
			toastr.options.closeHtml = '<button><i class="icon-remove"></i></button>';

			if( notifyType == 'warning' ) {
				toastr.warning(notifyMsg);
			} else if( notifyType == 'error' ) {
				toastr.error(notifyMsg);
			} else if( notifyType == 'success' ) {
				toastr.success(notifyMsg);
			} else {
				toastr.info(notifyMsg);
			}

			return false;
		},

		textRotater: function(){
			if( $textRotaterEl.length > 0 ){
				$textRotaterEl.each(function(){
					var element = $(this),
						trRotate = $(this).attr('data-rotate'),
						trSpeed = $(this).attr('data-speed'),
						trSeparator = $(this).attr('data-separator');

					if( !trRotate ) { trRotate = "fade"; }
					if( !trSpeed ) { trSpeed = 1200; }
					if( !trSeparator ) { trSeparator = ","; }

					var tRotater = $(this).find('.t-rotate');

					tRotater.Morphext({
						animation: trRotate,
						separator: trSeparator,
						speed: Number(trSpeed)
					});
				});
			}
		},

		linkScroll: function(){
			$("a[data-scrollto]").click(function(){
				var element = $(this),
					divScrollToAnchor = element.attr('data-scrollto'),
					divScrollSpeed = element.attr('data-speed'),
					divScrollOffset = element.attr('data-offset'),
					divScrollEasing = element.attr('data-easing');

					if( !divScrollSpeed ) { divScrollSpeed = 750; }
					if( !divScrollOffset ) { divScrollOffset = SEMICOLON.initialize.topScrollOffset(); }
					if( !divScrollEasing ) { divScrollEasing = 'easeOutQuad'; }

				$('html,body').stop(true).animate({
					'scrollTop': $( divScrollToAnchor ).offset().top - Number(divScrollOffset)
				}, Number(divScrollSpeed), divScrollEasing);

				return false;
			});
		},

		extras: function(){
			$('[data-toggle="tooltip"]').tooltip({container: 'body'});
			$('#primary-menu-trigger,#overlay-menu-close').click(function() {
				$( '#primary-menu > ul, #primary-menu > div > ul' ).toggleClass("show");
				return false;
			});
			$('#page-submenu-trigger').click(function() {
				$body.toggleClass('top-search-open', false);
				$pagemenu.toggleClass("pagemenu-active");
				return false;
			});
			$pagemenu.find('nav').click(function(e){
				$body.toggleClass('top-search-open', false);
				$topCart.toggleClass('top-cart-open', false);
			});
			if( SEMICOLON.isMobile.any() ){
				$body.addClass('device-touch');
			}
			// var el = {
			//     darkLogo : $("<img>", {src: defaultDarkLogo}),
			//     darkRetinaLogo : $("<img>", {src: retinaDarkLogo})
			// };
			// el.darkLogo.prependTo("body");
			// el.darkRetinaLogo.prependTo("body");
			// el.darkLogo.css({'position':'absolute','z-index':'-100'});
			// el.darkRetinaLogo.css({'position':'absolute','z-index':'-100'});
		}

	};

	SEMICOLON.isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (SEMICOLON.isMobile.Android() || SEMICOLON.isMobile.BlackBerry() || SEMICOLON.isMobile.iOS() || SEMICOLON.isMobile.Opera() || SEMICOLON.isMobile.Windows());
		}
	};

	SEMICOLON.documentOnResize = {

		init: function(){

			var t = setTimeout( function(){
				SEMICOLON.header.topsocial();
				SEMICOLON.header.fullWidthMenu();
				SEMICOLON.header.overlayMenu();
				SEMICOLON.initialize.fullScreen();
				SEMICOLON.initialize.verticalMiddle();
				SEMICOLON.initialize.maxHeight();
				SEMICOLON.initialize.testimonialsGrid();
				SEMICOLON.slider.captionPosition();
				SEMICOLON.portfolio.arrange();
				SEMICOLON.portfolio.portfolioDescMargin();
				SEMICOLON.widget.tabsJustify();
				SEMICOLON.widget.html5Video();
				SEMICOLON.widget.masonryThumbs();
				SEMICOLON.initialize.dataStyles();
				SEMICOLON.initialize.dataResponsiveHeights();
			}, 500 );

		}

	};

	SEMICOLON.documentOnReady = {

		init: function(){
			SEMICOLON.initialize.init();
			SEMICOLON.header.init();
			if( $slider.length > 0 ) { SEMICOLON.slider.init(); }
			if( $portfolio.length > 0 ) { SEMICOLON.portfolio.init(); }
			SEMICOLON.widget.init();
			SEMICOLON.documentOnReady.windowscroll();
		},

		windowscroll: function(){

			var headerOffset = 0;
			var headerWrapOffset = 0;

			if( $header.length > 0 ) { headerOffset = $header.offset().top; }
			if( $header.length > 0 ) { headerWrapOffset = $headerWrap.offset().top; }

			var headerDefinedOffset = $header.attr('data-sticky-offset');
			if( typeof headerDefinedOffset !== 'undefined' ) {
				if( headerDefinedOffset == 'full' ) {
					headerWrapOffset = $window.height();
					var headerOffsetNegative = $header.attr('data-sticky-offset-negative');
					if( typeof headerOffsetNegative !== 'undefined' ) { headerWrapOffset = headerWrapOffset - headerOffsetNegative - 1; }
				} else {
					headerWrapOffset = Number(headerDefinedOffset);
				}
			}

			$window.on( 'scroll', function(){

				SEMICOLON.initialize.goToTopScroll();
				$('body.open-header.close-header-on-scroll').removeClass("side-header-open");
				SEMICOLON.header.stickyMenu( headerWrapOffset );
				SEMICOLON.header.darkLogo();

			});

			window.addEventListener('scroll', onScrollSliderParallax, false);

			if( $onePageMenuEl.length > 0 ){
				$window.scrolled(function() {
					SEMICOLON.header.onepageScroller();
				});
			}
		}

	};

	SEMICOLON.documentOnLoad = {

		init: function(){
			SEMICOLON.slider.captionPosition();
			SEMICOLON.slider.swiperSliderMenu();
			SEMICOLON.slider.revolutionSliderMenu();
			SEMICOLON.initialize.maxHeight();
			SEMICOLON.initialize.testimonialsGrid();
			SEMICOLON.initialize.verticalMiddle();
			SEMICOLON.initialize.stickFooterOnSmall();
			SEMICOLON.portfolio.portfolioDescMargin();
			SEMICOLON.portfolio.arrange();
			SEMICOLON.widget.parallax();
			SEMICOLON.widget.loadFlexSlider();
			SEMICOLON.widget.html5Video();
			SEMICOLON.widget.masonryThumbs();
			SEMICOLON.slider.owlCaptionInit();
			SEMICOLON.header.topsocial();
			SEMICOLON.header.responsiveMenuClass();
		}

	};

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$headerWrap = $('#header-wrap'),
		$footer = $('#footer'),
		oldHeaderClasses = $header.attr('class'),
		oldHeaderWrapClasses = $headerWrap.attr('class'),
		stickyMenuClasses = $header.attr('data-sticky-class'),
		responsiveMenuClasses = $header.attr('data-responsive-class'),
		defaultLogo = $('#logo').find('.standard-logo'),
		defaultLogoWidth = defaultLogo.find('img').outerWidth(),
		retinaLogo = $('#logo').find('.retina-logo'),
		defaultLogoImg = defaultLogo.find('img').attr('src'),
		retinaLogoImg = retinaLogo.find('img').attr('src'),
		defaultDarkLogo = defaultLogo.attr('data-dark-logo'),
		retinaDarkLogo = retinaLogo.attr('data-dark-logo'),
		$pagemenu = $('#page-menu'),
		$onePageMenuEl = $('.one-page-menu'),
		onePageGlobalOffset = 0,
		$portfolio = $('#portfolio'),
		$slider = $('#slider'),
		$sliderParallaxEl = $('.slider-parallax'),
		$pageTitle = $('#page-title'),
		$portfolioItems = $('.portfolio-ajax').find('.portfolio-item'),
		$portfolioDetails = $('#portfolio-ajax-wrap'),
		$portfolioDetailsContainer = $('#portfolio-ajax-container'),
		$portfolioAjaxLoader = $('#portfolio-ajax-loader'),
		prevPostPortId = '',
		$topSearch = $('#top-search'),
		$topCart = $('#top-cart'),
		$verticalMiddleEl = $('.vertical-middle'),
		$topSocialEl = $('#top-social').find('li'),
		$siStickyEl = $('.si-sticky'),
		$dotsMenuEl = $('.dots-menu'),
		$goToTopEl = $('#gotoTop'),
		$fullScreenEl = $('.full-screen'),
		$commonHeightEl = $('.common-height'),
		$testimonialsGridEl = $('.testimonials-grid'),
		$pageSectionEl = $('.page-section'),
		$owlCarouselEl = $('.owl-carousel'),
		$parallaxEl = $('.parallax'),
		$parallaxPageTitleEl = $('.page-title-parallax'),
		$youtubeBgPlayerEl = $('.yt-bg-player'),
		$textRotaterEl = $('.text-rotater');

	$(document).ready( SEMICOLON.documentOnReady.init );
	$window.load( SEMICOLON.documentOnLoad.init );
	$window.on( 'resize', SEMICOLON.documentOnResize.init );

})(jQuery);
/**
 * @license Highmaps JS v1.1.9 (2015-10-07)
 * Highmaps as a plugin for Highcharts 4.1.x or Highstock 2.1.x (x being the patch version of this file)
 *
 * (c) 2011-2014 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */

/*global HighchartsAdapter*/
(function (Highcharts) {


  var UNDEFINED,
      Axis = Highcharts.Axis,
      Chart = Highcharts.Chart,
      Color = Highcharts.Color,
      Point = Highcharts.Point,
      Pointer = Highcharts.Pointer,
      Legend = Highcharts.Legend,
      LegendSymbolMixin = Highcharts.LegendSymbolMixin,
      Renderer = Highcharts.Renderer,
      Series = Highcharts.Series,
      SVGRenderer = Highcharts.SVGRenderer,
      VMLRenderer = Highcharts.VMLRenderer,

      addEvent = Highcharts.addEvent,
      each = Highcharts.each,
      error = Highcharts.error,
      extend = Highcharts.extend,
      extendClass = Highcharts.extendClass,
      merge = Highcharts.merge,
      pick = Highcharts.pick,
      defaultOptions = Highcharts.getOptions(),
      seriesTypes = Highcharts.seriesTypes,
      defaultPlotOptions = defaultOptions.plotOptions,
      wrap = Highcharts.wrap,
      noop = function () {};

  /**
   * Override to use the extreme coordinates from the SVG shape, not the
   * data values
   */
  wrap(Axis.prototype, 'getSeriesExtremes', function (proceed) {
    var isXAxis = this.isXAxis,
        dataMin,
        dataMax,
        xData = [],
        useMapGeometry;

    // Remove the xData array and cache it locally so that the proceed method doesn't use it
    if (isXAxis) {
      each(this.series, function (series, i) {
        if (series.useMapGeometry) {
          xData[i] = series.xData;
          series.xData = [];
        }
      });
    }

    // Call base to reach normal cartesian series (like mappoint)
    proceed.call(this);

    // Run extremes logic for map and mapline
    if (isXAxis) {
      dataMin = pick(this.dataMin, Number.MAX_VALUE);
      dataMax = pick(this.dataMax, -Number.MAX_VALUE);
      each(this.series, function (series, i) {
        if (series.useMapGeometry) {
          dataMin = Math.min(dataMin, pick(series.minX, dataMin));
          dataMax = Math.max(dataMax, pick(series.maxX, dataMin));
          series.xData = xData[i]; // Reset xData array
          useMapGeometry = true;
        }
      });
      if (useMapGeometry) {
        this.dataMin = dataMin;
        this.dataMax = dataMax;
      }
    }
  });

  /**
   * Override axis translation to make sure the aspect ratio is always kept
   */
  wrap(Axis.prototype, 'setAxisTranslation', function (proceed) {
    var chart = this.chart,
        mapRatio,
        plotRatio = chart.plotWidth / chart.plotHeight,
        adjustedAxisLength,
        xAxis = chart.xAxis[0],
        padAxis,
        fixTo,
        fixDiff,
        preserveAspectRatio;


    // Run the parent method
    proceed.call(this);

    // Check for map-like series
    if (this.coll === 'yAxis' && xAxis.transA !== UNDEFINED) {
      each(this.series, function (series) {
        if (series.preserveAspectRatio) {
          preserveAspectRatio = true;
        }
      });
    }

    // On Y axis, handle both
    if (preserveAspectRatio) {

      // Use the same translation for both axes
      this.transA = xAxis.transA = Math.min(this.transA, xAxis.transA);

      mapRatio = plotRatio / ((xAxis.max - xAxis.min) / (this.max - this.min));

      // What axis to pad to put the map in the middle
      padAxis = mapRatio < 1 ? this : xAxis;

      // Pad it
      adjustedAxisLength = (padAxis.max - padAxis.min) * padAxis.transA;
      padAxis.pixelPadding = padAxis.len - adjustedAxisLength;
      padAxis.minPixelPadding = padAxis.pixelPadding / 2;

      fixTo = padAxis.fixTo;
      if (fixTo) {
        fixDiff = fixTo[1] - padAxis.toValue(fixTo[0], true);
        fixDiff *= padAxis.transA;
        if (Math.abs(fixDiff) > padAxis.minPixelPadding || (padAxis.min === padAxis.dataMin && padAxis.max === padAxis.dataMax)) { // zooming out again, keep within restricted area
          fixDiff = 0;
        }
        padAxis.minPixelPadding -= fixDiff;
      }
    }
  });

  /**
   * Override Axis.render in order to delete the fixTo prop
   */
  wrap(Axis.prototype, 'render', function (proceed) {
    proceed.call(this);
    this.fixTo = null;
  });


  /**
   * The ColorAxis object for inclusion in gradient legends
   */
  var ColorAxis = Highcharts.ColorAxis = function () {
    this.isColorAxis = true;
    this.init.apply(this, arguments);
  };
  extend(ColorAxis.prototype, Axis.prototype);
  extend(ColorAxis.prototype, {
    defaultColorAxisOptions: {
      lineWidth: 0,
      minPadding: 0,
      maxPadding: 0,
      gridLineWidth: 1,
      tickPixelInterval: 72,
      startOnTick: true,
      endOnTick: true,
      offset: 0,
      marker: {
        animation: {
          duration: 50
        },
        color: 'gray',
        width: 0.01
      },
      labels: {
        overflow: 'justify'
      },
      minColor: '#EFEFFF',
      maxColor: '#003875',
      tickLength: 5
    },
    init: function (chart, userOptions) {
      var horiz = chart.options.legend.layout !== 'vertical',
          options;

      // Build the options
      options = merge(this.defaultColorAxisOptions, {
        side: horiz ? 2 : 1,
        reversed: !horiz
      }, userOptions, {
        opposite: !horiz,
        showEmpty: false,
        title: null,
        isColor: true
      });

      Axis.prototype.init.call(this, chart, options);

      // Base init() pushes it to the xAxis array, now pop it again
      //chart[this.isXAxis ? 'xAxis' : 'yAxis'].pop();

      // Prepare data classes
      if (userOptions.dataClasses) {
        this.initDataClasses(userOptions);
      }
      this.initStops(userOptions);

      // Override original axis properties
      this.horiz = horiz;
      this.zoomEnabled = false;
    },

    /*
     * Return an intermediate color between two colors, according to pos where 0
     * is the from color and 1 is the to color.
     * NOTE: Changes here should be copied
     * to the same function in drilldown.src.js and solid-gauge-src.js.
     */
    tweenColors: function (from, to, pos) {
      // Check for has alpha, because rgba colors perform worse due to lack of
      // support in WebKit.
      var hasAlpha,
          ret;

      // Unsupported color, return to-color (#3920)
      if (!to.rgba.length || !from.rgba.length) {
        ret = to.raw || 'none';

        // Interpolate
      } else {
        from = from.rgba;
        to = to.rgba;
        hasAlpha = (to[3] !== 1 || from[3] !== 1);
        ret = (hasAlpha ? 'rgba(' : 'rgb(') +
            Math.round(to[0] + (from[0] - to[0]) * (1 - pos)) + ',' +
            Math.round(to[1] + (from[1] - to[1]) * (1 - pos)) + ',' +
            Math.round(to[2] + (from[2] - to[2]) * (1 - pos)) +
            (hasAlpha ? (',' + (to[3] + (from[3] - to[3]) * (1 - pos))) : '') + ')';
      }
      return ret;
    },

    initDataClasses: function (userOptions) {
      var axis = this,
          chart = this.chart,
          dataClasses,
          colorCounter = 0,
          options = this.options,
          len = userOptions.dataClasses.length;
      this.dataClasses = dataClasses = [];
      this.legendItems = [];

      each(userOptions.dataClasses, function (dataClass, i) {
        var colors;

        dataClass = merge(dataClass);
        dataClasses.push(dataClass);
        if (!dataClass.color) {
          if (options.dataClassColor === 'category') {
            colors = chart.options.colors;
            dataClass.color = colors[colorCounter++];
            // loop back to zero
            if (colorCounter === colors.length) {
              colorCounter = 0;
            }
          } else {
            dataClass.color = axis.tweenColors(
                Color(options.minColor),
                Color(options.maxColor),
                len < 2 ? 0.5 : i / (len - 1) // #3219
            );
          }
        }
      });
    },

    initStops: function (userOptions) {
      this.stops = userOptions.stops || [
            [0, this.options.minColor],
            [1, this.options.maxColor]
          ];
      each(this.stops, function (stop) {
        stop.color = Color(stop[1]);
      });
    },

    /**
     * Extend the setOptions method to process extreme colors and color
     * stops.
     */
    setOptions: function (userOptions) {
      Axis.prototype.setOptions.call(this, userOptions);

      this.options.crosshair = this.options.marker;
      this.coll = 'colorAxis';
    },

    setAxisSize: function () {
      var symbol = this.legendSymbol,
          chart = this.chart,
          x,
          y,
          width,
          height;

      if (symbol) {
        this.left = x = symbol.attr('x');
        this.top = y = symbol.attr('y');
        this.width = width = symbol.attr('width');
        this.height = height = symbol.attr('height');
        this.right = chart.chartWidth - x - width;
        this.bottom = chart.chartHeight - y - height;

        this.len = this.horiz ? width : height;
        this.pos = this.horiz ? x : y;
      }
    },

    /**
     * Translate from a value to a color
     */
    toColor: function (value, point) {
      var pos,
          stops = this.stops,
          from,
          to,
          color,
          dataClasses = this.dataClasses,
          dataClass,
          i;

      if (dataClasses) {
        i = dataClasses.length;
        while (i--) {
          dataClass = dataClasses[i];
          from = dataClass.from;
          to = dataClass.to;
          if ((from === UNDEFINED || value >= from) && (to === UNDEFINED || value <= to)) {
            color = dataClass.color;
            if (point) {
              point.dataClass = i;
            }
            break;
          }
        }

      } else {

        if (this.isLog) {
          value = this.val2lin(value);
        }
        pos = 1 - ((this.max - value) / ((this.max - this.min) || 1));
        i = stops.length;
        while (i--) {
          if (pos > stops[i][0]) {
            break;
          }
        }
        from = stops[i] || stops[i + 1];
        to = stops[i + 1] || from;

        // The position within the gradient
        pos = 1 - (to[0] - pos) / ((to[0] - from[0]) || 1);

        color = this.tweenColors(
            from.color,
            to.color,
            pos
        );
      }
      return color;
    },

    /**
     * Override the getOffset method to add the whole axis groups inside the legend.
     */
    getOffset: function () {
      var group = this.legendGroup,
          sideOffset = this.chart.axisOffset[this.side];

      if (group) {

        // Hook for the getOffset method to add groups to this parent group
        this.axisParent = group;

        // Call the base
        Axis.prototype.getOffset.call(this);

        // First time only
        if (!this.added) {

          this.added = true;

          this.labelLeft = 0;
          this.labelRight = this.width;
        }
        // Reset it to avoid color axis reserving space
        this.chart.axisOffset[this.side] = sideOffset;
      }
    },

    /**
     * Create the color gradient
     */
    setLegendColor: function () {
      var grad,
          horiz = this.horiz,
          options = this.options,
          reversed = this.reversed;

      grad = horiz ? [+reversed, 0, +!reversed, 0] : [0, +!reversed, 0, +reversed]; // #3190
      this.legendColor = {
        linearGradient: { x1: grad[0], y1: grad[1], x2: grad[2], y2: grad[3] },
        stops: options.stops || [
          [0, options.minColor],
          [1, options.maxColor]
        ]
      };
    },

    /**
     * The color axis appears inside the legend and has its own legend symbol
     */
    drawLegendSymbol: function (legend, item) {
      var padding = legend.padding,
          legendOptions = legend.options,
          horiz = this.horiz,
          box,
          width = pick(legendOptions.symbolWidth, horiz ? 200 : 12),
          height = pick(legendOptions.symbolHeight, horiz ? 12 : 200),
          labelPadding = pick(legendOptions.labelPadding, horiz ? 16 : 30),
          itemDistance = pick(legendOptions.itemDistance, 10);

      this.setLegendColor();

      // Create the gradient
      item.legendSymbol = this.chart.renderer.rect(
          0,
          legend.baseline - 11,
          width,
          height
      ).attr({
            zIndex: 1
          }).add(item.legendGroup);
      box = item.legendSymbol.getBBox();

      // Set how much space this legend item takes up
      this.legendItemWidth = width + padding + (horiz ? itemDistance : labelPadding);
      this.legendItemHeight = height + padding + (horiz ? labelPadding : 0);
    },
    /**
     * Fool the legend
     */
    setState: noop,
    visible: true,
    setVisible: noop,
    getSeriesExtremes: function () {
      var series;
      if (this.series.length) {
        series = this.series[0];
        this.dataMin = series.valueMin;
        this.dataMax = series.valueMax;
      }
    },
    drawCrosshair: function (e, point) {
      var plotX = point && point.plotX,
          plotY = point && point.plotY,
          crossPos,
          axisPos = this.pos,
          axisLen = this.len;

      if (point) {
        crossPos = this.toPixels(point[point.series.colorKey]);
        if (crossPos < axisPos) {
          crossPos = axisPos - 2;
        } else if (crossPos > axisPos + axisLen) {
          crossPos = axisPos + axisLen + 2;
        }

        point.plotX = crossPos;
        point.plotY = this.len - crossPos;
        Axis.prototype.drawCrosshair.call(this, e, point);
        point.plotX = plotX;
        point.plotY = plotY;

        if (this.cross) {
          this.cross
              .attr({
                fill: this.crosshair.color
              })
              .add(this.legendGroup);
        }
      }
    },
    getPlotLinePath: function (a, b, c, d, pos) {
      if (typeof pos === 'number') { // crosshairs only // #3969 pos can be 0 !!
        return this.horiz ?
            ['M', pos - 4, this.top - 6, 'L', pos + 4, this.top - 6, pos, this.top, 'Z'] :
            ['M', this.left, pos, 'L', this.left - 6, pos + 6, this.left - 6, pos - 6, 'Z'];
      } else {
        return Axis.prototype.getPlotLinePath.call(this, a, b, c, d);
      }
    },

    update: function (newOptions, redraw) {
      var chart = this.chart,
          legend = chart.legend;

      each(this.series, function (series) {
        series.isDirtyData = true; // Needed for Axis.update when choropleth colors change
      });

      // When updating data classes, destroy old items and make sure new ones are created (#3207)
      if (newOptions.dataClasses && legend.allItems) {
        each(legend.allItems, function (item) {
          if (item.isDataClass) {
            item.legendGroup.destroy();
          }
        });
        chart.isDirtyLegend = true;
      }

      // Keep the options structure updated for export. Unlike xAxis and yAxis, the colorAxis is
      // not an array. (#3207)
      chart.options[this.coll] = merge(this.userOptions, newOptions);

      Axis.prototype.update.call(this, newOptions, redraw);
      if (this.legendItem) {
        this.setLegendColor();
        legend.colorizeItem(this, true);
      }
    },

    /**
     * Get the legend item symbols for data classes
     */
    getDataClassLegendSymbols: function () {
      var axis = this,
          chart = this.chart,
          legendItems = this.legendItems,
          legendOptions = chart.options.legend,
          valueDecimals = legendOptions.valueDecimals,
          valueSuffix = legendOptions.valueSuffix || '',
          name;

      if (!legendItems.length) {
        each(this.dataClasses, function (dataClass, i) {
          var vis = true,
              from = dataClass.from,
              to = dataClass.to;

          // Assemble the default name. This can be overridden by legend.options.labelFormatter
          name = '';
          if (from === UNDEFINED) {
            name = '< ';
          } else if (to === UNDEFINED) {
            name = '> ';
          }
          if (from !== UNDEFINED) {
            name += Highcharts.numberFormat(from, valueDecimals) + valueSuffix;
          }
          if (from !== UNDEFINED && to !== UNDEFINED) {
            name += ' - ';
          }
          if (to !== UNDEFINED) {
            name += Highcharts.numberFormat(to, valueDecimals) + valueSuffix;
          }

          // Add a mock object to the legend items
          legendItems.push(extend({
            chart: chart,
            name: name,
            options: {},
            drawLegendSymbol: LegendSymbolMixin.drawRectangle,
            visible: true,
            setState: noop,
            isDataClass: true,
            setVisible: function () {
              vis = this.visible = !vis;
              each(axis.series, function (series) {
                each(series.points, function (point) {
                  if (point.dataClass === i) {
                    point.setVisible(vis);
                  }
                });
              });

              chart.legend.colorizeItem(this, vis);
            }
          }, dataClass));
        });
      }
      return legendItems;
    },
    name: '' // Prevents 'undefined' in legend in IE8
  });

  /**
   * Handle animation of the color attributes directly
   */
  each(['fill', 'stroke'], function (prop) {
    HighchartsAdapter.addAnimSetter(prop, function (fx) {
      fx.elem.attr(prop, ColorAxis.prototype.tweenColors(Color(fx.start), Color(fx.end), fx.pos));
    });
  });

  /**
   * Extend the chart getAxes method to also get the color axis
   */
  wrap(Chart.prototype, 'getAxes', function (proceed) {

    var options = this.options,
        colorAxisOptions = options.colorAxis;

    proceed.call(this);

    this.colorAxis = [];
    if (colorAxisOptions) {
      proceed = new ColorAxis(this, colorAxisOptions); // Fake assignment for jsLint
    }
  });


  /**
   * Wrap the legend getAllItems method to add the color axis. This also removes the
   * axis' own series to prevent them from showing up individually.
   */
  wrap(Legend.prototype, 'getAllItems', function (proceed) {
    var allItems = [],
        colorAxis = this.chart.colorAxis[0];

    if (colorAxis) {

      // Data classes
      if (colorAxis.options.dataClasses) {
        allItems = allItems.concat(colorAxis.getDataClassLegendSymbols());
        // Gradient legend
      } else {
        // Add this axis on top
        allItems.push(colorAxis);
      }

      // Don't add the color axis' series
      each(colorAxis.series, function (series) {
        series.options.showInLegend = false;
      });
    }

    return allItems.concat(proceed.call(this));
  });/**
   * Mixin for maps and heatmaps
   */
  var colorPointMixin = {
        /**
         * Set the visibility of a single point
         */
        setVisible: function (vis) {
          var point = this,
              method = vis ? 'show' : 'hide';

          // Show and hide associated elements
          each(['graphic', 'dataLabel'], function (key) {
            if (point[key]) {
              point[key][method]();
            }
          });
        }
      };
  var colorSeriesMixin = {

    pointAttrToOptions: { // mapping between SVG attributes and the corresponding options
      stroke: 'borderColor',
      'stroke-width': 'borderWidth',
      fill: 'color',
      dashstyle: 'dashStyle'
    },
    pointArrayMap: ['value'],
    axisTypes: ['xAxis', 'yAxis', 'colorAxis'],
    optionalAxis: 'colorAxis',
    trackerGroups: ['group', 'markerGroup', 'dataLabelsGroup'],
    getSymbol: noop,
    parallelArrays: ['x', 'y', 'value'],
    colorKey: 'value',

    /**
     * In choropleth maps, the color is a result of the value, so this needs translation too
     */
    translateColors: function () {
      var series = this,
          nullColor = this.options.nullColor,
          colorAxis = this.colorAxis,
          colorKey = this.colorKey;

      each(this.data, function (point) {
        var value = point[colorKey],
            color;

        color = point.options.color ||
            (value === null ? nullColor : (colorAxis && value !== undefined) ? colorAxis.toColor(value, point) : point.color || series.color);

        if (color) {
          point.color = color;
        }
      });
    }
  };
// Add events to the Chart object itself
  extend(Chart.prototype, {
    renderMapNavigation: function () {
      var chart = this,
          options = this.options.mapNavigation,
          buttons = options.buttons,
          n,
          button,
          buttonOptions,
          attr,
          states,
          stopEvent = function (e) {
            if (e) {
              if (e.preventDefault) {
                e.preventDefault();
              }
              if (e.stopPropagation) {
                e.stopPropagation();
              }
              e.cancelBubble = true;
            }
          },
          outerHandler = function (e) {
            this.handler.call(chart, e);
            stopEvent(e); // Stop default click event (#4444)
          };

      if (pick(options.enableButtons, options.enabled) && !chart.renderer.forExport) {
        for (n in buttons) {
          if (buttons.hasOwnProperty(n)) {
            buttonOptions = merge(options.buttonOptions, buttons[n]);
            attr = buttonOptions.theme;
            attr.style = merge(buttonOptions.theme.style, buttonOptions.style); // #3203
            states = attr.states;
            button = chart.renderer.button(
                buttonOptions.text,
                0,
                0,
                outerHandler,
                attr,
                states && states.hover,
                states && states.select,
                0,
                n === 'zoomIn' ? 'topbutton' : 'bottombutton'
            )
                .attr({
                  width: buttonOptions.width,
                  height: buttonOptions.height,
                  title: chart.options.lang[n],
                  zIndex: 5
                })
                .add();
            button.handler = buttonOptions.onclick;
            button.align(extend(buttonOptions, { width: button.width, height: 2 * button.height }), null, buttonOptions.alignTo);
            addEvent(button.element, 'dblclick', stopEvent); // Stop double click event (#4444)
          }
        }
      }
    },

    /**
     * Fit an inner box to an outer. If the inner box overflows left or right, align it to the sides of the
     * outer. If it overflows both sides, fit it within the outer. This is a pattern that occurs more places
     * in Highcharts, perhaps it should be elevated to a common utility function.
     */
    fitToBox: function (inner, outer) {
      each([['x', 'width'], ['y', 'height']], function (dim) {
        var pos = dim[0],
            size = dim[1];

        if (inner[pos] + inner[size] > outer[pos] + outer[size]) { // right overflow
          if (inner[size] > outer[size]) { // the general size is greater, fit fully to outer
            inner[size] = outer[size];
            inner[pos] = outer[pos];
          } else { // align right
            inner[pos] = outer[pos] + outer[size] - inner[size];
          }
        }
        if (inner[size] > outer[size]) {
          inner[size] = outer[size];
        }
        if (inner[pos] < outer[pos]) {
          inner[pos] = outer[pos];
        }
      });


      return inner;
    },

    /**
     * Zoom the map in or out by a certain amount. Less than 1 zooms in, greater than 1 zooms out.
     */
    mapZoom: function (howMuch, centerXArg, centerYArg, mouseX, mouseY) {
      /*if (this.isMapZooming) {
       this.mapZoomQueue = arguments;
       return;
       }*/

      var chart = this,
          xAxis = chart.xAxis[0],
          xRange = xAxis.max - xAxis.min,
          centerX = pick(centerXArg, xAxis.min + xRange / 2),
          newXRange = xRange * howMuch,
          yAxis = chart.yAxis[0],
          yRange = yAxis.max - yAxis.min,
          centerY = pick(centerYArg, yAxis.min + yRange / 2),
          newYRange = yRange * howMuch,
          fixToX = mouseX ? ((mouseX - xAxis.pos) / xAxis.len) : 0.5,
          fixToY = mouseY ? ((mouseY - yAxis.pos) / yAxis.len) : 0.5,
          newXMin = centerX - newXRange * fixToX,
          newYMin = centerY - newYRange * fixToY,
          newExt = chart.fitToBox({
            x: newXMin,
            y: newYMin,
            width: newXRange,
            height: newYRange
          }, {
            x: xAxis.dataMin,
            y: yAxis.dataMin,
            width: xAxis.dataMax - xAxis.dataMin,
            height: yAxis.dataMax - yAxis.dataMin
          });

      // When mousewheel zooming, fix the point under the mouse
      if (mouseX) {
        xAxis.fixTo = [mouseX - xAxis.pos, centerXArg];
      }
      if (mouseY) {
        yAxis.fixTo = [mouseY - yAxis.pos, centerYArg];
      }

      // Zoom
      if (howMuch !== undefined) {
        xAxis.setExtremes(newExt.x, newExt.x + newExt.width, false);
        yAxis.setExtremes(newExt.y, newExt.y + newExt.height, false);

        // Reset zoom
      } else {
        xAxis.setExtremes(undefined, undefined, false);
        yAxis.setExtremes(undefined, undefined, false);
      }

      // Prevent zooming until this one is finished animating
      /*chart.holdMapZoom = true;
       setTimeout(function () {
       chart.holdMapZoom = false;
       }, 200);*/
      /*delay = animation ? animation.duration || 500 : 0;
       if (delay) {
       chart.isMapZooming = true;
       setTimeout(function () {
       chart.isMapZooming = false;
       if (chart.mapZoomQueue) {
       chart.mapZoom.apply(chart, chart.mapZoomQueue);
       }
       chart.mapZoomQueue = null;
       }, delay);
       }*/

      chart.redraw();
    }
  });

  /**
   * Extend the Chart.render method to add zooming and panning
   */
  wrap(Chart.prototype, 'render', function (proceed) {
    var chart = this,
        mapNavigation = chart.options.mapNavigation;

    // Render the plus and minus buttons. Doing this before the shapes makes getBBox much quicker, at least in Chrome.
    chart.renderMapNavigation();

    proceed.call(chart);

    // Add the double click event
    if (pick(mapNavigation.enableDoubleClickZoom, mapNavigation.enabled) || mapNavigation.enableDoubleClickZoomTo) {
      addEvent(chart.container, 'dblclick', function (e) {
        chart.pointer.onContainerDblClick(e);
      });
    }

    // Add the mousewheel event
    if (pick(mapNavigation.enableMouseWheelZoom, mapNavigation.enabled)) {
      addEvent(chart.container, document.onmousewheel === undefined ? 'DOMMouseScroll' : 'mousewheel', function (e) {
        chart.pointer.onContainerMouseWheel(e);
        return false;
      });
    }
  });

// Extend the Pointer
  extend(Pointer.prototype, {

    /**
     * The event handler for the doubleclick event
     */
    onContainerDblClick: function (e) {
      var chart = this.chart;

      e = this.normalize(e);

      if (chart.options.mapNavigation.enableDoubleClickZoomTo) {
        if (chart.pointer.inClass(e.target, 'highcharts-tracker')) {
          chart.hoverPoint.zoomTo();
        }
      } else if (chart.isInsidePlot(e.chartX - chart.plotLeft, e.chartY - chart.plotTop)) {
        chart.mapZoom(
            0.5,
            chart.xAxis[0].toValue(e.chartX),
            chart.yAxis[0].toValue(e.chartY),
            e.chartX,
            e.chartY
        );
      }
    },

    /**
     * The event handler for the mouse scroll event
     */
    onContainerMouseWheel: function (e) {
      var chart = this.chart,
          delta;

      e = this.normalize(e);

      // Firefox uses e.detail, WebKit and IE uses wheelDelta
      delta = e.detail || -(e.wheelDelta / 120);
      if (chart.isInsidePlot(e.chartX - chart.plotLeft, e.chartY - chart.plotTop)) {
        chart.mapZoom(
            //delta > 0 ? 2 : 0.5,
            Math.pow(2, delta),
            chart.xAxis[0].toValue(e.chartX),
            chart.yAxis[0].toValue(e.chartY),
            e.chartX,
            e.chartY
        );
      }
    }
  });

// Implement the pinchType option
  wrap(Pointer.prototype, 'init', function (proceed, chart, options) {

    proceed.call(this, chart, options);

    // Pinch status
    if (pick(options.mapNavigation.enableTouchZoom, options.mapNavigation.enabled)) {
      this.pinchX = this.pinchHor = this.pinchY = this.pinchVert = this.hasZoom = true;
    }
  });

// Extend the pinchTranslate method to preserve fixed ratio when zooming
  wrap(Pointer.prototype, 'pinchTranslate', function (proceed, pinchDown, touches, transform, selectionMarker, clip, lastValidTouch) {
    var xBigger;
    proceed.call(this, pinchDown, touches, transform, selectionMarker, clip, lastValidTouch);

    // Keep ratio
    if (this.chart.options.chart.type === 'map' && this.hasZoom) {
      xBigger = transform.scaleX > transform.scaleY;
      this.pinchTranslateDirection(
          !xBigger,
          pinchDown,
          touches,
          transform,
          selectionMarker,
          clip,
          lastValidTouch,
          xBigger ? transform.scaleX : transform.scaleY
      );
    }
  });


// The vector-effect attribute is not supported in IE <= 11 (at least), so we need
// diffent logic (#3218)
  var supportsVectorEffect = document.documentElement.style.vectorEffect !== undefined;

  /**
   * Extend the default options with map options
   */
  defaultPlotOptions.map = merge(defaultPlotOptions.scatter, {
    allAreas: true,

    animation: false, // makes the complex shapes slow
    nullColor: '#F8F8F8',
    borderColor: 'silver',
    borderWidth: 1,
    marker: null,
    stickyTracking: false,
    dataLabels: {
      formatter: function () { // #2945
        return this.point.value;
      },
      inside: true, // for the color
      verticalAlign: 'middle',
      crop: false,
      overflow: false,
      padding: 0
    },
    turboThreshold: 0,
    tooltip: {
      followPointer: true,
      pointFormat: '{point.name}: {point.value}<br/>'
    },
    states: {
      normal: {
        animation: true
      },
      hover: {
        brightness: 0.2,
        halo: null
      }
    }
  });

  /**
   * The MapAreaPoint object
   */
  var MapAreaPoint = extendClass(Point, extend({
        /**
         * Extend the Point object to split paths
         */
        applyOptions: function (options, x) {

          var point = Point.prototype.applyOptions.call(this, options, x),
              series = this.series,
              joinBy = series.joinBy,
              mapPoint;

          if (series.mapData) {
            mapPoint = point[joinBy[1]] !== undefined && series.mapMap[point[joinBy[1]]];
            if (mapPoint) {
              // This applies only to bubbles
              if (series.xyFromShape) {
                point.x = mapPoint._midX;
                point.y = mapPoint._midY;
              }
              extend(point, mapPoint); // copy over properties
            } else {
              point.value = point.value || null;
            }
          }

          return point;
        },

        /**
         * Stop the fade-out
         */
        onMouseOver: function (e) {
          clearTimeout(this.colorInterval);
          if (this.value !== null) {
            Point.prototype.onMouseOver.call(this, e);
          } else { //#3401 Tooltip doesn't hide when hovering over null points
            this.series.onMouseOut(e);
          }
        },
        /**
         * Custom animation for tweening out the colors. Animation reduces blinking when hovering
         * over islands and coast lines. We run a custom implementation of animation becuase we
         * need to be able to run this independently from other animations like zoom redraw. Also,
         * adding color animation to the adapters would introduce almost the same amount of code.
         */
        onMouseOut: function () {
          var point = this,
              start = +new Date(),
              normalColor = Color(point.color),
              hoverColor = Color(point.pointAttr.hover.fill),
              animation = point.series.options.states.normal.animation,
              duration = animation && (animation.duration || 500),
              fill;

          if (duration && normalColor.rgba.length === 4 && hoverColor.rgba.length === 4 && point.state !== 'select') {
            fill = point.pointAttr[''].fill;
            delete point.pointAttr[''].fill; // avoid resetting it in Point.setState

            clearTimeout(point.colorInterval);
            point.colorInterval = setInterval(function () {
              var pos = (new Date() - start) / duration,
                  graphic = point.graphic;
              if (pos > 1) {
                pos = 1;
              }
              if (graphic) {
                graphic.attr('fill', ColorAxis.prototype.tweenColors.call(0, hoverColor, normalColor, pos));
              }
              if (pos >= 1) {
                clearTimeout(point.colorInterval);
              }
            }, 13);
          }
          Point.prototype.onMouseOut.call(point);

          if (fill) {
            point.pointAttr[''].fill = fill;
          }
        },

        /**
         * Zoom the chart to view a specific area point
         */
        zoomTo: function () {
          var point = this,
              series = point.series;

          series.xAxis.setExtremes(
              point._minX,
              point._maxX,
              false
          );
          series.yAxis.setExtremes(
              point._minY,
              point._maxY,
              false
          );
          series.chart.redraw();
        }
      }, colorPointMixin)
  );

  /**
   * Add the series type
   */
  seriesTypes.map = extendClass(seriesTypes.scatter, merge(colorSeriesMixin, {
    type: 'map',
    pointClass: MapAreaPoint,
    supportsDrilldown: true,
    getExtremesFromAll: true,
    useMapGeometry: true, // get axis extremes from paths, not values
    forceDL: true,
    searchPoint: noop,
    directTouch: true, // When tooltip is not shared, this series (and derivatives) requires direct touch/hover. KD-tree does not apply.
    preserveAspectRatio: true, // X axis and Y axis must have same translation slope
    /**
     * Get the bounding box of all paths in the map combined.
     */
    getBox: function (paths) {
      var MAX_VALUE = Number.MAX_VALUE,
          maxX = -MAX_VALUE,
          minX =  MAX_VALUE,
          maxY = -MAX_VALUE,
          minY =  MAX_VALUE,
          minRange = MAX_VALUE,
          xAxis = this.xAxis,
          yAxis = this.yAxis,
          hasBox;

      // Find the bounding box
      each(paths || [], function (point) {

        if (point.path) {
          if (typeof point.path === 'string') {
            point.path = Highcharts.splitPath(point.path);
          }

          var path = point.path || [],
              i = path.length,
              even = false, // while loop reads from the end
              pointMaxX = -MAX_VALUE,
              pointMinX =  MAX_VALUE,
              pointMaxY = -MAX_VALUE,
              pointMinY =  MAX_VALUE,
              properties = point.properties;

          // The first time a map point is used, analyze its box
          if (!point._foundBox) {
            while (i--) {
              if (typeof path[i] === 'number' && !isNaN(path[i])) {
                if (even) { // even = x
                  pointMaxX = Math.max(pointMaxX, path[i]);
                  pointMinX = Math.min(pointMinX, path[i]);
                } else { // odd = Y
                  pointMaxY = Math.max(pointMaxY, path[i]);
                  pointMinY = Math.min(pointMinY, path[i]);
                }
                even = !even;
              }
            }
            // Cache point bounding box for use to position data labels, bubbles etc
            point._midX = pointMinX + (pointMaxX - pointMinX) *
                (point.middleX || (properties && properties['hc-middle-x']) || 0.5); // pick is slower and very marginally needed
            point._midY = pointMinY + (pointMaxY - pointMinY) *
                (point.middleY || (properties && properties['hc-middle-y']) || 0.5);
            point._maxX = pointMaxX;
            point._minX = pointMinX;
            point._maxY = pointMaxY;
            point._minY = pointMinY;
            point.labelrank = pick(point.labelrank, (pointMaxX - pointMinX) * (pointMaxY - pointMinY));
            point._foundBox = true;
          }

          maxX = Math.max(maxX, point._maxX);
          minX = Math.min(minX, point._minX);
          maxY = Math.max(maxY, point._maxY);
          minY = Math.min(minY, point._minY);
          minRange = Math.min(point._maxX - point._minX, point._maxY - point._minY, minRange);
          hasBox = true;
        }
      });

      // Set the box for the whole series
      if (hasBox) {
        this.minY = Math.min(minY, pick(this.minY, MAX_VALUE));
        this.maxY = Math.max(maxY, pick(this.maxY, -MAX_VALUE));
        this.minX = Math.min(minX, pick(this.minX, MAX_VALUE));
        this.maxX = Math.max(maxX, pick(this.maxX, -MAX_VALUE));

        // If no minRange option is set, set the default minimum zooming range to 5 times the
        // size of the smallest element
        if (xAxis && xAxis.options.minRange === undefined) {
          xAxis.minRange = Math.min(5 * minRange, (this.maxX - this.minX) / 5, xAxis.minRange || MAX_VALUE);
        }
        if (yAxis && yAxis.options.minRange === undefined) {
          yAxis.minRange = Math.min(5 * minRange, (this.maxY - this.minY) / 5, yAxis.minRange || MAX_VALUE);
        }
      }
    },

    getExtremes: function () {
      // Get the actual value extremes for colors
      Series.prototype.getExtremes.call(this, this.valueData);

      // Recalculate box on updated data
      if (this.chart.hasRendered && this.isDirtyData) {
        this.getBox(this.options.data);
      }

      this.valueMin = this.dataMin;
      this.valueMax = this.dataMax;

      // Extremes for the mock Y axis
      this.dataMin = this.minY;
      this.dataMax = this.maxY;
    },

    /**
     * Translate the path so that it automatically fits into the plot area box
     * @param {Object} path
     */
    translatePath: function (path) {

      var series = this,
          even = false, // while loop reads from the end
          xAxis = series.xAxis,
          yAxis = series.yAxis,
          xMin = xAxis.min,
          xTransA = xAxis.transA,
          xMinPixelPadding = xAxis.minPixelPadding,
          yMin = yAxis.min,
          yTransA = yAxis.transA,
          yMinPixelPadding = yAxis.minPixelPadding,
          i,
          ret = []; // Preserve the original

      // Do the translation
      if (path) {
        i = path.length;
        while (i--) {
          if (typeof path[i] === 'number') {
            ret[i] = even ?
            (path[i] - xMin) * xTransA + xMinPixelPadding :
            (path[i] - yMin) * yTransA + yMinPixelPadding;
            even = !even;
          } else {
            ret[i] = path[i];
          }
        }
      }

      return ret;
    },

    /**
     * Extend setData to join in mapData. If the allAreas option is true, all areas
     * from the mapData are used, and those that don't correspond to a data value
     * are given null values.
     */
    setData: function (data, redraw) {
      var options = this.options,
          mapData = options.mapData,
          joinBy = options.joinBy,
          joinByNull = joinBy === null,
          dataUsed = [],
          mapPoint,
          transform,
          mapTransforms,
          props,
          i;

      if (joinByNull) {
        joinBy = '_i';
      }
      joinBy = this.joinBy = Highcharts.splat(joinBy);
      if (!joinBy[1]) {
        joinBy[1] = joinBy[0];
      }

      // Pick up numeric values, add index
      if (data) {
        each(data, function (val, i) {
          if (typeof val === 'number') {
            data[i] = {
              value: val
            };
          }
          if (joinByNull) {
            data[i]._i = i;
          }
        });
      }

      this.getBox(data);
      if (mapData) {
        if (mapData.type === 'FeatureCollection') {
          if (mapData['hc-transform']) {
            this.chart.mapTransforms = mapTransforms = mapData['hc-transform'];
            // Cache cos/sin of transform rotation angle
            for (transform in mapTransforms) {
              if (mapTransforms.hasOwnProperty(transform) && transform.rotation) {
                transform.cosAngle = Math.cos(transform.rotation);
                transform.sinAngle = Math.sin(transform.rotation);
              }
            }
          }
          mapData = Highcharts.geojson(mapData, this.type, this);
        }

        this.getBox(mapData);
        this.mapData = mapData;
        this.mapMap = {};

        for (i = 0; i < mapData.length; i++) {
          mapPoint = mapData[i];
          props = mapPoint.properties;

          mapPoint._i = i;
          // Copy the property over to root for faster access
          if (joinBy[0] && props && props[joinBy[0]]) {
            mapPoint[joinBy[0]] = props[joinBy[0]];
          }
          this.mapMap[mapPoint[joinBy[0]]] = mapPoint;
        }

        if (options.allAreas) {

          data = data || [];

          // Registered the point codes that actually hold data
          if (joinBy[1]) {
            each(data, function (point) {
              dataUsed.push(point[joinBy[1]]);
            });
          }

          // Add those map points that don't correspond to data, which will be drawn as null points
          dataUsed = '|' + dataUsed.join('|') + '|'; // String search is faster than array.indexOf

          each(mapData, function (mapPoint) {
            if (!joinBy[0] || dataUsed.indexOf('|' + mapPoint[joinBy[0]] + '|') === -1) {
              data.push(merge(mapPoint, { value: null }));
            }
          });
        }
      }
      Series.prototype.setData.call(this, data, redraw);
    },


    /**
     * No graph for the map series
     */
    drawGraph: noop,

    /**
     * We need the points' bounding boxes in order to draw the data labels, so
     * we skip it now and call it from drawPoints instead.
     */
    drawDataLabels: noop,

    /**
     * Allow a quick redraw by just translating the area group. Used for zooming and panning
     * in capable browsers.
     */
    doFullTranslate: function () {
      return this.isDirtyData || this.chart.isResizing || this.chart.renderer.isVML || !this.baseTrans;
    },

    /**
     * Add the path option for data points. Find the max value for color calculation.
     */
    translate: function () {
      var series = this,
          xAxis = series.xAxis,
          yAxis = series.yAxis,
          doFullTranslate = series.doFullTranslate();

      series.generatePoints();

      each(series.data, function (point) {

        // Record the middle point (loosely based on centroid), determined
        // by the middleX and middleY options.
        point.plotX = xAxis.toPixels(point._midX, true);
        point.plotY = yAxis.toPixels(point._midY, true);

        if (doFullTranslate) {

          point.shapeType = 'path';
          point.shapeArgs = {
            d: series.translatePath(point.path)
          };
          if (supportsVectorEffect) {
            point.shapeArgs['vector-effect'] = 'non-scaling-stroke';
          }
        }
      });

      series.translateColors();
    },

    /**
     * Use the drawPoints method of column, that is able to handle simple shapeArgs.
     * Extend it by assigning the tooltip position.
     */
    drawPoints: function () {
      var series = this,
          xAxis = series.xAxis,
          yAxis = series.yAxis,
          group = series.group,
          chart = series.chart,
          renderer = chart.renderer,
          scaleX,
          scaleY,
          translateX,
          translateY,
          baseTrans = this.baseTrans;

      // Set a group that handles transform during zooming and panning in order to preserve clipping
      // on series.group
      if (!series.transformGroup) {
        series.transformGroup = renderer.g()
            .attr({
              scaleX: 1,
              scaleY: 1
            })
            .add(group);
        series.transformGroup.survive = true;
      }

      // Draw the shapes again
      if (series.doFullTranslate()) {

        // Individual point actions
        if (chart.hasRendered && series.pointAttrToOptions.fill === 'color') {
          each(series.points, function (point) {

            // Reset color on update/redraw
            if (point.shapeArgs) {
              point.shapeArgs.fill = point.pointAttr[pick(point.state, '')].fill; // #3529
            }
          });
        }

        // If vector-effect is not supported, we set the stroke-width on the group element
        // and let all point graphics inherit. That way we don't have to iterate over all
        // points to update the stroke-width on zooming.
        if (!supportsVectorEffect) {
          each(series.points, function (point) {
            var attr = point.pointAttr[''];
            if (attr['stroke-width'] === series.pointAttr['']['stroke-width']) {
              attr['stroke-width'] = 'inherit';
            }
          });
        }

        // Draw them in transformGroup
        series.group = series.transformGroup;
        seriesTypes.column.prototype.drawPoints.apply(series);
        series.group = group; // Reset

        // Add class names
        each(series.points, function (point) {
          if (point.graphic) {
            if (point.name) {
              point.graphic.addClass('highcharts-name-' + point.name.replace(' ', '-').toLowerCase());
            }
            if (point.properties && point.properties['hc-key']) {
              point.graphic.addClass('highcharts-key-' + point.properties['hc-key'].toLowerCase());
            }

            if (!supportsVectorEffect) {
              point.graphic['stroke-widthSetter'] = noop;
            }
          }
        });

        // Set the base for later scale-zooming. The originX and originY properties are the
        // axis values in the plot area's upper left corner.
        this.baseTrans = {
          originX: xAxis.min - xAxis.minPixelPadding / xAxis.transA,
          originY: yAxis.min - yAxis.minPixelPadding / yAxis.transA + (yAxis.reversed ? 0 : yAxis.len / yAxis.transA),
          transAX: xAxis.transA,
          transAY: yAxis.transA
        };

        // Reset transformation in case we're doing a full translate (#3789)
        this.transformGroup.animate({
          translateX: 0,
          translateY: 0,
          scaleX: 1,
          scaleY: 1
        });

        // Just update the scale and transform for better performance
      } else {
        scaleX = xAxis.transA / baseTrans.transAX;
        scaleY = yAxis.transA / baseTrans.transAY;
        translateX = xAxis.toPixels(baseTrans.originX, true);
        translateY = yAxis.toPixels(baseTrans.originY, true);

        // Handle rounding errors in normal view (#3789)
        if (scaleX > 0.99 && scaleX < 1.01 && scaleY > 0.99 && scaleY < 1.01) {
          scaleX = 1;
          scaleY = 1;
          translateX = Math.round(translateX);
          translateY = Math.round(translateY);
        }

        this.transformGroup.animate({
          translateX: translateX,
          translateY: translateY,
          scaleX: scaleX,
          scaleY: scaleY
        });

      }

      // Set the stroke-width directly on the group element so the children inherit it. We need to use
      // setAttribute directly, because the stroke-widthSetter method expects a stroke color also to be
      // set.
      if (!supportsVectorEffect) {
        series.group.element.setAttribute('stroke-width', series.options.borderWidth / (scaleX || 1));
      }

      this.drawMapDataLabels();


    },

    /**
     * Draw the data labels. Special for maps is the time that the data labels are drawn (after points),
     * and the clipping of the dataLabelsGroup.
     */
    drawMapDataLabels: function () {

      Series.prototype.drawDataLabels.call(this);
      if (this.dataLabelsGroup) {
        this.dataLabelsGroup.clip(this.chart.clipRect);
      }
    },

    /**
     * Override render to throw in an async call in IE8. Otherwise it chokes on the US counties demo.
     */
    render: function () {
      var series = this,
          render = Series.prototype.render;

      // Give IE8 some time to breathe.
      if (series.chart.renderer.isVML && series.data.length > 3000) {
        setTimeout(function () {
          render.call(series);
        });
      } else {
        render.call(series);
      }
    },

    /**
     * The initial animation for the map series. By default, animation is disabled.
     * Animation of map shapes is not at all supported in VML browsers.
     */
    animate: function (init) {
      var chart = this.chart,
          animation = this.options.animation,
          group = this.group,
          xAxis = this.xAxis,
          yAxis = this.yAxis,
          left = xAxis.pos,
          top = yAxis.pos;

      if (chart.renderer.isSVG) {

        if (animation === true) {
          animation = {
            duration: 1000
          };
        }

        // Initialize the animation
        if (init) {

          // Scale down the group and place it in the center
          group.attr({
            translateX: left + xAxis.len / 2,
            translateY: top + yAxis.len / 2,
            scaleX: 0.001, // #1499
            scaleY: 0.001
          });

          // Run the animation
        } else {
          group.animate({
            translateX: left,
            translateY: top,
            scaleX: 1,
            scaleY: 1
          }, animation);

          // Delete this function to allow it only once
          this.animate = null;
        }
      }
    },

    /**
     * Animate in the new series from the clicked point in the old series.
     * Depends on the drilldown.js module
     */
    animateDrilldown: function (init) {
      var toBox = this.chart.plotBox,
          level = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1],
          fromBox = level.bBox,
          animationOptions = this.chart.options.drilldown.animation,
          scale;

      if (!init) {

        scale = Math.min(fromBox.width / toBox.width, fromBox.height / toBox.height);
        level.shapeArgs = {
          scaleX: scale,
          scaleY: scale,
          translateX: fromBox.x,
          translateY: fromBox.y
        };

        // TODO: Animate this.group instead
        each(this.points, function (point) {
          if (point.graphic) {
            point.graphic
                .attr(level.shapeArgs)
                .animate({
                  scaleX: 1,
                  scaleY: 1,
                  translateX: 0,
                  translateY: 0
                }, animationOptions);
          }
        });

        this.animate = null;
      }

    },

    drawLegendSymbol: LegendSymbolMixin.drawRectangle,

    /**
     * When drilling up, pull out the individual point graphics from the lower series
     * and animate them into the origin point in the upper series.
     */
    animateDrillupFrom: function (level) {
      seriesTypes.column.prototype.animateDrillupFrom.call(this, level);
    },


    /**
     * When drilling up, keep the upper series invisible until the lower series has
     * moved into place
     */
    animateDrillupTo: function (init) {
      seriesTypes.column.prototype.animateDrillupTo.call(this, init);
    }
  }));


// The mapline series type
  defaultPlotOptions.mapline = merge(defaultPlotOptions.map, {
    lineWidth: 1,
    fillColor: 'none'
  });
  seriesTypes.mapline = extendClass(seriesTypes.map, {
    type: 'mapline',
    pointAttrToOptions: { // mapping between SVG attributes and the corresponding options
      stroke: 'color',
      'stroke-width': 'lineWidth',
      fill: 'fillColor',
      dashstyle: 'dashStyle'
    },
    drawLegendSymbol: seriesTypes.line.prototype.drawLegendSymbol
  });

// The mappoint series type
  defaultPlotOptions.mappoint = merge(defaultPlotOptions.scatter, {
    dataLabels: {
      enabled: true,
      formatter: function () { // #2945
        return this.point.name;
      },
      crop: false,
      defer: false,
      overflow: false,
      style: {
        color: '#000000'
      }
    }
  });
  seriesTypes.mappoint = extendClass(seriesTypes.scatter, {
    type: 'mappoint',
    forceDL: true,
    pointClass: extendClass(Point, {
      applyOptions: function (options, x) {
        var point = Point.prototype.applyOptions.call(this, options, x);
        if (options.lat !== undefined && options.lon !== undefined) {
          point = extend(point, this.series.chart.fromLatLonToPoint(point));
        }
        return point;
      }
    })
  });

// The mapbubble series type
  if (seriesTypes.bubble) {

    defaultPlotOptions.mapbubble = merge(defaultPlotOptions.bubble, {
      animationLimit: 500,
      tooltip: {
        pointFormat: '{point.name}: {point.z}'
      }
    });
    seriesTypes.mapbubble = extendClass(seriesTypes.bubble, {
      pointClass: extendClass(Point, {
        applyOptions: function (options, x) {
          var point;
          if (options && options.lat !== undefined && options.lon !== undefined) {
            point = Point.prototype.applyOptions.call(this, options, x);
            point = extend(point, this.series.chart.fromLatLonToPoint(point));
          } else {
            point = MapAreaPoint.prototype.applyOptions.call(this, options, x);
          }
          return point;
        },
        ttBelow: false
      }),
      xyFromShape: true,
      type: 'mapbubble',
      pointArrayMap: ['z'], // If one single value is passed, it is interpreted as z
      /**
       * Return the map area identified by the dataJoinBy option
       */
      getMapData: seriesTypes.map.prototype.getMapData,
      getBox: seriesTypes.map.prototype.getBox,
      setData: seriesTypes.map.prototype.setData
    });
  }

  /**
   * Extend the default options with map options
   */
  defaultOptions.plotOptions.heatmap = merge(defaultOptions.plotOptions.scatter, {
    animation: false,
    borderWidth: 0,
    nullColor: '#F8F8F8',
    dataLabels: {
      formatter: function () { // #2945
        return this.point.value;
      },
      inside: true,
      verticalAlign: 'middle',
      crop: false,
      overflow: false,
      padding: 0 // #3837
    },
    marker: null,
    pointRange: null, // dynamically set to colsize by default
    tooltip: {
      pointFormat: '{point.x}, {point.y}: {point.value}<br/>'
    },
    states: {
      normal: {
        animation: true
      },
      hover: {
        halo: false,  // #3406, halo is not required on heatmaps
        brightness: 0.2
      }
    }
  });

// The Heatmap series type
  seriesTypes.heatmap = extendClass(seriesTypes.scatter, merge(colorSeriesMixin, {
    type: 'heatmap',
    pointArrayMap: ['y', 'value'],
    hasPointSpecificOptions: true,
    pointClass: extendClass(Point, colorPointMixin),
    supportsDrilldown: true,
    getExtremesFromAll: true,
    directTouch: true,

    /**
     * Override the init method to add point ranges on both axes.
     */
    init: function () {
      var options;
      seriesTypes.scatter.prototype.init.apply(this, arguments);

      options = this.options;
      this.pointRange = options.pointRange = pick(options.pointRange, options.colsize || 1); // #3758, prevent resetting in setData
      this.yAxis.axisPointRange = options.rowsize || 1; // general point range
    },
    translate: function () {
      var series = this,
          options = series.options,
          xAxis = series.xAxis,
          yAxis = series.yAxis,
          between = function (x, a, b) {
            return Math.min(Math.max(a, x), b);
          };

      series.generatePoints();

      each(series.points, function (point) {
        var xPad = (options.colsize || 1) / 2,
            yPad = (options.rowsize || 1) / 2,
            x1 = between(Math.round(xAxis.len - xAxis.translate(point.x - xPad, 0, 1, 0, 1)), 0, xAxis.len),
            x2 = between(Math.round(xAxis.len - xAxis.translate(point.x + xPad, 0, 1, 0, 1)), 0, xAxis.len),
            y1 = between(Math.round(yAxis.translate(point.y - yPad, 0, 1, 0, 1)), 0, yAxis.len),
            y2 = between(Math.round(yAxis.translate(point.y + yPad, 0, 1, 0, 1)), 0, yAxis.len);

        // Set plotX and plotY for use in K-D-Tree and more
        point.plotX = point.clientX = (x1 + x2) / 2;
        point.plotY = (y1 + y2) / 2;

        point.shapeType = 'rect';
        point.shapeArgs = {
          x: Math.min(x1, x2),
          y: Math.min(y1, y2),
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1)
        };
      });

      series.translateColors();

      // Make sure colors are updated on colorAxis update (#2893)
      if (this.chart.hasRendered) {
        each(series.points, function (point) {
          point.shapeArgs.fill = point.options.color || point.color; // #3311
        });
      }
    },
    drawPoints: seriesTypes.column.prototype.drawPoints,
    animate: noop,
    getBox: noop,
    drawLegendSymbol: LegendSymbolMixin.drawRectangle,

    getExtremes: function () {
      // Get the extremes from the value data
      Series.prototype.getExtremes.call(this, this.valueData);
      this.valueMin = this.dataMin;
      this.valueMax = this.dataMax;

      // Get the extremes from the y data
      Series.prototype.getExtremes.call(this);
    }

  }));


  /**
   * Test for point in polygon. Polygon defined as array of [x,y] points.
   */
  function pointInPolygon(point, polygon) {
    var i, j, rel1, rel2, c = false,
        x = point.x,
        y = point.y;

    for (i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      rel1 = polygon[i][1] > y;
      rel2 = polygon[j][1] > y;
      if (rel1 !== rel2 && (x < (polygon[j][0] - polygon[i][0]) * (y - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0])) {
        c = !c;
      }
    }

    return c;
  }

  /**
   * Get point from latLon using specified transform definition
   */
  Chart.prototype.transformFromLatLon = function (latLon, transform) {
    if (window.proj4 === undefined) {
      error(21);
      return {
        x: 0,
        y: null
      };
    }

    var projected = window.proj4(transform.crs, [latLon.lon, latLon.lat]),
        cosAngle = transform.cosAngle || (transform.rotation && Math.cos(transform.rotation)),
        sinAngle = transform.sinAngle || (transform.rotation && Math.sin(transform.rotation)),
        rotated = transform.rotation ? [projected[0] * cosAngle + projected[1] * sinAngle, -projected[0] * sinAngle + projected[1] * cosAngle] : projected;

    return {
      x: ((rotated[0] - (transform.xoffset || 0)) * (transform.scale || 1) + (transform.xpan || 0)) * (transform.jsonres || 1) + (transform.jsonmarginX || 0),
      y: (((transform.yoffset || 0) - rotated[1]) * (transform.scale || 1) + (transform.ypan || 0)) * (transform.jsonres || 1) - (transform.jsonmarginY || 0)
    };
  };

  /**
   * Get latLon from point using specified transform definition
   */
  Chart.prototype.transformToLatLon = function (point, transform) {
    if (window.proj4 === undefined) {
      error(21);
      return;
    }

    var normalized = {
          x: ((point.x - (transform.jsonmarginX || 0)) / (transform.jsonres || 1) - (transform.xpan || 0)) / (transform.scale || 1) + (transform.xoffset || 0),
          y: ((-point.y - (transform.jsonmarginY || 0)) / (transform.jsonres || 1) + (transform.ypan || 0)) / (transform.scale || 1) + (transform.yoffset || 0)
        },
        cosAngle = transform.cosAngle || (transform.rotation && Math.cos(transform.rotation)),
        sinAngle = transform.sinAngle || (transform.rotation && Math.sin(transform.rotation)),
    // Note: Inverted sinAngle to reverse rotation direction
        projected = window.proj4(transform.crs, 'WGS84', transform.rotation ? {
          x: normalized.x * cosAngle + normalized.y * -sinAngle,
          y: normalized.x * sinAngle + normalized.y * cosAngle
        } : normalized);

    return {lat: projected.y, lon: projected.x};
  };

  Chart.prototype.fromPointToLatLon = function (point) {
    var transforms = this.mapTransforms,
        transform;

    if (!transforms) {
      error(22);
      return;
    }

    for (transform in transforms) {
      if (transforms.hasOwnProperty(transform) && transforms[transform].hitZone && pointInPolygon({x: point.x, y: -point.y}, transforms[transform].hitZone.coordinates[0])) {
        return this.transformToLatLon(point, transforms[transform]);
      }
    }

    return this.transformToLatLon(point, transforms['default']);
  };

  Chart.prototype.fromLatLonToPoint = function (latLon) {
    var transforms = this.mapTransforms,
        transform,
        coords;

    if (!transforms) {
      error(22);
      return {
        x: 0,
        y: null
      };
    }

    for (transform in transforms) {
      if (transforms.hasOwnProperty(transform) && transforms[transform].hitZone) {
        coords = this.transformFromLatLon(latLon, transforms[transform]);
        if (pointInPolygon({x: coords.x, y: -coords.y}, transforms[transform].hitZone.coordinates[0])) {
          return coords;
        }
      }
    }

    return this.transformFromLatLon(latLon, transforms['default']);
  };

  /**
   * Convert a geojson object to map data of a given Highcharts type (map, mappoint or mapline).
   */
  Highcharts.geojson = function (geojson, hType, series) {
    var mapData = [],
        path = [],
        polygonToPath = function (polygon) {
          var i = 0,
              len = polygon.length;
          path.push('M');
          for (; i < len; i++) {
            if (i === 1) {
              path.push('L');
            }
            path.push(polygon[i][0], -polygon[i][1]);
          }
        };

    hType = hType || 'map';

    each(geojson.features, function (feature) {

      var geometry = feature.geometry,
          type = geometry.type,
          coordinates = geometry.coordinates,
          properties = feature.properties,
          point;

      path = [];

      if (hType === 'map' || hType === 'mapbubble') {
        if (type === 'Polygon') {
          each(coordinates, polygonToPath);
          path.push('Z');

        } else if (type === 'MultiPolygon') {
          each(coordinates, function (items) {
            each(items, polygonToPath);
          });
          path.push('Z');
        }

        if (path.length) {
          point = { path: path };
        }

      } else if (hType === 'mapline') {
        if (type === 'LineString') {
          polygonToPath(coordinates);
        } else if (type === 'MultiLineString') {
          each(coordinates, polygonToPath);
        }

        if (path.length) {
          point = { path: path };
        }

      } else if (hType === 'mappoint') {
        if (type === 'Point') {
          point = {
            x: coordinates[0],
            y: -coordinates[1]
          };
        }
      }
      if (point) {
        mapData.push(extend(point, {
          name: properties.name || properties.NAME,
          properties: properties
        }));
      }

    });

    // Create a credits text that includes map source, to be picked up in Chart.showCredits
    if (series && geojson.copyrightShort) {
      series.chart.mapCredits = '<a href="http://www.highcharts.com">Highcharts</a> \u00A9 ' +
          '<a href="' + geojson.copyrightUrl + '">' + geojson.copyrightShort + '</a>';
      series.chart.mapCreditsFull = geojson.copyright;
    }

    return mapData;
  };

  /**
   * Override showCredits to include map source by default
   */
  wrap(Chart.prototype, 'showCredits', function (proceed, credits) {

    if (defaultOptions.credits.text === this.options.credits.text && this.mapCredits) { // default text and mapCredits is set
      credits.text = this.mapCredits;
      credits.href = null;
    }

    proceed.call(this, credits);

    if (this.credits) {
      this.credits.attr({
        title: this.mapCreditsFull
      });
    }
  });

// Add language
  extend(defaultOptions.lang, {
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out'
  });


// Set the default map navigation options
  defaultOptions.mapNavigation = {
    buttonOptions: {
      alignTo: 'plotBox',
      align: 'left',
      verticalAlign: 'top',
      x: 0,
      width: 18,
      height: 18,
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
        textAlign: 'center'
      },
      theme: {
        'stroke-width': 1
      }
    },
    buttons: {
      zoomIn: {
        onclick: function () {
          this.mapZoom(0.5);
        },
        text: '+',
        y: 0
      },
      zoomOut: {
        onclick: function () {
          this.mapZoom(2);
        },
        text: '-',
        y: 28
      }
    }
    // enabled: false,
    // enableButtons: null, // inherit from enabled
    // enableTouchZoom: null, // inherit from enabled
    // enableDoubleClickZoom: null, // inherit from enabled
    // enableDoubleClickZoomTo: false
    // enableMouseWheelZoom: null, // inherit from enabled
  };

  /**
   * Utility for reading SVG paths directly.
   */
  Highcharts.splitPath = function (path) {
    var i;

    // Move letters apart
    path = path.replace(/([A-Za-z])/g, ' $1 ');
    // Trim
    path = path.replace(/^\s*/, "").replace(/\s*$/, "");

    // Split on spaces and commas
    path = path.split(/[ ,]+/);

    // Parse numbers
    for (i = 0; i < path.length; i++) {
      if (!/[a-zA-Z]/.test(path[i])) {
        path[i] = parseFloat(path[i]);
      }
    }
    return path;
  };

// A placeholder for map definitions
  Highcharts.maps = {};





// Create symbols for the zoom buttons
  function selectiveRoundedRect(x, y, w, h, rTopLeft, rTopRight, rBottomRight, rBottomLeft) {
    return ['M', x + rTopLeft, y,
      // top side
      'L', x + w - rTopRight, y,
      // top right corner
      'C', x + w - rTopRight / 2, y, x + w, y + rTopRight / 2, x + w, y + rTopRight,
      // right side
      'L', x + w, y + h - rBottomRight,
      // bottom right corner
      'C', x + w, y + h - rBottomRight / 2, x + w - rBottomRight / 2, y + h, x + w - rBottomRight, y + h,
      // bottom side
      'L', x + rBottomLeft, y + h,
      // bottom left corner
      'C', x + rBottomLeft / 2, y + h, x, y + h - rBottomLeft / 2, x, y + h - rBottomLeft,
      // left side
      'L', x, y + rTopLeft,
      // top left corner
      'C', x, y + rTopLeft / 2, x + rTopLeft / 2, y, x + rTopLeft, y,
      'Z'
    ];
  }
  SVGRenderer.prototype.symbols.topbutton = function (x, y, w, h, attr) {
    return selectiveRoundedRect(x - 1, y - 1, w, h, attr.r, attr.r, 0, 0);
  };
  SVGRenderer.prototype.symbols.bottombutton = function (x, y, w, h, attr) {
    return selectiveRoundedRect(x - 1, y - 1, w, h, 0, 0, attr.r, attr.r);
  };
// The symbol callbacks are generated on the SVGRenderer object in all browsers. Even
// VML browsers need this in order to generate shapes in export. Now share
// them with the VMLRenderer.
  if (Renderer === VMLRenderer) {
    each(['topbutton', 'bottombutton'], function (shape) {
      VMLRenderer.prototype.symbols[shape] = SVGRenderer.prototype.symbols[shape];
    });
  }


  /**
   * A wrapper for Chart with all the default values for a Map
   */
  Highcharts.Map = function (options, callback) {

    var hiddenAxis = {
          endOnTick: false,
          gridLineWidth: 0,
          lineWidth: 0,
          minPadding: 0,
          maxPadding: 0,
          startOnTick: false,
          title: null,
          tickPositions: []
        },
        seriesOptions;

    /* For visual testing
     hiddenAxis.gridLineWidth = 1;
     hiddenAxis.gridZIndex = 10;
     hiddenAxis.tickPositions = undefined;
     // */

    // Don't merge the data
    seriesOptions = options.series;
    options.series = null;

    options = merge({
          chart: {
            panning: 'xy',
            type: 'map'
          },
          xAxis: hiddenAxis,
          yAxis: merge(hiddenAxis, { reversed: true })
        },
        options, // user's options

        { // forced options
          chart: {
            inverted: false,
            alignTicks: false
          }
        });

    options.series = seriesOptions;


    return new Chart(options, callback);
  };

}(Highcharts));

Highcharts.maps["countries/de/de-all"] = {"title":"Germany","version":"1.1.2","type":"FeatureCollection","copyright":"Copyright (c) 2015 Highsoft AS, Based on data from Natural Earth","copyrightShort":"Natural Earth","copyrightUrl":"http://www.naturalearthdata.com","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG:4839"}},"hc-transform":{"default":{"crs":"+proj=lcc +lat_1=48.66666666666666 +lat_2=53.66666666666666 +lat_0=51 +lon_0=10.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","scale":0.000808796077032,"jsonres":15.5,"jsonmarginX":-999,"jsonmarginY":9851.0,"xoffset":-325419.299339,"yoffset":450908.217886}},
  "features":[{"type":"Feature","id":"DE.NI","properties":{"hc-group":"admin1","hc-middle-x":0.56,"hc-middle-y":0.36,"hc-key":"de-ni","hc-a2":"NI","labelrank":"3","hasc":"DE.NI","alt-name":"Lower Saxony","woe-id":"2345486","subregion":null,"fips":"GM06","postal-code":"NI","name":"Niedersachsen","country":"Germany","type-en":"State","region":null,"longitude":"8.861840000000001","woe-name":"Niedersachsen","latitude":"52.775","woe-label":"Lower Saxony, DE, Germany","type":"Land"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-38,7872],[-78,7863],[-105,7905],[-0,7929],[-38,7872]]],[[[472,8051],[327,8026],[294,8037],[378,8063],[472,8051]]],[[[705,8080],[611,8076],[590,8099],[689,8097],[705,8080]]],[[[848,8110],[806,8090],[762,8103],[791,8126],[848,8110]]],[[[109,5995],[100,6060],[136,6170],[78,6293],[15,6269],[-119,6306],[-157,6338],[-172,6431],[-109,6453],[-141,6538],[-81,6565],[86,6551],[145,6563],[168,6762],[195,6850],[289,7002],[303,7095],[290,7224],[316,7390],[383,7497],[463,7464],[412,7508],[222,7523],[182,7579],[186,7683],[221,7780],[291,7799],[248,7870],[369,7976],[435,7999],[563,8008],[599,7983],[722,8004],[972,8029],[1037,8008],[1052,7907],[1143,7788],[1132,7751],[1050,7720],[1082,7642],[1126,7644],[1168,7588],[1204,7584],[1242,7628],[1268,7723],[1195,7747],[1220,7857],[1296,7867],[1327,7816],[1430,7782],[1462,7755],[1423,7717],[1402,7647],[1415,7508],[1414,7671],[1465,7732],[1502,7690],[1533,7726],[1525,7850],[1432,7869],[1413,7939],[1419,8006],[1491,8203],[1520,8236],[1584,8244],[1632,8195],[1727,8160],[1938,8203],[2070,8201],[2173,8028],[2240,7954],[2306,7827],[2413,7766],[2469,7753],[2472,7698],[2545,7592],[2652,7566],[2733,7616],[2819,7550],[2937,7589],[2986,7577],[3104,7505],[3165,7504],[3227,7507],[3274,7477],[3281,7416],[3441,7305],[3575,7189],[3620,7229],[3663,7185],[3688,7202],[3730,7153],[3776,7091],[3850,7103],[3989,7052],[3974,7006],[3928,6993],[3925,6914],[3850,6860],[3712,6819],[3682,6846],[3514,6864],[3469,6799],[3406,6774],[3302,6761],[3298,6688],[3335,6599],[3366,6582],[3437,6456],[3486,6448],[3466,6353],[3507,6288],[3464,6279],[3454,6237],[3516,6156],[3569,6112],[3507,6071],[3521,5994],[3580,5908],[3525,5854],[3556,5828],[3542,5777],[3465,5728],[3483,5683],[3382,5663],[3212,5651],[3185,5606],[3141,5601],[3205,5534],[3178,5487],[3201,5430],[3150,5376],[3154,5282],[3223,5184],[3252,5087],[3176,4996],[3093,4973],[3013,5023],[2972,5015],[2963,4954],[2854,4856],[2815,4867],[2775,4801],[2685,4802],[2600,4732],[2561,4781],[2395,4709],[2436,4632],[2392,4608],[2367,4641],[2268,4680],[2280,4759],[2324,4761],[2331,4855],[2295,4916],[2337,4999],[2374,4999],[2320,5080],[2209,5085],[2162,5109],[2104,5108],[2120,5222],[2161,5278],[2179,5414],[2064,5400],[2076,5468],[2008,5493],[2036,5562],[1937,5583],[1961,5629],[1955,5706],[1910,5786],[1791,5792],[1785,5868],[1837,5877],[1857,5934],[1784,5974],[1815,6080],[1863,6090],[1911,6172],[1896,6232],[1916,6267],[1874,6297],[1803,6250],[1769,6176],[1654,6150],[1552,6178],[1552,6280],[1492,6342],[1377,6321],[1333,6250],[1264,6233],[1208,6249],[1234,6174],[1313,6128],[1338,6040],[1337,5901],[1365,5879],[1273,5773],[1165,5807],[1090,5739],[953,5720],[906,5683],[858,5709],[842,5757],[928,5800],[954,5870],[894,5880],[855,5921],[923,6064],[868,6157],[802,6139],[697,6213],[680,6282],[620,6303],[611,6219],[574,6160],[533,6159],[447,6085],[346,6030],[192,6024],[109,5995]],[[1457,7304],[1403,7321],[1417,7287],[1498,7257],[1519,7187],[1571,7116],[1570,7076],[1707,7067],[1748,7035],[1797,7072],[1802,7187],[1767,7227],[1749,7195],[1611,7271],[1565,7267],[1457,7304]]]]}},{"type":"Feature","id":"DE.SH","properties":{"hc-group":"admin1","hc-middle-x":0.49,"hc-middle-y":0.51,"hc-key":"de-sh","hc-a2":"SH","labelrank":"3","hasc":"DE.SH","alt-name":null,"woe-id":"2345490","subregion":null,"fips":"GM10","postal-code":"SH","name":"Schleswig-Holstein","country":"Germany","type-en":"State","region":null,"longitude":"9.84605","woe-name":"Schleswig-Holstein","latitude":"54.1315","woe-label":"Schleswig-Holstein, DE, Germany","type":"Land"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1769,9049],[1734,9047],[1709,9097],[1736,9122],[1832,9125],[1769,9049]]],[[[3695,9052],[3744,8962],[3641,8978],[3580,8963],[3568,9013],[3514,9007],[3492,9036],[3514,9093],[3585,9131],[3655,9102],[3695,9052]]],[[[1593,9100],[1551,9088],[1539,9140],[1619,9179],[1593,9100]]],[[[1522,9371],[1424,9373],[1378,9403],[1436,9458],[1508,9455],[1540,9418],[1522,9371]]],[[[1380,9654],[1419,9643],[1594,9647],[1574,9632],[1473,9640],[1426,9614],[1339,9632],[1309,9612],[1295,9448],[1286,9501],[1300,9652],[1374,9851],[1419,9843],[1354,9756],[1354,9681],[1380,9654]]],[[[3165,7504],[3104,7505],[2986,7577],[2937,7589],[2925,7621],[2820,7719],[2809,7787],[2840,7801],[2851,7870],[2803,7941],[2828,7994],[2744,7991],[2720,7937],[2661,7896],[2606,7888],[2523,7821],[2474,7866],[2450,7788],[2380,7805],[2293,7876],[2279,7983],[2200,8037],[2169,8152],[2026,8238],[1851,8243],[1776,8308],[1711,8447],[1778,8456],[1846,8436],[1865,8530],[1833,8597],[1737,8571],[1699,8649],[1723,8753],[1791,8778],[1826,8837],[1642,8808],[1571,8784],[1530,8873],[1609,8900],[1556,8942],[1656,8976],[1746,8973],[1864,9044],[1871,9100],[1746,9261],[1709,9357],[1617,9426],[1622,9460],[1587,9542],[1600,9651],[1657,9640],[1732,9661],[2028,9578],[2053,9515],[2138,9510],[2181,9532],[2234,9519],[2339,9595],[2341,9545],[2430,9527],[2517,9477],[2534,9440],[2608,9488],[2653,9447],[2691,9361],[2619,9324],[2703,9322],[2691,9144],[2613,9071],[2544,9056],[2579,9028],[2775,9074],[2840,9025],[2829,8935],[2789,8901],[2820,8858],[2850,8947],[2923,8997],[2967,8997],[3034,8948],[3163,8891],[3236,8823],[3307,8821],[3435,8912],[3503,8921],[3516,8896],[3598,8922],[3552,8860],[3567,8697],[3544,8639],[3450,8577],[3417,8534],[3328,8510],[3288,8443],[3311,8395],[3381,8379],[3415,8328],[3413,8286],[3298,8193],[3296,8028],[3334,8020],[3383,7963],[3443,7942],[3458,7777],[3353,7778],[3347,7704],[3193,7607],[3165,7504]]],[[[1328,9374],[1365,9298],[1341,9270],[1293,9339],[1328,9374],[1328,9374],[1328,9374]]],[[[1328,9374],[1327,9375],[1350,9397],[1328,9374],[1328,9374],[1328,9374]]]]}},{"type":"Feature","id":"DE.BE","properties":{"hc-group":"admin1","hc-middle-x":0.53,"hc-middle-y":0.47,"hc-key":"de-be","hc-a2":"BE","labelrank":"9","hasc":"DE.BE","alt-name":null,"woe-id":"2345496","subregion":null,"fips":"GM16","postal-code":"BE","name":"Berlin","country":"Germany","type-en":"State","region":null,"longitude":"13.4213","woe-name":"Berlin","latitude":"52.5131","woe-label":"Berlin, DE, Germany","type":"Land"},"geometry":{"type":"Polygon","coordinates":[[[5625,6541],[5629,6494],[5687,6431],[5755,6401],[5740,6327],[5773,6332],[5848,6281],[5814,6173],[5764,6126],[5756,6173],[5601,6223],[5576,6173],[5462,6216],[5393,6216],[5345,6186],[5291,6214],[5326,6363],[5336,6469],[5379,6452],[5388,6507],[5456,6552],[5478,6509],[5523,6513],[5596,6567],[5625,6541]]]}},{"type":"Feature","id":"DE.MV","properties":{"hc-group":"admin1","hc-middle-x":0.47,"hc-middle-y":0.61,"hc-key":"de-mv","hc-a2":"MV","labelrank":"3","hasc":"DE.MV","alt-name":"Mecklenburg-West Pomerania","woe-id":"2345492","subregion":null,"fips":"GM12","postal-code":"MV","name":"Mecklenburg-Vorpommern","country":"Germany","type-en":"State","region":null,"longitude":"12.5647","woe-name":"Mecklenburg-Vorpommern","latitude":"53.7528","woe-label":"Mecklenburg-Vorpommern, DE, Germany","type":"Land"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3730,7153],[3688,7202],[3663,7185],[3620,7229],[3575,7189],[3441,7305],[3281,7416],[3274,7477],[3227,7507],[3165,7504],[3193,7607],[3347,7704],[3353,7778],[3458,7777],[3443,7942],[3383,7963],[3334,8020],[3296,8028],[3298,8193],[3413,8286],[3415,8328],[3536,8394],[3635,8409],[3694,8354],[3692,8308],[3767,8331],[3870,8255],[3896,8390],[3999,8496],[4030,8587],[4087,8611],[4156,8600],[4350,8645],[4392,8638],[4460,8736],[4585,8824],[4660,8954],[4709,9064],[4782,9036],[5017,9039],[5051,9019],[5011,8994],[4867,9013],[4810,8996],[4733,8923],[4673,8949],[4650,8883],[4601,8833],[4608,8776],[4644,8752],[4654,8806],[4695,8866],[4854,8955],[4886,8986],[4893,8941],[4944,8957],[4974,8908],[5018,8922],[5039,8971],[5090,9014],[5143,9022],[5150,8964],[5196,8938],[5182,8910],[5216,8810],[5361,8751],[5390,8697],[5442,8676],[5513,8567],[5523,8605],[5623,8629],[5710,8681],[5700,8652],[5792,8589],[5791,8605],[5745,8654],[5795,8684],[5854,8588],[5967,8534],[6134,8372],[6108,8326],[6131,8288],[6005,8283],[5964,8245],[5865,8227],[5839,8243],[5855,8223],[5960,8134],[6062,8096],[6129,8094],[6161,8122],[6190,8081],[6153,8051],[6196,8042],[6196,7981],[6230,7901],[6243,7777],[6294,7690],[6328,7538],[6273,7500],[6215,7427],[6092,7440],[6091,7467],[6159,7518],[6198,7598],[6197,7661],[6112,7674],[6076,7644],[5930,7648],[5882,7759],[5820,7804],[5833,7724],[5750,7707],[5669,7614],[5614,7591],[5580,7482],[5509,7417],[5406,7431],[5365,7353],[5300,7387],[5176,7255],[5132,7293],[5063,7276],[4959,7292],[4955,7328],[4868,7364],[4763,7389],[4694,7381],[4617,7446],[4522,7481],[4488,7517],[4385,7496],[4344,7417],[4300,7385],[4181,7344],[4201,7312],[4122,7295],[4085,7340],[4001,7324],[3948,7278],[3965,7196],[3921,7158],[3835,7176],[3831,7141],[3730,7153],[3730,7153]],[[5793,8586],[5747,8491],[5826,8424],[5836,8382],[5884,8366],[5873,8324],[5816,8272],[5827,8259],[5908,8306],[5912,8347],[5879,8439],[5936,8433],[5950,8395],[6001,8369],[5987,8481],[5968,8472],[5909,8540],[5872,8463],[5839,8447],[5849,8512],[5771,8473],[5796,8547],[5793,8586]]],[[[3901,8418],[3877,8345],[3801,8360],[3813,8392],[3876,8429],[3901,8418]]],[[[5235,9256],[5205,9237],[5194,9158],[5164,9122],[5196,9260],[5235,9256]]],[[[5421,9335],[5427,9271],[5487,9235],[5591,9259],[5627,9253],[5660,9191],[5581,9092],[5612,9012],[5686,8985],[5744,8922],[5702,8862],[5653,8860],[5701,8901],[5649,8928],[5527,8912],[5420,8794],[5464,8800],[5471,8753],[5379,8775],[5396,8821],[5343,8782],[5214,8891],[5239,8946],[5322,8963],[5311,9009],[5243,9016],[5262,9053],[5325,9077],[5300,9143],[5262,9130],[5245,9187],[5307,9199],[5344,9178],[5408,9243],[5394,9157],[5426,9185],[5462,9116],[5525,9113],[5515,9208],[5468,9207],[5406,9281],[5331,9207],[5311,9227],[5340,9327],[5288,9308],[5310,9351],[5419,9388],[5464,9370],[5421,9335]]]]}},{"type":"Feature","id":"DE.HB","properties":{"hc-group":"admin1","hc-middle-x":0.73,"hc-middle-y":0.86,"hc-key":"de-hb","hc-a2":"HB","labelrank":"9","hasc":"DE.HB","alt-name":null,"woe-id":"2345483","subregion":null,"fips":"GM03","postal-code":"HB","name":"Bremen","country":"Germany","type-en":"State","region":null,"longitude":"8.742990000000001","woe-name":"Bremen","latitude":"53.1211","woe-label":"Bremen, DE, Germany","type":"Land"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1457,7304],[1565,7267],[1611,7271],[1749,7195],[1767,7227],[1802,7187],[1797,7072],[1748,7035],[1707,7067],[1570,7076],[1571,7116],[1519,7187],[1498,7257],[1417,7287],[1403,7321],[1457,7304]]],[[[1465,7732],[1474,7769],[1432,7869],[1525,7850],[1533,7726],[1502,7690],[1465,7732]]]]}},{"type":"Feature","id":"DE.SL","properties":{"hc-group":"admin1","hc-middle-x":0.60,"hc-middle-y":0.48,"hc-key":"de-sl","hc-a2":"SL","labelrank":"3","hasc":"DE.SL","alt-name":null,"woe-id":"2345489","subregion":null,"fips":"GM09","postal-code":"SL","name":"Saarland","country":"Germany","type-en":"State","region":null,"longitude":"6.86625","woe-name":"Saarland","latitude":"49.4026","woe-label":"Saarland, DE, Germany","type":"Land"},"geometry":{"type":"Polygon","coordinates":[[[222,1704],[124,1624],[21,1640],[-41,1681],[-101,1652],[-107,1740],[-182,1777],[-266,1787],[-264,1722],[-293,1699],[-390,1742],[-438,1882],[-515,1979],[-491,2011],[-558,2118],[-639,2164],[-692,2153],[-683,2250],[-555,2254],[-451,2244],[-352,2267],[-216,2322],[-144,2364],[-87,2364],[-23,2325],[32,2320],[108,2263],[152,2282],[184,2151],[125,2099],[171,2011],[247,1987],[247,1941],[177,1825],[154,1761],[222,1704]]]}},{"type":"Feature","id":"DE.BY","properties":{"hc-group":"admin1","hc-middle-x":0.47,"hc-middle-y":0.45,"hc-key":"de-by","hc-a2":"BY","labelrank":"3","hasc":"DE.BY","alt-name":"Bavaria","woe-id":"2345482","subregion":null,"fips":"GM02","postal-code":"BY","name":"Bayern","country":"Germany","type-en":"State","region":null,"longitude":"11.3966","woe-name":"Bayern","latitude":"49.0056","woe-label":"Bavaria, DE, Germany","type":"Land"},"geometry":{"type":"Polygon","coordinates":[[[4509,3258],[4518,3188],[4492,3158],[4586,3060],[4585,2987],[4648,2886],[4849,2787],[4846,2733],[4902,2698],[4842,2521],[4781,2468],[4815,2410],[4886,2370],[4893,2300],[4941,2252],[4980,2156],[5007,2150],[5029,2038],[5108,1987],[5173,1901],[5287,1911],[5359,1861],[5530,1621],[5642,1591],[5712,1516],[5725,1454],[5818,1380],[5835,1420],[5934,1397],[5980,1309],[6045,1291],[6135,1155],[6110,1095],[6141,1056],[6132,939],[6059,810],[5971,867],[5874,890],[5801,854],[5819,779],[5779,596],[5661,494],[5533,467],[5438,425],[5348,346],[5297,335],[5177,217],[5193,140],[5261,73],[5285,11],[5359,-50],[5419,-157],[5332,-332],[5400,-355],[5453,-343],[5496,-395],[5506,-467],[5476,-522],[5480,-649],[5454,-682],[5391,-683],[5233,-571],[5262,-490],[5212,-415],[5109,-406],[5017,-464],[4963,-475],[4893,-389],[4719,-411],[4720,-337],[4659,-375],[4686,-481],[4652,-518],[4435,-513],[4356,-530],[4327,-564],[4138,-547],[4074,-654],[3943,-667],[3899,-718],[3917,-752],[3843,-766],[3799,-815],[3714,-783],[3634,-832],[3535,-832],[3516,-773],[3413,-689],[3419,-637],[3355,-657],[3182,-593],[3104,-641],[3000,-578],[3005,-690],[3035,-766],[2997,-846],[2953,-874],[2896,-956],[2833,-990],[2757,-999],[2804,-883],[2788,-848],[2676,-867],[2675,-764],[2629,-696],[2602,-711],[2560,-645],[2432,-619],[2427,-571],[2375,-562],[2342,-611],[2239,-559],[2340,-530],[2482,-434],[2565,-456],[2664,-430],[2681,-470],[2733,-417],[2718,-306],[2686,-279],[2733,-238],[2704,-152],[2715,-69],[2694,-37],[2735,67],[2741,168],[2716,225],[2666,444],[2598,551],[2680,677],[2741,697],[2759,667],[2909,758],[2908,865],[2869,967],[2894,998],[2962,944],[3011,996],[3018,955],[3076,992],[3018,1085],[3043,1179],[3043,1327],[2947,1458],[2874,1482],[2865,1588],[2758,1698],[2746,1792],[2770,1796],[2736,1927],[2781,1948],[2730,2026],[2743,2125],[2704,2171],[2644,2082],[2569,2085],[2549,2220],[2481,2182],[2521,2263],[2478,2324],[2441,2421],[2382,2373],[2367,2418],[2337,2378],[2295,2390],[2310,2508],[2270,2491],[2170,2526],[2045,2514],[2009,2440],[2111,2405],[2089,2311],[2064,2326],[1982,2294],[1951,2226],[1822,2225],[1788,2275],[1824,2315],[1814,2380],[1845,2393],[1855,2520],[1792,2581],[1755,2689],[1759,2878],[1714,2893],[1745,2953],[1834,2991],[1873,2972],[1942,3015],[2032,3007],[2101,2941],[2190,2962],[2211,3046],[2185,3057],[2197,3140],[2287,3122],[2331,3136],[2349,3198],[2410,3234],[2428,3368],[2510,3363],[2637,3431],[2685,3526],[2749,3590],[2804,3571],[2848,3516],[2919,3491],[3080,3298],[3127,3305],[3162,3259],[3185,3118],[3283,3098],[3287,3143],[3385,3143],[3382,3184],[3272,3254],[3282,3308],[3338,3344],[3476,3346],[3516,3294],[3626,3316],[3647,3238],[3699,3186],[3755,3191],[3776,3308],[3746,3467],[3833,3532],[3904,3525],[3900,3427],[3950,3406],[4000,3339],[4235,3391],[4264,3361],[4332,3395],[4400,3355],[4405,3308],[4509,3258]]]}},{"type":"Feature","id":"DE.TH","properties":{"hc-group":"admin1","hc-middle-x":0.47,"hc-middle-y":0.62,"hc-key":"de-th","hc-a2":"TH","labelrank":"3","hasc":"DE.TH","alt-name":"Thuringia","woe-id":"2345495","subregion":null,"fips":"GM15","postal-code":"TH","name":"ThÃ¼ringen","country":"Germany","type-en":"State","region":null,"longitude":"11.0976","woe-name":"ThÃ¼ringen","latitude":"50.9052","woe-label":"Thuringia, DE, Germany","type":"Land"},"geometry":{"type":"Polygon","coordinates":[[[4332,3395],[4264,3361],[4235,3391],[4000,3339],[3950,3406],[3900,3427],[3904,3525],[3833,3532],[3746,3467],[3776,3308],[3755,3191],[3699,3186],[3647,3238],[3626,3316],[3516,3294],[3476,3346],[3338,3344],[3282,3308],[3272,3254],[3382,3184],[3385,3143],[3287,3143],[3283,3098],[3185,3118],[3162,3259],[3127,3305],[3080,3298],[2919,3491],[2848,3516],[2804,3571],[2749,3590],[2685,3526],[2678,3650],[2705,3673],[2684,3739],[2594,3730],[2587,3681],[2529,3704],[2561,3772],[2595,3943],[2656,3965],[2689,4036],[2646,4090],[2617,4069],[2602,4119],[2677,4117],[2662,4175],[2686,4209],[2806,4193],[2811,4261],[2767,4276],[2790,4360],[2753,4389],[2795,4401],[2814,4360],[2844,4456],[2714,4510],[2687,4585],[2598,4624],[2578,4702],[2600,4732],[2685,4802],[2775,4801],[2815,4867],[2854,4856],[2963,4954],[2972,5015],[3013,5023],[3093,4973],[3176,4996],[3252,5087],[3344,5080],[3467,5028],[3438,4995],[3490,4854],[3485,4796],[3516,4769],[3687,4755],[3791,4736],[3837,4701],[3913,4582],[3887,4543],[3810,4504],[3887,4426],[3894,4341],[4124,4335],[4164,4232],[4276,4241],[4339,4208],[4405,4141],[4541,4148],[4578,4115],[4641,4231],[4615,4262],[4629,4334],[4685,4341],[4822,4303],[4880,4183],[4930,4158],[4972,4086],[4941,4044],[4868,4051],[4779,3976],[4737,3979],[4633,3928],[4658,3896],[4620,3829],[4655,3771],[4693,3764],[4634,3696],[4576,3695],[4541,3605],[4484,3602],[4456,3560],[4403,3579],[4348,3498],[4368,3462],[4332,3395]]]}},{"type":"Feature","id":"DE.ST","properties":{"hc-group":"admin1","hc-middle-x":0.36,"hc-middle-y":0.30,"hc-key":"de-st","hc-a2":"ST","labelrank":"3","hasc":"DE.ST","alt-name":"Saxony-Anhalt","woe-id":"2345494","subregion":null,"fips":"GM14","postal-code":"ST","name":"Sachsen-Anhalt","country":"Germany","type-en":"State","region":null,"longitude":"11.6796","woe-name":"Sachsen-Anhalt","latitude":"51.9338","woe-label":"Saxony-Anhalt, DE, Germany","type":"Land"},"geometry":{"type":"Polygon","coordinates":[[[4629,4334],[4615,4262],[4641,4231],[4578,4115],[4541,4148],[4405,4141],[4339,4208],[4276,4241],[4164,4232],[4124,4335],[3894,4341],[3887,4426],[3810,4504],[3887,4543],[3913,4582],[3837,4701],[3791,4736],[3687,4755],[3516,4769],[3485,4796],[3490,4854],[3438,4995],[3467,5028],[3344,5080],[3252,5087],[3223,5184],[3154,5282],[3150,5376],[3201,5430],[3178,5487],[3205,5534],[3141,5601],[3185,5606],[3212,5651],[3382,5663],[3483,5683],[3465,5728],[3542,5777],[3556,5828],[3525,5854],[3580,5908],[3521,5994],[3507,6071],[3569,6112],[3516,6156],[3454,6237],[3464,6279],[3507,6288],[3466,6353],[3486,6448],[3437,6456],[3366,6582],[3335,6599],[3298,6688],[3302,6761],[3406,6774],[3469,6799],[3514,6864],[3682,6846],[3712,6819],[3850,6860],[3925,6914],[3928,6993],[3974,7006],[3989,7052],[4073,7011],[4086,6972],[4143,6988],[4203,6896],[4317,6838],[4424,6849],[4440,6815],[4518,6815],[4545,6747],[4515,6699],[4511,6638],[4544,6571],[4526,6502],[4490,6494],[4461,6381],[4483,6332],[4533,6363],[4601,6285],[4569,6226],[4561,6092],[4542,5998],[4576,5961],[4536,5879],[4591,5789],[4732,5629],[4771,5644],[4855,5577],[4895,5570],[4944,5611],[5125,5503],[5193,5497],[5295,5425],[5442,5434],[5382,5339],[5402,5228],[5377,5177],[5302,5094],[5229,5109],[5127,5162],[5059,5103],[5001,5116],[4957,5064],[4767,5059],[4757,5018],[4649,4987],[4588,4999],[4554,4952],[4552,4870],[4523,4840],[4549,4668],[4507,4621],[4541,4490],[4529,4451],[4592,4340],[4629,4334]]]}},{"type":"Feature","id":"DE.SN","properties":{"hc-group":"admin1","hc-middle-x":0.48,"hc-middle-y":0.42,"hc-key":"de-sn","hc-a2":"SN","labelrank":"3","hasc":"DE.SN","alt-name":"Saxony","woe-id":"2345493","subregion":null,"fips":"GM13","postal-code":"SN","name":"Sachsen","country":"Germany","type-en":"State","region":null,"longitude":"13.4596","woe-name":"Sachsen","latitude":"51.0053","woe-label":"Saxony, DE, Germany","type":"Land"},"geometry":{"type":"Polygon","coordinates":[[[4509,3258],[4405,3308],[4400,3355],[4332,3395],[4368,3462],[4348,3498],[4403,3579],[4456,3560],[4484,3602],[4541,3605],[4576,3695],[4634,3696],[4693,3764],[4655,3771],[4620,3829],[4658,3896],[4633,3928],[4737,3979],[4779,3976],[4868,4051],[4941,4044],[4972,4086],[4930,4158],[4880,4183],[4822,4303],[4685,4341],[4629,4334],[4592,4340],[4529,4451],[4541,4490],[4507,4621],[4549,4668],[4523,4840],[4552,4870],[4554,4952],[4588,4999],[4649,4987],[4757,5018],[4767,5059],[4957,5064],[5001,5116],[5059,5103],[5127,5162],[5229,5109],[5302,5094],[5400,5029],[5438,4926],[5420,4905],[5423,4778],[5480,4780],[5616,4836],[5715,4764],[5930,4746],[6107,4770],[6166,4869],[6183,4934],[6259,5012],[6355,5024],[6417,4996],[6561,5069],[6636,5081],[6734,5056],[6758,5023],[6917,4967],[6948,4941],[6975,4774],[7028,4698],[7034,4650],[6991,4463],[6990,4406],[6919,4196],[6878,4138],[6852,4047],[6786,4048],[6707,4085],[6721,4174],[6647,4174],[6663,4263],[6589,4317],[6505,4307],[6406,4335],[6367,4257],[6425,4243],[6441,4198],[6498,4178],[6470,4120],[6369,4114],[6335,4068],[6200,3998],[6134,3994],[6076,3961],[6070,3909],[6029,3880],[5824,3855],[5749,3822],[5757,3783],[5694,3690],[5633,3726],[5551,3644],[5504,3661],[5444,3540],[5311,3529],[5302,3447],[5234,3405],[5150,3453],[5086,3442],[5021,3382],[4871,3371],[4836,3310],[4774,3266],[4721,3186],[4677,3050],[4628,3184],[4579,3197],[4569,3244],[4509,3258]]]}},{"type":"Feature","id":"DE.BB","properties":{"hc-group":"admin1","hc-middle-x":0.70,"hc-middle-y":0.72,"hc-key":"de-bb","hc-a2":"BB","labelrank":"3","hasc":"DE.BB","alt-name":null,"woe-id":"2345491","subregion":null,"fips":"GM11","postal-code":"BB","name":"Brandenburg","country":"Germany","type-en":"State","region":null,"longitude":"12.9206","woe-name":"Brandenburg","latitude":"52.8156","woe-label":"Brandenburg, DE, Germany","type":"Land"},"geometry":{"type":"Polygon","coordinates":[[[5302,5094],[5377,5177],[5402,5228],[5382,5339],[5442,5434],[5295,5425],[5193,5497],[5125,5503],[4944,5611],[4895,5570],[4855,5577],[4771,5644],[4732,5629],[4591,5789],[4536,5879],[4576,5961],[4542,5998],[4561,6092],[4569,6226],[4601,6285],[4533,6363],[4483,6332],[4461,6381],[4490,6494],[4526,6502],[4544,6571],[4511,6638],[4515,6699],[4545,6747],[4518,6815],[4440,6815],[4424,6849],[4317,6838],[4203,6896],[4143,6988],[4086,6972],[4073,7011],[3989,7052],[3850,7103],[3776,7091],[3730,7153],[3831,7141],[3835,7176],[3921,7158],[3965,7196],[3948,7278],[4001,7324],[4085,7340],[4122,7295],[4201,7312],[4181,7344],[4300,7385],[4344,7417],[4385,7496],[4488,7517],[4522,7481],[4617,7446],[4694,7381],[4763,7389],[4955,7328],[4959,7292],[5063,7276],[5132,7293],[5176,7255],[5300,7387],[5365,7353],[5406,7431],[5509,7417],[5580,7482],[5614,7591],[5669,7614],[5750,7707],[5833,7724],[5820,7804],[5882,7759],[5930,7648],[6076,7644],[6112,7674],[6197,7661],[6198,7598],[6159,7518],[6091,7467],[6092,7440],[6215,7427],[6273,7500],[6328,7538],[6348,7453],[6376,7425],[6328,7318],[6342,7256],[6309,7138],[6237,7068],[6148,7006],[6168,6891],[6138,6853],[6218,6811],[6364,6707],[6462,6590],[6514,6573],[6599,6495],[6573,6411],[6595,6383],[6522,6274],[6530,6219],[6590,6074],[6669,6047],[6685,5995],[6670,5863],[6738,5805],[6691,5684],[6693,5599],[6661,5524],[6614,5471],[6609,5416],[6653,5370],[6670,5299],[6734,5245],[6761,5150],[6734,5056],[6636,5081],[6561,5069],[6417,4996],[6355,5024],[6259,5012],[6183,4934],[6166,4869],[6107,4770],[5930,4746],[5715,4764],[5616,4836],[5480,4780],[5423,4778],[5420,4905],[5438,4926],[5400,5029],[5302,5094]],[[5625,6541],[5596,6567],[5523,6513],[5478,6509],[5456,6552],[5388,6507],[5379,6452],[5336,6469],[5326,6363],[5291,6214],[5345,6186],[5393,6216],[5462,6216],[5576,6173],[5601,6223],[5756,6173],[5764,6126],[5814,6173],[5848,6281],[5773,6332],[5740,6327],[5755,6401],[5687,6431],[5629,6494],[5625,6541]]]}},{"type":"Feature","id":"DE.NW","properties":{"hc-group":"admin1","hc-middle-x":0.51,"hc-middle-y":0.45,"hc-key":"de-nw","hc-a2":"NW","labelrank":"3","hasc":"DE.NW","alt-name":"North Rhine-Westphalia","woe-id":"2345487","subregion":null,"fips":"GM07","postal-code":"NW","name":"Nordrhein-Westfalen","country":"Germany","type-en":"State","region":null,"longitude":"7.65708","woe-name":"Nordrhein-Westfalen","latitude":"51.6146","woe-label":"North Rhine-Westphalia, DE, Germany","type":"Land"},"geometry":{"type":"Polygon","coordinates":[[[-599,3358],[-627,3423],[-610,3513],[-619,3580],[-740,3600],[-770,3676],[-686,3770],[-747,3775],[-826,3917],[-888,3913],[-916,4017],[-887,4083],[-846,4100],[-825,4187],[-879,4221],[-872,4283],[-986,4278],[-999,4387],[-941,4365],[-882,4424],[-732,4523],[-740,4568],[-786,4541],[-810,4580],[-797,4638],[-717,4754],[-685,4777],[-659,4848],[-662,5018],[-748,5143],[-733,5210],[-808,5266],[-794,5305],[-863,5340],[-838,5401],[-867,5445],[-728,5502],[-667,5482],[-718,5546],[-688,5560],[-606,5507],[-473,5451],[-474,5496],[-420,5477],[-256,5537],[-156,5547],[-95,5616],[-120,5675],[-206,5726],[-123,5824],[-67,5828],[-17,5891],[38,5920],[109,5995],[192,6024],[346,6030],[447,6085],[533,6159],[574,6160],[611,6219],[620,6303],[680,6282],[697,6213],[802,6139],[868,6157],[923,6064],[855,5921],[894,5880],[954,5870],[928,5800],[842,5757],[858,5709],[906,5683],[953,5720],[1090,5739],[1165,5807],[1273,5773],[1365,5879],[1337,5901],[1338,6040],[1313,6128],[1234,6174],[1208,6249],[1264,6233],[1333,6250],[1377,6321],[1492,6342],[1552,6280],[1552,6178],[1654,6150],[1769,6176],[1803,6250],[1874,6297],[1916,6267],[1896,6232],[1911,6172],[1863,6090],[1815,6080],[1784,5974],[1857,5934],[1837,5877],[1785,5868],[1791,5792],[1910,5786],[1955,5706],[1961,5629],[1937,5583],[2036,5562],[2008,5493],[2076,5468],[2064,5400],[2179,5414],[2161,5278],[2120,5222],[2104,5108],[2162,5109],[2068,5052],[2087,5032],[2034,4928],[1971,4887],[1962,4847],[1869,4827],[1849,4883],[1790,4921],[1694,4883],[1716,4758],[1498,4724],[1401,4605],[1422,4558],[1522,4595],[1548,4457],[1465,4342],[1348,4352],[1363,4250],[1270,4107],[1197,4033],[1141,4061],[996,3932],[1026,3871],[987,3792],[918,3804],[856,3921],[849,4010],[824,4003],[741,4076],[756,4132],[705,4148],[665,4120],[670,4015],[588,3981],[607,3941],[516,3877],[327,3844],[310,3759],[230,3730],[155,3757],[115,3710],[23,3699],[-79,3654],[-129,3611],[-130,3548],[-189,3564],[-244,3545],[-221,3384],[-290,3368],[-337,3399],[-377,3385],[-405,3424],[-522,3379],[-572,3441],[-551,3369],[-599,3358]]]}},{"type":"Feature","id":"DE.BW","properties":{"hc-group":"admin1","hc-middle-x":0.52,"hc-middle-y":0.57,"hc-key":"de-bw","hc-a2":"BW","labelrank":"3","hasc":"DE.BW","alt-name":null,"woe-id":"2345481","subregion":null,"fips":"GM01","postal-code":"BW","name":"Baden-WÃ¼rttemberg","country":"Germany","type-en":"State","region":null,"longitude":"9.00328","woe-name":"Baden-WÃ¼rttemberg","latitude":"48.59","woe-label":"Baden-Wurttemberg, DE, Germany","type":"Land"},"geometry":{"type":"Polygon","coordinates":[[[2239,-559],[2187,-544],[2145,-476],[2047,-428],[1971,-418],[1882,-356],[1835,-298],[1739,-226],[1739,-266],[1821,-325],[1862,-429],[1683,-417],[1578,-452],[1515,-410],[1478,-355],[1401,-389],[1406,-315],[1348,-257],[1301,-292],[1296,-246],[1166,-286],[1105,-363],[1094,-421],[1156,-458],[1260,-429],[1250,-531],[1215,-485],[1145,-536],[1055,-538],[995,-487],[891,-484],[803,-549],[637,-553],[625,-514],[552,-501],[500,-554],[420,-568],[377,-538],[401,-494],[331,-508],[336,-475],[275,-386],[293,-301],[285,-229],[322,-152],[321,-97],[385,74],[347,146],[346,204],[389,320],[451,400],[479,501],[527,560],[517,632],[557,759],[593,787],[595,920],[636,980],[727,1051],[749,1113],[874,1198],[920,1312],[970,1386],[1049,1456],[1120,1593],[1153,1762],[1240,1851],[1222,1876],[1259,1961],[1258,2053],[1231,2086],[1185,2212],[1193,2246],[1267,2235],[1327,2169],[1374,2196],[1362,2285],[1425,2300],[1465,2186],[1620,2133],[1582,2102],[1546,1992],[1576,1981],[1669,2061],[1681,2128],[1833,2142],[1794,2224],[1822,2225],[1951,2226],[1982,2294],[2064,2326],[2089,2311],[2111,2405],[2009,2440],[2045,2514],[2170,2526],[2270,2491],[2310,2508],[2295,2390],[2337,2378],[2367,2418],[2382,2373],[2441,2421],[2478,2324],[2521,2263],[2481,2182],[2549,2220],[2569,2085],[2644,2082],[2704,2171],[2743,2125],[2730,2026],[2781,1948],[2736,1927],[2770,1796],[2746,1792],[2758,1698],[2865,1588],[2874,1482],[2947,1458],[3043,1327],[3043,1179],[3018,1085],[3076,992],[3018,955],[3011,996],[2962,944],[2894,998],[2869,967],[2908,865],[2909,758],[2759,667],[2741,697],[2680,677],[2598,551],[2666,444],[2716,225],[2741,168],[2735,67],[2694,-37],[2715,-69],[2704,-152],[2733,-238],[2686,-279],[2718,-306],[2733,-417],[2681,-470],[2664,-430],[2565,-456],[2482,-434],[2340,-530],[2239,-559]]]}},{"type":"Feature","id":"DE.HE","properties":{"hc-group":"admin1","hc-middle-x":0.49,"hc-middle-y":0.43,"hc-key":"de-he","hc-a2":"HE","labelrank":"3","hasc":"DE.HE","alt-name":"Hesse","woe-id":"2345485","subregion":null,"fips":"GM05","postal-code":"HE","name":"Hessen","country":"Germany","type-en":"State","region":null,"longitude":"8.958729999999999","woe-name":"Hessen","latitude":"50.6098","woe-label":"Hesse, DE, Germany","type":"Land"},"geometry":{"type":"Polygon","coordinates":[[[1822,2225],[1794,2224],[1833,2142],[1681,2128],[1669,2061],[1576,1981],[1546,1992],[1582,2102],[1620,2133],[1465,2186],[1425,2300],[1362,2285],[1374,2196],[1327,2169],[1267,2235],[1193,2246],[1146,2366],[1164,2429],[1252,2492],[1207,2507],[1136,2682],[1135,2777],[1042,2890],[994,2902],[880,2867],[761,2809],[725,2809],[701,2863],[633,2925],[699,2971],[711,3009],[771,2997],[751,3062],[776,3124],[840,3161],[866,3143],[889,3208],[958,3226],[897,3359],[837,3395],[874,3476],[864,3568],[898,3600],[956,3573],[1009,3654],[974,3739],[987,3792],[1026,3871],[996,3932],[1141,4061],[1197,4033],[1270,4107],[1363,4250],[1348,4352],[1465,4342],[1548,4457],[1522,4595],[1422,4558],[1401,4605],[1498,4724],[1716,4758],[1694,4883],[1790,4921],[1849,4883],[1869,4827],[1962,4847],[1971,4887],[2034,4928],[2087,5032],[2068,5052],[2162,5109],[2209,5085],[2320,5080],[2374,4999],[2337,4999],[2295,4916],[2331,4855],[2324,4761],[2280,4759],[2268,4680],[2367,4641],[2392,4608],[2436,4632],[2395,4709],[2561,4781],[2600,4732],[2578,4702],[2598,4624],[2687,4585],[2714,4510],[2844,4456],[2814,4360],[2795,4401],[2753,4389],[2790,4360],[2767,4276],[2811,4261],[2806,4193],[2686,4209],[2662,4175],[2677,4117],[2602,4119],[2617,4069],[2646,4090],[2689,4036],[2656,3965],[2595,3943],[2561,3772],[2529,3704],[2587,3681],[2594,3730],[2684,3739],[2705,3673],[2678,3650],[2685,3526],[2637,3431],[2510,3363],[2428,3368],[2410,3234],[2349,3198],[2331,3136],[2287,3122],[2197,3140],[2185,3057],[2211,3046],[2190,2962],[2101,2941],[2032,3007],[1942,3015],[1873,2972],[1834,2991],[1745,2953],[1714,2893],[1759,2878],[1755,2689],[1792,2581],[1855,2520],[1845,2393],[1814,2380],[1824,2315],[1788,2275],[1822,2225]]]}},{"type":"Feature","id":"DE.HH","properties":{"hc-group":"admin1","hc-middle-x":0.47,"hc-middle-y":0.57,"hc-key":"de-hh","hc-a2":"HH","labelrank":"9","hasc":"DE.HH","alt-name":null,"woe-id":"2345484","subregion":null,"fips":"GM04","postal-code":"HH","name":"Hamburg","country":"Germany","type-en":"State","region":null,"longitude":"10.0344","woe-name":"Hamburg","latitude":"53.559","woe-label":"Hamburg, DE, Germany","type":"Land"},"geometry":{"type":"Polygon","coordinates":[[[2937,7589],[2819,7550],[2733,7616],[2652,7566],[2545,7592],[2472,7698],[2469,7753],[2515,7765],[2450,7788],[2474,7866],[2523,7821],[2606,7888],[2661,7896],[2720,7937],[2744,7991],[2828,7994],[2803,7941],[2851,7870],[2840,7801],[2809,7787],[2820,7719],[2925,7621],[2937,7589]]]}},{"type":"Feature","id":"DE.RP","properties":{"hc-group":"admin1","hc-middle-x":0.57,"hc-middle-y":0.52,"hc-key":"de-rp","hc-a2":"RP","labelrank":"3","hasc":"DE.RP","alt-name":"Rhineland-Palatinate","woe-id":"2345488","subregion":null,"fips":"GM08","postal-code":"RP","name":"Rheinland-Pfalz","country":"Germany","type-en":"State","region":null,"longitude":"7.36974","woe-name":"Rheinland-Pfalz","latitude":"49.8685","woe-label":"Rhineland-Palatinate, DE, Germany","type":"Land"},"geometry":{"type":"Polygon","coordinates":[[[1193,2246],[1185,2212],[1231,2086],[1258,2053],[1259,1961],[1222,1876],[1240,1851],[1153,1762],[1120,1593],[1049,1456],[970,1387],[870,1419],[728,1501],[659,1500],[583,1525],[468,1512],[433,1550],[354,1583],[311,1647],[317,1679],[222,1704],[154,1761],[177,1825],[247,1941],[247,1987],[171,2011],[125,2099],[184,2151],[152,2282],[108,2263],[32,2320],[-23,2325],[-87,2364],[-144,2364],[-216,2322],[-352,2267],[-451,2244],[-555,2254],[-683,2250],[-678,2307],[-612,2405],[-609,2447],[-540,2487],[-526,2617],[-602,2636],[-768,2760],[-807,2858],[-818,2840],[-868,2991],[-834,3151],[-796,3173],[-809,3218],[-711,3272],[-665,3342],[-599,3358],[-551,3369],[-572,3441],[-522,3379],[-405,3424],[-377,3385],[-337,3399],[-290,3368],[-221,3384],[-244,3545],[-189,3564],[-130,3548],[-129,3611],[-79,3654],[23,3699],[115,3710],[155,3757],[230,3730],[310,3759],[327,3844],[516,3877],[607,3941],[588,3981],[670,4015],[665,4120],[705,4148],[756,4132],[741,4076],[824,4003],[849,4010],[856,3921],[918,3804],[987,3792],[974,3739],[1009,3654],[956,3573],[898,3600],[864,3568],[874,3476],[837,3395],[897,3359],[958,3226],[889,3208],[866,3143],[840,3161],[776,3124],[751,3062],[771,2997],[711,3009],[699,2971],[633,2925],[701,2863],[725,2809],[761,2809],[880,2867],[994,2902],[1042,2890],[1135,2777],[1136,2682],[1207,2507],[1252,2492],[1164,2429],[1146,2366],[1193,2246]]]}}]}

Highcharts.maps["countries/de/de-all-all"] = {"title":"Germany, admin2","version":"1.1.2","type":"FeatureCollection","copyright":"Copyright (c) 2015 Highsoft AS, Based on data from GeoBasis-DE / BKG 2014","copyrightShort":"GeoBasis-DE / BKG 2014","copyrightUrl":"http://www.bkg.bund.de","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG:32632"}},"hc-transform":{"default":{"crs":"+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs","scale":0.00081105704928,"jsonres":15.5,"jsonmarginX":-999,"jsonmarginY":9851.0,"xoffset":280371.059111,"yoffset":6098937.93419}},
  "features":[{"type":"Feature","id":"DE.SH.01054000","properties":{"hc-group":"admin2","hc-middle-x":0.71,"hc-middle-y":0.61,"hc-key":"de-sh-01054000","hc-a2":"NO","name":"Nordfriesland","bundesland":"DE.SH"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1484,9168],[1527,9174],[1493,9092],[1453,9086],[1426,9139],[1484,9168]]],[[[1216,9369],[1271,9260],[1247,9254],[1190,9341],[1216,9369]]],[[[1635,8773],[1615,8807],[1509,8788],[1436,8843],[1512,8902],[1495,8961],[1672,8975],[1771,9095],[1748,9134],[1675,9040],[1605,9058],[1604,9094],[1657,9139],[1675,9236],[1625,9312],[1564,9350],[1553,9401],[1513,9415],[1510,9485],[1441,9585],[1432,9636],[1370,9635],[1291,9587],[1230,9634],[1194,9581],[1194,9438],[1178,9455],[1196,9677],[1265,9851],[1311,9822],[1241,9755],[1256,9657],[1306,9628],[1459,9652],[1468,9676],[1543,9649],[1610,9667],[1727,9661],[1801,9620],[1853,9622],[1842,9540],[1859,9503],[1825,9458],[1821,9382],[1901,9378],[1965,9210],[2015,9174],[1991,9121],[2029,9027],[1990,8988],[1972,8919],[1929,8934],[1906,8869],[1837,8918],[1769,8930],[1756,8866],[1681,8793],[1635,8773]]],[[[1410,9352],[1345,9353],[1273,9387],[1276,9414],[1299,9446],[1388,9459],[1429,9438],[1410,9352]]]]}},{"type":"Feature","id":"DE.MV.13074000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.51,"hc-key":"de-mv-13074000","hc-a2":"NO","name":"Nordwestmecklenburg","bundesland":"DE.MV"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3810,8470],[3807,8410],[3777,8380],[3721,8428],[3810,8470]]],[[[3221,8154],[3226,8241],[3326,8317],[3332,8361],[3449,8435],[3558,8449],[3619,8412],[3615,8349],[3652,8336],[3690,8373],[3780,8293],[3808,8341],[3828,8452],[3871,8478],[3891,8424],[3953,8420],[3979,8350],[4040,8412],[4074,8398],[4069,8285],[4043,8200],[4081,8191],[4080,8125],[4021,8155],[3968,8104],[3825,8110],[3826,8007],[3796,7988],[3721,7982],[3721,7981],[3718,7981],[3707,7981],[3675,7946],[3675,7861],[3598,7871],[3593,7843],[3510,7875],[3433,7869],[3384,7929],[3357,8001],[3297,8001],[3220,8065],[3221,8154]],[[3973,8152],[3982,8148],[3993,8138],[3988,8153],[3973,8152]]]]}},{"type":"Feature","id":"DE.MV.13073000","properties":{"hc-group":"admin2","hc-middle-x":0.37,"hc-middle-y":0.70,"hc-key":"de-mv-13073000","hc-a2":"VR","name":"Vorpommern-RÃ¼gen","bundesland":"DE.MV"},"geometry":{"type":"MultiPolygon","coordinates":[[[[5194,9153],[5120,9119],[5137,9168],[5200,9184],[5194,9153]]],[[[5085,9162],[5072,9184],[5090,9323],[5116,9263],[5077,9196],[5085,9162]]],[[[4451,8847],[4490,8879],[4545,8995],[4590,9058],[4620,9146],[4658,9111],[4743,9098],[4958,9112],[4952,9076],[4727,9067],[4698,9023],[4553,8988],[4515,8839],[4607,8896],[4601,8931],[4651,8946],[4665,8999],[4720,8997],[4786,9056],[4814,8998],[4853,9013],[4874,8965],[4933,9004],[4942,9050],[5046,9105],[5046,9050],[5105,9007],[5092,8984],[5126,8887],[5271,8837],[5304,8779],[5285,8694],[5227,8671],[5262,8623],[5229,8566],[5163,8531],[5145,8552],[5046,8498],[4939,8455],[4899,8491],[4843,8527],[4822,8507],[4726,8585],[4543,8626],[4524,8759],[4476,8791],[4451,8847]]],[[[5192,8918],[5126,8961],[5139,9022],[5220,9021],[5197,9103],[5147,9090],[5227,9185],[5205,9218],[5149,9217],[5131,9264],[5257,9283],[5311,9320],[5301,9234],[5331,9266],[5384,9179],[5435,9236],[5412,9304],[5376,9286],[5323,9325],[5310,9370],[5281,9323],[5213,9285],[5235,9409],[5185,9399],[5237,9449],[5349,9471],[5320,9367],[5386,9313],[5529,9342],[5565,9313],[5560,9254],[5486,9185],[5534,9082],[5574,9088],[5656,9007],[5608,8942],[5586,9017],[5531,8986],[5496,9013],[5440,8997],[5376,8937],[5356,8881],[5362,8821],[5199,8881],[5192,8918]],[[5460,9118],[5466,9184],[5419,9185],[5412,9110],[5460,9118]]]]}},{"type":"Feature","id":"DE.MV.13003000","properties":{"hc-group":"admin2","hc-middle-x":0.58,"hc-middle-y":0.50,"hc-key":"de-mv-13003000","hc-a2":"RO","name":"Rostock","bundesland":"DE.MV"},"geometry":{"type":"Polygon","coordinates":[[[4222,8697],[4306,8693],[4384,8802],[4435,8803],[4463,8739],[4390,8715],[4368,8623],[4387,8556],[4291,8532],[4258,8606],[4252,8681],[4222,8697]]]}},{"type":"Feature","id":"DE.NI.03457000","properties":{"hc-group":"admin2","hc-middle-x":0.56,"hc-middle-y":0.70,"hc-key":"de-ni-03457000","hc-a2":"LE","name":"Leer","bundesland":"DE.NI"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-164,7831],[-190,7866],[-98,7894],[-59,7874],[-164,7831]]],[[[818,7535],[826,7513],[830,7501],[799,7420],[673,7323],[686,7261],[628,7272],[593,7094],[536,7061],[485,7136],[403,7165],[250,7179],[231,7215],[265,7298],[260,7360],[295,7467],[340,7471],[343,7508],[346,7508],[432,7504],[484,7534],[588,7478],[771,7535],[787,7517],[818,7535]]]]}},{"type":"Feature","id":"DE.MV.13076000","properties":{"hc-group":"admin2","hc-middle-x":0.56,"hc-middle-y":0.54,"hc-key":"de-mv-13076000","hc-a2":"LP","name":"Ludwigslust-Parchim","bundesland":"DE.MV"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3973,8152],[3988,8153],[3993,8138],[3982,8148],[3973,8152]]],[[[3732,7900],[3731,7899],[3725,7900],[3727,7903],[3732,7900]]],[[[4552,7511],[4547,7515],[4546,7516],[4478,7529],[4464,7563],[4414,7535],[4320,7545],[4295,7480],[4238,7436],[4186,7441],[4136,7368],[4053,7349],[4027,7386],[3967,7381],[3904,7331],[3921,7278],[3894,7214],[3776,7231],[3776,7189],[3668,7202],[3624,7232],[3588,7248],[3606,7277],[3517,7326],[3426,7491],[3368,7510],[3300,7448],[3188,7534],[3096,7525],[3127,7655],[3175,7655],[3245,7712],[3288,7779],[3279,7824],[3353,7824],[3384,7929],[3433,7869],[3510,7875],[3593,7843],[3598,7871],[3675,7861],[3675,7946],[3713,7920],[3748,7796],[3812,7807],[3801,7838],[3846,7886],[3814,7994],[3796,7988],[3826,8007],[3825,8110],[3968,8104],[4021,8155],[4080,8125],[4171,8075],[4231,8093],[4295,7987],[4371,7948],[4420,7960],[4431,7905],[4514,7859],[4503,7789],[4540,7735],[4534,7618],[4500,7594],[4562,7534],[4552,7511]]]]}},{"type":"Feature","id":"DE.NI.03356000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.48,"hc-key":"de-ni-03356000","hc-a2":"OS","name":"Osterholz","bundesland":"DE.NI"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1440,7278],[1439,7276],[1436,7278],[1437,7280],[1440,7278]]],[[[1330,7321],[1328,7366],[1344,7516],[1346,7413],[1478,7398],[1535,7423],[1565,7477],[1541,7508],[1590,7547],[1687,7533],[1773,7422],[1786,7276],[1822,7213],[1793,7176],[1749,7178],[1716,7214],[1647,7186],[1607,7231],[1476,7250],[1425,7300],[1330,7321]]]]}},{"type":"Feature","id":"DE.BY.09184000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.72,"hc-key":"de-by-09184000","hc-a2":"MÃœ","name":"MÃ¼nchen","bundesland":"DE.BY"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4156,162],[4154,163],[4156,165],[4158,163],[4156,162]]],[[[4435,-11],[4417,-44],[4398,-44],[4369,-21],[4226,-57],[4169,-6],[4118,-16],[4040,18],[4042,71],[3994,203],[4008,210],[4019,225],[4067,230],[4075,165],[4149,151],[4183,184],[4277,164],[4309,248],[4282,300],[4218,311],[4237,359],[4140,370],[4095,397],[4111,441],[4166,471],[4201,431],[4316,444],[4337,415],[4336,367],[4357,285],[4333,259],[4366,187],[4376,88],[4353,47],[4435,-11]]]]}},{"type":"Feature","id":"DE.BY.09177000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.49,"hc-key":"de-by-09177000","hc-a2":"ER","name":"Erding","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4608,266],[4507,297],[4453,352],[4336,367],[4337,415],[4316,444],[4353,560],[4404,637],[4513,701],[4568,669],[4572,649],[4706,660],[4729,593],[4791,526],[4769,355],[4738,378],[4608,266]]]}},{"type":"Feature","id":"DE.BY.09175000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.50,"hc-key":"de-by-09175000","hc-a2":"EB","name":"Ebersberg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4336,367],[4453,352],[4507,297],[4608,266],[4615,250],[4649,241],[4645,36],[4581,3],[4507,42],[4513,-31],[4435,-11],[4353,47],[4376,88],[4366,187],[4333,259],[4357,285],[4336,367]]]}},{"type":"Feature","id":"DE.SH.01061000","properties":{"hc-group":"admin2","hc-middle-x":0.45,"hc-middle-y":0.41,"hc-key":"de-sh-01061000","hc-a2":"ST","name":"Steinburg","bundesland":"DE.SH"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2104,8501],[2103,8505],[2110,8519],[2115,8512],[2104,8501]]],[[[2174,7995],[2174,7998],[2177,7997],[2174,7995]]],[[[2474,8421],[2428,8313],[2388,8304],[2383,8254],[2295,8233],[2320,8195],[2294,8086],[2232,8057],[2246,8013],[2192,8001],[2117,8056],[2089,8145],[2013,8217],[1926,8246],[1935,8308],[1999,8383],[2018,8489],[2123,8499],[2135,8524],[2231,8531],[2260,8470],[2354,8462],[2393,8478],[2474,8421]]]]}},{"type":"Feature","id":"DE.RP.07138000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.45,"hc-key":"de-rp-07138000","hc-a2":"NE","name":"Neuwied","bundesland":"DE.RP"},"geometry":{"type":"MultiPolygon","coordinates":[[[[606,3656],[616,3649],[604,3628],[596,3651],[606,3656]]],[[[172,3698],[304,3731],[319,3827],[378,3816],[416,3757],[405,3636],[457,3618],[511,3731],[588,3718],[607,3688],[584,3676],[608,3602],[575,3503],[511,3468],[468,3405],[402,3397],[286,3490],[217,3628],[170,3654],[172,3698]],[[587,3605],[587,3609],[575,3613],[578,3602],[587,3605]]]]}},{"type":"Feature","id":"DE.RP.07143000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.33,"hc-key":"de-rp-07143000","hc-a2":"WE","name":"Westerwaldkreis","bundesland":"DE.RP"},"geometry":{"type":"MultiPolygon","coordinates":[[[[587,3605],[578,3602],[575,3613],[587,3609],[587,3605]]],[[[909,3788],[962,3795],[986,3770],[971,3731],[1007,3649],[976,3559],[913,3591],[855,3528],[879,3446],[843,3381],[765,3377],[743,3301],[662,3336],[590,3321],[596,3329],[568,3351],[577,3407],[511,3468],[575,3503],[608,3602],[584,3676],[607,3688],[605,3805],[631,3841],[702,3838],[763,3777],[778,3815],[827,3805],[842,3762],[909,3788]],[[606,3656],[596,3651],[604,3628],[616,3649],[606,3656]]]]}},{"type":"Feature","id":"DE.RP.07313000","properties":{"hc-group":"admin2","hc-middle-x":0.80,"hc-middle-y":0.77,"hc-key":"de-rp-07313000","hc-a2":"LI","name":"Landau in der Pfalz","bundesland":"DE.RP"},"geometry":{"type":"MultiPolygon","coordinates":[[[[840,1662],[834,1654],[825,1665],[831,1670],[840,1662]]],[[[731,1813],[728,1816],[727,1855],[775,1857],[790,1848],[779,1821],[731,1813]]],[[[1009,1644],[949,1659],[895,1645],[902,1728],[944,1741],[1010,1706],[1009,1644]]]]}},{"type":"Feature","id":"DE.BW.08125000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.45,"hc-key":"de-bw-08125000","hc-a2":"HE","name":"Heilbronn","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1596,1682],[1637,1653],[1658,1693],[1723,1707],[1807,1819],[1899,1793],[1910,1869],[1983,1825],[2066,1952],[2104,1918],[2167,1920],[2232,1836],[2158,1806],[2141,1754],[2168,1716],[2106,1683],[2102,1642],[2182,1568],[2213,1606],[2246,1563],[2223,1555],[2222,1521],[2180,1514],[2144,1477],[2138,1497],[2129,1472],[2129,1467],[2129,1464],[2022,1471],[1980,1438],[1922,1481],[1853,1497],[1817,1445],[1752,1462],[1648,1459],[1644,1480],[1650,1491],[1643,1594],[1605,1585],[1596,1682]],[[1909,1619],[1882,1585],[1910,1540],[1948,1567],[2035,1577],[1998,1638],[1900,1701],[1803,1685],[1849,1648],[1909,1619]]]}},{"type":"Feature","id":"DE.BW.08226000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.66,"hc-key":"de-bw-08226000","hc-a2":"RN","name":"Rhein-Neckar-Kreis","bundesland":"DE.BW"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1807,1819],[1723,1707],[1658,1693],[1637,1653],[1596,1682],[1370,1767],[1293,1816],[1267,1849],[1279,1887],[1306,1955],[1304,1986],[1329,1995],[1373,1992],[1430,1959],[1398,1922],[1510,1910],[1574,1976],[1531,2035],[1382,2007],[1389,2053],[1349,2078],[1381,2137],[1418,2172],[1393,2264],[1470,2285],[1471,2280],[1472,2280],[1477,2274],[1472,2273],[1498,2154],[1607,2101],[1671,2113],[1671,2101],[1670,2087],[1604,2066],[1629,1964],[1700,2067],[1718,2116],[1801,2107],[1838,2145],[1840,2108],[1785,2069],[1806,2032],[1752,1969],[1705,1952],[1731,1895],[1805,1863],[1807,1819]]],[[[1852,2193],[1849,2180],[1842,2176],[1828,2200],[1852,2193]]]]}},{"type":"Feature","id":"DE.SL.10045000","properties":{"hc-group":"admin2","hc-middle-x":0.75,"hc-middle-y":0.76,"hc-key":"de-sl-10045000","hc-a2":"SK","name":"Saarpfalz-Kreis","bundesland":"DE.SL"},"geometry":{"type":"Polygon","coordinates":[[[267,1651],[196,1588],[153,1610],[74,1601],[21,1649],[55,1734],[33,1791],[-10,1812],[41,1864],[101,1831],[179,1879],[138,1945],[205,1998],[210,1971],[298,1945],[303,1943],[304,1939],[305,1909],[295,1867],[196,1750],[223,1691],[250,1654],[267,1651]]]}},{"type":"Feature","id":"DE.TH.16062000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.48,"hc-key":"de-th-16062000","hc-a2":"NO","name":"Nordhausen","bundesland":"DE.TH"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3048,4798],[3048,4801],[3054,4803],[3055,4797],[3048,4798]]],[[[3221,5114],[3240,5116],[3242,5120],[3297,5131],[3430,5089],[3414,5006],[3460,4979],[3491,4825],[3410,4788],[3340,4811],[3310,4771],[3262,4782],[3186,4755],[3123,4776],[3095,4736],[3062,4816],[3101,4951],[3054,4981],[3059,5022],[3122,4998],[3189,5038],[3221,5114]]]]}},{"type":"Feature","id":"DE.BB.12068000","properties":{"hc-group":"admin2","hc-middle-x":0.57,"hc-middle-y":0.51,"hc-key":"de-bb-12068000","hc-a2":"OR","name":"Ostprignitz-Ruppin","bundesland":"DE.BB"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4486,6868],[4484,6869],[4488,6872],[4489,6870],[4486,6868]]],[[[4546,7516],[4547,7515],[4552,7511],[4604,7492],[4651,7421],[4738,7442],[4838,7404],[4915,7398],[4923,7349],[4993,7370],[5029,7343],[5076,7371],[5110,7325],[5135,7299],[5075,7238],[5107,7196],[5152,7197],[5180,7085],[5182,6982],[5158,6965],[5181,6894],[5126,6902],[5133,6840],[5083,6805],[5089,6735],[5014,6661],[4939,6669],[4918,6742],[4851,6803],[4768,6811],[4771,6730],[4649,6726],[4641,6793],[4516,6773],[4497,6868],[4466,6891],[4406,6854],[4406,6905],[4467,6941],[4538,6951],[4567,7054],[4644,7077],[4634,7144],[4578,7103],[4532,7151],[4574,7212],[4532,7234],[4563,7295],[4541,7358],[4571,7400],[4529,7490],[4546,7516]]]]}},{"type":"Feature","id":"DE.HB.04012000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.54,"hc-key":"de-hb-04012000","hc-a2":"BR","name":"Bremerhaven","bundesland":"DE.HB"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1469,7855],[1480,7851],[1477,7845],[1466,7849],[1469,7855]]],[[[1389,7725],[1408,7758],[1398,7771],[1410,7811],[1365,7830],[1354,7846],[1363,7851],[1423,7832],[1471,7717],[1433,7680],[1339,7664],[1357,7704],[1389,7725]]]]}},{"type":"Feature","id":"DE.BY.09377000","properties":{"hc-group":"admin2","hc-middle-x":0.80,"hc-middle-y":0.52,"hc-key":"de-by-09377000","hc-a2":"TI","name":"Tirschenreuth","bundesland":"DE.BY"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4291,2786],[4291,2789],[4294,2790],[4297,2788],[4291,2786]]],[[[4342,2643],[4297,2800],[4379,2829],[4551,2832],[4635,2869],[4641,2915],[4696,2953],[4747,2948],[4812,2894],[4916,2842],[4900,2790],[4962,2773],[4899,2580],[4842,2539],[4692,2550],[4626,2666],[4560,2605],[4547,2562],[4495,2568],[4468,2614],[4376,2583],[4342,2643]]]]}},{"type":"Feature","id":"DE.BY.09187000","properties":{"hc-group":"admin2","hc-middle-x":0.61,"hc-middle-y":0.65,"hc-key":"de-by-09187000","hc-a2":"RO","name":"Rosenheim","bundesland":"DE.BY"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4974,-102],[4973,-99],[4976,-98],[4976,-99],[4974,-102]]],[[[4982,-96],[4981,-93],[4982,-89],[4985,-91],[4982,-96]]],[[[4966,-109],[4968,-121],[4950,-122],[4952,-96],[4966,-109]]],[[[4398,-44],[4417,-44],[4435,-11],[4513,-31],[4507,42],[4581,3],[4645,36],[4649,241],[4690,256],[4723,189],[4764,255],[4837,227],[4931,246],[4884,206],[4908,137],[4884,49],[4996,-24],[4965,-92],[4924,-101],[4951,-178],[4910,-343],[4833,-371],[4839,-297],[4750,-369],[4791,-473],[4653,-463],[4621,-426],[4586,-255],[4506,-201],[4535,-152],[4447,-129],[4398,-44]],[[4707,-108],[4676,-91],[4636,-186],[4724,-161],[4707,-108]]]]}},{"type":"Feature","id":"DE.NI.03462000","properties":{"hc-group":"admin2","hc-middle-x":0.33,"hc-middle-y":0.30,"hc-key":"de-ni-03462000","hc-a2":"WI","name":"Wittmund","bundesland":"DE.NI"},"geometry":{"type":"MultiPolygon","coordinates":[[[[558,7958],[688,7995],[774,7999],[813,7872],[779,7710],[877,7721],[900,7629],[808,7567],[818,7535],[787,7517],[771,7535],[706,7627],[708,7672],[658,7659],[638,7796],[498,7780],[453,7761],[449,7880],[526,7892],[506,7920],[558,7958]]],[[[493,8059],[596,8075],[612,8056],[531,8055],[493,8059]]],[[[693,8104],[779,8103],[732,8074],[681,8082],[693,8104]]]]}},{"type":"Feature","id":"DE.BY.09372000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.52,"hc-key":"de-by-09372000","hc-a2":"CH","name":"Cham","bundesland":"DE.BY"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4859,1816],[4860,1814],[4852,1814],[4852,1816],[4859,1816]]],[[[4850,1808],[4846,1807],[4849,1811],[4852,1811],[4850,1808]]],[[[4877,1851],[4883,1851],[4882,1849],[4876,1849],[4877,1851]]],[[[4841,1841],[4846,1841],[4848,1839],[4842,1839],[4841,1841]]],[[[4849,1814],[4847,1818],[4848,1820],[4851,1821],[4849,1814]]],[[[4871,1828],[4867,1829],[4858,1835],[4863,1833],[4871,1828]]],[[[4859,1851],[4862,1852],[4868,1847],[4862,1847],[4859,1851]]],[[[4959,1528],[4905,1546],[4906,1610],[4814,1600],[4797,1689],[4829,1767],[4866,1762],[4894,1866],[4941,1860],[4950,2050],[5004,2071],[4975,2110],[5071,2155],[5094,2098],[5189,2046],[5234,1974],[5369,1983],[5444,1933],[5451,1877],[5495,1856],[5525,1796],[5583,1757],[5554,1669],[5472,1726],[5401,1738],[5379,1698],[5219,1656],[5054,1626],[4970,1569],[4959,1528]]]]}},{"type":"Feature","id":"DE.BB.12071000","properties":{"hc-group":"admin2","hc-middle-x":0.75,"hc-middle-y":0.20,"hc-key":"de-bb-12071000","hc-a2":"SN","name":"Spree-NeiÃŸe","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[6751,5214],[6650,5162],[6612,5203],[6510,5140],[6421,5100],[6262,5120],[6244,5166],[6294,5230],[6230,5252],[6187,5302],[6221,5397],[6187,5414],[6203,5478],[6158,5513],[6164,5587],[6240,5563],[6278,5631],[6358,5681],[6422,5686],[6395,5775],[6458,5816],[6486,5862],[6507,5794],[6556,5794],[6581,5837],[6694,5799],[6685,5659],[6602,5563],[6655,5505],[6670,5431],[6745,5364],[6777,5247],[6751,5214]],[[6332,5493],[6340,5402],[6367,5354],[6489,5364],[6439,5431],[6490,5427],[6532,5473],[6522,5512],[6447,5498],[6418,5547],[6352,5580],[6363,5521],[6332,5493]]]}},{"type":"Feature","id":"DE.SN.14626000","properties":{"hc-group":"admin2","hc-middle-x":0.74,"hc-middle-y":0.49,"hc-key":"de-sn-14626000","hc-a2":"GÃ–","name":"GÃ¶rlitz","bundesland":"DE.SN"},"geometry":{"type":"Polygon","coordinates":[[[6510,5140],[6612,5203],[6650,5162],[6751,5214],[6762,5137],[6953,5076],[6979,5036],[6981,4923],[7049,4834],[7058,4765],[7029,4648],[7026,4526],[6968,4330],[6906,4247],[6896,4159],[6823,4154],[6732,4195],[6752,4301],[6674,4286],[6701,4375],[6609,4417],[6600,4446],[6581,4482],[6655,4504],[6666,4559],[6704,4559],[6767,4651],[6694,4716],[6673,4823],[6605,4875],[6560,4833],[6539,4867],[6586,4991],[6542,5043],[6510,5140]]]}},{"type":"Feature","id":"DE.NI.03459000","properties":{"hc-group":"admin2","hc-middle-x":0.27,"hc-middle-y":0.24,"hc-key":"de-ni-03459000","hc-a2":"OS","name":"OsnabrÃ¼ck","bundesland":"DE.NI"},"geometry":{"type":"MultiPolygon","coordinates":[[[[737,6578],[735,6580],[736,6583],[738,6579],[737,6578]]],[[[1172,6304],[1168,6267],[1162,6244],[1175,6174],[1286,6112],[1304,5979],[1295,5882],[1347,5863],[1250,5788],[1255,5766],[1131,5791],[1069,5711],[983,5688],[927,5704],[882,5660],[802,5727],[908,5770],[909,5855],[824,5876],[840,5977],[867,5991],[868,5961],[934,5921],[1017,5932],[1008,5972],[1058,6000],[1007,6014],[989,6056],[875,6064],[814,6142],[741,6131],[662,6174],[642,6248],[573,6277],[581,6485],[648,6563],[712,6559],[790,6603],[842,6561],[928,6565],[973,6510],[941,6353],[963,6312],[960,6229],[1043,6213],[1082,6280],[1172,6304]]]]}},{"type":"Feature","id":"DE.BY.09172000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.67,"hc-key":"de-by-09172000","hc-a2":"BL","name":"Berchtesgadener Land","bundesland":"DE.BY"},"geometry":{"type":"MultiPolygon","coordinates":[[[[5286,-61],[5284,-56],[5290,-54],[5288,-57],[5286,-61]]],[[[5399,51],[5459,27],[5528,-107],[5463,-216],[5443,-281],[5522,-300],[5541,-278],[5612,-324],[5632,-395],[5584,-470],[5594,-598],[5557,-639],[5463,-598],[5335,-489],[5375,-441],[5295,-355],[5249,-349],[5268,-275],[5387,-241],[5371,-201],[5315,-197],[5273,-142],[5287,-62],[5405,-68],[5378,-22],[5399,51]]]]}},{"type":"Feature","id":"DE.NI.03405000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.52,"hc-key":"de-ni-03405000","hc-a2":"WI","name":"Wilhelmshaven","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[1007,7899],[1070,7767],[1057,7725],[979,7714],[933,7861],[1007,7899]]]}},{"type":"Feature","id":"DE.BW.08136000","properties":{"hc-group":"admin2","hc-middle-x":0.63,"hc-middle-y":0.49,"hc-key":"de-bw-08136000","hc-a2":"OS","name":"Ostalbkreis","bundesland":"DE.BW"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2479,1030],[2470,1033],[2481,1041],[2484,1034],[2479,1030]]],[[[3078,1065],[2982,1047],[2952,1078],[2825,1120],[2809,1090],[2675,1034],[2585,1057],[2581,1016],[2494,1023],[2449,1098],[2341,1097],[2353,1160],[2471,1180],[2445,1275],[2385,1334],[2400,1362],[2496,1352],[2571,1301],[2607,1371],[2690,1388],[2673,1442],[2725,1474],[2916,1502],[2913,1474],[3003,1460],[3059,1390],[3104,1307],[3098,1160],[3078,1065]]]]}},{"type":"Feature","id":"DE.BW.08415000","properties":{"hc-group":"admin2","hc-middle-x":0.44,"hc-middle-y":0.53,"hc-key":"de-bw-08415000","hc-a2":"RE","name":"Reutlingen","bundesland":"DE.BW"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1918,856],[1921,849],[1917,851],[1914,857],[1918,856]]],[[[1875,824],[1871,825],[1872,827],[1876,827],[1875,824]]],[[[1901,774],[1898,773],[1897,777],[1900,778],[1901,774]]],[[[1882,852],[1889,852],[1902,856],[2127,755],[2181,777],[2196,736],[2303,768],[2303,767],[2305,764],[2304,699],[2354,600],[2303,566],[2313,504],[2234,403],[2220,339],[2227,311],[2123,290],[2086,348],[2034,411],[1936,405],[1958,442],[1929,526],[1883,533],[1871,609],[1920,782],[1879,804],[1882,852]]]]}},{"type":"Feature","id":"DE.BY.09472000","properties":{"hc-group":"admin2","hc-middle-x":0.43,"hc-middle-y":0.54,"hc-key":"de-by-09472000","hc-a2":"BA","name":"Bayreuth","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4082,2447],[4073,2344],[4004,2346],[3966,2303],[3911,2375],[3897,2454],[3921,2500],[3854,2560],[3784,2656],[3742,2670],[3786,2823],[3793,2829],[3795,2838],[3815,2794],[3914,2750],[3923,2788],[4106,2872],[4130,2943],[4179,2976],[4168,3025],[4229,3016],[4269,2998],[4278,2961],[4343,2915],[4379,2829],[4297,2800],[4342,2643],[4296,2644],[4146,2575],[4144,2514],[4111,2503],[4082,2447]],[[4291,2786],[4297,2788],[4294,2790],[4291,2789],[4291,2786]],[[3999,2770],[4011,2781],[4008,2782],[4000,2775],[3999,2770]],[[4014,2784],[4080,2710],[4123,2698],[4164,2772],[4156,2811],[4098,2810],[4014,2784]]]}},{"type":"Feature","id":"DE.BY.09574000","properties":{"hc-group":"admin2","hc-middle-x":0.59,"hc-middle-y":0.49,"hc-key":"de-by-09574000","hc-a2":"NL","name":"NÃ¼rnberger Land","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3911,2375],[3966,2303],[4004,2346],[4073,2344],[4082,2447],[4124,2321],[4078,2292],[4100,2260],[4071,2155],[4123,2101],[4094,2035],[4009,2036],[3973,1995],[3938,1900],[3889,1865],[3815,1895],[3763,1970],[3741,1981],[3707,2043],[3746,2101],[3753,2222],[3835,2254],[3833,2285],[3879,2333],[3911,2375]],[[3824,2057],[3811,2056],[3825,2022],[3841,2023],[3824,2057]]]}},{"type":"Feature","id":"DE.BY.09564000","properties":{"hc-group":"admin2","hc-middle-x":0.34,"hc-middle-y":0.49,"hc-key":"de-by-09564000","hc-a2":"NÃœ","name":"NÃ¼rnberg","bundesland":"DE.BY"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3824,2057],[3841,2023],[3825,2022],[3811,2056],[3824,2057]]],[[[3585,1959],[3582,1961],[3580,1967],[3609,1986],[3576,2044],[3605,2146],[3570,2184],[3571,2189],[3609,2183],[3640,2141],[3685,2157],[3746,2101],[3707,2043],[3741,1981],[3692,1981],[3661,1910],[3617,1955],[3585,1959]]]]}},{"type":"Feature","id":"DE.NI.03241000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.39,"hc-key":"de-ni-03241000","hc-a2":"RH","name":"Region Hannover","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[2304,5789],[2247,5835],[2196,5830],[2206,5901],[2147,5988],[2103,6070],[2131,6099],[2114,6170],[2057,6139],[2035,6168],[2077,6213],[1995,6239],[1965,6344],[2076,6388],[2054,6447],[2160,6501],[2196,6478],[2217,6528],[2259,6552],[2312,6456],[2362,6449],[2387,6499],[2447,6456],[2518,6451],[2600,6414],[2604,6359],[2680,6361],[2736,6307],[2767,6329],[2844,6295],[2849,6327],[2849,6288],[2866,6239],[2834,6202],[2790,6207],[2729,6162],[2739,6085],[2690,6085],[2649,6006],[2546,6000],[2441,5958],[2464,5927],[2419,5843],[2396,5883],[2359,5796],[2304,5789]]]}},{"type":"Feature","id":"DE.NI.03252000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.49,"hc-key":"de-ni-03252000","hc-a2":"HP","name":"Hameln-Pyrmont","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[2147,5988],[2206,5901],[2196,5830],[2247,5835],[2304,5789],[2351,5754],[2324,5710],[2322,5556],[2258,5661],[2188,5630],[2146,5582],[2077,5565],[2079,5524],[2029,5496],[1999,5567],[1923,5556],[1926,5701],[1896,5740],[1930,5802],[1895,5858],[2004,5910],[2078,5913],[2147,5988]]]}},{"type":"Feature","id":"DE.BY.09375000","properties":{"hc-group":"admin2","hc-middle-x":0.65,"hc-middle-y":0.54,"hc-key":"de-by-09375000","hc-a2":"RE","name":"Regensburg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4797,1689],[4814,1600],[4906,1610],[4905,1546],[4959,1528],[4961,1447],[4924,1441],[4946,1369],[4872,1264],[4828,1284],[4749,1246],[4658,1142],[4637,1145],[4623,1149],[4622,1259],[4648,1276],[4598,1379],[4491,1413],[4457,1386],[4419,1478],[4342,1483],[4322,1441],[4207,1475],[4217,1555],[4286,1604],[4337,1701],[4368,1670],[4451,1734],[4516,1687],[4552,1704],[4600,1668],[4673,1782],[4721,1698],[4797,1689]],[[4565,1537],[4547,1479],[4595,1425],[4683,1432],[4695,1483],[4657,1535],[4644,1566],[4565,1537]]]}},{"type":"Feature","id":"DE.HE.06534000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.47,"hc-key":"de-he-06534000","hc-a2":"MB","name":"Marburg-Biedenkopf","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1894,3977],[1786,3919],[1776,3885],[1680,3818],[1690,3794],[1497,3763],[1452,3791],[1427,3752],[1383,3786],[1317,3840],[1278,3818],[1283,3907],[1231,3918],[1230,3994],[1192,4015],[1261,4093],[1301,4163],[1406,4135],[1474,4201],[1573,4144],[1740,4119],[1786,4069],[1859,4092],[1894,3977]]]}},{"type":"Feature","id":"DE.HE.06535000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.33,"hc-key":"de-he-06535000","hc-a2":"VO","name":"Vogelsbergkreis","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1690,3794],[1680,3818],[1776,3885],[1786,3919],[1894,3977],[1996,3947],[1999,3924],[2084,3926],[2109,3888],[2153,3921],[2147,3889],[2211,3836],[2269,3880],[2304,3837],[2302,3656],[2212,3698],[2145,3474],[2190,3425],[2117,3353],[2066,3368],[2078,3417],[2020,3453],[2018,3419],[1994,3455],[1898,3415],[1840,3420],[1800,3503],[1881,3586],[1831,3599],[1807,3646],[1728,3691],[1736,3754],[1690,3794]]]}},{"type":"Feature","id":"DE.BW.08317000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.46,"hc-key":"de-bw-08317000","hc-a2":"OR","name":"Ortenaukreis","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1041,859],[1032,745],[1081,701],[1082,643],[1048,576],[1114,503],[1130,423],[1090,421],[1117,281],[1092,255],[1037,237],[996,273],[983,332],[925,308],[845,345],[810,301],[671,348],[581,353],[531,382],[542,440],[593,486],[582,548],[617,702],[654,742],[654,849],[695,924],[800,1023],[818,979],[904,956],[1021,894],[1041,859]]]}},{"type":"Feature","id":"DE.BW.08237000","properties":{"hc-group":"admin2","hc-middle-x":0.40,"hc-middle-y":0.57,"hc-key":"de-bw-08237000","hc-a2":"FR","name":"Freudenstadt","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1114,503],[1048,576],[1082,643],[1081,701],[1032,745],[1041,859],[1131,837],[1215,908],[1326,842],[1418,765],[1389,729],[1459,726],[1478,694],[1535,717],[1603,659],[1552,594],[1537,547],[1517,541],[1386,587],[1282,548],[1290,453],[1166,487],[1137,556],[1114,503]]]}},{"type":"Feature","id":"DE.ST.15001000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.51,"hc-key":"de-st-15001000","hc-a2":"DR","name":"Dessau-RoÃŸlau","bundesland":"DE.ST"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4457,5520],[4460,5532],[4462,5531],[4460,5520],[4457,5520]]],[[[4658,5297],[4619,5371],[4572,5366],[4563,5325],[4468,5356],[4483,5475],[4463,5519],[4516,5526],[4490,5560],[4532,5611],[4595,5626],[4634,5508],[4604,5473],[4659,5375],[4658,5297]]]]}},{"type":"Feature","id":"DE.ST.15082000","properties":{"hc-group":"admin2","hc-middle-x":0.31,"hc-middle-y":0.66,"hc-key":"de-st-15082000","hc-a2":"AB","name":"Anhalt-Bitterfeld","bundesland":"DE.ST"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4261,5463],[4259,5461],[4258,5464],[4261,5465],[4261,5463]]],[[[4267,5471],[4263,5467],[4261,5478],[4265,5478],[4267,5471]]],[[[4583,5812],[4630,5766],[4672,5734],[4628,5669],[4595,5626],[4532,5611],[4490,5560],[4516,5526],[4463,5519],[4483,5475],[4468,5356],[4563,5325],[4572,5366],[4619,5371],[4658,5297],[4673,5228],[4781,5259],[4819,5202],[4869,5214],[4877,5157],[4861,5131],[4776,5120],[4745,5089],[4678,5092],[4632,5053],[4579,5052],[4551,5009],[4518,5077],[4415,5077],[4406,5160],[4296,5162],[4253,5198],[4229,5208],[4240,5287],[4270,5318],[4233,5343],[4260,5400],[4246,5444],[4366,5503],[4252,5623],[4257,5656],[4354,5699],[4411,5765],[4500,5770],[4529,5808],[4583,5812]],[[4457,5520],[4460,5520],[4462,5531],[4460,5532],[4457,5520]]]]}},{"type":"Feature","id":"DE.NW.05766000","properties":{"hc-group":"admin2","hc-middle-x":0.38,"hc-middle-y":0.42,"hc-key":"de-nw-05766000","hc-a2":"LI","name":"Lippe","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[1896,5740],[1926,5701],[1923,5556],[1999,5567],[2029,5496],[2057,5475],[2042,5401],[1954,5398],[1881,5421],[1870,5479],[1759,5385],[1721,5375],[1727,5309],[1683,5340],[1580,5321],[1544,5406],[1486,5489],[1422,5503],[1458,5548],[1464,5688],[1547,5773],[1638,5745],[1669,5760],[1699,5861],[1752,5857],[1750,5875],[1808,5810],[1888,5791],[1896,5740]]]}},{"type":"Feature","id":"DE.NI.03361000","properties":{"hc-group":"admin2","hc-middle-x":0.42,"hc-middle-y":0.61,"hc-key":"de-ni-03361000","hc-a2":"VE","name":"Verden","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[2038,6677],[2022,6739],[1925,6745],[1947,6791],[1904,6862],[1860,6857],[1763,6896],[1722,6846],[1681,6956],[1691,7017],[1745,7067],[1749,7178],[1793,7176],[1822,7213],[1927,7239],[1894,7123],[1949,7061],[2050,7021],[2077,6978],[2131,7007],[2146,6887],[2042,6746],[2038,6677]]]}},{"type":"Feature","id":"DE.NI.03256000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.51,"hc-key":"de-ni-03256000","hc-a2":"N(","name":"Nienburg (Weser)","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[1860,6857],[1904,6862],[1947,6791],[1925,6745],[2022,6739],[2038,6677],[2060,6619],[2170,6621],[2217,6528],[2196,6478],[2160,6501],[2054,6447],[2076,6388],[1965,6344],[1995,6239],[1941,6189],[1869,6179],[1843,6222],[1879,6268],[1807,6302],[1709,6165],[1638,6148],[1512,6156],[1509,6303],[1571,6349],[1671,6376],[1662,6485],[1766,6515],[1799,6612],[1818,6732],[1791,6776],[1855,6810],[1860,6857]]]}},{"type":"Feature","id":"DE.SN.14522000","properties":{"hc-group":"admin2","hc-middle-x":0.58,"hc-middle-y":0.46,"hc-key":"de-sn-14522000","hc-a2":"MI","name":"Mittelsachsen","bundesland":"DE.SN"},"geometry":{"type":"Polygon","coordinates":[[[5889,3958],[5778,3915],[5798,3878],[5764,3815],[5642,3919],[5632,3974],[5559,3950],[5528,4001],[5431,3986],[5348,4033],[5345,4081],[5290,4094],[5276,4153],[5164,4151],[5127,4106],[5068,4157],[4989,4178],[4968,4204],[4954,4257],[5054,4285],[5036,4373],[5058,4438],[5175,4426],[5187,4480],[5146,4509],[5208,4602],[5315,4602],[5447,4632],[5464,4567],[5501,4540],[5498,4472],[5531,4358],[5627,4393],[5659,4370],[5666,4317],[5709,4293],[5677,4262],[5804,4055],[5889,3958]]]}},{"type":"Feature","id":"DE.NI.03353000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.48,"hc-key":"de-ni-03353000","hc-a2":"HA","name":"Harburg","bundesland":"DE.NI"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2809,7426],[2812,7431],[2813,7430],[2810,7425],[2809,7426]]],[[[2852,7475],[2856,7473],[2856,7471],[2851,7473],[2852,7475]]],[[[2855,7617],[2911,7606],[2990,7554],[2967,7510],[2908,7531],[2869,7478],[2818,7474],[2777,7421],[2817,7374],[2766,7323],[2775,7263],[2696,7247],[2667,7189],[2603,7250],[2529,7250],[2477,7300],[2433,7267],[2335,7311],[2285,7322],[2233,7475],[2307,7577],[2416,7621],[2403,7712],[2480,7616],[2510,7646],[2585,7588],[2640,7657],[2745,7564],[2801,7568],[2855,7617]]]]}},{"type":"Feature","id":"DE.SH.01053000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.49,"hc-key":"de-sh-01053000","hc-a2":"HL","name":"Herzogtum Lauenburg","bundesland":"DE.SH"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3125,8120],[3119,8119],[3119,8121],[3125,8123],[3125,8120]]],[[[3096,7525],[3021,7536],[2990,7554],[2911,7606],[2855,7617],[2795,7686],[2793,7705],[2855,7787],[2942,7855],[3017,7866],[2929,7949],[2960,7993],[2980,8086],[3033,8082],[3072,8141],[3121,8092],[3221,8154],[3220,8065],[3297,8001],[3357,8001],[3384,7929],[3353,7824],[3279,7824],[3288,7779],[3245,7712],[3175,7655],[3127,7655],[3096,7525]]]]}},{"type":"Feature","id":"DE.SN.14523000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.41,"hc-key":"de-sn-14523000","hc-a2":"VO","name":"Vogtlandkreis","bundesland":"DE.SN"},"geometry":{"type":"Polygon","coordinates":[[[4369,3452],[4340,3477],[4405,3541],[4320,3611],[4382,3686],[4435,3717],[4448,3656],[4498,3640],[4575,3679],[4530,3688],[4562,3746],[4600,3727],[4694,3783],[4710,3819],[4762,3818],[4823,3736],[4814,3683],[4904,3646],[4844,3581],[4962,3476],[4963,3453],[4900,3437],[4885,3376],[4803,3325],[4748,3213],[4755,3114],[4700,3147],[4716,3182],[4630,3250],[4612,3319],[4537,3310],[4423,3353],[4429,3403],[4369,3452]]]}},{"type":"Feature","id":"DE.TH.16075000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.50,"hc-key":"de-th-16075000","hc-a2":"SO","name":"Saale-Orla-Kreis","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[4382,3686],[4320,3611],[4405,3541],[4340,3477],[4369,3452],[4285,3400],[4258,3439],[4108,3390],[4088,3405],[4015,3368],[3978,3447],[3981,3606],[4043,3613],[4105,3677],[4020,3693],[3958,3845],[4019,3895],[4163,3919],[4201,3947],[4302,3958],[4371,3930],[4307,3847],[4327,3733],[4382,3686]]]}},{"type":"Feature","id":"DE.TH.16074000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.55,"hc-key":"de-th-16074000","hc-a2":"SH","name":"Saale-Holzland-Kreis","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[4302,3958],[4201,3947],[4163,3919],[4019,3895],[3966,3931],[3909,3973],[3938,4003],[3920,4051],[3976,4112],[4020,4100],[4030,4043],[4118,4081],[4122,4180],[4009,4229],[4101,4280],[4136,4371],[4205,4314],[4295,4335],[4390,4278],[4428,4216],[4425,4215],[4430,4187],[4374,4180],[4371,4140],[4318,4109],[4302,3958]]]}},{"type":"Feature","id":"DE.BY.09163000","properties":{"hc-group":"admin2","hc-middle-x":0.37,"hc-middle-y":0.46,"hc-key":"de-by-09163000","hc-a2":"RO","name":"Rosenheim","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4707,-108],[4724,-161],[4636,-186],[4676,-91],[4707,-108]]]}},{"type":"Feature","id":"DE.BY.09762000","properties":{"hc-group":"admin2","hc-middle-x":0.40,"hc-middle-y":0.61,"hc-key":"de-by-09762000","hc-a2":"KA","name":"Kaufbeuren","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3235,-132],[3292,-81],[3324,-186],[3234,-164],[3235,-132]]]}},{"type":"Feature","id":"DE.BY.09474000","properties":{"hc-group":"admin2","hc-middle-x":0.56,"hc-middle-y":0.51,"hc-key":"de-by-09474000","hc-a2":"FO","name":"Forchheim","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3784,2656],[3854,2560],[3921,2500],[3897,2454],[3911,2375],[3879,2333],[3833,2285],[3678,2259],[3632,2327],[3626,2385],[3581,2375],[3534,2427],[3507,2506],[3662,2562],[3663,2602],[3780,2610],[3784,2656]]]}},{"type":"Feature","id":"DE.BY.09361000","properties":{"hc-group":"admin2","hc-middle-x":0.40,"hc-middle-y":0.61,"hc-key":"de-by-09361000","hc-a2":"AM","name":"Amberg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4367,2047],[4299,2051],[4306,2115],[4378,2151],[4418,2083],[4367,2047]]]}},{"type":"Feature","id":"DE.BY.09471000","properties":{"hc-group":"admin2","hc-middle-x":0.63,"hc-middle-y":0.40,"hc-key":"de-by-09471000","hc-a2":"BA","name":"Bamberg","bundesland":"DE.BY"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3473,2463],[3459,2467],[3466,2470],[3477,2466],[3473,2463]]],[[[3435,2956],[3441,2959],[3457,2959],[3451,2922],[3573,2855],[3673,2902],[3740,2905],[3786,2823],[3742,2670],[3784,2656],[3780,2610],[3663,2602],[3662,2562],[3507,2506],[3496,2528],[3397,2460],[3314,2528],[3261,2434],[3228,2458],[3167,2480],[3151,2534],[3072,2571],[3080,2651],[3122,2648],[3234,2633],[3334,2753],[3366,2891],[3417,2897],[3435,2956]],[[3505,2620],[3525,2678],[3491,2727],[3411,2685],[3464,2627],[3505,2620]]]]}},{"type":"Feature","id":"DE.BY.09463000","properties":{"hc-group":"admin2","hc-middle-x":0.44,"hc-middle-y":0.45,"hc-key":"de-by-09463000","hc-a2":"CO","name":"Coburg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3564,3177],[3536,3141],[3478,3164],[3452,3224],[3517,3246],[3575,3204],[3564,3177]]]}},{"type":"Feature","id":"DE.BY.09461000","properties":{"hc-group":"admin2","hc-middle-x":0.59,"hc-middle-y":0.57,"hc-key":"de-by-09461000","hc-a2":"BA","name":"Bamberg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3505,2620],[3464,2627],[3411,2685],[3491,2727],[3525,2678],[3505,2620]]]}},{"type":"Feature","id":"DE.NI.03156000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.58,"hc-key":"de-ni-03156000","hc-a2":"OA","name":"Osterode am Harz","bundesland":"DE.NI"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2898,5056],[2904,5055],[2904,5052],[2900,5052],[2898,5056]]],[[[3221,5114],[3189,5038],[3122,4998],[3059,5022],[2955,5038],[2952,4993],[2897,5008],[2906,5066],[2771,5117],[2732,5229],[2762,5258],[2762,5322],[2837,5379],[2872,5300],[2941,5290],[2958,5319],[3063,5285],[3037,5190],[3070,5146],[3125,5170],[3221,5114]]]]}},{"type":"Feature","id":"DE.BY.09462000","properties":{"hc-group":"admin2","hc-middle-x":0.60,"hc-middle-y":0.54,"hc-key":"de-by-09462000","hc-a2":"BA","name":"Bayreuth","bundesland":"DE.BY"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3999,2770],[4000,2775],[4008,2782],[4011,2781],[3999,2770]]],[[[4014,2784],[4098,2810],[4156,2811],[4164,2772],[4123,2698],[4080,2710],[4014,2784]]]]}},{"type":"Feature","id":"DE.BY.09678000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.55,"hc-key":"de-by-09678000","hc-a2":"SC","name":"Schweinfurt","bundesland":"DE.BY"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3066,3090],[3065,3092],[3067,3094],[3071,3088],[3066,3090]]],[[[3082,3083],[3081,3083],[3081,3086],[3085,3083],[3082,3083]]],[[[2991,3139],[3046,3130],[3064,3095],[3003,2949],[3049,2934],[3019,2879],[2958,2848],[3022,2830],[3069,2761],[3128,2727],[3122,2648],[3080,2651],[3072,2571],[3014,2589],[3005,2637],[2954,2615],[2927,2665],[2890,2651],[2871,2699],[2836,2665],[2754,2693],[2692,2747],[2698,2861],[2630,2889],[2672,2965],[2718,2952],[2786,2975],[2822,3031],[2892,3019],[2967,3080],[2991,3139]],[[2831,2877],[2813,2855],[2888,2840],[2890,2939],[2831,2877]]]]}},{"type":"Feature","id":"DE.BY.09662000","properties":{"hc-group":"admin2","hc-middle-x":0.61,"hc-middle-y":0.44,"hc-key":"de-by-09662000","hc-a2":"SC","name":"Schweinfurt","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[2831,2877],[2890,2939],[2888,2840],[2813,2855],[2831,2877]]]}},{"type":"Feature","id":"DE.SL.10042000","properties":{"hc-group":"admin2","hc-middle-x":0.35,"hc-middle-y":0.60,"hc-key":"de-sl-10042000","hc-a2":"MW","name":"Merzig-Wadern","bundesland":"DE.SL"},"geometry":{"type":"Polygon","coordinates":[[[-465,2031],[-587,2116],[-629,2100],[-641,2197],[-620,2221],[-432,2168],[-393,2200],[-286,2220],[-153,2294],[-93,2254],[-99,2150],[-140,2137],[-244,2082],[-245,2020],[-329,1966],[-388,2018],[-465,2031]]]}},{"type":"Feature","id":"DE.BB.12069000","properties":{"hc-group":"admin2","hc-middle-x":0.42,"hc-middle-y":0.65,"hc-key":"de-bb-12069000","hc-a2":"PM","name":"Potsdam-Mittelmark","bundesland":"DE.BB"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4566,5988],[4564,5990],[4574,5990],[4573,5987],[4566,5988]]],[[[4575,5987],[4583,5986],[4582,5985],[4575,5986],[4575,5987]]],[[[4672,5734],[4630,5766],[4583,5812],[4527,5902],[4592,5988],[4546,6012],[4595,6150],[4573,6176],[4595,6303],[4606,6283],[4634,6289],[4658,6278],[4692,6108],[4765,6127],[4789,6171],[4839,6166],[4851,6230],[4885,6236],[4924,6303],[4856,6322],[4815,6302],[4744,6331],[4690,6313],[4684,6447],[4811,6415],[4907,6453],[4937,6440],[4931,6437],[4931,6437],[4931,6437],[4931,6437],[4927,6435],[4931,6419],[4975,6338],[5087,6337],[5131,6327],[5128,6242],[5199,6189],[5303,6195],[5325,6257],[5349,6288],[5434,6295],[5449,6272],[5403,6174],[5330,6150],[5332,6093],[5295,6063],[5270,5978],[5161,5896],[5195,5828],[5190,5730],[5128,5743],[5080,5687],[5016,5659],[4930,5700],[4872,5654],[4817,5656],[4763,5722],[4738,5696],[4672,5734]]]]}},{"type":"Feature","id":"DE.NI.03455000","properties":{"hc-group":"admin2","hc-middle-x":0.57,"hc-middle-y":0.10,"hc-key":"de-ni-03455000","hc-a2":"FR","name":"Friesland","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[979,7714],[989,7653],[1054,7632],[1090,7577],[1095,7517],[1071,7501],[1030,7468],[978,7485],[950,7441],[900,7434],[891,7469],[830,7501],[826,7513],[818,7535],[808,7567],[900,7629],[877,7721],[779,7710],[813,7872],[774,7999],[861,8012],[959,7993],[966,7904],[1007,7899],[933,7861],[979,7714]]]}},{"type":"Feature","id":"DE.NI.03359000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.59,"hc-key":"de-ni-03359000","hc-a2":"ST","name":"Stade","bundesland":"DE.NI"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2372,7784],[2374,7783],[2379,7784],[2407,7780],[2407,7779],[2400,7776],[2355,7786],[2355,7786],[2359,7786],[2361,7785],[2370,7784],[2372,7784],[2372,7784]]],[[[2406,7774],[2406,7775],[2406,7775],[2406,7774]]],[[[2200,7932],[2199,7931],[2194,7946],[2195,7942],[2200,7932]]],[[[2338,7790],[2338,7790],[2338,7790],[2338,7790],[2338,7790]]],[[[2405,7765],[2410,7734],[2403,7712],[2416,7621],[2307,7577],[2233,7475],[2242,7520],[2185,7537],[2132,7487],[2060,7547],[2051,7614],[2000,7661],[1964,7650],[1951,7697],[1998,7734],[1916,7745],[1886,7830],[1993,7902],[1994,7937],[1935,7955],[2010,8022],[1979,8076],[1946,8058],[1880,8121],[1787,8156],[1779,8179],[1864,8210],[1989,8201],[2020,8172],[2097,8033],[2172,7952],[2211,7860],[2333,7770],[2405,7765]]],[[[2355,7786],[2347,7786],[2345,7788],[2339,7790],[2339,7790],[2344,7788],[2355,7786],[2355,7786]]]]}},{"type":"Feature","id":"DE.NI.03451000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.44,"hc-key":"de-ni-03451000","hc-a2":"AM","name":"Ammerland","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[1071,7501],[1074,7453],[1129,7436],[1172,7339],[1177,7269],[1091,7290],[1056,7250],[1028,7157],[979,7132],[962,7090],[891,7114],[786,7207],[799,7238],[686,7261],[673,7323],[799,7420],[830,7501],[891,7469],[900,7434],[950,7441],[978,7485],[1030,7468],[1071,7501]]]}},{"type":"Feature","id":"DE.NI.03461000","properties":{"hc-group":"admin2","hc-middle-x":0.33,"hc-middle-y":0.09,"hc-key":"de-ni-03461000","hc-a2":"WE","name":"Wesermarsch","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[1177,7269],[1172,7339],[1129,7436],[1074,7453],[1071,7501],[1095,7517],[1090,7577],[1132,7561],[1190,7650],[1192,7723],[1121,7733],[1132,7819],[1172,7862],[1221,7852],[1250,7806],[1356,7777],[1389,7725],[1357,7704],[1339,7664],[1338,7591],[1344,7516],[1328,7366],[1330,7321],[1346,7284],[1438,7240],[1472,7154],[1460,7151],[1455,7141],[1408,7174],[1318,7196],[1259,7173],[1248,7242],[1184,7218],[1168,7256],[1177,7269]]]}},{"type":"Feature","id":"DE.SH.01056000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.52,"hc-key":"de-sh-01056000","hc-a2":"PI","name":"Pinneberg","bundesland":"DE.SH"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2194,7946],[2186,7970],[2174,7995],[2177,7997],[2200,7962],[2200,7932],[2195,7942],[2194,7946]]],[[[2370,7784],[2361,7785],[2359,7786],[2366,7786],[2370,7785],[2370,7784]]],[[[2345,7788],[2338,7790],[2338,7790],[2343,7789],[2344,7788],[2345,7788]],[[2338,7790],[2339,7790],[2339,7790],[2338,7790],[2338,7790]]],[[[2373,7795],[2322,7803],[2224,7871],[2237,7889],[2192,8001],[2246,8013],[2232,8057],[2294,8086],[2320,8195],[2295,8233],[2383,8254],[2393,8226],[2491,8140],[2501,8058],[2567,8084],[2548,7920],[2449,7823],[2403,7867],[2373,7795]]]]}},{"type":"Feature","id":"DE.HH.02000000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.60,"hc-key":"de-hh-02000000","hc-a2":"HA","name":"Hamburg","bundesland":"DE.HH"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2403,7712],[2410,7734],[2405,7765],[2481,7770],[2373,7795],[2403,7867],[2449,7823],[2548,7920],[2591,7960],[2651,7983],[2658,7993],[2650,7996],[2653,8000],[2652,8001],[2733,8041],[2709,7960],[2778,7896],[2762,7827],[2717,7801],[2732,7738],[2793,7705],[2795,7686],[2855,7617],[2801,7568],[2745,7564],[2640,7657],[2585,7588],[2510,7646],[2480,7616],[2403,7712]]],[[[2407,7779],[2407,7780],[2379,7784],[2411,7781],[2409,7778],[2409,7778],[2409,7778],[2409,7778],[2407,7779]]],[[[2406,7774],[2406,7775],[2407,7775],[2407,7775],[2406,7774]]],[[[2370,7784],[2370,7785],[2371,7785],[2372,7784],[2372,7784],[2370,7784]]],[[[2409,7778],[2411,7776],[2407,7775],[2407,7775],[2409,7778],[2409,7778],[2409,7778],[2409,7778]]]]}},{"type":"Feature","id":"DE.NW.05962000","properties":{"hc-group":"admin2","hc-middle-x":0.62,"hc-middle-y":0.51,"hc-key":"de-nw-05962000","hc-a2":"MK","name":"MÃ¤rkischer Kreis","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[386,4519],[448,4558],[462,4588],[520,4633],[528,4764],[566,4785],[551,4841],[625,4878],[748,4882],[764,4855],[770,4854],[796,4791],[805,4698],[829,4659],[801,4600],[832,4539],[832,4474],[705,4419],[725,4329],[631,4317],[552,4312],[514,4366],[457,4359],[374,4484],[386,4519]]]}},{"type":"Feature","id":"DE.NW.05954000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.55,"hc-key":"de-nw-05954000","hc-a2":"ER","name":"Ennepe-Ruhr-Kreis","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[462,4588],[448,4558],[386,4519],[349,4565],[276,4556],[242,4588],[241,4666],[156,4663],[151,4736],[115,4758],[110,4794],[133,4821],[234,4801],[320,4896],[384,4825],[420,4801],[376,4781],[340,4701],[395,4660],[451,4660],[430,4622],[462,4588]]]}},{"type":"Feature","id":"DE.BY.09478000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.49,"hc-key":"de-by-09478000","hc-a2":"LI","name":"Lichtenfels","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3795,2838],[3793,2829],[3786,2823],[3740,2905],[3673,2902],[3573,2855],[3451,2922],[3457,2959],[3512,3009],[3485,3029],[3564,3079],[3543,3127],[3586,3138],[3718,3094],[3734,3119],[3811,3063],[3865,3064],[3885,3048],[3829,2982],[3840,2921],[3795,2838]]]}},{"type":"Feature","id":"DE.SH.01001000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.44,"hc-key":"de-sh-01001000","hc-a2":"FL","name":"Flensburg","bundesland":"DE.SH"},"geometry":{"type":"Polygon","coordinates":[[[2104,9553],[2118,9527],[2159,9552],[2170,9482],[2069,9454],[2051,9493],[2104,9553]]]}},{"type":"Feature","id":"DE.NW.05974000","properties":{"hc-group":"admin2","hc-middle-x":0.64,"hc-middle-y":0.50,"hc-key":"de-nw-05974000","hc-a2":"SO","name":"Soest","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[770,4854],[764,4855],[748,4882],[751,4986],[740,5022],[817,5045],[852,5152],[845,5191],[865,5221],[1077,5183],[1062,5134],[1150,5155],[1172,5222],[1212,5212],[1244,5213],[1307,5206],[1309,5162],[1387,5127],[1402,5066],[1319,5029],[1307,4973],[1367,4860],[1256,4781],[1148,4751],[1026,4827],[933,4836],[892,4875],[847,4863],[807,4899],[770,4854]]]}},{"type":"Feature","id":"DE.NW.05119000","properties":{"hc-group":"admin2","hc-middle-x":0.33,"hc-middle-y":0.54,"hc-key":"de-nw-05119000","hc-a2":"OB","name":"Oberhausen","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-170,4980],[-172,4995],[-125,5043],[-75,4953],[-46,4927],[-71,4912],[-72,4890],[-136,4861],[-151,4870],[-140,4942],[-170,4980]]]}},{"type":"Feature","id":"DE.NW.05170000","properties":{"hc-group":"admin2","hc-middle-x":0.45,"hc-middle-y":0.44,"hc-key":"de-nw-05170000","hc-a2":"WE","name":"Wesel","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-125,5043],[-172,4995],[-170,4980],[-254,5020],[-244,4970],[-307,4943],[-266,4866],[-306,4788],[-373,4786],[-391,4809],[-401,4835],[-408,4836],[-416,4897],[-463,4984],[-417,5035],[-523,5037],[-525,5070],[-587,5117],[-539,5149],[-488,5252],[-444,5225],[-422,5295],[-377,5310],[-413,5377],[-346,5344],[-290,5356],[-260,5324],[-182,5320],[-171,5278],[-98,5251],[-51,5274],[-29,5235],[-63,5120],[-92,5115],[-125,5043]]]}},{"type":"Feature","id":"DE.RP.07319000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.50,"hc-key":"de-rp-07319000","hc-a2":"WO","name":"Worms","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[1230,2243],[1171,2260],[1109,2233],[1087,2235],[1086,2239],[1089,2375],[1166,2367],[1175,2433],[1260,2433],[1178,2360],[1230,2243]]]}},{"type":"Feature","id":"DE.RP.07338000","properties":{"hc-group":"admin2","hc-middle-x":0.27,"hc-middle-y":0.76,"hc-key":"de-rp-07338000","hc-a2":"RP","name":"Rhein-Pfalz-Kreis","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[1109,2233],[1171,2260],[1230,2243],[1237,2227],[1238,2222],[1237,2214],[1137,2181],[1133,2090],[1204,2014],[1281,2031],[1314,2014],[1304,1986],[1306,1955],[1279,1887],[1235,1938],[1192,1890],[1217,1838],[1275,1807],[1242,1772],[1225,1761],[1184,1805],[1141,1827],[1144,1832],[1138,1843],[1138,1847],[1136,1848],[1122,1926],[1066,2027],[1109,2037],[1085,2162],[1109,2233]]]}},{"type":"Feature","id":"DE.BW.08222000","properties":{"hc-group":"admin2","hc-middle-x":0.58,"hc-middle-y":0.48,"hc-key":"de-bw-08222000","hc-a2":"MA","name":"Mannheim","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1237,2214],[1238,2222],[1237,2227],[1275,2235],[1355,2138],[1381,2137],[1349,2078],[1389,2053],[1382,2007],[1373,2003],[1373,1992],[1329,1995],[1304,1986],[1314,2014],[1281,2031],[1273,2072],[1237,2169],[1229,2189],[1237,2214]]]}},{"type":"Feature","id":"DE.RP.07337000","properties":{"hc-group":"admin2","hc-middle-x":0.69,"hc-middle-y":0.33,"hc-key":"de-rp-07337000","hc-a2":"SW","name":"SÃ¼dliche WeinstraÃŸe","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[1138,1843],[1144,1832],[1141,1827],[1059,1777],[1044,1652],[1080,1654],[1087,1589],[1038,1566],[1001,1605],[953,1598],[908,1502],[905,1414],[781,1498],[761,1480],[761,1544],[727,1577],[770,1665],[757,1742],[690,1790],[731,1813],[779,1821],[790,1848],[793,1864],[848,1896],[859,1869],[1032,1847],[1028,1828],[1138,1843]],[[840,1662],[831,1670],[825,1665],[834,1654],[840,1662]],[[1009,1644],[1010,1706],[944,1741],[902,1728],[895,1645],[949,1659],[1009,1644]]]}},{"type":"Feature","id":"DE.BY.09262000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.44,"hc-key":"de-by-09262000","hc-a2":"PA","name":"Passau","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[5945,962],[5938,935],[5879,899],[5809,910],[5754,974],[5880,984],[5945,962]]]}},{"type":"Feature","id":"DE.BW.08235000","properties":{"hc-group":"admin2","hc-middle-x":0.40,"hc-middle-y":0.42,"hc-key":"de-bw-08235000","hc-a2":"CA","name":"Calw","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1477,1180],[1476,1184],[1483,1183],[1546,1099],[1581,1099],[1604,1041],[1650,1025],[1568,904],[1572,843],[1529,858],[1548,742],[1545,729],[1535,717],[1478,694],[1459,726],[1389,729],[1418,765],[1326,842],[1215,908],[1247,933],[1286,1071],[1239,1091],[1189,1176],[1191,1179],[1192,1179],[1212,1175],[1224,1182],[1248,1152],[1295,1160],[1345,1115],[1404,1169],[1477,1180]]]}},{"type":"Feature","id":"DE.BW.08231000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.46,"hc-key":"de-bw-08231000","hc-a2":"PF","name":"Pforzheim","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1483,1183],[1476,1184],[1477,1180],[1437,1222],[1423,1291],[1509,1312],[1546,1294],[1584,1212],[1505,1157],[1483,1183]]]}},{"type":"Feature","id":"DE.BW.08236000","properties":{"hc-group":"admin2","hc-middle-x":0.74,"hc-middle-y":0.50,"hc-key":"de-bw-08236000","hc-a2":"EN","name":"Enzkreis","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1581,1099],[1546,1099],[1483,1183],[1505,1157],[1584,1212],[1546,1294],[1509,1312],[1423,1291],[1437,1222],[1477,1180],[1404,1169],[1345,1115],[1295,1160],[1271,1195],[1317,1223],[1373,1396],[1498,1394],[1537,1473],[1614,1463],[1650,1491],[1644,1480],[1648,1459],[1701,1397],[1713,1331],[1673,1324],[1696,1223],[1644,1183],[1665,1128],[1581,1099]]]}},{"type":"Feature","id":"DE.BW.08215000","properties":{"hc-group":"admin2","hc-middle-x":0.63,"hc-middle-y":0.28,"hc-key":"de-bw-08215000","hc-a2":"KA","name":"Karlsruhe","bundesland":"DE.BW"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1295,1160],[1248,1152],[1224,1182],[1121,1221],[1113,1291],[1168,1321],[1082,1354],[1083,1386],[1090,1393],[1097,1399],[1146,1397],[1199,1351],[1310,1331],[1341,1355],[1302,1401],[1321,1454],[1156,1524],[1182,1642],[1225,1761],[1242,1772],[1275,1807],[1289,1812],[1293,1816],[1370,1767],[1596,1682],[1605,1585],[1643,1594],[1650,1491],[1614,1463],[1537,1473],[1498,1394],[1373,1396],[1317,1223],[1271,1195],[1295,1160]]],[[[1192,1179],[1191,1179],[1189,1176],[1178,1189],[1192,1179]]]]}},{"type":"Feature","id":"DE.NW.05554000","properties":{"hc-group":"admin2","hc-middle-x":0.56,"hc-middle-y":0.61,"hc-key":"de-nw-05554000","hc-a2":"BO","name":"Borken","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[102,5963],[130,5964],[131,5964],[126,5906],[172,5855],[172,5814],[257,5789],[269,5703],[198,5690],[121,5633],[81,5478],[102,5423],[179,5373],[80,5314],[46,5347],[-44,5318],[-51,5274],[-98,5251],[-171,5278],[-182,5320],[-260,5324],[-290,5356],[-346,5344],[-413,5377],[-463,5367],[-484,5403],[-495,5467],[-426,5437],[-362,5478],[-249,5518],[-209,5489],[-113,5581],[-114,5622],[-232,5691],[-224,5732],[-175,5753],[-165,5799],[-84,5799],[-33,5877],[1,5881],[32,5942],[102,5963]]]}},{"type":"Feature","id":"DE.NI.03456000","properties":{"hc-group":"admin2","hc-middle-x":0.33,"hc-middle-y":0.18,"hc-key":"de-ni-03456000","hc-a2":"GB","name":"Grafschaft Bentheim","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[131,5964],[130,5964],[102,5963],[70,6035],[111,6118],[49,6278],[3,6237],[-71,6273],[-139,6275],[-203,6315],[-215,6409],[-141,6421],[-181,6457],[-157,6536],[-25,6540],[66,6520],[194,6425],[222,6375],[277,6379],[289,6277],[235,6246],[269,6097],[319,6012],[302,5989],[180,5996],[131,5964]]]}},{"type":"Feature","id":"DE.NI.03358000","properties":{"hc-group":"admin2","hc-middle-x":0.66,"hc-middle-y":0.29,"hc-key":"de-ni-03358000","hc-a2":"HE","name":"Heidekreis","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[2774,7105],[2783,7105],[2788,7021],[2807,6921],[2745,6921],[2709,6869],[2667,6877],[2592,6826],[2496,6869],[2462,6753],[2468,6651],[2400,6630],[2379,6594],[2387,6499],[2362,6449],[2312,6456],[2259,6552],[2217,6528],[2170,6621],[2060,6619],[2038,6677],[2042,6746],[2146,6887],[2192,6929],[2260,6901],[2272,6941],[2327,6968],[2331,7034],[2280,7059],[2305,7205],[2399,7237],[2335,7311],[2433,7267],[2477,7300],[2529,7250],[2603,7250],[2667,7189],[2703,7156],[2643,7105],[2663,7069],[2728,7075],[2744,7068],[2734,7088],[2753,7115],[2772,7107],[2775,7100],[2774,7105]]]}},{"type":"Feature","id":"DE.NI.03355000","properties":{"hc-group":"admin2","hc-middle-x":0.44,"hc-middle-y":0.40,"hc-key":"de-ni-03355000","hc-a2":"LÃœ","name":"LÃ¼neburg","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[2783,7105],[2774,7105],[2774,7107],[2772,7107],[2753,7115],[2734,7088],[2731,7082],[2728,7075],[2663,7069],[2643,7105],[2703,7156],[2667,7189],[2696,7247],[2775,7263],[2766,7323],[2817,7374],[2777,7421],[2818,7474],[2869,7478],[2908,7531],[2967,7510],[2990,7554],[3021,7536],[3096,7525],[3188,7534],[3300,7448],[3368,7510],[3426,7491],[3517,7326],[3606,7277],[3588,7248],[3560,7264],[3515,7221],[3324,7372],[3366,7231],[3276,7225],[3238,7192],[3134,7240],[3144,7278],[3054,7259],[3029,7300],[2956,7225],[2931,7172],[2880,7171],[2783,7105]],[[2809,7426],[2810,7425],[2813,7430],[2812,7431],[2809,7426]],[[2852,7475],[2851,7473],[2856,7471],[2856,7473],[2852,7475]]]}},{"type":"Feature","id":"DE.BY.09277000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.53,"hc-key":"de-by-09277000","hc-a2":"RI","name":"Rottal-Inn","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[5656,530],[5517,472],[5446,396],[5395,435],[5329,533],[5241,545],[5121,585],[5056,678],[5002,686],[4986,765],[5020,790],[5130,806],[5129,765],[5245,847],[5257,923],[5438,962],[5455,961],[5464,948],[5493,891],[5566,874],[5556,797],[5640,691],[5564,650],[5573,607],[5630,591],[5656,530]]]}},{"type":"Feature","id":"DE.RP.07314000","properties":{"hc-group":"admin2","hc-middle-x":0.62,"hc-middle-y":0.56,"hc-key":"de-rp-07314000","hc-a2":"LA","name":"Ludwigshafen am Rhein","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[1237,2169],[1273,2072],[1281,2031],[1204,2014],[1133,2090],[1188,2110],[1210,2181],[1237,2169]]]}},{"type":"Feature","id":"DE.NI.04011000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.82,"hc-key":"de-ni-04011000","hc-a2":"BR","name":"Bremen","bundesland":"DE.NI"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1398,7771],[1386,7793],[1365,7830],[1410,7811],[1398,7771]]],[[[1749,7178],[1745,7067],[1691,7017],[1609,7034],[1569,7076],[1519,7064],[1517,7109],[1472,7154],[1438,7240],[1346,7284],[1330,7321],[1425,7300],[1476,7250],[1607,7231],[1647,7186],[1716,7214],[1749,7178]],[[1440,7278],[1437,7280],[1436,7278],[1439,7276],[1440,7278]]]]}},{"type":"Feature","id":"DE.NI.03254000","properties":{"hc-group":"admin2","hc-middle-x":0.66,"hc-middle-y":0.51,"hc-key":"de-ni-03254000","hc-a2":"HI","name":"Hildesheim","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[2842,5869],[2843,5857],[2823,5850],[2804,5863],[2774,5764],[2796,5722],[2802,5622],[2791,5549],[2701,5554],[2683,5508],[2655,5536],[2600,5465],[2535,5477],[2423,5581],[2322,5556],[2324,5710],[2351,5754],[2304,5789],[2359,5796],[2396,5883],[2419,5843],[2464,5927],[2441,5958],[2546,6000],[2649,6006],[2619,5931],[2778,5939],[2834,5911],[2842,5869]]]}},{"type":"Feature","id":"DE.NI.03102000","properties":{"hc-group":"admin2","hc-middle-x":0.58,"hc-middle-y":0.48,"hc-key":"de-ni-03102000","hc-a2":"SA","name":"Salzgitter","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[2823,5850],[2843,5857],[2842,5869],[2920,5860],[2990,5925],[3037,5907],[3057,5878],[3004,5809],[3029,5680],[2906,5632],[2871,5660],[2922,5683],[2884,5763],[2841,5763],[2823,5850]]]}},{"type":"Feature","id":"DE.NI.03158000","properties":{"hc-group":"admin2","hc-middle-x":0.68,"hc-middle-y":0.55,"hc-key":"de-ni-03158000","hc-a2":"WO","name":"WolfenbÃ¼ttel","bundesland":"DE.NI"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2823,5850],[2841,5763],[2884,5763],[2922,5683],[2871,5660],[2848,5631],[2802,5622],[2796,5722],[2774,5764],[2804,5863],[2823,5850]]],[[[3109,5623],[3086,5576],[3038,5623],[3029,5680],[3004,5809],[3057,5878],[3117,5904],[3128,5970],[3171,6032],[3233,6045],[3242,5989],[3294,5910],[3351,5867],[3382,5876],[3370,5802],[3308,5726],[3315,5690],[3183,5678],[3176,5641],[3109,5623]]]]}},{"type":"Feature","id":"DE.NW.05366000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.50,"hc-key":"de-nw-05366000","hc-a2":"EU","name":"Euskirchen","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-560,3300],[-613,3381],[-583,3485],[-631,3545],[-582,3573],[-584,3634],[-536,3699],[-408,3688],[-382,3820],[-341,3864],[-299,3838],[-283,3893],[-211,3841],[-131,3932],[-87,3859],[-143,3802],[-142,3749],[-91,3713],[-120,3674],[-83,3614],[-120,3543],[-110,3489],[-152,3470],[-199,3523],[-252,3454],[-216,3425],[-204,3342],[-296,3309],[-323,3360],[-363,3333],[-380,3384],[-488,3318],[-575,3385],[-542,3299],[-551,3301],[-560,3300]]]}},{"type":"Feature","id":"DE.RP.07232000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.62,"hc-key":"de-rp-07232000","hc-a2":"EB","name":"Eifelkreis Bitburg-PrÃ¼m","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[-560,3300],[-551,3301],[-542,3299],[-398,3157],[-440,3047],[-411,2995],[-361,3005],[-306,2957],[-309,2870],[-285,2816],[-328,2790],[-303,2706],[-405,2676],[-521,2596],[-561,2582],[-620,2640],[-654,2621],[-711,2686],[-812,2849],[-835,2949],[-762,3105],[-770,3184],[-677,3224],[-649,3295],[-560,3300]]]}},{"type":"Feature","id":"DE.BY.09771000","properties":{"hc-group":"admin2","hc-middle-x":0.25,"hc-middle-y":0.24,"hc-key":"de-by-09771000","hc-a2":"AF","name":"Aichach-Friedberg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3539,365],[3545,385],[3545,395],[3572,408],[3584,566],[3513,674],[3499,776],[3601,801],[3546,855],[3594,872],[3636,904],[3770,850],[3735,813],[3812,779],[3870,691],[3895,707],[3898,689],[3911,677],[3788,624],[3787,510],[3745,491],[3737,415],[3694,431],[3663,307],[3594,313],[3539,365]]]}},{"type":"Feature","id":"DE.BY.09772000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.49,"hc-key":"de-by-09772000","hc-a2":"AU","name":"Augsburg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3545,395],[3545,385],[3539,365],[3501,253],[3432,241],[3448,177],[3401,185],[3355,167],[3347,259],[3203,270],[3232,324],[3216,355],[3237,470],[3155,469],[3179,513],[3163,600],[3196,622],[3182,685],[3260,724],[3363,707],[3408,777],[3411,896],[3507,924],[3546,855],[3601,801],[3499,776],[3513,674],[3519,610],[3481,602],[3491,516],[3442,522],[3409,446],[3535,445],[3545,395]]]}},{"type":"Feature","id":"DE.BY.09778000","properties":{"hc-group":"admin2","hc-middle-x":0.68,"hc-middle-y":0.32,"hc-key":"de-by-09778000","hc-a2":"UN","name":"UnterallgÃ¤u","bundesland":"DE.BY"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3232,324],[3203,270],[3347,259],[3355,167],[3354,73],[3317,51],[3285,-45],[3193,1],[3183,-54],[3065,-109],[3010,-175],[2944,-175],[2827,-231],[2805,-203],[2804,-68],[2851,-89],[2886,-40],[2917,87],[2827,53],[2831,85],[2826,172],[2878,193],[2949,343],[2972,280],[3021,266],[3111,293],[3180,341],[3232,324]]],[[[2824,41],[2846,14],[2808,-13],[2812,25],[2824,41]]]]}},{"type":"Feature","id":"DE.RP.07311000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.50,"hc-key":"de-rp-07311000","hc-a2":"F(","name":"Frankenthal (Pfalz)","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[1237,2214],[1229,2189],[1237,2169],[1210,2181],[1188,2110],[1133,2090],[1137,2181],[1237,2214]]]}},{"type":"Feature","id":"DE.NI.03154000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.36,"hc-key":"de-ni-03154000","hc-a2":"HE","name":"Helmstedt","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[3377,6268],[3394,6277],[3414,6285],[3439,6234],[3534,6129],[3461,6104],[3507,6062],[3546,5934],[3493,5882],[3533,5869],[3523,5819],[3464,5774],[3455,5705],[3379,5706],[3315,5690],[3308,5726],[3370,5802],[3382,5876],[3351,5867],[3294,5910],[3242,5989],[3233,6045],[3171,6032],[3145,6054],[3140,6100],[3144,6156],[3191,6150],[3282,6096],[3355,6077],[3378,6107],[3377,6268]]]}},{"type":"Feature","id":"DE.NI.03151000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.40,"hc-key":"de-ni-03151000","hc-a2":"GI","name":"Gifhorn","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[3414,6285],[3394,6277],[3377,6268],[3282,6314],[3246,6250],[3169,6240],[3191,6150],[3144,6156],[3140,6100],[3026,6107],[3034,6064],[2982,6077],[2914,6217],[2866,6239],[2849,6288],[2849,6327],[2917,6400],[2937,6385],[2968,6463],[2936,6499],[2958,6534],[2922,6635],[2986,6756],[3080,6779],[3178,6689],[3253,6734],[3288,6621],[3311,6627],[3414,6449],[3423,6391],[3476,6322],[3421,6314],[3414,6285]]]}},{"type":"Feature","id":"DE.HE.06432000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.51,"hc-key":"de-he-06432000","hc-a2":"DD","name":"Darmstadt-Dieburg","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1807,2620],[1792,2621],[1795,2593],[1687,2510],[1631,2514],[1578,2442],[1521,2424],[1363,2429],[1355,2560],[1328,2621],[1369,2644],[1356,2697],[1420,2760],[1454,2741],[1468,2740],[1427,2730],[1430,2667],[1370,2572],[1411,2577],[1445,2523],[1467,2579],[1517,2616],[1536,2670],[1515,2744],[1592,2735],[1672,2760],[1712,2804],[1777,2795],[1791,2702],[1807,2620]]]}},{"type":"Feature","id":"DE.BY.09676000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.48,"hc-key":"de-by-09676000","hc-a2":"MI","name":"Miltenberg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[1795,2593],[1792,2621],[1807,2620],[1848,2633],[1859,2711],[1892,2696],[1977,2716],[2016,2684],[1997,2627],[2093,2574],[2144,2642],[2155,2591],[2189,2501],[2142,2513],[2049,2485],[2031,2442],[2124,2429],[2135,2338],[2131,2312],[2038,2325],[1988,2227],[1856,2217],[1822,2276],[1855,2307],[1847,2382],[1899,2448],[1859,2470],[1795,2593]]]}},{"type":"Feature","id":"DE.NI.03101000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.49,"hc-key":"de-ni-03101000","hc-a2":"BR","name":"Braunschweig","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[3140,6100],[3145,6054],[3171,6032],[3128,5970],[3117,5904],[3057,5878],[3037,5907],[2990,5925],[2986,5991],[2982,6077],[3034,6064],[3026,6107],[3140,6100]]]}},{"type":"Feature","id":"DE.BW.08225000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.49,"hc-key":"de-bw-08225000","hc-a2":"NO","name":"Neckar-Odenwald-Kreis","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1852,2193],[1853,2209],[1856,2217],[1988,2227],[2038,2325],[2131,2312],[2135,2338],[2242,2299],[2256,2251],[2216,2232],[2257,2152],[2210,2093],[2224,2040],[2312,2008],[2283,1936],[2169,1957],[2167,1920],[2104,1918],[2066,1952],[1983,1825],[1910,1869],[1899,1793],[1807,1819],[1805,1863],[1731,1895],[1705,1952],[1752,1969],[1806,2032],[1785,2069],[1840,2108],[1838,2145],[1877,2139],[1842,2176],[1849,2180],[1852,2193]]]}},{"type":"Feature","id":"DE.HE.06437000","properties":{"hc-group":"admin2","hc-middle-x":0.28,"hc-middle-y":0.55,"hc-key":"de-he-06437000","hc-a2":"OD","name":"Odenwaldkreis","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1856,2217],[1853,2209],[1852,2193],[1828,2200],[1842,2176],[1877,2139],[1838,2145],[1801,2107],[1718,2116],[1700,2067],[1681,2088],[1670,2087],[1671,2101],[1671,2113],[1637,2326],[1576,2367],[1578,2442],[1631,2514],[1687,2510],[1795,2593],[1859,2470],[1899,2448],[1847,2382],[1855,2307],[1822,2276],[1856,2217]]]}},{"type":"Feature","id":"DE.BY.09576000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.55,"hc-key":"de-by-09576000","hc-a2":"RO","name":"Roth","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3580,1967],[3582,1961],[3585,1959],[3561,1931],[3599,1848],[3669,1875],[3661,1910],[3692,1981],[3741,1981],[3763,1970],[3815,1895],[3762,1864],[3777,1827],[3842,1824],[3888,1725],[3895,1606],[3952,1554],[3951,1468],[3902,1439],[3846,1456],[3826,1506],[3784,1504],[3745,1559],[3711,1557],[3593,1650],[3539,1616],[3462,1656],[3445,1706],[3513,1776],[3467,1928],[3522,1931],[3580,1967]]]}},{"type":"Feature","id":"DE.RP.07332000","properties":{"hc-group":"admin2","hc-middle-x":0.73,"hc-middle-y":0.50,"hc-key":"de-rp-07332000","hc-a2":"BD","name":"Bad DÃ¼rkheim","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[848,1896],[793,1864],[790,1848],[775,1857],[727,1855],[717,1883],[695,1870],[689,1886],[704,1919],[710,1922],[711,1924],[814,1976],[819,2101],[859,2111],[945,2189],[992,2290],[1040,2282],[1086,2239],[1087,2235],[1109,2233],[1085,2162],[1109,2037],[1066,2027],[1122,1926],[1136,1848],[1056,1878],[1053,1944],[941,1963],[932,1918],[848,1896]]]}},{"type":"Feature","id":"DE.RP.07335000","properties":{"hc-group":"admin2","hc-middle-x":0.37,"hc-middle-y":0.45,"hc-key":"de-rp-07335000","hc-a2":"KA","name":"Kaiserslautern","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[704,1919],[689,1886],[695,1870],[636,1858],[629,1901],[547,1885],[487,1948],[413,1892],[304,1939],[303,1943],[298,1945],[347,2058],[422,2144],[523,2175],[537,2242],[577,2243],[655,2200],[645,2163],[707,2136],[776,2164],[819,2101],[814,1976],[711,1924],[681,1971],[731,1988],[722,2048],[670,2096],[612,2080],[581,2112],[518,2045],[570,1958],[639,1971],[704,1919]]]}},{"type":"Feature","id":"DE.RP.07316000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.50,"hc-key":"de-rp-07316000","hc-a2":"NA","name":"Neustadt an der WeinstraÃŸe","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[1136,1848],[1138,1847],[1138,1843],[1028,1828],[1032,1847],[859,1869],[848,1896],[932,1918],[941,1963],[1053,1944],[1056,1878],[1136,1848]]]}},{"type":"Feature","id":"DE.BW.08115000","properties":{"hc-group":"admin2","hc-middle-x":0.68,"hc-middle-y":0.58,"hc-key":"de-bw-08115000","hc-a2":"BÃ–","name":"BÃ¶blingen","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1902,856],[1889,852],[1882,852],[1794,818],[1714,831],[1624,763],[1620,711],[1548,742],[1529,858],[1572,843],[1568,904],[1650,1025],[1604,1041],[1581,1099],[1665,1128],[1644,1183],[1696,1223],[1733,1170],[1786,1170],[1822,1068],[1810,1047],[1859,1003],[1923,898],[1902,856]]]}},{"type":"Feature","id":"DE.BY.09777000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.90,"hc-key":"de-by-09777000","hc-a2":"OS","name":"OstallgÃ¤u","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3138,-596],[3155,-574],[3154,-552],[3182,-478],[3175,-412],[3138,-406],[3147,-337],[3113,-257],[3056,-246],[3010,-175],[3065,-109],[3183,-54],[3193,1],[3285,-45],[3317,51],[3354,73],[3355,167],[3401,185],[3448,177],[3412,79],[3464,75],[3473,33],[3430,-111],[3424,-187],[3396,-405],[3448,-379],[3440,-441],[3570,-440],[3608,-500],[3533,-564],[3547,-613],[3445,-648],[3361,-587],[3273,-574],[3251,-624],[3138,-596]],[[3235,-132],[3234,-164],[3324,-186],[3292,-81],[3235,-132]]]}},{"type":"Feature","id":"DE.RP.07140000","properties":{"hc-group":"admin2","hc-middle-x":0.65,"hc-middle-y":0.42,"hc-key":"de-rp-07140000","hc-a2":"RH","name":"Rhein-HunsrÃ¼ck-Kreis","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[651,2932],[562,2861],[622,2815],[409,2631],[338,2599],[315,2621],[312,2674],[210,2684],[157,2665],[187,2743],[142,2780],[215,2783],[281,2844],[256,2911],[328,2980],[309,3048],[388,3103],[432,3175],[518,3187],[539,3162],[488,3156],[597,3046],[651,2932]]]}},{"type":"Feature","id":"DE.RP.07339000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.43,"hc-key":"de-rp-07339000","hc-a2":"MB","name":"Mainz-Bingen","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[622,2815],[562,2861],[651,2932],[657,2925],[659,2909],[758,2775],[831,2783],[1019,2859],[1025,2860],[1033,2860],[994,2761],[1081,2726],[1084,2664],[1113,2728],[1169,2727],[1168,2654],[1219,2535],[1142,2508],[1112,2459],[1068,2487],[1069,2563],[1019,2671],[903,2651],[917,2633],[825,2580],[768,2717],[699,2744],[622,2815]]]}},{"type":"Feature","id":"DE.HE.06433000","properties":{"hc-group":"admin2","hc-middle-x":0.66,"hc-middle-y":0.51,"hc-key":"de-he-06433000","hc-a2":"GG","name":"GroÃŸ-Gerau","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1219,2535],[1168,2654],[1169,2727],[1151,2773],[1121,2803],[1144,2812],[1159,2811],[1223,2804],[1331,2895],[1365,2877],[1329,2837],[1394,2833],[1427,2774],[1420,2760],[1356,2697],[1369,2644],[1328,2621],[1355,2560],[1363,2429],[1304,2422],[1262,2437],[1289,2469],[1241,2485],[1219,2535]]]}},{"type":"Feature","id":"DE.HE.06436000","properties":{"hc-group":"admin2","hc-middle-x":0.94,"hc-middle-y":0.28,"hc-key":"de-he-06436000","hc-a2":"MT","name":"Main-Taunus-Kreis","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1331,2895],[1223,2804],[1159,2811],[1209,2920],[1158,3014],[1187,3067],[1182,3091],[1271,3037],[1356,3053],[1394,3031],[1394,3004],[1288,2948],[1331,2895]]]}},{"type":"Feature","id":"DE.NI.03403000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.51,"hc-key":"de-ni-03403000","hc-a2":"O(","name":"Oldenburg (Oldb)","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[1177,7269],[1168,7256],[1184,7218],[1156,7142],[1108,7120],[1089,7165],[1028,7157],[1056,7250],[1091,7290],[1177,7269]]]}},{"type":"Feature","id":"DE.TH.16054000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.52,"hc-key":"de-th-16054000","hc-a2":"SU","name":"Suhl","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3302,3753],[3337,3738],[3388,3639],[3313,3685],[3283,3630],[3170,3641],[3143,3660],[3222,3726],[3261,3698],[3302,3753]]]}},{"type":"Feature","id":"DE.TH.16070000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.46,"hc-key":"de-th-16070000","hc-a2":"IK","name":"Ilm-Kreis","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3388,3639],[3337,3738],[3302,3753],[3313,3759],[3317,3830],[3330,3897],[3379,3918],[3406,4000],[3374,4004],[3445,4087],[3474,4081],[3512,4095],[3627,4110],[3689,4028],[3671,3994],[3730,3960],[3690,3915],[3705,3866],[3624,3853],[3622,3809],[3548,3793],[3597,3763],[3621,3682],[3587,3602],[3515,3603],[3493,3596],[3449,3681],[3417,3623],[3388,3639]]]}},{"type":"Feature","id":"DE.RP.07318000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.57,"hc-key":"de-rp-07318000","hc-a2":"SP","name":"Speyer","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[1293,1816],[1289,1812],[1275,1807],[1217,1838],[1192,1890],[1235,1938],[1279,1887],[1267,1849],[1293,1816]]]}},{"type":"Feature","id":"DE.NW.05758000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.53,"hc-key":"de-nw-05758000","hc-a2":"HE","name":"Herford","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[1307,5746],[1269,5751],[1255,5766],[1250,5788],[1347,5863],[1295,5882],[1304,5979],[1394,5959],[1452,5967],[1491,5928],[1514,5953],[1574,5894],[1571,5832],[1644,5874],[1699,5861],[1669,5760],[1638,5745],[1547,5773],[1464,5688],[1400,5710],[1347,5760],[1307,5746]]]}},{"type":"Feature","id":"DE.NW.05754000","properties":{"hc-group":"admin2","hc-middle-x":0.43,"hc-middle-y":0.48,"hc-key":"de-nw-05754000","hc-a2":"GÃœ","name":"GÃ¼tersloh","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[1255,5766],[1269,5751],[1307,5746],[1262,5666],[1297,5631],[1268,5530],[1340,5492],[1422,5503],[1486,5489],[1544,5406],[1440,5412],[1358,5369],[1347,5338],[1256,5268],[1244,5213],[1212,5212],[1172,5222],[1115,5290],[1118,5331],[1027,5465],[1048,5495],[996,5546],[995,5609],[964,5623],[983,5688],[1069,5711],[1131,5791],[1255,5766]]]}},{"type":"Feature","id":"DE.NW.05334000","properties":{"hc-group":"admin2","hc-middle-x":0.24,"hc-middle-y":0.44,"hc-key":"de-nw-05334000","hc-a2":"SA","name":"StÃ¤dteregion Aachen","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-812,4134],[-768,4112],[-715,4182],[-685,4160],[-713,4115],[-668,4058],[-630,4086],[-583,3952],[-588,3908],[-650,3799],[-609,3761],[-569,3784],[-536,3699],[-584,3634],[-582,3573],[-631,3545],[-711,3544],[-754,3634],[-694,3674],[-666,3726],[-742,3739],[-794,3863],[-860,3878],[-872,3942],[-918,3977],[-872,3998],[-876,4043],[-827,4042],[-812,4134]]]}},{"type":"Feature","id":"DE.NW.05370000","properties":{"hc-group":"admin2","hc-middle-x":0.06,"hc-middle-y":0.56,"hc-key":"de-nw-05370000","hc-a2":"HE","name":"Heinsberg","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-715,4182],[-768,4112],[-812,4134],[-872,4167],[-862,4235],[-970,4227],[-999,4335],[-957,4355],[-919,4309],[-881,4377],[-796,4444],[-721,4474],[-720,4511],[-690,4484],[-653,4516],[-618,4494],[-565,4424],[-561,4380],[-488,4370],[-487,4331],[-477,4304],[-633,4264],[-715,4182]]]}},{"type":"Feature","id":"DE.NW.05162000","properties":{"hc-group":"admin2","hc-middle-x":0.41,"hc-middle-y":0.58,"hc-key":"de-nw-05162000","hc-a2":"RK","name":"Rhein-Kreis Neuss","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-477,4304],[-487,4331],[-488,4370],[-442,4453],[-442,4561],[-413,4557],[-330,4593],[-355,4640],[-323,4646],[-247,4707],[-242,4704],[-239,4702],[-266,4561],[-229,4496],[-182,4492],[-178,4446],[-123,4456],[-124,4409],[-103,4371],[-128,4350],[-172,4302],[-199,4325],[-253,4257],[-373,4265],[-394,4319],[-459,4291],[-477,4304]]]}},{"type":"Feature","id":"DE.NW.05166000","properties":{"hc-group":"admin2","hc-middle-x":0.03,"hc-middle-y":0.70,"hc-key":"de-nw-05166000","hc-a2":"VI","name":"Viersen","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-355,4640],[-330,4593],[-413,4557],[-468,4590],[-508,4552],[-581,4561],[-618,4494],[-653,4516],[-690,4484],[-720,4511],[-802,4496],[-807,4595],[-759,4638],[-717,4718],[-667,4761],[-583,4757],[-512,4823],[-457,4811],[-408,4836],[-401,4835],[-391,4809],[-444,4783],[-414,4710],[-429,4646],[-355,4640]]]}},{"type":"Feature","id":"DE.TH.16052000","properties":{"hc-group":"admin2","hc-middle-x":0.57,"hc-middle-y":0.08,"hc-key":"de-th-16052000","hc-a2":"GE","name":"Gera","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[4430,4187],[4425,4215],[4428,4216],[4487,4229],[4555,4207],[4529,4169],[4553,4092],[4532,3983],[4493,4018],[4442,4012],[4414,4080],[4448,4163],[4430,4187]]]}},{"type":"Feature","id":"DE.HE.06636000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.56,"hc-key":"de-he-06636000","hc-a2":"WM","name":"Werra-MeiÃŸner-Kreis","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[2822,4230],[2812,4212],[2805,4211],[2673,4227],[2663,4201],[2603,4277],[2525,4278],[2447,4325],[2444,4411],[2404,4413],[2364,4467],[2321,4463],[2365,4550],[2424,4575],[2385,4584],[2389,4592],[2386,4591],[2382,4585],[2328,4597],[2336,4636],[2404,4621],[2435,4637],[2377,4718],[2463,4750],[2456,4778],[2554,4799],[2574,4735],[2614,4609],[2691,4597],[2699,4530],[2822,4480],[2848,4472],[2826,4415],[2746,4408],[2797,4363],[2767,4295],[2822,4230]]]}},{"type":"Feature","id":"DE.TH.16056000","properties":{"hc-group":"admin2","hc-middle-x":0.61,"hc-middle-y":0.42,"hc-key":"de-th-16056000","hc-a2":"EI","name":"Eisenach","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[2805,4211],[2812,4212],[2822,4230],[2886,4211],[2925,4289],[2975,4269],[2979,4158],[2927,4118],[2800,4189],[2805,4211]]]}},{"type":"Feature","id":"DE.BY.09674000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.46,"hc-key":"de-by-09674000","hc-a2":"HA","name":"HaÃŸberge","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3206,3141],[3275,3140],[3312,3147],[3359,3098],[3357,3036],[3449,3027],[3435,2956],[3417,2897],[3366,2891],[3334,2753],[3234,2633],[3122,2648],[3128,2727],[3069,2761],[3022,2830],[2958,2848],[3019,2879],[3049,2934],[3003,2949],[3064,3095],[3120,3152],[3166,3108],[3206,3141]],[[3066,3090],[3071,3088],[3067,3094],[3065,3092],[3066,3090]],[[3082,3083],[3085,3083],[3081,3086],[3081,3083],[3082,3083]]]}},{"type":"Feature","id":"DE.TH.16069000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.30,"hc-key":"de-th-16069000","hc-a2":"HI","name":"Hildburghausen","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3312,3147],[3275,3140],[3206,3141],[3194,3289],[3118,3310],[3058,3382],[3090,3446],[3177,3443],[3146,3516],[3170,3572],[3122,3590],[3170,3641],[3283,3630],[3313,3685],[3388,3639],[3417,3623],[3449,3681],[3493,3596],[3515,3603],[3515,3585],[3537,3570],[3535,3502],[3582,3478],[3494,3409],[3501,3370],[3438,3383],[3358,3365],[3297,3274],[3416,3212],[3397,3159],[3314,3177],[3312,3147]]]}},{"type":"Feature","id":"DE.TH.16072000","properties":{"hc-group":"admin2","hc-middle-x":0.21,"hc-middle-y":0.41,"hc-key":"de-th-16072000","hc-a2":"SO","name":"Sonneberg","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3501,3370],[3494,3409],[3582,3478],[3535,3502],[3537,3570],[3620,3547],[3683,3595],[3730,3523],[3783,3508],[3767,3506],[3805,3342],[3776,3212],[3724,3215],[3684,3233],[3694,3297],[3653,3347],[3589,3314],[3501,3370]]]}},{"type":"Feature","id":"DE.TH.16068000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.57,"hc-key":"de-th-16068000","hc-a2":"SÃ–","name":"SÃ¶mmerda","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3404,4263],[3408,4314],[3417,4364],[3439,4426],[3450,4514],[3519,4538],[3521,4602],[3575,4646],[3574,4682],[3710,4563],[3740,4605],[3782,4578],[3812,4638],[3855,4583],[3838,4548],[3910,4519],[3905,4520],[3909,4517],[3911,4513],[3911,4519],[3930,4511],[3917,4446],[3949,4389],[3798,4374],[3696,4380],[3708,4295],[3676,4259],[3637,4252],[3604,4322],[3560,4342],[3464,4252],[3404,4263]]]}},{"type":"Feature","id":"DE.TH.16067000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.46,"hc-key":"de-th-16067000","hc-a2":"GO","name":"Gotha","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3417,4364],[3408,4314],[3404,4263],[3406,4194],[3497,4116],[3474,4081],[3445,4087],[3374,4004],[3406,4000],[3379,3918],[3330,3897],[3317,3830],[3252,3827],[3159,3858],[3125,3916],[3124,3977],[3011,4008],[3030,4084],[3070,4102],[3105,4172],[3068,4210],[3185,4275],[3270,4296],[3285,4378],[3321,4354],[3417,4364]]]}},{"type":"Feature","id":"DE.NW.05374000","properties":{"hc-group":"admin2","hc-middle-x":0.64,"hc-middle-y":0.64,"hc-key":"de-nw-05374000","hc-a2":"OK","name":"Oberbergischer Kreis","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[276,4556],[349,4565],[386,4519],[374,4484],[457,4359],[514,4366],[552,4312],[631,4317],[638,4212],[685,4186],[690,4130],[663,3995],[576,3965],[499,3997],[477,3981],[401,4053],[418,4094],[388,4146],[348,4150],[220,4205],[273,4261],[293,4316],[243,4338],[239,4427],[276,4477],[265,4510],[267,4535],[276,4556]]]}},{"type":"Feature","id":"DE.RP.07132000","properties":{"hc-group":"admin2","hc-middle-x":0.67,"hc-middle-y":0.60,"hc-key":"de-rp-07132000","hc-a2":"A(","name":"Altenkirchen (Westerwald)","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[576,3965],[663,3995],[690,4130],[714,4130],[747,4109],[727,4049],[858,3978],[848,3895],[911,3827],[909,3788],[842,3762],[827,3805],[778,3815],[763,3777],[702,3838],[631,3841],[605,3805],[607,3688],[588,3718],[511,3731],[457,3618],[405,3636],[416,3757],[378,3816],[537,3895],[589,3907],[576,3965]]]}},{"type":"Feature","id":"DE.NW.05124000","properties":{"hc-group":"admin2","hc-middle-x":0.12,"hc-middle-y":0.64,"hc-key":"de-nw-05124000","hc-a2":"WU","name":"Wuppertal","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[276,4556],[267,4535],[265,4510],[222,4538],[152,4521],[125,4457],[98,4527],[47,4518],[27,4570],[104,4650],[156,4663],[241,4666],[242,4588],[276,4556]]]}},{"type":"Feature","id":"DE.HE.06438000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.52,"hc-key":"de-he-06438000","hc-a2":"OF","name":"Offenbach","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1468,2740],[1454,2741],[1420,2760],[1427,2774],[1394,2833],[1424,2884],[1508,2895],[1549,2873],[1615,2906],[1598,2994],[1660,2982],[1649,2940],[1754,2901],[1790,2862],[1777,2795],[1712,2804],[1672,2760],[1592,2735],[1515,2744],[1480,2736],[1468,2740]]]}},{"type":"Feature","id":"DE.BY.09179000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.49,"hc-key":"de-by-09179000","hc-a2":"FÃœ","name":"FÃ¼rstenfeldbruck","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4019,225],[4008,210],[3994,203],[3890,234],[3762,176],[3686,182],[3689,232],[3624,282],[3663,307],[3694,431],[3737,415],[3792,456],[3919,369],[3982,375],[4007,331],[3969,267],[4019,225]]]}},{"type":"Feature","id":"DE.BY.09188000","properties":{"hc-group":"admin2","hc-middle-x":0.89,"hc-middle-y":0.43,"hc-key":"de-by-09188000","hc-a2":"ST","name":"Starnberg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3762,176],[3890,234],[3994,203],[4042,71],[4040,18],[4010,-65],[3954,-47],[3954,-205],[3916,-188],[3910,-114],[3816,-122],[3859,-70],[3780,-25],[3796,26],[3764,60],[3762,176]]]}},{"type":"Feature","id":"DE.HE.06414000","properties":{"hc-group":"admin2","hc-middle-x":0.18,"hc-middle-y":0.16,"hc-key":"de-he-06414000","hc-a2":"WI","name":"Wiesbaden","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1159,2811],[1144,2812],[1121,2803],[1082,2849],[1033,2860],[1025,2860],[1019,2859],[962,2929],[1007,2985],[1082,3017],[1158,3014],[1209,2920],[1159,2811]]]}},{"type":"Feature","id":"DE.NW.05762000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.51,"hc-key":"de-nw-05762000","hc-a2":"HÃ–","name":"HÃ¶xter","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[1736,4914],[1715,4915],[1680,4948],[1777,5009],[1743,5072],[1741,5180],[1762,5266],[1727,5309],[1721,5375],[1759,5385],[1870,5479],[1881,5421],[1954,5398],[2042,5401],[2160,5413],[2133,5345],[2151,5317],[2096,5265],[2106,5147],[2125,5111],[2140,5117],[2145,5115],[2055,5065],[2082,5036],[2038,4978],[2031,4922],[1951,4878],[1898,4824],[1852,4825],[1843,4896],[1778,4929],[1736,4914]]]}},{"type":"Feature","id":"DE.NW.05958000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.65,"hc-key":"de-nw-05958000","hc-a2":"HO","name":"Hochsauerlandkreis","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[1680,4948],[1715,4915],[1736,4914],[1666,4879],[1717,4804],[1709,4750],[1634,4732],[1591,4752],[1500,4733],[1373,4594],[1405,4552],[1518,4588],[1541,4441],[1462,4339],[1365,4349],[1310,4416],[1239,4393],[1181,4337],[1092,4354],[1048,4411],[998,4409],[1016,4452],[940,4556],[832,4539],[801,4600],[829,4659],[805,4698],[796,4791],[770,4854],[807,4899],[847,4863],[892,4875],[933,4836],[1026,4827],[1148,4751],[1256,4781],[1367,4860],[1458,4878],[1559,4831],[1620,4905],[1600,4960],[1680,4948]]]}},{"type":"Feature","id":"DE.NW.05120000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.50,"hc-key":"de-nw-05120000","hc-a2":"RE","name":"Remscheid","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[265,4510],[276,4477],[239,4427],[224,4445],[150,4440],[131,4426],[125,4457],[152,4521],[222,4538],[265,4510]]]}},{"type":"Feature","id":"DE.NW.05122000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.50,"hc-key":"de-nw-05122000","hc-a2":"SO","name":"Solingen","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[125,4457],[131,4426],[150,4440],[154,4400],[100,4418],[0,4394],[-40,4436],[47,4518],[98,4527],[125,4457]]]}},{"type":"Feature","id":"DE.BY.09271000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.51,"hc-key":"de-by-09271000","hc-a2":"DE","name":"Deggendorf","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[5464,948],[5455,961],[5438,962],[5414,1019],[5331,1031],[5271,1107],[5237,1213],[5239,1267],[5312,1275],[5297,1345],[5343,1438],[5365,1413],[5467,1427],[5506,1345],[5561,1356],[5630,1325],[5681,1244],[5660,1213],[5698,1158],[5691,1117],[5568,1078],[5552,990],[5491,986],[5464,948]]]}},{"type":"Feature","id":"DE.NW.05112000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.50,"hc-key":"de-nw-05112000","hc-a2":"DU","name":"Duisburg","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-239,4702],[-242,4704],[-247,4707],[-287,4726],[-271,4781],[-306,4788],[-266,4866],[-307,4943],[-244,4970],[-254,5020],[-170,4980],[-140,4942],[-151,4870],[-149,4749],[-137,4726],[-149,4726],[-159,4721],[-215,4725],[-239,4702]]]}},{"type":"Feature","id":"DE.NW.05117000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.50,"hc-key":"de-nw-05117000","hc-a2":"MA","name":"MÃ¼lheim an der Ruhr","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-137,4726],[-149,4749],[-151,4870],[-136,4861],[-72,4890],[-21,4845],[-39,4773],[-72,4745],[-105,4742],[-137,4726]]]}},{"type":"Feature","id":"DE.HE.06412000","properties":{"hc-group":"admin2","hc-middle-x":0.79,"hc-middle-y":0.33,"hc-key":"de-he-06412000","hc-a2":"FA","name":"Frankfurt am Main","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1508,2895],[1424,2884],[1394,2833],[1329,2837],[1365,2877],[1331,2895],[1288,2948],[1394,3004],[1394,3031],[1465,3111],[1503,3124],[1495,3060],[1573,3054],[1568,3029],[1565,2999],[1560,2959],[1508,2895]]]}},{"type":"Feature","id":"DE.NW.05378000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.47,"hc-key":"de-nw-05378000","hc-a2":"RB","name":"Rheinisch-Bergischer Kreis","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[0,4394],[100,4418],[154,4400],[150,4440],[224,4445],[239,4427],[243,4338],[293,4316],[273,4261],[220,4205],[348,4150],[300,4099],[215,4123],[169,4050],[135,4040],[114,4063],[124,4147],[72,4168],[58,4254],[103,4314],[67,4363],[-7,4357],[-6,4378],[0,4394]]]}},{"type":"Feature","id":"DE.NW.05158000","properties":{"hc-group":"admin2","hc-middle-x":0.19,"hc-middle-y":0.29,"hc-key":"de-nw-05158000","hc-a2":"ME","name":"Mettmann","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[0,4394],[-6,4378],[-7,4357],[-22,4325],[-89,4322],[-121,4335],[-128,4350],[-103,4371],[-124,4409],[-62,4422],[-91,4453],[-73,4526],[-106,4571],[-55,4601],[-167,4624],[-159,4721],[-149,4726],[-137,4726],[-105,4742],[-72,4745],[-20,4716],[115,4758],[151,4736],[156,4663],[104,4650],[27,4570],[47,4518],[-40,4436],[0,4394]]]}},{"type":"Feature","id":"DE.NW.05316000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.52,"hc-key":"de-nw-05316000","hc-a2":"LE","name":"Leverkusen","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-89,4322],[-22,4325],[-7,4357],[67,4363],[103,4314],[58,4254],[-26,4249],[-89,4322]]]}},{"type":"Feature","id":"DE.TH.16066000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.48,"hc-key":"de-th-16066000","hc-a2":"SM","name":"Schmalkalden-Meiningen","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3317,3830],[3313,3759],[3302,3753],[3261,3698],[3222,3726],[3143,3660],[3170,3641],[3122,3590],[3170,3572],[3146,3516],[3177,3443],[3090,3446],[3058,3382],[3002,3375],[2948,3509],[2882,3533],[2834,3591],[2777,3574],[2748,3603],[2690,3536],[2708,3592],[2685,3670],[2720,3705],[2794,3676],[2845,3710],[2809,3754],[2813,3819],[2846,3847],[2828,3901],[2881,3884],[2989,3918],[3011,4008],[3124,3977],[3125,3916],[3159,3858],[3252,3827],[3317,3830]]]}},{"type":"Feature","id":"DE.HE.06411000","properties":{"hc-group":"admin2","hc-middle-x":0.76,"hc-middle-y":0.04,"hc-key":"de-he-06411000","hc-a2":"DA","name":"Darmstadt","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1468,2740],[1480,2736],[1515,2744],[1536,2670],[1517,2616],[1467,2579],[1445,2523],[1411,2577],[1370,2572],[1430,2667],[1427,2730],[1468,2740]]]}},{"type":"Feature","id":"DE.BY.09174000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.45,"hc-key":"de-by-09174000","hc-a2":"DA","name":"Dachau","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4166,471],[4111,441],[4095,397],[4086,361],[4007,331],[3982,375],[3919,369],[3792,456],[3737,415],[3745,491],[3787,510],[3788,624],[3911,677],[3973,663],[4007,615],[4080,665],[4114,597],[4105,541],[4159,522],[4166,471]]]}},{"type":"Feature","id":"DE.BY.09162000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.53,"hc-key":"de-by-09162000","hc-a2":"MÃœ","name":"MÃ¼nchen","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4007,331],[4086,361],[4095,397],[4140,370],[4237,359],[4218,311],[4282,300],[4309,248],[4277,164],[4183,184],[4149,151],[4075,165],[4067,230],[4019,225],[3969,267],[4007,331]],[[4156,162],[4158,163],[4156,165],[4154,163],[4156,162]]]}},{"type":"Feature","id":"DE.BB.12053000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.51,"hc-key":"de-bb-12053000","hc-a2":"F(","name":"Frankfurt (Oder)","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[6494,6337],[6524,6249],[6565,6169],[6481,6150],[6388,6151],[6416,6258],[6402,6300],[6406,6328],[6494,6337]]]}},{"type":"Feature","id":"DE.NW.05113000","properties":{"hc-group":"admin2","hc-middle-x":0.87,"hc-middle-y":0.37,"hc-key":"de-nw-05113000","hc-a2":"ES","name":"Essen","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-72,4890],[-71,4912],[-46,4927],[7,4940],[17,4975],[20,4976],[27,4973],[78,4905],[107,4899],[111,4874],[133,4821],[110,4794],[115,4758],[-20,4716],[-72,4745],[-39,4773],[-21,4845],[-72,4890]]]}},{"type":"Feature","id":"DE.BW.08436000","properties":{"hc-group":"admin2","hc-middle-x":0.65,"hc-middle-y":0.45,"hc-key":"de-bw-08436000","hc-a2":"RA","name":"Ravensburg","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[2798,-16],[2783,-50],[2804,-68],[2805,-203],[2827,-231],[2765,-280],[2814,-314],[2828,-433],[2779,-485],[2762,-427],[2707,-426],[2678,-466],[2549,-440],[2462,-537],[2416,-529],[2465,-467],[2447,-425],[2350,-404],[2298,-353],[2226,-353],[2180,-320],[2198,-255],[2147,-236],[2116,-156],[2158,-42],[2210,-46],[2248,-0],[2290,-32],[2329,18],[2347,-34],[2421,-9],[2482,-45],[2550,-49],[2616,-4],[2738,-56],[2798,-16]]]}},{"type":"Feature","id":"DE.BY.09764000","properties":{"hc-group":"admin2","hc-middle-x":0.56,"hc-middle-y":0.44,"hc-key":"de-by-09764000","hc-a2":"ME","name":"Memmingen","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[2804,-68],[2783,-50],[2798,-16],[2808,-13],[2846,14],[2824,41],[2825,45],[2827,53],[2917,87],[2886,-40],[2851,-89],[2804,-68]]]}},{"type":"Feature","id":"DE.BW.08426000","properties":{"hc-group":"admin2","hc-middle-x":0.62,"hc-middle-y":0.70,"hc-key":"de-bw-08426000","hc-a2":"BI","name":"Biberach","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[2808,-13],[2798,-16],[2738,-56],[2616,-4],[2550,-49],[2482,-45],[2421,-9],[2347,-34],[2329,18],[2295,76],[2232,120],[2093,145],[2032,235],[2049,326],[2086,348],[2123,290],[2227,311],[2220,339],[2272,280],[2319,303],[2378,252],[2458,262],[2456,301],[2584,428],[2685,385],[2733,338],[2744,218],[2786,249],[2798,204],[2826,172],[2831,85],[2827,53],[2825,45],[2824,41],[2812,25],[2808,-13]]]}},{"type":"Feature","id":"DE.BW.08118000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.47,"hc-key":"de-bw-08118000","hc-a2":"LU","name":"Ludwigsburg","bundesland":"DE.BW"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2144,1477],[2141,1473],[2129,1472],[2138,1497],[2144,1477]]],[[[1987,1196],[1885,1210],[1849,1183],[1822,1068],[1786,1170],[1733,1170],[1696,1223],[1673,1324],[1713,1331],[1701,1397],[1648,1459],[1752,1462],[1817,1445],[1853,1497],[1922,1481],[1980,1438],[2022,1471],[2129,1464],[2061,1410],[2100,1381],[2052,1319],[2099,1286],[2053,1276],[2033,1219],[1987,1196]]]]}},{"type":"Feature","id":"DE.BW.08119000","properties":{"hc-group":"admin2","hc-middle-x":0.43,"hc-middle-y":0.58,"hc-key":"de-bw-08119000","hc-a2":"RM","name":"Rems-Murr-Kreis","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[2129,1472],[2141,1473],[2144,1477],[2180,1514],[2222,1521],[2311,1490],[2312,1421],[2400,1362],[2385,1334],[2445,1275],[2471,1180],[2353,1160],[2341,1097],[2299,1062],[2227,1067],[2199,1096],[2149,1076],[2052,1095],[2001,1126],[1987,1196],[2033,1219],[2053,1276],[2099,1286],[2052,1319],[2100,1381],[2061,1410],[2129,1464],[2129,1467],[2129,1472]]]}},{"type":"Feature","id":"DE.BW.08111000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.51,"hc-key":"de-bw-08111000","hc-a2":"ST","name":"Stuttgart","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1987,1196],[2001,1126],[2052,1095],[1960,1034],[1989,983],[1859,1003],[1810,1047],[1822,1068],[1849,1183],[1885,1210],[1987,1196]]]}},{"type":"Feature","id":"DE.BW.08311000","properties":{"hc-group":"admin2","hc-middle-x":0.21,"hc-middle-y":0.28,"hc-key":"de-bw-08311000","hc-a2":"FI","name":"Freiburg im Breisgau","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[662,118],[674,99],[685,93],[720,34],[756,39],[737,-100],[694,-102],[710,-52],[658,-18],[507,-25],[552,72],[598,48],[662,118]]]}},{"type":"Feature","id":"DE.BW.08316000","properties":{"hc-group":"admin2","hc-middle-x":0.17,"hc-middle-y":0.28,"hc-key":"de-bw-08316000","hc-a2":"EM","name":"Emmendingen","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[685,93],[674,99],[662,118],[596,142],[592,180],[431,186],[519,338],[531,382],[581,353],[671,348],[810,301],[845,345],[925,308],[983,332],[996,273],[945,192],[981,122],[928,106],[953,29],[894,98],[752,111],[685,93]]]}},{"type":"Feature","id":"DE.BY.09186000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.51,"hc-key":"de-by-09186000","hc-a2":"PA","name":"Pfaffenhofen a.d. Ilm","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3911,677],[3898,689],[3895,707],[3910,766],[3956,802],[3928,843],[3972,856],[3935,893],[4020,952],[4013,1025],[4030,1065],[4063,1091],[4123,1113],[4164,1190],[4228,1138],[4273,1150],[4216,1095],[4216,1034],[4256,1012],[4270,918],[4227,841],[4234,752],[4184,704],[4140,738],[4080,665],[4007,615],[3973,663],[3911,677]]]}},{"type":"Feature","id":"DE.BW.08421000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.45,"hc-key":"de-bw-08421000","hc-a2":"UL","name":"Ulm","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[2722,657],[2731,619],[2663,541],[2691,507],[2621,453],[2625,494],[2552,511],[2576,569],[2638,587],[2613,636],[2722,657]]]}},{"type":"Feature","id":"DE.BY.09775000","properties":{"hc-group":"admin2","hc-middle-x":0.87,"hc-middle-y":0.40,"hc-key":"de-by-09775000","hc-a2":"NU","name":"Neu-Ulm","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[2691,507],[2663,541],[2731,619],[2722,657],[2789,687],[2816,656],[2858,644],[2850,566],[2948,489],[2967,394],[2949,343],[2878,193],[2826,172],[2798,204],[2786,249],[2752,354],[2756,413],[2691,507]]]}},{"type":"Feature","id":"DE.BY.09183000","properties":{"hc-group":"admin2","hc-middle-x":0.56,"hc-middle-y":0.61,"hc-key":"de-by-09183000","hc-a2":"MA","name":"MÃ¼hldorf a. Inn","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[5002,686],[5056,678],[5121,585],[5082,523],[5119,486],[5085,434],[5113,342],[5096,312],[5024,304],[4985,240],[4931,246],[4837,227],[4764,255],[4723,189],[4690,256],[4649,241],[4615,250],[4608,266],[4738,378],[4769,355],[4791,526],[4941,587],[5002,686]]]}},{"type":"Feature","id":"DE.ST.15089000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.46,"hc-key":"de-st-15089000","hc-a2":"SA","name":"Salzlandkreis","bundesland":"DE.ST"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4143,5755],[4126,5762],[4129,5778],[4137,5771],[4143,5755]]],[[[4036,5687],[4109,5702],[4142,5750],[4204,5739],[4257,5656],[4252,5623],[4366,5503],[4246,5444],[4260,5400],[4233,5343],[4270,5318],[4240,5287],[4229,5208],[4253,5198],[4240,5169],[4156,5135],[4026,5174],[4025,5226],[3951,5205],[3931,5244],[3847,5260],[3843,5315],[3780,5297],[3703,5365],[3784,5443],[3787,5498],[3811,5544],[3787,5583],[3847,5644],[3929,5588],[4005,5596],[4006,5670],[4036,5687]],[[4261,5463],[4261,5465],[4258,5464],[4259,5461],[4261,5463]],[[4267,5471],[4265,5478],[4261,5478],[4263,5467],[4267,5471]]]]}},{"type":"Feature","id":"DE.ST.15003000","properties":{"hc-group":"admin2","hc-middle-x":0.57,"hc-middle-y":0.54,"hc-key":"de-st-15003000","hc-a2":"MA","name":"Magdeburg","bundesland":"DE.ST"},"geometry":{"type":"Polygon","coordinates":[[[4129,5778],[4126,5762],[4143,5755],[4144,5752],[4142,5750],[4109,5702],[4036,5687],[4002,5741],[3934,5735],[3970,5887],[4037,5922],[4026,5963],[4086,5925],[4071,5907],[4129,5778]]]}},{"type":"Feature","id":"DE.SH.01062000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.35,"hc-key":"de-sh-01062000","hc-a2":"ST","name":"Stormarn","bundesland":"DE.SH"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2650,7996],[2658,7993],[2651,7983],[2642,7983],[2650,7996]]],[[[3028,8300],[3066,8283],[3067,8271],[3103,8202],[3049,8172],[3072,8141],[3033,8082],[2980,8086],[2960,7993],[2929,7949],[3017,7866],[2942,7855],[2855,7787],[2793,7705],[2732,7738],[2717,7801],[2762,7827],[2778,7896],[2709,7960],[2733,8041],[2652,8001],[2614,8022],[2626,8078],[2681,8085],[2751,8132],[2809,8107],[2792,8174],[2885,8205],[3028,8300]]]]}},{"type":"Feature","id":"DE.SH.01055000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.37,"hc-key":"de-sh-01055000","hc-a2":"OS","name":"Ostholstein","bundesland":"DE.SH"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3067,8271],[3066,8283],[3028,8300],[3024,8391],[2958,8399],[2998,8452],[3031,8439],[3049,8510],[2959,8496],[2928,8528],[2931,8574],[3019,8580],[2978,8660],[3021,8686],[3025,8733],[3084,8740],[3137,8684],[3178,8795],[3164,8844],[3226,8855],[3354,8960],[3418,8939],[3500,8972],[3455,8904],[3479,8704],[3369,8621],[3314,8550],[3257,8547],[3208,8497],[3227,8425],[3279,8408],[3263,8332],[3109,8262],[3067,8271]]],[[[3415,9140],[3444,9175],[3524,9158],[3587,9121],[3649,8994],[3564,9007],[3472,8998],[3472,9046],[3396,9051],[3415,9140]]]]}},{"type":"Feature","id":"DE.SH.01060000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.39,"hc-key":"de-sh-01060000","hc-a2":"SE","name":"Segeberg","bundesland":"DE.SH"},"geometry":{"type":"Polygon","coordinates":[[[2650,7996],[2642,7983],[2651,7983],[2591,7960],[2548,7920],[2567,8084],[2501,8058],[2491,8140],[2393,8226],[2383,8254],[2388,8304],[2428,8313],[2474,8421],[2500,8419],[2540,8436],[2586,8440],[2631,8486],[2712,8484],[2817,8550],[2876,8561],[2892,8513],[2928,8528],[2959,8496],[3049,8510],[3031,8439],[2998,8452],[2958,8399],[3024,8391],[3028,8300],[2885,8205],[2792,8174],[2809,8107],[2751,8132],[2681,8085],[2626,8078],[2614,8022],[2652,8001],[2653,8000],[2650,7996]]]}},{"type":"Feature","id":"DE.SH.01058000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.59,"hc-key":"de-sh-01058000","hc-a2":"RE","name":"Rendsburg-EckernfÃ¶rde","bundesland":"DE.SH"},"geometry":{"type":"Polygon","coordinates":[[[2540,8436],[2500,8419],[2474,8421],[2393,8478],[2354,8462],[2260,8470],[2231,8531],[2135,8524],[2123,8499],[2018,8489],[2013,8575],[2125,8644],[2125,8736],[2084,8805],[2101,8885],[2139,8872],[2216,8902],[2218,9006],[2285,9038],[2312,9097],[2347,9142],[2352,9146],[2363,9155],[2501,9272],[2516,9285],[2529,9296],[2548,9308],[2599,9297],[2596,9175],[2547,9108],[2449,9071],[2467,9031],[2594,9071],[2686,9085],[2734,9046],[2715,9013],[2676,8924],[2606,8895],[2619,8824],[2682,8765],[2681,8593],[2612,8586],[2579,8615],[2544,8579],[2528,8479],[2540,8436]],[[2104,8501],[2115,8512],[2110,8519],[2103,8505],[2104,8501]]]}},{"type":"Feature","id":"DE.NW.05914000","properties":{"hc-group":"admin2","hc-middle-x":0.61,"hc-middle-y":0.42,"hc-key":"de-nw-05914000","hc-a2":"HA","name":"Hagen","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[528,4764],[520,4633],[462,4588],[430,4622],[451,4660],[395,4660],[340,4701],[376,4781],[420,4801],[438,4803],[458,4803],[480,4771],[528,4764]]]}},{"type":"Feature","id":"DE.NW.05978000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.45,"hc-key":"de-nw-05978000","hc-a2":"UN","name":"Unna","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[528,4764],[480,4771],[458,4803],[538,4929],[574,4954],[534,5032],[480,5024],[385,5058],[421,5078],[379,5149],[417,5184],[393,5219],[432,5248],[495,5175],[606,5218],[635,5211],[656,5162],[615,5142],[620,5073],[727,5082],[740,5022],[751,4986],[748,4882],[625,4878],[551,4841],[566,4785],[528,4764]]]}},{"type":"Feature","id":"DE.BW.08117000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.37,"hc-key":"de-bw-08117000","hc-a2":"GÃ–","name":"GÃ¶ppingen","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[2305,764],[2303,767],[2303,768],[2314,868],[2258,901],[2214,973],[2227,1067],[2299,1062],[2341,1097],[2449,1098],[2494,1023],[2581,1016],[2585,1057],[2675,1034],[2658,957],[2636,900],[2588,887],[2517,796],[2439,803],[2374,741],[2305,764]],[[2479,1030],[2484,1034],[2481,1041],[2470,1033],[2479,1030]]]}},{"type":"Feature","id":"DE.BW.08116000","properties":{"hc-group":"admin2","hc-middle-x":0.43,"hc-middle-y":0.30,"hc-key":"de-bw-08116000","hc-a2":"ES","name":"Esslingen","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[2227,1067],[2214,973],[2258,901],[2314,868],[2303,768],[2196,736],[2181,777],[2127,755],[1902,856],[1923,898],[1859,1003],[1989,983],[1960,1034],[2052,1095],[2149,1076],[2199,1096],[2227,1067]],[[1918,856],[1914,857],[1917,851],[1921,849],[1918,856]]]}},{"type":"Feature","id":"DE.NW.05970000","properties":{"hc-group":"admin2","hc-middle-x":0.60,"hc-middle-y":0.28,"hc-key":"de-nw-05970000","hc-a2":"SW","name":"Siegen-Wittgenstein","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[986,3770],[962,3795],[909,3788],[911,3827],[848,3895],[858,3978],[727,4049],[747,4109],[800,4107],[837,4248],[883,4256],[915,4218],[971,4244],[1031,4221],[1097,4286],[1092,4354],[1181,4337],[1239,4393],[1310,4416],[1365,4349],[1323,4318],[1355,4233],[1301,4163],[1261,4093],[1192,4015],[1116,4042],[987,3914],[1023,3840],[986,3770]]]}},{"type":"Feature","id":"DE.HE.06532000","properties":{"hc-group":"admin2","hc-middle-x":0.41,"hc-middle-y":0.39,"hc-key":"de-he-06532000","hc-a2":"LD","name":"Lahn-Dill-Kreis","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1007,3649],[971,3731],[986,3770],[1023,3840],[987,3914],[1116,4042],[1192,4015],[1230,3994],[1231,3918],[1283,3907],[1278,3818],[1317,3840],[1383,3786],[1342,3718],[1423,3598],[1367,3557],[1448,3535],[1342,3461],[1385,3388],[1350,3391],[1328,3367],[1312,3362],[1286,3389],[1220,3448],[1189,3521],[1123,3558],[1075,3629],[1055,3599],[1007,3649]]]}},{"type":"Feature","id":"DE.RP.07340000","properties":{"hc-group":"admin2","hc-middle-x":0.64,"hc-middle-y":0.95,"hc-key":"de-rp-07340000","hc-a2":"SÃœ","name":"SÃ¼dwestpfalz","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[695,1870],[717,1883],[727,1855],[728,1816],[731,1813],[690,1790],[757,1742],[770,1665],[727,1577],[761,1544],[761,1480],[722,1464],[655,1510],[631,1485],[543,1483],[505,1522],[412,1558],[382,1660],[338,1682],[267,1651],[250,1654],[223,1691],[296,1725],[339,1812],[295,1867],[305,1909],[304,1939],[413,1892],[487,1948],[547,1885],[629,1901],[636,1858],[695,1870]],[[511,1648],[548,1740],[454,1750],[403,1699],[460,1628],[511,1648]]]}},{"type":"Feature","id":"DE.NI.03404000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.45,"hc-key":"de-ni-03404000","hc-a2":"OS","name":"OsnabrÃ¼ck","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[867,5991],[845,6032],[875,6064],[989,6056],[1007,6014],[1058,6000],[1008,5972],[1017,5932],[934,5921],[868,5961],[867,5991]]]}},{"type":"Feature","id":"DE.NW.05566000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.58,"hc-key":"de-nw-05566000","hc-a2":"ST","name":"Steinfurt","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[875,6064],[845,6032],[867,5991],[840,5977],[824,5876],[909,5855],[908,5770],[802,5727],[695,5748],[645,5661],[554,5699],[496,5662],[478,5616],[411,5620],[269,5703],[257,5789],[172,5814],[172,5855],[126,5906],[131,5964],[180,5996],[302,5989],[319,6012],[424,6084],[539,6145],[568,6203],[541,6220],[573,6277],[642,6248],[662,6174],[741,6131],[814,6142],[875,6064]]]}},{"type":"Feature","id":"DE.ST.15088000","properties":{"hc-group":"admin2","hc-middle-x":0.68,"hc-middle-y":0.69,"hc-key":"de-st-15088000","hc-a2":"SA","name":"Saalekreis","bundesland":"DE.ST"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4156,5135],[4240,5169],[4253,5198],[4296,5162],[4406,5160],[4415,5077],[4518,5077],[4551,5009],[4558,4944],[4511,4912],[4559,4731],[4519,4711],[4542,4650],[4439,4616],[4446,4663],[4328,4634],[4328,4587],[4208,4598],[4179,4645],[4129,4621],[4066,4674],[4010,4634],[3930,4654],[3876,4706],[3889,4715],[3948,4818],[4062,4891],[4114,4840],[4190,4899],[4124,4946],[4108,5028],[4156,5135]],[[4377,4825],[4450,4925],[4377,5018],[4301,4994],[4254,4973],[4284,4902],[4322,4888],[4344,4826],[4377,4825]]],[[[3868,4718],[3870,4721],[3874,4719],[3871,4715],[3868,4718]]],[[[3857,4742],[3863,4744],[3864,4728],[3857,4734],[3857,4742]]]]}},{"type":"Feature","id":"DE.ST.15087000","properties":{"hc-group":"admin2","hc-middle-x":0.65,"hc-middle-y":0.46,"hc-key":"de-st-15087000","hc-a2":"MS","name":"Mansfeld-SÃ¼dharz","bundesland":"DE.ST"},"geometry":{"type":"Polygon","coordinates":[[[3874,4719],[3870,4721],[3868,4718],[3863,4721],[3864,4728],[3863,4744],[3857,4742],[3859,4772],[3791,4811],[3645,4794],[3572,4830],[3491,4825],[3460,4979],[3414,5006],[3430,5089],[3525,5103],[3540,5060],[3579,5076],[3615,5024],[3707,5069],[3705,5133],[3758,5146],[3844,5217],[3847,5260],[3931,5244],[3951,5205],[4025,5226],[4026,5174],[4156,5135],[4108,5028],[4124,4946],[4190,4899],[4114,4840],[4062,4891],[3948,4818],[3889,4715],[3889,4720],[3874,4719]]]}},{"type":"Feature","id":"DE.BY.09774000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.48,"hc-key":"de-by-09774000","hc-a2":"GÃœ","name":"GÃ¼nzburg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[2909,728],[2902,727],[2905,735],[2926,746],[2949,743],[2992,693],[3050,711],[3086,761],[3090,696],[3182,685],[3196,622],[3163,600],[3179,513],[3155,469],[3237,470],[3216,355],[3232,324],[3180,341],[3111,293],[3021,266],[2972,280],[2949,343],[2967,394],[2948,489],[2850,566],[2858,644],[2816,656],[2863,686],[2911,720],[2913,729],[2909,728]]]}},{"type":"Feature","id":"DE.BW.08425000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.50,"hc-key":"de-bw-08425000","hc-a2":"AD","name":"Alb-Donau-Kreis","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[2905,735],[2902,727],[2909,728],[2911,720],[2863,686],[2816,656],[2789,687],[2722,657],[2613,636],[2638,587],[2576,569],[2552,511],[2625,494],[2621,453],[2691,507],[2756,413],[2752,354],[2786,249],[2744,218],[2733,338],[2685,385],[2584,428],[2456,301],[2458,262],[2378,252],[2319,303],[2272,280],[2220,339],[2234,403],[2313,504],[2303,566],[2354,600],[2304,699],[2305,764],[2374,741],[2439,803],[2517,796],[2588,887],[2636,900],[2656,849],[2726,867],[2795,797],[2857,791],[2905,735]]]}},{"type":"Feature","id":"DE.BY.09776000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.54,"hc-key":"de-by-09776000","hc-a2":"L(","name":"Lindau (Bodensee)","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[2331,-567],[2383,-528],[2416,-529],[2462,-537],[2549,-440],[2678,-466],[2707,-426],[2762,-427],[2779,-485],[2766,-567],[2678,-616],[2588,-640],[2534,-616],[2541,-560],[2496,-550],[2452,-633],[2331,-567]]]}},{"type":"Feature","id":"DE.BW.08435000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.48,"hc-key":"de-bw-08435000","hc-a2":"BO","name":"Bodenseekreis","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[2416,-529],[2383,-528],[2331,-567],[2282,-562],[2230,-475],[2137,-450],[2092,-461],[2011,-414],[1974,-350],[1828,-257],[1827,-186],[1883,-202],[1940,-210],[2013,-152],[2147,-236],[2198,-255],[2180,-320],[2226,-353],[2298,-353],[2350,-404],[2447,-425],[2465,-467],[2416,-529]]]}},{"type":"Feature","id":"DE.BW.08335000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.58,"hc-key":"de-bw-08335000","hc-a2":"KO","name":"Konstanz","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1883,-202],[1827,-186],[1828,-257],[1825,-295],[1925,-359],[1968,-454],[1883,-454],[1858,-405],[1757,-347],[1710,-375],[1760,-425],[1662,-474],[1621,-433],[1641,-400],[1581,-355],[1545,-397],[1564,-442],[1505,-417],[1439,-266],[1415,-325],[1399,-265],[1410,-247],[1424,-190],[1472,-193],[1514,-147],[1617,-158],[1647,-113],[1773,-76],[1898,-129],[1883,-202]]]}},{"type":"Feature","id":"DE.RP.07134000","properties":{"hc-group":"admin2","hc-middle-x":0.58,"hc-middle-y":0.52,"hc-key":"de-rp-07134000","hc-a2":"BI","name":"Birkenfeld","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[-28,2327],[-7,2347],[-11,2396],[69,2490],[68,2517],[192,2621],[157,2665],[210,2684],[312,2674],[315,2621],[319,2553],[354,2524],[326,2478],[371,2469],[423,2412],[416,2370],[334,2338],[327,2249],[275,2258],[195,2194],[83,2274],[26,2269],[-28,2327]]]}},{"type":"Feature","id":"DE.RP.07235000","properties":{"hc-group":"admin2","hc-middle-x":0.27,"hc-middle-y":0.58,"hc-key":"de-rp-07235000","hc-a2":"TS","name":"Trier-Saarburg","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[-11,2396],[-7,2347],[-28,2327],[-111,2299],[-153,2294],[-286,2220],[-393,2200],[-432,2168],[-620,2221],[-638,2249],[-578,2318],[-543,2413],[-497,2443],[-487,2569],[-521,2596],[-405,2676],[-303,2706],[-258,2686],[-227,2629],[-164,2646],[-125,2589],[-161,2526],[-74,2430],[-48,2374],[-11,2396]],[[-394,2512],[-453,2480],[-450,2426],[-326,2434],[-290,2461],[-333,2511],[-284,2535],[-314,2627],[-340,2635],[-394,2512]]]}},{"type":"Feature","id":"DE.NI.03360000","properties":{"hc-group":"admin2","hc-middle-x":0.56,"hc-middle-y":0.54,"hc-key":"de-ni-03360000","hc-a2":"UE","name":"Uelzen","bundesland":"DE.NI"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2728,7075],[2731,7082],[2734,7088],[2744,7068],[2728,7075]]],[[[2772,7107],[2774,7107],[2774,7105],[2775,7100],[2772,7107]]],[[[2807,6921],[2788,7021],[2783,7105],[2880,7171],[2931,7172],[2956,7225],[3029,7300],[3054,7259],[3144,7278],[3134,7240],[3238,7192],[3306,7129],[3359,7020],[3316,6993],[3333,6960],[3288,6877],[3321,6815],[3258,6799],[3253,6734],[3178,6689],[3080,6779],[2986,6756],[2881,6783],[2807,6921]]]]}},{"type":"Feature","id":"DE.NW.05570000","properties":{"hc-group":"admin2","hc-middle-x":0.43,"hc-middle-y":0.30,"hc-key":"de-nw-05570000","hc-a2":"WA","name":"Warendorf","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[665,5245],[604,5369],[561,5392],[594,5443],[645,5439],[627,5477],[688,5469],[645,5661],[695,5748],[802,5727],[882,5660],[927,5704],[983,5688],[964,5623],[995,5609],[996,5546],[1048,5495],[1027,5465],[1118,5331],[1115,5290],[1172,5222],[1150,5155],[1062,5134],[1077,5183],[865,5221],[845,5191],[798,5195],[750,5249],[665,5245]]]}},{"type":"Feature","id":"DE.NW.05558000","properties":{"hc-group":"admin2","hc-middle-x":0.37,"hc-middle-y":0.36,"hc-key":"de-nw-05558000","hc-a2":"CO","name":"Coesfeld","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[561,5392],[604,5369],[665,5245],[650,5219],[635,5211],[606,5218],[495,5175],[432,5248],[393,5219],[417,5184],[379,5149],[284,5210],[258,5332],[179,5373],[102,5423],[81,5478],[121,5633],[198,5690],[269,5703],[411,5620],[478,5616],[447,5554],[474,5467],[561,5392]]]}},{"type":"Feature","id":"DE.HE.06431000","properties":{"hc-group":"admin2","hc-middle-x":0.67,"hc-middle-y":0.36,"hc-key":"de-he-06431000","hc-a2":"BE","name":"BergstraÃŸe","bundesland":"DE.HE"},"geometry":{"type":"MultiPolygon","coordinates":[[[[1237,2227],[1230,2243],[1178,2360],[1260,2433],[1262,2436],[1262,2437],[1304,2422],[1363,2429],[1521,2424],[1578,2442],[1576,2367],[1637,2326],[1671,2113],[1607,2101],[1498,2154],[1472,2273],[1477,2274],[1472,2280],[1471,2280],[1470,2285],[1393,2264],[1418,2172],[1381,2137],[1355,2138],[1275,2235],[1237,2227]]],[[[1670,2087],[1681,2088],[1700,2067],[1629,1964],[1604,2066],[1670,2087]]]]}},{"type":"Feature","id":"DE.RP.07331000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.47,"hc-key":"de-rp-07331000","hc-a2":"AW","name":"Alzey-Worms","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[1262,2437],[1262,2436],[1260,2433],[1175,2433],[1166,2367],[1089,2375],[1086,2239],[1040,2282],[992,2290],[995,2334],[948,2390],[820,2397],[810,2472],[771,2468],[792,2550],[825,2580],[917,2633],[903,2651],[1019,2671],[1069,2563],[1068,2487],[1112,2459],[1142,2508],[1219,2535],[1241,2485],[1289,2469],[1262,2437]]]}},{"type":"Feature","id":"DE.NI.03153000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.36,"hc-key":"de-ni-03153000","hc-a2":"GO","name":"Goslar","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[3242,5120],[3240,5116],[3221,5114],[3125,5170],[3070,5146],[3037,5190],[3063,5285],[2958,5319],[2941,5290],[2872,5300],[2837,5379],[2762,5322],[2724,5379],[2719,5474],[2683,5508],[2701,5554],[2791,5549],[2802,5622],[2848,5631],[2871,5660],[2906,5632],[3029,5680],[3038,5623],[3086,5576],[3109,5623],[3185,5554],[3157,5509],[3188,5489],[3128,5398],[3144,5293],[3211,5215],[3242,5120]]]}},{"type":"Feature","id":"DE.HE.06611000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.57,"hc-key":"de-he-06611000","hc-a2":"KA","name":"Kassel","bundesland":"DE.HE"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2259,4682],[2252,4620],[2186,4573],[2093,4601],[2086,4693],[2250,4698],[2251,4694],[2259,4682]]],[[[2244,4713],[2242,4709],[2228,4716],[2244,4713]]]]}},{"type":"Feature","id":"DE.NI.03152000","properties":{"hc-group":"admin2","hc-middle-x":0.44,"hc-middle-y":0.38,"hc-key":"de-ni-03152000","hc-a2":"GÃ–","name":"GÃ¶ttingen","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[2259,4682],[2251,4694],[2250,4698],[2249,4703],[2242,4709],[2244,4713],[2325,4792],[2324,4859],[2276,4938],[2327,4980],[2339,4988],[2348,5002],[2358,5000],[2359,5022],[2396,5064],[2590,5057],[2585,5077],[2694,5064],[2771,5117],[2906,5066],[2897,5008],[2952,4993],[2896,4906],[2738,4814],[2687,4820],[2574,4735],[2554,4799],[2456,4778],[2463,4750],[2377,4718],[2435,4637],[2404,4621],[2319,4651],[2260,4682],[2260,4682],[2260,4682],[2260,4682],[2259,4682]],[[2898,5056],[2900,5052],[2904,5052],[2904,5055],[2898,5056]]]}},{"type":"Feature","id":"DE.HE.06633000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.37,"hc-key":"de-he-06633000","hc-a2":"KA","name":"Kassel","bundesland":"DE.HE"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2359,5022],[2358,5000],[2348,5002],[2307,5009],[2327,4980],[2276,4938],[2324,4859],[2325,4792],[2244,4713],[2228,4716],[2242,4709],[2249,4703],[2250,4698],[2086,4693],[2093,4601],[2186,4573],[2252,4620],[2260,4682],[2260,4682],[2260,4682],[2319,4651],[2404,4621],[2336,4636],[2328,4597],[2382,4585],[2386,4591],[2389,4592],[2385,4584],[2424,4575],[2365,4550],[2321,4463],[2293,4446],[2217,4518],[2024,4549],[1995,4482],[1929,4443],[1845,4580],[1873,4592],[1851,4714],[1910,4756],[1898,4824],[1951,4878],[2031,4922],[2038,4978],[2082,5036],[2055,5065],[2145,5115],[2194,5089],[2307,5098],[2359,5022]]],[[[2259,4682],[2260,4682],[2260,4682],[2260,4682],[2260,4682],[2259,4682]]]]}},{"type":"Feature","id":"DE.NW.05315000","properties":{"hc-group":"admin2","hc-middle-x":0.23,"hc-middle-y":0.64,"hc-key":"de-nw-05315000","hc-a2":"KÃ–","name":"KÃ¶ln","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-128,4350],[-121,4335],[-89,4322],[-26,4249],[58,4254],[72,4168],[124,4147],[114,4063],[135,4040],[72,3994],[37,4018],[-25,4007],[-69,4003],[-78,4080],[-132,4099],[-173,4162],[-139,4217],[-143,4273],[-199,4325],[-172,4302],[-128,4350]]]}},{"type":"Feature","id":"DE.TH.16065000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.50,"hc-key":"de-th-16065000","hc-a2":"KY","name":"KyffhÃ¤userkreis","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3857,4742],[3857,4734],[3864,4728],[3863,4721],[3868,4718],[3871,4715],[3874,4719],[3889,4720],[3889,4715],[3876,4706],[3930,4654],[3879,4577],[3855,4583],[3812,4638],[3782,4578],[3740,4605],[3710,4563],[3574,4682],[3575,4646],[3521,4602],[3519,4538],[3450,4514],[3356,4536],[3263,4525],[3232,4612],[3167,4668],[3098,4645],[3061,4698],[3086,4718],[3095,4736],[3123,4776],[3186,4755],[3262,4782],[3310,4771],[3340,4811],[3410,4788],[3491,4825],[3572,4830],[3645,4794],[3791,4811],[3859,4772],[3857,4742]]]}},{"type":"Feature","id":"DE.TH.16061000","properties":{"hc-group":"admin2","hc-middle-x":0.59,"hc-middle-y":0.50,"hc-key":"de-th-16061000","hc-a2":"EI","name":"Eichsfeld","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3095,4736],[3086,4718],[3061,4698],[2981,4697],[2918,4567],[2805,4522],[2822,4480],[2699,4530],[2691,4597],[2614,4609],[2574,4735],[2687,4820],[2738,4814],[2896,4906],[2952,4993],[2955,5038],[3059,5022],[3054,4981],[3101,4951],[3062,4816],[3095,4736]],[[3048,4798],[3055,4797],[3054,4803],[3048,4801],[3048,4798]]]}},{"type":"Feature","id":"DE.SL.10043000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.29,"hc-key":"de-sl-10043000","hc-a2":"NE","name":"Neunkirchen","bundesland":"DE.SL"},"geometry":{"type":"Polygon","coordinates":[[[-114,1963],[-137,2014],[-71,2044],[-7,2004],[74,2012],[129,2046],[169,2031],[187,2020],[205,1998],[138,1945],[179,1879],[101,1831],[41,1864],[-43,1935],[-114,1963]]]}},{"type":"Feature","id":"DE.SL.10044000","properties":{"hc-group":"admin2","hc-middle-x":0.31,"hc-middle-y":0.60,"hc-key":"de-sl-10044000","hc-a2":"SA","name":"Saarlouis","bundesland":"DE.SL"},"geometry":{"type":"Polygon","coordinates":[[[-71,2044],[-137,2014],[-114,1963],[-181,1918],[-175,1857],[-282,1751],[-322,1747],[-347,1743],[-368,1834],[-440,1895],[-462,1943],[-426,1957],[-465,2031],[-388,2018],[-329,1966],[-245,2020],[-244,2082],[-140,2137],[-128,2091],[-92,2116],[-71,2044]]]}},{"type":"Feature","id":"DE.NW.05562000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.49,"hc-key":"de-nw-05562000","hc-a2":"RE","name":"Recklinghausen","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[27,4973],[20,4976],[17,4975],[-51,5018],[4,5107],[-63,5120],[-29,5235],[-51,5274],[-44,5318],[46,5347],[80,5314],[179,5373],[258,5332],[284,5210],[379,5149],[421,5078],[385,5058],[315,5027],[335,4962],[292,4952],[283,4957],[274,4967],[266,5002],[145,4998],[80,5087],[16,5099],[27,4973]]]}},{"type":"Feature","id":"DE.RP.07312000","properties":{"hc-group":"admin2","hc-middle-x":0.97,"hc-middle-y":0.60,"hc-key":"de-rp-07312000","hc-a2":"KA","name":"Kaiserslautern","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[711,1924],[710,1922],[704,1919],[639,1971],[570,1958],[518,2045],[581,2112],[612,2080],[670,2096],[722,2048],[731,1988],[681,1971],[711,1924]]]}},{"type":"Feature","id":"DE.NW.05358000","properties":{"hc-group":"admin2","hc-middle-x":0.58,"hc-middle-y":0.67,"hc-key":"de-nw-05358000","hc-a2":"DÃœ","name":"DÃ¼ren","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-477,4304],[-459,4291],[-478,4276],[-431,4096],[-342,3990],[-268,4006],[-283,3893],[-299,3838],[-341,3864],[-382,3820],[-408,3688],[-536,3699],[-569,3784],[-609,3761],[-650,3799],[-588,3908],[-583,3952],[-630,4086],[-668,4058],[-713,4115],[-685,4160],[-715,4182],[-633,4264],[-477,4304]]]}},{"type":"Feature","id":"DE.SN.14729000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.61,"hc-key":"de-sn-14729000","hc-a2":"LE","name":"Leipzig","bundesland":"DE.SN"},"geometry":{"type":"Polygon","coordinates":[[[4559,4731],[4583,4745],[4601,4755],[4621,4601],[4669,4610],[4702,4668],[4784,4671],[4813,4638],[4862,4707],[4824,4782],[4952,4849],[4948,4902],[5070,4946],[5151,4918],[5209,4870],[5176,4855],[5208,4810],[5155,4715],[5204,4675],[5208,4602],[5146,4509],[5187,4480],[5175,4426],[5058,4438],[5036,4373],[5054,4285],[4954,4257],[4872,4282],[4841,4371],[4734,4381],[4694,4416],[4653,4397],[4597,4421],[4573,4464],[4585,4523],[4542,4650],[4519,4711],[4559,4731]]]}},{"type":"Feature","id":"DE.ST.14730000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.32,"hc-key":"de-st-14730000","hc-a2":"NO","name":"Nordsachsen","bundesland":"DE.ST"},"geometry":{"type":"Polygon","coordinates":[[[4601,4755],[4583,4745],[4559,4731],[4511,4912],[4558,4944],[4551,5009],[4579,5052],[4632,5053],[4678,5092],[4745,5089],[4776,5120],[4861,5131],[4877,5157],[4937,5152],[4969,5212],[5036,5193],[5102,5251],[5166,5197],[5250,5230],[5285,5208],[5325,5152],[5386,5136],[5431,5044],[5415,4965],[5443,4877],[5421,4834],[5459,4688],[5447,4632],[5315,4602],[5208,4602],[5204,4675],[5155,4715],[5208,4810],[5176,4855],[5209,4870],[5151,4918],[5070,4946],[4948,4902],[4952,4849],[4824,4782],[4768,4902],[4731,4858],[4619,4856],[4601,4755]]]}},{"type":"Feature","id":"DE.NI.03402000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.38,"hc-key":"de-ni-03402000","hc-a2":"EM","name":"Emden","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[346,7508],[343,7508],[340,7471],[103,7501],[88,7528],[120,7517],[208,7578],[245,7563],[321,7587],[346,7508]]]}},{"type":"Feature","id":"DE.BW.08221000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.56,"hc-key":"de-bw-08221000","hc-a2":"HE","name":"Heidelberg","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1373,1992],[1373,2003],[1382,2007],[1531,2035],[1574,1976],[1510,1910],[1398,1922],[1430,1959],[1373,1992]]]}},{"type":"Feature","id":"DE.ST.15083000","properties":{"hc-group":"admin2","hc-middle-x":0.35,"hc-middle-y":0.51,"hc-key":"de-st-15083000","hc-a2":"BÃ–","name":"BÃ¶rde","bundesland":"DE.ST"},"geometry":{"type":"Polygon","coordinates":[[[3414,6285],[3421,6314],[3476,6322],[3521,6330],[3536,6286],[3602,6237],[3798,6239],[3858,6209],[3855,6179],[3953,6216],[3972,6284],[4068,6288],[4086,6221],[4191,6212],[4174,6171],[4205,6115],[4188,6113],[4176,6117],[4155,6145],[4165,6118],[4081,5986],[4086,5925],[4026,5963],[4037,5922],[3970,5887],[3934,5735],[4002,5741],[4036,5687],[4006,5670],[4005,5596],[3929,5588],[3847,5644],[3787,5583],[3811,5544],[3787,5498],[3716,5492],[3629,5547],[3621,5630],[3560,5645],[3547,5682],[3455,5705],[3464,5774],[3523,5819],[3533,5869],[3493,5882],[3546,5934],[3507,6062],[3461,6104],[3534,6129],[3439,6234],[3414,6285]]]}},{"type":"Feature","id":"DE.BW.08326000","properties":{"hc-group":"admin2","hc-middle-x":0.44,"hc-middle-y":0.28,"hc-key":"de-bw-08326000","hc-a2":"SB","name":"Schwarzwald-Baar-Kreis","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1424,-190],[1410,-247],[1399,-265],[1362,-267],[1301,-299],[1297,-223],[1234,-190],[1209,-121],[1082,-42],[1119,4],[1008,-7],[953,29],[928,106],[981,122],[945,192],[996,273],[1037,237],[1092,255],[1235,268],[1310,246],[1334,172],[1391,118],[1428,60],[1446,-28],[1376,-64],[1379,-123],[1424,-190]]]}},{"type":"Feature","id":"DE.BW.08212000","properties":{"hc-group":"admin2","hc-middle-x":0.17,"hc-middle-y":0.36,"hc-key":"de-bw-08212000","hc-a2":"KA","name":"Karlsruhe","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1097,1399],[1134,1497],[1156,1524],[1321,1454],[1302,1401],[1341,1355],[1310,1331],[1199,1351],[1146,1397],[1097,1399]]]}},{"type":"Feature","id":"DE.RP.07334000","properties":{"hc-group":"admin2","hc-middle-x":0.25,"hc-middle-y":0.90,"hc-key":"de-rp-07334000","hc-a2":"GE","name":"Germersheim","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[1156,1524],[1134,1497],[1097,1399],[1090,1393],[1083,1386],[1062,1370],[1056,1366],[968,1386],[905,1414],[908,1502],[953,1598],[1001,1605],[1038,1566],[1087,1589],[1080,1654],[1044,1652],[1059,1777],[1141,1827],[1184,1805],[1225,1761],[1182,1642],[1156,1524]]]}},{"type":"Feature","id":"DE.BW.08216000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.71,"hc-key":"de-bw-08216000","hc-a2":"RA","name":"Rastatt","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1224,1182],[1212,1175],[1192,1179],[1178,1189],[1189,1176],[1239,1091],[1286,1071],[1247,933],[1215,908],[1131,837],[1041,859],[1021,894],[904,956],[818,979],[800,1023],[820,1082],[935,1163],[965,1257],[1029,1357],[1056,1366],[1062,1370],[1083,1386],[1082,1354],[1168,1321],[1113,1291],[1121,1221],[1224,1182]],[[1088,1130],[1017,1183],[974,1121],[1024,1081],[963,1034],[1049,995],[1091,950],[1134,1035],[1088,1130]]]}},{"type":"Feature","id":"DE.NW.05362000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.45,"hc-key":"de-nw-05362000","hc-a2":"RE","name":"Rhein-Erft-Kreis","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-25,4007],[17,3950],[-68,3958],[-131,3932],[-211,3841],[-283,3893],[-268,4006],[-342,3990],[-431,4096],[-478,4276],[-459,4291],[-394,4319],[-373,4265],[-253,4257],[-199,4325],[-143,4273],[-139,4217],[-173,4162],[-132,4099],[-78,4080],[-69,4003],[-25,4007]]]}},{"type":"Feature","id":"DE.NW.05382000","properties":{"hc-group":"admin2","hc-middle-x":0.71,"hc-middle-y":0.31,"hc-key":"de-nw-05382000","hc-a2":"RS","name":"Rhein-Sieg-Kreis","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-131,3932],[-68,3958],[17,3950],[-25,4007],[37,4018],[72,3994],[135,4040],[169,4050],[215,4123],[300,4099],[348,4150],[388,4146],[418,4094],[401,4053],[477,3981],[499,3997],[576,3965],[589,3907],[537,3895],[378,3816],[319,3827],[304,3731],[172,3698],[173,3729],[172,3734],[136,3811],[174,3856],[100,3911],[21,3889],[9,3746],[34,3713],[79,3750],[158,3725],[114,3667],[67,3649],[33,3677],[-20,3621],[-83,3614],[-120,3674],[-91,3713],[-142,3749],[-143,3802],[-87,3859],[-131,3932]]]}},{"type":"Feature","id":"DE.RP.07131000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.56,"hc-key":"de-rp-07131000","hc-a2":"AH","name":"Ahrweiler","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[172,3734],[173,3729],[172,3698],[170,3654],[217,3628],[286,3490],[252,3476],[206,3376],[136,3402],[-18,3355],[-41,3319],[-78,3271],[-193,3296],[-204,3342],[-216,3425],[-252,3454],[-199,3523],[-152,3470],[-110,3489],[-120,3543],[-83,3614],[-20,3621],[33,3677],[67,3649],[114,3667],[158,3725],[161,3733],[172,3734]]]}},{"type":"Feature","id":"DE.BY.09671000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.30,"hc-key":"de-by-09671000","hc-a2":"AS","name":"Aschaffenburg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[1859,2711],[1848,2633],[1807,2620],[1791,2702],[1777,2795],[1790,2862],[1754,2901],[1778,2963],[1871,2983],[1896,2934],[1961,3016],[2094,2992],[2126,2931],[2130,2804],[2170,2736],[2144,2642],[2093,2574],[1997,2627],[2016,2684],[1977,2716],[1902,2806],[1834,2818],[1859,2711]]]}},{"type":"Feature","id":"DE.RP.07137000","properties":{"hc-group":"admin2","hc-middle-x":0.69,"hc-middle-y":0.41,"hc-key":"de-rp-07137000","hc-a2":"MK","name":"Mayen-Koblenz","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[511,3468],[577,3407],[568,3351],[529,3338],[486,3393],[408,3328],[447,3287],[438,3231],[513,3230],[545,3197],[539,3162],[518,3187],[432,3175],[388,3103],[309,3048],[212,3178],[117,3220],[32,3221],[-52,3260],[7,3299],[-41,3319],[-18,3355],[136,3402],[206,3376],[252,3476],[286,3490],[402,3397],[468,3405],[511,3468]]]}},{"type":"Feature","id":"DE.RP.07141000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.42,"hc-key":"de-rp-07141000","hc-a2":"RL","name":"Rhein-Lahn-Kreis","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[539,3162],[545,3197],[513,3230],[501,3274],[556,3272],[590,3321],[662,3336],[743,3301],[765,3377],[843,3381],[887,3370],[959,3269],[975,3199],[885,3174],[918,3140],[794,3105],[759,3068],[804,3015],[798,2958],[738,2993],[707,2929],[659,2909],[657,2925],[651,2932],[597,3046],[488,3156],[539,3162]]]}},{"type":"Feature","id":"DE.RP.07111000","properties":{"hc-group":"admin2","hc-middle-x":0.43,"hc-middle-y":0.52,"hc-key":"de-rp-07111000","hc-a2":"KO","name":"Koblenz","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[590,3321],[556,3272],[501,3274],[513,3230],[438,3231],[447,3287],[408,3328],[486,3393],[529,3338],[568,3351],[596,3329],[590,3321]]]}},{"type":"Feature","id":"DE.BW.08135000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.42,"hc-key":"de-bw-08135000","hc-a2":"HE","name":"Heidenheim","bundesland":"DE.BW"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2909,728],[2913,729],[2911,720],[2909,728]]],[[[2949,743],[2926,746],[2905,735],[2857,791],[2795,797],[2726,867],[2656,849],[2636,900],[2658,957],[2675,1034],[2809,1090],[2825,1120],[2952,1078],[2982,1047],[3078,1065],[3113,1044],[3138,999],[3068,948],[3081,995],[3013,938],[3009,973],[2936,1005],[2923,950],[2988,874],[2961,846],[2980,753],[2949,743]]]]}},{"type":"Feature","id":"DE.NI.03354000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.50,"hc-key":"de-ni-03354000","hc-a2":"LD","name":"LÃ¼chow-Dannenberg","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[3876,7038],[3878,6956],[3704,6858],[3640,6887],[3536,6906],[3453,6901],[3404,6819],[3321,6815],[3288,6877],[3333,6960],[3316,6993],[3359,7020],[3306,7129],[3238,7192],[3276,7225],[3366,7231],[3324,7372],[3515,7221],[3560,7264],[3588,7248],[3624,7232],[3668,7202],[3745,7110],[3834,7143],[3867,7110],[3952,7091],[3952,7091],[3876,7038]]]}},{"type":"Feature","id":"DE.ST.15090000","properties":{"hc-group":"admin2","hc-middle-x":0.65,"hc-middle-y":0.53,"hc-key":"de-st-15090000","hc-a2":"ST","name":"Stendal","bundesland":"DE.ST"},"geometry":{"type":"MultiPolygon","coordinates":[[[[3876,7038],[3952,7091],[3952,7091],[4167,6965],[4148,6937],[4284,6880],[4406,6905],[4406,6854],[4466,6891],[4497,6868],[4516,6773],[4477,6671],[4515,6604],[4511,6545],[4461,6538],[4442,6400],[4468,6371],[4419,6369],[4386,6414],[4314,6382],[4308,6461],[4288,6375],[4325,6303],[4276,6177],[4205,6115],[4174,6171],[4191,6212],[4086,6221],[4068,6288],[3972,6284],[3953,6376],[3965,6504],[3822,6492],[3801,6507],[3880,6553],[3865,6601],[3899,6623],[3905,6780],[3852,6816],[3985,6840],[3992,6898],[3878,6956],[3876,7038]],[[4486,6868],[4489,6870],[4488,6872],[4484,6869],[4486,6868]]],[[[4176,6117],[4170,6118],[4165,6118],[4155,6145],[4176,6117]]]]}},{"type":"Feature","id":"DE.BY.09780000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.50,"hc-key":"de-by-09780000","hc-a2":"OB","name":"OberallgÃ¤u","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3154,-552],[3114,-566],[3138,-596],[3117,-669],[3161,-768],[3088,-847],[3043,-930],[2934,-998],[2878,-999],[2936,-854],[2926,-833],[2824,-852],[2806,-882],[2780,-799],[2810,-779],[2751,-697],[2710,-705],[2678,-616],[2766,-567],[2779,-485],[2828,-433],[2814,-314],[2765,-280],[2827,-231],[2944,-175],[3010,-175],[3056,-246],[3113,-257],[3147,-337],[3138,-406],[3175,-412],[3182,-478],[3154,-552]],[[3052,-379],[3053,-308],[2929,-299],[2966,-393],[3052,-379]]]}},{"type":"Feature","id":"DE.BY.09376000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.36,"hc-key":"de-by-09376000","hc-a2":"SC","name":"Schwandorf","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[5030,2245],[5077,2221],[5071,2155],[4975,2110],[5004,2071],[4950,2050],[4941,1860],[4894,1866],[4866,1762],[4829,1767],[4797,1689],[4721,1698],[4673,1782],[4600,1668],[4552,1704],[4516,1687],[4451,1734],[4456,1747],[4448,1771],[4491,1815],[4453,1849],[4558,1998],[4484,2046],[4527,2066],[4523,2155],[4578,2150],[4559,2190],[4595,2234],[4660,2295],[4760,2198],[4893,2210],[4928,2256],[4971,2232],[5030,2245]],[[4859,1816],[4852,1816],[4852,1814],[4860,1814],[4859,1816]],[[4850,1808],[4852,1811],[4849,1811],[4846,1807],[4850,1808]],[[4877,1851],[4876,1849],[4882,1849],[4883,1851],[4877,1851]],[[4841,1841],[4842,1839],[4848,1839],[4846,1841],[4841,1841]],[[4849,1814],[4851,1821],[4848,1820],[4847,1818],[4849,1814]],[[4871,1828],[4863,1833],[4858,1835],[4867,1829],[4871,1828]],[[4859,1851],[4862,1847],[4868,1847],[4862,1852],[4859,1851]]]}},{"type":"Feature","id":"DE.ST.15086000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.65,"hc-key":"de-st-15086000","hc-a2":"JL","name":"Jerichower Land","bundesland":"DE.ST"},"geometry":{"type":"Polygon","coordinates":[[[4142,5750],[4144,5752],[4143,5755],[4137,5771],[4129,5778],[4071,5907],[4086,5925],[4081,5986],[4165,6118],[4170,6118],[4176,6117],[4188,6113],[4205,6115],[4276,6177],[4325,6303],[4288,6375],[4308,6461],[4314,6382],[4386,6414],[4419,6369],[4468,6371],[4539,6391],[4595,6303],[4573,6176],[4595,6150],[4546,6012],[4592,5988],[4527,5902],[4583,5812],[4529,5808],[4500,5770],[4411,5765],[4354,5699],[4257,5656],[4204,5739],[4142,5750]],[[4566,5988],[4573,5987],[4574,5990],[4564,5990],[4566,5988]],[[4575,5987],[4575,5986],[4582,5985],[4583,5986],[4575,5987]]]}},{"type":"Feature","id":"DE.NW.05913000","properties":{"hc-group":"admin2","hc-middle-x":0.74,"hc-middle-y":0.63,"hc-key":"de-nw-05913000","hc-a2":"DO","name":"Dortmund","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[292,4952],[335,4962],[315,5027],[385,5058],[480,5024],[534,5032],[574,4954],[538,4929],[458,4803],[438,4803],[420,4801],[384,4825],[320,4896],[297,4906],[292,4952]]]}},{"type":"Feature","id":"DE.NW.05911000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.55,"hc-key":"de-nw-05911000","hc-a2":"BO","name":"Bochum","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[292,4952],[297,4906],[320,4896],[234,4801],[133,4821],[111,4874],[107,4899],[137,4912],[139,4933],[185,4937],[274,4967],[283,4957],[292,4952]]]}},{"type":"Feature","id":"DE.NW.05916000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.47,"hc-key":"de-nw-05916000","hc-a2":"HE","name":"Herne","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[274,4967],[185,4937],[139,4933],[126,4991],[145,4998],[266,5002],[274,4967]]]}},{"type":"Feature","id":"DE.NW.05513000","properties":{"hc-group":"admin2","hc-middle-x":0.91,"hc-middle-y":0.89,"hc-key":"de-nw-05513000","hc-a2":"GE","name":"Gelsenkirchen","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[139,4933],[137,4912],[107,4899],[78,4905],[27,4973],[16,5099],[80,5087],[145,4998],[126,4991],[139,4933]]]}},{"type":"Feature","id":"DE.NI.03401000","properties":{"hc-group":"admin2","hc-middle-x":0.32,"hc-middle-y":0.53,"hc-key":"de-ni-03401000","hc-a2":"DE","name":"Delmenhorst","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[1519,7064],[1495,7052],[1473,7015],[1417,6983],[1422,7090],[1455,7141],[1460,7151],[1472,7154],[1517,7109],[1519,7064]]]}},{"type":"Feature","id":"DE.NI.03251000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.58,"hc-key":"de-ni-03251000","hc-a2":"DI","name":"Diepholz","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[1473,7015],[1495,7052],[1519,7064],[1569,7076],[1609,7034],[1691,7017],[1681,6956],[1722,6846],[1763,6896],[1860,6857],[1855,6810],[1791,6776],[1818,6732],[1799,6612],[1766,6515],[1662,6485],[1671,6376],[1571,6349],[1509,6303],[1466,6347],[1384,6302],[1343,6324],[1265,6226],[1162,6244],[1168,6267],[1172,6304],[1203,6409],[1176,6422],[1161,6516],[1176,6567],[1314,6633],[1304,6725],[1460,6809],[1469,6887],[1503,6890],[1499,6956],[1469,6953],[1473,7015]]]}},{"type":"Feature","id":"DE.NI.03352000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.33,"hc-key":"de-ni-03352000","hc-a2":"CU","name":"Cuxhaven","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[1344,7516],[1338,7591],[1339,7664],[1433,7680],[1471,7717],[1423,7832],[1363,7851],[1333,7975],[1403,8186],[1444,8236],[1504,8249],[1586,8169],[1682,8160],[1744,8176],[1787,8156],[1880,8121],[1946,8058],[1979,8076],[2010,8022],[1935,7955],[1994,7937],[1993,7902],[1886,7830],[1851,7777],[1820,7801],[1676,7724],[1730,7711],[1740,7658],[1685,7615],[1724,7577],[1687,7533],[1590,7547],[1541,7508],[1565,7477],[1535,7423],[1478,7398],[1346,7413],[1344,7516]],[[1469,7855],[1466,7849],[1477,7845],[1480,7851],[1469,7855]]]}},{"type":"Feature","id":"DE.BY.09779000","properties":{"hc-group":"admin2","hc-middle-x":0.35,"hc-middle-y":0.44,"hc-key":"de-by-09779000","hc-a2":"DR","name":"Donau-Ries","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3138,999],[3113,1044],[3078,1065],[3098,1160],[3104,1307],[3059,1390],[3092,1432],[3183,1437],[3192,1472],[3272,1449],[3262,1415],[3321,1360],[3310,1306],[3354,1294],[3425,1358],[3440,1287],[3548,1241],[3605,1215],[3613,1185],[3559,1168],[3608,1105],[3598,1004],[3636,904],[3594,872],[3546,855],[3507,924],[3411,896],[3262,988],[3287,1059],[3177,1077],[3138,999]]]}},{"type":"Feature","id":"DE.BY.09563000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.46,"hc-key":"de-by-09563000","hc-a2":"FÃœ","name":"FÃ¼rth","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3570,2184],[3605,2146],[3576,2044],[3499,2084],[3521,2179],[3553,2178],[3570,2184]]]}},{"type":"Feature","id":"DE.BY.09562000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.49,"hc-key":"de-by-09562000","hc-a2":"ER","name":"Erlangen","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3570,2184],[3553,2178],[3521,2179],[3520,2179],[3520,2184],[3512,2334],[3568,2291],[3614,2295],[3609,2183],[3571,2189],[3570,2184]]]}},{"type":"Feature","id":"DE.BY.09573000","properties":{"hc-group":"admin2","hc-middle-x":0.19,"hc-middle-y":0.72,"hc-key":"de-by-09573000","hc-a2":"FÃœ","name":"FÃ¼rth","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3520,2184],[3520,2179],[3521,2179],[3499,2084],[3576,2044],[3609,1986],[3580,1967],[3522,1931],[3467,1928],[3352,1987],[3309,2037],[3292,2117],[3391,2142],[3414,2178],[3499,2191],[3520,2184]]]}},{"type":"Feature","id":"DE.TH.16073000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.45,"hc-key":"de-th-16073000","hc-a2":"SR","name":"Saalfeld-Rudolstadt","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3537,3570],[3515,3585],[3515,3603],[3587,3602],[3621,3682],[3597,3763],[3548,3793],[3622,3809],[3624,3853],[3705,3866],[3690,3915],[3730,3960],[3776,3983],[3819,3950],[3854,3981],[3909,3973],[3966,3931],[4019,3895],[3958,3845],[4020,3693],[4105,3677],[4043,3613],[3981,3606],[3978,3447],[3923,3462],[3923,3564],[3853,3569],[3783,3508],[3730,3523],[3683,3595],[3620,3547],[3537,3570]]]}},{"type":"Feature","id":"DE.HE.06435000","properties":{"hc-group":"admin2","hc-middle-x":0.65,"hc-middle-y":0.49,"hc-key":"de-he-06435000","hc-a2":"MK","name":"Main-Kinzig-Kreis","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1565,2999],[1568,3029],[1573,3054],[1606,3089],[1592,3139],[1624,3191],[1689,3191],[1783,3140],[1895,3151],[1944,3203],[2018,3419],[2020,3453],[2078,3417],[2066,3368],[2117,3353],[2190,3425],[2198,3385],[2263,3342],[2310,3360],[2417,3308],[2431,3250],[2333,3161],[2321,3130],[2248,3123],[2211,3149],[2236,3044],[2212,2945],[2126,2931],[2094,2992],[1961,3016],[1896,2934],[1871,2983],[1778,2963],[1754,2901],[1649,2940],[1660,2982],[1598,2994],[1572,2999],[1565,2999]]]}},{"type":"Feature","id":"DE.SN.14625000","properties":{"hc-group":"admin2","hc-middle-x":0.44,"hc-middle-y":0.58,"hc-key":"de-sn-14625000","hc-a2":"BA","name":"Bautzen","bundesland":"DE.SN"},"geometry":{"type":"Polygon","coordinates":[[[6262,5120],[6421,5100],[6510,5140],[6542,5043],[6586,4991],[6539,4867],[6560,4833],[6605,4875],[6673,4823],[6694,4716],[6767,4651],[6704,4559],[6666,4559],[6655,4504],[6581,4482],[6600,4446],[6541,4408],[6446,4451],[6447,4469],[6327,4488],[6135,4439],[6079,4466],[6034,4568],[6017,4548],[5950,4586],[5990,4716],[5965,4764],[5992,4871],[6095,4907],[6137,4875],[6216,5090],[6262,5120]]]}},{"type":"Feature","id":"DE.BB.12065000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.72,"hc-key":"de-bb-12065000","hc-a2":"OB","name":"Oberhavel","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[5327,7395],[5385,7358],[5367,7305],[5473,7160],[5574,7106],[5485,7029],[5486,7029],[5485,7024],[5483,7027],[5477,7022],[5491,6990],[5542,7005],[5535,6958],[5588,6910],[5569,6860],[5509,6843],[5498,6809],[5502,6624],[5471,6587],[5353,6587],[5344,6528],[5307,6543],[5235,6652],[5093,6700],[5014,6661],[5089,6735],[5083,6805],[5133,6840],[5126,6902],[5181,6894],[5158,6965],[5182,6982],[5180,7085],[5152,7197],[5107,7196],[5075,7238],[5135,7299],[5110,7325],[5208,7402],[5204,7430],[5267,7455],[5320,7432],[5320,7432],[5327,7395]]]}},{"type":"Feature","id":"DE.BB.12073000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.57,"hc-key":"de-bb-12073000","hc-a2":"UC","name":"Uckermark","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[5327,7395],[5320,7432],[5320,7432],[5363,7503],[5416,7502],[5455,7459],[5480,7536],[5519,7528],[5549,7569],[5564,7681],[5626,7699],[5635,7753],[5690,7801],[5748,7798],[5786,7835],[5744,7853],[5745,7907],[5829,7846],[5869,7733],[5937,7756],[5981,7729],[6037,7773],[6124,7769],[6131,7663],[6036,7520],[6176,7527],[6213,7604],[6292,7634],[6330,7539],[6276,7453],[6291,7372],[6259,7234],[6178,7153],[6104,7103],[6006,7089],[5977,7055],[5924,7117],[5832,7122],[5877,7215],[5818,7218],[5732,7181],[5702,7131],[5574,7106],[5473,7160],[5367,7305],[5385,7358],[5327,7395]]]}},{"type":"Feature","id":"DE.NI.03454000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.43,"hc-key":"de-ni-03454000","hc-a2":"EM","name":"Emsland","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[648,6563],[581,6485],[573,6277],[541,6220],[568,6203],[539,6145],[424,6084],[319,6012],[269,6097],[235,6246],[289,6277],[277,6379],[222,6375],[194,6425],[66,6520],[107,6527],[128,6759],[143,6813],[226,6939],[255,7036],[250,7179],[403,7165],[485,7136],[536,7061],[593,7094],[676,7033],[700,6937],[768,6908],[727,6828],[672,6802],[645,6728],[672,6687],[603,6629],[648,6563]]]}},{"type":"Feature","id":"DE.BY.09189000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.36,"hc-key":"de-by-09189000","hc-a2":"TR","name":"Traunstein","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[5272,255],[5291,193],[5378,113],[5399,51],[5378,-22],[5405,-68],[5287,-62],[5273,-142],[5315,-197],[5371,-201],[5387,-241],[5268,-275],[5249,-349],[5157,-375],[5138,-424],[5067,-437],[4997,-341],[4910,-343],[4951,-178],[4924,-101],[4965,-92],[4996,-24],[4884,49],[4908,137],[4884,206],[4931,246],[4985,240],[5024,304],[5096,312],[5075,283],[5150,156],[5211,158],[5224,241],[5272,255]],[[4974,-102],[4976,-99],[4976,-98],[4973,-99],[4974,-102]],[[4982,-96],[4985,-91],[4982,-89],[4981,-93],[4982,-96]],[[4966,-109],[4952,-96],[4950,-122],[4968,-121],[4966,-109]],[[5286,-61],[5288,-57],[5290,-54],[5284,-56],[5286,-61]]]}},{"type":"Feature","id":"DE.SH.01057000","properties":{"hc-group":"admin2","hc-middle-x":0.63,"hc-middle-y":0.25,"hc-key":"de-sh-01057000","hc-a2":"PL","name":"PlÃ¶n","bundesland":"DE.SH"},"geometry":{"type":"Polygon","coordinates":[[[2612,8586],[2681,8593],[2682,8765],[2732,8762],[2747,8886],[2722,8892],[2769,8990],[2845,9020],[3102,8902],[3164,8844],[3178,8795],[3137,8684],[3084,8740],[3025,8733],[3021,8686],[2978,8660],[3019,8580],[2931,8574],[2928,8528],[2892,8513],[2876,8561],[2817,8550],[2712,8484],[2631,8486],[2598,8518],[2612,8586]]]}},{"type":"Feature","id":"DE.SH.01002000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.53,"hc-key":"de-sh-01002000","hc-a2":"KI","name":"Kiel","bundesland":"DE.SH"},"geometry":{"type":"Polygon","coordinates":[[[2715,9013],[2735,8954],[2695,8903],[2722,8892],[2747,8886],[2732,8762],[2682,8765],[2619,8824],[2606,8895],[2676,8924],[2715,9013]]]}},{"type":"Feature","id":"DE.NW.05154000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.22,"hc-key":"de-nw-05154000","hc-a2":"KL","name":"Kleve","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-484,5403],[-463,5367],[-413,5377],[-377,5310],[-422,5295],[-444,5225],[-488,5252],[-539,5149],[-587,5117],[-525,5070],[-523,5037],[-417,5035],[-463,4984],[-416,4897],[-408,4836],[-457,4811],[-512,4823],[-583,4757],[-667,4761],[-682,4810],[-670,4969],[-770,5103],[-744,5172],[-814,5198],[-804,5259],[-883,5307],[-848,5330],[-884,5400],[-787,5449],[-692,5428],[-734,5502],[-696,5519],[-648,5464],[-576,5462],[-484,5403]]]}},{"type":"Feature","id":"DE.BY.09182000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.90,"hc-key":"de-by-09182000","hc-a2":"MI","name":"Miesbach","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4226,-57],[4369,-21],[4398,-44],[4447,-129],[4535,-152],[4506,-201],[4586,-255],[4621,-426],[4653,-463],[4608,-459],[4460,-494],[4454,-522],[4250,-515],[4226,-490],[4289,-462],[4257,-404],[4281,-380],[4248,-256],[4262,-198],[4216,-181],[4265,-99],[4226,-57]]]}},{"type":"Feature","id":"DE.NI.03458000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.51,"hc-key":"de-ni-03458000","hc-a2":"OL","name":"Oldenburg","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[1455,7141],[1422,7090],[1417,6983],[1473,7015],[1469,6953],[1499,6956],[1503,6890],[1469,6887],[1460,6809],[1304,6725],[1316,6755],[1251,6759],[1197,6842],[1135,6829],[1114,6822],[1020,6905],[1023,7005],[962,7090],[979,7132],[1028,7157],[1089,7165],[1108,7120],[1156,7142],[1184,7218],[1248,7242],[1259,7173],[1318,7196],[1408,7174],[1455,7141]]]}},{"type":"Feature","id":"DE.NI.03157000","properties":{"hc-group":"admin2","hc-middle-x":0.60,"hc-middle-y":0.48,"hc-key":"de-ni-03157000","hc-a2":"PE","name":"Peine","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[2866,6239],[2914,6217],[2982,6077],[2986,5991],[2990,5925],[2920,5860],[2842,5869],[2834,5911],[2778,5939],[2619,5931],[2649,6006],[2690,6085],[2739,6085],[2729,6162],[2790,6207],[2834,6202],[2866,6239]]]}},{"type":"Feature","id":"DE.BY.09371000","properties":{"hc-group":"admin2","hc-middle-x":0.42,"hc-middle-y":0.50,"hc-key":"de-by-09371000","hc-a2":"AS","name":"Amberg-Sulzbach","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4082,2447],[4111,2503],[4144,2514],[4159,2499],[4159,2334],[4251,2330],[4312,2369],[4372,2347],[4462,2358],[4474,2271],[4553,2273],[4595,2234],[4559,2190],[4578,2150],[4523,2155],[4527,2066],[4484,2046],[4558,1998],[4453,1849],[4491,1815],[4448,1771],[4427,1835],[4324,1863],[4241,1929],[4194,1899],[4094,2035],[4123,2101],[4071,2155],[4100,2260],[4078,2292],[4124,2321],[4082,2447]],[[4367,2047],[4418,2083],[4378,2151],[4306,2115],[4299,2051],[4367,2047]]]}},{"type":"Feature","id":"DE.BY.09185000","properties":{"hc-group":"admin2","hc-middle-x":0.42,"hc-middle-y":0.42,"hc-key":"de-by-09185000","hc-a2":"NS","name":"Neuburg-Schrobenhausen","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3613,1185],[3676,1166],[3845,1132],[3961,1009],[4013,1025],[4020,952],[3935,893],[3972,856],[3928,843],[3956,802],[3910,766],[3895,707],[3870,691],[3812,779],[3735,813],[3770,850],[3636,904],[3598,1004],[3608,1105],[3559,1168],[3613,1185]]]}},{"type":"Feature","id":"DE.BY.09176000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.46,"hc-key":"de-by-09176000","hc-a2":"EI","name":"EichstÃ¤tt","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3845,1132],[3676,1166],[3613,1185],[3605,1215],[3548,1241],[3672,1316],[3682,1382],[3784,1504],[3826,1506],[3846,1456],[3902,1439],[3951,1468],[3952,1554],[4099,1538],[4074,1493],[4154,1383],[4262,1341],[4273,1150],[4228,1138],[4164,1190],[4123,1113],[4063,1091],[4070,1146],[3969,1191],[3967,1140],[3845,1132]]]}},{"type":"Feature","id":"DE.BY.09161000","properties":{"hc-group":"admin2","hc-middle-x":0.57,"hc-middle-y":0.38,"hc-key":"de-by-09161000","hc-a2":"IN","name":"Ingolstadt","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4063,1091],[4030,1065],[4013,1025],[3961,1009],[3845,1132],[3967,1140],[3969,1191],[4070,1146],[4063,1091]]]}},{"type":"Feature","id":"DE.SL.10046000","properties":{"hc-group":"admin2","hc-middle-x":0.24,"hc-middle-y":0.51,"hc-key":"de-sl-10046000","hc-a2":"SW","name":"St. Wendel","bundesland":"DE.SL"},"geometry":{"type":"Polygon","coordinates":[[[-71,2044],[-92,2116],[-128,2091],[-140,2137],[-99,2150],[-93,2254],[-153,2294],[-111,2299],[-28,2327],[26,2269],[83,2274],[195,2194],[218,2174],[215,2079],[169,2031],[129,2046],[74,2012],[-7,2004],[-71,2044]]]}},{"type":"Feature","id":"DE.BY.09178000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.45,"hc-key":"de-by-09178000","hc-a2":"FR","name":"Freising","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4316,444],[4201,431],[4166,471],[4159,522],[4105,541],[4114,597],[4080,665],[4140,738],[4184,704],[4234,752],[4227,841],[4270,918],[4355,918],[4420,871],[4460,881],[4505,874],[4522,754],[4555,761],[4568,669],[4513,701],[4404,637],[4353,560],[4316,444]]]}},{"type":"Feature","id":"DE.BY.09171000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.61,"hc-key":"de-by-09171000","hc-a2":"AL","name":"AltÃ¶tting","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[5446,396],[5378,385],[5358,336],[5272,255],[5224,241],[5211,158],[5150,156],[5075,283],[5096,312],[5113,342],[5085,434],[5119,486],[5082,523],[5121,585],[5241,545],[5329,533],[5395,435],[5446,396]]]}},{"type":"Feature","id":"DE.BW.08417000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.53,"hc-key":"de-bw-08417000","hc-a2":"ZO","name":"Zollernalbkreis","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1883,533],[1929,526],[1958,442],[1936,405],[1862,365],[1936,304],[1908,212],[1772,235],[1719,162],[1654,160],[1588,268],[1529,235],[1500,266],[1480,355],[1434,417],[1500,453],[1517,541],[1537,547],[1552,594],[1760,548],[1816,524],[1883,533]]]}},{"type":"Feature","id":"DE.ST.15085000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.36,"hc-key":"de-st-15085000","hc-a2":"HA","name":"Harz","bundesland":"DE.ST"},"geometry":{"type":"Polygon","coordinates":[[[3315,5690],[3379,5706],[3455,5705],[3547,5682],[3560,5645],[3621,5630],[3629,5547],[3716,5492],[3787,5498],[3784,5443],[3703,5365],[3780,5297],[3843,5315],[3847,5260],[3844,5217],[3758,5146],[3705,5133],[3707,5069],[3615,5024],[3579,5076],[3540,5060],[3525,5103],[3430,5089],[3297,5131],[3242,5120],[3211,5215],[3144,5293],[3128,5398],[3188,5489],[3157,5509],[3185,5554],[3109,5623],[3176,5641],[3183,5678],[3315,5690]]]}},{"type":"Feature","id":"DE.NI.03255000","properties":{"hc-group":"admin2","hc-middle-x":0.35,"hc-middle-y":0.42,"hc-key":"de-ni-03255000","hc-a2":"HO","name":"Holzminden","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[2042,5401],[2057,5475],[2029,5496],[2079,5524],[2077,5565],[2146,5582],[2188,5630],[2258,5661],[2322,5556],[2423,5581],[2535,5477],[2441,5417],[2384,5441],[2353,5382],[2264,5311],[2246,5241],[2145,5179],[2125,5111],[2106,5147],[2096,5265],[2151,5317],[2133,5345],[2160,5413],[2042,5401]]]}},{"type":"Feature","id":"DE.NW.05966000","properties":{"hc-group":"admin2","hc-middle-x":0.62,"hc-middle-y":0.41,"hc-key":"de-nw-05966000","hc-a2":"OL","name":"Olpe","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[747,4109],[714,4130],[690,4130],[685,4186],[638,4212],[631,4317],[725,4329],[705,4419],[832,4474],[832,4539],[940,4556],[1016,4452],[998,4409],[1048,4411],[1092,4354],[1097,4286],[1031,4221],[971,4244],[915,4218],[883,4256],[837,4248],[800,4107],[747,4109]]]}},{"type":"Feature","id":"DE.BY.09181000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.67,"hc-key":"de-by-09181000","hc-a2":"LA","name":"Landsberg am Lech","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3539,365],[3594,313],[3663,307],[3624,282],[3689,232],[3686,182],[3762,176],[3764,60],[3796,26],[3780,-25],[3720,-91],[3629,-111],[3565,-164],[3518,-142],[3424,-187],[3430,-111],[3473,33],[3464,75],[3412,79],[3448,177],[3432,241],[3501,253],[3539,365]]]}},{"type":"Feature","id":"DE.NI.03155000","properties":{"hc-group":"admin2","hc-middle-x":0.64,"hc-middle-y":0.50,"hc-key":"de-ni-03155000","hc-a2":"NO","name":"Northeim","bundesland":"DE.NI"},"geometry":{"type":"MultiPolygon","coordinates":[[[[2145,5115],[2140,5117],[2125,5111],[2145,5179],[2246,5241],[2264,5311],[2353,5382],[2384,5441],[2441,5417],[2535,5477],[2600,5465],[2655,5536],[2683,5508],[2719,5474],[2724,5379],[2762,5322],[2762,5258],[2732,5229],[2771,5117],[2694,5064],[2585,5077],[2590,5057],[2396,5064],[2359,5022],[2307,5098],[2194,5089],[2145,5115]]],[[[2348,5002],[2339,4988],[2327,4980],[2307,5009],[2348,5002]]]]}},{"type":"Feature","id":"DE.NW.05512000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.50,"hc-key":"de-nw-05512000","hc-a2":"BO","name":"Bottrop","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-46,4927],[-75,4953],[-125,5043],[-92,5115],[-63,5120],[4,5107],[-51,5018],[17,4975],[7,4940],[-46,4927]]]}},{"type":"Feature","id":"DE.NW.05314000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.50,"hc-key":"de-nw-05314000","hc-a2":"BO","name":"Bonn","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[172,3734],[161,3733],[158,3725],[79,3750],[34,3713],[9,3746],[21,3889],[100,3911],[174,3856],[136,3811],[172,3734]]]}},{"type":"Feature","id":"DE.BW.08127000","properties":{"hc-group":"admin2","hc-middle-x":0.62,"hc-middle-y":0.43,"hc-key":"de-bw-08127000","hc-a2":"SH","name":"SchwÃ¤bisch Hall","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[2222,1521],[2223,1555],[2246,1563],[2263,1597],[2360,1595],[2412,1687],[2444,1685],[2461,1752],[2518,1784],[2543,1929],[2605,1937],[2777,1955],[2771,1890],[2808,1860],[2811,1793],[2781,1775],[2806,1709],[2866,1636],[2913,1612],[2868,1555],[2916,1502],[2725,1474],[2673,1442],[2690,1388],[2607,1371],[2571,1301],[2496,1352],[2400,1362],[2312,1421],[2311,1490],[2222,1521]]]}},{"type":"Feature","id":"DE.HE.06434000","properties":{"hc-group":"admin2","hc-middle-x":0.45,"hc-middle-y":0.54,"hc-key":"de-he-06434000","hc-a2":"HO","name":"Hochtaunuskreis","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1286,3389],[1312,3362],[1328,3367],[1355,3325],[1415,3319],[1449,3261],[1397,3214],[1450,3202],[1503,3124],[1465,3111],[1394,3031],[1356,3053],[1271,3037],[1182,3091],[1231,3121],[1232,3185],[1184,3221],[1149,3286],[1191,3341],[1286,3389]]]}},{"type":"Feature","id":"DE.BB.12070000","properties":{"hc-group":"admin2","hc-middle-x":0.65,"hc-middle-y":0.55,"hc-key":"de-bb-12070000","hc-a2":"PR","name":"Prignitz","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[3952,7091],[3952,7091],[3867,7110],[3834,7143],[3745,7110],[3668,7202],[3776,7189],[3776,7231],[3894,7214],[3921,7278],[3904,7331],[3967,7381],[4027,7386],[4053,7349],[4136,7368],[4186,7441],[4238,7436],[4295,7480],[4320,7545],[4414,7535],[4464,7563],[4478,7529],[4546,7516],[4529,7490],[4571,7400],[4541,7358],[4563,7295],[4532,7234],[4574,7212],[4532,7151],[4578,7103],[4634,7144],[4644,7077],[4567,7054],[4538,6951],[4467,6941],[4406,6905],[4284,6880],[4148,6937],[4167,6965],[3952,7091]]]}},{"type":"Feature","id":"DE.TH.16064000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.55,"hc-key":"de-th-16064000","hc-a2":"UH","name":"Unstrut-Hainich-Kreis","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3450,4514],[3439,4426],[3417,4364],[3321,4354],[3285,4378],[3270,4296],[3185,4275],[3068,4336],[3027,4287],[2972,4355],[2944,4425],[2826,4415],[2848,4472],[2822,4480],[2805,4522],[2918,4567],[2981,4697],[3061,4698],[3098,4645],[3167,4668],[3232,4612],[3263,4525],[3356,4536],[3450,4514]]]}},{"type":"Feature","id":"DE.SH.01003000","properties":{"hc-group":"admin2","hc-middle-x":0.84,"hc-middle-y":0.32,"hc-key":"de-sh-01003000","hc-a2":"LÃœ","name":"LÃ¼beck","bundesland":"DE.SH"},"geometry":{"type":"Polygon","coordinates":[[[3279,8408],[3315,8392],[3332,8361],[3326,8317],[3226,8241],[3221,8154],[3121,8092],[3072,8141],[3049,8172],[3103,8202],[3067,8271],[3109,8262],[3263,8332],[3279,8408]],[[3125,8120],[3125,8123],[3119,8121],[3119,8119],[3125,8120]]]}},{"type":"Feature","id":"DE.ST.15084000","properties":{"hc-group":"admin2","hc-middle-x":0.63,"hc-middle-y":0.45,"hc-key":"de-st-15084000","hc-a2":"BU","name":"Burgenlandkreis","bundesland":"DE.ST"},"geometry":{"type":"Polygon","coordinates":[[[4542,4650],[4585,4523],[4573,4464],[4597,4421],[4653,4397],[4628,4321],[4664,4296],[4609,4187],[4571,4232],[4555,4207],[4487,4229],[4428,4216],[4390,4278],[4295,4335],[4205,4314],[4136,4371],[4025,4411],[3949,4389],[3917,4446],[3930,4511],[3911,4519],[3911,4513],[3909,4517],[3905,4520],[3910,4519],[3838,4548],[3855,4583],[3879,4577],[3930,4654],[4010,4634],[4066,4674],[4129,4621],[4179,4645],[4208,4598],[4328,4587],[4328,4634],[4446,4663],[4439,4616],[4542,4650]]]}},{"type":"Feature","id":"DE.TH.16071000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.26,"hc-key":"de-th-16071000","hc-a2":"WL","name":"Weimarer Land","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3909,3973],[3854,3981],[3819,3950],[3776,3983],[3730,3960],[3671,3994],[3689,4028],[3627,4110],[3665,4128],[3646,4194],[3676,4259],[3708,4295],[3696,4380],[3798,4374],[3949,4389],[4025,4411],[4136,4371],[4101,4280],[4009,4229],[3971,4196],[3976,4112],[3920,4051],[3938,4003],[3909,3973]],[[3759,4155],[3793,4121],[3882,4189],[3855,4267],[3795,4270],[3744,4286],[3759,4155]]]}},{"type":"Feature","id":"DE.BB.12064000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.49,"hc-key":"de-bb-12064000","hc-a2":"MO","name":"MÃ¤rkisch-Oderland","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[5746,6395],[5699,6387],[5734,6467],[5692,6490],[5753,6531],[5786,6591],[5870,6614],[5881,6712],[5825,6671],[5777,6761],[5885,6804],[5884,6844],[5934,6857],[5993,6946],[6043,6969],[6056,7015],[6121,7012],[6106,6917],[6181,6906],[6239,6850],[6302,6822],[6380,6728],[6524,6642],[6565,6587],[6540,6538],[6567,6474],[6500,6385],[6494,6337],[6406,6328],[6402,6300],[6308,6305],[6277,6340],[6266,6415],[6188,6460],[6174,6413],[6092,6427],[6039,6376],[5987,6415],[5884,6356],[5832,6362],[5781,6437],[5746,6395]]]}},{"type":"Feature","id":"DE.BE.11000000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.47,"hc-key":"de-be-11000000","hc-a2":"BE","name":"Berlin","bundesland":"DE.BE"},"geometry":{"type":"Polygon","coordinates":[[[5692,6490],[5734,6467],[5699,6387],[5746,6395],[5822,6363],[5783,6262],[5742,6204],[5735,6258],[5690,6279],[5540,6292],[5544,6245],[5475,6285],[5449,6272],[5434,6295],[5349,6288],[5325,6257],[5257,6289],[5306,6407],[5274,6426],[5307,6543],[5344,6528],[5353,6587],[5471,6587],[5502,6624],[5525,6608],[5565,6665],[5608,6626],[5589,6569],[5692,6490]]]}},{"type":"Feature","id":"DE.BB.12072000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.50,"hc-key":"de-bb-12072000","hc-a2":"TF","name":"Teltow-FlÃ¤ming","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[5449,6272],[5475,6285],[5544,6245],[5615,6194],[5581,6078],[5656,6062],[5697,6000],[5667,5996],[5671,5861],[5749,5830],[5767,5745],[5697,5725],[5641,5675],[5573,5686],[5592,5615],[5696,5616],[5724,5576],[5692,5556],[5721,5462],[5669,5433],[5533,5482],[5442,5462],[5422,5539],[5363,5544],[5355,5509],[5337,5540],[5257,5520],[5260,5561],[5208,5563],[5184,5605],[5091,5600],[5081,5646],[5016,5659],[5080,5687],[5128,5743],[5190,5730],[5195,5828],[5161,5896],[5270,5978],[5295,6063],[5332,6093],[5330,6150],[5403,6174],[5449,6272]]]}},{"type":"Feature","id":"DE.BB.12063000","properties":{"hc-group":"admin2","hc-middle-x":0.37,"hc-middle-y":0.49,"hc-key":"de-bb-12063000","hc-a2":"HA","name":"Havelland","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[5307,6543],[5274,6426],[5306,6407],[5259,6393],[5237,6346],[5177,6418],[5120,6394],[5087,6337],[4975,6338],[4931,6419],[4931,6437],[4931,6437],[4931,6437],[4931,6437],[4931,6438],[4937,6440],[4907,6453],[4811,6415],[4684,6447],[4690,6313],[4661,6298],[4634,6289],[4606,6283],[4595,6303],[4539,6391],[4468,6371],[4442,6400],[4461,6538],[4511,6545],[4515,6604],[4477,6671],[4516,6773],[4641,6793],[4649,6726],[4771,6730],[4768,6811],[4851,6803],[4918,6742],[4939,6669],[5014,6661],[5093,6700],[5235,6652],[5307,6543]]]}},{"type":"Feature","id":"DE.BY.09479000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.55,"hc-key":"de-by-09479000","hc-a2":"WI","name":"Wunsiedel i. Fichtelgebirge","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4596,3175],[4649,3104],[4647,3012],[4708,2979],[4696,2953],[4641,2915],[4635,2869],[4551,2832],[4379,2829],[4343,2915],[4278,2961],[4269,2998],[4322,3023],[4399,3102],[4394,3136],[4483,3119],[4529,3183],[4596,3175]]]}},{"type":"Feature","id":"DE.TH.16076000","properties":{"hc-group":"admin2","hc-middle-x":0.45,"hc-middle-y":0.52,"hc-key":"de-th-16076000","hc-a2":"GR","name":"Greiz","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[4555,4207],[4571,4232],[4609,4187],[4631,4157],[4599,4100],[4641,4014],[4675,3976],[4624,3906],[4658,3902],[4670,3831],[4710,3819],[4694,3783],[4600,3727],[4562,3746],[4530,3688],[4575,3679],[4498,3640],[4448,3656],[4435,3717],[4382,3686],[4327,3733],[4307,3847],[4371,3930],[4302,3958],[4318,4109],[4371,4140],[4374,4180],[4430,4187],[4448,4163],[4414,4080],[4442,4012],[4493,4018],[4532,3983],[4553,4092],[4529,4169],[4555,4207]]]}},{"type":"Feature","id":"DE.NW.05111000","properties":{"hc-group":"admin2","hc-middle-x":0.01,"hc-middle-y":0.49,"hc-key":"de-nw-05111000","hc-a2":"DÃœ","name":"DÃ¼sseldorf","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-239,4702],[-215,4725],[-159,4721],[-167,4624],[-55,4601],[-106,4571],[-73,4526],[-91,4453],[-62,4422],[-124,4409],[-123,4456],[-178,4446],[-182,4492],[-229,4496],[-266,4561],[-239,4702]]]}},{"type":"Feature","id":"DE.BY.09572000","properties":{"hc-group":"admin2","hc-middle-x":0.36,"hc-middle-y":0.37,"hc-key":"de-by-09572000","hc-a2":"EH","name":"Erlangen-HÃ¶chstadt","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3833,2285],[3835,2254],[3753,2222],[3746,2101],[3685,2157],[3640,2141],[3609,2183],[3614,2295],[3568,2291],[3512,2334],[3520,2184],[3499,2191],[3414,2178],[3394,2239],[3358,2241],[3385,2338],[3330,2386],[3217,2374],[3208,2416],[3261,2434],[3314,2528],[3397,2460],[3496,2528],[3507,2506],[3534,2427],[3581,2375],[3626,2385],[3632,2327],[3678,2259],[3833,2285]],[[3473,2463],[3477,2466],[3466,2470],[3459,2467],[3473,2463]]]}},{"type":"Feature","id":"DE.NW.05114000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.48,"hc-key":"de-nw-05114000","hc-a2":"KR","name":"Krefeld","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-391,4809],[-373,4786],[-306,4788],[-271,4781],[-287,4726],[-247,4707],[-323,4646],[-355,4640],[-429,4646],[-414,4710],[-444,4783],[-391,4809]]]}},{"type":"Feature","id":"DE.BY.09661000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.42,"hc-key":"de-by-09661000","hc-a2":"AS","name":"Aschaffenburg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[1977,2716],[1892,2696],[1859,2711],[1834,2818],[1902,2806],[1977,2716]]]}},{"type":"Feature","id":"DE.RP.07231000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.43,"hc-key":"de-rp-07231000","hc-a2":"BW","name":"Bernkastel-Wittlich","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[142,2780],[187,2743],[157,2665],[192,2621],[68,2517],[69,2490],[-11,2396],[-48,2374],[-74,2430],[-161,2526],[-125,2589],[-164,2646],[-227,2629],[-258,2686],[-303,2706],[-328,2790],[-285,2816],[-309,2870],[-306,2957],[-164,3019],[-117,2937],[-55,2969],[-17,2924],[51,2916],[83,2828],[142,2780]]]}},{"type":"Feature","id":"DE.BY.09565000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.43,"hc-key":"de-by-09565000","hc-a2":"SC","name":"Schwabach","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3585,1959],[3617,1955],[3661,1910],[3669,1875],[3599,1848],[3561,1931],[3585,1959]]]}},{"type":"Feature","id":"DE.BY.09473000","properties":{"hc-group":"admin2","hc-middle-x":0.70,"hc-middle-y":0.33,"hc-key":"de-by-09473000","hc-a2":"CO","name":"Coburg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3457,2959],[3441,2959],[3435,2956],[3449,3027],[3357,3036],[3359,3098],[3312,3147],[3314,3177],[3397,3159],[3416,3212],[3297,3274],[3358,3365],[3438,3383],[3501,3370],[3589,3314],[3653,3347],[3694,3297],[3684,3233],[3724,3215],[3712,3117],[3734,3119],[3718,3094],[3586,3138],[3543,3127],[3564,3079],[3485,3029],[3512,3009],[3457,2959]],[[3564,3177],[3575,3204],[3517,3246],[3452,3224],[3478,3164],[3536,3141],[3564,3177]]]}},{"type":"Feature","id":"DE.BY.09675000","properties":{"hc-group":"admin2","hc-middle-x":0.40,"hc-middle-y":0.52,"hc-key":"de-by-09675000","hc-a2":"KI","name":"Kitzingen","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3072,2571],[3151,2534],[3167,2480],[3062,2470],[2988,2398],[3022,2308],[2927,2285],[2873,2302],[2814,2248],[2770,2285],[2744,2321],[2790,2351],[2757,2421],[2728,2421],[2718,2534],[2744,2587],[2814,2602],[2836,2665],[2871,2699],[2890,2651],[2927,2665],[2954,2615],[3005,2637],[3014,2589],[3072,2571]]]}},{"type":"Feature","id":"DE.BY.09571000","properties":{"hc-group":"admin2","hc-middle-x":0.44,"hc-middle-y":0.74,"hc-key":"de-by-09571000","hc-a2":"AN","name":"Ansbach","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[2777,1955],[2821,1963],[2781,2078],[2886,2101],[2943,1996],[3041,2026],[3083,2005],[3230,2052],[3259,2016],[3309,2037],[3352,1987],[3467,1928],[3513,1776],[3445,1706],[3391,1715],[3328,1677],[3280,1611],[3272,1552],[3312,1493],[3272,1449],[3192,1472],[3183,1437],[3092,1432],[3059,1390],[3003,1460],[2913,1474],[2916,1502],[2868,1555],[2913,1612],[2866,1636],[2806,1709],[2781,1775],[2811,1793],[2808,1860],[2771,1890],[2777,1955]],[[3108,1878],[3109,1794],[3182,1788],[3263,1754],[3241,1823],[3274,1873],[3175,1899],[3108,1878]]]}},{"type":"Feature","id":"DE.BW.08128000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.56,"hc-key":"de-bw-08128000","hc-a2":"MT","name":"Main-Tauber-Kreis","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[2781,2078],[2821,1963],[2777,1955],[2605,1937],[2543,1929],[2492,1983],[2412,1970],[2402,1997],[2312,2008],[2224,2040],[2210,2093],[2257,2152],[2216,2232],[2256,2251],[2242,2299],[2135,2338],[2124,2429],[2031,2442],[2049,2485],[2142,2513],[2189,2501],[2234,2475],[2349,2518],[2329,2395],[2375,2381],[2405,2429],[2429,2374],[2458,2418],[2516,2397],[2509,2340],[2555,2267],[2499,2192],[2543,2177],[2594,2228],[2604,2126],[2631,2087],[2691,2095],[2748,2175],[2782,2131],[2781,2078]]]}},{"type":"Feature","id":"DE.NW.05915000","properties":{"hc-group":"admin2","hc-middle-x":0.89,"hc-middle-y":0.62,"hc-key":"de-nw-05915000","hc-a2":"HA","name":"Hamm","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[635,5211],[650,5219],[665,5245],[750,5249],[798,5195],[845,5191],[852,5152],[817,5045],[740,5022],[727,5082],[620,5073],[615,5142],[656,5162],[635,5211]]]}},{"type":"Feature","id":"DE.BW.08327000","properties":{"hc-group":"admin2","hc-middle-x":0.44,"hc-middle-y":0.52,"hc-key":"de-bw-08327000","hc-a2":"TU","name":"Tuttlingen","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1391,118],[1441,180],[1529,235],[1588,268],[1654,160],[1719,162],[1759,107],[1701,94],[1769,48],[1773,-76],[1647,-113],[1617,-158],[1514,-147],[1472,-193],[1424,-190],[1379,-123],[1376,-64],[1446,-28],[1428,60],[1391,118]]]}},{"type":"Feature","id":"DE.BW.08325000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.51,"hc-key":"de-bw-08325000","hc-a2":"RO","name":"Rottweil","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1529,235],[1441,180],[1391,118],[1334,172],[1310,246],[1235,268],[1092,255],[1117,281],[1090,421],[1130,423],[1114,503],[1137,556],[1166,487],[1290,453],[1282,548],[1386,587],[1517,541],[1500,453],[1434,417],[1480,355],[1500,266],[1529,235]]]}},{"type":"Feature","id":"DE.HE.06413000","properties":{"hc-group":"admin2","hc-middle-x":0.65,"hc-middle-y":0.54,"hc-key":"de-he-06413000","hc-a2":"OA","name":"Offenbach am Main","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1508,2895],[1560,2959],[1565,2999],[1572,2999],[1598,2994],[1615,2906],[1549,2873],[1508,2895]]]}},{"type":"Feature","id":"DE.HE.06440000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.50,"hc-key":"de-he-06440000","hc-a2":"WE","name":"Wetteraukreis","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1573,3054],[1495,3060],[1503,3124],[1450,3202],[1397,3214],[1449,3261],[1415,3319],[1355,3325],[1328,3367],[1350,3391],[1385,3388],[1382,3431],[1446,3484],[1578,3477],[1583,3426],[1716,3410],[1747,3491],[1800,3503],[1840,3420],[1898,3415],[1994,3455],[2018,3419],[1944,3203],[1895,3151],[1783,3140],[1689,3191],[1624,3191],[1592,3139],[1606,3089],[1573,3054]]]}},{"type":"Feature","id":"DE.RP.07315000","properties":{"hc-group":"admin2","hc-middle-x":0.45,"hc-middle-y":0.47,"hc-key":"de-rp-07315000","hc-a2":"MA","name":"Mainz","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[1033,2860],[1082,2849],[1121,2803],[1151,2773],[1169,2727],[1113,2728],[1084,2664],[1081,2726],[994,2761],[1033,2860]]]}},{"type":"Feature","id":"DE.BY.09373000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.39,"hc-key":"de-by-09373000","hc-a2":"NI","name":"Neumarkt i.d. OPf.","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4448,1771],[4456,1747],[4451,1734],[4368,1670],[4337,1701],[4286,1604],[4217,1555],[4207,1475],[4165,1463],[4154,1383],[4074,1493],[4099,1538],[3952,1554],[3895,1606],[3888,1725],[3842,1824],[3777,1827],[3762,1864],[3815,1895],[3889,1865],[3938,1900],[3973,1995],[4009,2036],[4094,2035],[4194,1899],[4241,1929],[4324,1863],[4427,1835],[4448,1771]]]}},{"type":"Feature","id":"DE.NW.05711000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.50,"hc-key":"de-nw-05711000","hc-a2":"BI","name":"Bielefeld","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[1307,5746],[1347,5760],[1400,5710],[1464,5688],[1458,5548],[1422,5503],[1340,5492],[1268,5530],[1297,5631],[1262,5666],[1307,5746]]]}},{"type":"Feature","id":"DE.SH.01004000","properties":{"hc-group":"admin2","hc-middle-x":0.43,"hc-middle-y":0.50,"hc-key":"de-sh-01004000","hc-a2":"NE","name":"NeumÃ¼nster","bundesland":"DE.SH"},"geometry":{"type":"Polygon","coordinates":[[[2612,8586],[2598,8518],[2631,8486],[2586,8440],[2540,8436],[2528,8479],[2544,8579],[2579,8615],[2612,8586]]]}},{"type":"Feature","id":"DE.TH.16077000","properties":{"hc-group":"admin2","hc-middle-x":0.62,"hc-middle-y":0.34,"hc-key":"de-th-16077000","hc-a2":"AL","name":"Altenburger Land","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[4954,4257],[4968,4204],[4989,4178],[4979,4149],[4874,4150],[4821,4110],[4809,4058],[4740,4058],[4726,4026],[4641,4014],[4599,4100],[4631,4157],[4609,4187],[4664,4296],[4628,4321],[4653,4397],[4694,4416],[4734,4381],[4841,4371],[4872,4282],[4954,4257]]]}},{"type":"Feature","id":"DE.SN.14511000","properties":{"hc-group":"admin2","hc-middle-x":0.90,"hc-middle-y":0.65,"hc-key":"de-sn-14511000","hc-a2":"CH","name":"Chemnitz","bundesland":"DE.SN"},"geometry":{"type":"Polygon","coordinates":[[[5110,3997],[5103,4044],[5127,4106],[5164,4151],[5276,4153],[5290,4094],[5345,4081],[5348,4033],[5323,3980],[5231,3939],[5208,3995],[5164,4017],[5110,3997]]]}},{"type":"Feature","id":"DE.SN.14524000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.44,"hc-key":"de-sn-14524000","hc-a2":"ZW","name":"Zwickau","bundesland":"DE.SN"},"geometry":{"type":"Polygon","coordinates":[[[5127,4106],[5103,4044],[5110,3997],[5067,3941],[4992,3889],[5064,3853],[5039,3774],[5004,3782],[4955,3738],[4980,3685],[4904,3646],[4814,3683],[4823,3736],[4762,3818],[4710,3819],[4670,3831],[4658,3902],[4624,3906],[4675,3976],[4641,4014],[4726,4026],[4740,4058],[4809,4058],[4821,4110],[4874,4150],[4979,4149],[4989,4178],[5068,4157],[5127,4106]]]}},{"type":"Feature","id":"DE.TH.16051000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.53,"hc-key":"de-th-16051000","hc-a2":"ER","name":"Erfurt","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3474,4081],[3497,4116],[3406,4194],[3404,4263],[3464,4252],[3560,4342],[3604,4322],[3637,4252],[3676,4259],[3646,4194],[3665,4128],[3627,4110],[3512,4095],[3474,4081]]]}},{"type":"Feature","id":"DE.HE.06635000","properties":{"hc-group":"admin2","hc-middle-x":0.57,"hc-middle-y":0.38,"hc-key":"de-he-06635000","hc-a2":"WF","name":"Waldeck-Frankenberg","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1736,4914],[1778,4929],[1843,4896],[1852,4825],[1898,4824],[1910,4756],[1851,4714],[1873,4592],[1845,4580],[1929,4443],[1957,4385],[1886,4282],[1848,4269],[1826,4212],[1770,4166],[1791,4119],[1740,4119],[1573,4144],[1474,4201],[1406,4135],[1301,4163],[1355,4233],[1323,4318],[1365,4349],[1462,4339],[1541,4441],[1518,4588],[1405,4552],[1373,4594],[1500,4733],[1591,4752],[1634,4732],[1709,4750],[1717,4804],[1666,4879],[1736,4914]]]}},{"type":"Feature","id":"DE.BB.12060000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.31,"hc-key":"de-bb-12060000","hc-a2":"BA","name":"Barnim","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[6104,7103],[6101,7090],[6121,7012],[6056,7015],[6043,6969],[5993,6946],[5934,6857],[5884,6844],[5885,6804],[5777,6761],[5825,6671],[5881,6712],[5870,6614],[5786,6591],[5753,6531],[5692,6490],[5589,6569],[5608,6626],[5565,6665],[5525,6608],[5502,6624],[5498,6809],[5509,6843],[5569,6860],[5588,6910],[5535,6958],[5542,7005],[5491,6990],[5477,7022],[5483,7027],[5485,7024],[5486,7029],[5485,7029],[5574,7106],[5702,7131],[5732,7181],[5818,7218],[5877,7215],[5832,7122],[5924,7117],[5977,7055],[6006,7089],[6104,7103]]]}},{"type":"Feature","id":"DE.BY.09475000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.42,"hc-key":"de-by-09475000","hc-a2":"HO","name":"Hof","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4369,3452],[4429,3403],[4423,3353],[4537,3310],[4573,3251],[4537,3232],[4596,3175],[4529,3183],[4483,3119],[4394,3136],[4399,3102],[4322,3023],[4269,2998],[4229,3016],[4168,3025],[4177,3071],[4142,3171],[4096,3223],[4039,3217],[4060,3249],[4024,3305],[4088,3405],[4108,3390],[4258,3439],[4285,3400],[4369,3452]],[[4422,3302],[4400,3342],[4337,3353],[4339,3314],[4275,3293],[4353,3233],[4422,3302]]]}},{"type":"Feature","id":"DE.MV.13071000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.58,"hc-key":"de-mv-13071000","hc-a2":"MS","name":"Mecklenburgische Seenplatte","bundesland":"DE.MV"},"geometry":{"type":"Polygon","coordinates":[[[5320,7432],[5320,7432],[5267,7455],[5204,7430],[5208,7402],[5110,7325],[5076,7371],[5029,7343],[4993,7370],[4923,7349],[4915,7398],[4838,7404],[4738,7442],[4651,7421],[4604,7492],[4552,7511],[4562,7534],[4500,7594],[4534,7618],[4540,7735],[4503,7789],[4514,7859],[4548,7898],[4591,7862],[4601,7974],[4582,8001],[4656,8038],[4672,7995],[4775,7975],[4800,8006],[4769,8044],[4768,8132],[4823,8159],[4827,8221],[4865,8235],[4864,8287],[4904,8306],[4872,8340],[4909,8387],[4886,8426],[4899,8491],[4939,8455],[5046,8498],[5114,8433],[5190,8423],[5243,8376],[5219,8309],[5267,8236],[5321,8243],[5348,8299],[5399,8276],[5386,8187],[5493,8160],[5540,8095],[5612,8112],[5743,8095],[5661,8041],[5721,7994],[5673,7957],[5696,7892],[5654,7841],[5690,7801],[5635,7753],[5626,7699],[5564,7681],[5549,7569],[5519,7528],[5480,7536],[5455,7459],[5416,7502],[5363,7503],[5320,7432]]]}},{"type":"Feature","id":"DE.NW.05770000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.50,"hc-key":"de-nw-05770000","hc-a2":"ML","name":"Minden-LÃ¼bbecke","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[1750,5875],[1752,5857],[1699,5861],[1644,5874],[1571,5832],[1574,5894],[1514,5953],[1491,5928],[1452,5967],[1394,5959],[1304,5979],[1286,6112],[1175,6174],[1162,6244],[1265,6226],[1343,6324],[1384,6302],[1466,6347],[1509,6303],[1512,6156],[1638,6148],[1709,6165],[1807,6302],[1879,6268],[1843,6222],[1869,6179],[1812,6078],[1761,6059],[1739,5972],[1828,5930],[1801,5860],[1750,5875]]]}},{"type":"Feature","id":"DE.SN.14628000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.51,"hc-key":"de-sn-14628000","hc-a2":"SS","name":"SÃ¤chsische Schweiz-Osterzgebirge","bundesland":"DE.SN"},"geometry":{"type":"Polygon","coordinates":[[[5659,4370],[5712,4419],[5796,4421],[5820,4376],[5876,4385],[6013,4309],[6060,4325],[6136,4397],[6135,4439],[6327,4488],[6447,4469],[6446,4451],[6401,4353],[6448,4353],[6451,4309],[6533,4273],[6523,4238],[6388,4212],[6382,4172],[6221,4084],[6180,4103],[6106,4061],[6109,4004],[6071,3967],[5889,3958],[5804,4055],[5677,4262],[5709,4293],[5666,4317],[5659,4370]]]}},{"type":"Feature","id":"DE.SN.14627000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.47,"hc-key":"de-sn-14627000","hc-a2":"ME","name":"MeiÃŸen","bundesland":"DE.SN"},"geometry":{"type":"Polygon","coordinates":[[[5796,4421],[5712,4419],[5659,4370],[5627,4393],[5531,4358],[5498,4472],[5501,4540],[5464,4567],[5447,4632],[5459,4688],[5421,4834],[5443,4877],[5508,4889],[5606,4955],[5663,4900],[5715,4889],[5736,4845],[5866,4859],[5909,4844],[5992,4871],[5965,4764],[5990,4716],[5950,4586],[5888,4460],[5831,4476],[5796,4421]]]}},{"type":"Feature","id":"DE.RP.07133000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.51,"hc-key":"de-rp-07133000","hc-a2":"BK","name":"Bad Kreuznach","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[585,2332],[549,2309],[541,2397],[492,2371],[423,2412],[371,2469],[326,2478],[354,2524],[319,2553],[315,2621],[338,2599],[409,2631],[622,2815],[699,2744],[768,2717],[825,2580],[792,2550],[771,2468],[674,2478],[604,2418],[585,2332]]]}},{"type":"Feature","id":"DE.RP.07336000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.47,"hc-key":"de-rp-07336000","hc-a2":"KU","name":"Kusel","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[423,2412],[492,2371],[541,2397],[549,2309],[585,2332],[579,2286],[577,2243],[537,2242],[523,2175],[422,2144],[347,2058],[298,1945],[210,1971],[205,1998],[187,2020],[169,2031],[215,2079],[218,2174],[195,2194],[275,2258],[327,2249],[334,2338],[416,2370],[423,2412]]]}},{"type":"Feature","id":"DE.RP.07333000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.48,"hc-key":"de-rp-07333000","hc-a2":"DO","name":"Donnersbergkreis","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[577,2243],[579,2286],[585,2332],[604,2418],[674,2478],[771,2468],[810,2472],[820,2397],[948,2390],[995,2334],[992,2290],[945,2189],[859,2111],[819,2101],[776,2164],[707,2136],[645,2163],[655,2200],[577,2243]]]}},{"type":"Feature","id":"DE.BY.09673000","properties":{"hc-group":"admin2","hc-middle-x":0.39,"hc-middle-y":0.49,"hc-key":"de-by-09673000","hc-a2":"RG","name":"RhÃ¶n-Grabfeld","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3064,3095],[3046,3130],[2991,3139],[2925,3243],[2884,3187],[2755,3191],[2771,3224],[2726,3233],[2727,3235],[2728,3241],[2725,3241],[2724,3234],[2646,3250],[2591,3303],[2598,3399],[2690,3506],[2690,3536],[2748,3603],[2777,3574],[2834,3591],[2882,3533],[2948,3509],[3002,3375],[3058,3382],[3118,3310],[3194,3289],[3206,3141],[3166,3108],[3120,3152],[3064,3095]]]}},{"type":"Feature","id":"DE.BY.09677000","properties":{"hc-group":"admin2","hc-middle-x":0.34,"hc-middle-y":0.54,"hc-key":"de-by-09677000","hc-a2":"MS","name":"Main-Spessart","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[2630,2889],[2698,2861],[2692,2747],[2586,2720],[2601,2663],[2511,2664],[2419,2576],[2370,2578],[2349,2518],[2234,2475],[2189,2501],[2155,2591],[2144,2642],[2170,2736],[2130,2804],[2126,2931],[2212,2945],[2236,3044],[2211,3149],[2248,3123],[2321,3130],[2371,3127],[2434,2988],[2483,2971],[2491,2876],[2596,2854],[2630,2889]]]}},{"type":"Feature","id":"DE.TH.16053000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.49,"hc-key":"de-th-16053000","hc-a2":"JE","name":"Jena","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3976,4112],[3971,4196],[4009,4229],[4122,4180],[4118,4081],[4030,4043],[4020,4100],[3976,4112]]]}},{"type":"Feature","id":"DE.BY.09476000","properties":{"hc-group":"admin2","hc-middle-x":0.24,"hc-middle-y":0.49,"hc-key":"de-by-09476000","hc-a2":"KR","name":"Kronach","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3978,3447],[4015,3368],[4088,3405],[4024,3305],[4060,3249],[4039,3217],[3990,3193],[3865,3064],[3811,3063],[3734,3119],[3712,3117],[3724,3215],[3776,3212],[3805,3342],[3767,3506],[3783,3508],[3853,3569],[3923,3564],[3923,3462],[3978,3447]]]}},{"type":"Feature","id":"DE.BY.09477000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.53,"hc-key":"de-by-09477000","hc-a2":"KU","name":"Kulmbach","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3865,3064],[3990,3193],[4039,3217],[4096,3223],[4142,3171],[4177,3071],[4168,3025],[4179,2976],[4130,2943],[4106,2872],[3923,2788],[3914,2750],[3815,2794],[3795,2838],[3840,2921],[3829,2982],[3885,3048],[3865,3064]]]}},{"type":"Feature","id":"DE.HE.06439000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.44,"hc-key":"de-he-06439000","hc-a2":"RT","name":"Rheingau-Taunus-Kreis","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1182,3091],[1187,3067],[1158,3014],[1082,3017],[1007,2985],[962,2929],[1019,2859],[831,2783],[758,2775],[659,2909],[707,2929],[738,2993],[798,2958],[804,3015],[759,3068],[794,3105],[918,3140],[885,3174],[975,3199],[1065,3218],[1095,3180],[1184,3221],[1232,3185],[1231,3121],[1182,3091]]]}},{"type":"Feature","id":"DE.BB.12051000","properties":{"hc-group":"admin2","hc-middle-x":0.22,"hc-middle-y":0.69,"hc-key":"de-bb-12051000","hc-a2":"BA","name":"Brandenburg an der Havel","bundesland":"DE.BB"},"geometry":{"type":"MultiPolygon","coordinates":[[[[4634,6289],[4661,6298],[4690,6313],[4744,6331],[4815,6302],[4856,6322],[4924,6303],[4885,6236],[4851,6230],[4839,6166],[4789,6171],[4765,6127],[4692,6108],[4658,6278],[4634,6289]]],[[[4931,6437],[4931,6438],[4937,6440],[4931,6437],[4931,6437],[4931,6437]]],[[[4931,6437],[4931,6419],[4927,6435],[4931,6437],[4931,6437],[4931,6437]]]]}},{"type":"Feature","id":"DE.NI.03357000","properties":{"hc-group":"admin2","hc-middle-x":0.57,"hc-middle-y":0.60,"hc-key":"de-ni-03357000","hc-a2":"R(","name":"Rotenburg (WÃ¼mme)","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[2233,7475],[2285,7322],[2335,7311],[2399,7237],[2305,7205],[2280,7059],[2331,7034],[2327,6968],[2272,6941],[2260,6901],[2192,6929],[2146,6887],[2131,7007],[2077,6978],[2050,7021],[1949,7061],[1894,7123],[1927,7239],[1822,7213],[1786,7276],[1773,7422],[1687,7533],[1724,7577],[1685,7615],[1740,7658],[1730,7711],[1676,7724],[1820,7801],[1851,7777],[1886,7830],[1916,7745],[1998,7734],[1951,7697],[1964,7650],[2000,7661],[2051,7614],[2060,7547],[2132,7487],[2185,7537],[2242,7520],[2233,7475]]]}},{"type":"Feature","id":"DE.BY.09274000","properties":{"hc-group":"admin2","hc-middle-x":0.59,"hc-middle-y":0.62,"hc-key":"de-by-09274000","hc-a2":"LA","name":"Landshut","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4623,1149],[4637,1145],[4658,1142],[4774,1085],[4812,1122],[4840,1088],[4909,983],[4870,956],[4868,879],[4916,837],[4985,871],[5020,790],[4986,765],[5002,686],[4941,587],[4791,526],[4729,593],[4706,660],[4572,649],[4568,669],[4555,761],[4522,754],[4505,874],[4460,881],[4433,1026],[4526,1118],[4611,1118],[4623,1149]],[[4686,788],[4807,903],[4775,906],[4692,851],[4567,800],[4568,778],[4686,788]]]}},{"type":"Feature","id":"DE.BY.09761000","properties":{"hc-group":"admin2","hc-middle-x":0.71,"hc-middle-y":0.52,"hc-key":"de-by-09761000","hc-a2":"AU","name":"Augsburg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3513,674],[3584,566],[3572,408],[3545,395],[3535,445],[3409,446],[3442,522],[3491,516],[3481,602],[3519,610],[3513,674]]]}},{"type":"Feature","id":"DE.BY.09575000","properties":{"hc-group":"admin2","hc-middle-x":0.65,"hc-middle-y":0.49,"hc-key":"de-by-09575000","hc-a2":"NA","name":"Neustadt a.d. Aisch-Bad Windsheim","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3167,2480],[3228,2458],[3261,2434],[3208,2416],[3217,2374],[3330,2386],[3385,2338],[3358,2241],[3394,2239],[3414,2178],[3391,2142],[3292,2117],[3309,2037],[3259,2016],[3230,2052],[3083,2005],[3041,2026],[2943,1996],[2886,2101],[2781,2078],[2782,2131],[2748,2175],[2734,2245],[2770,2285],[2814,2248],[2873,2302],[2927,2285],[3022,2308],[2988,2398],[3062,2470],[3167,2480]]]}},{"type":"Feature","id":"DE.BY.09679000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.48,"hc-key":"de-by-09679000","hc-a2":"WÃœ","name":"WÃ¼rzburg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[2770,2285],[2734,2245],[2748,2175],[2691,2095],[2631,2087],[2604,2126],[2594,2228],[2543,2177],[2499,2192],[2555,2267],[2509,2340],[2516,2397],[2458,2418],[2429,2374],[2405,2429],[2375,2381],[2329,2395],[2349,2518],[2370,2578],[2419,2576],[2511,2664],[2601,2663],[2586,2720],[2692,2747],[2754,2693],[2836,2665],[2814,2602],[2744,2587],[2718,2534],[2728,2421],[2757,2421],[2790,2351],[2744,2321],[2770,2285]],[[2551,2563],[2576,2506],[2556,2467],[2652,2412],[2642,2480],[2666,2562],[2655,2588],[2551,2563]]]}},{"type":"Feature","id":"DE.BW.08416000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.54,"hc-key":"de-bw-08416000","hc-a2":"TÃœ","name":"TÃ¼bingen","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1535,717],[1545,729],[1548,742],[1620,711],[1624,763],[1714,831],[1794,818],[1882,852],[1879,804],[1920,782],[1871,609],[1883,533],[1816,524],[1760,548],[1552,594],[1603,659],[1535,717]],[[1875,824],[1876,827],[1872,827],[1871,825],[1875,824]],[[1901,774],[1900,778],[1897,777],[1898,773],[1901,774]]]}},{"type":"Feature","id":"DE.MV.13075000","properties":{"hc-group":"admin2","hc-middle-x":0.38,"hc-middle-y":0.28,"hc-key":"de-mv-13075000","hc-a2":"VG","name":"Vorpommern-Greifswald","bundesland":"DE.MV"},"geometry":{"type":"Polygon","coordinates":[[[5707,8643],[5717,8674],[5660,8751],[5708,8779],[5768,8679],[5891,8620],[6074,8458],[6069,8374],[5910,8364],[5888,8333],[5752,8326],[5838,8422],[5799,8489],[5853,8529],[5855,8483],[5915,8479],[5920,8545],[5883,8561],[5849,8627],[5762,8539],[5757,8605],[5683,8569],[5693,8599],[5666,8575],[5747,8513],[5818,8431],[5748,8364],[5747,8314],[5877,8227],[6010,8186],[6059,8188],[6094,8226],[6131,8198],[6088,8144],[6147,8119],[6152,8052],[6182,8031],[6176,7940],[6244,7809],[6250,7743],[6292,7634],[6213,7604],[6176,7527],[6036,7520],[6131,7663],[6124,7769],[6037,7773],[5981,7729],[5937,7756],[5869,7733],[5829,7846],[5745,7907],[5744,7853],[5786,7835],[5748,7798],[5690,7801],[5654,7841],[5696,7892],[5673,7957],[5721,7994],[5661,8041],[5743,8095],[5612,8112],[5540,8095],[5493,8160],[5386,8187],[5399,8276],[5348,8299],[5321,8243],[5267,8236],[5219,8309],[5243,8376],[5190,8423],[5114,8433],[5046,8498],[5145,8552],[5163,8531],[5229,8566],[5262,8623],[5227,8671],[5285,8694],[5304,8779],[5309,8732],[5371,8763],[5426,8643],[5440,8683],[5561,8722],[5615,8769],[5618,8737],[5714,8675],[5707,8643]]]}},{"type":"Feature","id":"DE.SH.01059000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.38,"hc-key":"de-sh-01059000","hc-a2":"SF","name":"Schleswig-Flensburg","bundesland":"DE.SH"},"geometry":{"type":"Polygon","coordinates":[[[2536,9347],[2599,9330],[2599,9297],[2548,9308],[2529,9296],[2531,9345],[2523,9342],[2516,9285],[2516,9282],[2501,9272],[2419,9213],[2386,9213],[2363,9155],[2360,9148],[2352,9146],[2280,9130],[2312,9097],[2285,9038],[2218,9006],[2216,8902],[2139,8872],[2101,8885],[2084,8805],[1998,8786],[1981,8876],[1906,8869],[1929,8934],[1972,8919],[1990,8988],[2029,9027],[1991,9121],[2015,9174],[1965,9210],[1901,9378],[1821,9382],[1825,9458],[1859,9503],[1842,9540],[1853,9622],[1956,9589],[1964,9533],[2040,9520],[2071,9575],[2104,9553],[2051,9493],[2069,9454],[2170,9482],[2159,9552],[2247,9617],[2238,9585],[2336,9535],[2402,9520],[2468,9456],[2494,9520],[2536,9496],[2563,9410],[2600,9372],[2536,9347]]]}},{"type":"Feature","id":"DE.BY.09672000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.56,"hc-key":"de-by-09672000","hc-a2":"BK","name":"Bad Kissingen","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[2726,3233],[2771,3224],[2755,3191],[2884,3187],[2925,3243],[2991,3139],[2967,3080],[2892,3019],[2822,3031],[2786,2975],[2718,2952],[2672,2965],[2630,2889],[2596,2854],[2491,2876],[2483,2971],[2434,2988],[2371,3127],[2321,3130],[2333,3161],[2431,3250],[2417,3308],[2441,3404],[2551,3369],[2598,3399],[2591,3303],[2646,3250],[2724,3234],[2725,3241],[2728,3241],[2727,3235],[2726,3233]]]}},{"type":"Feature","id":"DE.MV.13004000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.50,"hc-key":"de-mv-13004000","hc-a2":"SC","name":"Schwerin","bundesland":"DE.MV"},"geometry":{"type":"Polygon","coordinates":[[[3718,7981],[3721,7981],[3721,7982],[3796,7988],[3814,7994],[3846,7886],[3801,7838],[3812,7807],[3748,7796],[3713,7920],[3675,7946],[3707,7981],[3718,7981]],[[3732,7900],[3727,7903],[3725,7900],[3731,7899],[3732,7900]]]}},{"type":"Feature","id":"DE.NI.03452000","properties":{"hc-group":"admin2","hc-middle-x":0.23,"hc-middle-y":0.51,"hc-key":"de-ni-03452000","hc-a2":"AU","name":"Aurich","bundesland":"DE.NI"},"geometry":{"type":"MultiPolygon","coordinates":[[[[88,7528],[115,7702],[149,7748],[211,7771],[170,7822],[226,7896],[303,7954],[401,7978],[558,7958],[506,7920],[526,7892],[449,7880],[453,7761],[498,7780],[638,7796],[658,7659],[708,7672],[706,7627],[771,7535],[588,7478],[484,7534],[432,7504],[346,7508],[321,7587],[245,7563],[208,7578],[120,7517],[88,7528]]],[[[327,8003],[216,8010],[241,8026],[379,8035],[327,8003]]]]}},{"type":"Feature","id":"DE.SH.01051000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.37,"hc-key":"de-sh-01051000","hc-a2":"DI","name":"Dithmarschen","bundesland":"DE.SH"},"geometry":{"type":"Polygon","coordinates":[[[1926,8246],[1737,8249],[1687,8305],[1624,8434],[1664,8465],[1712,8447],[1750,8484],[1704,8581],[1645,8568],[1604,8646],[1635,8773],[1681,8793],[1756,8866],[1769,8930],[1837,8918],[1906,8869],[1981,8876],[1998,8786],[2084,8805],[2125,8736],[2125,8644],[2013,8575],[2018,8489],[1999,8383],[1935,8308],[1926,8246]]]}},{"type":"Feature","id":"DE.MV.13072000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.57,"hc-key":"de-mv-13072000","hc-a2":"RO","name":"Rostock","bundesland":"DE.MV"},"geometry":{"type":"Polygon","coordinates":[[[3871,8478],[3921,8547],[3910,8583],[3845,8507],[3845,8543],[3962,8655],[4105,8651],[4222,8697],[4252,8681],[4258,8606],[4291,8532],[4387,8556],[4368,8623],[4390,8715],[4463,8739],[4435,8803],[4384,8802],[4402,8816],[4451,8847],[4476,8791],[4524,8759],[4543,8626],[4726,8585],[4822,8507],[4843,8527],[4899,8491],[4886,8426],[4909,8387],[4872,8340],[4904,8306],[4864,8287],[4865,8235],[4827,8221],[4823,8159],[4768,8132],[4769,8044],[4800,8006],[4775,7975],[4672,7995],[4656,8038],[4582,8001],[4601,7974],[4591,7862],[4548,7898],[4514,7859],[4431,7905],[4420,7960],[4371,7948],[4295,7987],[4231,8093],[4171,8075],[4080,8125],[4081,8191],[4043,8200],[4069,8285],[4074,8398],[4040,8412],[3979,8350],[3953,8420],[3891,8424],[3871,8478]]]}},{"type":"Feature","id":"DE.BW.08337000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.48,"hc-key":"de-bw-08337000","hc-a2":"WA","name":"Waldshut","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1301,-299],[1267,-315],[1200,-408],[1238,-470],[1320,-481],[1383,-444],[1368,-551],[1305,-498],[1249,-542],[1284,-570],[1222,-591],[1132,-585],[1098,-536],[1010,-514],[922,-565],[903,-600],[738,-613],[717,-558],[696,-476],[798,-408],[780,-359],[822,-303],[838,-204],[892,-187],[915,-253],[1003,-316],[1035,-216],[1070,-191],[1188,-208],[1234,-190],[1297,-223],[1301,-299]]]}},{"type":"Feature","id":"DE.BW.08211000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.50,"hc-key":"de-bw-08211000","hc-a2":"BB","name":"Baden-Baden","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1088,1130],[1134,1035],[1091,950],[1049,995],[963,1034],[1024,1081],[974,1121],[1017,1183],[1088,1130]]]}},{"type":"Feature","id":"DE.BY.09180000","properties":{"hc-group":"admin2","hc-middle-x":0.30,"hc-middle-y":0.76,"hc-key":"de-by-09180000","hc-a2":"GP","name":"Garmisch-Partenkirchen","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4044,-658],[4020,-691],[4057,-728],[3976,-725],[3918,-798],[3870,-800],[3895,-750],[3781,-781],[3754,-807],[3631,-802],[3643,-760],[3533,-666],[3577,-645],[3547,-613],[3533,-564],[3608,-500],[3641,-419],[3628,-363],[3829,-334],[3973,-382],[3917,-424],[3903,-545],[3963,-609],[4044,-658]]]}},{"type":"Feature","id":"DE.BB.12067000","properties":{"hc-group":"admin2","hc-middle-x":0.40,"hc-middle-y":0.47,"hc-key":"de-bb-12067000","hc-a2":"OS","name":"Oder-Spree","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[6565,6169],[6666,6128],[6648,6060],[6655,5948],[6722,5894],[6694,5799],[6581,5837],[6556,5794],[6507,5794],[6486,5862],[6458,5816],[6374,5875],[6299,5812],[6238,5844],[6182,5832],[6164,5880],[6073,5905],[6035,5940],[5954,5909],[5902,6081],[5931,6128],[5908,6181],[5818,6188],[5833,6230],[5783,6262],[5822,6363],[5746,6395],[5781,6437],[5832,6362],[5884,6356],[5987,6415],[6039,6376],[6092,6427],[6174,6413],[6188,6460],[6266,6415],[6277,6340],[6308,6305],[6402,6300],[6416,6258],[6388,6151],[6481,6150],[6565,6169]]]}},{"type":"Feature","id":"DE.BY.09275000","properties":{"hc-group":"admin2","hc-middle-x":0.89,"hc-middle-y":0.42,"hc-key":"de-by-09275000","hc-a2":"PA","name":"Passau","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[6197,1149],[6232,1017],[6150,865],[6027,936],[5945,962],[5880,984],[5754,974],[5809,910],[5879,899],[5900,846],[5864,649],[5724,531],[5656,530],[5630,591],[5573,607],[5564,650],[5640,691],[5556,797],[5566,874],[5493,891],[5464,948],[5491,986],[5552,990],[5568,1078],[5691,1117],[5698,1158],[5777,1155],[5849,1187],[5888,1130],[5930,1154],[6009,1095],[6141,1112],[6142,1156],[6197,1149]]]}},{"type":"Feature","id":"DE.BY.09272000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.48,"hc-key":"de-by-09272000","hc-a2":"FG","name":"Freyung-Grafenau","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[5824,1500],[5900,1450],[5908,1489],[5980,1493],[6067,1374],[6121,1387],[6232,1232],[6197,1149],[6142,1156],[6141,1112],[6009,1095],[5930,1154],[5888,1130],[5849,1187],[5777,1155],[5698,1158],[5660,1213],[5681,1244],[5630,1325],[5707,1343],[5703,1462],[5747,1448],[5782,1502],[5824,1500]]]}},{"type":"Feature","id":"DE.SN.14521000","properties":{"hc-group":"admin2","hc-middle-x":0.45,"hc-middle-y":0.44,"hc-key":"de-sn-14521000","hc-a2":"ER","name":"Erzgebirgskreis","bundesland":"DE.SN"},"geometry":{"type":"Polygon","coordinates":[[[5764,3815],[5733,3768],[5654,3799],[5581,3721],[5548,3748],[5503,3618],[5355,3615],[5353,3539],[5278,3476],[5170,3538],[5096,3495],[5074,3445],[5042,3471],[4963,3453],[4962,3476],[4844,3581],[4904,3646],[4980,3685],[4955,3738],[5004,3782],[5039,3774],[5064,3853],[4992,3889],[5067,3941],[5110,3997],[5164,4017],[5208,3995],[5231,3939],[5323,3980],[5348,4033],[5431,3986],[5528,4001],[5559,3950],[5632,3974],[5642,3919],[5764,3815]]]}},{"type":"Feature","id":"DE.SL.10041000","properties":{"hc-group":"admin2","hc-middle-x":0.19,"hc-middle-y":0.64,"hc-key":"de-sl-10041000","hc-a2":"RS","name":"Regionalverband SaarbrÃ¼cken","bundesland":"DE.SL"},"geometry":{"type":"Polygon","coordinates":[[[21,1649],[-20,1589],[-60,1696],[-125,1746],[-219,1733],[-223,1649],[-310,1669],[-322,1747],[-282,1751],[-175,1857],[-181,1918],[-114,1963],[-43,1935],[41,1864],[-10,1812],[33,1791],[55,1734],[21,1649]]]}},{"type":"Feature","id":"DE.BW.08336000","properties":{"hc-group":"admin2","hc-middle-x":0.39,"hc-middle-y":0.59,"hc-key":"de-bw-08336000","hc-a2":"LÃ–","name":"LÃ¶rrach","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[717,-558],[646,-556],[624,-597],[529,-630],[457,-567],[366,-444],[360,-390],[392,-333],[419,-289],[462,-316],[561,-272],[610,-272],[706,-191],[718,-152],[834,-169],[838,-204],[822,-303],[780,-359],[798,-408],[696,-476],[717,-558]]]}},{"type":"Feature","id":"DE.BY.09279000","properties":{"hc-group":"admin2","hc-middle-x":0.44,"hc-middle-y":0.46,"hc-key":"de-by-09279000","hc-a2":"DL","name":"Dingolfing-Landau","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[5438,962],[5257,923],[5245,847],[5129,765],[5130,806],[5020,790],[4985,871],[4916,837],[4868,879],[4870,956],[4909,983],[4840,1088],[4929,1155],[5009,1147],[5035,1102],[5087,1102],[5179,1155],[5237,1213],[5271,1107],[5331,1031],[5414,1019],[5438,962]]]}},{"type":"Feature","id":"DE.SN.14713000","properties":{"hc-group":"admin2","hc-middle-x":0.08,"hc-middle-y":0.55,"hc-key":"de-sn-14713000","hc-a2":"LE","name":"Leipzig","bundesland":"DE.SN"},"geometry":{"type":"Polygon","coordinates":[[[4824,4782],[4862,4707],[4813,4638],[4784,4671],[4702,4668],[4669,4610],[4621,4601],[4601,4755],[4619,4856],[4731,4858],[4768,4902],[4824,4782]]]}},{"type":"Feature","id":"DE.BW.08315000","properties":{"hc-group":"admin2","hc-middle-x":0.03,"hc-middle-y":0.70,"hc-key":"de-bw-08315000","hc-a2":"BH","name":"Breisgau-Hochschwarzwald","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[392,-333],[380,-271],[408,-140],[468,-20],[423,67],[431,186],[592,180],[596,142],[662,118],[598,48],[552,72],[507,-25],[658,-18],[710,-52],[694,-102],[737,-100],[756,39],[720,34],[685,93],[752,111],[894,98],[953,29],[1008,-7],[1119,4],[1082,-42],[1209,-121],[1234,-190],[1188,-208],[1070,-191],[1035,-216],[1003,-316],[915,-253],[892,-187],[838,-204],[834,-169],[718,-152],[706,-191],[610,-272],[561,-272],[462,-316],[419,-289],[392,-333]]]}},{"type":"Feature","id":"DE.RP.07233000","properties":{"hc-group":"admin2","hc-middle-x":0.62,"hc-middle-y":0.54,"hc-key":"de-rp-07233000","hc-a2":"VU","name":"Vulkaneifel","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[-306,2957],[-361,3005],[-411,2995],[-440,3047],[-398,3157],[-542,3299],[-575,3385],[-488,3318],[-380,3384],[-363,3333],[-323,3360],[-296,3309],[-204,3342],[-193,3296],[-78,3271],[-41,3319],[7,3299],[-52,3260],[32,3221],[-25,3137],[-72,3145],[-55,2969],[-117,2937],[-164,3019],[-306,2957]]]}},{"type":"Feature","id":"DE.BY.09276000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.45,"hc-key":"de-by-09276000","hc-a2":"RE","name":"Regen","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[5583,1757],[5585,1716],[5648,1677],[5696,1687],[5796,1602],[5824,1500],[5782,1502],[5747,1448],[5703,1462],[5707,1343],[5630,1325],[5561,1356],[5506,1345],[5467,1427],[5365,1413],[5343,1438],[5275,1531],[5219,1656],[5379,1698],[5401,1738],[5472,1726],[5554,1669],[5583,1757]]]}},{"type":"Feature","id":"DE.ST.15081000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.49,"hc-key":"de-st-15081000","hc-a2":"AS","name":"Altmarkkreis Salzwedel","bundesland":"DE.ST"},"geometry":{"type":"Polygon","coordinates":[[[3878,6956],[3992,6898],[3985,6840],[3852,6816],[3905,6780],[3899,6623],[3865,6601],[3880,6553],[3801,6507],[3822,6492],[3965,6504],[3953,6376],[3972,6284],[3953,6216],[3855,6179],[3858,6209],[3798,6239],[3602,6237],[3536,6286],[3521,6330],[3476,6322],[3423,6391],[3414,6449],[3311,6627],[3288,6621],[3253,6734],[3258,6799],[3321,6815],[3404,6819],[3453,6901],[3536,6906],[3640,6887],[3704,6858],[3878,6956]]]}},{"type":"Feature","id":"DE.BW.08437000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.55,"hc-key":"de-bw-08437000","hc-a2":"SI","name":"Sigmaringen","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[2086,348],[2049,326],[2032,235],[2093,145],[2232,120],[2295,76],[2329,18],[2290,-32],[2248,-0],[2210,-46],[2158,-42],[2116,-156],[2147,-236],[2013,-152],[1940,-210],[1883,-202],[1898,-129],[1773,-76],[1769,48],[1701,94],[1759,107],[1719,162],[1772,235],[1908,212],[1936,304],[1862,365],[1936,405],[2034,411],[2086,348]]]}},{"type":"Feature","id":"DE.HE.06631000","properties":{"hc-group":"admin2","hc-middle-x":0.39,"hc-middle-y":0.66,"hc-key":"de-he-06631000","hc-a2":"FU","name":"Fulda","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[2190,3425],[2145,3474],[2212,3698],[2302,3656],[2304,3837],[2356,3815],[2446,3942],[2543,3925],[2583,3885],[2597,3846],[2545,3753],[2550,3698],[2616,3693],[2604,3738],[2694,3756],[2720,3705],[2685,3670],[2708,3592],[2690,3536],[2690,3506],[2598,3399],[2551,3369],[2441,3404],[2417,3308],[2310,3360],[2263,3342],[2198,3385],[2190,3425]]]}},{"type":"Feature","id":"DE.TH.16063000","properties":{"hc-group":"admin2","hc-middle-x":0.47,"hc-middle-y":0.40,"hc-key":"de-th-16063000","hc-a2":"WA","name":"Wartburgkreis","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3011,4008],[2989,3918],[2881,3884],[2828,3901],[2846,3847],[2813,3819],[2809,3754],[2845,3710],[2794,3676],[2720,3705],[2694,3756],[2604,3738],[2616,3693],[2550,3698],[2545,3753],[2597,3846],[2583,3885],[2605,3961],[2668,3976],[2698,4048],[2601,4130],[2693,4127],[2663,4201],[2673,4227],[2805,4211],[2800,4189],[2927,4118],[2979,4158],[2975,4269],[2925,4289],[2886,4211],[2822,4230],[2767,4295],[2797,4363],[2746,4408],[2826,4415],[2944,4425],[2972,4355],[3027,4287],[3068,4336],[3185,4275],[3068,4210],[3105,4172],[3070,4102],[3030,4084],[3011,4008]]]}},{"type":"Feature","id":"DE.HE.06531000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.48,"hc-key":"de-he-06531000","hc-a2":"GI","name":"GieÃŸen","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1385,3388],[1342,3461],[1448,3535],[1367,3557],[1423,3598],[1342,3718],[1383,3786],[1427,3752],[1452,3791],[1497,3763],[1690,3794],[1736,3754],[1728,3691],[1807,3646],[1831,3599],[1881,3586],[1800,3503],[1747,3491],[1716,3410],[1583,3426],[1578,3477],[1446,3484],[1382,3431],[1385,3388]]]}},{"type":"Feature","id":"DE.BY.09273000","properties":{"hc-group":"admin2","hc-middle-x":0.55,"hc-middle-y":0.47,"hc-key":"de-by-09273000","hc-a2":"KE","name":"Kelheim","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4207,1475],[4322,1441],[4342,1483],[4419,1478],[4457,1386],[4491,1413],[4598,1379],[4648,1276],[4622,1259],[4623,1149],[4611,1118],[4526,1118],[4433,1026],[4460,881],[4420,871],[4355,918],[4270,918],[4256,1012],[4216,1034],[4216,1095],[4273,1150],[4262,1341],[4154,1383],[4165,1463],[4207,1475]]]}},{"type":"Feature","id":"DE.ST.15002000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.46,"hc-key":"de-st-15002000","hc-a2":"H(","name":"Halle (Saale)","bundesland":"DE.ST"},"geometry":{"type":"Polygon","coordinates":[[[4377,4825],[4344,4826],[4322,4888],[4284,4902],[4254,4973],[4301,4994],[4377,5018],[4450,4925],[4377,4825]]]}},{"type":"Feature","id":"DE.NI.03351000","properties":{"hc-group":"admin2","hc-middle-x":0.56,"hc-middle-y":0.46,"hc-key":"de-ni-03351000","hc-a2":"CE","name":"Celle","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[2387,6499],[2379,6594],[2400,6630],[2468,6651],[2462,6753],[2496,6869],[2592,6826],[2667,6877],[2709,6869],[2745,6921],[2807,6921],[2881,6783],[2986,6756],[2922,6635],[2958,6534],[2936,6499],[2968,6463],[2937,6385],[2917,6400],[2849,6327],[2844,6295],[2767,6329],[2736,6307],[2680,6361],[2604,6359],[2600,6414],[2518,6451],[2447,6456],[2387,6499]]]}},{"type":"Feature","id":"DE.BY.09261000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.61,"hc-key":"de-by-09261000","hc-a2":"LA","name":"Landshut","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4686,788],[4568,778],[4567,800],[4692,851],[4775,906],[4807,903],[4686,788]]]}},{"type":"Feature","id":"DE.ST.15091000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.55,"hc-key":"de-st-15091000","hc-a2":"WI","name":"Wittenberg","bundesland":"DE.ST"},"geometry":{"type":"Polygon","coordinates":[[[4672,5734],[4738,5696],[4763,5722],[4817,5656],[4872,5654],[4930,5700],[5016,5659],[5081,5646],[5091,5600],[5184,5605],[5208,5563],[5260,5561],[5257,5520],[5337,5540],[5355,5509],[5333,5496],[5370,5429],[5359,5379],[5398,5310],[5372,5268],[5285,5208],[5250,5230],[5166,5197],[5102,5251],[5036,5193],[4969,5212],[4937,5152],[4877,5157],[4869,5214],[4819,5202],[4781,5259],[4673,5228],[4658,5297],[4659,5375],[4604,5473],[4634,5508],[4595,5626],[4628,5669],[4672,5734]]]}},{"type":"Feature","id":"DE.BY.09773000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.50,"hc-key":"de-by-09773000","hc-a2":"DA","name":"Dillingen a.d. Donau","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3411,896],[3408,777],[3363,707],[3260,724],[3182,685],[3090,696],[3086,761],[3050,711],[2992,693],[2949,743],[2980,753],[2961,846],[2988,874],[2923,950],[2936,1005],[3009,973],[3013,938],[3081,995],[3068,948],[3138,999],[3177,1077],[3287,1059],[3262,988],[3411,896]]]}},{"type":"Feature","id":"DE.NI.03103000","properties":{"hc-group":"admin2","hc-middle-x":0.57,"hc-middle-y":0.47,"hc-key":"de-ni-03103000","hc-a2":"WO","name":"Wolfsburg","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[3191,6150],[3169,6240],[3246,6250],[3282,6314],[3377,6268],[3378,6107],[3355,6077],[3282,6096],[3191,6150]]]}},{"type":"Feature","id":"DE.BW.08126000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.52,"hc-key":"de-bw-08126000","hc-a2":"HO","name":"Hohenlohekreis","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[2167,1920],[2169,1957],[2283,1936],[2312,2008],[2402,1997],[2412,1970],[2492,1983],[2543,1929],[2518,1784],[2461,1752],[2444,1685],[2412,1687],[2360,1595],[2263,1597],[2246,1563],[2213,1606],[2182,1568],[2102,1642],[2106,1683],[2168,1716],[2141,1754],[2158,1806],[2232,1836],[2167,1920]]]}},{"type":"Feature","id":"DE.NW.05774000","properties":{"hc-group":"admin2","hc-middle-x":0.54,"hc-middle-y":0.49,"hc-key":"de-nw-05774000","hc-a2":"PA","name":"Paderborn","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[1244,5213],[1256,5268],[1347,5338],[1358,5369],[1440,5412],[1544,5406],[1580,5321],[1683,5340],[1727,5309],[1762,5266],[1741,5180],[1743,5072],[1777,5009],[1680,4948],[1600,4960],[1620,4905],[1559,4831],[1458,4878],[1367,4860],[1307,4973],[1319,5029],[1402,5066],[1387,5127],[1309,5162],[1307,5206],[1244,5213]]]}},{"type":"Feature","id":"DE.NW.05116000","properties":{"hc-group":"admin2","hc-middle-x":0.71,"hc-middle-y":0.06,"hc-key":"de-nw-05116000","hc-a2":"MÃ–","name":"MÃ¶nchengladbach","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[-488,4370],[-561,4380],[-565,4424],[-618,4494],[-581,4561],[-508,4552],[-468,4590],[-413,4557],[-442,4561],[-442,4453],[-488,4370]]]}},{"type":"Feature","id":"DE.BY.09278000","properties":{"hc-group":"admin2","hc-middle-x":0.67,"hc-middle-y":0.46,"hc-key":"de-by-09278000","hc-a2":"SB","name":"Straubing-Bogen","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[5343,1438],[5297,1345],[5312,1275],[5239,1267],[5237,1213],[5179,1155],[5087,1102],[5035,1102],[5009,1147],[4929,1155],[4840,1088],[4812,1122],[4774,1085],[4658,1142],[4749,1246],[4828,1284],[4872,1264],[4946,1369],[4924,1441],[4961,1447],[4959,1528],[4970,1569],[5054,1626],[5219,1656],[5275,1531],[5343,1438]],[[4979,1281],[5031,1266],[5138,1313],[5033,1374],[4979,1281]]]}},{"type":"Feature","id":"DE.BW.08121000","properties":{"hc-group":"admin2","hc-middle-x":0.51,"hc-middle-y":0.42,"hc-key":"de-bw-08121000","hc-a2":"HE","name":"Heilbronn","bundesland":"DE.BW"},"geometry":{"type":"Polygon","coordinates":[[[1909,1619],[1849,1648],[1803,1685],[1900,1701],[1998,1638],[2035,1577],[1948,1567],[1910,1540],[1882,1585],[1909,1619]]]}},{"type":"Feature","id":"DE.RP.07317000","properties":{"hc-group":"admin2","hc-middle-x":0.57,"hc-middle-y":0.39,"hc-key":"de-rp-07317000","hc-a2":"PI","name":"Pirmasens","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[511,1648],[460,1628],[403,1699],[454,1750],[548,1740],[511,1648]]]}},{"type":"Feature","id":"DE.NW.05515000","properties":{"hc-group":"admin2","hc-middle-x":0.89,"hc-middle-y":0.40,"hc-key":"de-nw-05515000","hc-a2":"MÃœ","name":"MÃ¼nster","bundesland":"DE.NW"},"geometry":{"type":"Polygon","coordinates":[[[478,5616],[496,5662],[554,5699],[645,5661],[688,5469],[627,5477],[645,5439],[594,5443],[561,5392],[474,5467],[447,5554],[478,5616]]]}},{"type":"Feature","id":"DE.RP.07211000","properties":{"hc-group":"admin2","hc-middle-x":0.62,"hc-middle-y":0.64,"hc-key":"de-rp-07211000","hc-a2":"TR","name":"Trier","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[-394,2512],[-340,2635],[-314,2627],[-284,2535],[-333,2511],[-290,2461],[-326,2434],[-450,2426],[-453,2480],[-394,2512]]]}},{"type":"Feature","id":"DE.RP.07320000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.56,"hc-key":"de-rp-07320000","hc-a2":"ZW","name":"ZweibrÃ¼cken","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[223,1691],[196,1750],[295,1867],[339,1812],[296,1725],[223,1691]]]}},{"type":"Feature","id":"DE.RP.07135000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.47,"hc-key":"de-rp-07135000","hc-a2":"CZ","name":"Cochem-Zell","bundesland":"DE.RP"},"geometry":{"type":"Polygon","coordinates":[[[32,3221],[117,3220],[212,3178],[309,3048],[328,2980],[256,2911],[281,2844],[215,2783],[142,2780],[83,2828],[51,2916],[-17,2924],[-55,2969],[-72,3145],[-25,3137],[32,3221]]]}},{"type":"Feature","id":"DE.BY.09763000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.50,"hc-key":"de-by-09763000","hc-a2":"K(","name":"Kempten (AllgÃ¤u)","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3052,-379],[2966,-393],[2929,-299],[3053,-308],[3052,-379]]]}},{"type":"Feature","id":"DE.NI.03460000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.35,"hc-key":"de-ni-03460000","hc-a2":"VE","name":"Vechta","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[1172,6304],[1082,6280],[1043,6213],[960,6229],[963,6312],[941,6353],[973,6510],[928,6565],[966,6666],[1008,6687],[1084,6672],[1122,6738],[1135,6829],[1197,6842],[1251,6759],[1316,6755],[1304,6725],[1314,6633],[1176,6567],[1161,6516],[1176,6422],[1203,6409],[1172,6304]]]}},{"type":"Feature","id":"DE.BY.09190000","properties":{"hc-group":"admin2","hc-middle-x":0.31,"hc-middle-y":0.64,"hc-key":"de-by-09190000","hc-a2":"WS","name":"Weilheim-Schongau","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3973,-382],[3829,-334],[3628,-363],[3641,-419],[3608,-500],[3570,-440],[3440,-441],[3448,-379],[3396,-405],[3424,-187],[3518,-142],[3565,-164],[3629,-111],[3720,-91],[3780,-25],[3859,-70],[3816,-122],[3910,-114],[3916,-188],[3954,-205],[4014,-246],[4038,-309],[3973,-382]]]}},{"type":"Feature","id":"DE.BB.12052000","properties":{"hc-group":"admin2","hc-middle-x":0.39,"hc-middle-y":0.59,"hc-key":"de-bb-12052000","hc-a2":"CO","name":"Cottbus","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[6332,5493],[6363,5521],[6352,5580],[6418,5547],[6447,5498],[6522,5512],[6532,5473],[6490,5427],[6439,5431],[6489,5364],[6367,5354],[6340,5402],[6332,5493]]]}},{"type":"Feature","id":"DE.NI.03453000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.50,"hc-key":"de-ni-03453000","hc-a2":"CL","name":"Cloppenburg","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[928,6565],[842,6561],[790,6603],[712,6559],[648,6563],[603,6629],[672,6687],[645,6728],[672,6802],[727,6828],[768,6908],[700,6937],[676,7033],[593,7094],[628,7272],[686,7261],[799,7238],[786,7207],[891,7114],[962,7090],[1023,7005],[1020,6905],[1114,6822],[1135,6829],[1122,6738],[1084,6672],[1008,6687],[966,6666],[928,6565]],[[737,6578],[738,6579],[736,6583],[735,6580],[737,6578]]]}},{"type":"Feature","id":"DE.BY.09374000","properties":{"hc-group":"admin2","hc-middle-x":0.85,"hc-middle-y":0.60,"hc-key":"de-by-09374000","hc-a2":"NA","name":"Neustadt a.d. Waldnaab","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4595,2234],[4553,2273],[4474,2271],[4462,2358],[4372,2347],[4312,2369],[4251,2330],[4159,2334],[4159,2499],[4144,2514],[4146,2575],[4296,2644],[4342,2643],[4376,2583],[4468,2614],[4495,2568],[4547,2562],[4560,2605],[4626,2666],[4692,2550],[4842,2539],[4880,2467],[4955,2444],[4966,2349],[4995,2352],[5030,2245],[4971,2232],[4928,2256],[4893,2210],[4760,2198],[4660,2295],[4595,2234]],[[4553,2447],[4571,2364],[4613,2330],[4645,2397],[4709,2357],[4687,2417],[4599,2464],[4553,2447]]]}},{"type":"Feature","id":"DE.BY.09263000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.71,"hc-key":"de-by-09263000","hc-a2":"ST","name":"Straubing","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4979,1281],[5033,1374],[5138,1313],[5031,1266],[4979,1281]]]}},{"type":"Feature","id":"DE.BY.09362000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.59,"hc-key":"de-by-09362000","hc-a2":"RE","name":"Regensburg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4565,1537],[4644,1566],[4657,1535],[4695,1483],[4683,1432],[4595,1425],[4547,1479],[4565,1537]]]}},{"type":"Feature","id":"DE.BB.12066000","properties":{"hc-group":"admin2","hc-middle-x":0.59,"hc-middle-y":0.40,"hc-key":"de-bb-12066000","hc-a2":"OL","name":"Oberspreewald-Lausitz","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[6262,5120],[6216,5090],[6137,4875],[6095,4907],[5992,4871],[5909,4844],[5866,4859],[5888,4943],[5858,5007],[5804,5038],[5820,5074],[5884,5070],[6009,5138],[6011,5251],[5939,5315],[5926,5373],[5966,5373],[5928,5441],[5956,5448],[5941,5537],[5968,5593],[6069,5611],[6164,5587],[6158,5513],[6203,5478],[6187,5414],[6221,5397],[6187,5302],[6230,5252],[6294,5230],[6244,5166],[6262,5120]]]}},{"type":"Feature","id":"DE.BB.12062000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.56,"hc-key":"de-bb-12062000","hc-a2":"EE","name":"Elbe-Elster","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[5926,5373],[5939,5315],[6011,5251],[6009,5138],[5884,5070],[5820,5074],[5804,5038],[5858,5007],[5888,4943],[5866,4859],[5736,4845],[5715,4889],[5663,4900],[5606,4955],[5508,4889],[5443,4877],[5415,4965],[5431,5044],[5386,5136],[5325,5152],[5285,5208],[5372,5268],[5398,5310],[5359,5379],[5370,5429],[5333,5496],[5355,5509],[5363,5544],[5422,5539],[5442,5462],[5533,5482],[5669,5433],[5710,5371],[5806,5379],[5837,5353],[5864,5400],[5926,5373]]]}},{"type":"Feature","id":"DE.BY.09577000","properties":{"hc-group":"admin2","hc-middle-x":0.45,"hc-middle-y":0.54,"hc-key":"de-by-09577000","hc-a2":"WG","name":"WeiÃŸenburg-Gunzenhausen","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3445,1706],[3462,1656],[3539,1616],[3593,1650],[3711,1557],[3745,1559],[3784,1504],[3682,1382],[3672,1316],[3548,1241],[3440,1287],[3425,1358],[3354,1294],[3310,1306],[3321,1360],[3262,1415],[3272,1449],[3312,1493],[3272,1552],[3280,1611],[3328,1677],[3391,1715],[3445,1706]]]}},{"type":"Feature","id":"DE.BY.09561000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.45,"hc-key":"de-by-09561000","hc-a2":"AN","name":"Ansbach","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[3108,1878],[3175,1899],[3274,1873],[3241,1823],[3263,1754],[3182,1788],[3109,1794],[3108,1878]]]}},{"type":"Feature","id":"DE.HE.06533000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.52,"hc-key":"de-he-06533000","hc-a2":"LW","name":"Limburg-Weilburg","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1286,3389],[1191,3341],[1149,3286],[1184,3221],[1095,3180],[1065,3218],[975,3199],[959,3269],[887,3370],[843,3381],[879,3446],[855,3528],[913,3591],[976,3559],[1007,3649],[1055,3599],[1075,3629],[1123,3558],[1189,3521],[1220,3448],[1286,3389]]]}},{"type":"Feature","id":"DE.BB.12061000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.56,"hc-key":"de-bb-12061000","hc-a2":"DS","name":"Dahme-Spreewald","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[5669,5433],[5721,5462],[5692,5556],[5724,5576],[5696,5616],[5592,5615],[5573,5686],[5641,5675],[5697,5725],[5767,5745],[5749,5830],[5671,5861],[5667,5996],[5697,6000],[5656,6062],[5581,6078],[5615,6194],[5544,6245],[5540,6292],[5690,6279],[5735,6258],[5742,6204],[5783,6262],[5833,6230],[5818,6188],[5908,6181],[5931,6128],[5902,6081],[5954,5909],[6035,5940],[6073,5905],[6164,5880],[6182,5832],[6238,5844],[6299,5812],[6374,5875],[6458,5816],[6395,5775],[6422,5686],[6358,5681],[6278,5631],[6240,5563],[6164,5587],[6069,5611],[5968,5593],[5941,5537],[5956,5448],[5928,5441],[5966,5373],[5926,5373],[5864,5400],[5837,5353],[5806,5379],[5710,5371],[5669,5433]]]}},{"type":"Feature","id":"DE.TH.16055000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.46,"hc-key":"de-th-16055000","hc-a2":"WE","name":"Weimar","bundesland":"DE.TH"},"geometry":{"type":"Polygon","coordinates":[[[3759,4155],[3744,4286],[3795,4270],[3855,4267],[3882,4189],[3793,4121],[3759,4155]]]}},{"type":"Feature","id":"DE.SN.14612000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.58,"hc-key":"de-sn-14612000","hc-a2":"DR","name":"Dresden","bundesland":"DE.SN"},"geometry":{"type":"Polygon","coordinates":[[[5950,4586],[6017,4548],[6034,4568],[6079,4466],[6135,4439],[6136,4397],[6060,4325],[6013,4309],[5876,4385],[5820,4376],[5796,4421],[5831,4476],[5888,4460],[5950,4586]]]}},{"type":"Feature","id":"DE.BB.12054000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.50,"hc-key":"de-bb-12054000","hc-a2":"PO","name":"Potsdam","bundesland":"DE.BB"},"geometry":{"type":"Polygon","coordinates":[[[5306,6407],[5257,6289],[5325,6257],[5303,6195],[5199,6189],[5128,6242],[5131,6327],[5087,6337],[5120,6394],[5177,6418],[5237,6346],[5259,6393],[5306,6407]]]}},{"type":"Feature","id":"DE.BY.09363000","properties":{"hc-group":"admin2","hc-middle-x":0.48,"hc-middle-y":0.46,"hc-key":"de-by-09363000","hc-a2":"WI","name":"Weiden i.d. OPf.","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4553,2447],[4599,2464],[4687,2417],[4709,2357],[4645,2397],[4613,2330],[4571,2364],[4553,2447]]]}},{"type":"Feature","id":"DE.HE.06632000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.55,"hc-key":"de-he-06632000","hc-a2":"HR","name":"Hersfeld-Rotenburg","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[2447,4325],[2525,4278],[2603,4277],[2663,4201],[2693,4127],[2601,4130],[2698,4048],[2668,3976],[2605,3961],[2583,3885],[2543,3925],[2446,3942],[2356,3815],[2304,3837],[2269,3880],[2211,3836],[2147,3889],[2153,3921],[2221,3983],[2188,4062],[2208,4112],[2261,4131],[2244,4166],[2272,4240],[2375,4317],[2447,4325]]]}},{"type":"Feature","id":"DE.BY.09663000","properties":{"hc-group":"admin2","hc-middle-x":0.46,"hc-middle-y":0.47,"hc-key":"de-by-09663000","hc-a2":"WÃœ","name":"WÃ¼rzburg","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[2551,2563],[2655,2588],[2666,2562],[2642,2480],[2652,2412],[2556,2467],[2576,2506],[2551,2563]]]}},{"type":"Feature","id":"DE.BY.09173000","properties":{"hc-group":"admin2","hc-middle-x":0.52,"hc-middle-y":0.66,"hc-key":"de-by-09173000","hc-a2":"BT","name":"Bad TÃ¶lz-Wolfratshausen","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4040,18],[4118,-16],[4169,-6],[4226,-57],[4265,-99],[4216,-181],[4262,-198],[4248,-256],[4281,-380],[4257,-404],[4289,-462],[4226,-490],[4250,-515],[4194,-627],[4044,-658],[3963,-609],[3903,-545],[3917,-424],[3973,-382],[4038,-309],[4014,-246],[3954,-205],[3954,-47],[4010,-65],[4040,18]]]}},{"type":"Feature","id":"DE.NI.03257000","properties":{"hc-group":"admin2","hc-middle-x":0.49,"hc-middle-y":0.45,"hc-key":"de-ni-03257000","hc-a2":"SC","name":"Schaumburg","bundesland":"DE.NI"},"geometry":{"type":"Polygon","coordinates":[[[1995,6239],[2077,6213],[2035,6168],[2057,6139],[2114,6170],[2131,6099],[2103,6070],[2147,5988],[2078,5913],[2004,5910],[1895,5858],[1930,5802],[1896,5740],[1888,5791],[1808,5810],[1750,5875],[1801,5860],[1828,5930],[1739,5972],[1761,6059],[1812,6078],[1869,6179],[1941,6189],[1995,6239]]]}},{"type":"Feature","id":"DE.HE.06634000","properties":{"hc-group":"admin2","hc-middle-x":0.50,"hc-middle-y":0.46,"hc-key":"de-he-06634000","hc-a2":"SE","name":"Schwalm-Eder-Kreis","bundesland":"DE.HE"},"geometry":{"type":"Polygon","coordinates":[[[1929,4443],[1995,4482],[2024,4549],[2217,4518],[2293,4446],[2321,4463],[2364,4467],[2404,4413],[2444,4411],[2447,4325],[2375,4317],[2272,4240],[2244,4166],[2261,4131],[2208,4112],[2188,4062],[2221,3983],[2153,3921],[2109,3888],[2084,3926],[1999,3924],[1996,3947],[1894,3977],[1859,4092],[1786,4069],[1740,4119],[1791,4119],[1770,4166],[1826,4212],[1848,4269],[1886,4282],[1957,4385],[1929,4443]]]}},{"type":"Feature","id":"DE.BY.09464000","properties":{"hc-group":"admin2","hc-middle-x":0.53,"hc-middle-y":0.43,"hc-key":"de-by-09464000","hc-a2":"HO","name":"Hof","bundesland":"DE.BY"},"geometry":{"type":"Polygon","coordinates":[[[4422,3302],[4353,3233],[4275,3293],[4339,3314],[4337,3353],[4400,3342],[4422,3302]]]}},{"type":"Feature","properties":{"hc-group":"__border_lines__"},"geometry":{"type":"MultiLineString","coordinates":[[[1484,9168],[1527,9174],[1493,9092],[1453,9086],[1426,9139],[1484,9168]],[[1216,9369],[1271,9260],[1247,9254],[1190,9341],[1216,9369]],[[1410,9352],[1345,9353],[1273,9387],[1276,9414],[1299,9446],[1388,9459],[1429,9438],[1410,9352]],[[3415,9140],[3444,9175],[3524,9158],[3587,9121],[3649,8994],[3564,9007],[3472,8998],[3472,9046],[3396,9051],[3415,9140]],[[3810,8470],[3807,8410],[3777,8380],[3721,8428],[3810,8470]],[[5194,9153],[5120,9119],[5137,9168],[5200,9184],[5194,9153]],[[5085,9162],[5072,9184],[5090,9323],[5116,9263],[5077,9196],[5085,9162]],[[5192,8918],[5126,8961],[5139,9022],[5220,9021],[5197,9103],[5147,9090],[5227,9185],[5205,9218],[5149,9217],[5131,9264],[5257,9283],[5311,9320],[5301,9234],[5331,9266],[5384,9179],[5435,9236],[5412,9304],[5376,9286],[5323,9325],[5310,9370],[5281,9323],[5213,9285],[5235,9409],[5185,9399],[5237,9449],[5349,9471],[5320,9367],[5386,9313],[5529,9342],[5565,9313],[5560,9254],[5486,9185],[5534,9082],[5574,9088],[5656,9007],[5608,8942],[5586,9017],[5531,8986],[5496,9013],[5440,8997],[5376,8937],[5356,8881],[5362,8821],[5199,8881],[5192,8918]],[[-164,7831],[-190,7866],[-98,7894],[-59,7874],[-164,7831]],[[493,8059],[596,8075],[612,8056],[531,8055],[493,8059]],[[693,8104],[779,8103],[732,8074],[681,8082],[693,8104]],[[327,8003],[216,8010],[241,8026],[379,8035],[327,8003]],[[4486,6868],[4484,6869],[4488,6872],[4489,6870],[4486,6868]],[[4566,5988],[4564,5990],[4574,5990],[4573,5987],[4566,5988]],[[4575,5987],[4583,5986],[4582,5985],[4575,5986],[4575,5987]],[[1469,7855],[1480,7851],[1477,7845],[1466,7849],[1469,7855]],[[2409,7778],[2411,7776],[2407,7775],[2407,7775],[2409,7778],[2409,7778],[2409,7778],[2409,7778]],[[5692,6490],[5734,6467],[5699,6387],[5746,6395],[5822,6363],[5783,6262],[5742,6204],[5735,6258],[5690,6279],[5540,6292],[5544,6245],[5475,6285],[5449,6272],[5434,6295],[5349,6288],[5325,6257],[5257,6289],[5306,6407],[5274,6426],[5307,6543],[5344,6528],[5353,6587],[5471,6587],[5502,6624],[5525,6608],[5565,6665],[5608,6626],[5589,6569],[5692,6490]],[[1635,8773],[1615,8807],[1509,8788],[1436,8843],[1512,8902],[1495,8961],[1672,8975],[1771,9095],[1748,9134],[1675,9040],[1605,9058],[1604,9094],[1657,9139],[1675,9236],[1625,9312],[1564,9350],[1553,9401],[1513,9415],[1510,9485],[1441,9585],[1432,9636],[1370,9635],[1291,9587],[1230,9634],[1194,9581],[1194,9438],[1178,9455],[1196,9677],[1265,9851],[1311,9822],[1241,9755],[1256,9657],[1306,9628],[1459,9652],[1468,9676],[1543,9649],[1610,9667],[1727,9661],[1801,9620],[1853,9622],[1956,9589],[1964,9533],[2040,9520],[2071,9575],[2104,9553],[2118,9527],[2159,9552],[2247,9617],[2238,9585],[2336,9535],[2402,9520],[2468,9456],[2494,9520],[2536,9496],[2563,9410],[2600,9372],[2536,9347],[2599,9330],[2599,9297],[2596,9175],[2547,9108],[2449,9071],[2467,9031],[2594,9071],[2686,9085],[2734,9046],[2715,9013],[2735,8954],[2695,8903],[2722,8892],[2769,8990],[2845,9020],[3102,8902],[3164,8844],[3226,8855],[3354,8960],[3418,8939],[3500,8972],[3455,8904],[3479,8704],[3369,8621],[3314,8550],[3257,8547],[3208,8497],[3227,8425],[3279,8408],[3315,8392],[3332,8361]],[[2174,7995],[2174,7998],[2177,7997],[2200,7962],[2200,7932]],[[2194,7946],[2186,7970],[2174,7995]],[[2200,7932],[2199,7931],[2194,7946]],[[2344,7788],[2345,7788]],[[2355,7786],[2347,7786],[2345,7788]],[[2345,7788],[2339,7790],[2339,7790],[2344,7788]],[[2344,7788],[2355,7786],[2355,7786]],[[2406,7774],[2406,7775],[2406,7775]],[[2406,7775],[2407,7775],[2407,7775],[2406,7774]],[[2338,7790],[2338,7790],[2338,7790],[2338,7790]],[[2345,7788],[2338,7790]],[[2338,7790],[2343,7789],[2344,7788]],[[1398,7771],[1386,7793],[1365,7830]],[[1389,7725],[1408,7758],[1398,7771]],[[4044,-658],[4020,-691],[4057,-728],[3976,-725],[3918,-798],[3870,-800],[3895,-750],[3781,-781],[3754,-807],[3631,-802],[3643,-760],[3533,-666],[3577,-645],[3547,-613],[3445,-648],[3361,-587],[3273,-574],[3251,-624],[3138,-596],[3117,-669],[3161,-768],[3088,-847],[3043,-930],[2934,-998],[2878,-999],[2936,-854],[2926,-833],[2824,-852],[2806,-882],[2780,-799],[2810,-779],[2751,-697],[2710,-705],[2678,-616],[2588,-640],[2534,-616],[2541,-560],[2496,-550],[2452,-633],[2331,-567]],[[267,1651],[196,1588],[153,1610],[74,1601],[21,1649],[-20,1589],[-60,1696],[-125,1746],[-219,1733],[-223,1649],[-310,1669],[-322,1747],[-347,1743],[-368,1834],[-440,1895],[-462,1943],[-426,1957],[-465,2031],[-587,2116],[-629,2100],[-641,2197],[-620,2221]],[[4537,3310],[4573,3251],[4537,3232],[4596,3175],[4649,3104],[4647,3012],[4708,2979],[4696,2953],[4747,2948],[4812,2894],[4916,2842],[4900,2790],[4962,2773],[4899,2580],[4842,2539],[4880,2467],[4955,2444],[4966,2349],[4995,2352],[5030,2245],[5077,2221],[5071,2155],[5094,2098],[5189,2046],[5234,1974],[5369,1983],[5444,1933],[5451,1877],[5495,1856],[5525,1796],[5583,1757],[5585,1716],[5648,1677],[5696,1687],[5796,1602],[5824,1500],[5900,1450],[5908,1489],[5980,1493],[6067,1374],[6121,1387],[6232,1232],[6197,1149],[6232,1017],[6150,865],[6027,936],[5945,962],[5938,935],[5879,899],[5900,846],[5864,649],[5724,531],[5656,530],[5517,472],[5446,396],[5378,385],[5358,336],[5272,255],[5291,193],[5378,113],[5399,51],[5459,27],[5528,-107],[5463,-216],[5443,-281],[5522,-300],[5541,-278],[5612,-324],[5632,-395],[5584,-470],[5594,-598],[5557,-639],[5463,-598],[5335,-489],[5375,-441],[5295,-355],[5249,-349],[5157,-375],[5138,-424],[5067,-437],[4997,-341],[4910,-343],[4833,-371],[4839,-297],[4750,-369],[4791,-473],[4653,-463],[4608,-459],[4460,-494],[4454,-522],[4250,-515],[4194,-627],[4044,-658]],[[2259,4682],[2260,4682],[2260,4682]],[[102,5963],[70,6035],[111,6118],[49,6278],[3,6237],[-71,6273],[-139,6275],[-203,6315],[-215,6409],[-141,6421],[-181,6457],[-157,6536],[-25,6540],[66,6520],[107,6527],[128,6759],[143,6813],[226,6939],[255,7036],[250,7179]],[[2373,7795],[2322,7803],[2224,7871],[2237,7889],[2192,8001],[2117,8056],[2089,8145],[2013,8217],[1926,8246],[1737,8249],[1687,8305],[1624,8434],[1664,8465],[1712,8447],[1750,8484],[1704,8581],[1645,8568],[1604,8646],[1635,8773]],[[2379,7784],[2411,7781],[2409,7778],[2409,7778],[2409,7778],[2409,7778],[2407,7779]],[[2372,7784],[2374,7783],[2379,7784]],[[2407,7779],[2400,7776],[2355,7786],[2355,7786],[2359,7786]],[[2359,7786],[2366,7786],[2370,7785]],[[2370,7785],[2371,7785],[2372,7784]],[[250,7179],[231,7215],[265,7298],[260,7360],[295,7467],[340,7471],[103,7501],[88,7528],[115,7702],[149,7748],[211,7771],[170,7822],[226,7896],[303,7954],[401,7978],[558,7958],[688,7995],[774,7999],[861,8012],[959,7993],[966,7904],[1007,7899],[1070,7767],[1057,7725],[979,7714],[989,7653],[1054,7632],[1090,7577],[1132,7561],[1190,7650],[1192,7723],[1121,7733],[1132,7819],[1172,7862],[1221,7852],[1250,7806],[1356,7777],[1389,7725]],[[1365,7830],[1354,7846],[1363,7851]],[[2331,-567],[2282,-562],[2230,-475],[2137,-450],[2092,-461],[2011,-414],[1974,-350],[1828,-257],[1825,-295],[1925,-359],[1968,-454],[1883,-454],[1858,-405],[1757,-347],[1710,-375],[1760,-425],[1662,-474],[1621,-433],[1641,-400],[1581,-355],[1545,-397],[1564,-442],[1505,-417],[1439,-266],[1415,-325],[1399,-265],[1362,-267],[1301,-299],[1267,-315],[1200,-408],[1238,-470],[1320,-481],[1383,-444],[1368,-551],[1305,-498],[1249,-542],[1284,-570],[1222,-591],[1132,-585],[1098,-536],[1010,-514],[922,-565],[903,-600],[738,-613],[717,-558],[646,-556],[624,-597],[529,-630],[457,-567],[366,-444],[360,-390],[392,-333],[380,-271],[408,-140],[468,-20],[423,67],[431,186],[519,338],[531,382],[542,440],[593,486],[582,548],[617,702],[654,742],[654,849],[695,924],[800,1023],[820,1082],[935,1163],[965,1257],[1029,1357],[1056,1366]],[[1056,1366],[968,1386],[905,1414],[781,1498],[761,1480],[722,1464],[655,1510],[631,1485],[543,1483],[505,1522],[412,1558],[382,1660],[338,1682],[267,1651]],[[-620,2221],[-638,2249],[-578,2318],[-543,2413],[-497,2443],[-487,2569],[-521,2596],[-561,2582],[-620,2640],[-654,2621],[-711,2686],[-812,2849],[-835,2949],[-762,3105],[-770,3184],[-677,3224],[-649,3295],[-560,3300]],[[-560,3300],[-613,3381],[-583,3485],[-631,3545],[-711,3544],[-754,3634],[-694,3674],[-666,3726],[-742,3739],[-794,3863],[-860,3878],[-872,3942],[-918,3977],[-872,3998],[-876,4043],[-827,4042],[-812,4134],[-872,4167],[-862,4235],[-970,4227],[-999,4335],[-957,4355],[-919,4309],[-881,4377],[-796,4444],[-721,4474],[-720,4511],[-802,4496],[-807,4595],[-759,4638],[-717,4718],[-667,4761],[-682,4810],[-670,4969],[-770,5103],[-744,5172],[-814,5198],[-804,5259],[-883,5307],[-848,5330],[-884,5400],[-787,5449],[-692,5428],[-734,5502],[-696,5519],[-648,5464],[-576,5462],[-484,5403],[-495,5467],[-426,5437],[-362,5478],[-249,5518],[-209,5489],[-113,5581],[-114,5622],[-232,5691],[-224,5732],[-175,5753],[-165,5799],[-84,5799],[-33,5877],[1,5881],[32,5942],[102,5963]],[[6751,5214],[6762,5137],[6953,5076],[6979,5036],[6981,4923],[7049,4834],[7058,4765],[7029,4648],[7026,4526],[6968,4330],[6906,4247],[6896,4159],[6823,4154],[6732,4195],[6752,4301],[6674,4286],[6701,4375],[6609,4417],[6600,4446],[6541,4408],[6446,4451],[6401,4353],[6448,4353],[6451,4309],[6533,4273],[6523,4238],[6388,4212],[6382,4172],[6221,4084],[6180,4103],[6106,4061],[6109,4004],[6071,3967],[5889,3958],[5778,3915],[5798,3878],[5764,3815],[5733,3768],[5654,3799],[5581,3721],[5548,3748],[5503,3618],[5355,3615],[5353,3539],[5278,3476],[5170,3538],[5096,3495],[5074,3445],[5042,3471],[4963,3453],[4900,3437],[4885,3376],[4803,3325],[4748,3213],[4755,3114],[4700,3147],[4716,3182],[4630,3250],[4612,3319],[4537,3310]],[[2260,4682],[2260,4682],[2260,4682]],[[2259,4682],[2252,4620],[2260,4682],[2260,4682],[2260,4682]],[[2405,7765],[2481,7770],[2373,7795]],[[1363,7851],[1333,7975],[1403,8186],[1444,8236],[1504,8249],[1586,8169],[1682,8160],[1744,8176],[1787,8156],[1779,8179],[1864,8210],[1989,8201],[2020,8172],[2097,8033],[2172,7952],[2211,7860],[2333,7770],[2405,7765]],[[3332,8361],[3449,8435],[3558,8449],[3619,8412],[3615,8349],[3652,8336],[3690,8373],[3780,8293],[3808,8341],[3828,8452],[3871,8478],[3921,8547],[3910,8583],[3845,8507],[3845,8543],[3962,8655],[4105,8651],[4222,8697],[4306,8693],[4384,8802],[4402,8816],[4451,8847],[4490,8879],[4545,8995],[4590,9058],[4620,9146],[4658,9111],[4743,9098],[4958,9112],[4952,9076],[4727,9067],[4698,9023],[4553,8988],[4515,8839],[4607,8896],[4601,8931],[4651,8946],[4665,8999],[4720,8997],[4786,9056],[4814,8998],[4853,9013],[4874,8965],[4933,9004],[4942,9050],[5046,9105],[5046,9050],[5105,9007],[5092,8984],[5126,8887],[5271,8837],[5304,8779],[5309,8732],[5371,8763],[5426,8643],[5440,8683],[5561,8722],[5615,8769],[5618,8737],[5714,8675],[5707,8643],[5717,8674],[5660,8751],[5708,8779],[5768,8679],[5891,8620],[6074,8458],[6069,8374],[5910,8364],[5888,8333],[5752,8326],[5838,8422],[5799,8489],[5853,8529],[5855,8483],[5915,8479],[5920,8545],[5883,8561],[5849,8627],[5762,8539],[5757,8605],[5683,8569],[5693,8599],[5666,8575],[5747,8513],[5818,8431],[5748,8364],[5747,8314],[5877,8227],[6010,8186],[6059,8188],[6094,8226],[6131,8198],[6088,8144],[6147,8119],[6152,8052],[6182,8031],[6176,7940],[6244,7809],[6250,7743],[6292,7634]],[[6292,7634],[6330,7539],[6276,7453],[6291,7372],[6259,7234],[6178,7153],[6104,7103],[6101,7090],[6121,7012],[6106,6917],[6181,6906],[6239,6850],[6302,6822],[6380,6728],[6524,6642],[6565,6587],[6540,6538],[6567,6474],[6500,6385],[6494,6337],[6524,6249],[6565,6169],[6666,6128],[6648,6060],[6655,5948],[6722,5894],[6694,5799],[6685,5659],[6602,5563],[6655,5505],[6670,5431],[6745,5364],[6777,5247],[6751,5214]],[[3876,7038],[3952,7091]],[[3952,7091],[3876,7038]],[[3221,8154],[3226,8241],[3326,8317],[3332,8361]],[[3221,8154],[3226,8241],[3326,8317],[3332,8361]],[[3096,7525],[3127,7655],[3175,7655],[3245,7712],[3288,7779],[3279,7824],[3353,7824],[3384,7929],[3357,8001],[3297,8001],[3220,8065],[3221,8154]],[[3096,7525],[3127,7655],[3175,7655],[3245,7712],[3288,7779],[3279,7824],[3353,7824],[3384,7929],[3357,8001],[3297,8001],[3220,8065],[3221,8154]],[[2194,7946],[2195,7942],[2200,7932]],[[2194,7946],[2195,7942],[2200,7932]],[[2359,7786],[2361,7785],[2370,7784]],[[2359,7786],[2361,7785],[2370,7784]],[[2372,7784],[2372,7784],[2370,7784]],[[2372,7784],[2372,7784],[2370,7784]],[[3668,7202],[3624,7232],[3588,7248],[3606,7277],[3517,7326],[3426,7491],[3368,7510],[3300,7448],[3188,7534],[3096,7525]],[[3668,7202],[3624,7232],[3588,7248],[3606,7277],[3517,7326],[3426,7491],[3368,7510],[3300,7448],[3188,7534],[3096,7525]],[[2406,7774],[2406,7775]],[[2406,7774],[2406,7775]],[[2338,7790],[2338,7790]],[[2338,7790],[2338,7790]],[[1398,7771],[1410,7811],[1365,7830]],[[1398,7771],[1410,7811],[1365,7830]],[[2777,1955],[2771,1890],[2808,1860],[2811,1793],[2781,1775],[2806,1709],[2866,1636],[2913,1612],[2868,1555],[2916,1502],[2913,1474],[3003,1460],[3059,1390],[3104,1307],[3098,1160],[3078,1065],[3113,1044],[3138,999],[3068,948],[3081,995],[3013,938],[3009,973],[2936,1005],[2923,950],[2988,874],[2961,846],[2980,753],[2949,743],[2926,746],[2905,735],[2902,727],[2909,728],[2913,729],[2911,720],[2863,686],[2816,656],[2789,687],[2722,657],[2731,619],[2663,541],[2691,507],[2756,413],[2752,354],[2786,249],[2798,204],[2826,172],[2831,85],[2827,53],[2825,45],[2824,41],[2812,25],[2808,-13],[2798,-16],[2783,-50],[2804,-68],[2805,-203],[2827,-231],[2765,-280],[2814,-314],[2828,-433],[2779,-485],[2762,-427],[2707,-426],[2678,-466],[2549,-440],[2462,-537],[2416,-529],[2383,-528],[2331,-567]],[[2777,1955],[2771,1890],[2808,1860],[2811,1793],[2781,1775],[2806,1709],[2866,1636],[2913,1612],[2868,1555],[2916,1502],[2913,1474],[3003,1460],[3059,1390],[3104,1307],[3098,1160],[3078,1065],[3113,1044],[3138,999],[3068,948],[3081,995],[3013,938],[3009,973],[2936,1005],[2923,950],[2988,874],[2961,846],[2980,753],[2949,743],[2926,746],[2905,735],[2902,727],[2909,728],[2913,729],[2911,720],[2863,686],[2816,656],[2789,687],[2722,657],[2731,619],[2663,541],[2691,507],[2756,413],[2752,354],[2786,249],[2798,204],[2826,172],[2831,85],[2827,53],[2825,45],[2824,41],[2812,25],[2808,-13],[2798,-16],[2783,-50],[2804,-68],[2805,-203],[2827,-231],[2765,-280],[2814,-314],[2828,-433],[2779,-485],[2762,-427],[2707,-426],[2678,-466],[2549,-440],[2462,-537],[2416,-529],[2383,-528],[2331,-567]],[[1856,2217],[1988,2227],[2038,2325],[2131,2312],[2135,2338],[2124,2429],[2031,2442],[2049,2485],[2142,2513],[2189,2501],[2234,2475],[2349,2518],[2329,2395],[2375,2381],[2405,2429],[2429,2374],[2458,2418],[2516,2397],[2509,2340],[2555,2267],[2499,2192],[2543,2177],[2594,2228],[2604,2126],[2631,2087],[2691,2095],[2748,2175],[2782,2131],[2781,2078],[2821,1963],[2777,1955]],[[1856,2217],[1988,2227],[2038,2325],[2131,2312],[2135,2338],[2124,2429],[2031,2442],[2049,2485],[2142,2513],[2189,2501],[2234,2475],[2349,2518],[2329,2395],[2375,2381],[2405,2429],[2429,2374],[2458,2418],[2516,2397],[2509,2340],[2555,2267],[2499,2192],[2543,2177],[2594,2228],[2604,2126],[2631,2087],[2691,2095],[2748,2175],[2782,2131],[2781,2078],[2821,1963],[2777,1955]],[[-620,2221],[-432,2168],[-393,2200],[-286,2220],[-153,2294],[-111,2299],[-28,2327],[26,2269],[83,2274],[195,2194],[218,2174],[215,2079],[169,2031],[187,2020],[205,1998],[210,1971],[298,1945],[303,1943],[304,1939],[305,1909],[295,1867],[196,1750],[223,1691],[250,1654],[267,1651]],[[-620,2221],[-432,2168],[-393,2200],[-286,2220],[-153,2294],[-111,2299],[-28,2327],[26,2269],[83,2274],[195,2194],[218,2174],[215,2079],[169,2031],[187,2020],[205,1998],[210,1971],[298,1945],[303,1943],[304,1939],[305,1909],[295,1867],[196,1750],[223,1691],[250,1654],[267,1651]],[[3242,5120],[3240,5116],[3221,5114]],[[3242,5120],[3240,5116],[3221,5114]],[[3221,5114],[3189,5038],[3122,4998],[3059,5022],[2955,5038],[2952,4993],[2896,4906],[2738,4814],[2687,4820],[2574,4735]],[[3221,5114],[3189,5038],[3122,4998],[3059,5022],[2955,5038],[2952,4993],[2896,4906],[2738,4814],[2687,4820],[2574,4735]],[[4546,7516],[4478,7529],[4464,7563],[4414,7535],[4320,7545],[4295,7480],[4238,7436],[4186,7441],[4136,7368],[4053,7349],[4027,7386],[3967,7381],[3904,7331],[3921,7278],[3894,7214],[3776,7231],[3776,7189],[3668,7202]],[[4546,7516],[4478,7529],[4464,7563],[4414,7535],[4320,7545],[4295,7480],[4238,7436],[4186,7441],[4136,7368],[4053,7349],[4027,7386],[3967,7381],[3904,7331],[3921,7278],[3894,7214],[3776,7231],[3776,7189],[3668,7202]],[[4369,3452],[4429,3403],[4423,3353],[4537,3310]],[[4369,3452],[4429,3403],[4423,3353],[4537,3310]],[[2260,4682],[2260,4682]],[[2260,4682],[2260,4682]],[[2260,4682],[2260,4682],[2259,4682]],[[2260,4682],[2260,4682],[2259,4682]],[[5443,4877],[5415,4965],[5431,5044],[5386,5136],[5325,5152],[5285,5208]],[[5443,4877],[5415,4965],[5431,5044],[5386,5136],[5325,5152],[5285,5208]],[[3668,7202],[3745,7110],[3834,7143],[3867,7110],[3952,7091]],[[3668,7202],[3745,7110],[3834,7143],[3867,7110],[3952,7091]],[[2145,5115],[2140,5117],[2125,5111],[2106,5147],[2096,5265],[2151,5317],[2133,5345],[2160,5413],[2042,5401],[2057,5475],[2029,5496],[1999,5567],[1923,5556],[1926,5701],[1896,5740]],[[2145,5115],[2140,5117],[2125,5111],[2106,5147],[2096,5265],[2151,5317],[2133,5345],[2160,5413],[2042,5401],[2057,5475],[2029,5496],[1999,5567],[1923,5556],[1926,5701],[1896,5740]],[[1896,5740],[1888,5791],[1808,5810],[1750,5875],[1801,5860],[1828,5930],[1739,5972],[1761,6059],[1812,6078],[1869,6179],[1843,6222],[1879,6268],[1807,6302],[1709,6165],[1638,6148],[1512,6156],[1509,6303],[1466,6347],[1384,6302],[1343,6324],[1265,6226],[1162,6244],[1175,6174],[1286,6112],[1304,5979],[1295,5882],[1347,5863],[1250,5788],[1255,5766],[1131,5791],[1069,5711],[983,5688],[927,5704],[882,5660],[802,5727],[908,5770],[909,5855],[824,5876],[840,5977],[867,5991],[845,6032],[875,6064],[814,6142],[741,6131],[662,6174],[642,6248],[573,6277],[541,6220],[568,6203],[539,6145],[424,6084],[319,6012],[302,5989],[180,5996],[131,5964],[130,5964],[102,5963]],[[1896,5740],[1888,5791],[1808,5810],[1750,5875],[1801,5860],[1828,5930],[1739,5972],[1761,6059],[1812,6078],[1869,6179],[1843,6222],[1879,6268],[1807,6302],[1709,6165],[1638,6148],[1512,6156],[1509,6303],[1466,6347],[1384,6302],[1343,6324],[1265,6226],[1162,6244],[1175,6174],[1286,6112],[1304,5979],[1295,5882],[1347,5863],[1250,5788],[1255,5766],[1131,5791],[1069,5711],[983,5688],[927,5704],[882,5660],[802,5727],[908,5770],[909,5855],[824,5876],[840,5977],[867,5991],[845,6032],[875,6064],[814,6142],[741,6131],[662,6174],[642,6248],[573,6277],[541,6220],[568,6203],[539,6145],[424,6084],[319,6012],[302,5989],[180,5996],[131,5964],[130,5964],[102,5963]],[[2145,5115],[2194,5089],[2307,5098],[2359,5022],[2358,5000],[2348,5002],[2307,5009],[2327,4980],[2276,4938],[2324,4859],[2325,4792],[2244,4713],[2242,4709],[2249,4703],[2250,4698],[2251,4694],[2259,4682]],[[2145,5115],[2194,5089],[2307,5098],[2359,5022],[2358,5000],[2348,5002],[2307,5009],[2327,4980],[2276,4938],[2324,4859],[2325,4792],[2244,4713],[2242,4709],[2249,4703],[2250,4698],[2251,4694],[2259,4682]],[[2855,7617],[2795,7686],[2793,7705],[2732,7738],[2717,7801],[2762,7827],[2778,7896],[2709,7960],[2733,8041],[2652,8001],[2653,8000],[2650,7996],[2658,7993],[2651,7983],[2591,7960],[2548,7920],[2449,7823],[2403,7867],[2373,7795]],[[2855,7617],[2795,7686],[2793,7705],[2732,7738],[2717,7801],[2762,7827],[2778,7896],[2709,7960],[2733,8041],[2652,8001],[2653,8000],[2650,7996],[2658,7993],[2651,7983],[2591,7960],[2548,7920],[2449,7823],[2403,7867],[2373,7795]],[[2403,7712],[2480,7616],[2510,7646],[2585,7588],[2640,7657],[2745,7564],[2801,7568],[2855,7617]],[[2403,7712],[2480,7616],[2510,7646],[2585,7588],[2640,7657],[2745,7564],[2801,7568],[2855,7617]],[[2855,7617],[2911,7606],[2990,7554],[3021,7536],[3096,7525]],[[2855,7617],[2911,7606],[2990,7554],[3021,7536],[3096,7525]],[[2379,7784],[2407,7780],[2407,7779]],[[2379,7784],[2407,7780],[2407,7779]],[[2370,7784],[2370,7785]],[[2370,7784],[2370,7785]],[[1389,7725],[1357,7704],[1339,7664],[1433,7680],[1471,7717],[1423,7832],[1363,7851]],[[1389,7725],[1357,7704],[1339,7664],[1433,7680],[1471,7717],[1423,7832],[1363,7851]],[[1237,2227],[1238,2222],[1237,2214],[1229,2189],[1237,2169],[1273,2072],[1281,2031],[1314,2014],[1304,1986],[1306,1955],[1279,1887],[1267,1849],[1293,1816],[1289,1812],[1275,1807],[1242,1772],[1225,1761],[1182,1642],[1156,1524],[1134,1497],[1097,1399],[1090,1393],[1083,1386],[1062,1370],[1056,1366]],[[1237,2227],[1238,2222],[1237,2214],[1229,2189],[1237,2169],[1273,2072],[1281,2031],[1314,2014],[1304,1986],[1306,1955],[1279,1887],[1267,1849],[1293,1816],[1289,1812],[1275,1807],[1242,1772],[1225,1761],[1182,1642],[1156,1524],[1134,1497],[1097,1399],[1090,1393],[1083,1386],[1062,1370],[1056,1366]],[[1856,2217],[1853,2209],[1852,2193],[1828,2200],[1842,2176],[1877,2139],[1838,2145],[1801,2107],[1718,2116],[1700,2067],[1629,1964],[1604,2066],[1670,2087],[1671,2101],[1671,2113],[1607,2101],[1498,2154],[1472,2273],[1477,2274],[1472,2280],[1471,2280],[1470,2285],[1393,2264],[1418,2172],[1381,2137],[1355,2138],[1275,2235],[1237,2227]],[[1856,2217],[1853,2209],[1852,2193],[1828,2200],[1842,2176],[1877,2139],[1838,2145],[1801,2107],[1718,2116],[1700,2067],[1629,1964],[1604,2066],[1670,2087],[1671,2101],[1671,2113],[1607,2101],[1498,2154],[1472,2273],[1477,2274],[1472,2280],[1471,2280],[1470,2285],[1393,2264],[1418,2172],[1381,2137],[1355,2138],[1275,2235],[1237,2227]],[[172,3698],[173,3729],[172,3734],[161,3733],[158,3725],[114,3667],[67,3649],[33,3677],[-20,3621],[-83,3614],[-120,3543],[-110,3489],[-152,3470],[-199,3523],[-252,3454],[-216,3425],[-204,3342],[-296,3309],[-323,3360],[-363,3333],[-380,3384],[-488,3318],[-575,3385],[-542,3299],[-551,3301],[-560,3300]],[[172,3698],[173,3729],[172,3734],[161,3733],[158,3725],[114,3667],[67,3649],[33,3677],[-20,3621],[-83,3614],[-120,3543],[-110,3489],[-152,3470],[-199,3523],[-252,3454],[-216,3425],[-204,3342],[-296,3309],[-323,3360],[-363,3333],[-380,3384],[-488,3318],[-575,3385],[-542,3299],[-551,3301],[-560,3300]],[[5285,5208],[5372,5268],[5398,5310],[5359,5379],[5370,5429],[5333,5496],[5355,5509],[5337,5540],[5257,5520],[5260,5561],[5208,5563],[5184,5605],[5091,5600],[5081,5646],[5016,5659],[4930,5700],[4872,5654],[4817,5656],[4763,5722],[4738,5696],[4672,5734],[4630,5766],[4583,5812],[4527,5902],[4592,5988],[4546,6012],[4595,6150],[4573,6176],[4595,6303],[4539,6391],[4468,6371],[4442,6400],[4461,6538],[4511,6545],[4515,6604],[4477,6671],[4516,6773],[4497,6868],[4466,6891],[4406,6854],[4406,6905],[4284,6880],[4148,6937],[4167,6965],[3952,7091]],[[5285,5208],[5372,5268],[5398,5310],[5359,5379],[5370,5429],[5333,5496],[5355,5509],[5337,5540],[5257,5520],[5260,5561],[5208,5563],[5184,5605],[5091,5600],[5081,5646],[5016,5659],[4930,5700],[4872,5654],[4817,5656],[4763,5722],[4738,5696],[4672,5734],[4630,5766],[4583,5812],[4527,5902],[4592,5988],[4546,6012],[4595,6150],[4573,6176],[4595,6303],[4539,6391],[4468,6371],[4442,6400],[4461,6538],[4511,6545],[4515,6604],[4477,6671],[4516,6773],[4497,6868],[4466,6891],[4406,6854],[4406,6905],[4284,6880],[4148,6937],[4167,6965],[3952,7091]],[[6751,5214],[6650,5162],[6612,5203],[6510,5140]],[[6751,5214],[6650,5162],[6612,5203],[6510,5140]],[[5443,4877],[5508,4889],[5606,4955],[5663,4900],[5715,4889],[5736,4845],[5866,4859],[5909,4844],[5992,4871],[6095,4907],[6137,4875],[6216,5090],[6262,5120],[6421,5100],[6510,5140]],[[5443,4877],[5508,4889],[5606,4955],[5663,4900],[5715,4889],[5736,4845],[5866,4859],[5909,4844],[5992,4871],[6095,4907],[6137,4875],[6216,5090],[6262,5120],[6421,5100],[6510,5140]],[[2690,3536],[2690,3506],[2598,3399],[2551,3369],[2441,3404],[2417,3308],[2431,3250],[2333,3161],[2321,3130],[2248,3123],[2211,3149],[2236,3044],[2212,2945],[2126,2931],[2094,2992],[1961,3016],[1896,2934],[1871,2983],[1778,2963],[1754,2901],[1790,2862],[1777,2795],[1791,2702],[1807,2620],[1792,2621],[1795,2593],[1859,2470],[1899,2448],[1847,2382],[1855,2307],[1822,2276],[1856,2217]],[[2690,3536],[2690,3506],[2598,3399],[2551,3369],[2441,3404],[2417,3308],[2431,3250],[2333,3161],[2321,3130],[2248,3123],[2211,3149],[2236,3044],[2212,2945],[2126,2931],[2094,2992],[1961,3016],[1896,2934],[1871,2983],[1778,2963],[1754,2901],[1790,2862],[1777,2795],[1791,2702],[1807,2620],[1792,2621],[1795,2593],[1859,2470],[1899,2448],[1847,2382],[1855,2307],[1822,2276],[1856,2217]],[[4369,3452],[4285,3400],[4258,3439],[4108,3390],[4088,3405],[4015,3368],[3978,3447],[3923,3462],[3923,3564],[3853,3569],[3783,3508],[3767,3506],[3805,3342],[3776,3212],[3724,3215],[3684,3233],[3694,3297],[3653,3347],[3589,3314],[3501,3370],[3438,3383],[3358,3365],[3297,3274],[3416,3212],[3397,3159],[3314,3177],[3312,3147],[3275,3140],[3206,3141],[3194,3289],[3118,3310],[3058,3382],[3002,3375],[2948,3509],[2882,3533],[2834,3591],[2777,3574],[2748,3603],[2690,3536]],[[4369,3452],[4285,3400],[4258,3439],[4108,3390],[4088,3405],[4015,3368],[3978,3447],[3923,3462],[3923,3564],[3853,3569],[3783,3508],[3767,3506],[3805,3342],[3776,3212],[3724,3215],[3684,3233],[3694,3297],[3653,3347],[3589,3314],[3501,3370],[3438,3383],[3358,3365],[3297,3274],[3416,3212],[3397,3159],[3314,3177],[3312,3147],[3275,3140],[3206,3141],[3194,3289],[3118,3310],[3058,3382],[3002,3375],[2948,3509],[2882,3533],[2834,3591],[2777,3574],[2748,3603],[2690,3536]],[[2574,4735],[2614,4609],[2691,4597],[2699,4530],[2822,4480],[2848,4472],[2826,4415],[2746,4408],[2797,4363],[2767,4295],[2822,4230],[2812,4212],[2805,4211],[2673,4227],[2663,4201],[2693,4127],[2601,4130],[2698,4048],[2668,3976],[2605,3961],[2583,3885],[2597,3846],[2545,3753],[2550,3698],[2616,3693],[2604,3738],[2694,3756],[2720,3705],[2685,3670],[2708,3592],[2690,3536]],[[2574,4735],[2614,4609],[2691,4597],[2699,4530],[2822,4480],[2848,4472],[2826,4415],[2746,4408],[2797,4363],[2767,4295],[2822,4230],[2812,4212],[2805,4211],[2673,4227],[2663,4201],[2693,4127],[2601,4130],[2698,4048],[2668,3976],[2605,3961],[2583,3885],[2597,3846],[2545,3753],[2550,3698],[2616,3693],[2604,3738],[2694,3756],[2720,3705],[2685,3670],[2708,3592],[2690,3536]],[[986,3770],[971,3731],[1007,3649]],[[986,3770],[971,3731],[1007,3649]],[[986,3770],[962,3795],[909,3788],[911,3827],[848,3895],[858,3978],[727,4049],[747,4109],[714,4130],[690,4130],[663,3995],[576,3965],[589,3907],[537,3895],[378,3816],[319,3827],[304,3731],[172,3698]],[[986,3770],[962,3795],[909,3788],[911,3827],[848,3895],[858,3978],[727,4049],[747,4109],[714,4130],[690,4130],[663,3995],[576,3965],[589,3907],[537,3895],[378,3816],[319,3827],[304,3731],[172,3698]],[[1237,2227],[1230,2243],[1178,2360],[1260,2433],[1262,2436],[1262,2437],[1289,2469],[1241,2485],[1219,2535],[1168,2654],[1169,2727],[1151,2773],[1121,2803],[1082,2849],[1033,2860],[1025,2860],[1019,2859],[831,2783],[758,2775],[659,2909],[707,2929],[738,2993],[798,2958],[804,3015],[759,3068],[794,3105],[918,3140],[885,3174],[975,3199],[959,3269],[887,3370],[843,3381],[879,3446],[855,3528],[913,3591],[976,3559],[1007,3649]],[[1237,2227],[1230,2243],[1178,2360],[1260,2433],[1262,2436],[1262,2437],[1289,2469],[1241,2485],[1219,2535],[1168,2654],[1169,2727],[1151,2773],[1121,2803],[1082,2849],[1033,2860],[1025,2860],[1019,2859],[831,2783],[758,2775],[659,2909],[707,2929],[738,2993],[798,2958],[804,3015],[759,3068],[794,3105],[918,3140],[885,3174],[975,3199],[959,3269],[887,3370],[843,3381],[879,3446],[855,3528],[913,3591],[976,3559],[1007,3649]],[[2260,4682],[2319,4651],[2404,4621],[2435,4637],[2377,4718],[2463,4750],[2456,4778],[2554,4799],[2574,4735]],[[2260,4682],[2319,4651],[2404,4621],[2435,4637],[2377,4718],[2463,4750],[2456,4778],[2554,4799],[2574,4735]],[[3952,7091],[3952,7091]],[[3952,7091],[3952,7091]],[[3952,7091],[3952,7091]],[[2145,5115],[2055,5065],[2082,5036],[2038,4978],[2031,4922],[1951,4878],[1898,4824],[1852,4825],[1843,4896],[1778,4929],[1736,4914],[1666,4879],[1717,4804],[1709,4750],[1634,4732],[1591,4752],[1500,4733],[1373,4594],[1405,4552],[1518,4588],[1541,4441],[1462,4339],[1365,4349],[1323,4318],[1355,4233],[1301,4163],[1261,4093],[1192,4015],[1116,4042],[987,3914],[1023,3840],[986,3770]],[[2145,5115],[2055,5065],[2082,5036],[2038,4978],[2031,4922],[1951,4878],[1898,4824],[1852,4825],[1843,4896],[1778,4929],[1736,4914],[1666,4879],[1717,4804],[1709,4750],[1634,4732],[1591,4752],[1500,4733],[1373,4594],[1405,4552],[1518,4588],[1541,4441],[1462,4339],[1365,4349],[1323,4318],[1355,4233],[1301,4163],[1261,4093],[1192,4015],[1116,4042],[987,3914],[1023,3840],[986,3770]],[[2405,7765],[2410,7734],[2403,7712]],[[2405,7765],[2410,7734],[2403,7712]],[[4546,7516],[4547,7515],[4552,7511],[4604,7492],[4651,7421],[4738,7442],[4838,7404],[4915,7398],[4923,7349],[4993,7370],[5029,7343],[5076,7371],[5110,7325],[5208,7402],[5204,7430],[5267,7455],[5320,7432],[5320,7432],[5363,7503],[5416,7502],[5455,7459],[5480,7536],[5519,7528],[5549,7569],[5564,7681],[5626,7699],[5635,7753],[5690,7801],[5748,7798],[5786,7835],[5744,7853],[5745,7907],[5829,7846],[5869,7733],[5937,7756],[5981,7729],[6037,7773],[6124,7769],[6131,7663],[6036,7520],[6176,7527],[6213,7604],[6292,7634]],[[4546,7516],[4547,7515],[4552,7511],[4604,7492],[4651,7421],[4738,7442],[4838,7404],[4915,7398],[4923,7349],[4993,7370],[5029,7343],[5076,7371],[5110,7325],[5208,7402],[5204,7430],[5267,7455],[5320,7432],[5320,7432],[5363,7503],[5416,7502],[5455,7459],[5480,7536],[5519,7528],[5549,7569],[5564,7681],[5626,7699],[5635,7753],[5690,7801],[5748,7798],[5786,7835],[5744,7853],[5745,7907],[5829,7846],[5869,7733],[5937,7756],[5981,7729],[6037,7773],[6124,7769],[6131,7663],[6036,7520],[6176,7527],[6213,7604],[6292,7634]],[[4653,4397],[4597,4421],[4573,4464],[4585,4523],[4542,4650],[4519,4711],[4559,4731],[4583,4745],[4601,4755],[4619,4856],[4731,4858],[4768,4902],[4824,4782],[4952,4849],[4948,4902],[5070,4946],[5151,4918],[5209,4870],[5176,4855],[5208,4810],[5155,4715],[5204,4675],[5208,4602],[5315,4602],[5447,4632],[5459,4688],[5421,4834],[5443,4877]],[[4653,4397],[4597,4421],[4573,4464],[4585,4523],[4542,4650],[4519,4711],[4559,4731],[4583,4745],[4601,4755],[4619,4856],[4731,4858],[4768,4902],[4824,4782],[4952,4849],[4948,4902],[5070,4946],[5151,4918],[5209,4870],[5176,4855],[5208,4810],[5155,4715],[5204,4675],[5208,4602],[5315,4602],[5447,4632],[5459,4688],[5421,4834],[5443,4877]],[[3242,5120],[3297,5131],[3430,5089],[3414,5006],[3460,4979],[3491,4825],[3572,4830],[3645,4794],[3791,4811],[3859,4772],[3857,4742],[3857,4734],[3864,4728],[3863,4721],[3868,4718],[3871,4715],[3874,4719],[3889,4720],[3889,4715],[3876,4706],[3930,4654],[3879,4577],[3855,4583],[3838,4548],[3910,4519],[3905,4520],[3909,4517],[3911,4513],[3911,4519],[3930,4511],[3917,4446],[3949,4389],[4025,4411],[4136,4371],[4205,4314],[4295,4335],[4390,4278],[4428,4216],[4487,4229],[4555,4207],[4571,4232],[4609,4187],[4664,4296],[4628,4321],[4653,4397]],[[3242,5120],[3297,5131],[3430,5089],[3414,5006],[3460,4979],[3491,4825],[3572,4830],[3645,4794],[3791,4811],[3859,4772],[3857,4742],[3857,4734],[3864,4728],[3863,4721],[3868,4718],[3871,4715],[3874,4719],[3889,4720],[3889,4715],[3876,4706],[3930,4654],[3879,4577],[3855,4583],[3838,4548],[3910,4519],[3905,4520],[3909,4517],[3911,4513],[3911,4519],[3930,4511],[3917,4446],[3949,4389],[4025,4411],[4136,4371],[4205,4314],[4295,4335],[4390,4278],[4428,4216],[4487,4229],[4555,4207],[4571,4232],[4609,4187],[4664,4296],[4628,4321],[4653,4397]],[[4369,3452],[4340,3477],[4405,3541],[4320,3611],[4382,3686],[4435,3717],[4448,3656],[4498,3640],[4575,3679],[4530,3688],[4562,3746],[4600,3727],[4694,3783],[4710,3819],[4670,3831],[4658,3902],[4624,3906],[4675,3976],[4641,4014],[4726,4026],[4740,4058],[4809,4058],[4821,4110],[4874,4150],[4979,4149],[4989,4178],[4968,4204],[4954,4257],[4872,4282],[4841,4371],[4734,4381],[4694,4416],[4653,4397]],[[4369,3452],[4340,3477],[4405,3541],[4320,3611],[4382,3686],[4435,3717],[4448,3656],[4498,3640],[4575,3679],[4530,3688],[4562,3746],[4600,3727],[4694,3783],[4710,3819],[4670,3831],[4658,3902],[4624,3906],[4675,3976],[4641,4014],[4726,4026],[4740,4058],[4809,4058],[4821,4110],[4874,4150],[4979,4149],[4989,4178],[4968,4204],[4954,4257],[4872,4282],[4841,4371],[4734,4381],[4694,4416],[4653,4397]],[[3876,7038],[3878,6956],[3704,6858],[3640,6887],[3536,6906],[3453,6901],[3404,6819],[3321,6815],[3258,6799],[3253,6734],[3288,6621],[3311,6627],[3414,6449],[3423,6391],[3476,6322],[3421,6314],[3414,6285],[3439,6234],[3534,6129],[3461,6104],[3507,6062],[3546,5934],[3493,5882],[3533,5869],[3523,5819],[3464,5774],[3455,5705],[3379,5706],[3315,5690],[3183,5678],[3176,5641],[3109,5623],[3185,5554],[3157,5509],[3188,5489],[3128,5398],[3144,5293],[3211,5215],[3242,5120]],[[3876,7038],[3878,6956],[3704,6858],[3640,6887],[3536,6906],[3453,6901],[3404,6819],[3321,6815],[3258,6799],[3253,6734],[3288,6621],[3311,6627],[3414,6449],[3423,6391],[3476,6322],[3421,6314],[3414,6285],[3439,6234],[3534,6129],[3461,6104],[3507,6062],[3546,5934],[3493,5882],[3533,5869],[3523,5819],[3464,5774],[3455,5705],[3379,5706],[3315,5690],[3183,5678],[3176,5641],[3109,5623],[3185,5554],[3157,5509],[3188,5489],[3128,5398],[3144,5293],[3211,5215],[3242,5120]]]}}]}

Highcharts.maps["custom/world"] = {"title":"World, Miller projection, medium resolution","version":"1.1.2","type":"FeatureCollection","copyright":"Copyright (c) 2015 Highsoft AS, Based on data from Natural Earth","copyrightShort":"Natural Earth","copyrightUrl":"http://www.naturalearthdata.com","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG:54003"}},"hc-transform":{"default":{"crs":"+proj=mill +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R_A +datum=WGS84 +units=m +no_defs","scale":1.72182781654e-05,"jsonres":15.5,"jsonmarginX":-999,"jsonmarginY":9851.0,"xoffset":-19495356.3693,"yoffset":12635908.1982}},