import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { ErrorManager } from 'src/utils/error.manager';
// import { error } from 'console';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: Repository<UsersEntity>) {}

  public async createUser(body: UserDTO): Promise<UsersEntity> {
    try {
      const user = await this.userRepository.save(body);

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findUsers(): Promise<UsersEntity[]> {
    try {
      const users: UsersEntity[] = await this.userRepository.find();

      if (users.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontró resultado...!',
        });
      }
      return users;
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message);
    }
  }

  public async findUserById(id: number): Promise<UsersEntity> {
    try {
      const user: UsersEntity = await this.userRepository
        .createQueryBuilder('user')
        .where({ id })
        .getOne();

      if (!user) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No se encontró resultado...!',
        });
      }
      return user;
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message);
    }

    public async updateUser(
      body: UserUpdateDTO,
      id: number,
    ): Promise<UpdateResult | undefined> {
      try {
        const user: UpdateResult = await this.userRepository.update(id, body);
  
        if (user.affected === 0) {
          throw new ErrorManager({
            type: 'BAD_REQUEST',
            message: 'No se pudo actualizar...!',
          });
        }
        return user;
      } catch (error) {
        throw new ErrorManager.createSignatureError(error.message);
      }
    }
  
    public async deleteUser(id: number): Promise<DeleteResult | undefined> {
      try {
        const user: DeleteResult = await this.userRepository.delete(id);
  
        if (user.affected === 0) {
          throw new ErrorManager({
            type: 'BAD_REQUEST',
            message: 'No se pudo eliminar...!',
          });
        }
        return user;
      } catch (error) {
        throw new ErrorManager.createSignatureError(error.message);
      }
    }  
  }


}
