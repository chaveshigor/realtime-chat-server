import { Entity, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn, ManyToMany, Column, OneToOne, JoinColumn } from "typeorm"
import { Message } from "./message"
import { User } from "./user"

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Message)
  @JoinColumn()
  lastMessage: Message

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[]

  @ManyToMany(() => User, (user) => user.chats)
  users: User[]
}
