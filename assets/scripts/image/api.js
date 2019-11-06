'use strict'
// Please UPDATE apiUrl in config file for production once back-end is deployed
// to Heroku!!!
const config = require('../config')
const store = require('../store')

// create new image
const newImage = function (formData) {
  // console.log(store.user.token)
  // console.log('formData is', formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/images',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

// show ALL images
const indexImage = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/images',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// get one image
const getImage = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/images/' + formData.image.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// update an image
const updateImage = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/images/' + formData.image.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteImage = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/images/' + formData.image.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newImage,
  indexImage,
  getImage,
  updateImage,
  deleteImage
}
