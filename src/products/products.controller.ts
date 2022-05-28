import { ProductsService } from './products.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  //商品一覧ページ表示時
  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  //商品詳細ページ表示時
  @Get(':id') //idをpathとして受け取る(:を入れると可変にできる)ParseUUIDPipeでidをuuidに変換
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Product> {
    return await this.productsService.findById(id);
  }

  //商品登録時
  //ログインしないとできないようにする
  @Post()
  create() {
    return;
  }

  //商品数の更新時
  //createしたユーザーだけ行えるようにする
  @Patch()
  async updateStockNum(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('updateNum', ParseIntPipe) updateNum: number,
  ): Promise<Product> {
    return await this.productsService.updateStockNum(id, updateNum);
  }

  //商品削除時
  //createしたユーザーだけ行えるようにする
  @Delete()
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.productsService.delete(id);
  }
}
