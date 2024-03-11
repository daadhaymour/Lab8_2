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
    } catch(error){}
}