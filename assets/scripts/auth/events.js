'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields.js')
// const imageEvents = require('../image/events.js')

// Sign Up
const onSignUp = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  const form = event.target
  // Collects entire form: HTML + text
  const formData = getFormFields(form)
  // Parses and extracts the text from forms to be used as the argument for api.signUp
  api.signUp(formData) // the singular variant of index
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

// Sign In
const onSignIn = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  const form = event.target
  // Collects entire form: HTML + text
  const formData = getFormFields(form)
  // Parses and extracts the text from forms to be used as the argument for api.signIn
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
  // imageEvents.refreshPrivateImage()
}

// Change Pw
const onChangePassword = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  const form = event.target
  // Collects form data: HTML + text
  const formData = getFormFields(form)
  // Extracts text from html
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

// Sign Out
const onSignOut = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut
}
