import { Entity, Column, OneToMany, ManyToMany, JoinTable, PrimaryGeneratedColumn, Unique } from "typeorm"
import { Chat } from "./chat"
import { Message } from "./message"

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({name: 'username'})
  username: string

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[]

  @ManyToMany(() => Chat)
  @JoinTable()
  chats: Chat[]
}
