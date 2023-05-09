import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const accouunts: {
  user_id: string;
  password: string;
  nickname: string;
  comment: string;
}[] = [
  {
    user_id: 'TaroYamada',
    password: 'PaSSwd4TY',
    nickname: 'たろー',
    comment: '僕は元気です',
  },
];

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    accouunts.push({
      user_id: createUserDto.user_id,
      password: createUserDto.password,
      nickname: createUserDto.user_id,
      comment: '僕は元気です',
    });
    return createUserDto;
  }

  findAll() {
    return accouunts;
  }

  findOne(id: string) {
    for (let i = 0; i < accouunts.length; i++) {
      if (accouunts[i].user_id === id) {
        return accouunts[i];
      }
    }
    throw new Error('User not found');
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    for (let i = 0; i < accouunts.length; i++) {
      if (accouunts[i].user_id === id) {
        accouunts[i].password = updateUserDto.password;
        accouunts[i].nickname = updateUserDto.nickname;
        accouunts[i].comment = updateUserDto.comment;
        return accouunts[i];
      }
    }
    return;
  }

  remove(id: string) {
    for (let i = 0; i < accouunts.length; i++) {
      if (accouunts[i].user_id === id) {
        accouunts.splice(i, 1);
      }
    }
    return;
  }
}
