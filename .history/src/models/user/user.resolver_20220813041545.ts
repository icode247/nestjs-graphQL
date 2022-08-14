import { UserService } from 'src/user/user.service';
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { UserEntity } from "./user.entity";
import { UserType } from "./user.types";



@Resolver(of => UserEntity)
export class UserResolver {
    constructor(
        @Inject(UserService) private readonly blogService: UserService,
    ) { }

    @Query(returns => String)
    async hello() {
        return 'Hello World!';
    }

    @Mutation(returns => UserType)
    async createUser(
        @Args('name') name: string,
        @Args('email') email: string,
    ) {
        const user = await this.blogService.create(name, email);
        return user
    }

    @Query(returns => [UserType])
    async getUsers() {
        return await this.blogService.findAll();
    }

    @Query(returns => UserType)
    async getUser(@Args('id') id: number) {
        return await this.blogService.findOne(id);
    }

    @Mutation(returns => UserType)
    async updateUser(
        



  
    
}