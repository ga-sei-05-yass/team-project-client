'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const refreshPrivateImage = function (event) {
  api.indexImagePrivate()
    .then(ui.onIndexImagePrivateSuccess)
    .catch(ui.onIndexImagePrivateFailure)
}

const onNewImage = function (event) {
  event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  const data = new FormData(this)
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

const onIndexImagePrivate = function (event) {
  event.preventDefault()
  api.indexImagePrivate()
    .then(ui.onIndexImagePrivateSuccess)
    .catch(ui.onIndexImagePrivateFailure)
}

const onFillUpdateModal = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.indexImage(formData.id)
    .then(ui.onFillUpdateModalSuccess)
}

const onUpdateImage = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateImage(formData)
    .then(ui.onUpdateImageSuccess)
    .catch(ui.onUpdateImageFailure)
  // refreshPrivateImage(event)
}

const onDeleteImage = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteImage(formData.id)
    .then(ui.onDeleteImageSuccess)
    .catch(ui.onDeleteImageFailure)
  // refreshPrivateImage()
}

module.exports = {
  onNewImage,
  onIndexImage,
  onIndexImagePrivate,
  onUpdateImage,
  onDeleteImage,
  onFillUpdateModal,
  refreshPrivateImage
}
