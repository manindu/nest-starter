import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, price: number) {
    const id = Math.random().toString();
    const newProduct = new Product(id, title, price);

    this.products.push(newProduct);

    return id;
  }

  updateProduct(id: string, title?: string, price?: number) {
    const product = this.products.find(product => product.id === id);

    if(!product) {
      throw new NotFoundException('Could not find product');
    }
  }

  getAllProducts() {
    return [...this.products];
  }

  getProductById(id: string) {
    const product = this.products.find(product => product.id === id);

    if(!product) {
      throw new NotFoundException('Could not find product');
    }
    return { ...product };
  }
}