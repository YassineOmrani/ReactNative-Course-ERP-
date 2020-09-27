import Axios from "axios"


// POST (w/ body) => Authentication / CREATE 
// DELETE => Bech tfasa5
// PUT/PATCH => update 
// GET (No body) => Get Data 

const baseUrl = 'https://erp-backend-apis.herokuapp.com'

export async function login(email ,password){
    const endpoint = `${baseUrl}/member/login`
    return await Axios.post(endpoint, {
        email: email,
        password: password
    });    
}
