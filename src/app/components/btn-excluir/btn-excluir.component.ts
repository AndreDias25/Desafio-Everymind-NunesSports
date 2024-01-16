import { Component, Input } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-btn-excluir',
  standalone: true,
  imports: [],
  templateUrl: './btn-excluir.component.html',
  styleUrl: './btn-excluir.component.css'
})
export class BtnExcluirComponent {
  @Input() idProduto!: number;

  constructor(private produtoService: ProdutoService){}

  excluirProduto(idProduto:number){

    this.produtoService.excluirProduto(idProduto).subscribe(
      (resposta) =>{
        console.log('Produto excluído com sucesso', resposta)
      },
      (erro) => {
        console.error('Erro ao excluir produto', erro)
      }
    )
  }
}
