import { BlogService } from "src/blog/blog.service";
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { BlogEntity } from 'src/models/blog/blog.entity';
import { BlogDto } from "./blog.dto";
import { inputBlog } from "./blog.input";

@Resolver(of => BlogEntity)
export class BlogResolver {
    constructor(
        @Inject(BlogService) private readonly blogService: BlogService,
    ) { }
    
    @F(()=>[BlogDto])
    async getAllBlogs(): Promise<BlogEntity[]> {
        return await this.blogService.findAll();
    }

    @Mutation(()=>BlogDto)
    async createBlog(@Args('input') input: BlogEntity): Promise<BlogEntity> {
        return await this.blogService.create(input);
    }
}