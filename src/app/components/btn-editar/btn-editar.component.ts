import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@Component({
  selector: 'app-btn-editar',
  standalone: true,
  imports: [FormsModule, CurrencyMaskModule],
  templateUrl: './btn-editar.component.html',
  styleUrl: './btn-editar.component.css'
})
export class BtnEditarComponent {
  @Input() idProduto!: number;
  @Input() codigoProduto!: number;
  @Input() nomeProduto!: string;
  @Input() descricaoProduto!: string;
  @Input() precoProduto!: number;
  @Input() dataProduto!: string;

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

  editarDados(idProduto:number, nomeProduto: string, codigoProduto: string, precoProduto: string, descricaoProduto:string){
    const precoNumerico = Number(precoProduto.replace('R$', '').trim());
    const produtoEditado = {
      nomeProduto: nomeProduto,
      codigoProduto: Number(codigoProduto),
      precoProduto: precoNumerico,
      descricaoProduto: descricaoProduto
    }

    console.log(produtoEditado+"Id do produto");

    this.produtoService.editarProduto(produtoEditado, idProduto).subscribe(
      (resposta) => {
        console.log('Produto editado com sucesso', resposta)
      },
      (erro) => {
        console.error('Erro ao editar produto', erro)
      }
    )
  }
}
