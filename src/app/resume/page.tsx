import { Accordion, AccordionItem, Separator } from "@heroui/react";
import { jobs } from "../../data/resume_entries";
import Job from "./components/job";
import Contact from "./components/contact";
import { ChevronDown } from "@gravity-ui/icons";
import Experience from "./components/experience";
import Education from "./components/education";
import { educationEntries } from "@/src/data/education_entries";
import Certificates from "./components/certificates";
import { CertificateEntries } from "@/src/data/certificate_entries";
function Resume() {
  return (
    <main className="flex flex-col flex-1 w-full max-w-3xl items-center justify-between py-8 px-8 bg-white sm:items-start">
      <Contact />
      <Experience jobs={jobs} />
      <Education educationEntries={educationEntries} />
      <Certificates certificates={CertificateEntries} />
    </main>
  );
}

export default Resume;
