window.onload = function () {
  var scrolled;
  var timer;

  document.getElementById('top').onclick = function () {
    scrolled = window.pageYOffset;
    scrollToTop();
  };
  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 80;
      timer = setTimeout(scrollToTop, 20);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }
};
