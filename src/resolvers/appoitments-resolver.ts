import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointments-input";
import { Appointment } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/customer-model";

@Resolver(()=> Appointment)
export class AppointmentsResolver {
  
  @Query(()=> [Appointment])
  async appointments() {
    return [
      {
        startsAt: new Date(),
        endAt: new Date(),
      }
    ];
  }

  @Mutation(() => Appointment)
  async createAppointments(@Arg('data') data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endAt: data.endAt,
    }

    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment);

    return {
      name: "John Doe",
    }
  }
}