import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"
import { Message } from "./message"

@Entity()
export class Chat {
  @PrimaryColumn()
  id: string

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[]
}
