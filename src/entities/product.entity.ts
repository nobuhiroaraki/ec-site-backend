import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  discountPercentage: number;
  @Column()
  rating: number;
  @Column()
  stock: number;
  @Column()
  brand: string;
  @Column()
  category: string;
}
