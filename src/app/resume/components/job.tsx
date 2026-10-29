import { JobEntry } from "@/src/data/resume_entries";
import { Card, Separator } from "@heroui/react";
import "./jobs.css";

export default function Job({ jobEntry }: { jobEntry: JobEntry }) {
  return (
    <div className="flex flex-col gap-1">
      <Card variant="secondary">
        <p className="font-bold">Responsibilities</p>
        <ul>
          {jobEntry.responsibilities.map((r) => {
            return (
              <li className={"jobResponsibility"} key={r.index}>
                {r.responsibility}
              </li>
            );
          })}
        </ul>
      </Card>

      <Card variant="secondary">
        <p className="font-bold">Accomplishments</p>
        <ul>
          {jobEntry.accomplishments &&
            jobEntry.accomplishments!.sort().map((a) => {
              return (
                <li className="jobAccomplishment" key={a.index}>
                  {a.accomplishment}
                </li>
              );
            })}
        </ul>
      </Card>
    </div>
  );
}
