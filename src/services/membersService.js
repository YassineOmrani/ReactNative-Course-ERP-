import Axios from "axios"


// POST (w/ body) => Authentication / CREATE 
// DELETE => Bech tfasa5
// PUT/PATCH => update 
// GET (No body) => Get Data 

const baseUrl = 'https://erp-backend-apis.herokuapp.com';

export const getMembers = async () => {
    const endpoint = `${baseUrl}/member/all`
    return await Axios.get(endpoint);
};

export const addMember = async (memberData) => {
    const endpoint = `${baseUrl}/member/add`
    return await Axios.post( endpoint, memberData)
};

