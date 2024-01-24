import { Component } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-btn-adicionar',
  standalone: true,
  imports: [CurrencyMaskModule, FormsModule],
  templateUrl: './btn-adicionar.component.html',
  styleUrl: './btn-adicionar.component.css'
})
export class BtnAdicionarComponent {
    constructor(private produtoService:ProdutoService){}

    numero: string = '';

    validarNumero(event: any): void {
      const input = event.target;
      const regex = /^[0-9]*$/;

      if (!regex.test(input.value)) {
        // Remove caracteres não numéricos
        input.value = input.value.replace(/[^0-9]/g, '');
      }

      this.numero = input.value;
    }


    adicionarProduto(nomeProduto: string, codigoProduto: string, precoProduto: string, descricaoProduto: string){
      const precoNumerico = Number(precoProduto.replace('R$', '').trim());
      console.log(precoNumerico);
      const novoProduto = {
          nomeProduto: nomeProduto,
          codigoProduto: Number(codigoProduto),
          precoProduto: precoNumerico,
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
