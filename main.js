// Typewriter effect over the static resume markup.
// The content lives in index.html, so it is readable without JavaScript and by crawlers;
// this script only empties it and types it back in.

var LOADING_DELAY = 900; // how long the "running identity protocol" intro is shown
var CHAR_DELAY = 8; // ms per typed character
var LINE_DELAY = 120; // pause between lines
var LINE_SELECTOR = "h1, h2, h3, p, li";

document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;
  if (!root.classList.contains("typing")) return;

  var resume = document.getElementById("resume");
  var loading = document.getElementById("loading");
  var dots = document.getElementById("dots");
  var skipButton = document.getElementById("skip");
  var finished = false;
  var timer;

  // Every line keeps its text nodes and their original text, then gets emptied.
  var lines = Array.prototype.map.call(resume.querySelectorAll(LINE_SELECTOR), function (el) {
    var nodes = [];
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      // Skip text that belongs to a nested line; that line types it itself.
      if (walker.currentNode.parentElement.closest(LINE_SELECTOR) !== el) continue;
      nodes.push({ node: walker.currentNode, text: walker.currentNode.nodeValue.replace(/\s+/g, " ") });
      walker.currentNode.nodeValue = "";
    }
    el.classList.add("pending");
    return { el: el, nodes: nodes };
  });

  resume.setAttribute("aria-busy", "true");
  root.classList.add("typing-ready");
  skipButton.hidden = false;

  var dotTimer = setInterval(function () {
    dots.textContent = dots.textContent.length >= 5 ? "" : dots.textContent + ".";
  }, 300);

  function finish() {
    if (finished) return;
    finished = true;
    clearTimeout(timer);
    clearInterval(dotTimer);
    loading.hidden = true;
    skipButton.hidden = true;
    lines.forEach(function (line) {
      line.nodes.forEach(function (n) {
        n.node.nodeValue = n.text;
      });
      line.el.classList.remove("pending", "cursor");
    });
    resume.removeAttribute("aria-busy");
    root.classList.remove("typing", "typing-ready");
    try {
      localStorage.setItem("resume-seen", "1");
    } catch (e) {}
    document.removeEventListener("keydown", onKey);
  }

  function typeLine(lineIndex, nodeIndex, charIndex) {
    if (finished) return;
    var line = lines[lineIndex];
    if (!line) return finish();

    if (nodeIndex === 0 && charIndex === 0) {
      line.el.classList.remove("pending");
      line.el.classList.add("cursor");
      line.el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    var current = line.nodes[nodeIndex];
    if (!current) {
      line.el.classList.remove("cursor");
      timer = setTimeout(typeLine, LINE_DELAY, lineIndex + 1, 0, 0);
      return;
    }
    if (charIndex >= current.text.length) {
      return typeLine(lineIndex, nodeIndex + 1, 0);
    }
    current.node.nodeValue += current.text.charAt(charIndex);
    timer = setTimeout(typeLine, CHAR_DELAY, lineIndex, nodeIndex, charIndex + 1);
  }

  function onKey(event) {
    if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
      if (event.target.closest("a, button")) return; // let links and the skip button handle their own keys
      event.preventDefault();
      finish();
    }
  }

  skipButton.addEventListener("click", finish);
  window.addEventListener("beforeprint", finish);
  document.addEventListener("keydown", onKey);

  timer = setTimeout(function () {
    clearInterval(dotTimer);
    loading.hidden = true;
    typeLine(0, 0, 0);
  }, LOADING_DELAY);
});
