(function() {
  var defaultAlphabet;
  window.SciFiCoder = {};
  defaultAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$';
  SciFiCoder.type = function(element, text, speed, fails, alphabet) {
    var chain, currentPosition, timeout, tries, type;
    if (speed == null) {
      speed = 20;
    }
    if (fails == null) {
      fails = 5;
    }
    if (alphabet == null) {
      alphabet = defaultAlphabet;
    }
    currentPosition = 0;
    tries = 0;
    timeout = void 0;
    type = function() {
      var currentText;
      currentText = text.substr(0, currentPosition);
      console.log(currentText);
      if (tries < fails) {
        currentText += alphabet[Math.floor(Math.random() * alphabet.length)];
        tries++;
      } else {
        if (currentText.length === text.length - 1) {
          currentText = text;
        } else {
          currentText += text[currentPosition + 1];
          tries = 0;
          currentPosition++;
        }
      }
      element.innerHTML = currentText;
      if (currentText === text) {
        return;
      }
      return timeout = setTimeout(type, speed);
    };
    type();
    chain = {
      stopTyping: function() {
        return clearTimeout(timeout);
      },
      advance: function(position) {
        if (position) {
          currentPosition = position;
          return chain;
        }
        clearTimeout(timeout);
        return element.innerHTML = text;
      }
    };
    return chain;
  };
  window.SciFiCoder = SciFiCoder;
}).call(this);
