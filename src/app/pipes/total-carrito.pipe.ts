import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto.model';

@Pipe({
  name: 'totalCarrito',
  standalone: true
})
export class TotalCarritoPipe implements PipeTransform {
  transform = (productos: Producto[]): number => {
    if (!productos || productos.length === 0) return 0;
    return productos.reduce((total, p) => total + p.precio * p.cantidad, 0);
  };
}