import { Controller, Post, Body } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDto } from "./productDto";

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {

    }

    @Post()
    addProduct(
        @Body() product: ProductDto

    ) {
        const generatedId = this.productService.insertProduct(product)
        return { id: generatedId }


    }

}