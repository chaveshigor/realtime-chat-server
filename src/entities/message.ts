import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm"
import { Chat } from "./chat"
import { User } from "./user"

@Entity()
export class Message {
  @PrimaryColumn()
  id: string

  @ManyToOne(() => Chat, (chat) => chat.messages)
  chat: Chat

  @ManyToOne(() => User, (user) => user.messages)
  user: User
}
