import { Chat } from "../../../entities/chat";
import ApplicationSerializer from "../../../lib/serializer";

class ChatSerializer extends ApplicationSerializer {
  constructor(chat: Chat) {
    super(chat);
    this.setAttributes(['users', 'lastMessage', 'isGroup', 'messages']);
  }
}

export default ChatSerializer;

