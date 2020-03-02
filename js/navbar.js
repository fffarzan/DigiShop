// $('#header-search-mobileIcon').click(function () {
//   $('.header-search-mobile').slideToggle();
// });

$('#header-item-menuIcon').click(function () {
  $('.darkBody').fadeIn();
  $('.navbar').css('right', '0');
})

$('#darkBody').click(function () {
  $('.navbar').css('right', '-300px');
  $('.darkBody').fadeOut();
})

// $('#menu .item > a > .icon-arrow-back').click(function (event) {
//   $(this).parent('a').siblings('div').children().children('li:first-child').slideToggle();
//   event.preventDefault();
// });
// $('#menu .title > a > .icon-arrow-back').click(function (event) {
//   $(this).parent().parent().siblings('li').slideToggle();
//   event.preventDefault();
// });
// $('#header-item-menuIcon').on('click', function () {
//   this.classList.toggle('active');
// });