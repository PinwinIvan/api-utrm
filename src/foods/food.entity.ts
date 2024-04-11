import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Food {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    descripcion: string;
    @Column()
    image: string;
    @Column()
    category: string;
    @Column()
    price: number;
}
