import { Controller, Post, Body } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {

    }
    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
    ) {
        const generatedId = this.productService.insertProduct
            (prodTitle,
                prodDesc,
                prodPrice)
        return { id: generatedId }


    }

}