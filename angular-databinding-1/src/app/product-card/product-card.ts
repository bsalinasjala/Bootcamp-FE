import { Component, input } from '@angular/core';
import { Product } from '../models/product';
import { ProductCard } from '../models/productCard';

function productTransformToCard(product: Product): ProductCard {
  return {
    id: product.id,
    name: product.title,
    price: product.price,
    explanation: product.description,
    image: product.image,
  };
}

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {
  product = input.required<ProductCard, Product>({
    transform: productTransformToCard,
  });
}
