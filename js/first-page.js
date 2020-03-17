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
        stagePadding: 50
      },
      768: {
        items: 2,
        stagePadding: 80
      },
      992: {
        items: 5,
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
        stagePadding: 50
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