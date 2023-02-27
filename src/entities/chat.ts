import { Entity, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn, ManyToMany } from "typeorm"
import { Message } from "./message"
import { User } from "./user"

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[]

  @ManyToMany(() => User, (user) => user.chats)
  users: User[]
}
