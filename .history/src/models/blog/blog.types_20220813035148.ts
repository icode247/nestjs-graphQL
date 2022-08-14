import { ObjectType ,Field, ID} from "@nestjs/graphql";

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
    

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}