import EventDetail from "../../components/EventDetail";
import { useRouter } from "next/router";
import { useContext } from "react";
import { eventContext } from "../_app";
import { GetStaticPropsContext } from "next";
import { getAllData } from "../../utils/api-util";
import { eventData } from "../../types/EventData";
import Head from "next/head";
type eventpageProps = {
  eventData: eventData;
};
function EventPage({ eventData }: eventpageProps) {
  const router = useRouter();
  console.log(eventData);
  if (!eventData) {
    // router.replace("/404");
  }
  if (router.isFallback) {
    return <h2>LOading...</h2>;
  }
  // const eventCtx = useContext(eventContext);
  // const eventData = eventCtx.data.find((e) => e.id === router.query.eventId);
  return (
    <>
      <Head>
        {/* <title>{eventData.title}</title> */}
        <meta name="description" content="find a lot of cool useless events!" />
      </Head>
      <div>
        <EventDetail eventData={eventData!} />
      </div>
    </>
  );
}
export default EventPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  console.log(params!.eventId);
  const AllEventData = await getAllData();
  const event = AllEventData.find((event) => event.id === params!.eventId);
  console.log("static Props");

  if (!event) {
    // return {
    //   redirect: {
    //     destination: "/",
    //   },
    // };
  }
  return {
    props: {
      eventData: event,
    },
  };
}
export async function getStaticPaths() {
  console.log("static paths");
  return {
    paths: [
      { params: { eventId: "e1" } },
      // { params: { eventId: "e2" } },
      { params: { eventId: "e3" } },
    ],
    fallback: false,
  };
}
