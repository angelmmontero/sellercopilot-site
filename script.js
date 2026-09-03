/* SellerCopilot — restraint-level motion.
   Everything here is an enhancement: with script off or reduced motion on, the page is
   complete and readable as plain HTML/CSS. */
(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Phone menu: close it after a link is chosen or on Escape; the toggle itself needs no script */
  var toggle = document.getElementById("nav-toggle");
  if (toggle) {
    var nav = document.querySelector(".main-nav");
    var sync = function () { toggle.setAttribute("aria-label", toggle.checked ? "Close menu" : "Open menu"); toggle.setAttribute("aria-expanded", toggle.checked ? "true" : "false"); };
    toggle.addEventListener("change", sync);
    sync();
    if (nav) nav.addEventListener("click", function (e) { if (e.target.closest("a")) { toggle.checked = false; sync(); } });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && toggle.checked) { toggle.checked = false; sync(); toggle.focus(); } });
  }

  /* Screenshot slots: a missing file keeps its mono label visible */
  var shots = document.querySelectorAll(".shot img");
  for (var i = 0; i < shots.length; i++) {
    (function (img) {
      var drop = function () { if (img.parentNode) img.parentNode.removeChild(img); };
      img.addEventListener("error", drop);
      if (img.complete && img.naturalWidth === 0) drop();
    })(shots[i]);
  }

  var rises = document.querySelectorAll("[data-rise]");
  var showAll = function () { for (var j = 0; j < rises.length; j++) rises[j].classList.add("is-in"); };

  if (reduce || !("IntersectionObserver" in window)) { showAll(); return; }

  /* Section content rises 8px on scroll-in, staggered by its data-rise index */
  var riseObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-in"); riseObserver.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  for (var k = 0; k < rises.length; k++) {
    rises[k].style.setProperty("--i", rises[k].getAttribute("data-rise") || 0);
    riseObserver.observe(rises[k]);
  }
  /* Anything already in view on load shows at once */
  window.setTimeout(function () {
    for (var m = 0; m < rises.length; m++) {
      var r = rises[m].getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) rises[m].classList.add("is-in");
    }
  }, 50);

  /* The figure counts up once when it enters the viewport */
  var fig = document.querySelector("[data-count]");
  if (fig) {
    var target = parseInt(fig.getAttribute("data-count"), 10);
    var prefix = fig.getAttribute("data-prefix") || "";
    var counted = false;
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting || counted) return;
        counted = true;
        countObserver.disconnect();
        fig.style.minWidth = fig.getBoundingClientRect().width + "px";   /* no reflow while counting */
        var t0 = null, dur = 900;
        var step = function (t) {
          if (t0 === null) t0 = t;
          var p = Math.min(1, (t - t0) / dur);
          p = 1 - Math.pow(1 - p, 3);
          fig.textContent = prefix + Math.round(target * p).toLocaleString("en-US");
          if (p < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    countObserver.observe(fig);
  }

  /* Each note in the brief types itself out on first scroll into view, then stops.
     Every note, not one: three sibling cards where only the first animates reads as a
     bug rather than as restraint. Each gets its own observer so it starts when it is
     itself in view, which staggers them naturally as the reader scrolls. */
  var typedNotes = document.querySelectorAll("[data-typed]");
  for (var t = 0; t < typedNotes.length; t++) {
    (function (typed) {
      var text = typed.textContent.replace(/\s+/g, " ").trim();
      if (!text) return;
      var typeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          typeObserver.disconnect();
          typed.style.minHeight = typed.getBoundingClientRect().height + "px";   /* reserve the final height */
          var full = document.createElement("span");
          full.className = "sr-only";
          full.textContent = text;
          var live = document.createElement("span");
          live.className = "typed";
          live.setAttribute("aria-hidden", "true");
          typed.textContent = "";
          typed.appendChild(full);
          typed.appendChild(live);
          typed.classList.add("is-typing");
          var n = 0, per = Math.max(9, Math.min(20, Math.round(1500 / text.length)));
          var tick = function () {
            n += 1;
            live.textContent = text.slice(0, n);
            if (n < text.length) window.setTimeout(tick, per);
            else window.setTimeout(function () { typed.classList.remove("is-typing"); }, 400);
          };
          window.setTimeout(tick, 250);
        });
      }, { threshold: 0.6 });
      typeObserver.observe(typed);
    })(typedNotes[t]);
  }
})();
