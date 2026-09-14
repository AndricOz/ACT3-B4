import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-productos.component.html'
})
export class ListaProductosComponent {
  productosDisponibles: Producto[] = [
    { id: 1, nombre: 'Teclado mecánico', precio: 250, cantidad: 1 },
    { id: 2, nombre: 'Mouse inalámbrico', precio: 120, cantidad: 1 },
    { id: 3, nombre: 'Monitor 24"', precio: 950, cantidad: 1 },
    { id: 4, nombre: 'Audífonos', precio: 180, cantidad: 1 }
  ];

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito = (producto: Producto): void => {
    this.carritoService.agregarProducto({ ...producto });
  };
}