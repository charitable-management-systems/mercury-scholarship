import * as React from "react";
import * as styles from "./Section.module.css";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const Section = ({ id, title, children }: SectionProps) => (
  <section className={styles.section} id={id} aria-labelledby={`${id}-title`}>
    <h2 className={styles.title} id={`${id}-title`}>
      {title}
    </h2>
    <div className={styles.body}>{children}</div>
  </section>
);

export default Section;
