import { ObjectType ,Field, ID} from "@nestjs/graphql";

@ObjectType()
@Entity()
export class BlogEntity {
    @Field((type) => ID)
    id: number;

    @Field()
    @Column()
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