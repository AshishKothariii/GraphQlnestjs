import {
  WebSocketGateway,
  MessageBody,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessageService } from 'src/message/message.service';
@WebSocketGateway()
export class MyGateway {
  constructor(private readonly messageService: MessageService) {}

  @WebSocketServer()
  server: Server;
  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
    });
  }
  @SubscribeMessage('newMessage')
  async onNewMessage(@MessageBody() body: JSON) {
    console.log('hello');
    const FromId = body['FromId'];
    const ToId = body['ToId'];
    const text = body['text'];
    const result = await this.messageService.create(body);
    console.log(result['id']);
    return this.server.emit('onMessage', {
      message: text,
      From: FromId,
    });
  }
}
