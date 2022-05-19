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

    @Column(name="PLACA")
    private String placa;

    @Column(name="CHASSI")
    private String chassi;

    @Column(name="COR")
    private String cor;

    @Column(name="MODELO")
    private String modelo;

    @Column(name="VALOR_VEICULO")
    private long valorVeiculo;

    @Column(name="MARCA")
    private String marca;

}
