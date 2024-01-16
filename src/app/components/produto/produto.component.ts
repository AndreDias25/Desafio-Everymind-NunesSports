import { Component, Input } from '@angular/core';
import { BtnEditarComponent } from '../btn-editar/btn-editar.component';
import { BtnExcluirComponent } from '../btn-excluir/btn-excluir.component';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [BtnEditarComponent, BtnExcluirComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
    @Input() idProduto!: number;
    @Input() codigoProduto!: number;
    @Input() nomeProduto!: string;
    @Input() descricaoProduto!: string;
    @Input() precoProduto!: number;
    @Input() dataProduto!: string;
}
