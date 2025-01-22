import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create_message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {

  }

  @Post()
  createMessage(@Body() body: CreateMessageDTO) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
