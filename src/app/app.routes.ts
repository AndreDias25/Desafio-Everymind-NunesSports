import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ServicoComponent } from './components/servico/servico.component';

export const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent },
  { path: 'servicos', component: ServicoComponent},
  { path: 'inicio', component: InicioComponent }
];
