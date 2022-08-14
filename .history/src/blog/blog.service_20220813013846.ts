import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogEntity } from '../models/blog.entity';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(BlogEntity)
        private readonly blogRepository: Repository<BlogEntity>,
    ) {}
    
    async findAll(): Promise<BlogEntity[]> {
        return await this.blogRepository.find();
    }

    async findOne(id: number): Promise<BlogEntity> {
        return await this.blogRepository.findOne(id);
    }

    async create(blog: BlogEntity): Promise<BlogEntity> {
        return await this.blogRepository.save(blog);
    }

    async update(id: number, blog: BlogEntity): Promise<BlogEntity> {
        await this.blogRepository.update(id, blog);
        return await this.blogRepository.findOne(id);
    }

    async delete(id: number): Promise<BlogEntity> {
        const blog = await this.blogRepository.findOne(id);
        await this.blogRepository.delete(id);
        return blog;
    }
    
}
