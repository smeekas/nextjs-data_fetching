import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useContext, createContext } from "react";
import type { eventData } from "../types/EventData";
import NavBar from "../components/NavBar";
import Head from "next/head";
const DUMMY_DATA: eventData[] = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/extrovert-event.jpg",
    isFeatured: true,
  },
];
type contextType = {
  data: eventData[];
};
export const eventContext = createContext<contextType>({ data: DUMMY_DATA });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <eventContext.Provider value={{ data: DUMMY_DATA }}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* default description */}
        <meta name="description" content="nextJS events built with nextJS !!" />
        {/* default title */}
        <title>nextJS max</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </eventContext.Provider>
  );
}

export default MyApp;
