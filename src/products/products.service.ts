import { ProductRepository } from './product.repository';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  findById() {
    return;
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
