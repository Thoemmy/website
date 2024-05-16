(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
  {
    "id": "name",
    "class": "uppercase",
    "text": "name: Thomas Kopitsch",
    "element": "h3"
  },
  {
    "id": "alias",
    "class": "uppercase",
    "text": "known alias: thoemmy",
    "element": "h3"
  },
  {
    "id": "occupation",
    "class": "uppercase",
    "text": "occupation: Junior Software Developer",
    "element": "h3"
  },
  {
    "id": "",
    "class": "uppercase",
    "text": "--- resume of my stacks ---",
    "element": "h3"
  },
  {
    "id": "",
    "class": "",
    "text": "",
    "element": "br"
  },
  {
    "id": "",
    "class": "fa fa-wrench",
    "text": "",
    "element": "i"
  },
  {
    "id": "",
    "class": "inline uppercase",
    "text": "full stack development core:",
    "element": "h3"
  },
  {
    "id": "",
    "class": "sub-item uppercase",
    "text": "javascript frameworks: angular | nestjs",
    "element": "h4"
  },
  {
    "id": "",
    "class": "sub-item uppercase",
    "text": "UI frameworks: angular material | primeng",
    "element": "h4"
  },
  {
    "id": "",
    "class": "sub-item uppercase",
    "text": "css frameworks: primeflex",
    "element": "h4"
  },
  {
    "id": "",
    "class": "sub-item uppercase",
    "text": "css preprocessors: sass",
    "element": "h4"
  },
  {
    "id": "",
    "class": "sub-item uppercase",
    "text": "databases: postgres | mongodb",
    "element": "h4"
  },
  {
    "id": "",
    "class": "",
    "text": "",
    "element": "br"
  },
  {
    "id": "",
    "class": "fa fa-gear",
    "text": "",
    "element": "i"
  },
  {
    "id": "",
    "class": "inline uppercase",
    "text": "discord bot development core:",
    "element": "h3"
  },
  {
    "id": "",
    "class": "sub-item uppercase",
    "text": "python frameworks: Discord.py | Pycord",
    "element": "h4"
  },
  {
    "id": "",
    "class": "",
    "text": "",
    "element": "br"
  },
  {
    "id": "",
    "class": "fa fa-brain",
    "text": "",
    "element": "i"
  },
  {
    "id": "",
    "class": "inline uppercase",
    "text": "additionally knowledge",
    "element": "h3"
  },
  {
    "id": "",
    "class": "sub-item uppercase",
    "text": "git advanced",
    "element": "h4"
  },
  {
    "id": "",
    "class": "sub-item uppercase",
    "text": "docker basic",
    "element": "h4"
  },
  {
    "id": "",
    "class": "sub-item uppercase",
    "text": "kubernetes basic",
    "element": "h4"
  },
  {
    "id": "",
    "class": "sub-item uppercase",
    "text": "helm basic",
    "element": "h4"
  },
  {
    "id": "",
    "class": "",
    "text": "",
    "element": "br"
  },
  {
    "id": "",
    "class": "uppercase",
    "text": "Check out my Github",
    "href": "https://github.com/Thoemmy/",
    "target": "_blank",
    "element": "a"
  }
]

},{}],2:[function(require,module,exports){
var jsonData = require("./content.json");

var starterdelay = 1500; // This value is used to hide ithe initial loading text and then start the writing of the sentenses

document.addEventListener("DOMContentLoaded", function () {
  //document.getElementById("refreshButton").onclick = refresh;

  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  var initDot = document.getElementById("loading");
  var loading = setInterval(function () {
    if (initDot.innerHTML.length == 5) {
      initDot.innerHTML = "";
    } else {
      initDot.innerHTML += ".";
    }
  }, 350); //to set the initial dot speed

  var $loadingMessage = $("#loadingH1");

  setTimeout(function () {
    clearInterval(loading);
    $loadingMessage.hide();
  }, starterdelay);

  function initElements(data, index) {
    var elementData = data[index];
    var element = document.createElement(elementData.element);

    if (elementData.id) element.id = elementData.id;
    if (elementData.class) element.className = elementData.class;

    if (elementData.element === "a") {
      element.href = elementData.href;
      element.target = elementData.target;
    }

    if (elementData.element === "img") {
      element.src = elementData.src;
      element.height = elementData.height || "180";
      element.width = elementData.width || "320";
    }

    var text = elementData.text;

    var i = 0;

    var typingAnimation = setInterval(function () {
      if (i < text.length) {
        scrollToBottom();
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typingAnimation);
        element.classList.remove("cursor");
        if (elementData.element !== "i" && elementData.element !== "br") {
          setTimeout(function () {
            if (index + 1 < data.length) {
              initElements(data, index + 1);
            }
          }, 1000); // with this setTimeout you can control when the next sentense will be written
        } else {
          initElements(data, index + 1);
        }
      }
    }, 30); // This is for the speed which is used to write the sentense
    var container = $("#resume");
    container.append(element);
    element.classList.add("cursor");
  }

  setTimeout(function () {
    initElements(jsonData, 0);
  }, starterdelay);
});

//function refresh() {
//  window.location.reload();
//}

},{"./content.json":1}]},{},[2]);
