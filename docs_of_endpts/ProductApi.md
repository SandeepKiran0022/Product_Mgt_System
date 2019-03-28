# ProductMgtSystem.ProductApi

All URIs are relative to *https://petstore.swagger.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProduct**](ProductApi.md#addProduct) | **POST** /pet | Add a new product to the store
[**deleteproduct**](ProductApi.md#deleteproduct) | **DELETE** /pet/{petId} | Deletes a product
[**findProductsByStatus**](ProductApi.md#findProductsByStatus) | **GET** /pet/findByStatus | Finds product by category
[**getPetById**](ProductApi.md#getPetById) | **GET** /pet/{petId} | Find product by ID
[**updateProduct**](ProductApi.md#updateProduct) | **PUT** /pet | Update an existing product
[**updateproductWithForm**](ProductApi.md#updateproductWithForm) | **POST** /pet/{petId} | Updates a product in the store with form data
[**uploadFile**](ProductApi.md#uploadFile) | **POST** /pet/{petId}/uploadImage | uploads an image


<a name="addProduct"></a>
# **addProduct**
> addProduct(body)

Add a new product to the store



### Example
```javascript
var ProductMgtSystem = require('product_mgt_system');

var apiInstance = new ProductMgtSystem.ProductApi();

var body = new ProductMgtSystem.Product(); // Product | product that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addProduct(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Product**](Product.md)| product that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

<a name="deleteproduct"></a>
# **deleteproduct**
> deleteproduct(petId)

Deletes a product



### Example
```javascript
var ProductMgtSystem = require('product_mgt_system');

var apiInstance = new ProductMgtSystem.ProductApi();

var petId = 789; // Number | product id to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteproduct(petId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**| product id to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="findProductsByStatus"></a>
# **findProductsByStatus**
> [Product] findProductsByStatus(status)

Finds product by category



### Example
```javascript
var ProductMgtSystem = require('product_mgt_system');

var apiInstance = new ProductMgtSystem.ProductApi();

var status = ["status_example"]; // [String] | Status values that need to be considered for filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findProductsByStatus(status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**[String]**](String.md)| Status values that need to be considered for filter | 

### Return type

[**[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="getPetById"></a>
# **getPetById**
> Product getPetById(petId)

Find product by ID

Returns a single product

### Example
```javascript
var ProductMgtSystem = require('product_mgt_system');

var apiInstance = new ProductMgtSystem.ProductApi();

var petId = 789; // Number | ID of product to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPetById(petId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**| ID of product to return | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="updateProduct"></a>
# **updateProduct**
> updateProduct(body)

Update an existing product



### Example
```javascript
var ProductMgtSystem = require('product_mgt_system');

var apiInstance = new ProductMgtSystem.ProductApi();

var body = new ProductMgtSystem.Product(); // Product | product  that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProduct(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Product**](Product.md)| product  that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

<a name="updateproductWithForm"></a>
# **updateproductWithForm**
> updateproductWithForm(petId, opts)

Updates a product in the store with form data



### Example
```javascript
var ProductMgtSystem = require('product_mgt_system');

var apiInstance = new ProductMgtSystem.ProductApi();

var petId = 789; // Number | ID of product that needs to be updated

var opts = { 
  'name': "name_example", // String | Updated name of the product
  'status': "status_example" // String | Updated status of the product
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateproductWithForm(petId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**| ID of product that needs to be updated | 
 **name** | **String**| Updated name of the product | [optional] 
 **status** | **String**| Updated status of the product | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/xml, application/json

<a name="uploadFile"></a>
# **uploadFile**
> uploadFile(petId, opts)

uploads an image



### Example
```javascript
var ProductMgtSystem = require('product_mgt_system');

var apiInstance = new ProductMgtSystem.ProductApi();

var petId = 789; // Number | ID of product to update

var opts = { 
  'additionalMetadata': "additionalMetadata_example", // String | Additional data to pass to server
  'file': "/path/to/file.txt" // File | file to upload
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.uploadFile(petId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**| ID of product to update | 
 **additionalMetadata** | **String**| Additional data to pass to server | [optional] 
 **file** | **File**| file to upload | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

