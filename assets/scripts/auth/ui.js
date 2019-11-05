'use strict'

const store = require('../store.js')

const successAlert = function (newText) {
  // create new div element
  const newAlert = document.createElement('div')
  // add classes and role to div
  newAlert.addClass('alert')
  newAlert.addClass('alert-success')
  newAlert.addRole('alert')
  $('.alert').text(newText)
}
const failureAlert = function (newText) {
  const newAlert = document.createElement('div')
  newAlert.addClass('alert')
  newAlert.addClass('alert-danger')
  newAlert.addRole('alert')
  $('.alert').text(newText)
}

const onSignUpSuccess = function (data) {
  const alert = successAlert('Signed up successfully!')
  // apendding new div to a designated html element
  $('.alertBox').appendChild(alert)
  store.user = data.user
  // console.log(store.user)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (event) {
  const alert = failureAlert('Signed up failed')
  $('.alertBox').appendChild(alert)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (data) {
  const alert = successAlert('Signed in successfully!')
  $('.alertBox').appendChild(alert)
  store.user = data.user
  $('#sign-in').trigger('reset')
}

const onSignInFailure = function (event) {
  const alert = failureAlert('Signed in failed')
  $('.alertBox').appendChild(alert)
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function (data) {
  const alert = successAlert('Changed password successfully!')
  $('.alertBox').appendChild(alert)
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (event) {
  const alert = failureAlert('Changed password failed')
  $('.alertBox').appendChild(alert)
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  const alert = successAlert('Signed out successfully!')
  $('.alertBox').appendChild(alert)
}

const onSignOutFailure = function () {
  const alert = failureAlert('Signed out failed')
  $('.alertBox').appendChild(alert)
}

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
