import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class UserType {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}