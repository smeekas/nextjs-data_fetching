import type { eventData } from "../types/EventData";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Event.module.css";
type eventprops = {
  event: eventData;
};
function Event({ event }: eventprops) {
  const router = useRouter();
  return (
    <div className={styles.event}>
      <div className={styles.image}>
        {/* <img src={`../${event.image}`} alt={event.id} /> */}
        <Image
          src={`/${event?.image}`}
          width={100}
          height={100}
          alt=""
          layout="responsive"
        />
      </div>
      <div className={styles.eventInfo}>
        <h4>{event.title}</h4>
        <p>{event.date}</p>
        <p>{event.location}</p>
        <button
          onClick={() => router.push(`/events/${event.id}`)}
          className={styles.button}
        >
          Explore
        </button>
      </div>
    </div>
  );
}
export default Event;
