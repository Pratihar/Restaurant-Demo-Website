$(document).ready(function() {
  // toggler btn
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });

  // navbar decrease padding
  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 718) {
      $(".navbar").addClass("fixed-top");
      $(".navbar").addClass("navbar-background");
    } else {
      $(".navbar").removeClass("fixed-top");
      $(".navbar").removeClass("navbar-background");
    }
  });

  //smooth scroll
  $(".nav-item a").click(function(link) {
    link.preventDefault();

    var top = $(window).scrollTop();
    let target = $(this).attr("href");

    if (top < 718) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top - 350
          },
          2000
        );
    } else {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top - 25
          },
          2000
        );
    }
  });

  $("#back-to-top, .header-link").click(function(link) {
    link.preventDefault();

    let target = $(this).attr("href");

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 25
        },
        2000
      );
  });

  // back to top

  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 718) {
      $("#back-to-top").addClass("scrollTop");
    } else {
      $("#back-to-top").removeClass("scrollTop");
    }
  });

  $("#header, .info").ripples({
    dropRadius: 10,
    perturbance: 0.1
  });

  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
