package com.senac.apiff.repository;


import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.senac.apiff.model.Venda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VendaRepository extends JpaRepository<Venda, Integer> {
    @Query(value = "select * from tb_venda where DATA_VENDA = '?1'" , nativeQuery = true)
    List<Venda> findByDataVenda(Date dataVenda);

    @Query(value = "select * from tb_venda where ID_VENDA = ?1" , nativeQuery = true)
    Optional<Venda> findByIdVenda(Integer idVenda);
}
