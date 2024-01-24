import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient){}

  private apiUrl = 'https://slvqfnsrcvvepqeebzvg.supabase.co/rest/v1/Produtos';

  private apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsdnFmbnNyY3Z2ZXBxZWVienZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMzQ4MDksImV4cCI6MjAyMDkxMDgwOX0.hhbOobqxI6EzJsdNkVYiutfKQOLL6MxnqNqMDjy7o2M';

  buscarDados(): Observable<any>{
    const headers = {
      'Content-Type': 'application/json',
      'apikey': this.apiKey
    }

    return this.httpClient.get(this.apiUrl, {headers});
  }

  private dadosAtualizados = new Subject<void>();

  getDadosAtualizadosObservable(): Observable<void> {
    return this.dadosAtualizados.asObservable();
  }

  adicionarProduto(produto: any): Observable<any>{
    const headers = {
      'Content-Type': 'application/json',
      'apikey': this.apiKey
    }

    return this.httpClient.post(this.apiUrl, produto, {headers})
  }

  editarProduto(produto:any, idProduto:number): Observable<any>{
    const headers = {
      'Content-Type': 'application/json',
      'apikey': this.apiKey
    }

    console.log(`${idProduto}`);
    console.log(produto)
    return this.httpClient.patch(`https://slvqfnsrcvvepqeebzvg.supabase.co/rest/v1/Produtos?idProduto=eq.${idProduto}`, produto, {headers})
    .pipe(tap(() => this.dadosAtualizados.next())); // Emite um novo valor no Subject após a edição
  }

  excluirProduto(idProduto:number): Observable<any>{
    const headers = {
      'Content-Type': 'application/json',
      'apikey': this.apiKey
    }

    return this.httpClient.delete(`https://slvqfnsrcvvepqeebzvg.supabase.co/rest/v1/Produtos?idProduto=eq.${idProduto}`, {headers})
    .pipe(tap(() => this.dadosAtualizados.next())); // Emite um novo valor no Subject após a exclusão
  }

}
