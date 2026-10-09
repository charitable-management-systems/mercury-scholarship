// Everything that changes from year to year lives here.

// Application portal. Set to null to show a disabled "Applications opening
// soon" label instead of the Apply buttons.
export const APPLY_URL: string | null =
  "https://apply.mercuryuniversityscholarships.com/application/login";

// Set to the deadline as it should read on the page, e.g. "March 16, 2027".
// While null, the site says "to be announced".
export const DEADLINE: string | null = null;

export const deadlineText = DEADLINE ?? "to be announced";

export const programName = "Mercury University Scholarship Program";

export const contact = {
  address: ["PO Box 648", "Naperville, IL 60566"],
  phone: "630.428.2412",
  fax: "630.428.2695",
  email: "info@mercuryuniversityscholarships.com",
};

export const navItems = [
  { title: "How To Apply", id: "how-to-apply" },
  { title: "Award", id: "award" },
  { title: "Eligibility", id: "eligibility" },
  { title: "Rules", id: "rules" },
  { title: "Selection", id: "selection-criteria" },
  { title: "Contact", id: "contact" },
];
