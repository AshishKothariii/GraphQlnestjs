import { Module } from '@nestjs/common';
import { MyGateway } from './gateway';
import { MessageService } from 'src/message/message.service';
import { MessageModule } from 'src/message/message.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/message/entities/message.entity';

@Module({
  imports: [MessageModule, TypeOrmModule.forFeature([Message])],
  providers: [MyGateway, MessageService],
})
export class GatewayModule {}
