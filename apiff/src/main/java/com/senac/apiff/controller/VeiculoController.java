package com.senac.apiff.controller;

import com.senac.apiff.model.Veiculo;
import com.senac.apiff.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.var;

import java.util.List;

@RestController
@RequestMapping(path = "/veiculos")
public class VeiculoController {
    @Autowired
    private VeiculoRepository repoVeic;

    @GetMapping(path = "/")
    public List<Veiculo> listAllVeiculos(){
        return repoVeic.findAll();
    }

    @GetMapping(path = "/buscaChassi")
    public List<Veiculo> listByChassi(String chassi){
        return repoVeic.findByChassi(chassi);
    }

    @GetMapping(path = "/buscaModelo")
    public List<Veiculo> listByModelo(String modelo){
        return repoVeic.findByModelo(modelo);
    }

    @PostMapping(path = "/")
    public Veiculo saveVeiculo(@RequestBody Veiculo veiculo) {return repoVeic.save(veiculo);}

    @PutMapping(path = "/{id}")
    public void updateVeiculo(@PathVariable int id, @RequestBody Veiculo veiculo){
        var resp = repoVeic.findById(id);
        if(resp.isPresent()) {
            var currentVeiculo = resp.get();
            currentVeiculo.setChassi(veiculo.getChassi());
            currentVeiculo.setCor(veiculo.getCor());
            currentVeiculo.setMarca(veiculo.getMarca());
            currentVeiculo.setModelo(veiculo.getModelo());
            currentVeiculo.setPlaca(veiculo.getPlaca());
            currentVeiculo.setValor_veiculo(veiculo.getIdVeiculo());
            repoVeic.save(currentVeiculo);

        }else{
            ResponseEntity.notFound().build();
        };
    }

    @DeleteMapping(path = "/")
    public void deleteVeiculo(@PathVariable int id){
        var resp = repoVeic.findById(id);
        if(resp.isPresent()){
            repoVeic.deleteById(id);
        }else{
            ResponseEntity.notFound().build();
        }
    }


}
