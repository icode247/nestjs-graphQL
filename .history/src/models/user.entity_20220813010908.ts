import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BlogEntity } from './blog.entity';

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
    
    //create a relationship with the blog entity
    @OneToMany(type => BlogEntity, blog => blog.user)
    blogs: BlogEntity[];

    @Field()
    @CreateDateColumn()
    createdAt: Date;
    
    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}