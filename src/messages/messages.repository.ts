import { Injectable } from "@nestjs/common";

import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
    return true;
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }
}