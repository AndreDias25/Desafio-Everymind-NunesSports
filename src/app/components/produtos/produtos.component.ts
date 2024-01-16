import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoService } from '../../services/produto.service';
import { BtnAdicionarComponent } from '../btn-adicionar/btn-adicionar.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, ProdutoComponent, BtnAdicionarComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  idDoProduto!: number;
  codigoDoProduto!: number;
  nomeDoProduto!: string;
  descricaoDoProduto!: string;
  precoDoProduto!: number;
  dataDoProduto!: string;

  dadosResgatados: any[] = [];

  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void {
    this.produtoService.buscarDados().subscribe(
      (dados) => {
        this.dadosResgatados = dados;
        //console.log("Dados do supa", this.dadosResgatados)
      },
      (erro) => {
        console.error('Erro ao buscar dados do Supabase:', erro);
      }
    )
  }
}
