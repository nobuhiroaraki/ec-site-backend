import { ProductsService } from './products.service';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { User } from 'src/entities/user.entity';

@Controller('products')
@UseInterceptors(ClassSerializerInterceptor)
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
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createProductDto: CreateProductDto,
    @GetUser() user: User,
  ): Promise<Product> {
    return await this.productsService.create(createProductDto, user);
  }

  //商品数の更新時
  //createしたユーザーだけ行えるようにする
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateStockNum(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('updateNum', ParseIntPipe) updateNum: number,
  ): Promise<Product> {
    return await this.productsService.updateStockNum(id, updateNum);
  }

  //商品削除時
  //createしたユーザーだけ行えるようにする
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
    @GetUser() user: User,
  ): Promise<void> {
    await this.productsService.delete(id, user);
  }
}
