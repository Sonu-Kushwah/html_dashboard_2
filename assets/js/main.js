$(document).ready(function () {
  $("#toggleSidebar").click(function () {
    $(".layout-container").toggleClass("active");
  });

  // Function to add class based on screen size
  function addClassBasedOnScreenSize() {
    if ($(window).width() < 768) {
      // You can adjust this value for your mobile view
      $("#sidebar").addClass("active");
    } else {
      $("#sidebar").removeClass("active");
    }
  }

  // Call the function on document ready and on window resize
  addClassBasedOnScreenSize();
  $(window).resize(addClassBasedOnScreenSize);

  /*nav link add and remove class page router */
  $("#nav-links .nav-link").each(function () {
    if (this.href === window.location.href) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});
