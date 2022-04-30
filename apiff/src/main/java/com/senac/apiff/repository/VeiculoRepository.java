package com.senac.apiff.repository;

import com.senac.apiff.model.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface VeiculoRepository extends JpaRepository <Veiculo, Integer> {
    List<Veiculo> findByChassi(String chassi);

    List<Veiculo> findByModelo(String modelo);
}
