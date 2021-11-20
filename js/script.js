

//  MOSTION JS
         (function ($) { "use strict";var playRepeat = [];
         	s4.animate.gsap["cover-290"] = gsap.timeline({
         		scrollTrigger: "#content-holder #cover-290",
         		repeat: 0,
         		
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #cover-290", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"opacity":1}');
         	// add to timeline
         	s4.animate.gsap["cover-290"].to("#content-holder #cover-290", props);
         	// pause timeline
         	s4.animate.gsap["cover-290"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_yobyonpp3"] = gsap.timeline({
         		scrollTrigger: "#content-holder #content_yobyonpp3 .is-content",
         		repeat: 0,
         		
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #content_yobyonpp3 .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"0.8","scaleY":"0.8"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":12,"ease":"Power1.easeInOut","delay":0,"scaleX":0.4,"scaleY":0.4,"rotation":"355deg"}');
         	// add to timeline
         	s4.animate.gsap["content_yobyonpp3"].to("#content-holder #content_yobyonpp3 .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_yobyonpp3"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_u1c3cixdi"] = gsap.timeline({
         		scrollTrigger: "#content-holder #content_u1c3cixdi .is-content",
         		repeat: 0,
         		
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #content_u1c3cixdi .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"0.4","scaleY":"0.4"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":10,"ease":"Power1.easeInOut","delay":0,"scaleX":0.8,"scaleY":0.8,"rotation":"374deg"}');
         	// add to timeline
         	s4.animate.gsap["content_u1c3cixdi"].to("#content-holder #content_u1c3cixdi .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_u1c3cixdi"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_p7ogcz6fe"] = gsap.timeline({
         		repeat: 0,
         		onRepeat: function() {
         			if(playRepeat["content_p7ogcz6fe"] !== true) {
         				s4.animate.gsap["content_p7ogcz6fe"].pause();
         			}
         		},
         		
         	});
         
         $(document).on("mouseover", "#content-holder #content_p7ogcz6fe", function() {
         	s4.animate.gsap["content_p7ogcz6fe"].play();
         	playRepeat["content_p7ogcz6fe"] = true;
         	
         });
         $(document).on("mouseout", "#content-holder #content_p7ogcz6fe", function() {
         	s4.animate.gsap["content_p7ogcz6fe"].reverse();
         	playRepeat["content_p7ogcz6fe"] = false;
         	
         });
         
         			// gsap set transform
         			gsap.set("#content-holder #content_p7ogcz6fe", JSON.parse('{"translateY":"1.1111rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["content_p7ogcz6fe"].to("#content-holder #content_p7ogcz6fe", props);
         	// pause timeline
         	s4.animate.gsap["content_p7ogcz6fe"].pause();
         var playRepeat = [];var endDuration = 50;var options = JSON.parse('{"id":"content_td54mca8h","trigger":"#content-holder #content_td54mca8h .is-content","start":"top bottom-=50%","end":"migrated top+=50%","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("content_td54mca8h");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("content_td54mca8h".indexOf("section_") > -1 || "content_td54mca8h".indexOf("cover") > -1) {
         			$("#content_td54mca8h").wrap("<div class='section-pin sp_content_td54mca8h'></div>");
         			options["trigger"] = ".sp_content_td54mca8h";
         		} else if("content_td54mca8h".indexOf("column_") > -1) {
         			$("#content_td54mca8h").wrap("<div class='column-pin-outer cpo_content_td54mca8h'><div class='column-pin-inner cpi_content_td54mca8h '></div></div>");
         			options["trigger"] = ".cpi_content_td54mca8h";
         			var atts = $("#content_td54mca8h").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_content_td54mca8h").attr(attr.name, attr.value);
         				}
         			});
         		} else if("content_td54mca8h".indexOf("content_") > -1) {
         			options["trigger"] = "#content_td54mca8h";
         		}
         		gsap.set("#content_td54mca8h", {zIndex: "1"});
         	}
         	s4.animate.gsap["content_td54mca8h"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #content_td54mca8h .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"0.8","scaleY":"0.8"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"scaleX":1,"scaleY":1,"rotation":"80deg"}');
         	// add to timeline
         	s4.animate.gsap["content_td54mca8h"].to("#content-holder #content_td54mca8h .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_td54mca8h"].pause();
         var playRepeat = [];var endDuration = 50;var options = JSON.parse('{"id":"section_bc53a515e","trigger":"#content-holder #section_bc53a515e","start":"top bottom-=100%","end":"+=150%","pin":true,"markers":false,"pinSpacing":false,"scrub":0}');
         	if(options.pin === true) {
         		if("section_bc53a515e".indexOf("section_") > -1 || "section_bc53a515e".indexOf("cover") > -1) {
         			$("#section_bc53a515e").wrap("<div class='section-pin sp_section_bc53a515e'></div>");
         			options["trigger"] = ".sp_section_bc53a515e";
         		} else if("section_bc53a515e".indexOf("column_") > -1) {
         			$("#section_bc53a515e").wrap("<div class='column-pin-outer cpo_section_bc53a515e'><div class='column-pin-inner cpi_section_bc53a515e '></div></div>");
         			options["trigger"] = ".cpi_section_bc53a515e";
         			var atts = $("#section_bc53a515e").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_section_bc53a515e").attr(attr.name, attr.value);
         				}
         			});
         		} else if("section_bc53a515e".indexOf("content_") > -1) {
         			options["trigger"] = "#section_bc53a515e";
         		}
         		
         	}
         	s4.animate.gsap["section_bc53a515e"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #section_bc53a515e", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"opacity":0.6}');
         	// add to timeline
         	s4.animate.gsap["section_bc53a515e"].to("#content-holder #section_bc53a515e", props);
         	// pause timeline
         	s4.animate.gsap["section_bc53a515e"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_6ldv51d03"] = gsap.timeline({
         		scrollTrigger: "#content-holder #content_6ldv51d03 .is-content",
         		repeat: 0,
         		
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #content_6ldv51d03 .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"0.8","scaleY":"0.8"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":12,"ease":"Power2.easeInOut","delay":0,"scaleX":0.4,"scaleY":0.4,"rotation":"280deg"}');
         	// add to timeline
         	s4.animate.gsap["content_6ldv51d03"].to("#content-holder #content_6ldv51d03 .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_6ldv51d03"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_23c93jxq7"] = gsap.timeline({
         		scrollTrigger: "#content-holder #content_23c93jxq7 .is-content",
         		repeat: 0,
         		
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #content_23c93jxq7 .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"0.4","scaleY":"0.4"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":10,"ease":"Power1.easeInOut","delay":0,"scaleX":0.8,"scaleY":0.8,"rotation":"320deg"}');
         	// add to timeline
         	s4.animate.gsap["content_23c93jxq7"].to("#content-holder #content_23c93jxq7 .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_23c93jxq7"].pause();
         var playRepeat = [];var endDuration = 50;var options = JSON.parse('{"id":"section_b0df61d99","trigger":"#content-holder #section_b0df61d99","start":"top bottom-=50%","end":"migrated top+=50%","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("section_b0df61d99");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("section_b0df61d99".indexOf("section_") > -1 || "section_b0df61d99".indexOf("cover") > -1) {
         			$("#section_b0df61d99").wrap("<div class='section-pin sp_section_b0df61d99'></div>");
         			options["trigger"] = ".sp_section_b0df61d99";
         		} else if("section_b0df61d99".indexOf("column_") > -1) {
         			$("#section_b0df61d99").wrap("<div class='column-pin-outer cpo_section_b0df61d99'><div class='column-pin-inner cpi_section_b0df61d99 '></div></div>");
         			options["trigger"] = ".cpi_section_b0df61d99";
         			var atts = $("#section_b0df61d99").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_section_b0df61d99").attr(attr.name, attr.value);
         				}
         			});
         		} else if("section_b0df61d99".indexOf("content_") > -1) {
         			options["trigger"] = "#section_b0df61d99";
         		}
         		gsap.set(".sp_section_b0df61d99", {zIndex: "2"});
         	}
         	s4.animate.gsap["section_b0df61d99"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #section_b0df61d99", JSON.parse('{"translateY":"2.6667rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["section_b0df61d99"].to("#content-holder #section_b0df61d99", props);
         	// pause timeline
         	s4.animate.gsap["section_b0df61d99"].pause();
         var playRepeat = [];var endDuration = 50;var options = JSON.parse('{"id":"column_f9e4fbfa5","trigger":"#content-holder #column_f9e4fbfa5","start":"top bottom-=50%","end":"migrated top+=50%","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("column_f9e4fbfa5");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("column_f9e4fbfa5".indexOf("section_") > -1 || "column_f9e4fbfa5".indexOf("cover") > -1) {
         			$("#column_f9e4fbfa5").wrap("<div class='section-pin sp_column_f9e4fbfa5'></div>");
         			options["trigger"] = ".sp_column_f9e4fbfa5";
         		} else if("column_f9e4fbfa5".indexOf("column_") > -1) {
         			$("#column_f9e4fbfa5").wrap("<div class='column-pin-outer cpo_column_f9e4fbfa5'><div class='column-pin-inner cpi_column_f9e4fbfa5 '></div></div>");
         			options["trigger"] = ".cpi_column_f9e4fbfa5";
         			var atts = $("#column_f9e4fbfa5").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_column_f9e4fbfa5").attr(attr.name, attr.value);
         				}
         			});
         		} else if("column_f9e4fbfa5".indexOf("content_") > -1) {
         			options["trigger"] = "#column_f9e4fbfa5";
         		}
         		
         	}
         	s4.animate.gsap["column_f9e4fbfa5"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #column_f9e4fbfa5", JSON.parse('{"translateY":"2.6667rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["column_f9e4fbfa5"].to("#content-holder #column_f9e4fbfa5", props);
         	// pause timeline
         	s4.animate.gsap["column_f9e4fbfa5"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_8f61ccd81"] = gsap.timeline({
         		repeat: 0,
         		onRepeat: function() {
         			if(playRepeat["content_8f61ccd81"] !== true) {
         				s4.animate.gsap["content_8f61ccd81"].pause();
         			}
         		},
         		
         	});
         
         $(document).on("mouseover", "#content-holder #content_8f61ccd81 .is-content", function() {
         	s4.animate.gsap["content_8f61ccd81"].play();
         	playRepeat["content_8f61ccd81"] = true;
         	
         });
         $(document).on("mouseout", "#content-holder #content_8f61ccd81 .is-content", function() {
         	s4.animate.gsap["content_8f61ccd81"].reverse();
         	playRepeat["content_8f61ccd81"] = false;
         	
         });
         
         			// gsap set transform
         			gsap.set("#content-holder #content_8f61ccd81 .is-content", JSON.parse('{"translateY":"1.1111rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["content_8f61ccd81"].to("#content-holder #content_8f61ccd81 .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_8f61ccd81"].pause();
         var playRepeat = [];var endDuration = 100;var options = JSON.parse('{"id":"content_gbonn6da4","trigger":"#content-holder #content_gbonn6da4 .is-content","start":"top bottom","end":"migrated top+=100%","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("content_gbonn6da4");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("content_gbonn6da4".indexOf("section_") > -1 || "content_gbonn6da4".indexOf("cover") > -1) {
         			$("#content_gbonn6da4").wrap("<div class='section-pin sp_content_gbonn6da4'></div>");
         			options["trigger"] = ".sp_content_gbonn6da4";
         		} else if("content_gbonn6da4".indexOf("column_") > -1) {
         			$("#content_gbonn6da4").wrap("<div class='column-pin-outer cpo_content_gbonn6da4'><div class='column-pin-inner cpi_content_gbonn6da4 '></div></div>");
         			options["trigger"] = ".cpi_content_gbonn6da4";
         			var atts = $("#content_gbonn6da4").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_content_gbonn6da4").attr(attr.name, attr.value);
         				}
         			});
         		} else if("content_gbonn6da4".indexOf("content_") > -1) {
         			options["trigger"] = "#content_gbonn6da4";
         		}
         		
         	}
         	s4.animate.gsap["content_gbonn6da4"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #content_gbonn6da4 .is-content", JSON.parse('{"translateY":"0rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"0.4","scaleY":"0.4"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"scaleX":0.8,"scaleY":0.8,"rotation":"60deg","x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["content_gbonn6da4"].to("#content-holder #content_gbonn6da4 .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_gbonn6da4"].pause();
         var playRepeat = [];var endDuration = 50;var options = JSON.parse('{"id":"column_zme9qjw09","trigger":"#content-holder #column_zme9qjw09","start":"top bottom-=50%","end":"migrated top+=50%","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("column_zme9qjw09");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("column_zme9qjw09".indexOf("section_") > -1 || "column_zme9qjw09".indexOf("cover") > -1) {
         			$("#column_zme9qjw09").wrap("<div class='section-pin sp_column_zme9qjw09'></div>");
         			options["trigger"] = ".sp_column_zme9qjw09";
         		} else if("column_zme9qjw09".indexOf("column_") > -1) {
         			$("#column_zme9qjw09").wrap("<div class='column-pin-outer cpo_column_zme9qjw09'><div class='column-pin-inner cpi_column_zme9qjw09 '></div></div>");
         			options["trigger"] = ".cpi_column_zme9qjw09";
         			var atts = $("#column_zme9qjw09").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_column_zme9qjw09").attr(attr.name, attr.value);
         				}
         			});
         		} else if("column_zme9qjw09".indexOf("content_") > -1) {
         			options["trigger"] = "#column_zme9qjw09";
         		}
         		
         	}
         	s4.animate.gsap["column_zme9qjw09"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #column_zme9qjw09", JSON.parse('{"translateY":"2.6667rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["column_zme9qjw09"].to("#content-holder #column_zme9qjw09", props);
         	// pause timeline
         	s4.animate.gsap["column_zme9qjw09"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_h8a8av3tv"] = gsap.timeline({
         		repeat: 0,
         		onRepeat: function() {
         			if(playRepeat["content_h8a8av3tv"] !== true) {
         				s4.animate.gsap["content_h8a8av3tv"].pause();
         			}
         		},
         		
         	});
         
         $(document).on("mouseover", "#content-holder #content_h8a8av3tv", function() {
         	s4.animate.gsap["content_h8a8av3tv"].play();
         	playRepeat["content_h8a8av3tv"] = true;
         	
         });
         $(document).on("mouseout", "#content-holder #content_h8a8av3tv", function() {
         	s4.animate.gsap["content_h8a8av3tv"].reverse();
         	playRepeat["content_h8a8av3tv"] = false;
         	
         });
         
         			// gsap set transform
         			gsap.set("#content-holder #content_h8a8av3tv", JSON.parse('{"translateY":"1.1111rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["content_h8a8av3tv"].to("#content-holder #content_h8a8av3tv", props);
         	// pause timeline
         	s4.animate.gsap["content_h8a8av3tv"].pause();
         var playRepeat = [];var endDuration = 50;var options = JSON.parse('{"id":"column_wdyvkb4ax","trigger":"#content-holder #column_wdyvkb4ax","start":"top bottom-=50%","end":"migrated top+=50%","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("column_wdyvkb4ax");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("column_wdyvkb4ax".indexOf("section_") > -1 || "column_wdyvkb4ax".indexOf("cover") > -1) {
         			$("#column_wdyvkb4ax").wrap("<div class='section-pin sp_column_wdyvkb4ax'></div>");
         			options["trigger"] = ".sp_column_wdyvkb4ax";
         		} else if("column_wdyvkb4ax".indexOf("column_") > -1) {
         			$("#column_wdyvkb4ax").wrap("<div class='column-pin-outer cpo_column_wdyvkb4ax'><div class='column-pin-inner cpi_column_wdyvkb4ax '></div></div>");
         			options["trigger"] = ".cpi_column_wdyvkb4ax";
         			var atts = $("#column_wdyvkb4ax").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_column_wdyvkb4ax").attr(attr.name, attr.value);
         				}
         			});
         		} else if("column_wdyvkb4ax".indexOf("content_") > -1) {
         			options["trigger"] = "#column_wdyvkb4ax";
         		}
         		
         	}
         	s4.animate.gsap["column_wdyvkb4ax"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #column_wdyvkb4ax", JSON.parse('{"translateY":"2.6667rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["column_wdyvkb4ax"].to("#content-holder #column_wdyvkb4ax", props);
         	// pause timeline
         	s4.animate.gsap["column_wdyvkb4ax"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_31ggzywto"] = gsap.timeline({
         		repeat: 0,
         		onRepeat: function() {
         			if(playRepeat["content_31ggzywto"] !== true) {
         				s4.animate.gsap["content_31ggzywto"].pause();
         			}
         		},
         		
         	});
         
         $(document).on("mouseover", "#content-holder #content_31ggzywto .is-content", function() {
         	s4.animate.gsap["content_31ggzywto"].play();
         	playRepeat["content_31ggzywto"] = true;
         	
         });
         $(document).on("mouseout", "#content-holder #content_31ggzywto .is-content", function() {
         	s4.animate.gsap["content_31ggzywto"].reverse();
         	playRepeat["content_31ggzywto"] = false;
         	
         });
         
         			// gsap set transform
         			gsap.set("#content-holder #content_31ggzywto .is-content", JSON.parse('{"translateY":"1.1111rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["content_31ggzywto"].to("#content-holder #content_31ggzywto .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_31ggzywto"].pause();
         var playRepeat = [];var endDuration = 50;var options = JSON.parse('{"id":"column_seujmctn9","trigger":"#content-holder #column_seujmctn9","start":"top bottom-=50%","end":"migrated top+=50%","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("column_seujmctn9");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("column_seujmctn9".indexOf("section_") > -1 || "column_seujmctn9".indexOf("cover") > -1) {
         			$("#column_seujmctn9").wrap("<div class='section-pin sp_column_seujmctn9'></div>");
         			options["trigger"] = ".sp_column_seujmctn9";
         		} else if("column_seujmctn9".indexOf("column_") > -1) {
         			$("#column_seujmctn9").wrap("<div class='column-pin-outer cpo_column_seujmctn9'><div class='column-pin-inner cpi_column_seujmctn9 '></div></div>");
         			options["trigger"] = ".cpi_column_seujmctn9";
         			var atts = $("#column_seujmctn9").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_column_seujmctn9").attr(attr.name, attr.value);
         				}
         			});
         		} else if("column_seujmctn9".indexOf("content_") > -1) {
         			options["trigger"] = "#column_seujmctn9";
         		}
         		
         	}
         	s4.animate.gsap["column_seujmctn9"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #column_seujmctn9", JSON.parse('{"translateY":"2.6667rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["column_seujmctn9"].to("#content-holder #column_seujmctn9", props);
         	// pause timeline
         	s4.animate.gsap["column_seujmctn9"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_ke298s3on"] = gsap.timeline({
         		repeat: 0,
         		onRepeat: function() {
         			if(playRepeat["content_ke298s3on"] !== true) {
         				s4.animate.gsap["content_ke298s3on"].pause();
         			}
         		},
         		
         	});
         
         $(document).on("mouseover", "#content-holder #content_ke298s3on", function() {
         	s4.animate.gsap["content_ke298s3on"].play();
         	playRepeat["content_ke298s3on"] = true;
         	
         });
         $(document).on("mouseout", "#content-holder #content_ke298s3on", function() {
         	s4.animate.gsap["content_ke298s3on"].reverse();
         	playRepeat["content_ke298s3on"] = false;
         	
         });
         
         			// gsap set transform
         			gsap.set("#content-holder #content_ke298s3on", JSON.parse('{"translateY":"1.1111rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["content_ke298s3on"].to("#content-holder #content_ke298s3on", props);
         	// pause timeline
         	s4.animate.gsap["content_ke298s3on"].pause();
         var playRepeat = [];var endDuration = 50;var options = JSON.parse('{"id":"content_f8f590wp1","trigger":"#content-holder #content_f8f590wp1 .is-content","start":"top bottom-=50%","end":"migrated top+=50%","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("content_f8f590wp1");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("content_f8f590wp1".indexOf("section_") > -1 || "content_f8f590wp1".indexOf("cover") > -1) {
         			$("#content_f8f590wp1").wrap("<div class='section-pin sp_content_f8f590wp1'></div>");
         			options["trigger"] = ".sp_content_f8f590wp1";
         		} else if("content_f8f590wp1".indexOf("column_") > -1) {
         			$("#content_f8f590wp1").wrap("<div class='column-pin-outer cpo_content_f8f590wp1'><div class='column-pin-inner cpi_content_f8f590wp1 '></div></div>");
         			options["trigger"] = ".cpi_content_f8f590wp1";
         			var atts = $("#content_f8f590wp1").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_content_f8f590wp1").attr(attr.name, attr.value);
         				}
         			});
         		} else if("content_f8f590wp1".indexOf("content_") > -1) {
         			options["trigger"] = "#content_f8f590wp1";
         		}
         		
         	}
         	s4.animate.gsap["content_f8f590wp1"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #content_f8f590wp1 .is-content", JSON.parse('{"translateY":"0rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"0.5","scaleY":"0.5"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"scaleX":0.8,"scaleY":0.8,"rotation":"40deg","x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["content_f8f590wp1"].to("#content-holder #content_f8f590wp1 .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_f8f590wp1"].pause();
         var playRepeat = [];var endDuration = 50;var options = JSON.parse('{"id":"column_b649e2gv3","trigger":"#content-holder #column_b649e2gv3","start":"top bottom-=50%","end":"migrated top+=50%","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("column_b649e2gv3");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("column_b649e2gv3".indexOf("section_") > -1 || "column_b649e2gv3".indexOf("cover") > -1) {
         			$("#column_b649e2gv3").wrap("<div class='section-pin sp_column_b649e2gv3'></div>");
         			options["trigger"] = ".sp_column_b649e2gv3";
         		} else if("column_b649e2gv3".indexOf("column_") > -1) {
         			$("#column_b649e2gv3").wrap("<div class='column-pin-outer cpo_column_b649e2gv3'><div class='column-pin-inner cpi_column_b649e2gv3 '></div></div>");
         			options["trigger"] = ".cpi_column_b649e2gv3";
         			var atts = $("#column_b649e2gv3").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_column_b649e2gv3").attr(attr.name, attr.value);
         				}
         			});
         		} else if("column_b649e2gv3".indexOf("content_") > -1) {
         			options["trigger"] = "#column_b649e2gv3";
         		}
         		
         	}
         	s4.animate.gsap["column_b649e2gv3"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #column_b649e2gv3", JSON.parse('{"translateY":"2.6667rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["column_b649e2gv3"].to("#content-holder #column_b649e2gv3", props);
         	// pause timeline
         	s4.animate.gsap["column_b649e2gv3"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_pvo8zqawe"] = gsap.timeline({
         		repeat: 0,
         		onRepeat: function() {
         			if(playRepeat["content_pvo8zqawe"] !== true) {
         				s4.animate.gsap["content_pvo8zqawe"].pause();
         			}
         		},
         		
         	});
         
         $(document).on("mouseover", "#content-holder #content_pvo8zqawe .is-content", function() {
         	s4.animate.gsap["content_pvo8zqawe"].play();
         	playRepeat["content_pvo8zqawe"] = true;
         	
         });
         $(document).on("mouseout", "#content-holder #content_pvo8zqawe .is-content", function() {
         	s4.animate.gsap["content_pvo8zqawe"].reverse();
         	playRepeat["content_pvo8zqawe"] = false;
         	
         });
         
         			// gsap set transform
         			gsap.set("#content-holder #content_pvo8zqawe .is-content", JSON.parse('{"translateY":"1.1111rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["content_pvo8zqawe"].to("#content-holder #content_pvo8zqawe .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_pvo8zqawe"].pause();
         var playRepeat = [];var endDuration = 50;var options = JSON.parse('{"id":"column_yuanxldb0","trigger":"#content-holder #column_yuanxldb0","start":"top bottom-=50%","end":"migrated top+=50%","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("column_yuanxldb0");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("column_yuanxldb0".indexOf("section_") > -1 || "column_yuanxldb0".indexOf("cover") > -1) {
         			$("#column_yuanxldb0").wrap("<div class='section-pin sp_column_yuanxldb0'></div>");
         			options["trigger"] = ".sp_column_yuanxldb0";
         		} else if("column_yuanxldb0".indexOf("column_") > -1) {
         			$("#column_yuanxldb0").wrap("<div class='column-pin-outer cpo_column_yuanxldb0'><div class='column-pin-inner cpi_column_yuanxldb0 '></div></div>");
         			options["trigger"] = ".cpi_column_yuanxldb0";
         			var atts = $("#column_yuanxldb0").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_column_yuanxldb0").attr(attr.name, attr.value);
         				}
         			});
         		} else if("column_yuanxldb0".indexOf("content_") > -1) {
         			options["trigger"] = "#column_yuanxldb0";
         		}
         		
         	}
         	s4.animate.gsap["column_yuanxldb0"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #column_yuanxldb0", JSON.parse('{"translateY":"2.6667rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["column_yuanxldb0"].to("#content-holder #column_yuanxldb0", props);
         	// pause timeline
         	s4.animate.gsap["column_yuanxldb0"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_hgv03or2f"] = gsap.timeline({
         		repeat: 0,
         		onRepeat: function() {
         			if(playRepeat["content_hgv03or2f"] !== true) {
         				s4.animate.gsap["content_hgv03or2f"].pause();
         			}
         		},
         		
         	});
         
         $(document).on("mouseover", "#content-holder #content_hgv03or2f .is-content", function() {
         	s4.animate.gsap["content_hgv03or2f"].play();
         	playRepeat["content_hgv03or2f"] = true;
         	
         });
         $(document).on("mouseout", "#content-holder #content_hgv03or2f .is-content", function() {
         	s4.animate.gsap["content_hgv03or2f"].reverse();
         	playRepeat["content_hgv03or2f"] = false;
         	
         });
         
         			// gsap set transform
         			gsap.set("#content-holder #content_hgv03or2f .is-content", JSON.parse('{"translateY":"1.1111rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["content_hgv03or2f"].to("#content-holder #content_hgv03or2f .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_hgv03or2f"].pause();
         var playRepeat = [];var endDuration = 50;var options = JSON.parse('{"id":"column_p1ny5d9ah","trigger":"#content-holder #column_p1ny5d9ah","start":"top bottom-=50%","end":"migrated top+=50%","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("column_p1ny5d9ah");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("column_p1ny5d9ah".indexOf("section_") > -1 || "column_p1ny5d9ah".indexOf("cover") > -1) {
         			$("#column_p1ny5d9ah").wrap("<div class='section-pin sp_column_p1ny5d9ah'></div>");
         			options["trigger"] = ".sp_column_p1ny5d9ah";
         		} else if("column_p1ny5d9ah".indexOf("column_") > -1) {
         			$("#column_p1ny5d9ah").wrap("<div class='column-pin-outer cpo_column_p1ny5d9ah'><div class='column-pin-inner cpi_column_p1ny5d9ah '></div></div>");
         			options["trigger"] = ".cpi_column_p1ny5d9ah";
         			var atts = $("#column_p1ny5d9ah").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_column_p1ny5d9ah").attr(attr.name, attr.value);
         				}
         			});
         		} else if("column_p1ny5d9ah".indexOf("content_") > -1) {
         			options["trigger"] = "#column_p1ny5d9ah";
         		}
         		
         	}
         	s4.animate.gsap["column_p1ny5d9ah"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #column_p1ny5d9ah", JSON.parse('{"translateY":"2.6667rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["column_p1ny5d9ah"].to("#content-holder #column_p1ny5d9ah", props);
         	// pause timeline
         	s4.animate.gsap["column_p1ny5d9ah"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_0fs2hgmtz"] = gsap.timeline({
         		repeat: 0,
         		onRepeat: function() {
         			if(playRepeat["content_0fs2hgmtz"] !== true) {
         				s4.animate.gsap["content_0fs2hgmtz"].pause();
         			}
         		},
         		
         	});
         
         $(document).on("mouseover", "#content-holder #content_0fs2hgmtz", function() {
         	s4.animate.gsap["content_0fs2hgmtz"].play();
         	playRepeat["content_0fs2hgmtz"] = true;
         	
         });
         $(document).on("mouseout", "#content-holder #content_0fs2hgmtz", function() {
         	s4.animate.gsap["content_0fs2hgmtz"].reverse();
         	playRepeat["content_0fs2hgmtz"] = false;
         	
         });
         
         			// gsap set transform
         			gsap.set("#content-holder #content_0fs2hgmtz", JSON.parse('{"translateY":"1.1111rem","translateX":"0rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["content_0fs2hgmtz"].to("#content-holder #content_0fs2hgmtz", props);
         	// pause timeline
         	s4.animate.gsap["content_0fs2hgmtz"].pause();
         var playRepeat = [];var endDuration = 100;var options = JSON.parse('{"id":"section_p131me8hf","trigger":"#content-holder #section_p131me8hf","start":"top bottom-=100%","end":"migrated top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("section_p131me8hf");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("section_p131me8hf".indexOf("section_") > -1 || "section_p131me8hf".indexOf("cover") > -1) {
         			$("#section_p131me8hf").wrap("<div class='section-pin sp_section_p131me8hf'></div>");
         			options["trigger"] = ".sp_section_p131me8hf";
         		} else if("section_p131me8hf".indexOf("column_") > -1) {
         			$("#section_p131me8hf").wrap("<div class='column-pin-outer cpo_section_p131me8hf'><div class='column-pin-inner cpi_section_p131me8hf '></div></div>");
         			options["trigger"] = ".cpi_section_p131me8hf";
         			var atts = $("#section_p131me8hf").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_section_p131me8hf").attr(attr.name, attr.value);
         				}
         			});
         		} else if("section_p131me8hf".indexOf("content_") > -1) {
         			options["trigger"] = "#section_p131me8hf";
         		}
         		
         	}
         	s4.animate.gsap["section_p131me8hf"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #section_p131me8hf", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"opacity":1,"backgroundColor":"#fff4fd"}');
         	// add to timeline
         	s4.animate.gsap["section_p131me8hf"].to("#content-holder #section_p131me8hf", props);
         	// pause timeline
         	s4.animate.gsap["section_p131me8hf"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_hrrop94o3"] = gsap.timeline({
         		repeat: 0,
         		onRepeat: function() {
         			if(playRepeat["content_hrrop94o3"] !== true) {
         				s4.animate.gsap["content_hrrop94o3"].pause();
         			}
         		},
         		
         	});
         
         $(document).on("mouseover", "#content-holder #content_hrrop94o3 .is-content", function() {
         	s4.animate.gsap["content_hrrop94o3"].play();
         	playRepeat["content_hrrop94o3"] = true;
         	
         });
         $(document).on("mouseout", "#content-holder #content_hrrop94o3 .is-content", function() {
         	s4.animate.gsap["content_hrrop94o3"].reverse();
         	playRepeat["content_hrrop94o3"] = false;
         	
         });
         
         			// gsap set transform
         			gsap.set("#content-holder #content_hrrop94o3 .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"backgroundColor":"transparent"}');
         	// add to timeline
         	s4.animate.gsap["content_hrrop94o3"].to("#content-holder #content_hrrop94o3 .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_hrrop94o3"].pause();
         var playRepeat = [];var endDuration = 100;var options = JSON.parse('{"id":"section_q47z30l4j","trigger":"#content-holder #section_q47z30l4j","start":"top bottom-=100%","end":"migrated top","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("section_q47z30l4j");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("section_q47z30l4j".indexOf("section_") > -1 || "section_q47z30l4j".indexOf("cover") > -1) {
         			$("#section_q47z30l4j").wrap("<div class='section-pin sp_section_q47z30l4j'></div>");
         			options["trigger"] = ".sp_section_q47z30l4j";
         		} else if("section_q47z30l4j".indexOf("column_") > -1) {
         			$("#section_q47z30l4j").wrap("<div class='column-pin-outer cpo_section_q47z30l4j'><div class='column-pin-inner cpi_section_q47z30l4j '></div></div>");
         			options["trigger"] = ".cpi_section_q47z30l4j";
         			var atts = $("#section_q47z30l4j").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_section_q47z30l4j").attr(attr.name, attr.value);
         				}
         			});
         		} else if("section_q47z30l4j".indexOf("content_") > -1) {
         			options["trigger"] = "#section_q47z30l4j";
         		}
         		
         	}
         	s4.animate.gsap["section_q47z30l4j"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #section_q47z30l4j", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"backgroundColor":"#ffffff"}');
         	// add to timeline
         	s4.animate.gsap["section_q47z30l4j"].to("#content-holder #section_q47z30l4j", props);
         	// pause timeline
         	s4.animate.gsap["section_q47z30l4j"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_7nif0kuvn"] = gsap.timeline({
         		scrollTrigger: "#content-holder #content_7nif0kuvn .is-content",
         		repeat: 0,
         		
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #content_7nif0kuvn .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"0.8","scaleY":"0.8"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":12,"ease":"Power1.easeInOut","delay":0,"scaleX":0.4,"scaleY":0.4,"rotation":"360deg"}');
         	// add to timeline
         	s4.animate.gsap["content_7nif0kuvn"].to("#content-holder #content_7nif0kuvn .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_7nif0kuvn"].pause();
         var playRepeat = [];
         	s4.animate.gsap["content_lzyuy6898"] = gsap.timeline({
         		scrollTrigger: "#content-holder #content_lzyuy6898 .is-content",
         		repeat: 0,
         		
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #content_lzyuy6898 .is-content", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"0.4","scaleY":"0.4"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":10,"ease":"Power1.easeInOut","delay":0,"scaleX":0.8,"scaleY":0.8,"rotation":"360deg"}');
         	// add to timeline
         	s4.animate.gsap["content_lzyuy6898"].to("#content-holder #content_lzyuy6898 .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_lzyuy6898"].pause();
         var playRepeat = [];var endDuration = 80;var options = JSON.parse('{"id":"content_c2e949418","trigger":"#content-holder #content_c2e949418 .is-content","start":"top bottom-=50%","end":"migrated top+=50%","pin":false,"markers":false,"pinSpacing":false,"scrub":0}');
         		if(typeof endDuration !== "undefined") {
         			var vpHeight = parseInt($(window).height());
         			var content = document.getElementById("content_c2e949418");
         			var contentRect = content.getBoundingClientRect();
         			var contentHeight = contentRect.height;
         			var newEnd = Math.round(((endDuration * (vpHeight / 100)) - contentHeight) / (contentHeight / 100));
         			// changing end
         			if(false !== newEnd && null !== newEnd) {
         				options["end"] = options["end"].replace("migrated", "bottom+=" + newEnd + "%");
         			}
         		}
         	
         	if(options.pin === true) {
         		if("content_c2e949418".indexOf("section_") > -1 || "content_c2e949418".indexOf("cover") > -1) {
         			$("#content_c2e949418").wrap("<div class='section-pin sp_content_c2e949418'></div>");
         			options["trigger"] = ".sp_content_c2e949418";
         		} else if("content_c2e949418".indexOf("column_") > -1) {
         			$("#content_c2e949418").wrap("<div class='column-pin-outer cpo_content_c2e949418'><div class='column-pin-inner cpi_content_c2e949418 '></div></div>");
         			options["trigger"] = ".cpi_content_c2e949418";
         			var atts = $("#content_c2e949418").prop("attributes");
         			$.each(atts, function(key, attr) {
         				if(attr.name.indexOf("width") > -1) {
         					$(".cpo_content_c2e949418").attr(attr.name, attr.value);
         				}
         			});
         		} else if("content_c2e949418".indexOf("content_") > -1) {
         			options["trigger"] = "#content_c2e949418";
         		}
         		
         	}
         	s4.animate.gsap["content_c2e949418"] = gsap.timeline({
         		scrollTrigger: options,
         	});
         
         			// gsap set transform
         			gsap.set("#content-holder #content_c2e949418 .is-content", JSON.parse('{"translateY":"0rem","translateX":"-11.111111111111rem","rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"x":0,"y":0}');
         	// add to timeline
         	s4.animate.gsap["content_c2e949418"].to("#content-holder #content_c2e949418 .is-content", props);
         	// pause timeline
         	s4.animate.gsap["content_c2e949418"].pause();
         var playRepeat = [];
         	s4.animate.gsap["column_qfrxhtshb"] = gsap.timeline({
         		repeat: 0,
         		onRepeat: function() {
         			if(playRepeat["column_qfrxhtshb"] !== true) {
         				s4.animate.gsap["column_qfrxhtshb"].pause();
         			}
         		},
         		
         	});
         
         $(document).on("mouseover", "#content-holder #column_qfrxhtshb", function() {
         	s4.animate.gsap["column_qfrxhtshb"].play();
         	playRepeat["column_qfrxhtshb"] = true;
         	
         });
         $(document).on("mouseout", "#content-holder #column_qfrxhtshb", function() {
         	s4.animate.gsap["column_qfrxhtshb"].reverse();
         	playRepeat["column_qfrxhtshb"] = false;
         	
         });
         
         			// gsap set transform
         			gsap.set("#content-holder #column_qfrxhtshb", JSON.parse('{"translateY":0,"translateX":0,"rotate":"0deg","rotateY":"0deg","rotateX":"0deg","skewX":"0deg","skewY":"0deg","scaleX":"1","scaleY":"1"}'));
         		
         	// parse props
         	var props = JSON.parse('{"duration":0.8,"ease":"Power0.easeNone","delay":0,"rotation":"-4deg"}');
         	// add to timeline
         	s4.animate.gsap["column_qfrxhtshb"].to("#content-holder #column_qfrxhtshb", props);
         	// pause timeline
         	s4.animate.gsap["column_qfrxhtshb"].pause();
         $(window).scroll();})(jQuery);(function ($) { "use strict";$(window).scroll();})(jQuery);
