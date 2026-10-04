import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { deadlineText } from "../content/site";
import ApplyButton from "./ApplyButton";
import * as styles from "./Hero.module.css";

const Hero = () => (
  <div className={styles.hero} id="top">
    <div className={styles.media}>
      <StaticImage
        src="../images/hero.jpg"
        alt="Two technicians mounting a Mercury outboard engine on a boat in a workshop"
        layout="fullWidth"
        loading="eager"
        placeholder="dominantColor"
        objectPosition="62% 40%"
        style={{ position: "absolute", inset: 0 }}
      />
    </div>
    <div className={styles.shade} />
    <div className={styles.text}>
      <p className={styles.eyebrow}>Trade School Program</p>
      <h1 className={styles.title}>
        Mercury University
        <br />
        Scholarship Program
      </h1>
      <p className={styles.lede}>
        Ten $5,000 scholarships for students enrolled in the Mercury University
        Trade School Program.
      </p>
      <ApplyButton />
    </div>
    <dl className={styles.stats}>
      <div>
        <dt>Scholarships</dt>
        <dd>10</dd>
      </div>
      <div>
        <dt>Each award</dt>
        <dd>$5,000</dd>
      </div>
      <div>
        <dt>Deadline</dt>
        <dd className={styles.deadline}>{deadlineText}</dd>
      </div>
    </dl>
  </div>
);

export default Hero;
