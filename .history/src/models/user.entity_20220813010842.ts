import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import {BLogModel} from '../blog/blog.model';
@ObjectType()
@Entity()
export class UserEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field()
    @Column()
    name: string;
    
    @Field()
    @Column()
    email: string;
    
    @Field()
    @Column()
    password: string;
    
    @Field()
    @CreateDateColumn()
    createdAt: Date;
    
    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}