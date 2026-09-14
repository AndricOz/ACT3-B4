DOCUMENTACION


El servicio es la única fuente de verdad del carrito: ahí se guarda la lista de productos, y expone un "aviso automático" (Observable) que las pantallas escuchan.

Cuando agregas, quitas o cambias la cantidad de algo, la pantalla no hace el cálculo ni guarda nada — solo le dice al servicio "haz este cambio". El servicio actualiza la lista y manda el aviso, y cualquier pantalla suscrita se refresca sola, sin que nadie tenga que refrescar nada a mano.

Los pipes son mini-calculadoras usadas directo en el HTML: subtotal multiplica precio × cantidad de cada producto, y totalCarrito suma todo el carrito. Así los números siempre se ven actualizados sin tener que calcularlos en el código del componente.