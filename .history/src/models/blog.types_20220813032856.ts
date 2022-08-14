import { ObjectType ,Field, ID} from "@nestjs/graphql";

@ObjectType()
export class BlogEntity {
    @Field(() => ID)
    id: number;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}