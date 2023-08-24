$(document).ready(function () {
  $('.main_banner_btn').on('click', function () {
    alert('Hello, World');
  });

  $('.mob-menu-icon').on('click', function () {
    $(this).stop(true, true).toggleClass('toggle');
    $('.header_nav_group').stop(true, true).toggleClass('toggle');
  });

  if ($(window).width() <= 1024) {
    $('.nav__group.dropdown').on('click', function () {
      $(this).stop(true, true).toggleClass('active');
    });
  }



});