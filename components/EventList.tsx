import type { eventData } from "../types/EventData";
type EventListProps = {
  list: eventData[];
};
import styles from '../styles/EventList.module.css'
import Event from "./Event";
function EventList({ list }: EventListProps) {
  return (
    <div className={styles.eventList}>
      {list.map((event, index) => (
        <Event key={index} event={event} />
      ))}
    </div>
  );
}
export default EventList;
