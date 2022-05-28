import { ProductsService } from './products.service';
import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  //商品一覧ページ表示時
  @Get()
  findAll() {
    return;
  }

  //商品詳細ページ表示時
  @Get()
  findById() {
    return;
  }

  //商品登録時
  //ログインしないとできないようにする
  @Post()
  create() {
    return;
  }

  //商品情報の更新時(まずは購入ボタン押下時にstockから引く？)
  //createしたユーザーだけ行えるようにする
  @Patch()
  update() {
    return;
  }

  //商品削除時
  //createしたユーザーだけ行えるようにする
  @Delete()
  delete() {
    return;
  }
}
