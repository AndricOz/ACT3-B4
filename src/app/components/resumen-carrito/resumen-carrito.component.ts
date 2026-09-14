import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../models/producto.model';
import { SubtotalPipe } from '../../pipes/subtotal.pipe';
import { TotalCarritoPipe } from '../../pipes/total-carrito.pipe';

@Component({
  selector: 'app-resumen-carrito',
  standalone: true,
  imports: [CommonModule, SubtotalPipe, TotalCarritoPipe],
  templateUrl: './resumen-carrito.component.html'
})
export class ResumenCarritoComponent {
  private carritoService = inject(CarritoService);

  carrito$: Observable<Producto[]> = this.carritoService.carrito$;

  cambiarCantidad = (id: number, cantidad: number): void => {
    this.carritoService.cambiarCantidad(id, cantidad);
  };

  eliminarProducto = (id: number): void => {
    this.carritoService.eliminarProducto(id);
  };
}