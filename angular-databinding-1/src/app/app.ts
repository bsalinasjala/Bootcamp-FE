import { Component, signal } from '@angular/core';

import { Counter } from './counter/counter';
import { JsonViewer } from './json-viewer/json-viewer';
import { ProductCardComponent } from './product-card/product-card';

import { Product } from './models/product';
import { productList } from './mocks/productList';

@Component({
  selector: 'app-root',
  imports: [Counter, JsonViewer, ProductCardComponent],
  templateUrl: './app.html',
})
export class App {
  initialCount = 18;

  userData = {
    id: 1,
    name: 'Bruno',
    email: 'bruno@test.com',
    active: true,
    role: 'Frontend Student',
    loginCount: 7,
  };

  products = signal<Product[]>([...productList]);
}
