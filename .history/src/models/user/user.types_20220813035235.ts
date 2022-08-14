import { ObjectType ,Field, ID} from "@nestjs/graphql";
import { BlogEntity } from "../blog/blog.entity";

@ObjectType()
export class BlogType {
    @Field(() => ID)
    id: number;

    @Field()
    title: string;

    @Field()
    content: string;

    //relationship with the user entity
    @Field(() => BlogEntity)
    user: UserEntity[]

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}