$(function () {

  windowWidth = window.screen.width;

  $('#darkBody').click(function () {

    $('#header-profileIcon').fadeIn();
    $('#header-bascketIcon').fadeIn();

    if (windowWidth < 768) {
      $('.navbar').css('right', '-300px');
    } else {
      $('.navbar').css('right', '0');
    }

    if (windowWidth < 768) {
      $('#header-search').parent().css('width', '250px');
      $('#header-search').css('width', '250px');
    } else if (windowWidth >= 768 && windowWidth < 992) {
      $('#header-search').parent().css('width', '350px');
      $('#header-search').css('width', '350px');
    } else {
      $('#header-search').parent().css('width', '500px');
      $('#header-search').css('width', '500px');
    };
    
    $('#header-search').parent().css('transition', '.3s');
    $('#header-search').css('border-radius', '7px');
    $('#header-searchBox').hide();
    $('.header-search-outer').css('z-index', '0');
    
    $('.darkBody').fadeOut();
  })
  
})
$(function () {

  $('#firstPage-banner').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    animateOut: 'fadeOut',
    navText: ['<span class="icon icon-arrow-back"></span>', '<span class="icon icon-arrow-forward"></span>'],
    responsive: {
      0: {
        items: 1,
        nav: false,
        stagePadding: 10
      },
      992: {
        items: 1,
        nav: true,
        stagePadding: 0,
      }
    }
  });

  $('#firstPage-coloryCarousel-carousel').owlCarousel({
    rtl: true,
    loop: false,
    margin: 15,
    dots: false,
    navText: ['<span class="icon icon-arrow-back"></span>', '<span class="icon icon-arrow-forward"></span>'],
    responsive: {
      0: {
        items: 2,
        nav: false,
        stagePadding: 20
      },
      768: {
        items: 3,
        stagePadding: 10
      },
      992: {
        items: 4,
        nav: true,
        stagePadding: 0,
        margin: 10,
      }
    }
  });

  $('#firstPage-productCarousel').owlCarousel({
    rtl: true,
    margin: 15,
    dots: false,
    navText: ['<span class="icon icon-arrow-back"></span>', '<span class="icon icon-arrow-forward"></span>'],
    responsive: {
      0: {
        items: 1,
        nav: false,
        stagePadding: 40
      },
      768: {
        items: 2,
        stagePadding: 80
      },
      992: {
        items: 4,
        nav: true,
        stagePadding: 0,
        margin: 10,
      }
    }
  });

  $('#firstPage-importantCarousel').owlCarousel({
    rtl: true,
    margin: 15,
    dots: false,
    navText: ['<span class="icon icon-arrow-back"></span>', '<span class="icon icon-arrow-forward"></span>'],
    responsive: {
      0: {
        items: 1,
        nav: false,
        stagePadding: 40
      },
      768: {
        items: 2,
        stagePadding: 80
      },
      992: {
        items: 4,
        nav: true,
        stagePadding: 0,
        margin: 10,
      }
    }
  });

  $('#firstPage-suddenSuggestionCarousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    dots: true,
    items: 1
  });

})
$(function () {

  $(document).click(function (e) { 

    // User quick panel hiding.
    var userQuickPanel = $('#header-userQuickPanel');
    var userQuickPanelButton = $('#header-profileIcon');
    var target = e.target;
    if (
      userQuickPanelButton[0] !== target && 
      userQuickPanelButton.has(e.target).length === 0 &&
      userQuickPanel[0] !== target &&
      userQuickPanel.has(e.target).length === 0
    ) {
      userQuickPanel.hide();
    }

    // Bascket quick panel hiding.
    var bascketQuickPanel = $('#header-bascketQuickPanel');
    var bascketQuickPanelButton = $('#header-bascketIcon');
    var target = e.target;
    if (
      bascketQuickPanelButton[0] !== target && 
      bascketQuickPanelButton.has(e.target).length === 0 &&
      bascketQuickPanel[0] !== target &&
      bascketQuickPanel.has(e.target).length === 0
    ) {
      bascketQuickPanel.hide();
    }

  })

  $('#header-search').click(function () {

    $('#header-profileIcon').hide();
    $('#header-bascketIcon').hide();

    if (windowWidth < 768) {
      headerSearchMobile();
    } else if (windowWidth >= 768 && windowWidth < 992) {
      headerSearchTablet();
    } else {
      headerSearchDesktop();
    };

    $('.header-search-outer').css('z-index', '100');

    $('#darkBody').fadeIn();
    
  })

})

function openUserQuickPanel(e) {
    $('#header-userQuickPanel').show();
}

function openBascketQuickPanel(e) {
  $('#header-bascketQuickPanel').show();
}

function headerSearchMobile() {

  var headerSearch = $('#header-search');

  if (headerSearch.css('width') === '250px') {
    headerSearch.parent().css('width', '100%');
    headerSearch.css({
      'width': '100%',
      'border-radius': '7px 7px 0 0'
    });
    $('#header-searchBox').fadeIn();
  };

}

function headerSearchTablet() {

  var headerSearch = $('#header-search');

  if (headerSearch.css('width') === '350px') {
    headerSearch.parent().css('width', '100%');
    headerSearch.css({
      'width': '100%',
      'border-radius': '7px 7px 0 0'
    });
    $('#header-searchBox').fadeIn();
  };

}

function headerSearchDesktop() {
  var headerSearch = $('#header-search');

  if (headerSearch.css('width') === '500px') {
    headerSearch.parent().css('width', '700px');
    headerSearch.css({
      'width': '700px',
      'border-radius': '7px 7px 0 0'
    });
    $('#header-searchBox').fadeIn();
  };
}
// $('#header-search-mobileIcon').click(function () {
//   $('.header-search-mobile').slideToggle();
// });
$(function () {

  $('#header-item-menuIcon').click(function () {
    $('.darkBody').fadeIn();
    $('.navbar').css('right', '0');
  })

  $('#menu .item > a').click(function (event) {

    $(this).siblings('div').children().children('li:first-child').slideToggle();

    // Toggle betwwn plus icon and mius icon.
    if ($(this).children('span').hasClass('icon-add-outline')) {
      $(this).children('span').removeClass('icon-add-outline').addClass('icon-minus-outline');
    } else {
      $(this).children('span').removeClass('icon-minus-outline').addClass('icon-add-outline');
    };

    event.preventDefault();

  });

  $('#menu .title > a > .icon-add-outline').click(function (event) {

    $(this).parent().parent().siblings('li').slideToggle();

    if ($(this).hasClass('icon-add-outline')) {
      $(this).removeClass('icon-add-outline').addClass('icon-minus-outline');
    } else {
      $(this).removeClass('icon-minus-outline').addClass('icon-add-outline');
    };

    event.preventDefault();
  });

  $('#header-item-menuIcon').on('click', function () {
    this.classList.toggle('active');
  });


  // Magic line
  var el, rightPos, newWidth;
  var menuWidth = $('#menu').width();
  $('#menu').append('<span id="magic-line"></span>');
  var magicLine = $('#magic-line');

  magicLine.css('right', menuWidth - $('.navbar-item-title').position().left);

  $('#menu li')
    .find('.navbar-item-title')
    .hover(
      function () {
        el = $(this);
        rightPos = menuWidth - el.position().left - el.width() - 40;
        newWidth = el.parent().width();

        magicLine.stop().animate({
          right: rightPos,
          width: newWidth
        });
      }
    );
    
  $('#menu').mouseleave(function () {
    magicLine.stop().animate({
      right: 0,
      width: 0
    });
  })

});
