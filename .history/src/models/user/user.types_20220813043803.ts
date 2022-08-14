import { ObjectType ,Field, ID} from "@nestjs/graphql";
import { BlogEntity } from "../blog/blog.entity";

@ObjectType()
export class UserType {
    @Field(() => ID)
    id: number;

    @Field()
    name : string;

    @Field()
    content: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}