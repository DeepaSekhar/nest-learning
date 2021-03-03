import { Injectable } from "@nestjs/common";
import { Product } from './product.model'
import { ProductDto } from "./productDto";


@Injectable()
export class ProductService {
    products: Product[] = [];

    //add a new product
    insertProduct(productDto: ProductDto): void {
        const prodId = new Date().toString();
        const newProduct = new Product(prodId, title, desc, price)
        this.products.push(newProduct);
    }


}