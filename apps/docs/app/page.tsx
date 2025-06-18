import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      Changes made using SSH
      <div>
        Extra div added in branch one. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Illum architecto possimus ipsa dolor minima excepturi,
        exercitationem esse fugiat maxime voluptatibus dolorum enim magni
        mollitia, error totam eligendi vitae ab quam.
      </div>
    </div>
  );
}
