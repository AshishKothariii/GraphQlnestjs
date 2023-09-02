import { Resolver, Query, Args } from '@nestjs/graphql';
import { MessageSchema } from './message.schema';
import { MessageService } from './message.service';

@Resolver((of) => MessageSchema)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}
  @Query((returns) => [MessageSchema], { name: 'MessageById' })
  getbyid(@Args('FromId') FromId: string, @Args('ToId') ToId: string) {
    return this.messageService.getbyid(FromId, ToId);
  }
}
