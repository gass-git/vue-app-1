import axios from 'axios'

const API_URL = 'http://localhost:8080/api/clients'

class CustomerService{
    getCustomers(){
        return axios.get(API_URL)
    }
}

export default new CustomerService