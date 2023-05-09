import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SignupModule } from './signup/signup.module';

@Module({
  imports: [UsersModule, SignupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
