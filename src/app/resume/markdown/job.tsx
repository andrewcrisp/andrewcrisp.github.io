import { JobEntry } from "@/src/data/resume_entries";
import { Card, Separator } from "@heroui/react";
import "./jobs.css";

export default function Job({ jobEntry }: { jobEntry: JobEntry }) {
  return (
    <div className="flex flex-col gap-1">
      <p>#### Responsibilities</p>
      {jobEntry.responsibilities.map((r) => {
        return <span>- {r.responsibility}</span>;
      })}

      <p>#### Accomplishments</p>
      {jobEntry.accomplishments &&
        jobEntry.accomplishments!.sort().map((a) => {
          return <span>- {a.accomplishment}</span>;
        })}
    </div>
  );
}
