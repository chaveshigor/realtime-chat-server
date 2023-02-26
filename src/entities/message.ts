import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Chat } from "./chat"
import { User } from "./user"

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Chat, (chat) => chat.messages)
  chat: Chat

  @ManyToOne(() => User, (user) => user.messages)
  user: User
}
