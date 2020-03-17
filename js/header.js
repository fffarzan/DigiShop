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

  $('#header-profileIcon').hide();
  $('#header-bascketIcon').hide();

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

  $('#header-profileIcon').hide();
  $('#header-bascketIcon').hide();

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
    headerSearch.parent().css('width', '500.01px');
    headerSearch.css({
      'width': '500.01px',
      'border-radius': '7px 7px 0 0'
    });
    $('#header-searchBox').fadeIn();
  };
}