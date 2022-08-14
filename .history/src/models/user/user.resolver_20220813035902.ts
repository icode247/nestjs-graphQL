import { BlogService } from "src/blog/blog.service";
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

import { UserType } from "./user.types";



@Resolver(of => BlogEntity)
export class BlogResolver {
    constructor(
        @Inject(BlogService) private readonly blogService: BlogService,
    ) { }

    @Query(returns => String)
    async hello() {
        return 'Hello World!';
    }

    @Mutation(returns => UserType)
    async createBlog(
        @Args('title') title: string,
        @Args('content') content: string, 
    ) {
        const blog = await this.blogService.create(title, content);
        return blog
    }

    @Query(returns => [UserType])
    async getBlogs() {
        return await this.blogService.findAll();
    }

    @Query(returns => UserType)
    async getBlog(@Args('id') id: number) {
        return await this.blogService.findOne(id);
    }

    @Mutation(returns => UserType)
    async updateBlog(
        @Args('id') id: number,
        @Args('title') title: string,
        @Args('content') content: string,
    ) {
        return await this.blogService.update(id, title, content);
    }
    @Mutation(returns => UserType)
    async deleteBlog(@Args('id') id: number) {
        return await this.blogService.delete(id);
    }
    
}