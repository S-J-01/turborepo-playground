import Image from "next/image";
import { Button } from "@repo/ui/button";
import Signup from "@repo/ui/Signup"
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Signup/>
    </div>
  );
}
