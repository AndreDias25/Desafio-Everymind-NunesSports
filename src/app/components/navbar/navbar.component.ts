import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor() {}

  srcImageDark: string = "https://slvqfnsrcvvepqeebzvg.supabase.co/storage/v1/object/public/Photos/logo_dark.png";

  srcImage: string = "https://slvqfnsrcvvepqeebzvg.supabase.co/storage/v1/object/public/Photos/Logo_Final.png";

  isDarkMode: boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode();
  }

  private applyDarkMode() {
    if (this.isDarkMode) {
      // Aplicar lógica para adicionar a classe dark ao documento ou ao componente principal
      document.documentElement.classList.add('dark');
    } else {
      // Aplicar lógica para remover a classe dark do documento ou do componente principal
      document.documentElement.classList.remove('dark');
    }
  }
}
