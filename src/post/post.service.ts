import { Injectable } from '@nestjs/common';
import { Role } from 'src/roles/roles.enum';

@Injectable()
export class PostService {
  private readonly posts = [
    {
      content: 'This is a classified post',
      isClassified: true,
    },
    {
      content: 'This is not a classified post',
      isClassified: false,
    },
  ];

  getPosts(user: any) {
    return this.posts.filter((post) =>
      user.role === Role.Admin ? true : !post.isClassified,
    );
  }

  createPost(post) {
    this.posts.push(post);
  }
}
