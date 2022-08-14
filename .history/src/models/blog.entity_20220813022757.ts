import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { UserEntity } from './user.entity';

@InputType()
@ObjectType()
@Entity()
export class BlogEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field()
    @Column()
    title: string;
    
    @Field()
    @Column()
    content: string;

    //create a relationship with the user entity
    @ManyToOne(type => UserEntity, user => user.blogs)
    user: UserEntity[];

    @Field()
    @CreateDateColumn()
    createdAt: Date;
    
    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}