/**************/
// OpenShopLib
/**************/
(function ($) {
    var OpenShopLib = {
        init: function (){
            this.bindEvents();
        },
        bindEvents: function (){
             var $this = this;
             $this.sticky_header();
            
             $this.sticky_product_search();
             $this.pre_loader();
             $this.CatMenu();
             $this.DefaultMenu();
             $this.MainMenu();
             $this.StickMenu();
             $this.AboveMenu();
             $this.AboveMenuM();
             $this.MobileMenuFunction();
             if(open_shop.open_shop_move_to_top_optn){
                  $this.MoveToTop();
              }
             if($('.header__cat__item.dropdown').length!==0){
             $this.cat_toggle();
             }
             $this.checkIfScrollable();
        },

        sticky_header: function () {
 
                    var position = jQuery(window).scrollTop(); 
                    var $headerBar = jQuery('header').height();
                    // should start at 0
                    jQuery(window).scroll(function() {
                        var scroll = jQuery(window).scrollTop();
                        if(scroll > position || scroll < $headerBar) {
                        jQuery(".sticky-header").removeClass("stick");
                        $(".search-wrapper").removeClass("open");
                        }else{
                        jQuery(".sticky-header").addClass("stick");
                        }
                        position = scroll;
                    });
            

        },
        sticky_product_search: function () {
 
                  $('.prd-search').on('click', function (e) {
                     e.preventDefault();
                    $(".search-wrapper").addClass("open");
                  });
                  $('.search-close-btn').on('click', function (e) {
                     e.preventDefault();
                    $(".search-wrapper").removeClass("open");
                  });   
            
        },
        

          cat_toggle : function () {
                    $('.header__cat__item.dropdown').on('click', function (e) {
                    e.preventDefault();
                    $(this).toggleClass('open');
                    });

          },
          pre_loader : function () {
                               if(!$('body').hasClass('elementor-editor-active')){
                                $(window).on('load', function(){
                                setTimeout(removeLoader); //wait for page load PLUS two seconds.
                                });
                                function removeLoader(){
                                    $( ".open_shop_overlayloader" ).fadeOut(700, function(){
                                      // fadeOut complete. Remove the loading div
                                   $(".open-shop-pre-loader img" ).hide(); //makes page more lightweight
                                    });  
                                  }
                                }

          },
        
        CatMenu : function () {
                 // category toggle
                $(".cat-toggle").click(function(){
                              $(".product-cat-list").slideToggle();
                              $(".toggle-icon", this).toggleClass("icon-circle-arrow-down");
                             });
                             $(".product-cat-list").ThunkCatMenu({
                                 resizeWidth:'767', // Set the same in Media query       
                                 animationSpeed:'fast', //slow, medium, fast
                                 accoridonExpAll:true//Expands all the accordion menu on click
                             });
        },
        DefaultMenu: function(){
                 $("#menu-all-pages.open-shop-menu").openShopResponsiveMenu({
                 resizeWidth:'1024', // Set the same in Media query       
                 animationSpeed:'medium', //slow, medium, fast
                 accoridonExpAll:true//Expands all the accordion menu on click
             });
        },
        MainMenu : function(){
                $("#open-shop-menu").openShopResponsiveMenu({
                 resizeWidth:'1024', // Set the same in Media query       
                 animationSpeed:'medium', //slow, medium, fast
                 accoridonExpAll:true//Expands all the accordion menu on click
            });
        },
        StickMenu : function(){
                $("#open-shop-stick-menu").openShopResponsiveMenu({
                 resizeWidth:'1024', // Set the same in Media query       
                 animationSpeed:'medium', //slow, medium, fast
                 accoridonExpAll:true//Expands all the accordion menu on click
            });
        },
        AboveMenu : function(){
                $("#open-above-menu").openShopResponsiveMenu({
                 resizeWidth:'1024', // Set the same in Media query       
                 animationSpeed:'medium', //slow, medium, fast
                 accoridonExpAll:true//Expands all the accordion menu on click
             });     
        
        },
        AboveMenuM : function(){
                $(".main-header #open-above-menu").openShopResponsiveMenu({
                 resizeWidth:'1024', // Set the same in Media query       
                 animationSpeed:'medium', //slow, medium, fast
                 accoridonExpAll:true//Expands all the accordion menu on click
             });     
        
        },
       
        MobileMenuFunction : function(){
                 // close-button-active
                    if($('body').hasClass('mobile-menu-active','sticky-mobile-menu-active').length!=''){
                        $('body').find('.sider').append('<div class="menu-close"><span tabindex="0" class="menu-close-btn"></span></div>');
                        $('.menu-close-btn').removeAttr("href");
                        //Menu close
                        $('.menu-close-btn,.open-shop-menu li a span.open-shop-menu-link').click(function(){
                        $('body').removeClass('mobile-menu-active');
                        $('body').removeClass('sticky-mobile-menu-active');
                        });
                        $('.menu-close-btn,.open-shop-menu li a span.open-shop-menu-link').keypress(function(){
                        $('body').removeClass('mobile-menu-active');
                        $('body').removeClass('sticky-mobile-menu-active');
                        });
                        // Esc key close menu
                      document.addEventListener( 'keydown', function( event ) {
                      if ( event.keyCode === 27 ) {
                        event.preventDefault();
                        document.querySelectorAll( '.mobile-menu-active' ).forEach( function( element ) {
                          jQuery('body').removeClass('mobile-menu-active');
                        }.bind( this ) );
                      
                      }
                    }.bind( this ) );
                    //ToggleBtn above Click
                    $('#menu-btn-abv').click(function (e){
                       e.preventDefault();
                       $('body').addClass('mobile-above-menu-active');
                       $('#open-above-menu').removeClass('hide-menu'); 
                       $('.sider.above').removeClass('open-shop-menu-hide');
                       $('.sider.main').addClass('open-shop-menu-hide');
                    });
                    $('#menu-btn-abv').keypress(function (e){
                       e.preventDefault();
                       $('body').addClass('mobile-above-menu-active');
                       $('#open-above-menu').removeClass('hide-menu'); 
                       $('.sider.above').removeClass('open-shop-menu-hide');
                       $('.sider.main').addClass('open-shop-menu-hide');
                    });
                    //ToggleBtn main menu Click
                    $('#menu-btn').click(function (e){
                       e.preventDefault();
                       $('body').addClass('mobile-menu-active');
                       $('#open-shop-menu').removeClass('hide-menu');
                       $('.sider.above').addClass('open-shop-menu-hide');  
                       $('.sider.main').removeClass('open-shop-menu-hide');    
                    });
                    $('#menu-btn').keypress(function (e){
                       e.preventDefault();
                       $('body').addClass('mobile-menu-active');
                       $('#open-shop-menu').removeClass('hide-menu');
                       $('.sider.above').addClass('open-shop-menu-hide');  
                       $('.sider.main').removeClass('open-shop-menu-hide');    
                    });
                    //sticky
                    $('#menu-btn-stk').click(function (e){
                       e.preventDefault();
                       $('body').addClass('sticky-mobile-menu-active');
                       $('.sider.main').addClass('open-shop-menu-hide');
                      });
                    $('#menu-btn-stk').keypress(function (e){
                       e.preventDefault();
                       $('body').addClass('sticky-mobile-menu-active');
                       $('.sider.main').addClass('open-shop-menu-hide');
                      });
                    // default page
                    $('#menu-btn').click(function (e){
                       e.preventDefault();
                       $('body').addClass('mobile-menu-active');
                       $('#menu-all-pages').removeClass('hide-menu');    
                    });
                    $('#menu-btn').keypress(function (e){
                       e.preventDefault();
                       $('body').addClass('mobile-menu-active');
                       $('#menu-all-pages').removeClass('hide-menu');    
                    });

                  }    
        },
        
            MoveToTop:function(){
                      /**************************************************/
                      // Show-hide Scroll to top & move-to-top arrow
                      /**************************************************/
                        jQuery("body").prepend("<a id='move-to-top' class='animate' href='#'><i class='fa fa-angle-up'></i></a>"); 
                        var scrollDes = 'html,body';  
                        /*Opera does a strange thing if we use 'html' and 'body' together so my solution is to do the UA sniffing thing*/
                        if(navigator.userAgent.match(/opera/i)){
                          scrollDes = 'html';
                        }
                        //show ,hide
                        jQuery(window).scroll(function (){
                          if(jQuery(this).scrollTop() > 160){
                            jQuery('#move-to-top').addClass('filling').removeClass('hiding');
                          }else{
                            jQuery('#move-to-top').removeClass('filling').addClass('hiding');
                          }
                        });
                        jQuery('#move-to-top').click(function(){
                            jQuery("html, body").animate({ scrollTop: 0 }, 600);
                            return false;
                        });
                     
                },

           checkIfScrollable: function() {
  // Function to check if .thunk-product-cat-list has scrollable content
  var catList = $('.thunk-product-cat-list')[0]; // Get the DOM element

  // Function to check if it's scrollable based on content size
  function updateScrollState() {
    var isScrollable = catList.scrollHeight > catList.clientHeight;
    // Set the overflow based on whether the content is scrollable
    if (isScrollable) {
      $('.thunk-product-cat-list').css('overflow-y', 'scroll');
    } else {
      $('.thunk-product-cat-list').css('overflow-y', 'hidden');
    }
  }

  // Call the function once to set the initial state
  updateScrollState();

  // Update the scroll state when mouse enters and leaves a <li> with sub-menu
  $('.thunk-product-cat-list').on('mouseenter', 'li.cat-item', function() {
    const $li = $(this);

    // Check if this <li> or any of its children contain a .sub-menu
    const hasSubMenu = $li.find('.sub-menu').length > 0;

    if (hasSubMenu) {
      $('.thunk-product-cat-list').css('overflow-y', 'initial');
    }
  });

  $('.thunk-product-cat-list').on('mouseleave', 'li.cat-item', function() {
    updateScrollState();
  });

  // Optionally, listen for resize events in case the container changes size
  $(window).on('resize', function() {
    updateScrollState();
  });

  // Optionally, listen for any changes in the list content
  // If using jQuery, you can bind to events like 'DOMNodeInserted' for dynamic content updates
  $('.thunk-product-cat-list').on('DOMNodeInserted DOMNodeRemoved', function() {
    updateScrollState();
  });
},

                
}
  OpenShopLib.init();
})(jQuery);


