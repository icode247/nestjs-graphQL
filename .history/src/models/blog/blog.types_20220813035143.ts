import { ObjectType ,Field, ID} from "@nestjs/graphql";

@ObjectType()
export class BlogType {
    @Field(() => ID)
    id: number;

    @Field()
    title: string;

    @Field()
    content: string;

    

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}