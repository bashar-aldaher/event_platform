import EventForm from "@/components/event/EventForm";
import useGetData from "@/hooks/useGetData";
import { getEventById } from "@/lib/actions/event.action";
import { auth } from "@clerk/nextjs/server";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvent = async ({ params }: UpdateEventProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  // const { data, isLoading } = useGetData(() => getEventById(id));
  const event = await getEventById(params.id);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm
          userId={userId}
          type="Update"
          event={event}
          eventId={event._id}
        />
      </div>
    </>
  );
};

export default UpdateEvent;
