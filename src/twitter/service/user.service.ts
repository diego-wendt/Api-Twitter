import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUser: CreateUserDto) {
    const user = this.userRepository.create();
    user.name = createUser.name;
    user.user = createUser.user;
    user.email = createUser.email;
    user.photoUrl = createUser.photoUrl;
    const savedUser = await this.userRepository.save(user);
    return savedUser;
  }
}
