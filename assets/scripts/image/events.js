'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onNewImage = function (event) {
  event.preventDefault()

  // const form = event.target
  // const formData = getFormFields(form)
  const data = new FormData(this)
  console.log(...data)
  api.newImage(data)
    .then(ui.onNewImageSuccess)
    .catch(ui.onNewImageFailure)
}

const onIndexImage = function (event) {
  event.preventDefault()

  api.indexImage()
    .then(ui.onIndexImageSuccess)
    .catch(ui.onIndexImageFailure)
}

const onGetImage = function (event) {
  event.preventDefault()

  const formData = getFormFields(event.target)
  // console.log(formData)
  api.getImage(formData)
    .then(ui.onGetImageSuccess)
    .catch(ui.onGetImageFailure)
}

const onUpdateImage = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.updateImage(formData)
    .then(ui.onUpdateImageSuccess)
    .catch(ui.onUpdateImageFailure)
}

const onDeleteImage = function (event) {
  // console.log(event.target)
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.deleteImage(formData)
    .then(ui.onDeleteImageSuccess)
    .catch(ui.onDeleteImageFailure)
}

module.exports = {
  onNewImage,
  onIndexImage,
  onGetImage,
  onUpdateImage,
  onDeleteImage
}
