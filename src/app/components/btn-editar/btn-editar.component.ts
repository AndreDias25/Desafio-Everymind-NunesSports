import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-btn-editar',
  standalone: true,
  imports: [FormsModule],
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

  editarDados(idProduto:number, nomeProduto: string, codigoProduto: string, precoProduto: string, descricaoProduto:string){
    const produtoEditado = {
      nomeProduto: nomeProduto,
      codigoProduto: Number(codigoProduto),
      precoProduto: Number(precoProduto),
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
