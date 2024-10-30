import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

interface Product {
  id: number;
  name: string;
  price: number;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'iPhone 12', price: 1200 },
  { id: 2, name: 'Galaxy Z4', price: 1100 },
  { id: 3, name: 'Galaxy Tab', price: 600 },
  { id: 4, name: 'iPad', price: 200 }
];

@Component({
  selector: 'app-signal-ejemplo6',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './signal-ejemplo6.component.html',
  styleUrl: './signal-ejemplo6.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalEjemplo6Component {
  products = signal(PRODUCTS);

  cart = signal<Product[]>([]);

  totalPrice = computed(() => {
    return this.cart().reduce((acc, curr) => acc + curr.price, 0);
  });

  selectedProductsIds = computed(() => {
    return this.cart().map((product) => product.id);
  });

  addToCart(product: Product) {
    this.cart.update((products) => {
      return [...products, product];
    });
  }

  removeFromCart(product: Product) {
    this.cart.update((products) => {
      return products.filter((pro) => pro.id !== product.id);
    });
  }
}
