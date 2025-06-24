import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div>Changes made using SSH</div>
      <div>
        4th div added. This branch is based on main branch. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Veniam assumenda quidem
        asperiores ipsa. Alias illum, adipisci quis, sit delectus nihil
        doloremque beatae maiores nisi enim iusto ipsum cupiditate officia
        provident.
      </div>
    </div>
  );
}
