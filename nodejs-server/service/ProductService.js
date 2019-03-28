'use strict';


/**
 * Add a new product to the store
 * 
 *
 * body Product product that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addProduct = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a product
 * 
 *
 * petId Long product id to delete
 * no response value expected for this operation
 **/
exports.deleteproduct = function(petId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds product by category
 * 
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findProductsByStatus = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "color" : "color",
  "price" : 5,
  "name" : "cricket_bat",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "live"
}, {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "color" : "color",
  "price" : 5,
  "name" : "cricket_bat",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "live"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find product by ID
 * Returns a single product
 *
 * petId Long ID of product to return
 * returns Product
 **/
exports.getPetById = function(petId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "color" : "color",
  "price" : 5,
  "name" : "cricket_bat",
  "id" : 0,
  "category" : {
    "name" : "name",
    "id" : 6
  },
  "tags" : [ {
    "name" : "name",
    "id" : 1
  }, {
    "name" : "name",
    "id" : 1
  } ],
  "status" : "live"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing product
 * 
 *
 * body Product product  that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateProduct = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a product in the store with form data
 * 
 *
 * petId Long ID of product that needs to be updated
 * name String Updated name of the product (optional)
 * status String Updated status of the product (optional)
 * no response value expected for this operation
 **/
exports.updateproductWithForm = function(petId,name,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * uploads an image
 * 
 *
 * petId Long ID of product to update
 * additionalMetadata String Additional data to pass to server (optional)
 * file File file to upload (optional)
 * no response value expected for this operation
 **/
exports.uploadFile = function(petId,additionalMetadata,file) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

