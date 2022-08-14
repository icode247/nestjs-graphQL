import { Field, ObjectType} from 'type-graphql'

@ObjectType()
export class BlogDto {
    @Field()
    id: number;
    
    @Field()
    
    title: string;
    
    @Field()
    content: string;
    
    @Field()
    createdAt: Date;
    
    @Field()
    updatedAt: Date;
}