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
    @Column(name = "ID_VENDA")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVenda;

    @Column(name = "NOME_VEICULO")
    private String nomeVeiculo;

    @Column(name = "NOME")
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
    private long celular;

    @Column(name = "FORMA_PAGAMENTO")
    private String formaPagamento;

    @Column(name= "DATA_VENDA")
    private Date dataVenda;

    @Column(name= "PARCELA")
    private int parcela;

    @Column(name = "VALOR_VENDA")
    private long valorVenda;
}
