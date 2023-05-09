import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
@Controller('signup')
export class SignupController {
  constructor(
    private readonly signupService: SignupService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
