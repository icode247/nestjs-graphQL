import { BlogService } from "src/blog/blog.service";
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { BlogEntity } from 'src/models/blog.entity';

@Resolver(of => BlogEntity)
export class BlogResolver {
    constructor(
      private readonly blogService: BlogService,
    ) { }
    @Query(()=>[BlogEntity])
    async blogs() {
        return await this.blogService.findAll();
    }
   
}