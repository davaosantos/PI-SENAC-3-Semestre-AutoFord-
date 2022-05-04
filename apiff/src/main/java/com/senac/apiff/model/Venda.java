package com.senac.apiff.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

import javax.persistence.*;



@Entity(name = "tb_venda")
@Data /*Fazer get e set dos atributos do modelo*/
@AllArgsConstructor /*Criar um construtor para todos*/
@NoArgsConstructor /*Construtor que nao recebe atributo */
public class Venda {
    @Id
    @Column(name = "IDVenda")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVenda;

    @Column(name = "IDVeiculo")
    private int idVeiculo;

    @Column(name = "Nome")
    private String nome;

    @Column(name = "Endereco")
    private String endereco;

    @Column(name = "Rg")
    private String rg;

    @Column(name = "Email")
    private String email;

    @Column(name = "Cpf")
    private long cpf;

    @Column(name = "Celular")
    private int celular;

    @Column(name = "Forma_pagamento")
    private String formaPagamento;

    @Column(name= "Data_venda")
    private Date DataVenda;

    @Column(name= "Parcela")
    private int parcela;
}
