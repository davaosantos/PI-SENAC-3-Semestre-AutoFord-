package com.senac.apiff.controller;

import com.senac.apiff.model.Venda;
import com.senac.apiff.repository.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController/**Indica que será usado os verbos do REST */
@RequestMapping(path = "/vendas") /**Rota para acesso da controller */
public class VendaController {

    @Autowired/**Para que crie uma instancia do repository quando chamada a rota CRIA INSTANCIA */
    private VendaRepository repo; /**Variavel de acesso ao banco de dados */

    @GetMapping(path = "/")
    public List<Venda> listAllVenda(){
        return repo.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<Venda> findVendaById(@PathVariable int id){
        return repo.findById(id);
    }

    @GetMapping(path = "/buscaData/{dataVenda}")
   public List<Venda> findByDataVenda(Date dataVenda){
       return repo.findByDataVenda(dataVenda);
   }

    @PostMapping(path = "/")
    public Venda saveVenda(@RequestBody Venda venda) {
        return repo.save(venda);
    }

}
