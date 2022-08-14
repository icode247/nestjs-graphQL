import { Field, InputType } from 'type-graphql'

@InputType()
class inputBlog {
    @Field()
    title: string;
    
    @Field()
    content: string;
}