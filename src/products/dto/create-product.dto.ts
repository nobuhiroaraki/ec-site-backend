import { Type } from 'class-transformer';
import { IsString, IsNumber, IsNotEmpty, IsInt, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Type(() => Number)
  price: number;

  @IsInt()
  @Type(() => Number)
  discountPercentage: number;

  @IsInt()
  @Type(() => Number)
  rating: number;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  stock: number;

  @IsString()
  brand: string;

  @IsString()
  category: string;
}
