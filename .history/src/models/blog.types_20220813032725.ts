import { ObjectType ,Field, ID} from "@nestjs/graphql";

@ObjectType()
@Entity()
export class BlogEntity {
    @Field(() => )
    id: number;

    @Field()
    title: string;

    @Field()
    @Column()
    content: string;

    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}