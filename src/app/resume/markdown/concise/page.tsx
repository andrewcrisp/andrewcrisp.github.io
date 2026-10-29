import { jobs } from "@/src/data/resume_entries";
import Education from "../education";
import Certificates from "../certificates";
import Contact from "../contact";
import Experience from "./experience";
import { educationEntries } from "@/src/data/education_entries";
import { CertificateEntries } from "@/src/data/certificate_entries";

export default function concise() {
  return (
    <main className="flex flex-col flex-1 w-full max-w-3xl items-center justify-between py-8 px-8 bg-white dark:bg-black dark:text-white sm:items-start">
      <Contact />
      <br />
      <Experience jobs={jobs} />
      <br />
      <Education educationEntries={educationEntries} />
      <br />
      <Certificates certificates={CertificateEntries} />
    </main>
  );
}
