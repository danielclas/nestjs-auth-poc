import { Injectable } from "@nestjs/common";
import { BaseEntity, Column } from "typeorm";

@Injectable()
export class User extends BaseEntity {
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column({ default: true })
    isActive: boolean;
}
