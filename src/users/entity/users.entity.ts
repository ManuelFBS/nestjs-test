import { BaseEntity } from '../../config/base.entity';
import { IUser } from 'src/interfaces/user.interface';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  dniced: number;
}
