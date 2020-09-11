import { Product } from './product.model';
import { SimpleDataSource } from './datasource.model';

export class ProductRepository{
  private products: Product[];
  private dataSource: SimpleDataSource;

  constructor(){
    this.products = new Array<Product>();
    this.dataSource = new SimpleDataSource();
    this.dataSource.getProducts().forEach(p => this.products.push(p));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsById(id): Product{
    return this.products.find(p => p.id === id);
  }
}
