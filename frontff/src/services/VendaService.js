import axios from "axios";

const VENDA_API_BASE_URL = "http://localhost:5000/vendas"

class VendaService{

    getVendas(){
        return axios.get(VENDA_API_BASE_URL + '/');
    }

    getVendaById(id){
        return axios.get(VENDA_API_BASE_URL + '/?' + id)
    }

}

export default new VendaService();