var jsonData = require("./content.json");

var starterdelay = 1500; // This value is used to hide ithe initial loading text and then start the writing of the sentenses

document.addEventListener("DOMContentLoaded", function () {
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
    console.log(elementData.class);
    if (elementData.class) element.className = elementData.class;

    if (elementData.element === "a") {
      element.href = elementData.href;
      element.target = elementData.target;
    }

    var text = elementData.text;

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
