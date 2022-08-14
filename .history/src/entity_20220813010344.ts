import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { InvoiceModel } from '../invoice/invoice.model';
@ObjectType()
@Entity()
export class BlogEntity {
  
}