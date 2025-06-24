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
      <div>
        2nd div added in branch two. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolorem odit quasi at distinctio autem ut modi
        deserunt officiis magni maiores pariatur illo aspernatur eveniet
        inventore, porro error soluta sit laudantium?
      </div>
      <div>
        3rd div added.based on branch two so first 2 div are here. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Eaque eum libero
        perspiciatis atque corrupti architecto adipisci et! Sunt cumque minus
        praesentium. Similique officiis optio repudiandae neque voluptates nulla
        nam dignissimos.
      </div>
    </div>
  );
}
