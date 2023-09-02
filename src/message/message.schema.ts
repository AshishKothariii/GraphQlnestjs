import { Field, ObjectType, Int } from '@nestjs/graphql';
@ObjectType()
export class MessageSchema {
  @Field((type) => Int)
  id: number;
  @Field()
  FromId: String;
  @Field()
  ToId: String;
  @Field()
  text: String;
}
