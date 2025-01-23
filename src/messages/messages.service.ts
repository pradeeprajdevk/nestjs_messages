import { Injectable } from '@nestjs/common';
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {
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