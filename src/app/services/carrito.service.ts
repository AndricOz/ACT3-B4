import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoSubject = new BehaviorSubject<Producto[]>([]);

  carrito$: Observable<Producto[]> = this.carritoSubject.asObservable();

  private obtenerCarritoActual = (): Producto[] => this.carritoSubject.getValue();

  agregarProducto = (producto: Producto): void => {
    const carritoActual = this.obtenerCarritoActual();
    const existente = carritoActual.find(p => p.id === producto.id);

    if (existente) {
      const carritoActualizado = carritoActual.map(p =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + producto.cantidad } : p
      );
      this.carritoSubject.next(carritoActualizado);
    } else {
      this.carritoSubject.next([...carritoActual, producto]);
    }
  };

  cambiarCantidad = (id: number, cantidad: number): void => {
    if (cantidad <= 0) {
      this.eliminarProducto(id);
      return;
    }
    const carritoActualizado = this.obtenerCarritoActual().map(p =>
      p.id === id ? { ...p, cantidad } : p
    );
    this.carritoSubject.next(carritoActualizado);
  };

  eliminarProducto = (id: number): void => {
    const carritoActualizado = this.obtenerCarritoActual().filter(p => p.id !== id);
    this.carritoSubject.next(carritoActualizado);
  };

  vaciarCarrito = (): void => {
    this.carritoSubject.next([]);
  };
}