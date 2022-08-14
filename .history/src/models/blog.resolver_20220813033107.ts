import { BlogService } from "src/blog/blog.service";
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { BlogEntity } from 'src/models/blog.entity';
import { BlogType } from "./blog.types";



@Resolver(of => BlogEntity)
export class BlogResolver {
    constructor(
        @Inject(BlogService) private readonly blogService: BlogService,
    ) { }
    
    @Query(returns => String)
    async hello() {
        return 'Hello World!';
    }

    @Mutation(returns => BlogType)
    async createBlog(
        @Args('title') title: string,
        @Args('content') content: string,
    ) {
}