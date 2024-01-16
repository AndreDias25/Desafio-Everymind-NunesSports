import { Component } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-btn-adicionar',
  standalone: true,
  imports: [],
  templateUrl: './btn-adicionar.component.html',
  styleUrl: './btn-adicionar.component.css'
})
export class BtnAdicionarComponent {
    constructor(private produtoService:ProdutoService){}

    adicionarProduto(nomeProduto: string, codigoProduto: string, precoProduto: string, descricaoProduto: string){
        const novoProduto = {
          nomeProduto: nomeProduto,
          codigoProduto: Number(codigoProduto),
          precoProduto: Number(precoProduto),
          descricaoProduto: descricaoProduto
        }

        this.produtoService.adicionarProduto(novoProduto).subscribe(
          (resposta) => {
            console.log('Produto adicionado com sucesso', resposta)
          },
          (erro) => {
            console.error('Erro ao adicionar produto', erro)
          }
        )

    }
}
