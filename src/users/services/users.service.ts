import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getTest(): string {
    return 'This is a test...';
  }
}
