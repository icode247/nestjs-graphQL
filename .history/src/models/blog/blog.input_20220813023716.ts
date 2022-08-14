import { Field, InputType } from 'type-graphql'

@in
class inputBlog {
    @Field()
    title: string;
    
    @Field()
    content: string;
}