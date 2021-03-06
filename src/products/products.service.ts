import { ProductRepository } from './product.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { v4 as uuid } from 'uuid';
import { User } from 'src/entities/user.entity';

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

  async create(
    createProductDto: CreateProductDto,
    user: User,
  ): Promise<Product> {
    return await this.productRepository.createProduct(createProductDto, user);
  }

  async updateStockNum(id: string, updateNum: number): Promise<Product> {
    const product = await this.findById(id);
    product.stock = product.stock + updateNum;
    await this.productRepository.save(product);
    return product;
  }

  async delete(id: string, user: User): Promise<void> {
    const product = await this.findById(id);
    if (product.userId !== user.id) {
      throw new BadRequestException('削除できるのは自分の商品だけです');
    }
    await this.productRepository.delete({ id });
  }
}
