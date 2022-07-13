import { useRouter } from "next/router";
import { useContext } from "react";
import EventList from "../../components/EventList";
import { eventContext } from "../_app";
import styles from "../../styles/CatchAll.module.css";
import { GetServerSidePropsContext } from "next";
import { getAllData } from "../../utils/api-util";
import { eventData } from "../../types/EventData";
import Head from "next/head";

type EventSlugProps = {
  events: eventData[];
  numYear: number;
  numMonth: number;
};
function EventSlug({ events: list, numMonth, numYear }: EventSlugProps) {
  const router = useRouter();
  if (!list) {
    return <h2 className={styles.error}>Wrong filter values</h2>;
  }
  return (
    <>
      <Head>
        <title>All events {`${numMonth}/${numYear}`}</title>
        <meta
          name="description"
          content={`All events for ${numMonth} ${numYear}`}
        />
      </Head>
      <div>
        {list.length === 0 && (
          <h2 className={styles.error}>
            No events found. adjust filter values
          </h2>
        )}
        {list.length > 0 && <EventList list={list} />}
      </div>
    </>
  );
}
export default EventSlug;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const filterData = params!.slug;
  const filteredYear = filterData![0];
  const filteredMonth = filterData![1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  const allEvents = await getAllData();
  const filteredEvent = allEvents.filter((e) => {
    const dateObj = new Date(e.date);

    // console.log(date && date[0]);
    // if (date) {
    // console.log(object);/
    return (
      dateObj.getFullYear() === numYear && dateObj.getMonth() === numMonth - 1
    );
    // }
  });

  if (!filteredEvent) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: {
      events: filteredEvent,
      numYear,
      numMonth,
    },
  };
}
