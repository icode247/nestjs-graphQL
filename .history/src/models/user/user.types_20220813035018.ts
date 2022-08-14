import { ObjectType ,Field, ID} from "@nestjs/graphql";
import { UserEntity } from '../user/user.entity';
@ObjectType()
export class BlogType {
    @Field(() => ID)
    id: number;

    @Field()
    title: string;

    @Field()
    content: string;

    //relationship with the user entity
    @Field(() => UserType)
    user: UserType;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}