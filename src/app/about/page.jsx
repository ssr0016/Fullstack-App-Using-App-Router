import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experience
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptatibus iure eveniet culpa quas exercitationem sed consequuntur
            temporibus praesentium asperiores nam, ipsa iste cupiditate dicta
            <br />
            <br />
            sapiente et cum dolorem odio fugit doloremque ea vero. Praesentium
            sint sed distinctio, eos eveniet, doloribus tempora vitae iure unde
            eum fugit! Iste, voluptatibus libero!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We do?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            architecto itaque, in consequuntur sed voluptates nihil laudantium
            esse ad et sapiente quisquam quidem quaerat a? Natus itaque tenetur
            rerum culpa odio repellat accusantium esse quibusdam accusamus
            praesentium, debitis tempora molestiae,
            possimus distinctio adipisci magnam quam animi dolores quia,
            officiis sit.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
