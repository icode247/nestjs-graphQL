import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { ObjectType, Field, InputType } from '@nestjs/graphql';
// import { UserEntity } from './user.entity';

@Entity()
export class BlogEntity {
    @Primary()
    id: number;
    @Column()
    title: string;
    @Column()
    content: string;

    //create a relationship with the user entity
    // // @ManyToOne(type => UserEntity, user => user.blogs)
    // user: UserEntity[]
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}