

// 下拉選單
$('.dropdown').click(function() {
  $(this).toggleClass('active', 100);
  $(this).find('.dropdown-menu').slideToggle(100);
});

$(document).click(function(e) {
  if ($('.dropdown') !== e.target && !$('.dropdown').has(e.target).length) {
    $('.dropdown').removeClass('active');
    $('.dropdown-menu').slideUp(100);
  }
});

// 手機選單
$('.site-menu-btn').click(function() {
  $(this).toggleClass('active');
  $('.site-menu').toggleClass('menu--view');
  $('.page').toggleClass('menu--open');
});

// 頁尾置底
$(window).resize(function() {
  var windowWidth  = $(window).width();
  var footerHeight = $('footer').height();
  if (windowWidth > 1199) {
    $('main').css('padding-bottom', footerHeight + 40);
  } else {
    $('main').css('padding-bottom', 0);
  }
}).resize();

// 捲動置頂
var tarShow   = (!$('html.desktop').length)?$('main'):$(window);
var tarScroll = (!$('html.desktop').length)?$('main'):$('html, body');
tarShow.scroll(function() {
  var windowHeight = tarShow.height();
  var scrollTop    = $(this).scrollTop();
  if (scrollTop > windowHeight) {
    $('#back-top').fadeIn(500);
  } else {
    $('#back-top').fadeOut(500);
    $('#back-top').removeClass('active');
  }
});

$('#back-top').click(function(e) {
  e.preventDefault();
  tarScroll.animate({scrollTop: 0}, 300);
  $('#back-top').addClass('active');
});