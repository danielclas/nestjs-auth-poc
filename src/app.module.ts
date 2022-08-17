import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { PostModule } from './post/post.module';
import { PostController } from './post/post.controller';

@Module({
  imports: [UserModule, AuthModule, PostModule],
  controllers: [AuthController, PostController],
})
export class AppModule {}
