import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') productTitle: string,
    @Body('price') productPrice: number
  ): any {
    const generatedId = this.productsService.insertProduct(productTitle, productPrice);

    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts()
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getProductById(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('price') prodPrice: number
  ) {

  }

}