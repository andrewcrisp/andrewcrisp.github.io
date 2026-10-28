import { Separator } from "@heroui/react";
import {jobs} from "../../data/resume_entries";
import Job from "./job";
function Resume() {
  return (
    <main className="flex flex-col flex-1 w-full max-w-3xl items-center justify-between py-8 px-8 bg-white dark:bg-black sm:items-start">
      <h2>Experience</h2>
      <Separator />
      {jobs.map((j) => <Job jobEntry={j} key={j.employer + j.title}/>)}
    </main>
  );
}

export default Resume;
