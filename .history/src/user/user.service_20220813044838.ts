import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async findOne(id: number): Promise<UserEntity> {
        return await this.userRepository.findOne({ where: { id } });
    }

    async create(name: string, email: string, password:string): Promise<UserEntity> {
        return await this.userRepository.save({ name, email, p});
    }

    async update(id: number, name: string, email: string): Promise<UserEntity> {
        await this.userRepository.update(id, { name, email });
        return await this.userRepository.findOne({ where: { id } });
    }

    async delete(id: number): Promise<UserEntity> {
        const user = await this.userRepository.findOne({ where: { id } });
        await this.userRepository.delete(id);
        return user;
    }
}