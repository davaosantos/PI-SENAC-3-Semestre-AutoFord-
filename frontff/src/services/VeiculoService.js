import axios from "axios";

const VEICULO_API_BASE_URL = "http://localhost:5000/veiculos"

class VeiculoService{
    getVeiculos(){
        return axios.get(VEICULO_API_BASE_URL + '/');
    }

    updateVeiculos(veiculo, veiculoId){
        return axios.put(VEICULO_API_BASE_URL + '/' + veiculoId, veiculo);
    }

    deleteVeiculo(veiculoId){
        return axios.delete(VEICULO_API_BASE_URL + '/' + veiculoId);
    }
}

export default new VeiculoService();