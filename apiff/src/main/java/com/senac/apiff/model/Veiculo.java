package com.senac.apiff.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name = "tb_veiculo" )
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Veiculo {
    @Id
    @Column(name="IDVeiculo")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVeiculo;

    @Column(name="Placa")
    private String placa;

    @Column(name="Chassi")
    private String chassi;

    @Column(name="Cor")
    private String cor;

    @Column(name="Modelo")
    private String modelo;

    @Column(name="valor_veiculo")
    private long valor_veiculo;

    @Column(name="Marca")
    private String marca;

}
