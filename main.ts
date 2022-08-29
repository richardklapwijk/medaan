input.onButtonPressed(Button.A, function () {
    media.sendCode(media.keys(media._MediaKey.playPause))
})
media.startMediaService()
