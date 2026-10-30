(function () {
  document.addEventListener(
    "keydown",
    function (event) {
      var key = (event.key || "").toLowerCase();
      if ((event.ctrlKey || event.metaKey) && key === "u") {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    },
    true
  );

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
