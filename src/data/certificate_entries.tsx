export type CertificateEntry = {
  index: number;
  institution: string;
  certificate: string;
  dateGranted: Date | undefined;
};

export const CertificateEntries: CertificateEntry[] = [
  {
    index: 0,
    institution: "Comptia",
    certificate: "A+",
    dateGranted: undefined,
  },
  {
    index: 1,
    institution: "Comptia",
    certificate: "Project+",
    dateGranted: undefined,
  },
  {
    index: 2,
    institution: "Comptia",
    certificate: "Network+",
    dateGranted: undefined,
  },
  {
    index: 3,
    institution: "CIW",
    certificate: "Data Analyst",
    dateGranted: undefined,
  },
  {
    index: 4,
    institution: "CIW",
    certificate: "Site Development Associate",
    dateGranted: undefined,
  },
  {
    index: 5,
    institution: "Udacity",
    certificate: "Data Analyst",
    dateGranted: undefined,
  },
  {
    index: 6,
    institution: "Oracle",
    certificate: "Database 12c Administrator Associate",
    dateGranted: undefined,
  },
  {
    index: 7,
    institution: "ITIL",
    certificate: "Foundations",
    dateGranted: undefined,
  },
  {
    index: 8,
    institution: "FCC",
    certificate: "Amateur Radio General License",
    dateGranted: undefined,
  },
];
