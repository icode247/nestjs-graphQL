import { ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class BlogEntity {
    @Field()
    id: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    content: string;

    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}