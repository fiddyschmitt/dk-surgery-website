(function() {
  "use strict";

  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(event) {
      var target = document.querySelector(link.getAttribute("href"));

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      history.pushState(null, "", link.getAttribute("href"));
    });
  });
})();
