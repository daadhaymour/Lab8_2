import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

//fetch list of products

export const fetchProducts = async() => {
    try{
        const response = await axios.get(BASE_URL);
        return response.data;

    } catch (error){
        throw error; // rethrow to allow caller to handle
    }

};

// fetches details for a single product by its ID
export const getProductDetails = async(id) => {
    try{
        const response = await axios.get(BASE_URL);
        return response.data
    } catch(error){
        throw error
    }
};

// deletes a product by its ID
export const removeProduct = async (id) => {
    try{
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch(error){
        throw error; 
    }
};

// adds a new product to the database
export const addProduct = (product) => {
    return axios.post(`${BASE_URL}/add`, JSON.stringify(product));
};

// edits an existing product by ID
export const editProduct = (id, product) => {
    // implement it using similar logic as addProduct function but use axios.put method
};