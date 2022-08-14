import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { ObjectType, Field, InputType } from '@nestjs/graphql';
// import { UserEntity } from './user.entity';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    //create a relationship with the user entity
    
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
}