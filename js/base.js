$(function () {

  windowWidth = window.screen.width;

  $('#darkBody').click(function () {

    $('#header-profileIcon').fadeIn();
    $('#header-bascketIcon').fadeIn();

    if (windowWidth < 992) {
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