import * as React from "react";
import { APPLY_URL } from "../content/site";
import * as styles from "./ApplyButton.module.css";

const ApplyButton = ({ onClick }: { onClick?: () => void }) =>
  APPLY_URL ? (
    <a className={styles.button} href={APPLY_URL} onClick={onClick}>
      Apply
    </a>
  ) : (
    <span className={`${styles.button} ${styles.disabled}`}>
      Applications opening soon
    </span>
  );

export default ApplyButton;
