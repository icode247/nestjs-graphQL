import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { BlogService } from './blog/blog.service';
import { BlogEntity } from './models/blog/blog.entity';
import { UserEntity } from './models/user/user.entity';
import { BlogResolver } from './models/blog/blog.resolver';
import { UserResolver } from './models/user/user.resolver';
import { UserService } from './user/user.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'blogs1',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([BlogEntity, UserEntity]),

  ],
  controllers: [AppController],
  providers: [AppService, BlogResolver, BlogService, UserService],
})
export class AppModule { }
