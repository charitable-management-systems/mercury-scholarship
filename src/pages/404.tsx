import * as React from "react";
import { Link } from "gatsby";
import type { HeadFC } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as styles from "./index.module.css";

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>Page not found</title>
  </>
);

const NotFoundPage = () => (
  <>
    <Header showNav={false} />
    <main className={styles.notFound}>
      <h1>Page not found</h1>
      <p>
        That page does not exist.{" "}
        <Link to="/">Return to the scholarship page</Link>.
      </p>
    </main>
    <Footer />
  </>
);

export default NotFoundPage;
