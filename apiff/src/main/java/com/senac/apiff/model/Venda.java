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

    @Column(name = "ENDERECO")
    private String endereco;

    @Column(name = "RG")
    private String rg;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "CPF")
    private long cpf;

    @Column(name = "CELULAR")
    private int celular;

    @Column(name = "FORMA_PAGAMENTO")
    private String formaPagamento;

    @Column(name= "DATA_VENDA")
    private Date dataVenda;

    @Column(name= "PARCELA")
    private int parcela;
}
