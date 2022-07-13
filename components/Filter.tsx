import { useRef } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Filter.module.css";
function FilterBar() {
  const router = useRouter();

  const monthRef = useRef<HTMLSelectElement>(null);
  const yearRef = useRef<HTMLSelectElement>(null);
  const findHandler = () => {
    router.push(
      `/events/${yearRef?.current?.value}/${
        Number(monthRef?.current?.value!) + 1
      }`
    );
    // console.log();
    // console.log();
  };
  return (
    <div className={styles.filter}>
      <div>
        <label htmlFor="year">Year: </label>
        <select ref={yearRef} id="year">
          <option value={"2021"}>2021</option>
          <option value={"2022"}>2022</option>
        </select>
      </div>
      <div>
        <label htmlFor="month">Month: </label>
        <select ref={monthRef} id="month">
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
      </div>
      <div>
        <button onClick={findHandler}>Find</button>
      </div>
    </div>
  );
}
export default FilterBar;
