import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async createProduct(
    createProductDto: CreateProductDto,
    user: User,
  ): Promise<Product> {
    const {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
    } = createProductDto;
    const product = this.create({
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      user,
    });
    await this.save(product);
    return product;
  }
}
