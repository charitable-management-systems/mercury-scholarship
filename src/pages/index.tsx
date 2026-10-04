import * as React from "react";
import type { HeadFC } from "gatsby";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HowToApply from "../sections/HowToApply";
import ScholarshipAward from "../sections/ScholarshipAward";
import Eligibility from "../sections/Eligibility";
import Rules from "../sections/Rules";
import SelectionCriteria from "../sections/SelectionCriteria";
import ImportantNotes from "../sections/ImportantNotes";
import Contact from "../sections/Contact";
import { programName } from "../content/site";
import * as styles from "./index.module.css";

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>{programName}</title>
    <meta
      name="description"
      content="Mercury University awards ten $5,000 scholarships to eligible students enrolled in the Trade School Program."
    />
  </>
);

const IndexPage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <div className={styles.column}>
        <HowToApply />
        <ScholarshipAward />
        <Eligibility />
        <Rules />
        <SelectionCriteria />
        <ImportantNotes />
        <Contact />
      </div>
    </main>
    <Footer />
  </>
);

export default IndexPage;
