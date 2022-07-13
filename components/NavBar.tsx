import styles from "../styles/NavBar.module.css";
import { useRouter } from "next/router";
function NavBar() {
    const router=useRouter();
  return (
    <div className={styles.navBar}>
      <div onClick={()=>router.push('/')} className={styles.logo}>NEXT EVENTS</div>
      <div onClick={()=>{router.push('/events')}}>Browse All Events</div>
    </div>
  );
}
export default NavBar;
