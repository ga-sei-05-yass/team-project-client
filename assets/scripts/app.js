'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const imageEvents = require('./image/events.js')

$(() => {
  // hides ui alert messages
  // $('.alert').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  // $('#sign-in').on('click', imageEvents.onIndexImagePrivate)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#upload-form').on('submit', imageEvents.onNewImage)
  $('#update-image').on('submit', imageEvents.onUpdateImage)
  $('#public-gallery').on('click', imageEvents.onIndexImage)
  $('#private-gallery').on('click', imageEvents.onIndexImagePrivate)
  $('.image-section').on('submit', '.delete-image', imageEvents.onDeleteImage)
  $('.image-section').on('submit', '.update-image', imageEvents.onFillUpdateModal)
  $('.update-modal-body').on('submit', '.update-image-form', imageEvents.onUpdateImage)
})
