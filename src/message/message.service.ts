import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MessageService {
  //Inject user repo
  constructor(
    @InjectRepository(Message)
    private readonly MessageRepository: Repository<Message>,
  ) {}
  async create(messag: JSON): Promise<Message> {
    const message: Message = new Message();
    message.FromId = messag['FromId'];
    message.ToId = messag['ToId'];
    message.text = messag['text'];
    return this.MessageRepository.save(message);
  }
  async getbyid(FromId: string, ToId: string): Promise<Message[]> {
    let result = await this.MessageRepository.find({
      where: { FromId: FromId, ToId: ToId },
    });
    return result;
  }
}
