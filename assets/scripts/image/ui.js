'use strict'

const store = require('../store.js')
const showImagesTemplate = require('../templates/images-listing.handlebars')
const showImagesPrivateTemplate = require('../templates/images-listing-private.handlebars')
const showModalTemplate = require('../templates/update.handlebars')
const imageEvents = require('./events.js')

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

const onIndexImagePrivateSuccess = function (data) {
  console.log(data)
  const privateImages = data.images.filter(function (image) {
    return image.owner === store.user._id
  })
  console.log(privateImages)
  const showImages = showImagesPrivateTemplate({ images: privateImages })
  $('.image-section').text('')
  $('.image-section').append(showImages)
}

const onFillUpdateModalSuccess = function (data) {
  console.log("this worked")
  console.log(data)
  const fillModal = showModalTemplate({ images: data.images })
  console.log(fillModal)
  $('.update-modal-body').text('')
  $('.update-modal-body').append(fillModal)
}

const onGetImageSuccess = function (responseData) {
  // console.log(responseData)
  // needs to display all images
}

const onGetImageFailure = function () {
  failureAlert('Unable to find the image')
}

const onUpdateImageSuccess = function (responseData) {
  console.log('it reached here at least')
  // successAlert('Updated successfully!')
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
  imageEvents.onIndexImage()
}

const onDeleteImageFailure = function () {
  failureAlert('Unable to delete image')
}

module.exports = {
  onNewImageSuccess,
  onNewImageFailure,
  onIndexImageSuccess,
  onIndexImageFailure,
  onIndexImagePrivateSuccess,
  onGetImageSuccess,
  onGetImageFailure,
  onUpdateImageSuccess,
  onUpdateImageFailure,
  onDeleteImageSuccess,
  onDeleteImageFailure,
  onFillUpdateModalSuccess
}
