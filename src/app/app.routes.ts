import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

export const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent },
  { path: '', component: InicioComponent }
];
