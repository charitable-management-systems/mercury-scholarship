import * as React from "react";
import logo from "../assets/logo-white.svg";
import { contact, programName } from "../content/site";
import * as styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <img src={logo} alt="Mercury University" width={239} height={54} />
    <p>
      {programName} | {contact.address.join(" | ")} |{" "}
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </p>
  </footer>
);

export default Footer;
