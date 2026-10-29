import { JobEntry } from "@/src/data/resume_entries";
import { Accordion, Separator } from "@heroui/react";
import Job from "./job";
import { ChevronDown } from "@gravity-ui/icons";

export default function Experience({ jobs }: { jobs: JobEntry[] }) {
  return (
    <div className="min-w-full">
      <p>## Experience</p>
      {jobs.sort().map((j) => {
        return (
          <div className="flex flex-col" key={j.index}>
            <span>### {j.title}</span>
            <span>{j.employer}\</span>
            <span>{j.location}\</span>
            <p>
              {j.startdate.toLocaleDateString()} -{" "}
              {j.enddate ? j.enddate.toLocaleDateString() : "Present"}
            </p>
            <Job jobEntry={j} key={j.index} />
          </div>
        );
      })}
    </div>
  );
}
