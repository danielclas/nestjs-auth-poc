import { Injectable } from '@nestjs/common';
import { Role } from 'src/roles/roles.enum';

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      roles: [Role.User],
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      roles: [Role.Admin],
    },
  ];

  async findOne(username: string): Promise<any | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
