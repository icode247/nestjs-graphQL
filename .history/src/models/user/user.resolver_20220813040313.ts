import Use
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { UserEntity } from "./user.entity";
import { UserType } from "./user.types";



@Resolver(of => UserEntity)
export class UserResolver {
    constructor(
        @Inject(BlogService) private readonly blogService: BlogService,
    ) { }

    @Query(returns => String)
    async hello() {
        return 'Hello World!';
    }

  
    
}