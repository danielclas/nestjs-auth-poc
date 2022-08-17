import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/roles.enum';
import { RolesGuard } from 'src/roles/roles.guard';
import { PostCreateDTO } from './dtos/post.create.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllPosts(@Request() req) {
    return this.postService.getPosts(req.user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  @HttpCode(201)
  @Roles(Role.Admin)
  async createPost(@Request() req, @Body() body: PostCreateDTO) {
    return this.postService.createPost(body);
  }
}
