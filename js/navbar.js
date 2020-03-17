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
