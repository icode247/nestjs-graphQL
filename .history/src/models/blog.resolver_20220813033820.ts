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
        const blog = await this.blogService.create(title, content);
        return blog
    }

    @Query(returns => [BlogType])
    async getBlogs() {
        return await this.blogService.findAll();
    }

    @Query(returns => BlogType)
    async getBlog(@Args('id') id: number) {
        return await this.blogService.findOne(id);
    }

    @Mutation(returns => BlogType)
    async updateBlog(
        @Args('id') id: number,
        @Args('title') title: string,
        @Args('content') content: string,
    ) {
        return await this.blogService.update(id, { title, content });
    }
    @Mutation(returns => BlogType)
    async deleteBlog(@Args('id') id: number) {
}