import { Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Message } from "./message"

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[]
}
