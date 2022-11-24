import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {
  @Field()
  customId: string;

  @Field()
  startsAt: Date;

  @Field()
  endAt: Date;
}