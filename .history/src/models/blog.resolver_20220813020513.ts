import { BlogService } from "src/blog/blog.service";
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { BlogEntity } from 'src/models/blog.entity';

type 
@Resolver(of => BlogEntity)
export class BlogResolver {
    constructor(
        @Inject(BlogService) private readonly blogService: BlogService,
    ) { }
    @Query(returns => Author)
    async author(@Args('id', { type: () => Int }) id: number) {
      return this.authorsService.findOneById(id);
    }
    // @Query(returns => [BlogEntity])
    // async blogs(): Promise<BlogEntity[]> {
    //     return await this.blogService.findAll();
    // }
    // @Query(returns => BlogEntity)
    // async blog(@Args('id') id: number): Promise<BlogEntity> {
    //     return await this.blogService.findOne(id);
    // }

    // @Mutation(returns => BlogEntity)
    // async createBlog(@Args('blog') blog: BlogEntity): Promise<BlogEntity> {
    //     return await this.blogService.create(blog);
    // }
    // @Mutation(returns => BlogEntity)
    // async updateBlog(@Args('id') id: number, @Args('blog') blog: BlogEntity): Promise<BlogEntity> {
    //     return await this.blogService.update(id, blog);
    // }
    // @Mutation(returns => BlogEntity)
    // async deleteBlog(@Args('id') id: number): Promise<BlogEntity> {
    //     return await this.blogService.delete(id);
    // }
}