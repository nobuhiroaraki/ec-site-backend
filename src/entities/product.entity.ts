import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

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
  @ManyToOne(() => User, (user) => user.products)
  user: User;
  @Column()
  userId: string;
}
