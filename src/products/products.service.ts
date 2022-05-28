import { ProductRepository } from './product.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
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

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return await this.productRepository.createProduct(createProductDto);
  }

  async updateStockNum(id: string, updateNum: number): Promise<Product> {
    const product = await this.findById(id);
    product.stock = product.stock + updateNum;
    await this.productRepository.save(product);
    return product;
  }

  async delete(id: string): Promise<void> {
    await this.productRepository.delete({ id });
  }
}
