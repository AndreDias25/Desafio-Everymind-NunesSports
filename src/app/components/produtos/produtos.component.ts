import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoService } from '../../services/produto.service';
import { BtnAdicionarComponent } from '../btn-adicionar/btn-adicionar.component';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';


@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, ProdutoComponent, BtnAdicionarComponent, FormsModule, FilterPipe],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit, OnDestroy {
  idDoProduto!: number;
  codigoDoProduto!: number;
  nomeDoProduto!: string;
  descricaoDoProduto!: string;
  precoDoProduto!: number;
  dataDoProduto!: string;

  dadosResgatados: any[] = [];
  termoBusca: string = '';

  private ngUnsubscribe = new Subject<void>();

  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void {
    this.produtoService.buscarDados().subscribe(
      (dados) => {
        this.dadosResgatados = dados;
      },
      (erro) => {
        console.error('Erro ao buscar dados do Supabase:', erro);
      }
    );

    // Inscreva-se no Observable de atualizações
    this.produtoService.getDadosAtualizadosObservable()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        // Atualize os dados quando uma atualização for recebida
        this.produtoService.buscarDados().subscribe(
          (dados) => {
            this.dadosResgatados = dados;
          },
          (erro) => {
            console.error('Erro ao buscar dados do Supabase:', erro);
          }
        );
      });
  }

  ngOnDestroy(): void {
    // Encerre a inscrição ao destruir o componente
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
