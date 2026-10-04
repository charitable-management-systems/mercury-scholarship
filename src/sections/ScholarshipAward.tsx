import * as React from "react";
import Section from "../components/Section";
import { deadlineText } from "../content/site";

const ScholarshipAward = () => (
  <Section id="award" title="Scholarship Award">
    <p>
      Mercury University will award ten (10) scholarships of $5,000 each to
      eligible students enrolled in the Trade School Program. The deadline to
      submit your application is {deadlineText}. Completion of this application
      does not guarantee that you will receive a scholarship.
    </p>
  </Section>
);

export default ScholarshipAward;
