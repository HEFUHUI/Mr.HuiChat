import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { hashSync } from 'bcrypt'

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid",{comment:"用户ID"})
    id: number;

    @Column({comment:"用户名"})
    userName:string

    @Column({comment:"用户密码",transformer:{
        from:val=>val,to:val=> hashSync(val,10)
    }})
    password:string

    @Column({comment:"用户年龄"})
    age: number;

}
