import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/roles/roles.guard';

@Module({
  providers: [PostService],
  controllers: [PostController],
  exports: [PostService],
})
export class PostModule {}
