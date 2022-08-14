import { Field, InputType } from 'type-graphql'


class inputBlog {
    @Field()
    title: string;
    
    @Field()
    content: string;
}