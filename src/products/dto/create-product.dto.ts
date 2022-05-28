import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNumber()
  discountPercentage: number;
  @IsNumber()
  rating: number;
  @IsNumber()
  @IsNotEmpty()
  stock: number;
  @IsString()
  brand: string;
  @IsString()
  category: string;
}
