'use strict'

const store = require('../store.js')
const showImagesTemplate = require('../templates/images-listing.handlebars')

const successAlert = function (newText) {
  // `.image-alert` is a div that will contain the alert box for ui messages
  // Still need to determine placement of div
  $('.image-alert').addClass('alert-success')
  $('.image-alert').attr('role', 'alert')
  $('.image-alert').text(newText)
}

const failureAlert = function (newText) {
  $('.image-alert').addClass('alert-danger')
  $('.image-alert').attr('role', 'alert')
  $('.image-alert').text(newText)
}

const onNewImageSuccess = function (data) {
  // Display new image AND/OR show success alert
  // successAlert('New image uploaded successfully!')
  // Also update both galleries simultaneously
  store.image = data.image
  console.log(store.image)
  // clear form once upload is successful
  $('#upload-form').trigger('reset')
}

const onNewImageFailure = function (event) {
  failureAlert('New image uploaf failed')
}

const onIndexImageSuccess = function (data) {
  console.log(data)
  // may NOT need actual success alert if already showing images to user
  // successAlert('Here are all your images!')
  // handlebars incorporated here inside a div `#main-content-wrapper`
  const showImages = showImagesTemplate({ images: data.images })
  $('.image-section').text('')
  $('.image-section').append(showImages)
}

const onIndexImageFailure = function (data) {
  failureAlert('Unable to retrieve images')
}

const onGetImageSuccess = function (responseData) {
  // console.log(responseData)
  // needs to display all images
}

const onGetImageFailure = function () {
  failureAlert('Unable to find the image')
}

const onUpdateImageSuccess = function (responseData) {
  successAlert('Updated successfully!')
  // display the updated image/details
  // and also update the galleries simultaneously
  // clear form once update is successful
  // $('<form-element>').trigger('reset')
}

const onUpdateImageFailure = function () {
  failureAlert('Unable to update')
}

const onDeleteImageSuccess = function (responseData) {
  successAlert('Image deleted!')
}

const onDeleteImageFailure = function () {
  failureAlert('Unable to delete image')
}

module.exports = {
  onNewImageSuccess,
  onNewImageFailure,
  onIndexImageSuccess,
  onIndexImageFailure,
  onGetImageSuccess,
  onGetImageFailure,
  onUpdateImageSuccess,
  onUpdateImageFailure,
  onDeleteImageSuccess,
  onDeleteImageFailure
}
