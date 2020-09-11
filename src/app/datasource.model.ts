import { Product } from './product.model';

export class SimpleDataSource {
  private products: Product[];

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Samsung", "Computer", "1.jpg", 10000),
      new Product(2, "Samsung", "Computer", "2.jpg", 2000),
      new Product(3, "Samsung", "Computer", "3.jpg", 5000),
      new Product(4, "Samsung", "Computer", "4.jpg", 9000),
    );
  }

  getProducts(): Product[] {
    return this.products;
  }


}
