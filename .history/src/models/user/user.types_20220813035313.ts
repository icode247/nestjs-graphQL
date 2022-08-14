import { ObjectType ,Field, ID} from "@nestjs/graphql";
import { BlogEntity } from "../blog/blog.entity";

@ObjectType()
export class UserT {
    @Field(() => ID)
    id: number;

    @Field()
    title: string;

    @Field()
    content: string;

    //relationship with the user entity
    @Field(() => BlogEntity)
    user: BlogEntity[]

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}