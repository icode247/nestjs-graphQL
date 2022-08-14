import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserEntity } from './user.entity';

@ObjectType()
@Entity()
export class BlogEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field()
    @Column()
    title: string;
    
    @Field()
    @Column()
    content: string;

    //create a relationship with the user entity
    @OneToMany(type => UserEntity, user => user.blogs)
    user: UserEntity[];

    @Field()
    @CreateDateColumn()
    createdAt: Date;
    
    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}