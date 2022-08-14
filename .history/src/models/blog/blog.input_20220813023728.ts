import { Field, InputType } from 'type-graphql'

@InputType()
export class inputBlog {
    @Field()
    title: string;
    
    @Field()
    content: string;
}