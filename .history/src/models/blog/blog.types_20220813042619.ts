import { ObjectType ,Field, ID} from "@nestjs/graphql";
import { UserEntity } from "../user/user.entity";
import { ManyToOne } from "typeorm";

@ObjectType()
export class BlogType {
    @Field(() => ID)
    id: number;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    userId: number;

    @Field(ty)
    createdAt: Date;

    @Field()
    updatedAt: Date;
}