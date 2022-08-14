import { ObjectType ,Field, ID, M} from "@nestjs/graphql";
import { UserEntity } from "../user/user.entity";

@ObjectType()
export class BlogType {
    @Field(() => ID)
    id: number;

    @Field()
    title: string;

    @Field()
    content: string;

    //relationship with the user entity
    @Field(() => UserEntity)
    user: UserEntity[]

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}