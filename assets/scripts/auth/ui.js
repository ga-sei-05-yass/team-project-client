'use strict'

const store = require('../store.js')

// Creating Bootstrap alert box by adding class and role to
// a div `.alert`
const successAlert = function (newText) {
  $('.alert').addClass('alert-success')
  $('.alert').attr('role', 'alert')
  $('.alert').text(newText)
}

// Creating Bootstrap alert box by adding class and role to
// a div `.alert`
const failureAlert = function (newText) {
  $('.alert').addClass('alert-danger')
  $('.alert').attr('role', 'alert')
  $('.alert').text(newText)
}

const onSignUpSuccess = function (data) {
  successAlert('Signed up successfully!')
  store.user = data.user
  // console.log(store.user)
  $('#sign-up').trigger('reset')
  // show the div element that was hidden with onload event
  $('.alert').show()
}

const onSignUpFailure = function (event) {
  failureAlert('Signed up failed')
  $('#sign-up').trigger('reset')
  $('.alert').show()
}

const onSignInSuccess = function (data) {
  successAlert('Signed in successfully!')
  store.user = data.user
  $('#sign-in').trigger('reset')
  $('.alert').show()
}

const onSignInFailure = function (event) {
  failureAlert('Signed in failed')
  $('#sign-in').trigger('reset')
  $('.alert').show()
}

const onChangePasswordSuccess = function (data) {
  successAlert('Changed password successfully!')
  $('#change-password').trigger('reset')
  $('.alert').show()
}

const onChangePasswordFailure = function (event) {
  failureAlert('Changed password failed')
  $('#change-password').trigger('reset')
  $('.alert').show()
}

const onSignOutSuccess = function () {
  successAlert('Signed out successfully!')
  $('.alert').show()
}

const onSignOutFailure = function () {
  failureAlert('Signed out failed')
  $('.alert').show()
}
onSignUpSuccess()

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
