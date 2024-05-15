document.addEventListener("DOMContentLoaded", function () {
  var initDot = document.getElementById("loading");
  var loading = setInterval(function () {
    if (initDot.innerHTML.length == 5) {
      initDot.innerHTML = "";
    } else {
      initDot.innerHTML += ".";
    }
  }, 350); //dot speed

  var $loadingMessage = $("#loadingH1");

  setTimeout(function () {
    clearInterval(loading);
    $loadingMessage.hide();
  }, 1500);

  var jsonData = [
  {
    id: 'name',
    class: '',
    text: 'NAME: Thomas Kopitsch',
    element: 'h3',
  },
  {
    id: 'alias',
    class: '',
    text: 'KNOWN ALIAS: thoemmy',
    element: 'h3',
  },
  {
    id: 'occupation',
    class: '',
    text: 'OCCUPATION: FULL STACK DEVELOPER',
    element: 'h3',
  },
  {
    id: '',
    class: '',
    text: '',
    element: 'br',
  },
  {
    id: 'fullstack-end-span',
    class: 'fa fa-wrench',
    text: '',
    element: 'i',
  },
  {
    id: 'fullstack-end',
    class: 'inline',
    text: 'FULL STACK DEVELOPMENT CORE:',
    element: 'h3',
  },
  {
    id: 'js-frameworks',
    class: 'sub-item',
    text: 'JAVASCRIPT FRAMEWORKS: ANGULAR | NESTJS',
    element: 'h4',
  },
  {
    id: 'ui-frameworks',
    class: 'sub-item',
    text: 'UI FRAMEWORKS: PRIMENG',
    element: 'h4',
  },
  {
    id: 'js-libs',
    class: 'sub-item',
    text: 'JAVASCRIPT LIBRARIES: JQUERY',
    element: 'h4',
  },
  {
    id: 'css-frameworks',
    class: 'sub-item',
    text: 'CSS FRAMEWORKS: PRIMEFLEX',
    element: 'h4',
  },
  {
    id: 'css-pre',
    class: 'sub-item',
    text: 'CSS PREPROCESSORS: SASS',
    element: 'h4',
  },
  {
    id: '',
    class: '',
    text: '',
    element: 'br',
  },
  {
    id: 'discord-span',
    class: 'fa fa-gear',
    text: '',
    element: 'i',
  },
  {
    id: 'discord-end',
    class: 'inline',
    text: 'DISCORD BOT DEVELOPMENT CORE:',
    element: 'h3',
  },
  {
    id: 'discord-frameworks',
    class: 'sub-item',
    text: 'PYTHON FRAMEWORKS: Discord.py | Pycord',
    element: 'h4',
  },
  {
    id: 'discord-usecases',
    class: 'sub-item',
    text: 'BOT EXAMPLE FUNCTIONS: Server Management, CryptoGame Stats, Gamestats, LiveTicker, Scholar Management System',
    element: 'h4',
  },
];

  function initElements(data, index) {
    var elementData = data[index];
    var element = document.createElement(elementData.element);
    element.id = elementData.id;
    element.className = elementData.class;

    if (elementData.class === "sub-item") {
      var text = "> " + elementData.text;
    } else {
      var text = elementData.text;
    }
    var i = 0;

    var typingAnimation = setInterval(function () {
      if (i < text.length) {
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
          }, 1500);
        } else {
          initElements(data, index + 1);
        }
      }
    }, 35);

    var container = $("#resume");
    container.append(element);
    element.classList.add("cursor");
  }

  setTimeout(function () {
    initElements(jsonData, 0);
  }, 1500);
});
