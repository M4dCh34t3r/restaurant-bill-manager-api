import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('BillItem')
export class BillItem {

  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  price: number;

}
