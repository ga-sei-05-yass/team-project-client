'use strict'

const store = require('../store.js')
const showImagesTemplate = require('../templates/images-listing.handlebars')
const showImagesPrivateTemplate = require('../templates/images-listing-private.handlebars')
const showModalTemplate = require('../templates/update.handlebars')
// const imageEvents = require('./events.js')

// Creating Bootstrap alert box by adding class and role to
// a div `.alert`
const successAlert = function (newText) {
  $('.alert').addClass('alert-success')
  $('.alert').text(newText)
  $('.alert').removeAttr('hidden')
  setTimeout(() => {
    $('.alert').removeClass('alert-success')
    $('.alert').text('')
    // $('.alert').attr('hidden')
  }, 1800)
}

// Creating Bootstrap alert box by adding class and role to
// a div `.alert`
const failureAlert = function (newText) {
  $('.alert').addClass('alert-danger')
  $('.alert').text(newText)
  $('.alert').removeAttr('hidden')
  setTimeout(() => {
    $('.alert').removeClass('alert-danger')
    $('.alert').text('')
    // $('.alert').attr('hidden')
  }, 1800)
}

const onNewImageSuccess = function (data) {
  // Display new image AND/OR show success alert
  successAlert('Restaurant uploaded successfully! Please select a gallery to view changes.')
  // Also update both galleries simultaneously
  store.image = data.image
  // clear form once upload is successful
  $('#upload-form').trigger('reset')
}

const onNewImageFailure = function (event) {
  failureAlert('Restaurant uploaded unsuccessfully. Please try again.')
}

const onIndexImageSuccess = function (data) {
  // may NOT need actual success alert if already showing images to user
  successAlert('Restaurants retrieved successfully!')
  // handlebars incorporated here inside a div `#main-content-wrapper`
  const showImages = showImagesTemplate({ images: data.images })
  $('.image-section').text('')
  $('.image-section').append(showImages)
  $('.title-section').text('')
  $('.title-section').text('Public Gallery')
}

const onIndexImageFailure = function (data) {
  failureAlert('Unable to retrieve images')
}
const onIndexImagePrivateSuccess = function (data) {
  const privateImages = data.images.filter(function (image) {
    return image.owner === store.user._id
  })
  const showImages = showImagesPrivateTemplate({ images: privateImages })
  successAlert('Restaurants retrieved successfully!')
  $('.image-section').text('')
  $('.image-section').append(showImages)
  $('.title-section').text('')
  $('.title-section').text('My Gallery')
}

const onFillUpdateModalSuccess = function (data) {
  const privateImages = data.images.filter(function (image) {
    return image.owner === store.user._id
  })
  const fillModal = showModalTemplate({ images: privateImages })
  // const fillModal = showModalTemplate({ images: data.images })
  $('.update-modal-body').text('')
  $('.update-modal-body').append(fillModal)
}

// const onGetImageSuccess = function (responseData) {
//   // needs to display all images
// }
//
// const onGetImageFailure = function () {
//   failureAlert('Unable to find restaurant. Please try again.')
// }

const onUpdateImageSuccess = function (responseData) {
  successAlert('Restaurant updated successfully! Please select a gallery to view changes.')
  $('#update-image-modal').modal('toggle')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  // display the updated image/details
  // and also update the galleries simultaneously
}

const onUpdateImageFailure = function () {
  failureAlert('Restaurant updated unsuccessfully. Please try again.')
}

const onDeleteImageSuccess = function (responseData) {
  successAlert('Restaurant deleted successfully! Please select a gallery to view changes.')
}

const onDeleteImageFailure = function () {
  failureAlert('Restaurant deleted unsuccessfully.  Please try again.')
}

module.exports = {
  onNewImageSuccess,
  onNewImageFailure,
  onIndexImageSuccess,
  onIndexImageFailure,
  onIndexImagePrivateSuccess,
  // onGetImageSuccess,
  // onGetImageFailure,
  onUpdateImageSuccess,
  onUpdateImageFailure,
  onDeleteImageSuccess,
  onDeleteImageFailure,
  onFillUpdateModalSuccess
}
