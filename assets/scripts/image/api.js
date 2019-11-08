'use strict'
// Please UPDATE apiUrl in config file for production once back-end is deployed
// to Heroku!!!
const config = require('../config')
const store = require('../store')

// create new image
const newImage = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/images',
    headers: {
      'Authorization': `Bearer ${store.user.token}`
    },
    data,
    processData: false,
    contentType: false
  })
}

// show ALL images from ALL users
const indexImage = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/images'
  })
}

// show ALL images from ONE user
const indexImagePrivate = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/images',
    headers: {
      'Authorization': `Bearer ${store.user.token}`
    }
  })
}

// get one image
const getImage = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/images/' + id,
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

const deleteImage = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/images/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newImage,
  indexImage,
  indexImagePrivate,
  getImage,
  updateImage,
  deleteImage
}
