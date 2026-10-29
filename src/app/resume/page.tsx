import { Accordion, AccordionItem, Separator } from "@heroui/react";
import { jobs } from "../../data/resume_entries";
import Job from "./components/job";
import ContactBlock from "./components/contactBlock";
import { ChevronDown } from "@gravity-ui/icons";
import Experience from "./components/experience";
import Education from "./components/education";
import { educationEntries } from "@/src/data/education_entries";
function Resume() {
  return (
    <main className="flex flex-col flex-1 w-full max-w-3xl items-center justify-between py-8 px-8 bg-white dark:bg-black dark:text-white sm:items-start">
      <ContactBlock />
      <Experience jobs={jobs} />
      <Education educationEntries={educationEntries} />
    </main>
  );
}

export default Resume;
