import { useContext } from "react";
import EventList from "../../components/EventList";
import FilterBar from "../../components/Filter";
import { eventContext } from "../_app";
import Head from "next/head";
function Index() {
  const eventCtx = useContext(eventContext);

  return (
    <>
      <Head>
        <title>All events</title>
        <meta name="description" content="find a lot of cool useless events!" />
      </Head>
      <div>
        <FilterBar />
        <EventList list={eventCtx.data} />
      </div>
    </>
  );
}
export default Index;
