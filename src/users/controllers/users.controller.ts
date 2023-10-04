import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  public async createUser(@Body() body: UserDTO) {
    return await this.userService.createUser(body);
  }

  @Get('all')
  public async findAllUsers() {
    return await this.userService.findUsers();
  }
}
