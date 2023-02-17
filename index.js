const aboutBtnAlgebra = document.querySelector("#about-btn-algebra");
const aboutBtnEcommerce = document.querySelector("#about-btn-ecommerce");
const divAboutAlgebra = document.querySelector("#div-about-algebra");
const divAboutEcommerce = document.querySelector(".messenger2");
class Messenger {
  constructor(el) {
    "use strict";
    let m = this;

    m.init = function () {
      m.codeletters = "&#*+%?£@§$/-";
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [
        "Simple web chat application.",
        "CreateReactApp, SCSS, Scaledrone",
      ];

      setTimeout(m.animateIn, 1000);
    };

    m.generateRandomString = function (length) {
      let random_text = "";
      while (random_text.length < length) {
        random_text += m.codeletters.charAt(
          Math.floor(Math.random() * m.codeletters.length)
        );
      }

      return random_text;
    };

    m.animateIn = function () {
      if (m.current_length < m.messages[m.message].length) {
        m.current_length = m.current_length + 2;
        if (m.current_length > m.messages[m.message].length) {
          m.current_length = m.messages[m.message].length;
        }

        let message = m.generateRandomString(m.current_length);
        el.innerHTML = message;

        setTimeout(m.animateIn, 20);
      } else {
        setTimeout(m.animateFadeBuffer, 20);
      }
    };

    m.animateFadeBuffer = function () {
      if (m.fadeBuffer === false) {
        m.fadeBuffer = [];
        for (let i = 0; i < m.messages[m.message].length; i++) {
          m.fadeBuffer.push({
            c: Math.floor(Math.random() * 12) + 1,
            l: m.messages[m.message].charAt(i),
          });
        }
      }

      let do_cycles = false;
      let message = "";

      for (let i = 0; i < m.fadeBuffer.length; i++) {
        let fader = m.fadeBuffer[i];
        if (fader.c > 0) {
          do_cycles = true;
          fader.c--;
          message += m.codeletters.charAt(
            Math.floor(Math.random() * m.codeletters.length)
          );
        } else {
          message += fader.l;
        }
      }

      el.innerHTML = message;

      if (do_cycles === true) {
        setTimeout(m.animateFadeBuffer, 50);
      } else {
        setTimeout(m.cycleText, 2000);
      }
    };

    m.cycleText = function () {
      m.message = m.message + 1;
      if (m.message >= m.messages.length) {
        m.message = 0;
      }

      m.current_length = 0;
      m.fadeBuffer = false;
      el.innerHTML = "";

      setTimeout(m.animateIn, 200);
    };

    m.init();
  }
}

class Messenger2 {
  constructor(el) {
    "use strict";
    let m = this;

    m.init = function () {
      m.codeletters = "&#*+%?£@§$/-";
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [
        "Nature themed e-commerce site",
        "Vite, React, TailwindCSS, MySQL",
      ];

      setTimeout(m.animateIn, 1000);
    };

    m.generateRandomString = function (length) {
      let random_text = "";
      while (random_text.length < length) {
        random_text += m.codeletters.charAt(
          Math.floor(Math.random() * m.codeletters.length)
        );
      }

      return random_text;
    };

    m.animateIn = function () {
      if (m.current_length < m.messages[m.message].length) {
        m.current_length = m.current_length + 2;
        if (m.current_length > m.messages[m.message].length) {
          m.current_length = m.messages[m.message].length;
        }

        let message = m.generateRandomString(m.current_length);
        el.innerHTML = message;

        setTimeout(m.animateIn, 20);
      } else {
        setTimeout(m.animateFadeBuffer, 20);
      }
    };

    m.animateFadeBuffer = function () {
      if (m.fadeBuffer === false) {
        m.fadeBuffer = [];
        for (let i = 0; i < m.messages[m.message].length; i++) {
          m.fadeBuffer.push({
            c: Math.floor(Math.random() * 12) + 1,
            l: m.messages[m.message].charAt(i),
          });
        }
      }

      let do_cycles = false;
      let message = "";

      for (let i = 0; i < m.fadeBuffer.length; i++) {
        let fader = m.fadeBuffer[i];
        if (fader.c > 0) {
          do_cycles = true;
          fader.c--;
          message += m.codeletters.charAt(
            Math.floor(Math.random() * m.codeletters.length)
          );
        } else {
          message += fader.l;
        }
      }

      el.innerHTML = message;

      if (do_cycles === true) {
        setTimeout(m.animateFadeBuffer, 50);
      } else {
        setTimeout(m.cycleText, 2000);
      }
    };

    m.cycleText = function () {
      m.message = m.message + 1;
      if (m.message >= m.messages.length) {
        m.message = 0;
      }

      m.current_length = 0;
      m.fadeBuffer = false;
      el.innerHTML = "";

      setTimeout(m.animateIn, 200);
    };

    m.init();
  }
}

let messenger = new Messenger(document.querySelector(".messenger"));
let messenger2 = new Messenger2(document.querySelector(".messenger2"));

function toggleMessenger() {
  divAboutAlgebra.classList.toggle("hidden");
}
function toggleMessenger2() {
  divAboutEcommerce.classList.toggle("hidden");
}
aboutBtnAlgebra.addEventListener("click", toggleMessenger);
aboutBtnEcommerce.addEventListener("click", toggleMessenger2);
