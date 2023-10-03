import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt: Date;
}
