'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.addProduct = function addProduct (req, res, next) {
  var body = req.swagger.params['body'].value;
  Product.addProduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteproduct = function deleteproduct (req, res, next) {
  var petId = req.swagger.params['petId'].value;
  Product.deleteproduct(petId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findProductsByStatus = function findProductsByStatus (req, res, next) {
  var status = req.swagger.params['status'].value;
  Product.findProductsByStatus(status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPetById = function getPetById (req, res, next) {
  var petId = req.swagger.params['petId'].value;
  Product.getPetById(petId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProduct = function updateProduct (req, res, next) {
  var body = req.swagger.params['body'].value;
  Product.updateProduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateproductWithForm = function updateproductWithForm (req, res, next) {
  var petId = req.swagger.params['petId'].value;
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  Product.updateproductWithForm(petId,name,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.uploadFile = function uploadFile (req, res, next) {
  var petId = req.swagger.params['petId'].value;
  var additionalMetadata = req.swagger.params['additionalMetadata'].value;
  var file = req.swagger.params['file'].value;
  Product.uploadFile(petId,additionalMetadata,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
