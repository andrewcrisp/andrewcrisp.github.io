import { Separator } from "@heroui/react";
import { jobs } from "../../data/resume_entries";
import Job from "./components/job";
import ContactBlock from "./components/contactBlock";
function Resume() {
  return (
    <main className="flex flex-col flex-1 w-full max-w-3xl items-center justify-between py-8 px-8 bg-white dark:bg-black dark:text-white sm:items-start">
      <ContactBlock />
      <h2>Experience</h2>
      <Separator />
      {jobs.sort().map((j) => (
        <Job jobEntry={j} key={j.index} />
      ))}
    </main>
  );
}

export default Resume;
