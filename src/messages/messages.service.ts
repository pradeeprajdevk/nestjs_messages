import { MessagesRepository } from "./messages.repository";

export class MessagesService {

  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // DONT DO THIS ON REAL APPS
    // USE DEPENDENCY INJECTION
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

}