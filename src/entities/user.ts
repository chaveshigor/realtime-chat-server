import { Entity, Column, PrimaryColumn, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Chat } from "./chat"
import { Message } from "./message"

@Entity()
export class User {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  username: string

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[]

  @ManyToMany(() => Chat)
  @JoinTable()
  chats: Chat[]
}
