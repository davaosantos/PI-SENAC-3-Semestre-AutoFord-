package com.senac.apiff.repository;


import java.util.Date;
import java.util.List;

import com.senac.apiff.model.Venda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VendaRepository extends JpaRepository<Venda, Integer> {
    @Query("select v from tb_venda v where data_venda between ?1 and ?1")
    List<Venda> findByDataVenda(Date data_venda);
}
