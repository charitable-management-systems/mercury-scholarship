import * as React from "react";
import Section from "../components/Section";
import { contact, programName } from "../content/site";

const Contact = () => (
  <Section id="contact" title="Contact Us">
    <p>
      <strong>{programName}</strong>
      {contact.address.map((line) => (
        <React.Fragment key={line}>
          <br />
          {line}
        </React.Fragment>
      ))}
    </p>
    <p>
      {contact.phone}
      <br />
      Fax: {contact.fax}
    </p>
    <p>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </p>
  </Section>
);

export default Contact;
