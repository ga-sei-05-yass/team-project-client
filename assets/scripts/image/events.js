'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const imageEvents = require('./events.js')

const onNewImage = function(event) {
  event.preventDefault()

  // const form = event.target
  // const formData = getFormFields(form)
  const data = new FormData(this)
  console.log(...data)
  api.newImage(data)
    .then(ui.onNewImageSuccess)
    .catch(ui.onNewImageFailure)
}

const onIndexImage = function(event) {
  console.log(event.target)
  event.preventDefault()
  api.indexImage()
    .then(ui.onIndexImageSuccess)
    .catch(ui.onIndexImageFailure)
}

const onIndexImagePrivate = function(event) {
  event.preventDefault()
  api.indexImagePrivate()
    .then(ui.onIndexImagePrivateSuccess)
    .catch(ui.onIndexImagePrivateFailure)
}

// const onGetImage = function(event) {
//   event.preventDefault()
//   const form = event.target
//   console.log(event.target)
//   const formData = getFormFields(form)
//   console.log(formData.id)
//   api.getImage(formData.id)
//     .then(ui.onGetImageSuccess)
//     .catch(ui.onGetImageFailure)
// }

// const onUpdateImageModal = function(event) {
//   event.preventDefault()
//   const showModal = showModalsTemplate({
//     images: data.images
//   })
//   $('.update-modal-body').text('')
//   $('.update-modal-body').append(showModal)
// }

const onFillUpdateModal = function(event) {
  event.preventDefault()
  const form = event.target
  console.log(event.target)
  const formData = getFormFields(form)
  console.log(formData.id)
  api.indexImage(formData.id)
    .then(ui.onFillUpdateModalSuccess)
    // .catch(ui.onIndexImageFailure)
}

const onUpdateImage = function(event) {
  event.preventDefault()
  const form = event.target
  console.log(event.target)
  const formData = getFormFields(form)
  console.log(formData)
  api.updateImage(formData)
  //   .then(ui.onUpdateImageSuccess)
  //   .catch(ui.onUpdateImageFailure)
}

const onDeleteImage = function(event) {
  // console.log(event.target)
  event.preventDefault()
  const form = event.target
  console.log(event.target)
  const formData = getFormFields(form)
  console.log(formData)
  api.deleteImage(formData)
  //   .then(ui.onDeleteImageSuccess)
  //   .catch(ui.onDeleteImageFailure)
}

module.exports = {
  onNewImage,
  onIndexImage,
  onIndexImagePrivate,
  // onGetImage,
  onUpdateImage,
  onDeleteImage,
  onFillUpdateModal
}
