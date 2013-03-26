window.SciFiCoder = {}

defaultAlphabet = '''abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$'''

SciFiCoder.type = (element, text, speed = 20, fails = 5, alphabet = defaultAlphabet) ->
    currentPosition = 0
    tries = 0
    timeout = undefined

    type = ->
        currentText = text.substr(0, currentPosition)

        if tries < fails
            currentText += alphabet[Math.floor(Math.random() * alphabet.length)]
            tries++

        else
            if currentText.length is text.length - 1
                currentText = text

            else
                currentText += text[currentPosition + 1]
                tries = 0
                currentPosition++

        element.innerHTML = currentText

        return if currentText is text

        timeout = setTimeout type, speed

    type()

    chain =
        stopTyping: ->
            clearTimeout timeout

        advance: (position) ->
            if position
                currentPosition = position
                return chain

            clearTimeout timeout
            element.innerHTML = text

    return chain

window.SciFiCoder = SciFiCoder