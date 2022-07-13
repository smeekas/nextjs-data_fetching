import Head from "next/head";
import { useContext } from "react";
import fs from "fs/promises";
import type { eventData } from "../types/EventData";
import path from "path";
import EventList from "../components/EventList";
import { eventContext } from "./_app";
import { getAllData } from "../utils/api-util";
type IndexProps = {
  featuredproduct: eventData[];
};
function Index({ featuredproduct }: IndexProps) {
  const eventCtx = useContext(eventContext);
  return (
    <>
    <Head>
      <title>NextJS Events</title>
      <meta name="description" content="find a lot of cool useless events!"/>
    </Head>
    <div>
      {/* <EventList list={eventCtx.data.filter((e) => e.isFeatured)} /> */}
      <EventList list={featuredproduct} />
    </div>
    </>
  );
}

export async function getStaticProps() {
  // const filePath = path.join(process.cwd(), "data", "backend.json");
  // const jsonData = await fs.readFile(filePath);
  // const data: eventData[] = JSON.parse(jsonData.toString());
  const data = await getAllData();
  const featuredProduct = data.filter((item: eventData) => item.isFeatured);
  return {
    props: {
      featuredproduct: featuredProduct,
    },
  };
}
export default Index;
