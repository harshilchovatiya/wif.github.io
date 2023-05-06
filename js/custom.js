/* =====================================
All JavaScript fuctions Start
======================================*/

(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	

	//________Top Search bar Show Hide function by = custom.js________//	
	function site_search(){
			jQuery('a[href="#search"]').on('click', function(event) {                    
			jQuery('#search').addClass('open');
			jQuery('#search > form > input[type="search"]').focus();
		});
					
		jQuery('#search, #search button.close').on('click keyup', function(event) {
			if (event.target === this || event.target.className === 'close') {
				jQuery(this).removeClass('open');
			}
		});  
	}
	 
	//________popovers initialization - on hover________//
	function popover_img(){
		jQuery('[data-toggle="popover-hover"]').popover({
			html: true,
			trigger: 'hover',
			placement: 'bottom',
			content: function () { return '<img src="' + $(this).data('img') + '" />'; }
		}); 
	}

	//________Wow Animate function by = owl.js________//
    function wow_animate(){    	
		var wow = new WOW(
		  {
			boxClass:     'wow', 
			animateClass: 'animated',
			offset:0,    
			mobile: true,      
			live:true,   
			scrollContainer: null 
		  }
		);
		wow.init();
	}
	 
	//________Video responsive function by = custom.js________//	
	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}  

	//________magnificPopup function	by = magnific-popup.js________//	
	function magnific_popup(){
		jQuery('.mfp-gallery').magnificPopup({
		delegate: '.mfp-link',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
	}

	//________ Login Signup Form function by = custom.js ________//		
	function Get_in_touch(){		
		$(".input input , .input textarea").focus(function() {
		
			$(this).parent(".input").each(function() {
				$(".spin", this).css({
					"width": "100%"
				})
			});
		})
		.blur(function() {
			$(".spin").css({
				"width": "0px"
			})
			
		});
	}

	//________ magnificPopup for video function	by = magnific-popup.js________//	
	function magnific_video(){	
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
		});
	}
	
	//________Vertically center Bootstrap modal popup function by = custom.js________//	
	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			// Reposition when a modal is shown
			jQuery('.modal').on('show.bs.modal', reposition);
			// Reposition when the window is resized
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}
	
	//________page scroll top on button click function by = custom.js________//	
	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}
	
	//________input type file function by = custom.js________//	
	function input_type_file_form(){
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this)
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, 'https://coinat.000webhostapp.com/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = jQuery(this).parents('.input-group').find(':text'),
				log = numFiles > 10 ? numFiles + ' files selected' : label;
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});	
	}

	//________ input Placeholder in IE9 function by = custom.js________//	
	function placeholderSupport(){
	/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").on('focus', function () {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").on('submit', function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
						jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}	
	
	//________ footer fixed on bottom function by = custom.js________//	
	function footer_fixed() {
	jQuery('.site-footer').css('display', 'block');
	jQuery('.site-footer').css('height', 'auto');
	var footerHeight = jQuery('.site-footer').outerHeight();
	jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
	jQuery('.site-footer').css('height', footerHeight);
	}
	
	//________STICKY MENU WHEN SCROLL DOWN________//	
	function sticky_header(){
		if(jQuery('.sticky-header').length){
			var sticky = new Waypoint.Sticky({
			element: jQuery('.sticky-header')
			})
		}
	}
	
	//________Nav submenu show hide on mobile by = custom.js________//
	function mobile_nav(){
		jQuery(".sub-menu, .mega-menu").parent('li').addClass('has-child');
		jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

		jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {

			jQuery(this).parent().siblings(".has-child ").children(".sub-menu, .mega-menu").slideUp(500, function(){
				jQuery(this).parent().removeClass('nav-active');
			});

			jQuery(this).next(jQuery('.sub-menu, .mega-menu ')).slideToggle(500, function(){
				jQuery(this).parent().toggleClass('nav-active');
			});

			ev.stopPropagation();
		});

	}

	//________Mobile side drawer function by = custom.js________//
	function mobile_side_drawer(){
		jQuery('#mobile-side-drawer').on('click', function () { 
			jQuery('.mobile-sider-drawer-menu').toggleClass('active');
		});
	}	

	//________Home page testimonial function by = owl.carousel.js________//	
	function testimonial_2_wrap(){
	jQuery('.testimonial-2-wrap').owlCarousel({
		loop:true,
		autoplay:false,
		margin:30,
		autoplayTimeout:6000,
		nav:true,
		dots: false,
		navText: ['<i class="flaticon-left-chevron"></i>', '<i class="flaticon-chevron"></i>'],
		responsive:{
			0:{
				items:1
			},
			991:{
				items:1
			}
		}
	});
	}

	//________Home 2 page testimonial function by = owl.carousel.js________//	
	function testimonial_section_2_wrap(){
		jQuery('.testimonial-section-2').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			autoplayTimeout:6000,
			nav:false,
			dots: true,
			navText: ['<i class="flaticon-left-chevron"></i>', '<i class="flaticon-chevron"></i>'],
			responsive:{
				0:{
					items:1
				},
				991:{
					items:2
				}
			}
		});
	}

	//________Home 3 page testimonial function by = owl.carousel.js________//	
	function testimonial_section_3_wrap(){
		jQuery('.testimonial-section-3').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			autoplayTimeout:6000,
			nav:false,
			dots: true,
			navText: ['<i class="flaticon-left-chevron"></i>', '<i class="flaticon-chevron"></i>'],
			responsive:{
				0:{
					items:1
				},
				991:{
					items:2
				},
				1200:{
					items:3 
				}
			}
		});
	}

	//________Home page latest blog function by = owl.carousel.js________//	
	function sx_latest_blog_1_carousel(){
		jQuery('.sx-latest-blog-1-carousel').owlCarousel({
			loop:true,
			autoplay:false,
			margin:30,
			autoplayTimeout:6000,
			nav:false,
			dots: true,
			navText: ['<i class="flaticon-left-chevron"></i>', '<i class="flaticon-chevron"></i>'],
			responsive:{
				0:{
					items:1
				},
				991:{
					items:2,
				},
				1200:{
					items:3
				}
			}
		});
	}

	//________Home page case-study function by = owl.carousel.js________//	
	function sx_case_st_carousel(){
		jQuery('.sx-case-st-carousel').owlCarousel({
			loop:true,
			autoplay:false,
			margin:30,
			autoplayTimeout:6000,
			nav:false,
			dots: true,
			navText: ['<i class="flaticon-left-chevron"></i>', '<i class="flaticon-chevron"></i>'],
			responsive:{
				0:{
					items:1
				},
				991:{
					items:2,
				},
				1200:{
					items:2
				}
			}
		});
	}

	//________case-study function by = owl.carousel.js________//	
	function sx_case_st_carousel_2(){
		jQuery('.sx-case-st-carousel-2').owlCarousel({
			loop:true,
			autoplay:false,
			margin:30,
			autoplayTimeout:6000,
			nav:false,
			dots: true,
			navText: ['<i class="flaticon-left-chevron"></i>', '<i class="flaticon-chevron"></i>'],
			responsive:{
				0:{
					items:1
				},
				991:{
					items:2,
				},
				1200:{
					items:3
				}
			}
		});
	}
	
	//________Why choose us slider function by = owl.carousel.js________//	
	function sx_why_choose_carousel(){
		jQuery('.sx-why-choose-carousel').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			//autoplayTimeout:6000,
			nav:false,
			dots: true,
			navText: ['<i class="flaticon-left-chevron"></i>', '<i class="flaticon-chevron"></i>'],
			responsive:{
				0:{
					items:1,
				},
				540:{
					items:2,
				},
				768:{
					items:2,
				},			
				1024:{
					items:3,
				},
				1136:{
					items:3,
				},					
				1366:{
					items:4
				}	
			}
		});
	}

	//________Why choose us slider function by = owl.carousel.js________//	
	function sx_why_choose_carousel2(){
		jQuery('.sx-why-choose-carousel2').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			//autoplayTimeout:6000,
			nav:false,
			dots: true,
			navText: ['<i class="flaticon-left-chevron"></i>', '<i class="flaticon-chevron"></i>'],
			responsive:{
				0:{
					items:1,
				},
				540:{
					items:2,
				},
				768:{
					items:2,
				},			
				1024:{
					items:3,
				},
				1136:{
					items:3,
				},					
				1366:{
					items:3
				}	
			}
		});
	}

	//________Our Team slider function by = owl.carousel.js________//	
	function sx_our_team_carousel(){
		jQuery('.sx-our-team-carousel').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			//autoplayTimeout:6000,
			nav:false,
			dots: true,
			navText: ['<i class="flaticon-left-chevron"></i>', '<i class="flaticon-chevron"></i>'],
			responsive:{
				0:{
					items:1,
				},
				540:{
					items:2,
				},
				768:{
					items:2,
				},			
				1024:{
					items:3,
				},
				1136:{
					items:3,
				},					
				1366:{
					items:4
				}	
			}
		});
	}

	//________  Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
	function sticky_sidebar(){		
		$('.sticky_column')
			.theiaStickySidebar({
				additionalMarginTop: 100
			});		
	}

	//________ Home 1 banner slider function by = swiper-bundle.min.js ________//
	function sx_home_bnr_1(){
		var swiper = new Swiper('.home-1-slider', {

			    loop: true,
				spaceBetween: 30,
				effect: "fade",
				navigation: {
				  nextEl: ".swiper-button-next",
				  prevEl: ".swiper-button-prev",
				},
				pagination: {
				  el: ".swiper-pagination",
				  clickable: true,
				},
				autoplay: {
					delay: 7000,
					disableOnInteraction: true,
				},
		});
	}

	//________ Home 2 banner slider function by = swiper-bundle.min.js ________//
	function sx_home_bnr_2(){
		var swiper = new Swiper('.home-2-slider', {

				loop: true,
				spaceBetween: 30,
				effect: "fade",
				navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
				},
				pagination: {
				el: ".swiper-pagination",
				clickable: true,
				},
				parallax: true,
				autoplay: {
					delay: 7000,
					disableOnInteraction: true,
				},
		});
	}

	//________ Home 3 banner slider function by = swiper-bundle.min.js ________//
	function sx_home_bnr_3(){
		var swiper = new Swiper('.home-3-slider', {

				loop: true,
				spaceBetween: 30,
				effect: "fade",
				navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
				},
				pagination: {
				el: ".swiper-pagination",
				clickable: true,
				},
				parallax: true,
				autoplay: {
					delay: 7000,
					disableOnInteraction: true,
				},
		});
	}

	//________ Counter Up  function by = counterup.min.js ========== //		
	function counter_up(){		
		jQuery('.counter').counterUp({
			delay: 10,
			time:2000
		});
	
	}

				
	/*--------------------------------------------------------------------------------------------
		Window on load ALL FUNCTION START
	---------------------------------------------------------------------------------------------*/

	//________masonry function function by = isotope.pkgd.min.js________//	
	function masonryBox() {
		if ( jQuery().isotope ) {      
			var $container = jQuery('.masonry-outer');
				$container.isotope({
					itemSelector: '.masonry-item',
					transitionDuration: '1s',
					originLeft: true,
					stamp: '.stamp',
				});

			$container.imagesLoaded().progress( function() {
				$container.isotope('layout');
			});

			jQuery('.masonry-filter li').on('click',function() {                           
				var selector = jQuery(this).find("a").attr('data-filter');
				jQuery('.masonry-filter li').removeClass('active');
				jQuery(this).addClass('active');
				$container.isotope({ filter: selector });
				return false;
			});
		};
	}
		
	
	//________page loader function by = custom.js________//	
	function page_loader() {

		$('.loading-area').fadeOut(1000)
		
	};

	//________LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js ________//
	function lightbox_popup(){
		lc_lightbox('.elem', {
			wrap_class: 'lcl_fade_oc',
			gallery : true,	
			thumb_attr: 'data-lcl-thumb', 
			
			skin: 'minimal',
			radius: 0,
			padding	: 0,
			border_w: 0,
		});
	}	

	/*--------------------------------------------------------------------------------------------
		Window on scroll ALL FUNCTION START
	---------------------------------------------------------------------------------------------*/

	function color_fill_header() {
		var scroll = $(window).scrollTop();
		if(scroll >= 100) {
			$(".main-bar").addClass("color-fill");
		} else {
			(scroll = 100); $(".main-bar").removeClass("color-fill");
		}
	}	

	

	/*--------------------------------------------------------------------------------------------
		document.ready ALL FUNCTION START
	---------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function() {
			//________Top Search bar Show Hide function by = custom.js ________//	 		
			site_search(),
			//________popovers initialization - on hover________//
			popover_img(),
			//________Wow Animate function by = owl.js________//
			wow_animate(),
			//________  Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
			sticky_sidebar(),
			//________Video responsive function by = custom.js ________//	
			video_responsive(),
			//________magnificPopup function	by = magnific-popup.js________//	
			magnific_popup(),
			//________ Login Signup Form function by = custom.js ________//		
			Get_in_touch(),
			//________magnificPopup for video function	by = magnific-popup.js________//	
			magnific_video(),
			//________Vertically center Bootstrap modal popup function by = custom.js________//	
			popup_vertical_center();
			//________Main menu sticky on top  when scroll down function by = custom.js	________//		
			sticky_header(),
			//________page scroll top on button click function by = custom.js________//		
			scroll_top(),
			//________input type file function by = custom.js	 ________//		
			input_type_file_form(),
			//________ input Placeholder in IE9 function by = custom.js	________//		
			placeholderSupport(),
			//________footer fixed on bottom function by = custom.js________//		
			footer_fixed(),
			//________ Nav submenu on off function by = custome.js________//	
			mobile_nav(),
			//________Mobile side drawer function by = custom.js________//
			mobile_side_drawer(),
			//________Home page testimonial function by = owl.carousel.js________//	
			testimonial_2_wrap(),
			//________Home 2 page testimonial function by = owl.carousel.js________//	
			testimonial_section_2_wrap(),
			//________Home 3 page testimonial function by = owl.carousel.js________//	
			testimonial_section_3_wrap(),
			//________Home page latest blog function by = owl.carousel.js________//	
			sx_latest_blog_1_carousel(),
			//________Home page case-study function by = owl.carousel.js________//	
			sx_case_st_carousel(),
			//________case-study function by = owl.carousel.js________//	
			sx_case_st_carousel_2(),
			//________Why choose us slider function by = owl.carousel.js________//	
			sx_why_choose_carousel(),
			//________Why choose us slider function by = owl.carousel.js________//	
			sx_why_choose_carousel2(),
			//________Our Team slider function by = owl.carousel.js________//	
			sx_our_team_carousel(),
			//________ Home 1 banner slider function by = swiper-bundle.min.js ________//
			sx_home_bnr_1(),
			//________ Home 2 banner slider function by = swiper-bundle.min.js ________//
			sx_home_bnr_2(),
			//________ Home 3 banner slider function by = swiper-bundle.min.js ________//
			sx_home_bnr_3(),
			//________ Counter Up  function by = counterup.min.js ========== //		
			counter_up()
	
	}); 

	/*--------------------------------------------------------------------------------------------
		Window Load START
	---------------------------------------------------------------------------------------------*/
	jQuery(window).on('load', function () {
			//________masonry function function by = isotope.pkgd.min.js________//			
			masonryBox(),
			//________page loader function by = custom.js________//			
			page_loader(),
			//________LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js ________//
			lightbox_popup(),
			//________Window on scroll header color fill________//	 
			color_fill_header()
	});

	/*===========================
		Window Scroll ALL FUNCTION START
	===========================*/

		jQuery(window).on('scroll', function () {
	//________Window on scroll header color fill________//	 
		color_fill_header()

		});
	
	/*===========================
		Window Resize ALL FUNCTION START
	===========================*/

		jQuery(window).on('resize', function () {
			//________ footer fixed on bottom function by = custom.js	________//		 
			footer_fixed(),
			//________masonry function function by = isotope.pkgd.min.js________//			
			masonryBox()
		});

	/*===========================
		Document on  Submit FUNCTION START
	===========================*/
		
	//________ Contact form home page function by = custom.js________//	

	jQuery(document).on('submit', 'form.cons-contact-form2', function(e){
		e.preventDefault();
		var form = jQuery(this);
		/* sending message */
		
		// jQuery.ajax({
		// 	url: 'https://theme7x.com/itodo/phpmailer/mail.php',
		// 	data: form.serialize() + "&action=contactform",
		// 	type: 'POST',
		// 	dataType: 'JSON',
		// 	beforeSend: function() {
		// 		jQuery('.loading-area').show();
				
		// 	},

		// 	success:function(data){
		// 		jQuery('.loading-area').hide();
		// 		if(data['success']){
		// 		jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form2');
		// 		}else{
		// 		jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form2');
		// 		}
		// 	}
		// });
		jQuery('.cons-contact-form2').trigger("reset");
		return false;
	});		
			

	/*===========================
		Document on  Submit FUNCTION END
	===========================*/	


})(jQuery);

