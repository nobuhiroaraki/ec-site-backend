import { ProductRepository } from './product.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findById(id: string): Promise<Product> {
    const foundProduct = await this.productRepository.findOne(id);
    if (!foundProduct) {
      throw new NotFoundException();
    }
    return foundProduct;
  }

  create() {
    return;
  }

  update() {
    return;
  }

  delete() {
    return;
  }
}
