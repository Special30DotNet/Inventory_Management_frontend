const baseUrl = 'https://localhost:7159/api/'

// Product api's
export const getProductList = baseUrl + 'Products';
export const addProductToStore = baseUrl + 'AddProduct';
export const deleteProduct = baseUrl + 'DeleteRecord/';
export const editProduct = '';

// Admin api's
export const loginUrl = baseUrl + 'adminLogin';