import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ResumenCarritoComponent } from './components/resumen-carrito/resumen-carrito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaProductosComponent, ResumenCarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly title = signal('pruebas_angular');
}